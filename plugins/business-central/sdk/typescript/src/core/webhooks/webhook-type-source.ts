import { SchemaError } from "../validation/schema-error.js";
import type { WebhookRequest } from "./webhook-request.js";

/**
 * Where a webhook group reads its event type from: the spec's `discriminator.propertyPointer`,
 * which names either a field of the JSON body or a request header.
 */
export type WebhookTypeSource =
  | {
      /** The type is a field of the body. */
      readonly kind: "body";
      /** The field's name. */
      readonly field: string;
    }
  | {
      /** The type is a request header. */
      readonly kind: "header";
      /** The header's name, matched without regard to case. */
      readonly name: string;
    };

/**
 * Reads the event type the source points at. A body field counts only when it is a JSON string;
 * a header counts when the request has it. Anything else throws `SchemaError`.
 */
export function resolveWebhookType(
  source: WebhookTypeSource,
  body: Readonly<Record<string, unknown>>,
  request: WebhookRequest,
): string {
  const value = source.kind === "header" ? request.header(source.name) : body[source.field];
  if (typeof value !== "string") {
    throw new SchemaError("Event body is missing the required discriminator.");
  }
  return value;
}
