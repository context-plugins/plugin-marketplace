import { SchemaError } from "../validation/schema-error.js";
import type { WebhookRequest } from "./webhook-request.js";

export function readWebhookBody(request: WebhookRequest): Record<string, unknown> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(request.body));
  } catch (cause) {
    throw new SchemaError("A webhook body must be UTF-8 JSON.", cause);
  }
  if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new SchemaError("A webhook body must be a JSON object.");
  }
  return parsed as Record<string, unknown>;
}
