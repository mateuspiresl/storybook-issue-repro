import { useMemo } from "react";

class ReferenceProvider {
  constructor(private value = "default") {}

  get reference() {
    return this.value;
  }
}

export function Component() {
  const provider = useMemo(() => new ReferenceProvider(), []);

  return <div>{provider.reference}</div>;
}
