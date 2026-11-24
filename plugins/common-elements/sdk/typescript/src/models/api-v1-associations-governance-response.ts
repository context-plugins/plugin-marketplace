import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumCommonelementsComAssociationResourcesApiSchema,
  type DatumCommonelementsComAssociationResourcesApi,
} from "./datum-commonelements-com-association-resources-api.js";

export type ApiV1AssociationsGovernanceResponse = {
  /** @default "True" */
  ok?: "True";
  data: DatumCommonelementsComAssociationResourcesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AssociationsGovernanceResponseSchema: Schema<ApiV1AssociationsGovernanceResponse> =
  s.object<ApiV1AssociationsGovernanceResponse>(
    {
      ok: s.defaulted(s.literal("True"), "True"),
      data: s.array(s.lazy(() => datumCommonelementsComAssociationResourcesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
