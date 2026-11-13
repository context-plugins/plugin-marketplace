import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateGenericIntegration = {
  webhookUrl: string;
  secret?: string;
};

const createGenericIntegrationProperties: s.Shape<CreateGenericIntegration> = {
  webhookUrl: s.string(),
  secret: s.optional(s.string()),
  _keysMap: {
    webhookUrl: "webhook_url",
  },
};

export const createGenericIntegrationInternalSchema: Schema<CreateGenericIntegration> =
  s.object<CreateGenericIntegration>(createGenericIntegrationProperties);

export const createGenericIntegrationSchema: Schema<CreateGenericIntegration> = s.lazySchema(() =>
  s.object<CreateGenericIntegration>({
    ...createGenericIntegrationProperties,
    webhookUrl: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    secret: s.optional(s.string().check(s.minLength(1), s.maxLength(128))),
  }),
);
