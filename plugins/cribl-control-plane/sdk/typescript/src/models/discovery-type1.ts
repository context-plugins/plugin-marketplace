import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Target discovery mechanism. Use static to manually enter a list of targets. */
export const DiscoveryType1 = {
  Static: "static",
  Dns: "dns",
  Ec2: "ec2",
  K8SNode: "k8s-node",
  K8SPods: "k8s-pods",
  K8SServiceMonitor: "k8s-service-monitor",
  HttpSd: "http_sd",
} as const;
export type DiscoveryType1 = (typeof DiscoveryType1)[keyof typeof DiscoveryType1] | (string & {});

export const discoveryType1Schema: EnumSchema<DiscoveryType1> = s.enumOf<DiscoveryType1>(DiscoveryType1);
