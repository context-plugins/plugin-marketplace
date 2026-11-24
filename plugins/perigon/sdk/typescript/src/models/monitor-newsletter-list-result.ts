import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalNewsletterDtoSchema, type SignalNewsletterDto } from "./signal-newsletter-dto.js";

/** Paginated list of monitor newsletters. */
export type MonitorNewsletterListResult = {
  /** Total number of matching newsletters across all pages. */
  total: number;
  /** Newsletters returned for the requested page. */
  data: SignalNewsletterDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorNewsletterListResultSchema: Schema<MonitorNewsletterListResult> =
  s.object<MonitorNewsletterListResult>(
    {
      total: s.int(),
      data: s.array(s.lazy(() => signalNewsletterDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
