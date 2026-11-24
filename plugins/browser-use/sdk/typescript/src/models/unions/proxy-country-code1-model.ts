import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { proxyCountryCodeSchema, type ProxyCountryCode } from "../proxy-country-code.js";

/**
 * ISO country code to proxy the browser through. Defaults to US. Pass null to run without a proxy.
 */
export type ProxyCountryCode1Model = ProxyCountryCode;

export const proxyCountryCode1ModelSchema: Schema<ProxyCountryCode1Model> = s.of<ProxyCountryCode1Model>(
  s.union([s.lazy(() => proxyCountryCodeSchema)]),
);
