import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1FlattenedApiVersionDeploymentView2Schema,
  type GoogleCloudApihubV1FlattenedApiVersionDeploymentView2,
} from "./google-cloud-apihub-v1-flattened-api-version-deployment-view2.js";
import {
  googleCloudApihubV1FlattenedApiVersionOperationDeploymentView1Schema,
  type GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView1,
} from "./google-cloud-apihub-v1-flattened-api-version-operation-deployment-view1.js";

/** The view of an API. */
export type GoogleCloudApihubV1ApiView = {
  /** MCP server view. */
  mcpServerView?: GoogleCloudApihubV1FlattenedApiVersionDeploymentView2;
  /** MCP tools view. */
  mcpToolView?: GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApiViewSchema: Schema<GoogleCloudApihubV1ApiView> =
  s.object<GoogleCloudApihubV1ApiView>(
    {
      mcpServerView: s.optional(s.lazy(() => googleCloudApihubV1FlattenedApiVersionDeploymentView2Schema)),
      mcpToolView: s.optional(
        s.lazy(() => googleCloudApihubV1FlattenedApiVersionOperationDeploymentView1Schema),
      ),
    },
    { additionalProperties: s.json() },
  );
