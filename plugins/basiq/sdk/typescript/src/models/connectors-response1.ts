import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authorizationSchema, type Authorization } from "./authorization.js";
import { institutionSchema, type Institution } from "./institution.js";
import { links1Schema, type Links1 } from "./links1.js";
import { methodSchema, type Method } from "./method.js";
import { statsSchema, type Stats } from "./stats.js";

/** Connector contains connector data. */
export type ConnectorsResponse1 = {
  /**
   * Resource type identifier. It is always "connector" for this model. connector
   * ConnectorEntityType
   *
   * @default "connector"
   */
  type?: "connector";
  /** Institution ID */
  id: string;
  /** Current Connector method */
  method: Method;
  /** Current Connector stage */
  stage: string;
  /** FeatureCondition type that describes an feature status for institution */
  status: string;
  /** ConnectorInstitutionResource connector Institution resource type */
  institution: Institution;
  /** Connector scopes array */
  scopes: string[];
  authorization: Authorization;
  /** InstitutionPerformanceStats response type for institution performance stats */
  stats: Stats;
  /** ResourceLinks contains resource links */
  links?: Links1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const connectorsResponse1Properties: s.Shape<ConnectorsResponse1> = {
  type: s.defaulted(s.literal("connector"), "connector"),
  id: s.string(),
  method: methodSchema,
  stage: s.string(),
  status: s.string(),
  institution: institutionSchema,
  scopes: s.array(s.string()),
  authorization: authorizationSchema,
  stats: statsSchema,
  links: s.optional(s.lazy(() => links1Schema)),
};

export const connectorsResponse1InternalSchema: Schema<ConnectorsResponse1> = s.object<ConnectorsResponse1>(
  connectorsResponse1Properties,
  { additionalProperties: s.json() },
);

export const connectorsResponse1Schema: Schema<ConnectorsResponse1> = s.lazySchema(() =>
  s.object<ConnectorsResponse1>(
    {
      ...connectorsResponse1Properties,
      id: s.string().check(s.minLength(7), s.maxLength(7), s.pattern("^[A-Z]{2}[0-9]{5}$")),
    },
    { additionalProperties: s.json() },
  ),
);
