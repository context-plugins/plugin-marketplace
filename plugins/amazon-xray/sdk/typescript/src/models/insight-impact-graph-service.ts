import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightImpactGraphEdgeSchema, type InsightImpactGraphEdge } from "./insight-impact-graph-edge.js";

export type InsightImpactGraphService = {
  /** Identifier for the service. Unique within the service map. */
  referenceId?: number;
  /**
   * Identifier for the service. Unique within the service map. Amazon Web Services Resource - The
   * type of an Amazon Web Services resource. For example, AWS::EC2::Instance for an application
   * running on Amazon EC2 or AWS::DynamoDB::Table for an Amazon DynamoDB table that the application
   * used. Amazon Web Services Service - The type of an Amazon Web Services service. For example,
   * AWS::DynamoDB for downstream calls to Amazon DynamoDB that didn't target a specific table.
   * Amazon Web Services Service - The type of an Amazon Web Services service. For example,
   * AWS::DynamoDB for downstream calls to Amazon Dy
   */
  type?: string;
  /** The canonical name of the service. */
  name?: string;
  /** A list of names for the service, including the canonical name. */
  names?: string[];
  /** Identifier of the Amazon Web Services account in which the service runs. */
  accountId?: string;
  /** Connections to downstream services. */
  edges?: InsightImpactGraphEdge[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightImpactGraphServiceSchema: Schema<InsightImpactGraphService> =
  s.object<InsightImpactGraphService>(
    {
      referenceId: s.optional(s.int()),
      type: s.optional(s.string()),
      name: s.optional(s.string()),
      names: s.optional(s.array(s.string())),
      accountId: s.optional(s.string()),
      edges: s.optional(s.array(s.lazy(() => insightImpactGraphEdgeSchema))),
      _keysMap: {
        referenceId: "ReferenceId",
        type: "Type",
        name: "Name",
        names: "Names",
        accountId: "AccountId",
        edges: "Edges",
      },
    },
    { additionalProperties: s.json() },
  );
