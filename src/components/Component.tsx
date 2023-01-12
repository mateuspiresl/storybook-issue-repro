import { useMemo } from "react";

class ReferenceProvider {
  value: string;

  constructor(value = "default") {
    this.value = value;
  }

  get reference() {
    return this.value;
  }
}

export function Component() {
  const provider = useMemo(() => new ReferenceProvider(), []);

  return <div>{provider.reference}</div>;
}
