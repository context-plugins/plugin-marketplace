import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deploymentRepSchema, type DeploymentRep } from "./deployment-rep.js";
import { linkSchema, type Link } from "./link.js";

export type DeploymentCollectionRep = {
  /** The total number of deployments */
  totalCount: number;
  /** A list of deployments */
  items: DeploymentRep[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const deploymentCollectionRepSchema: Schema<DeploymentCollectionRep> =
  s.object<DeploymentCollectionRep>({
    totalCount: s.int(),
    items: s.array(s.lazy(() => deploymentRepSchema)),
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    _keysMap: {
      links: "_links",
    },
  });
