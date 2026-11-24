import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { proxyCountryCodeSchema, type ProxyCountryCode } from "../proxy-country-code.js";

/** Country code for proxy location. Defaults to US. Set to null to disable proxy. */
export type ProxyCountryCode1 = ProxyCountryCode;

export const proxyCountryCode1Schema: Schema<ProxyCountryCode1> = s.of<ProxyCountryCode1>(
  s.union([s.lazy(() => proxyCountryCodeSchema)]),
);
