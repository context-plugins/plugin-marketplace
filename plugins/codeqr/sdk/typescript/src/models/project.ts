import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainSchema, type Domain } from "./domain.js";
import { metadataSchema, type Metadata } from "./metadata.js";
import { planSchema, type Plan } from "./plan.js";
import { userSchema, type User } from "./user.js";

export type Project = {
  /** The unique ID of the project. */
  id: string;
  /** The name of the project. */
  name: string;
  /** The slug of the project. */
  slug: string;
  /** The logo of the project. */
  logo: string | null;
  /** The usage of the project. */
  usage: number;
  /** The usage limit of the project. */
  usageLimit: number;
  /** The links usage of the project. */
  linksUsage: number;
  /** The links limit of the project. */
  linksLimit: number;
  /** The domains limit of the project. */
  domainsLimit: number;
  /** The tags limit of the project. */
  tagsLimit: number;
  /** The users limit of the project. */
  usersLimit: number;
  /** The plan of the project. */
  plan: Plan;
  /** The Stripe ID of the project. */
  stripeId: string | null;
  /** The date and time when the billing cycle starts for the project. */
  billingCycleStart: number;
  /** [BETA]: The Stripe Connect ID of the project. */
  stripeConnectId: string | null;
  /** The date and time when the project was created. */
  createdAt: string;
  /** The role of the authenticated user in the project. */
  users: User[];
  /** The domains of the project. */
  domains: Domain[];
  metadata: Metadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectSchema: Schema<Project> = s.object<Project>(
  {
    id: s.string(),
    name: s.string(),
    slug: s.string(),
    logo: s.nullable(s.string()),
    usage: s.float64(),
    usageLimit: s.float64(),
    linksUsage: s.float64(),
    linksLimit: s.float64(),
    domainsLimit: s.float64(),
    tagsLimit: s.float64(),
    usersLimit: s.float64(),
    plan: planSchema,
    stripeId: s.nullable(s.string()),
    billingCycleStart: s.float64(),
    stripeConnectId: s.nullable(s.string()),
    createdAt: s.string(),
    users: s.array(s.lazy(() => userSchema)),
    domains: s.array(s.lazy(() => domainSchema)),
    metadata: metadataSchema,
  },
  { additionalProperties: s.json() },
);
