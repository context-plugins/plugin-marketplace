import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { artifact1Schema, type Artifact1 } from "./artifact1.js";
import { classification1Schema, type Classification1 } from "./classification1.js";
import { destination1Schema, type Destination1 } from "./destination1.js";
import { recipientScopeSchema, type RecipientScope } from "./recipient-scope.js";
import { riskSchema, type Risk } from "./risk.js";

export type Scope = {
  destination: Destination1 | null;
  recipientScope: RecipientScope | null;
  classification: Classification1 | null;
  risk: Risk | null;
  artifact: Artifact1 | null;
  digest: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scopeSchema: Schema<Scope> = s.object<Scope>(
  {
    destination: s.nullable(s.lazy(() => destination1Schema)),
    recipientScope: s.nullable(s.lazy(() => recipientScopeSchema)),
    classification: s.nullable(s.lazy(() => classification1Schema)),
    risk: s.nullable(s.lazy(() => riskSchema)),
    artifact: s.nullable(s.lazy(() => artifact1Schema)),
    digest: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
