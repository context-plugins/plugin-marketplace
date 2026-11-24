import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "../models/xamz-target-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import {
  xAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "../models/xamz-target1-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import { xAmzTarget10Schema, type XAmzTarget10 } from "../models/xamz-target10.js";
import { xAmzTarget11Schema, type XAmzTarget11 } from "../models/xamz-target11.js";
import { xAmzTarget12Schema, type XAmzTarget12 } from "../models/xamz-target12.js";
import { xAmzTarget13Schema, type XAmzTarget13 } from "../models/xamz-target13.js";
import { xAmzTarget14Schema, type XAmzTarget14 } from "../models/xamz-target14.js";
import { xAmzTarget15Schema, type XAmzTarget15 } from "../models/xamz-target15.js";
import { xAmzTarget16Schema, type XAmzTarget16 } from "../models/xamz-target16.js";
import { xAmzTarget17Schema, type XAmzTarget17 } from "../models/xamz-target17.js";
import { xAmzTarget18Schema, type XAmzTarget18 } from "../models/xamz-target18.js";
import { xAmzTarget19Schema, type XAmzTarget19 } from "../models/xamz-target19.js";
import {
  xAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "../models/xamz-target2-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import { xAmzTarget20Schema, type XAmzTarget20 } from "../models/xamz-target20.js";
import { xAmzTarget21Schema, type XAmzTarget21 } from "../models/xamz-target21.js";
import { xAmzTarget22Schema, type XAmzTarget22 } from "../models/xamz-target22.js";
import { xAmzTarget23Schema, type XAmzTarget23 } from "../models/xamz-target23.js";
import { xAmzTarget24Schema, type XAmzTarget24 } from "../models/xamz-target24.js";
import { xAmzTarget25Schema, type XAmzTarget25 } from "../models/xamz-target25.js";
import { xAmzTarget26Schema, type XAmzTarget26 } from "../models/xamz-target26.js";
import { xAmzTarget27Schema, type XAmzTarget27 } from "../models/xamz-target27.js";
import { xAmzTarget28Schema, type XAmzTarget28 } from "../models/xamz-target28.js";
import { xAmzTarget29Schema, type XAmzTarget29 } from "../models/xamz-target29.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget30Schema, type XAmzTarget30 } from "../models/xamz-target30.js";
import { xAmzTarget31Schema, type XAmzTarget31 } from "../models/xamz-target31.js";
import { xAmzTarget32Schema, type XAmzTarget32 } from "../models/xamz-target32.js";
import { xAmzTarget33Schema, type XAmzTarget33 } from "../models/xamz-target33.js";
import { xAmzTarget34Schema, type XAmzTarget34 } from "../models/xamz-target34.js";
import { xAmzTarget35Schema, type XAmzTarget35 } from "../models/xamz-target35.js";
import { xAmzTarget36Schema, type XAmzTarget36 } from "../models/xamz-target36.js";
import { xAmzTarget37Schema, type XAmzTarget37 } from "../models/xamz-target37.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import { xAmzTarget5Schema, type XAmzTarget5 } from "../models/xamz-target5.js";
import { xAmzTarget6Schema, type XAmzTarget6 } from "../models/xamz-target6.js";
import { xAmzTarget7Schema, type XAmzTarget7 } from "../models/xamz-target7.js";
import { xAmzTarget8Schema, type XAmzTarget8 } from "../models/xamz-target8.js";
import { xAmzTarget9Schema, type XAmzTarget9 } from "../models/xamz-target9.js";
import type { Servers } from "../servers.js";

export class AwsCodebuildXAmzTargetCodebuild {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batch Delete Builds
   *
   * @remarks
   * Deletes one or more builds.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchDeleteBuilds(
    request: AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchDeleteBuilds"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuildsError,
      },
      options,
    );
  }

  /**
   * Batch Get Build Batches
   *
   * @remarks
   * Retrieves information about one or more batch builds.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchGetBuildBatches(
    request: AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchGetBuildBatches"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatchesError,
      },
      options,
    );
  }

  /**
   * Batch Get Builds
   *
   * @remarks
   * Gets information about one or more builds.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchGetBuilds(
    request: AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchGetBuilds"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.BatchGetBuildsError,
      },
      options,
    );
  }

  /**
   * Batch Get Projects
   *
   * @remarks
   * Gets information about one or more build projects.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchGetProjects(
    request: AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchGetProjects"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget6Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.BatchGetProjectsError,
      },
      options,
    );
  }

  /**
   * Batch Get Report Groups
   *
   * @remarks
   * Returns an array of report groups.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchGetReportGroups(
    request: AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchGetReportGroups"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget10Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroupsError,
      },
      options,
    );
  }

  /**
   * Batch Get Reports
   *
   * @remarks
   * Returns an array of reports.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.BatchGetReportsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchGetReports(
    request: AwsCodebuildXAmzTargetCodebuild.BatchGetReportsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.BatchGetReportsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchGetReports"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget15Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.BatchGetReportsError,
      },
      options,
    );
  }

  /**
   * Create Project
   *
   * @remarks
   * Creates a build project.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.CreateProjectError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProject(
    request: AwsCodebuildXAmzTargetCodebuild.CreateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.CreateProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateProject"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget7Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.CreateProjectError,
      },
      options,
    );
  }

  /**
   * Create Report Group
   *
   * @remarks
   * Creates a report group. A report group contains a collection of reports.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.CreateReportGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createReportGroup(
    request: AwsCodebuildXAmzTargetCodebuild.CreateReportGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.CreateReportGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateReportGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget11Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.CreateReportGroupError,
      },
      options,
    );
  }

  /**
   * Create Webhook
   *
   * @remarks
   * For an existing CodeBuild build project that has its source code stored in a GitHub or
   * Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code
   * change is pushed to the repository. If you enable webhooks for an CodeBuild project, and the
   * project is used as a build step in CodePipeline, then two identical builds are created for each
   * commit. One build is triggered through webhooks, and one through CodePipeline. Because billing
   * is on a per-build basis, you are billed for both builds. Therefore, if you are using
   * CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console,
   * clear the Webhook box. For more information, see step 5 in Change a Build Project's Settings.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.CreateWebhookError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhook(
    request: AwsCodebuildXAmzTargetCodebuild.CreateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.CreateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateWebhook"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget17Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.CreateWebhookError,
      },
      options,
    );
  }

  /**
   * Delete Build Batch
   *
   * @remarks
   * Deletes a batch build.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBuildBatch(
    request: AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteBuildBatch"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget20Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatchError,
      },
      options,
    );
  }

  /**
   * Delete Project
   *
   * @remarks
   * Deletes a build project. When you delete a project, its builds are not deleted.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.DeleteProjectError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProject(
    request: AwsCodebuildXAmzTargetCodebuild.DeleteProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteProject"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget8Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.DeleteProjectError,
      },
      options,
    );
  }

  /**
   * Delete Report Group
   *
   * @remarks
   * Deletes a report group. Before you delete a report group, you must delete its reports.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteReportGroup(
    request: AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteReportGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget12Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.DeleteReportGroupError,
      },
      options,
    );
  }

  /**
   * Delete Resource Policy
   *
   * @remarks
   * Deletes a resource policy that is identified by its resource ARN.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteResourcePolicy(
    request: AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteResourcePolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget23Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicyError,
      },
      options,
    );
  }

  /**
   * Delete Source Credentials
   *
   * @remarks
   * Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSourceCredentials(
    request: AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteSourceCredentials"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget26Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentialsError,
      },
      options,
    );
  }

  /**
   * Delete Webhook
   *
   * @remarks
   * For an existing CodeBuild build project that has its source code stored in a GitHub or
   * Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change
   * is pushed to the repository.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.DeleteWebhookError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: AwsCodebuildXAmzTargetCodebuild.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteWebhook"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget18Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * Describe Code Coverages
   *
   * @remarks
   * Retrieves one or more code coverage reports.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeCodeCoverages(
    request: AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeCodeCoverages"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget29Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoveragesError,
      },
      options,
    );
  }

  /**
   * Describe Test Cases
   *
   * @remarks
   * Returns a list of details about test cases for a report.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeTestCases(
    request: AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeTestCases"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget30Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.DescribeTestCasesError,
      },
      options,
    );
  }

  /**
   * Get Report Group Trend
   *
   * @remarks
   * Analyzes and accumulates test report values for the specified test reports.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReportGroupTrend(
    request: AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetReportGroupTrend"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget31Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrendError,
      },
      options,
    );
  }

  /**
   * Get Resource Policy
   *
   * @remarks
   * Gets a resource policy that is identified by its resource ARN.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getResourcePolicy(
    request: AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetResourcePolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget24Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.GetResourcePolicyError,
      },
      options,
    );
  }

  /**
   * Import Source Credentials
   *
   * @remarks
   * Imports the source repository credentials for an CodeBuild project that has its source code
   * stored in a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  importSourceCredentials(
    request: AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ImportSourceCredentials"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget27Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentialsError,
      },
      options,
    );
  }

  /**
   * Invalidate Project Cache
   *
   * @remarks
   * Resets the cache for a project.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  invalidateProjectCache(
    request: AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#InvalidateProjectCache"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget32Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCacheError,
      },
      options,
    );
  }

  /**
   * List Build Batches
   *
   * @remarks
   * Retrieves the identifiers of your build batches in the current region.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuildBatches(
    request: AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListBuildBatches"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesError,
      },
      options,
    );
  }

  /**
   * List Build Batches For Project
   *
   * @remarks
   * Retrieves the identifiers of the build batches for a specific project.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuildBatchesForProject(
    request: AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListBuildBatchesForProject"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget5Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProjectError,
      },
      options,
    );
  }

  /**
   * List Builds For Project
   *
   * @remarks
   * Gets a list of build identifiers for the specified build project, with each build identifier
   * representing a single build.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuildsForProject(
    request: AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListBuildsForProject"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.ListBuildsForProjectError,
      },
      options,
    );
  }

  /**
   * List Curated Environment Images
   *
   * @remarks
   * Gets information about Docker images that are managed by CodeBuild.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCuratedEnvironmentImages(
    request: AwsCodebuildXAmzTargetCodebuild.ListCuratedEnvironmentImagesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListCuratedEnvironmentImages"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget34Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Report Groups
   *
   * @remarks
   * Gets a list ARNs for the report groups in the current Amazon Web Services account.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.ListReportGroupsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReportGroups(
    request: AwsCodebuildXAmzTargetCodebuild.ListReportGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListReportGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListReportGroups"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget13Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.ListReportGroupsError,
      },
      options,
    );
  }

  /**
   * List Reports For Report Group
   *
   * @remarks
   * Returns a list of ARNs for the reports that belong to a ReportGroup.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReportsForReportGroup(
    request: AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListReportsForReportGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget16Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroupError,
      },
      options,
    );
  }

  /**
   * List Shared Projects
   *
   * @remarks
   * Gets a list of projects that are shared with other Amazon Web Services accounts or users.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSharedProjects(
    request: AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListSharedProjects"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget35Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.ListSharedProjectsError,
      },
      options,
    );
  }

  /**
   * List Shared Report Groups
   *
   * @remarks
   * Gets a list of report groups that are shared with other Amazon Web Services accounts or users.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSharedReportGroups(
    request: AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListSharedReportGroups"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget36Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroupsError,
      },
      options,
    );
  }

  /**
   * List Source Credentials
   *
   * @remarks
   * Returns a list of SourceCredentialsInfo objects.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSourceCredentials(
    request: AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListSourceCredentials"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget28Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.ListSourceCredentialsError,
      },
      options,
    );
  }

  /**
   * Put Resource Policy
   *
   * @remarks
   * Stores a resource policy for the ARN of a Project or ReportGroup object.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putResourcePolicy(
    request: AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#PutResourcePolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget25Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.PutResourcePolicyError,
      },
      options,
    );
  }

  /**
   * Retry Build Batch
   *
   * @remarks
   * Restarts a failed batch build. Only batch builds that have failed can be retried.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retryBuildBatch(
    request: AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RetryBuildBatch"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget33Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.RetryBuildBatchError,
      },
      options,
    );
  }

  /**
   * Start Build Batch
   *
   * @remarks
   * Starts a batch build for a project.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.StartBuildBatchError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startBuildBatch(
    request: AwsCodebuildXAmzTargetCodebuild.StartBuildBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.StartBuildBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartBuildBatch"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget21Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.StartBuildBatchError,
      },
      options,
    );
  }

  /**
   * Stop Build Batch
   *
   * @remarks
   * Stops a running batch build.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.StopBuildBatchError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopBuildBatch(
    request: AwsCodebuildXAmzTargetCodebuild.StopBuildBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.StopBuildBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopBuildBatch"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget22Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.StopBuildBatchError,
      },
      options,
    );
  }

  /**
   * Update Project
   *
   * @remarks
   * Changes the settings of a build project.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.UpdateProjectError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProject(
    request: AwsCodebuildXAmzTargetCodebuild.UpdateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.UpdateProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateProject"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget9Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.UpdateProjectError,
      },
      options,
    );
  }

  /**
   * Update Project Visibility
   *
   * @remarks
   * Changes the public visibility for a project. The project's build results, logs, and artifacts
   * are available to the general public. For more information, see Public build projects in the
   * CodeBuild User Guide. The following should be kept in mind when making your projects public:
   * All of a project's build results, logs, and artifacts, including builds that were run when the
   * project was private, are available to the general public. All build logs and artifacts are
   * available to the public. Environment variables, source code, and other sensitive information
   * may have been output to the build logs and artifacts. You must be careful about what
   * information is output to the build logs. Some best practice are: Do not store sensitive values
   * in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter
   * Store or Secrets Manager to store sensitive values. Follow Best practices for using webhooks in
   * the CodeBuild User Guide to limit which entities can trigger a build, and do not store the
   * buildspec in the project itself, to ensure that your webhooks are as secure as possible. A
   * malicious user can use public builds to distribute malicious artifacts. We recommend that yo
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProjectVisibility(
    request: AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateProjectVisibility"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget37Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibilityError,
      },
      options,
    );
  }

  /**
   * Update Report Group
   *
   * @remarks
   * Updates a report group.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateReportGroup(
    request: AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateReportGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget14Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.UpdateReportGroupError,
      },
      options,
    );
  }

  /**
   * Update Webhook
   *
   * @remarks
   * Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your
   * repository, rotateSecret is ignored.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildXAmzTargetCodebuild.UpdateWebhookError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhook(
    request: AwsCodebuildXAmzTargetCodebuild.UpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildXAmzTargetCodebuild.UpdateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateWebhook"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget19Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildXAmzTargetCodebuild.UpdateWebhookError,
      },
      options,
    );
  }
}

export namespace AwsCodebuildXAmzTargetCodebuild {
  export type BatchDeleteBuildsRequest = {
    xAmzTarget: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  };

  export class BatchDeleteBuildsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchDeleteBuildsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type BatchGetBuildBatchesRequest = {
    xAmzTarget: XAmzTarget3;
  };

  export class BatchGetBuildBatchesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchGetBuildBatchesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type BatchGetBuildsRequest = {
    xAmzTarget: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  };

  export class BatchGetBuildsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchGetBuildsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type BatchGetProjectsRequest = {
    xAmzTarget: XAmzTarget6;
  };

  export class BatchGetProjectsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchGetProjectsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type BatchGetReportGroupsRequest = {
    xAmzTarget: XAmzTarget10;
  };

  export class BatchGetReportGroupsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchGetReportGroupsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type BatchGetReportsRequest = {
    xAmzTarget: XAmzTarget15;
  };

  export class BatchGetReportsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchGetReportsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateProjectRequest = {
    xAmzTarget: XAmzTarget7;
  };

  export class CreateProjectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateReportGroupRequest = {
    xAmzTarget: XAmzTarget11;
  };

  export class CreateReportGroupError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateReportGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateWebhookRequest = {
    xAmzTarget: XAmzTarget17;
  };

  export class CreateWebhookError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateWebhookError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteBuildBatchRequest = {
    xAmzTarget: XAmzTarget20;
  };

  export class DeleteBuildBatchError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBuildBatchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteProjectRequest = {
    xAmzTarget: XAmzTarget8;
  };

  export class DeleteProjectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteReportGroupRequest = {
    xAmzTarget: XAmzTarget12;
  };

  export class DeleteReportGroupError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteReportGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteResourcePolicyRequest = {
    xAmzTarget: XAmzTarget23;
  };

  export class DeleteResourcePolicyError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteResourcePolicyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteSourceCredentialsRequest = {
    xAmzTarget: XAmzTarget26;
  };

  export class DeleteSourceCredentialsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSourceCredentialsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteWebhookRequest = {
    xAmzTarget: XAmzTarget18;
  };

  export class DeleteWebhookError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeCodeCoveragesRequest = {
    xAmzTarget: XAmzTarget29;
  };

  export class DescribeCodeCoveragesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeCodeCoveragesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeTestCasesRequest = {
    xAmzTarget: XAmzTarget30;
  };

  export class DescribeTestCasesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeTestCasesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type GetReportGroupTrendRequest = {
    xAmzTarget: XAmzTarget31;
  };

  export class GetReportGroupTrendError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetReportGroupTrendError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type GetResourcePolicyRequest = {
    xAmzTarget: XAmzTarget24;
  };

  export class GetResourcePolicyError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetResourcePolicyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ImportSourceCredentialsRequest = {
    xAmzTarget: XAmzTarget27;
  };

  export class ImportSourceCredentialsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ImportSourceCredentialsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type InvalidateProjectCacheRequest = {
    xAmzTarget: XAmzTarget32;
  };

  export class InvalidateProjectCacheError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<InvalidateProjectCacheError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListBuildBatchesRequest = {
    xAmzTarget: XAmzTarget4;
  };

  export class ListBuildBatchesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBuildBatchesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListBuildBatchesForProjectRequest = {
    xAmzTarget: XAmzTarget5;
  };

  export class ListBuildBatchesForProjectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBuildBatchesForProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListBuildsForProjectRequest = {
    xAmzTarget: XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  };

  export class ListBuildsForProjectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBuildsForProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListCuratedEnvironmentImagesRequest = {
    xAmzTarget: XAmzTarget34;
  };

  export type ListReportGroupsRequest = {
    xAmzTarget: XAmzTarget13;
  };

  export class ListReportGroupsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListReportGroupsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListReportsForReportGroupRequest = {
    xAmzTarget: XAmzTarget16;
  };

  export class ListReportsForReportGroupError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListReportsForReportGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListSharedProjectsRequest = {
    xAmzTarget: XAmzTarget35;
  };

  export class ListSharedProjectsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListSharedProjectsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListSharedReportGroupsRequest = {
    xAmzTarget: XAmzTarget36;
  };

  export class ListSharedReportGroupsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListSharedReportGroupsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListSourceCredentialsRequest = {
    xAmzTarget: XAmzTarget28;
  };

  export class ListSourceCredentialsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListSourceCredentialsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type PutResourcePolicyRequest = {
    xAmzTarget: XAmzTarget25;
  };

  export class PutResourcePolicyError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PutResourcePolicyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RetryBuildBatchRequest = {
    xAmzTarget: XAmzTarget33;
  };

  export class RetryBuildBatchError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetryBuildBatchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StartBuildBatchRequest = {
    xAmzTarget: XAmzTarget21;
  };

  export class StartBuildBatchError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartBuildBatchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StopBuildBatchRequest = {
    xAmzTarget: XAmzTarget22;
  };

  export class StopBuildBatchError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StopBuildBatchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateProjectRequest = {
    xAmzTarget: XAmzTarget9;
  };

  export class UpdateProjectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateProjectVisibilityRequest = {
    xAmzTarget: XAmzTarget37;
  };

  export class UpdateProjectVisibilityError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProjectVisibilityError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateReportGroupRequest = {
    xAmzTarget: XAmzTarget14;
  };

  export class UpdateReportGroupError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateReportGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateWebhookRequest = {
    xAmzTarget: XAmzTarget19;
  };

  export class UpdateWebhookError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
