import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1AutomationExecutionsResponseInternalSchema,
  type ApiV1AutomationExecutionsResponse,
} from "../models/api-v1-automation-executions-response.js";
import {
  apiV1AutomationExecutions400Error1Schema,
  type ApiV1AutomationExecutions400Error1,
} from "../models/api-v1-automation-executions400-error1.js";
import {
  apiV1AutomationExecutions401Error1Schema,
  type ApiV1AutomationExecutions401Error1,
} from "../models/api-v1-automation-executions401-error1.js";
import {
  apiV1AutomationExecutions403Error1Schema,
  type ApiV1AutomationExecutions403Error1,
} from "../models/api-v1-automation-executions403-error1.js";
import {
  apiV1AutomationExecutions404Error1Schema,
  type ApiV1AutomationExecutions404Error1,
} from "../models/api-v1-automation-executions404-error1.js";
import {
  apiV1AutomationExecutions429Error1Schema,
  type ApiV1AutomationExecutions429Error1,
} from "../models/api-v1-automation-executions429-error1.js";
import {
  apiV1AutomationExecutions500Error1Schema,
  type ApiV1AutomationExecutions500Error1,
} from "../models/api-v1-automation-executions500-error1.js";
import {
  apiV1AutomationExecutions502Error1Schema,
  type ApiV1AutomationExecutions502Error1,
} from "../models/api-v1-automation-executions502-error1.js";
import {
  apiV1AutomationExecutions503Error1Schema,
  type ApiV1AutomationExecutions503Error1,
} from "../models/api-v1-automation-executions503-error1.js";
import {
  apiV1AutomationExecutions504Error1Schema,
  type ApiV1AutomationExecutions504Error1,
} from "../models/api-v1-automation-executions504-error1.js";
import {
  apiV1AutomationProviderSettingsRequestInternalSchema,
  type ApiV1AutomationProviderSettingsRequest,
} from "../models/api-v1-automation-provider-settings-request.js";
import {
  apiV1AutomationProviderSettingsResponseInternalSchema,
  type ApiV1AutomationProviderSettingsResponse,
} from "../models/api-v1-automation-provider-settings-response.js";
import {
  apiV1AutomationProviderSettingsResponse1InternalSchema,
  type ApiV1AutomationProviderSettingsResponse1,
} from "../models/api-v1-automation-provider-settings-response1.js";
import {
  apiV1AutomationProviderSettingsSyncResponseInternalSchema,
  type ApiV1AutomationProviderSettingsSyncResponse,
} from "../models/api-v1-automation-provider-settings-sync-response.js";
import {
  apiV1AutomationProviderSettingsSync400Error1Schema,
  type ApiV1AutomationProviderSettingsSync400Error1,
} from "../models/api-v1-automation-provider-settings-sync400-error1.js";
import {
  apiV1AutomationProviderSettingsSync401Error1Schema,
  type ApiV1AutomationProviderSettingsSync401Error1,
} from "../models/api-v1-automation-provider-settings-sync401-error1.js";
import {
  apiV1AutomationProviderSettingsSync403Error1Schema,
  type ApiV1AutomationProviderSettingsSync403Error1,
} from "../models/api-v1-automation-provider-settings-sync403-error1.js";
import {
  apiV1AutomationProviderSettingsSync404Error1Schema,
  type ApiV1AutomationProviderSettingsSync404Error1,
} from "../models/api-v1-automation-provider-settings-sync404-error1.js";
import {
  apiV1AutomationProviderSettingsSync429Error1Schema,
  type ApiV1AutomationProviderSettingsSync429Error1,
} from "../models/api-v1-automation-provider-settings-sync429-error1.js";
import {
  apiV1AutomationProviderSettingsSync500Error1Schema,
  type ApiV1AutomationProviderSettingsSync500Error1,
} from "../models/api-v1-automation-provider-settings-sync500-error1.js";
import {
  apiV1AutomationProviderSettingsSync502Error1Schema,
  type ApiV1AutomationProviderSettingsSync502Error1,
} from "../models/api-v1-automation-provider-settings-sync502-error1.js";
import {
  apiV1AutomationProviderSettingsSync503Error1Schema,
  type ApiV1AutomationProviderSettingsSync503Error1,
} from "../models/api-v1-automation-provider-settings-sync503-error1.js";
import {
  apiV1AutomationProviderSettingsSync504Error1Schema,
  type ApiV1AutomationProviderSettingsSync504Error1,
} from "../models/api-v1-automation-provider-settings-sync504-error1.js";
import {
  apiV1AutomationProviderSettings400Error1Schema,
  type ApiV1AutomationProviderSettings400Error1,
} from "../models/api-v1-automation-provider-settings400-error1.js";
import {
  apiV1AutomationProviderSettings401Error1Schema,
  type ApiV1AutomationProviderSettings401Error1,
} from "../models/api-v1-automation-provider-settings401-error1.js";
import {
  apiV1AutomationProviderSettings403Error1Schema,
  type ApiV1AutomationProviderSettings403Error1,
} from "../models/api-v1-automation-provider-settings403-error1.js";
import {
  apiV1AutomationProviderSettings404Error1Schema,
  type ApiV1AutomationProviderSettings404Error1,
} from "../models/api-v1-automation-provider-settings404-error1.js";
import {
  apiV1AutomationProviderSettings429Error1Schema,
  type ApiV1AutomationProviderSettings429Error1,
} from "../models/api-v1-automation-provider-settings429-error1.js";
import {
  apiV1AutomationProviderSettings500Error1Schema,
  type ApiV1AutomationProviderSettings500Error1,
} from "../models/api-v1-automation-provider-settings500-error1.js";
import {
  apiV1AutomationProviderSettings502Error1Schema,
  type ApiV1AutomationProviderSettings502Error1,
} from "../models/api-v1-automation-provider-settings502-error1.js";
import {
  apiV1AutomationProviderSettings503Error1Schema,
  type ApiV1AutomationProviderSettings503Error1,
} from "../models/api-v1-automation-provider-settings503-error1.js";
import {
  apiV1AutomationProviderSettings504Error1Schema,
  type ApiV1AutomationProviderSettings504Error1,
} from "../models/api-v1-automation-provider-settings504-error1.js";
import {
  apiV1AutomationRichMessagesConversationsRequestInternalSchema,
  type ApiV1AutomationRichMessagesConversationsRequest,
} from "../models/api-v1-automation-rich-messages-conversations-request.js";
import {
  apiV1AutomationRichMessagesConversationsResponseSchema,
  type ApiV1AutomationRichMessagesConversationsResponse,
} from "../models/api-v1-automation-rich-messages-conversations-response.js";
import {
  apiV1AutomationRichMessagesConversations400Error1Schema,
  type ApiV1AutomationRichMessagesConversations400Error1,
} from "../models/api-v1-automation-rich-messages-conversations400-error1.js";
import {
  apiV1AutomationRichMessagesConversations401Error1Schema,
  type ApiV1AutomationRichMessagesConversations401Error1,
} from "../models/api-v1-automation-rich-messages-conversations401-error1.js";
import {
  apiV1AutomationRichMessagesConversations403Error1Schema,
  type ApiV1AutomationRichMessagesConversations403Error1,
} from "../models/api-v1-automation-rich-messages-conversations403-error1.js";
import {
  apiV1AutomationRichMessagesConversations404Error1Schema,
  type ApiV1AutomationRichMessagesConversations404Error1,
} from "../models/api-v1-automation-rich-messages-conversations404-error1.js";
import {
  apiV1AutomationRichMessagesConversations429Error1Schema,
  type ApiV1AutomationRichMessagesConversations429Error1,
} from "../models/api-v1-automation-rich-messages-conversations429-error1.js";
import {
  apiV1AutomationRichMessagesConversations500Error1Schema,
  type ApiV1AutomationRichMessagesConversations500Error1,
} from "../models/api-v1-automation-rich-messages-conversations500-error1.js";
import {
  apiV1AutomationRichMessagesConversations502Error1Schema,
  type ApiV1AutomationRichMessagesConversations502Error1,
} from "../models/api-v1-automation-rich-messages-conversations502-error1.js";
import {
  apiV1AutomationRichMessagesConversations503Error1Schema,
  type ApiV1AutomationRichMessagesConversations503Error1,
} from "../models/api-v1-automation-rich-messages-conversations503-error1.js";
import {
  apiV1AutomationRichMessagesConversations504Error1Schema,
  type ApiV1AutomationRichMessagesConversations504Error1,
} from "../models/api-v1-automation-rich-messages-conversations504-error1.js";
import {
  apiV1AutomationsActivateResponseInternalSchema,
  type ApiV1AutomationsActivateResponse,
} from "../models/api-v1-automations-activate-response.js";
import {
  apiV1AutomationsActivate400Error1Schema,
  type ApiV1AutomationsActivate400Error1,
} from "../models/api-v1-automations-activate400-error1.js";
import {
  apiV1AutomationsActivate401Error1Schema,
  type ApiV1AutomationsActivate401Error1,
} from "../models/api-v1-automations-activate401-error1.js";
import {
  apiV1AutomationsActivate403Error1Schema,
  type ApiV1AutomationsActivate403Error1,
} from "../models/api-v1-automations-activate403-error1.js";
import {
  apiV1AutomationsActivate404Error1Schema,
  type ApiV1AutomationsActivate404Error1,
} from "../models/api-v1-automations-activate404-error1.js";
import {
  apiV1AutomationsActivate429Error1Schema,
  type ApiV1AutomationsActivate429Error1,
} from "../models/api-v1-automations-activate429-error1.js";
import {
  apiV1AutomationsActivate500Error1Schema,
  type ApiV1AutomationsActivate500Error1,
} from "../models/api-v1-automations-activate500-error1.js";
import {
  apiV1AutomationsActivate502Error1Schema,
  type ApiV1AutomationsActivate502Error1,
} from "../models/api-v1-automations-activate502-error1.js";
import {
  apiV1AutomationsActivate503Error1Schema,
  type ApiV1AutomationsActivate503Error1,
} from "../models/api-v1-automations-activate503-error1.js";
import {
  apiV1AutomationsActivate504Error1Schema,
  type ApiV1AutomationsActivate504Error1,
} from "../models/api-v1-automations-activate504-error1.js";
import {
  apiV1AutomationsArchiveResponseInternalSchema,
  type ApiV1AutomationsArchiveResponse,
} from "../models/api-v1-automations-archive-response.js";
import {
  apiV1AutomationsArchive400Error1Schema,
  type ApiV1AutomationsArchive400Error1,
} from "../models/api-v1-automations-archive400-error1.js";
import {
  apiV1AutomationsArchive401Error1Schema,
  type ApiV1AutomationsArchive401Error1,
} from "../models/api-v1-automations-archive401-error1.js";
import {
  apiV1AutomationsArchive403Error1Schema,
  type ApiV1AutomationsArchive403Error1,
} from "../models/api-v1-automations-archive403-error1.js";
import {
  apiV1AutomationsArchive404Error1Schema,
  type ApiV1AutomationsArchive404Error1,
} from "../models/api-v1-automations-archive404-error1.js";
import {
  apiV1AutomationsArchive429Error1Schema,
  type ApiV1AutomationsArchive429Error1,
} from "../models/api-v1-automations-archive429-error1.js";
import {
  apiV1AutomationsArchive500Error1Schema,
  type ApiV1AutomationsArchive500Error1,
} from "../models/api-v1-automations-archive500-error1.js";
import {
  apiV1AutomationsArchive502Error1Schema,
  type ApiV1AutomationsArchive502Error1,
} from "../models/api-v1-automations-archive502-error1.js";
import {
  apiV1AutomationsArchive503Error1Schema,
  type ApiV1AutomationsArchive503Error1,
} from "../models/api-v1-automations-archive503-error1.js";
import {
  apiV1AutomationsArchive504Error1Schema,
  type ApiV1AutomationsArchive504Error1,
} from "../models/api-v1-automations-archive504-error1.js";
import {
  apiV1AutomationsCopyRequestSchema,
  type ApiV1AutomationsCopyRequest,
} from "../models/api-v1-automations-copy-request.js";
import {
  apiV1AutomationsCopyResponseInternalSchema,
  type ApiV1AutomationsCopyResponse,
} from "../models/api-v1-automations-copy-response.js";
import {
  apiV1AutomationsCopy400Error1Schema,
  type ApiV1AutomationsCopy400Error1,
} from "../models/api-v1-automations-copy400-error1.js";
import {
  apiV1AutomationsCopy401Error1Schema,
  type ApiV1AutomationsCopy401Error1,
} from "../models/api-v1-automations-copy401-error1.js";
import {
  apiV1AutomationsCopy403Error1Schema,
  type ApiV1AutomationsCopy403Error1,
} from "../models/api-v1-automations-copy403-error1.js";
import {
  apiV1AutomationsCopy404Error1Schema,
  type ApiV1AutomationsCopy404Error1,
} from "../models/api-v1-automations-copy404-error1.js";
import {
  apiV1AutomationsCopy429Error1Schema,
  type ApiV1AutomationsCopy429Error1,
} from "../models/api-v1-automations-copy429-error1.js";
import {
  apiV1AutomationsCopy500Error1Schema,
  type ApiV1AutomationsCopy500Error1,
} from "../models/api-v1-automations-copy500-error1.js";
import {
  apiV1AutomationsCopy502Error1Schema,
  type ApiV1AutomationsCopy502Error1,
} from "../models/api-v1-automations-copy502-error1.js";
import {
  apiV1AutomationsCopy503Error1Schema,
  type ApiV1AutomationsCopy503Error1,
} from "../models/api-v1-automations-copy503-error1.js";
import {
  apiV1AutomationsCopy504Error1Schema,
  type ApiV1AutomationsCopy504Error1,
} from "../models/api-v1-automations-copy504-error1.js";
import {
  apiV1AutomationsExecutionsResponseInternalSchema,
  type ApiV1AutomationsExecutionsResponse,
} from "../models/api-v1-automations-executions-response.js";
import {
  apiV1AutomationsExecutions400Error1Schema,
  type ApiV1AutomationsExecutions400Error1,
} from "../models/api-v1-automations-executions400-error1.js";
import {
  apiV1AutomationsExecutions401Error1Schema,
  type ApiV1AutomationsExecutions401Error1,
} from "../models/api-v1-automations-executions401-error1.js";
import {
  apiV1AutomationsExecutions403Error1Schema,
  type ApiV1AutomationsExecutions403Error1,
} from "../models/api-v1-automations-executions403-error1.js";
import {
  apiV1AutomationsExecutions404Error1Schema,
  type ApiV1AutomationsExecutions404Error1,
} from "../models/api-v1-automations-executions404-error1.js";
import {
  apiV1AutomationsExecutions429Error1Schema,
  type ApiV1AutomationsExecutions429Error1,
} from "../models/api-v1-automations-executions429-error1.js";
import {
  apiV1AutomationsExecutions500Error1Schema,
  type ApiV1AutomationsExecutions500Error1,
} from "../models/api-v1-automations-executions500-error1.js";
import {
  apiV1AutomationsExecutions502Error1Schema,
  type ApiV1AutomationsExecutions502Error1,
} from "../models/api-v1-automations-executions502-error1.js";
import {
  apiV1AutomationsExecutions503Error1Schema,
  type ApiV1AutomationsExecutions503Error1,
} from "../models/api-v1-automations-executions503-error1.js";
import {
  apiV1AutomationsExecutions504Error1Schema,
  type ApiV1AutomationsExecutions504Error1,
} from "../models/api-v1-automations-executions504-error1.js";
import {
  apiV1AutomationsPauseResponseInternalSchema,
  type ApiV1AutomationsPauseResponse,
} from "../models/api-v1-automations-pause-response.js";
import {
  apiV1AutomationsPause400Error1Schema,
  type ApiV1AutomationsPause400Error1,
} from "../models/api-v1-automations-pause400-error1.js";
import {
  apiV1AutomationsPause401Error1Schema,
  type ApiV1AutomationsPause401Error1,
} from "../models/api-v1-automations-pause401-error1.js";
import {
  apiV1AutomationsPause403Error1Schema,
  type ApiV1AutomationsPause403Error1,
} from "../models/api-v1-automations-pause403-error1.js";
import {
  apiV1AutomationsPause404Error1Schema,
  type ApiV1AutomationsPause404Error1,
} from "../models/api-v1-automations-pause404-error1.js";
import {
  apiV1AutomationsPause429Error1Schema,
  type ApiV1AutomationsPause429Error1,
} from "../models/api-v1-automations-pause429-error1.js";
import {
  apiV1AutomationsPause500Error1Schema,
  type ApiV1AutomationsPause500Error1,
} from "../models/api-v1-automations-pause500-error1.js";
import {
  apiV1AutomationsPause502Error1Schema,
  type ApiV1AutomationsPause502Error1,
} from "../models/api-v1-automations-pause502-error1.js";
import {
  apiV1AutomationsPause503Error1Schema,
  type ApiV1AutomationsPause503Error1,
} from "../models/api-v1-automations-pause503-error1.js";
import {
  apiV1AutomationsPause504Error1Schema,
  type ApiV1AutomationsPause504Error1,
} from "../models/api-v1-automations-pause504-error1.js";
import {
  apiV1AutomationsPublishRequestInternalSchema,
  type ApiV1AutomationsPublishRequest,
} from "../models/api-v1-automations-publish-request.js";
import {
  apiV1AutomationsPublishResponseInternalSchema,
  type ApiV1AutomationsPublishResponse,
} from "../models/api-v1-automations-publish-response.js";
import {
  apiV1AutomationsPublish400Error1Schema,
  type ApiV1AutomationsPublish400Error1,
} from "../models/api-v1-automations-publish400-error1.js";
import {
  apiV1AutomationsPublish401Error1Schema,
  type ApiV1AutomationsPublish401Error1,
} from "../models/api-v1-automations-publish401-error1.js";
import {
  apiV1AutomationsPublish403Error1Schema,
  type ApiV1AutomationsPublish403Error1,
} from "../models/api-v1-automations-publish403-error1.js";
import {
  apiV1AutomationsPublish404Error1Schema,
  type ApiV1AutomationsPublish404Error1,
} from "../models/api-v1-automations-publish404-error1.js";
import {
  apiV1AutomationsPublish429Error1Schema,
  type ApiV1AutomationsPublish429Error1,
} from "../models/api-v1-automations-publish429-error1.js";
import {
  apiV1AutomationsPublish500Error1Schema,
  type ApiV1AutomationsPublish500Error1,
} from "../models/api-v1-automations-publish500-error1.js";
import {
  apiV1AutomationsPublish502Error1Schema,
  type ApiV1AutomationsPublish502Error1,
} from "../models/api-v1-automations-publish502-error1.js";
import {
  apiV1AutomationsPublish503Error1Schema,
  type ApiV1AutomationsPublish503Error1,
} from "../models/api-v1-automations-publish503-error1.js";
import {
  apiV1AutomationsPublish504Error1Schema,
  type ApiV1AutomationsPublish504Error1,
} from "../models/api-v1-automations-publish504-error1.js";
import {
  apiV1AutomationsRequestInternalSchema,
  type ApiV1AutomationsRequest,
} from "../models/api-v1-automations-request.js";
import {
  apiV1AutomationsRequest1InternalSchema,
  type ApiV1AutomationsRequest1,
} from "../models/api-v1-automations-request1.js";
import {
  apiV1AutomationsResponseInternalSchema,
  type ApiV1AutomationsResponse,
} from "../models/api-v1-automations-response.js";
import {
  apiV1AutomationsResponse1InternalSchema,
  type ApiV1AutomationsResponse1,
} from "../models/api-v1-automations-response1.js";
import {
  apiV1AutomationsTestRequestSchema,
  type ApiV1AutomationsTestRequest,
} from "../models/api-v1-automations-test-request.js";
import {
  apiV1AutomationsTestResponseInternalSchema,
  type ApiV1AutomationsTestResponse,
} from "../models/api-v1-automations-test-response.js";
import {
  apiV1AutomationsTest400Error1Schema,
  type ApiV1AutomationsTest400Error1,
} from "../models/api-v1-automations-test400-error1.js";
import {
  apiV1AutomationsTest401Error1Schema,
  type ApiV1AutomationsTest401Error1,
} from "../models/api-v1-automations-test401-error1.js";
import {
  apiV1AutomationsTest403Error1Schema,
  type ApiV1AutomationsTest403Error1,
} from "../models/api-v1-automations-test403-error1.js";
import {
  apiV1AutomationsTest404Error1Schema,
  type ApiV1AutomationsTest404Error1,
} from "../models/api-v1-automations-test404-error1.js";
import {
  apiV1AutomationsTest429Error1Schema,
  type ApiV1AutomationsTest429Error1,
} from "../models/api-v1-automations-test429-error1.js";
import {
  apiV1AutomationsTest500Error1Schema,
  type ApiV1AutomationsTest500Error1,
} from "../models/api-v1-automations-test500-error1.js";
import {
  apiV1AutomationsTest502Error1Schema,
  type ApiV1AutomationsTest502Error1,
} from "../models/api-v1-automations-test502-error1.js";
import {
  apiV1AutomationsTest503Error1Schema,
  type ApiV1AutomationsTest503Error1,
} from "../models/api-v1-automations-test503-error1.js";
import {
  apiV1AutomationsTest504Error1Schema,
  type ApiV1AutomationsTest504Error1,
} from "../models/api-v1-automations-test504-error1.js";
import {
  apiV1Automations400Error1Schema,
  type ApiV1Automations400Error1,
} from "../models/api-v1-automations400-error1.js";
import {
  apiV1Automations401Error1Schema,
  type ApiV1Automations401Error1,
} from "../models/api-v1-automations401-error1.js";
import {
  apiV1Automations403Error1Schema,
  type ApiV1Automations403Error1,
} from "../models/api-v1-automations403-error1.js";
import {
  apiV1Automations404Error1Schema,
  type ApiV1Automations404Error1,
} from "../models/api-v1-automations404-error1.js";
import {
  apiV1Automations429Error1Schema,
  type ApiV1Automations429Error1,
} from "../models/api-v1-automations429-error1.js";
import {
  apiV1Automations500Error1Schema,
  type ApiV1Automations500Error1,
} from "../models/api-v1-automations500-error1.js";
import {
  apiV1Automations502Error1Schema,
  type ApiV1Automations502Error1,
} from "../models/api-v1-automations502-error1.js";
import {
  apiV1Automations503Error1Schema,
  type ApiV1Automations503Error1,
} from "../models/api-v1-automations503-error1.js";
import {
  apiV1Automations504Error1Schema,
  type ApiV1Automations504Error1,
} from "../models/api-v1-automations504-error1.js";
import { platformScopeSchema, type PlatformScope } from "../models/platform-scope.js";
import { platformSchema, type Platform } from "../models/platform.js";
import {
  statusBundleSocialAutomationApiSchema,
  type StatusBundleSocialAutomationApi,
} from "../models/status-bundle-social-automation-api.js";
import { status31Schema, type Status31 } from "../models/status31.js";
import { status59Schema, type Status59 } from "../models/status59.js";
import { type112Schema, type Type112 } from "../models/type112.js";
import type { Servers } from "../servers.js";

/**
 * Build, publish and monitor automation flows that react to incoming messages and comments, plus
 * the per-account provider settings they rely on.
 */
export class Automation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate an automation flow
   *
   * @remarks
   * Resume a paused flow so that it triggers on new events again.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationActivateFlowError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationActivateFlow(
    request: Automation.AutomationActivateFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsActivateResponse, Automation.AutomationActivateFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/automations/{id}/activate"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsActivateResponseInternalSchema },
        errorFactory: Automation.AutomationActivateFlowError,
      },
      options,
    );
  }

  /**
   * Archive an automation flow
   *
   * @remarks
   * Retire a flow without deleting it. Archived flows never trigger and are hidden from the default
   * list.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationArchiveFlowError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationArchiveFlow(
    request: Automation.AutomationArchiveFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsArchiveResponse, Automation.AutomationArchiveFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/automations/{id}/archive"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsArchiveResponseInternalSchema },
        errorFactory: Automation.AutomationArchiveFlowError,
      },
      options,
    );
  }

  /**
   * Copy automation flows between teams
   *
   * @remarks
   * Duplicate one or more automation flows into another team. The copies are created as drafts so
   * they can be re-pointed at that team's social accounts before going live.
   *
   * @returns 201
   *
   * @throws {@link Automation.AutomationCopyFlowsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationCopyFlows(
    request: Automation.AutomationCopyFlowsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsCopyResponse, Automation.AutomationCopyFlowsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/automations/copy"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AutomationsCopyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsCopyResponseInternalSchema },
        errorFactory: Automation.AutomationCopyFlowsError,
      },
      options,
    );
  }

  /**
   * Create an automation flow
   *
   * @remarks
   * Create an automation flow from a trigger and a list of steps. The flow starts as a draft and
   * only runs once it is published.
   *
   * @returns 201
   *
   * @throws {@link Automation.AutomationCreateFlowError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationCreateFlow(
    request: Automation.AutomationCreateFlowRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsResponse1, Automation.AutomationCreateFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/automations"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AutomationsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsResponse1InternalSchema },
        errorFactory: Automation.AutomationCreateFlowError,
      },
      options,
    );
  }

  /**
   * Delete an automation flow
   *
   * @remarks
   * Delete an automation flow. Past executions are kept for auditing and stay readable.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationDeleteFlowError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationDeleteFlow(
    request: Automation.AutomationDeleteFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsResponse1, Automation.AutomationDeleteFlowError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/automations/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsResponse1InternalSchema },
        errorFactory: Automation.AutomationDeleteFlowError,
      },
      options,
    );
  }

  /**
   * Get an automation execution
   *
   * @remarks
   * Get a single automation run by id, including its input event, its per-step results and any
   * error that stopped it.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationGetExecutionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationGetExecution(
    request: Automation.AutomationGetExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationExecutionsResponse, Automation.AutomationGetExecutionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/automation-executions/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AutomationExecutionsResponseInternalSchema },
        errorFactory: Automation.AutomationGetExecutionError,
      },
      options,
    );
  }

  /**
   * Get an automation flow
   *
   * @remarks
   * Get a single automation flow by id, including its trigger, its steps and its current status.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationGetFlowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationGetFlow(
    request: Automation.AutomationGetFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsResponse1, Automation.AutomationGetFlowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/automations/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsResponse1InternalSchema },
        errorFactory: Automation.AutomationGetFlowError,
      },
      options,
    );
  }

  /**
   * Get automation flow executions
   *
   * @remarks
   * List the runs of a single automation flow, newest first. Use it to see which events matched and
   * how each run ended. Paginate with `offset` (`limit` max 500, default 10) or by passing the
   * previous response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is
   * returned on the first page only.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationGetFlowExecutionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationGetFlowExecutions(
    request: Automation.AutomationGetFlowExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsExecutionsResponse, Automation.AutomationGetFlowExecutionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/automations/{id}/executions"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "flowVersionId", value: request.flowVersionId, schema: s.optional(s.string()) },
          { name: "triggerId", value: request.triggerId, schema: s.optional(s.string()) },
          { name: "socialAccountId", value: request.socialAccountId, schema: s.optional(s.string()) },
          { name: "platform", value: request.platform, schema: s.optional(s.lazy(() => platformSchema)) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status31Schema)) },
          { name: "conversationId", value: request.conversationId, schema: s.optional(s.string()) },
          { name: "fetchedCommentId", value: request.fetchedCommentId, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.int()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.int()), 10) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsExecutionsResponseInternalSchema },
        errorFactory: Automation.AutomationGetFlowExecutionsError,
      },
      options,
    );
  }

  /**
   * Get automation flows
   *
   * @remarks
   * List the automation flows of a team, newest first. Filter by `socialAccountId`, `status` and
   * `platformScope`. Paginate with `offset` and `limit` (default 10). The response always carries
   * the full `total`.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationGetFlowsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationGetFlows(
    request: Automation.AutomationGetFlowsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsResponse, Automation.AutomationGetFlowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/automations"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusBundleSocialAutomationApiSchema)),
          },
          {
            name: "platformScope",
            value: request.platformScope,
            schema: s.optional(s.lazy(() => platformScopeSchema)),
          },
          { name: "socialAccountId", value: request.socialAccountId, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.float64()), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsResponseInternalSchema },
        errorFactory: Automation.AutomationGetFlowsError,
      },
      options,
    );
  }

  /**
   * Get automation provider settings
   *
   * @remarks
   * List the platform-side automation settings stored per social account, such as the Instagram
   * icebreakers or persistent menu we manage for you. Paginate with `offset` and `limit` (default
   * 10). The response always carries the full `total`.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationGetProviderSettingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationGetProviderSettings(
    request: Automation.AutomationGetProviderSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationProviderSettingsResponse, Automation.AutomationGetProviderSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/automation-provider-settings"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "platform", value: request.platform, schema: s.optional(s.lazy(() => platformSchema)) },
          { name: "socialAccountId", value: request.socialAccountId, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type112Schema)) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status59Schema)) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.float64()), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AutomationProviderSettingsResponseInternalSchema },
        errorFactory: Automation.AutomationGetProviderSettingsError,
      },
      options,
    );
  }

  /**
   * Pause an automation flow
   *
   * @remarks
   * Stop a live flow from triggering on new events while keeping its configuration intact.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationPauseFlowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationPauseFlow(
    request: Automation.AutomationPauseFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsPauseResponse, Automation.AutomationPauseFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/automations/{id}/pause"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsPauseResponseInternalSchema },
        errorFactory: Automation.AutomationPauseFlowError,
      },
      options,
    );
  }

  /**
   * Publish an automation flow
   *
   * @remarks
   * Validate a draft flow and make it live, so that matching events start triggering it. Returns
   * 400 when the flow is not valid.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationPublishFlowError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationPublishFlow(
    request: Automation.AutomationPublishFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsPublishResponse, Automation.AutomationPublishFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/automations/{id}/publish"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AutomationsPublishRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsPublishResponseInternalSchema },
        errorFactory: Automation.AutomationPublishFlowError,
      },
      options,
    );
  }

  /**
   * Send a rich automation message to a conversation
   *
   * @remarks
   * Send a rich message, such as a button or card template, into a conversation using the same
   * renderer the automation steps use. Returns 503 while messaging sending is temporarily disabled.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationSendRichMessageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationSendRichMessage(
    request: Automation.AutomationSendRichMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationRichMessagesConversationsResponse, Automation.AutomationSendRichMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/automation-rich-messages/conversations/{conversationId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AutomationRichMessagesConversationsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1AutomationRichMessagesConversationsResponseSchema },
        errorFactory: Automation.AutomationSendRichMessageError,
      },
      options,
    );
  }

  /**
   * Sync automation provider settings
   *
   * @remarks
   * Re-push a stored automation setting to the platform, for example after a failed sync or a
   * reconnected account.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationSyncProviderSettingError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationSyncProviderSetting(
    request: Automation.AutomationSyncProviderSettingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationProviderSettingsSyncResponse, Automation.AutomationSyncProviderSettingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/automation-provider-settings/{id}/sync"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AutomationProviderSettingsSyncResponseInternalSchema },
        errorFactory: Automation.AutomationSyncProviderSettingError,
      },
      options,
    );
  }

  /**
   * Run an automation flow test
   *
   * @remarks
   * Run a flow once against a sample event and return the resulting execution. Steps that send a
   * message really send it, so a test returns 503 while messaging sending is temporarily disabled.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationTestFlowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationTestFlow(
    request: Automation.AutomationTestFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsTestResponse, Automation.AutomationTestFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/automations/{id}/test"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AutomationsTestRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsTestResponseInternalSchema },
        errorFactory: Automation.AutomationTestFlowError,
      },
      options,
    );
  }

  /**
   * Update an automation flow
   *
   * @remarks
   * Update the name, trigger or steps of an automation flow. Changes to a published flow take
   * effect on the next matching event.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationUpdateFlowError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationUpdateFlow(
    request: Automation.AutomationUpdateFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationsResponse1, Automation.AutomationUpdateFlowError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/automations/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AutomationsRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1AutomationsResponse1InternalSchema },
        errorFactory: Automation.AutomationUpdateFlowError,
      },
      options,
    );
  }

  /**
   * Create or update automation provider settings
   *
   * @remarks
   * Create or replace the automation setting of a given type for a social account, and push it to
   * the platform.
   *
   * @returns 200
   *
   * @throws {@link Automation.AutomationUpsertProviderSettingError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  automationUpsertProviderSetting(
    request: Automation.AutomationUpsertProviderSettingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AutomationProviderSettingsResponse1, Automation.AutomationUpsertProviderSettingError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/automation-provider-settings/{socialAccountId}/{type}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "socialAccountId", value: request.socialAccountId, schema: s.string() },
          { name: "type", value: request.type, schema: type112Schema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AutomationProviderSettingsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1AutomationProviderSettingsResponse1InternalSchema },
        errorFactory: Automation.AutomationUpsertProviderSettingError,
      },
      options,
    );
  }
}

export namespace Automation {
  export type AutomationActivateFlowRequest = {
    id: string;
  };

  export class AutomationActivateFlowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AutomationsActivate400Error1", ApiV1AutomationsActivate400Error1>
      | Declared<"apiV1AutomationsActivate401Error1", ApiV1AutomationsActivate401Error1>
      | Declared<"apiV1AutomationsActivate403Error1", ApiV1AutomationsActivate403Error1>
      | Declared<"apiV1AutomationsActivate404Error1", ApiV1AutomationsActivate404Error1>
      | Declared<"apiV1AutomationsActivate429Error1", ApiV1AutomationsActivate429Error1>
      | Declared<"apiV1AutomationsActivate500Error1", ApiV1AutomationsActivate500Error1>
      | Declared<"apiV1AutomationsActivate502Error1", ApiV1AutomationsActivate502Error1>
      | Declared<"apiV1AutomationsActivate503Error1", ApiV1AutomationsActivate503Error1>
      | Declared<"apiV1AutomationsActivate504Error1", ApiV1AutomationsActivate504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationActivateFlowError> = [
      {
        on: 400,
        kind: "apiV1AutomationsActivate400Error1",
        decode: { kind: "json", schema: apiV1AutomationsActivate400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationsActivate401Error1",
        decode: { kind: "json", schema: apiV1AutomationsActivate401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationsActivate403Error1",
        decode: { kind: "json", schema: apiV1AutomationsActivate403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationsActivate404Error1",
        decode: { kind: "json", schema: apiV1AutomationsActivate404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationsActivate429Error1",
        decode: { kind: "json", schema: apiV1AutomationsActivate429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationsActivate500Error1",
        decode: { kind: "json", schema: apiV1AutomationsActivate500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationsActivate502Error1",
        decode: { kind: "json", schema: apiV1AutomationsActivate502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationsActivate503Error1",
        decode: { kind: "json", schema: apiV1AutomationsActivate503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationsActivate504Error1",
        decode: { kind: "json", schema: apiV1AutomationsActivate504Error1Schema },
      },
    ];
  }

  export type AutomationArchiveFlowRequest = {
    id: string;
  };

  export class AutomationArchiveFlowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AutomationsArchive400Error1", ApiV1AutomationsArchive400Error1>
      | Declared<"apiV1AutomationsArchive401Error1", ApiV1AutomationsArchive401Error1>
      | Declared<"apiV1AutomationsArchive403Error1", ApiV1AutomationsArchive403Error1>
      | Declared<"apiV1AutomationsArchive404Error1", ApiV1AutomationsArchive404Error1>
      | Declared<"apiV1AutomationsArchive429Error1", ApiV1AutomationsArchive429Error1>
      | Declared<"apiV1AutomationsArchive500Error1", ApiV1AutomationsArchive500Error1>
      | Declared<"apiV1AutomationsArchive502Error1", ApiV1AutomationsArchive502Error1>
      | Declared<"apiV1AutomationsArchive503Error1", ApiV1AutomationsArchive503Error1>
      | Declared<"apiV1AutomationsArchive504Error1", ApiV1AutomationsArchive504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationArchiveFlowError> = [
      {
        on: 400,
        kind: "apiV1AutomationsArchive400Error1",
        decode: { kind: "json", schema: apiV1AutomationsArchive400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationsArchive401Error1",
        decode: { kind: "json", schema: apiV1AutomationsArchive401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationsArchive403Error1",
        decode: { kind: "json", schema: apiV1AutomationsArchive403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationsArchive404Error1",
        decode: { kind: "json", schema: apiV1AutomationsArchive404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationsArchive429Error1",
        decode: { kind: "json", schema: apiV1AutomationsArchive429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationsArchive500Error1",
        decode: { kind: "json", schema: apiV1AutomationsArchive500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationsArchive502Error1",
        decode: { kind: "json", schema: apiV1AutomationsArchive502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationsArchive503Error1",
        decode: { kind: "json", schema: apiV1AutomationsArchive503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationsArchive504Error1",
        decode: { kind: "json", schema: apiV1AutomationsArchive504Error1Schema },
      },
    ];
  }

  export type AutomationCopyFlowsRequest = {
    /** Body */
    body?: ApiV1AutomationsCopyRequest;
  };

  export class AutomationCopyFlowsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AutomationsCopy400Error1", ApiV1AutomationsCopy400Error1>
      | Declared<"apiV1AutomationsCopy401Error1", ApiV1AutomationsCopy401Error1>
      | Declared<"apiV1AutomationsCopy403Error1", ApiV1AutomationsCopy403Error1>
      | Declared<"apiV1AutomationsCopy404Error1", ApiV1AutomationsCopy404Error1>
      | Declared<"apiV1AutomationsCopy429Error1", ApiV1AutomationsCopy429Error1>
      | Declared<"apiV1AutomationsCopy500Error1", ApiV1AutomationsCopy500Error1>
      | Declared<"apiV1AutomationsCopy502Error1", ApiV1AutomationsCopy502Error1>
      | Declared<"apiV1AutomationsCopy503Error1", ApiV1AutomationsCopy503Error1>
      | Declared<"apiV1AutomationsCopy504Error1", ApiV1AutomationsCopy504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationCopyFlowsError> = [
      {
        on: 400,
        kind: "apiV1AutomationsCopy400Error1",
        decode: { kind: "json", schema: apiV1AutomationsCopy400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationsCopy401Error1",
        decode: { kind: "json", schema: apiV1AutomationsCopy401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationsCopy403Error1",
        decode: { kind: "json", schema: apiV1AutomationsCopy403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationsCopy404Error1",
        decode: { kind: "json", schema: apiV1AutomationsCopy404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationsCopy429Error1",
        decode: { kind: "json", schema: apiV1AutomationsCopy429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationsCopy500Error1",
        decode: { kind: "json", schema: apiV1AutomationsCopy500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationsCopy502Error1",
        decode: { kind: "json", schema: apiV1AutomationsCopy502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationsCopy503Error1",
        decode: { kind: "json", schema: apiV1AutomationsCopy503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationsCopy504Error1",
        decode: { kind: "json", schema: apiV1AutomationsCopy504Error1Schema },
      },
    ];
  }

  export type AutomationCreateFlowRequest = {
    /** Body */
    body?: ApiV1AutomationsRequest;
  };

  export class AutomationCreateFlowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Automations400Error1", ApiV1Automations400Error1>
      | Declared<"apiV1Automations401Error1", ApiV1Automations401Error1>
      | Declared<"apiV1Automations403Error1", ApiV1Automations403Error1>
      | Declared<"apiV1Automations404Error1", ApiV1Automations404Error1>
      | Declared<"apiV1Automations429Error1", ApiV1Automations429Error1>
      | Declared<"apiV1Automations500Error1", ApiV1Automations500Error1>
      | Declared<"apiV1Automations502Error1", ApiV1Automations502Error1>
      | Declared<"apiV1Automations503Error1", ApiV1Automations503Error1>
      | Declared<"apiV1Automations504Error1", ApiV1Automations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationCreateFlowError> = [
      {
        on: 400,
        kind: "apiV1Automations400Error1",
        decode: { kind: "json", schema: apiV1Automations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Automations401Error1",
        decode: { kind: "json", schema: apiV1Automations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Automations403Error1",
        decode: { kind: "json", schema: apiV1Automations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Automations404Error1",
        decode: { kind: "json", schema: apiV1Automations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Automations429Error1",
        decode: { kind: "json", schema: apiV1Automations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Automations500Error1",
        decode: { kind: "json", schema: apiV1Automations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Automations502Error1",
        decode: { kind: "json", schema: apiV1Automations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Automations503Error1",
        decode: { kind: "json", schema: apiV1Automations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Automations504Error1",
        decode: { kind: "json", schema: apiV1Automations504Error1Schema },
      },
    ];
  }

  export type AutomationDeleteFlowRequest = {
    id: string;
  };

  export class AutomationDeleteFlowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Automations400Error1", ApiV1Automations400Error1>
      | Declared<"apiV1Automations401Error1", ApiV1Automations401Error1>
      | Declared<"apiV1Automations403Error1", ApiV1Automations403Error1>
      | Declared<"apiV1Automations404Error1", ApiV1Automations404Error1>
      | Declared<"apiV1Automations429Error1", ApiV1Automations429Error1>
      | Declared<"apiV1Automations500Error1", ApiV1Automations500Error1>
      | Declared<"apiV1Automations502Error1", ApiV1Automations502Error1>
      | Declared<"apiV1Automations503Error1", ApiV1Automations503Error1>
      | Declared<"apiV1Automations504Error1", ApiV1Automations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationDeleteFlowError> = [
      {
        on: 400,
        kind: "apiV1Automations400Error1",
        decode: { kind: "json", schema: apiV1Automations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Automations401Error1",
        decode: { kind: "json", schema: apiV1Automations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Automations403Error1",
        decode: { kind: "json", schema: apiV1Automations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Automations404Error1",
        decode: { kind: "json", schema: apiV1Automations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Automations429Error1",
        decode: { kind: "json", schema: apiV1Automations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Automations500Error1",
        decode: { kind: "json", schema: apiV1Automations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Automations502Error1",
        decode: { kind: "json", schema: apiV1Automations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Automations503Error1",
        decode: { kind: "json", schema: apiV1Automations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Automations504Error1",
        decode: { kind: "json", schema: apiV1Automations504Error1Schema },
      },
    ];
  }

  export type AutomationGetExecutionRequest = {
    id: string;
  };

  export class AutomationGetExecutionError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AutomationExecutions400Error1", ApiV1AutomationExecutions400Error1>
      | Declared<"apiV1AutomationExecutions401Error1", ApiV1AutomationExecutions401Error1>
      | Declared<"apiV1AutomationExecutions403Error1", ApiV1AutomationExecutions403Error1>
      | Declared<"apiV1AutomationExecutions404Error1", ApiV1AutomationExecutions404Error1>
      | Declared<"apiV1AutomationExecutions429Error1", ApiV1AutomationExecutions429Error1>
      | Declared<"apiV1AutomationExecutions500Error1", ApiV1AutomationExecutions500Error1>
      | Declared<"apiV1AutomationExecutions502Error1", ApiV1AutomationExecutions502Error1>
      | Declared<"apiV1AutomationExecutions503Error1", ApiV1AutomationExecutions503Error1>
      | Declared<"apiV1AutomationExecutions504Error1", ApiV1AutomationExecutions504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationGetExecutionError> = [
      {
        on: 400,
        kind: "apiV1AutomationExecutions400Error1",
        decode: { kind: "json", schema: apiV1AutomationExecutions400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationExecutions401Error1",
        decode: { kind: "json", schema: apiV1AutomationExecutions401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationExecutions403Error1",
        decode: { kind: "json", schema: apiV1AutomationExecutions403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationExecutions404Error1",
        decode: { kind: "json", schema: apiV1AutomationExecutions404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationExecutions429Error1",
        decode: { kind: "json", schema: apiV1AutomationExecutions429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationExecutions500Error1",
        decode: { kind: "json", schema: apiV1AutomationExecutions500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationExecutions502Error1",
        decode: { kind: "json", schema: apiV1AutomationExecutions502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationExecutions503Error1",
        decode: { kind: "json", schema: apiV1AutomationExecutions503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationExecutions504Error1",
        decode: { kind: "json", schema: apiV1AutomationExecutions504Error1Schema },
      },
    ];
  }

  export type AutomationGetFlowRequest = {
    id: string;
  };

  export class AutomationGetFlowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Automations400Error1", ApiV1Automations400Error1>
      | Declared<"apiV1Automations401Error1", ApiV1Automations401Error1>
      | Declared<"apiV1Automations403Error1", ApiV1Automations403Error1>
      | Declared<"apiV1Automations404Error1", ApiV1Automations404Error1>
      | Declared<"apiV1Automations429Error1", ApiV1Automations429Error1>
      | Declared<"apiV1Automations500Error1", ApiV1Automations500Error1>
      | Declared<"apiV1Automations502Error1", ApiV1Automations502Error1>
      | Declared<"apiV1Automations503Error1", ApiV1Automations503Error1>
      | Declared<"apiV1Automations504Error1", ApiV1Automations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationGetFlowError> = [
      {
        on: 400,
        kind: "apiV1Automations400Error1",
        decode: { kind: "json", schema: apiV1Automations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Automations401Error1",
        decode: { kind: "json", schema: apiV1Automations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Automations403Error1",
        decode: { kind: "json", schema: apiV1Automations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Automations404Error1",
        decode: { kind: "json", schema: apiV1Automations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Automations429Error1",
        decode: { kind: "json", schema: apiV1Automations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Automations500Error1",
        decode: { kind: "json", schema: apiV1Automations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Automations502Error1",
        decode: { kind: "json", schema: apiV1Automations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Automations503Error1",
        decode: { kind: "json", schema: apiV1Automations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Automations504Error1",
        decode: { kind: "json", schema: apiV1Automations504Error1Schema },
      },
    ];
  }

  export type AutomationGetFlowExecutionsRequest = {
    id: string;
    teamId: string;
    flowVersionId?: string;
    triggerId?: string;
    socialAccountId?: string;
    platform?: Platform;
    status?: Status31;
    conversationId?: string;
    fetchedCommentId?: string;
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
    cursor?: string | null;
  };

  export const automationGetFlowExecutionsRequestSchema: Schema<AutomationGetFlowExecutionsRequest> =
    s.lazySchema(() =>
      s.object<AutomationGetFlowExecutionsRequest>({
        id: s.string(),
        teamId: s.string(),
        flowVersionId: s.optional(s.string()),
        triggerId: s.optional(s.string()),
        socialAccountId: s.optional(s.string()),
        platform: s.optional(s.lazy(() => platformSchema)),
        status: s.optional(s.lazy(() => status31Schema)),
        conversationId: s.optional(s.string()),
        fetchedCommentId: s.optional(s.string()),
        offset: s.defaulted(s.nullable(s.int().check(s.gte(0))), 0),
        limit: s.defaulted(s.nullable(s.int().check(s.gte(1), s.lte(500))), 10),
        cursor: s.optionalNullable(s.string()),
      }),
    );

  export class AutomationGetFlowExecutionsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AutomationsExecutions400Error1", ApiV1AutomationsExecutions400Error1>
      | Declared<"apiV1AutomationsExecutions401Error1", ApiV1AutomationsExecutions401Error1>
      | Declared<"apiV1AutomationsExecutions403Error1", ApiV1AutomationsExecutions403Error1>
      | Declared<"apiV1AutomationsExecutions404Error1", ApiV1AutomationsExecutions404Error1>
      | Declared<"apiV1AutomationsExecutions429Error1", ApiV1AutomationsExecutions429Error1>
      | Declared<"apiV1AutomationsExecutions500Error1", ApiV1AutomationsExecutions500Error1>
      | Declared<"apiV1AutomationsExecutions502Error1", ApiV1AutomationsExecutions502Error1>
      | Declared<"apiV1AutomationsExecutions503Error1", ApiV1AutomationsExecutions503Error1>
      | Declared<"apiV1AutomationsExecutions504Error1", ApiV1AutomationsExecutions504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationGetFlowExecutionsError> = [
      {
        on: 400,
        kind: "apiV1AutomationsExecutions400Error1",
        decode: { kind: "json", schema: apiV1AutomationsExecutions400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationsExecutions401Error1",
        decode: { kind: "json", schema: apiV1AutomationsExecutions401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationsExecutions403Error1",
        decode: { kind: "json", schema: apiV1AutomationsExecutions403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationsExecutions404Error1",
        decode: { kind: "json", schema: apiV1AutomationsExecutions404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationsExecutions429Error1",
        decode: { kind: "json", schema: apiV1AutomationsExecutions429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationsExecutions500Error1",
        decode: { kind: "json", schema: apiV1AutomationsExecutions500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationsExecutions502Error1",
        decode: { kind: "json", schema: apiV1AutomationsExecutions502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationsExecutions503Error1",
        decode: { kind: "json", schema: apiV1AutomationsExecutions503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationsExecutions504Error1",
        decode: { kind: "json", schema: apiV1AutomationsExecutions504Error1Schema },
      },
    ];
  }

  export type AutomationGetFlowsRequest = {
    teamId: string;
    status?: StatusBundleSocialAutomationApi;
    platformScope?: PlatformScope;
    socialAccountId?: string;
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
  };

  export class AutomationGetFlowsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Automations400Error1", ApiV1Automations400Error1>
      | Declared<"apiV1Automations401Error1", ApiV1Automations401Error1>
      | Declared<"apiV1Automations403Error1", ApiV1Automations403Error1>
      | Declared<"apiV1Automations404Error1", ApiV1Automations404Error1>
      | Declared<"apiV1Automations429Error1", ApiV1Automations429Error1>
      | Declared<"apiV1Automations500Error1", ApiV1Automations500Error1>
      | Declared<"apiV1Automations502Error1", ApiV1Automations502Error1>
      | Declared<"apiV1Automations503Error1", ApiV1Automations503Error1>
      | Declared<"apiV1Automations504Error1", ApiV1Automations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationGetFlowsError> = [
      {
        on: 400,
        kind: "apiV1Automations400Error1",
        decode: { kind: "json", schema: apiV1Automations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Automations401Error1",
        decode: { kind: "json", schema: apiV1Automations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Automations403Error1",
        decode: { kind: "json", schema: apiV1Automations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Automations404Error1",
        decode: { kind: "json", schema: apiV1Automations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Automations429Error1",
        decode: { kind: "json", schema: apiV1Automations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Automations500Error1",
        decode: { kind: "json", schema: apiV1Automations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Automations502Error1",
        decode: { kind: "json", schema: apiV1Automations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Automations503Error1",
        decode: { kind: "json", schema: apiV1Automations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Automations504Error1",
        decode: { kind: "json", schema: apiV1Automations504Error1Schema },
      },
    ];
  }

  export type AutomationGetProviderSettingsRequest = {
    teamId: string;
    platform?: Platform;
    socialAccountId?: string;
    type?: Type112;
    status?: Status59;
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
  };

  export class AutomationGetProviderSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AutomationProviderSettings400Error1", ApiV1AutomationProviderSettings400Error1>
      | Declared<"apiV1AutomationProviderSettings401Error1", ApiV1AutomationProviderSettings401Error1>
      | Declared<"apiV1AutomationProviderSettings403Error1", ApiV1AutomationProviderSettings403Error1>
      | Declared<"apiV1AutomationProviderSettings404Error1", ApiV1AutomationProviderSettings404Error1>
      | Declared<"apiV1AutomationProviderSettings429Error1", ApiV1AutomationProviderSettings429Error1>
      | Declared<"apiV1AutomationProviderSettings500Error1", ApiV1AutomationProviderSettings500Error1>
      | Declared<"apiV1AutomationProviderSettings502Error1", ApiV1AutomationProviderSettings502Error1>
      | Declared<"apiV1AutomationProviderSettings503Error1", ApiV1AutomationProviderSettings503Error1>
      | Declared<"apiV1AutomationProviderSettings504Error1", ApiV1AutomationProviderSettings504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationGetProviderSettingsError> = [
      {
        on: 400,
        kind: "apiV1AutomationProviderSettings400Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationProviderSettings401Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationProviderSettings403Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationProviderSettings404Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationProviderSettings429Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationProviderSettings500Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationProviderSettings502Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationProviderSettings503Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationProviderSettings504Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings504Error1Schema },
      },
    ];
  }

  export type AutomationPauseFlowRequest = {
    id: string;
  };

  export class AutomationPauseFlowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AutomationsPause400Error1", ApiV1AutomationsPause400Error1>
      | Declared<"apiV1AutomationsPause401Error1", ApiV1AutomationsPause401Error1>
      | Declared<"apiV1AutomationsPause403Error1", ApiV1AutomationsPause403Error1>
      | Declared<"apiV1AutomationsPause404Error1", ApiV1AutomationsPause404Error1>
      | Declared<"apiV1AutomationsPause429Error1", ApiV1AutomationsPause429Error1>
      | Declared<"apiV1AutomationsPause500Error1", ApiV1AutomationsPause500Error1>
      | Declared<"apiV1AutomationsPause502Error1", ApiV1AutomationsPause502Error1>
      | Declared<"apiV1AutomationsPause503Error1", ApiV1AutomationsPause503Error1>
      | Declared<"apiV1AutomationsPause504Error1", ApiV1AutomationsPause504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationPauseFlowError> = [
      {
        on: 400,
        kind: "apiV1AutomationsPause400Error1",
        decode: { kind: "json", schema: apiV1AutomationsPause400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationsPause401Error1",
        decode: { kind: "json", schema: apiV1AutomationsPause401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationsPause403Error1",
        decode: { kind: "json", schema: apiV1AutomationsPause403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationsPause404Error1",
        decode: { kind: "json", schema: apiV1AutomationsPause404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationsPause429Error1",
        decode: { kind: "json", schema: apiV1AutomationsPause429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationsPause500Error1",
        decode: { kind: "json", schema: apiV1AutomationsPause500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationsPause502Error1",
        decode: { kind: "json", schema: apiV1AutomationsPause502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationsPause503Error1",
        decode: { kind: "json", schema: apiV1AutomationsPause503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationsPause504Error1",
        decode: { kind: "json", schema: apiV1AutomationsPause504Error1Schema },
      },
    ];
  }

  export type AutomationPublishFlowRequest = {
    id: string;
    /** Body */
    body?: ApiV1AutomationsPublishRequest;
  };

  export class AutomationPublishFlowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AutomationsPublish400Error1", ApiV1AutomationsPublish400Error1>
      | Declared<"apiV1AutomationsPublish401Error1", ApiV1AutomationsPublish401Error1>
      | Declared<"apiV1AutomationsPublish403Error1", ApiV1AutomationsPublish403Error1>
      | Declared<"apiV1AutomationsPublish404Error1", ApiV1AutomationsPublish404Error1>
      | Declared<"apiV1AutomationsPublish429Error1", ApiV1AutomationsPublish429Error1>
      | Declared<"apiV1AutomationsPublish500Error1", ApiV1AutomationsPublish500Error1>
      | Declared<"apiV1AutomationsPublish502Error1", ApiV1AutomationsPublish502Error1>
      | Declared<"apiV1AutomationsPublish503Error1", ApiV1AutomationsPublish503Error1>
      | Declared<"apiV1AutomationsPublish504Error1", ApiV1AutomationsPublish504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationPublishFlowError> = [
      {
        on: 400,
        kind: "apiV1AutomationsPublish400Error1",
        decode: { kind: "json", schema: apiV1AutomationsPublish400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationsPublish401Error1",
        decode: { kind: "json", schema: apiV1AutomationsPublish401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationsPublish403Error1",
        decode: { kind: "json", schema: apiV1AutomationsPublish403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationsPublish404Error1",
        decode: { kind: "json", schema: apiV1AutomationsPublish404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationsPublish429Error1",
        decode: { kind: "json", schema: apiV1AutomationsPublish429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationsPublish500Error1",
        decode: { kind: "json", schema: apiV1AutomationsPublish500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationsPublish502Error1",
        decode: { kind: "json", schema: apiV1AutomationsPublish502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationsPublish503Error1",
        decode: { kind: "json", schema: apiV1AutomationsPublish503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationsPublish504Error1",
        decode: { kind: "json", schema: apiV1AutomationsPublish504Error1Schema },
      },
    ];
  }

  export type AutomationSendRichMessageRequest = {
    conversationId: string;
    /** Body */
    body?: ApiV1AutomationRichMessagesConversationsRequest;
  };

  export class AutomationSendRichMessageError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1AutomationRichMessagesConversations400Error1",
          ApiV1AutomationRichMessagesConversations400Error1
        >
      | Declared<
          "apiV1AutomationRichMessagesConversations401Error1",
          ApiV1AutomationRichMessagesConversations401Error1
        >
      | Declared<
          "apiV1AutomationRichMessagesConversations403Error1",
          ApiV1AutomationRichMessagesConversations403Error1
        >
      | Declared<
          "apiV1AutomationRichMessagesConversations404Error1",
          ApiV1AutomationRichMessagesConversations404Error1
        >
      | Declared<
          "apiV1AutomationRichMessagesConversations429Error1",
          ApiV1AutomationRichMessagesConversations429Error1
        >
      | Declared<
          "apiV1AutomationRichMessagesConversations500Error1",
          ApiV1AutomationRichMessagesConversations500Error1
        >
      | Declared<
          "apiV1AutomationRichMessagesConversations502Error1",
          ApiV1AutomationRichMessagesConversations502Error1
        >
      | Declared<
          "apiV1AutomationRichMessagesConversations503Error1",
          ApiV1AutomationRichMessagesConversations503Error1
        >
      | Declared<
          "apiV1AutomationRichMessagesConversations504Error1",
          ApiV1AutomationRichMessagesConversations504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationSendRichMessageError> = [
      {
        on: 400,
        kind: "apiV1AutomationRichMessagesConversations400Error1",
        decode: { kind: "json", schema: apiV1AutomationRichMessagesConversations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationRichMessagesConversations401Error1",
        decode: { kind: "json", schema: apiV1AutomationRichMessagesConversations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationRichMessagesConversations403Error1",
        decode: { kind: "json", schema: apiV1AutomationRichMessagesConversations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationRichMessagesConversations404Error1",
        decode: { kind: "json", schema: apiV1AutomationRichMessagesConversations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationRichMessagesConversations429Error1",
        decode: { kind: "json", schema: apiV1AutomationRichMessagesConversations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationRichMessagesConversations500Error1",
        decode: { kind: "json", schema: apiV1AutomationRichMessagesConversations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationRichMessagesConversations502Error1",
        decode: { kind: "json", schema: apiV1AutomationRichMessagesConversations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationRichMessagesConversations503Error1",
        decode: { kind: "json", schema: apiV1AutomationRichMessagesConversations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationRichMessagesConversations504Error1",
        decode: { kind: "json", schema: apiV1AutomationRichMessagesConversations504Error1Schema },
      },
    ];
  }

  export type AutomationSyncProviderSettingRequest = {
    id: string;
  };

  export class AutomationSyncProviderSettingError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AutomationProviderSettingsSync400Error1", ApiV1AutomationProviderSettingsSync400Error1>
      | Declared<"apiV1AutomationProviderSettingsSync401Error1", ApiV1AutomationProviderSettingsSync401Error1>
      | Declared<"apiV1AutomationProviderSettingsSync403Error1", ApiV1AutomationProviderSettingsSync403Error1>
      | Declared<"apiV1AutomationProviderSettingsSync404Error1", ApiV1AutomationProviderSettingsSync404Error1>
      | Declared<"apiV1AutomationProviderSettingsSync429Error1", ApiV1AutomationProviderSettingsSync429Error1>
      | Declared<"apiV1AutomationProviderSettingsSync500Error1", ApiV1AutomationProviderSettingsSync500Error1>
      | Declared<"apiV1AutomationProviderSettingsSync502Error1", ApiV1AutomationProviderSettingsSync502Error1>
      | Declared<"apiV1AutomationProviderSettingsSync503Error1", ApiV1AutomationProviderSettingsSync503Error1>
      | Declared<"apiV1AutomationProviderSettingsSync504Error1", ApiV1AutomationProviderSettingsSync504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationSyncProviderSettingError> = [
      {
        on: 400,
        kind: "apiV1AutomationProviderSettingsSync400Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettingsSync400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationProviderSettingsSync401Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettingsSync401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationProviderSettingsSync403Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettingsSync403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationProviderSettingsSync404Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettingsSync404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationProviderSettingsSync429Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettingsSync429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationProviderSettingsSync500Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettingsSync500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationProviderSettingsSync502Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettingsSync502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationProviderSettingsSync503Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettingsSync503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationProviderSettingsSync504Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettingsSync504Error1Schema },
      },
    ];
  }

  export type AutomationTestFlowRequest = {
    id: string;
    /** Body */
    body?: ApiV1AutomationsTestRequest;
  };

  export class AutomationTestFlowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AutomationsTest400Error1", ApiV1AutomationsTest400Error1>
      | Declared<"apiV1AutomationsTest401Error1", ApiV1AutomationsTest401Error1>
      | Declared<"apiV1AutomationsTest403Error1", ApiV1AutomationsTest403Error1>
      | Declared<"apiV1AutomationsTest404Error1", ApiV1AutomationsTest404Error1>
      | Declared<"apiV1AutomationsTest429Error1", ApiV1AutomationsTest429Error1>
      | Declared<"apiV1AutomationsTest500Error1", ApiV1AutomationsTest500Error1>
      | Declared<"apiV1AutomationsTest502Error1", ApiV1AutomationsTest502Error1>
      | Declared<"apiV1AutomationsTest503Error1", ApiV1AutomationsTest503Error1>
      | Declared<"apiV1AutomationsTest504Error1", ApiV1AutomationsTest504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationTestFlowError> = [
      {
        on: 400,
        kind: "apiV1AutomationsTest400Error1",
        decode: { kind: "json", schema: apiV1AutomationsTest400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationsTest401Error1",
        decode: { kind: "json", schema: apiV1AutomationsTest401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationsTest403Error1",
        decode: { kind: "json", schema: apiV1AutomationsTest403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationsTest404Error1",
        decode: { kind: "json", schema: apiV1AutomationsTest404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationsTest429Error1",
        decode: { kind: "json", schema: apiV1AutomationsTest429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationsTest500Error1",
        decode: { kind: "json", schema: apiV1AutomationsTest500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationsTest502Error1",
        decode: { kind: "json", schema: apiV1AutomationsTest502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationsTest503Error1",
        decode: { kind: "json", schema: apiV1AutomationsTest503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationsTest504Error1",
        decode: { kind: "json", schema: apiV1AutomationsTest504Error1Schema },
      },
    ];
  }

  export type AutomationUpdateFlowRequest = {
    id: string;
    /** Body */
    body?: ApiV1AutomationsRequest1;
  };

  export class AutomationUpdateFlowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Automations400Error1", ApiV1Automations400Error1>
      | Declared<"apiV1Automations401Error1", ApiV1Automations401Error1>
      | Declared<"apiV1Automations403Error1", ApiV1Automations403Error1>
      | Declared<"apiV1Automations404Error1", ApiV1Automations404Error1>
      | Declared<"apiV1Automations429Error1", ApiV1Automations429Error1>
      | Declared<"apiV1Automations500Error1", ApiV1Automations500Error1>
      | Declared<"apiV1Automations502Error1", ApiV1Automations502Error1>
      | Declared<"apiV1Automations503Error1", ApiV1Automations503Error1>
      | Declared<"apiV1Automations504Error1", ApiV1Automations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationUpdateFlowError> = [
      {
        on: 400,
        kind: "apiV1Automations400Error1",
        decode: { kind: "json", schema: apiV1Automations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Automations401Error1",
        decode: { kind: "json", schema: apiV1Automations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Automations403Error1",
        decode: { kind: "json", schema: apiV1Automations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Automations404Error1",
        decode: { kind: "json", schema: apiV1Automations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Automations429Error1",
        decode: { kind: "json", schema: apiV1Automations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Automations500Error1",
        decode: { kind: "json", schema: apiV1Automations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Automations502Error1",
        decode: { kind: "json", schema: apiV1Automations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Automations503Error1",
        decode: { kind: "json", schema: apiV1Automations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Automations504Error1",
        decode: { kind: "json", schema: apiV1Automations504Error1Schema },
      },
    ];
  }

  export type AutomationUpsertProviderSettingRequest = {
    socialAccountId: string;
    type: Type112;
    /** Body */
    body?: ApiV1AutomationProviderSettingsRequest;
  };

  export class AutomationUpsertProviderSettingError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AutomationProviderSettings400Error1", ApiV1AutomationProviderSettings400Error1>
      | Declared<"apiV1AutomationProviderSettings401Error1", ApiV1AutomationProviderSettings401Error1>
      | Declared<"apiV1AutomationProviderSettings403Error1", ApiV1AutomationProviderSettings403Error1>
      | Declared<"apiV1AutomationProviderSettings404Error1", ApiV1AutomationProviderSettings404Error1>
      | Declared<"apiV1AutomationProviderSettings429Error1", ApiV1AutomationProviderSettings429Error1>
      | Declared<"apiV1AutomationProviderSettings500Error1", ApiV1AutomationProviderSettings500Error1>
      | Declared<"apiV1AutomationProviderSettings502Error1", ApiV1AutomationProviderSettings502Error1>
      | Declared<"apiV1AutomationProviderSettings503Error1", ApiV1AutomationProviderSettings503Error1>
      | Declared<"apiV1AutomationProviderSettings504Error1", ApiV1AutomationProviderSettings504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AutomationUpsertProviderSettingError> = [
      {
        on: 400,
        kind: "apiV1AutomationProviderSettings400Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AutomationProviderSettings401Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AutomationProviderSettings403Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AutomationProviderSettings404Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AutomationProviderSettings429Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AutomationProviderSettings500Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AutomationProviderSettings502Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AutomationProviderSettings503Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AutomationProviderSettings504Error1",
        decode: { kind: "json", schema: apiV1AutomationProviderSettings504Error1Schema },
      },
    ];
  }
}
