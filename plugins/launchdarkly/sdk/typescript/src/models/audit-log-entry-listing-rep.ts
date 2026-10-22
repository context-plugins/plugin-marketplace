import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authorizedAppDataRepSchema, type AuthorizedAppDataRep } from "./authorized-app-data-rep.js";
import { linkSchema, type Link } from "./link.js";
import { memberDataRepSchema, type MemberDataRep } from "./member-data-rep.js";
import { parentResourceRepSchema, type ParentResourceRep } from "./parent-resource-rep.js";
import { resourceAccessSchema, type ResourceAccess } from "./resource-access.js";
import { subjectDataRepSchema, type SubjectDataRep } from "./subject-data-rep.js";
import { targetResourceRepSchema, type TargetResourceRep } from "./target-resource-rep.js";
import { tokenSummarySchema, type TokenSummary } from "./token-summary.js";

export type AuditLogEntryListingRep = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The ID of the audit log entry */
  id: string;
  /** The ID of the account to which this audit log entry belongs */
  accountId: string;
  date: number;
  /** Details on the actions performed and resources acted on in this audit log entry */
  accesses: ResourceAccess[];
  kind: string;
  /** The name of the resource this audit log entry refers to */
  name: string;
  /** Description of the change recorded in the audit log entry */
  description: string;
  /** Shorter version of the change recorded in the audit log entry */
  shortDescription: string;
  /** Optional comment for the audit log entry */
  comment?: string;
  subject?: SubjectDataRep;
  member?: MemberDataRep;
  token?: TokenSummary;
  app?: AuthorizedAppDataRep;
  /** The action and resource recorded in this audit log entry */
  titleVerb?: string;
  /**
   * A description of what occurred, in the format <code>member</code> <code>titleVerb</code>
   * <code>target</code>
   */
  title?: string;
  target?: TargetResourceRep;
  parent?: ParentResourceRep;
};

export const auditLogEntryListingRepSchema: Schema<AuditLogEntryListingRep> =
  s.object<AuditLogEntryListingRep>({
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    id: s.string(),
    accountId: s.string(),
    date: s.int(),
    accesses: s.array(s.lazy(() => resourceAccessSchema)),
    kind: s.string(),
    name: s.string(),
    description: s.string(),
    shortDescription: s.string(),
    comment: s.optional(s.string()),
    subject: s.optional(s.lazy(() => subjectDataRepSchema)),
    member: s.optional(s.lazy(() => memberDataRepSchema)),
    token: s.optional(s.lazy(() => tokenSummarySchema)),
    app: s.optional(s.lazy(() => authorizedAppDataRepSchema)),
    titleVerb: s.optional(s.string()),
    title: s.optional(s.string()),
    target: s.optional(s.lazy(() => targetResourceRepSchema)),
    parent: s.optional(s.lazy(() => parentResourceRepSchema)),
    _keysMap: {
      links: "_links",
      id: "_id",
      accountId: "_accountId",
    },
  });
