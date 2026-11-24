from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.automation_activate_flow_error import (
    AutomationActivateFlowErrorBody,
    automation_activate_flow_error_mapper,
)
from ..errors.automation_archive_flow_error import AutomationArchiveFlowErrorBody, automation_archive_flow_error_mapper
from ..errors.automation_copy_flows_error import AutomationCopyFlowsErrorBody, automation_copy_flows_error_mapper
from ..errors.automation_create_flow_error import AutomationCreateFlowErrorBody, automation_create_flow_error_mapper
from ..errors.automation_delete_flow_error import AutomationDeleteFlowErrorBody, automation_delete_flow_error_mapper
from ..errors.automation_get_execution_error import (
    AutomationGetExecutionErrorBody,
    automation_get_execution_error_mapper,
)
from ..errors.automation_get_flow_error import AutomationGetFlowErrorBody, automation_get_flow_error_mapper
from ..errors.automation_get_flow_executions_error import (
    AutomationGetFlowExecutionsErrorBody,
    automation_get_flow_executions_error_mapper,
)
from ..errors.automation_get_flows_error import AutomationGetFlowsErrorBody, automation_get_flows_error_mapper
from ..errors.automation_get_provider_settings_error import (
    AutomationGetProviderSettingsErrorBody,
    automation_get_provider_settings_error_mapper,
)
from ..errors.automation_pause_flow_error import AutomationPauseFlowErrorBody, automation_pause_flow_error_mapper
from ..errors.automation_publish_flow_error import AutomationPublishFlowErrorBody, automation_publish_flow_error_mapper
from ..errors.automation_send_rich_message_error import (
    AutomationSendRichMessageErrorBody,
    automation_send_rich_message_error_mapper,
)
from ..errors.automation_sync_provider_setting_error import (
    AutomationSyncProviderSettingErrorBody,
    automation_sync_provider_setting_error_mapper,
)
from ..errors.automation_test_flow_error import AutomationTestFlowErrorBody, automation_test_flow_error_mapper
from ..errors.automation_update_flow_error import AutomationUpdateFlowErrorBody, automation_update_flow_error_mapper
from ..errors.automation_upsert_provider_setting_error import (
    AutomationUpsertProviderSettingErrorBody,
    automation_upsert_provider_setting_error_mapper,
)
from ..models.api_v1_automation_executions_response import ApiV1AutomationExecutionsResponse
from ..models.api_v1_automation_provider_settings_request import (
    ApiV1AutomationProviderSettingsRequest,
    ApiV1AutomationProviderSettingsRequestDict,
)
from ..models.api_v1_automation_provider_settings_response import ApiV1AutomationProviderSettingsResponse
from ..models.api_v1_automation_provider_settings_response1 import ApiV1AutomationProviderSettingsResponse1
from ..models.api_v1_automation_provider_settings_sync_response import ApiV1AutomationProviderSettingsSyncResponse
from ..models.api_v1_automation_rich_messages_conversations_request import (
    ApiV1AutomationRichMessagesConversationsRequest,
    ApiV1AutomationRichMessagesConversationsRequestDict,
)
from ..models.api_v1_automation_rich_messages_conversations_response import (
    ApiV1AutomationRichMessagesConversationsResponse,
)
from ..models.api_v1_automations_activate_response import ApiV1AutomationsActivateResponse
from ..models.api_v1_automations_archive_response import ApiV1AutomationsArchiveResponse
from ..models.api_v1_automations_copy_request import ApiV1AutomationsCopyRequest, ApiV1AutomationsCopyRequestDict
from ..models.api_v1_automations_copy_response import ApiV1AutomationsCopyResponse
from ..models.api_v1_automations_executions_response import ApiV1AutomationsExecutionsResponse
from ..models.api_v1_automations_pause_response import ApiV1AutomationsPauseResponse
from ..models.api_v1_automations_publish_request import (
    ApiV1AutomationsPublishRequest,
    ApiV1AutomationsPublishRequestDict,
)
from ..models.api_v1_automations_publish_response import ApiV1AutomationsPublishResponse
from ..models.api_v1_automations_request import ApiV1AutomationsRequest, ApiV1AutomationsRequestDict
from ..models.api_v1_automations_request1 import ApiV1AutomationsRequest1, ApiV1AutomationsRequest1Dict
from ..models.api_v1_automations_response import ApiV1AutomationsResponse
from ..models.api_v1_automations_response1 import ApiV1AutomationsResponse1
from ..models.api_v1_automations_test_request import ApiV1AutomationsTestRequest, ApiV1AutomationsTestRequestDict
from ..models.api_v1_automations_test_response import ApiV1AutomationsTestResponse
from ..models.enums.platform import PlatformOrStr
from ..models.enums.platform_scope import PlatformScopeOrStr
from ..models.enums.status31 import Status31OrStr
from ..models.enums.status59 import Status59OrStr
from ..models.enums.status_bundle_social_automation_api import StatusBundleSocialAutomationApiOrStr
from ..models.enums.type112 import Type112OrStr
from ..server.server import Server


class Automation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AutomationWithRawResponse(client, server, auth)

    def automation_activate_flow(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AutomationsActivateResponse:
        """Resume a paused flow so that it triggers on new events again.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsActivate400Error1 |
                ApiV1AutomationsActivate401Error1 | ApiV1AutomationsActivate403Error1 |
                ApiV1AutomationsActivate404Error1 | ApiV1AutomationsActivate429Error1 |
                ApiV1AutomationsActivate500Error1 | ApiV1AutomationsActivate502Error1 |
                ApiV1AutomationsActivate503Error1 | ApiV1AutomationsActivate504Error1 | RawError``."""
        return unwrap(self._with_raw_response.automation_activate_flow(id_, request_options=request_options))

    def automation_archive_flow(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AutomationsArchiveResponse:
        """Retire a flow without deleting it. Archived flows never trigger and are hidden from the default list.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsArchive400Error1 |
                ApiV1AutomationsArchive401Error1 | ApiV1AutomationsArchive403Error1 | ApiV1AutomationsArchive404Error1 |
                ApiV1AutomationsArchive429Error1 | ApiV1AutomationsArchive500Error1 | ApiV1AutomationsArchive502Error1 |
                ApiV1AutomationsArchive503Error1 | ApiV1AutomationsArchive504Error1 | RawError``."""
        return unwrap(self._with_raw_response.automation_archive_flow(id_, request_options=request_options))

    def automation_copy_flows(
        self,
        *,
        body: ApiV1AutomationsCopyRequest | ApiV1AutomationsCopyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsCopyResponse:
        """Duplicate one or more automation flows into another team. The copies are created as drafts so they can be
        re-pointed at that team's social accounts before going live.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsCopy400Error1 |
                ApiV1AutomationsCopy401Error1 | ApiV1AutomationsCopy403Error1 | ApiV1AutomationsCopy404Error1 |
                ApiV1AutomationsCopy429Error1 | ApiV1AutomationsCopy500Error1 | ApiV1AutomationsCopy502Error1 |
                ApiV1AutomationsCopy503Error1 | ApiV1AutomationsCopy504Error1 | RawError``."""
        return unwrap(self._with_raw_response.automation_copy_flows(body=body, request_options=request_options))

    def automation_create_flow(
        self,
        *,
        body: ApiV1AutomationsRequest | ApiV1AutomationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsResponse1:
        """Create an automation flow from a trigger and a list of steps. The flow starts as a draft and only runs once
        it is published.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Automations400Error1 |
                ApiV1Automations401Error1 | ApiV1Automations403Error1 | ApiV1Automations404Error1 |
                ApiV1Automations429Error1 | ApiV1Automations500Error1 | ApiV1Automations502Error1 |
                ApiV1Automations503Error1 | ApiV1Automations504Error1 | RawError``."""
        return unwrap(self._with_raw_response.automation_create_flow(body=body, request_options=request_options))

    def automation_delete_flow(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AutomationsResponse1:
        """Delete an automation flow. Past executions are kept for auditing and stay readable.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Automations400Error1 |
                ApiV1Automations401Error1 | ApiV1Automations403Error1 | ApiV1Automations404Error1 |
                ApiV1Automations429Error1 | ApiV1Automations500Error1 | ApiV1Automations502Error1 |
                ApiV1Automations503Error1 | ApiV1Automations504Error1 | RawError``."""
        return unwrap(self._with_raw_response.automation_delete_flow(id_, request_options=request_options))

    def automation_get_execution(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AutomationExecutionsResponse:
        """Get a single automation run by id, including its input event, its per-step results and any error that stopped
        it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationExecutions400Error1 |
                ApiV1AutomationExecutions401Error1 | ApiV1AutomationExecutions403Error1 |
                ApiV1AutomationExecutions404Error1 | ApiV1AutomationExecutions429Error1 |
                ApiV1AutomationExecutions500Error1 | ApiV1AutomationExecutions502Error1 |
                ApiV1AutomationExecutions503Error1 | ApiV1AutomationExecutions504Error1 | RawError``."""
        return unwrap(self._with_raw_response.automation_get_execution(id_, request_options=request_options))

    def automation_get_flow(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AutomationsResponse1:
        """Get a single automation flow by id, including its trigger, its steps and its current status.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Automations400Error1 |
                ApiV1Automations401Error1 | ApiV1Automations403Error1 | ApiV1Automations404Error1 |
                ApiV1Automations429Error1 | ApiV1Automations500Error1 | ApiV1Automations502Error1 |
                ApiV1Automations503Error1 | ApiV1Automations504Error1 | RawError``."""
        return unwrap(self._with_raw_response.automation_get_flow(id_, request_options=request_options))

    def automation_get_flow_executions(
        self,
        id_: str,
        team_id: str,
        *,
        flow_version_id: str | None = None,
        trigger_id: str | None = None,
        social_account_id: str | None = None,
        platform: PlatformOrStr | None = None,
        status: Status31OrStr | None = None,
        conversation_id: str | None = None,
        fetched_comment_id: str | None = None,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsExecutionsResponse:
        """List the runs of a single automation flow, newest first. Use it to see which events matched and how each run
        ended. Paginate with ``offset`` (``limit`` max 500, default 10) or by passing the previous response's
        ``nextCursor`` back as ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            id_: Value sent with the request.
            team_id: Value sent with the request.
            flow_version_id: Value sent with the request.
            trigger_id: Value sent with the request.
            social_account_id: Value sent with the request.
            platform: Value sent with the request.
            status: Value sent with the request.
            conversation_id: Value sent with the request.
            fetched_comment_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsExecutions400Error1 |
                ApiV1AutomationsExecutions401Error1 | ApiV1AutomationsExecutions403Error1 |
                ApiV1AutomationsExecutions404Error1 | ApiV1AutomationsExecutions429Error1 |
                ApiV1AutomationsExecutions500Error1 | ApiV1AutomationsExecutions502Error1 |
                ApiV1AutomationsExecutions503Error1 | ApiV1AutomationsExecutions504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.automation_get_flow_executions(
                id_,
                team_id,
                flow_version_id=flow_version_id,
                trigger_id=trigger_id,
                social_account_id=social_account_id,
                platform=platform,
                status=status,
                conversation_id=conversation_id,
                fetched_comment_id=fetched_comment_id,
                offset=offset,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    def automation_get_flows(
        self,
        team_id: str,
        *,
        status: StatusBundleSocialAutomationApiOrStr | None = None,
        platform_scope: PlatformScopeOrStr | None = None,
        social_account_id: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsResponse:
        """List the automation flows of a team, newest first. Filter by ``socialAccountId``, ``status`` and
        ``platformScope``. Paginate with ``offset`` and ``limit`` (default 10). The response always carries the full
        ``total``.

        Args:
            team_id: Value sent with the request.
            status: Value sent with the request.
            platform_scope: Value sent with the request.
            social_account_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Automations400Error1 |
                ApiV1Automations401Error1 | ApiV1Automations403Error1 | ApiV1Automations404Error1 |
                ApiV1Automations429Error1 | ApiV1Automations500Error1 | ApiV1Automations502Error1 |
                ApiV1Automations503Error1 | ApiV1Automations504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.automation_get_flows(
                team_id,
                status=status,
                platform_scope=platform_scope,
                social_account_id=social_account_id,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    def automation_get_provider_settings(
        self,
        team_id: str,
        *,
        platform: PlatformOrStr | None = None,
        social_account_id: str | None = None,
        type_: Type112OrStr | None = None,
        status: Status59OrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationProviderSettingsResponse:
        """List the platform-side automation settings stored per social account, such as the Instagram icebreakers or
        persistent menu we manage for you. Paginate with ``offset`` and ``limit`` (default 10). The response always
        carries the full ``total``.

        Args:
            team_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationProviderSettings400Error1 |
                ApiV1AutomationProviderSettings401Error1 | ApiV1AutomationProviderSettings403Error1 |
                ApiV1AutomationProviderSettings404Error1 | ApiV1AutomationProviderSettings429Error1 |
                ApiV1AutomationProviderSettings500Error1 | ApiV1AutomationProviderSettings502Error1 |
                ApiV1AutomationProviderSettings503Error1 | ApiV1AutomationProviderSettings504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.automation_get_provider_settings(
                team_id,
                platform=platform,
                social_account_id=social_account_id,
                type_=type_,
                status=status,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    def automation_pause_flow(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AutomationsPauseResponse:
        """Stop a live flow from triggering on new events while keeping its configuration intact.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsPause400Error1 |
                ApiV1AutomationsPause401Error1 | ApiV1AutomationsPause403Error1 | ApiV1AutomationsPause404Error1 |
                ApiV1AutomationsPause429Error1 | ApiV1AutomationsPause500Error1 | ApiV1AutomationsPause502Error1 |
                ApiV1AutomationsPause503Error1 | ApiV1AutomationsPause504Error1 | RawError``."""
        return unwrap(self._with_raw_response.automation_pause_flow(id_, request_options=request_options))

    def automation_publish_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsPublishRequest | ApiV1AutomationsPublishRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsPublishResponse:
        """Validate a draft flow and make it live, so that matching events start triggering it. Returns 400 when the
        flow is not valid.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsPublish400Error1 |
                ApiV1AutomationsPublish401Error1 | ApiV1AutomationsPublish403Error1 | ApiV1AutomationsPublish404Error1 |
                ApiV1AutomationsPublish429Error1 | ApiV1AutomationsPublish500Error1 | ApiV1AutomationsPublish502Error1 |
                ApiV1AutomationsPublish503Error1 | ApiV1AutomationsPublish504Error1 | RawError``."""
        return unwrap(self._with_raw_response.automation_publish_flow(id_, body=body, request_options=request_options))

    def automation_send_rich_message(
        self,
        conversation_id: str,
        *,
        body: (
            ApiV1AutomationRichMessagesConversationsRequest | ApiV1AutomationRichMessagesConversationsRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationRichMessagesConversationsResponse:
        """Send a rich message, such as a button or card template, into a conversation using the same renderer the
        automation steps use. Returns 503 while messaging sending is temporarily disabled.

        Args:
            conversation_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1AutomationRichMessagesConversations400Error1 | ApiV1AutomationRichMessagesConversations401Error1
                | ApiV1AutomationRichMessagesConversations403Error1 | ApiV1AutomationRichMessagesConversations404Error1
                | ApiV1AutomationRichMessagesConversations429Error1 | ApiV1AutomationRichMessagesConversations500Error1
                | ApiV1AutomationRichMessagesConversations502Error1 | ApiV1AutomationRichMessagesConversations503Error1
                | ApiV1AutomationRichMessagesConversations504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.automation_send_rich_message(
                conversation_id, body=body, request_options=request_options
            ),
        )

    def automation_sync_provider_setting(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AutomationProviderSettingsSyncResponse:
        """Re-push a stored automation setting to the platform, for example after a failed sync or a reconnected
        account.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationProviderSettingsSync400Error1 |
                ApiV1AutomationProviderSettingsSync401Error1 | ApiV1AutomationProviderSettingsSync403Error1 |
                ApiV1AutomationProviderSettingsSync404Error1 | ApiV1AutomationProviderSettingsSync429Error1 |
                ApiV1AutomationProviderSettingsSync500Error1 | ApiV1AutomationProviderSettingsSync502Error1 |
                ApiV1AutomationProviderSettingsSync503Error1 | ApiV1AutomationProviderSettingsSync504Error1 |
                RawError``."""
        return unwrap(self._with_raw_response.automation_sync_provider_setting(id_, request_options=request_options))

    def automation_test_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsTestRequest | ApiV1AutomationsTestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsTestResponse:
        """Run a flow once against a sample event and return the resulting execution. Steps that send a message really
        send it, so a test returns 503 while messaging sending is temporarily disabled.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsTest400Error1 |
                ApiV1AutomationsTest401Error1 | ApiV1AutomationsTest403Error1 | ApiV1AutomationsTest404Error1 |
                ApiV1AutomationsTest429Error1 | ApiV1AutomationsTest500Error1 | ApiV1AutomationsTest502Error1 |
                ApiV1AutomationsTest503Error1 | ApiV1AutomationsTest504Error1 | RawError``."""
        return unwrap(self._with_raw_response.automation_test_flow(id_, body=body, request_options=request_options))

    def automation_update_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsRequest1 | ApiV1AutomationsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsResponse1:
        """Update the name, trigger or steps of an automation flow. Changes to a published flow take effect on the next
        matching event.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Automations400Error1 |
                ApiV1Automations401Error1 | ApiV1Automations403Error1 | ApiV1Automations404Error1 |
                ApiV1Automations429Error1 | ApiV1Automations500Error1 | ApiV1Automations502Error1 |
                ApiV1Automations503Error1 | ApiV1Automations504Error1 | RawError``."""
        return unwrap(self._with_raw_response.automation_update_flow(id_, body=body, request_options=request_options))

    def automation_upsert_provider_setting(
        self,
        social_account_id: str,
        type_: Type112OrStr,
        *,
        body: ApiV1AutomationProviderSettingsRequest | ApiV1AutomationProviderSettingsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationProviderSettingsResponse1:
        """Create or replace the automation setting of a given type for a social account, and push it to the platform.

        Args:
            social_account_id: Value sent with the request.
            type_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationProviderSettings400Error1 |
                ApiV1AutomationProviderSettings401Error1 | ApiV1AutomationProviderSettings403Error1 |
                ApiV1AutomationProviderSettings404Error1 | ApiV1AutomationProviderSettings429Error1 |
                ApiV1AutomationProviderSettings500Error1 | ApiV1AutomationProviderSettings502Error1 |
                ApiV1AutomationProviderSettings503Error1 | ApiV1AutomationProviderSettings504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.automation_upsert_provider_setting(
                social_account_id, type_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AutomationWithRawResponse:
        return self._with_raw_response


class AsyncAutomation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAutomationWithRawResponse(client, server, auth)

    async def automation_activate_flow(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AutomationsActivateResponse:
        """Resume a paused flow so that it triggers on new events again.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsActivate400Error1 |
                ApiV1AutomationsActivate401Error1 | ApiV1AutomationsActivate403Error1 |
                ApiV1AutomationsActivate404Error1 | ApiV1AutomationsActivate429Error1 |
                ApiV1AutomationsActivate500Error1 | ApiV1AutomationsActivate502Error1 |
                ApiV1AutomationsActivate503Error1 | ApiV1AutomationsActivate504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.automation_activate_flow(id_, request_options=request_options))

    async def automation_archive_flow(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AutomationsArchiveResponse:
        """Retire a flow without deleting it. Archived flows never trigger and are hidden from the default list.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsArchive400Error1 |
                ApiV1AutomationsArchive401Error1 | ApiV1AutomationsArchive403Error1 | ApiV1AutomationsArchive404Error1 |
                ApiV1AutomationsArchive429Error1 | ApiV1AutomationsArchive500Error1 | ApiV1AutomationsArchive502Error1 |
                ApiV1AutomationsArchive503Error1 | ApiV1AutomationsArchive504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.automation_archive_flow(id_, request_options=request_options))

    async def automation_copy_flows(
        self,
        *,
        body: ApiV1AutomationsCopyRequest | ApiV1AutomationsCopyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsCopyResponse:
        """Duplicate one or more automation flows into another team. The copies are created as drafts so they can be
        re-pointed at that team's social accounts before going live.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsCopy400Error1 |
                ApiV1AutomationsCopy401Error1 | ApiV1AutomationsCopy403Error1 | ApiV1AutomationsCopy404Error1 |
                ApiV1AutomationsCopy429Error1 | ApiV1AutomationsCopy500Error1 | ApiV1AutomationsCopy502Error1 |
                ApiV1AutomationsCopy503Error1 | ApiV1AutomationsCopy504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.automation_copy_flows(body=body, request_options=request_options))

    async def automation_create_flow(
        self,
        *,
        body: ApiV1AutomationsRequest | ApiV1AutomationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsResponse1:
        """Create an automation flow from a trigger and a list of steps. The flow starts as a draft and only runs once
        it is published.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Automations400Error1 |
                ApiV1Automations401Error1 | ApiV1Automations403Error1 | ApiV1Automations404Error1 |
                ApiV1Automations429Error1 | ApiV1Automations500Error1 | ApiV1Automations502Error1 |
                ApiV1Automations503Error1 | ApiV1Automations504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.automation_create_flow(body=body, request_options=request_options))

    async def automation_delete_flow(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AutomationsResponse1:
        """Delete an automation flow. Past executions are kept for auditing and stay readable.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Automations400Error1 |
                ApiV1Automations401Error1 | ApiV1Automations403Error1 | ApiV1Automations404Error1 |
                ApiV1Automations429Error1 | ApiV1Automations500Error1 | ApiV1Automations502Error1 |
                ApiV1Automations503Error1 | ApiV1Automations504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.automation_delete_flow(id_, request_options=request_options))

    async def automation_get_execution(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AutomationExecutionsResponse:
        """Get a single automation run by id, including its input event, its per-step results and any error that stopped
        it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationExecutions400Error1 |
                ApiV1AutomationExecutions401Error1 | ApiV1AutomationExecutions403Error1 |
                ApiV1AutomationExecutions404Error1 | ApiV1AutomationExecutions429Error1 |
                ApiV1AutomationExecutions500Error1 | ApiV1AutomationExecutions502Error1 |
                ApiV1AutomationExecutions503Error1 | ApiV1AutomationExecutions504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.automation_get_execution(id_, request_options=request_options))

    async def automation_get_flow(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AutomationsResponse1:
        """Get a single automation flow by id, including its trigger, its steps and its current status.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Automations400Error1 |
                ApiV1Automations401Error1 | ApiV1Automations403Error1 | ApiV1Automations404Error1 |
                ApiV1Automations429Error1 | ApiV1Automations500Error1 | ApiV1Automations502Error1 |
                ApiV1Automations503Error1 | ApiV1Automations504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.automation_get_flow(id_, request_options=request_options))

    async def automation_get_flow_executions(
        self,
        id_: str,
        team_id: str,
        *,
        flow_version_id: str | None = None,
        trigger_id: str | None = None,
        social_account_id: str | None = None,
        platform: PlatformOrStr | None = None,
        status: Status31OrStr | None = None,
        conversation_id: str | None = None,
        fetched_comment_id: str | None = None,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsExecutionsResponse:
        """List the runs of a single automation flow, newest first. Use it to see which events matched and how each run
        ended. Paginate with ``offset`` (``limit`` max 500, default 10) or by passing the previous response's
        ``nextCursor`` back as ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            id_: Value sent with the request.
            team_id: Value sent with the request.
            flow_version_id: Value sent with the request.
            trigger_id: Value sent with the request.
            social_account_id: Value sent with the request.
            platform: Value sent with the request.
            status: Value sent with the request.
            conversation_id: Value sent with the request.
            fetched_comment_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsExecutions400Error1 |
                ApiV1AutomationsExecutions401Error1 | ApiV1AutomationsExecutions403Error1 |
                ApiV1AutomationsExecutions404Error1 | ApiV1AutomationsExecutions429Error1 |
                ApiV1AutomationsExecutions500Error1 | ApiV1AutomationsExecutions502Error1 |
                ApiV1AutomationsExecutions503Error1 | ApiV1AutomationsExecutions504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.automation_get_flow_executions(
                id_,
                team_id,
                flow_version_id=flow_version_id,
                trigger_id=trigger_id,
                social_account_id=social_account_id,
                platform=platform,
                status=status,
                conversation_id=conversation_id,
                fetched_comment_id=fetched_comment_id,
                offset=offset,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    async def automation_get_flows(
        self,
        team_id: str,
        *,
        status: StatusBundleSocialAutomationApiOrStr | None = None,
        platform_scope: PlatformScopeOrStr | None = None,
        social_account_id: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsResponse:
        """List the automation flows of a team, newest first. Filter by ``socialAccountId``, ``status`` and
        ``platformScope``. Paginate with ``offset`` and ``limit`` (default 10). The response always carries the full
        ``total``.

        Args:
            team_id: Value sent with the request.
            status: Value sent with the request.
            platform_scope: Value sent with the request.
            social_account_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Automations400Error1 |
                ApiV1Automations401Error1 | ApiV1Automations403Error1 | ApiV1Automations404Error1 |
                ApiV1Automations429Error1 | ApiV1Automations500Error1 | ApiV1Automations502Error1 |
                ApiV1Automations503Error1 | ApiV1Automations504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.automation_get_flows(
                team_id,
                status=status,
                platform_scope=platform_scope,
                social_account_id=social_account_id,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    async def automation_get_provider_settings(
        self,
        team_id: str,
        *,
        platform: PlatformOrStr | None = None,
        social_account_id: str | None = None,
        type_: Type112OrStr | None = None,
        status: Status59OrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationProviderSettingsResponse:
        """List the platform-side automation settings stored per social account, such as the Instagram icebreakers or
        persistent menu we manage for you. Paginate with ``offset`` and ``limit`` (default 10). The response always
        carries the full ``total``.

        Args:
            team_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationProviderSettings400Error1 |
                ApiV1AutomationProviderSettings401Error1 | ApiV1AutomationProviderSettings403Error1 |
                ApiV1AutomationProviderSettings404Error1 | ApiV1AutomationProviderSettings429Error1 |
                ApiV1AutomationProviderSettings500Error1 | ApiV1AutomationProviderSettings502Error1 |
                ApiV1AutomationProviderSettings503Error1 | ApiV1AutomationProviderSettings504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.automation_get_provider_settings(
                team_id,
                platform=platform,
                social_account_id=social_account_id,
                type_=type_,
                status=status,
                offset=offset,
                limit=limit,
                request_options=request_options,
            ),
        )

    async def automation_pause_flow(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AutomationsPauseResponse:
        """Stop a live flow from triggering on new events while keeping its configuration intact.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsPause400Error1 |
                ApiV1AutomationsPause401Error1 | ApiV1AutomationsPause403Error1 | ApiV1AutomationsPause404Error1 |
                ApiV1AutomationsPause429Error1 | ApiV1AutomationsPause500Error1 | ApiV1AutomationsPause502Error1 |
                ApiV1AutomationsPause503Error1 | ApiV1AutomationsPause504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.automation_pause_flow(id_, request_options=request_options))

    async def automation_publish_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsPublishRequest | ApiV1AutomationsPublishRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsPublishResponse:
        """Validate a draft flow and make it live, so that matching events start triggering it. Returns 400 when the
        flow is not valid.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsPublish400Error1 |
                ApiV1AutomationsPublish401Error1 | ApiV1AutomationsPublish403Error1 | ApiV1AutomationsPublish404Error1 |
                ApiV1AutomationsPublish429Error1 | ApiV1AutomationsPublish500Error1 | ApiV1AutomationsPublish502Error1 |
                ApiV1AutomationsPublish503Error1 | ApiV1AutomationsPublish504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.automation_publish_flow(id_, body=body, request_options=request_options)
        )

    async def automation_send_rich_message(
        self,
        conversation_id: str,
        *,
        body: (
            ApiV1AutomationRichMessagesConversationsRequest | ApiV1AutomationRichMessagesConversationsRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationRichMessagesConversationsResponse:
        """Send a rich message, such as a button or card template, into a conversation using the same renderer the
        automation steps use. Returns 503 while messaging sending is temporarily disabled.

        Args:
            conversation_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is
                ``ApiV1AutomationRichMessagesConversations400Error1 | ApiV1AutomationRichMessagesConversations401Error1
                | ApiV1AutomationRichMessagesConversations403Error1 | ApiV1AutomationRichMessagesConversations404Error1
                | ApiV1AutomationRichMessagesConversations429Error1 | ApiV1AutomationRichMessagesConversations500Error1
                | ApiV1AutomationRichMessagesConversations502Error1 | ApiV1AutomationRichMessagesConversations503Error1
                | ApiV1AutomationRichMessagesConversations504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.automation_send_rich_message(
                conversation_id, body=body, request_options=request_options
            ),
        )

    async def automation_sync_provider_setting(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AutomationProviderSettingsSyncResponse:
        """Re-push a stored automation setting to the platform, for example after a failed sync or a reconnected
        account.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationProviderSettingsSync400Error1 |
                ApiV1AutomationProviderSettingsSync401Error1 | ApiV1AutomationProviderSettingsSync403Error1 |
                ApiV1AutomationProviderSettingsSync404Error1 | ApiV1AutomationProviderSettingsSync429Error1 |
                ApiV1AutomationProviderSettingsSync500Error1 | ApiV1AutomationProviderSettingsSync502Error1 |
                ApiV1AutomationProviderSettingsSync503Error1 | ApiV1AutomationProviderSettingsSync504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.automation_sync_provider_setting(id_, request_options=request_options)
        )

    async def automation_test_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsTestRequest | ApiV1AutomationsTestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsTestResponse:
        """Run a flow once against a sample event and return the resulting execution. Steps that send a message really
        send it, so a test returns 503 while messaging sending is temporarily disabled.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationsTest400Error1 |
                ApiV1AutomationsTest401Error1 | ApiV1AutomationsTest403Error1 | ApiV1AutomationsTest404Error1 |
                ApiV1AutomationsTest429Error1 | ApiV1AutomationsTest500Error1 | ApiV1AutomationsTest502Error1 |
                ApiV1AutomationsTest503Error1 | ApiV1AutomationsTest504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.automation_test_flow(id_, body=body, request_options=request_options)
        )

    async def automation_update_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsRequest1 | ApiV1AutomationsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationsResponse1:
        """Update the name, trigger or steps of an automation flow. Changes to a published flow take effect on the next
        matching event.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Automations400Error1 |
                ApiV1Automations401Error1 | ApiV1Automations403Error1 | ApiV1Automations404Error1 |
                ApiV1Automations429Error1 | ApiV1Automations500Error1 | ApiV1Automations502Error1 |
                ApiV1Automations503Error1 | ApiV1Automations504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.automation_update_flow(id_, body=body, request_options=request_options)
        )

    async def automation_upsert_provider_setting(
        self,
        social_account_id: str,
        type_: Type112OrStr,
        *,
        body: ApiV1AutomationProviderSettingsRequest | ApiV1AutomationProviderSettingsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1AutomationProviderSettingsResponse1:
        """Create or replace the automation setting of a given type for a social account, and push it to the platform.

        Args:
            social_account_id: Value sent with the request.
            type_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1AutomationProviderSettings400Error1 |
                ApiV1AutomationProviderSettings401Error1 | ApiV1AutomationProviderSettings403Error1 |
                ApiV1AutomationProviderSettings404Error1 | ApiV1AutomationProviderSettings429Error1 |
                ApiV1AutomationProviderSettings500Error1 | ApiV1AutomationProviderSettings502Error1 |
                ApiV1AutomationProviderSettings503Error1 | ApiV1AutomationProviderSettings504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.automation_upsert_provider_setting(
                social_account_id, type_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAutomationWithRawResponse:
        return self._with_raw_response


class AutomationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def automation_activate_flow(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationsActivateResponse, AutomationActivateFlowErrorBody]:
        """Resume a paused flow so that it triggers on new events again.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/{id}/activate"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsActivateResponse],
            error_mapper=automation_activate_flow_error_mapper,
            request_options=request_options,
        )

    def automation_archive_flow(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationsArchiveResponse, AutomationArchiveFlowErrorBody]:
        """Retire a flow without deleting it. Archived flows never trigger and are hidden from the default list.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsArchiveResponse],
            error_mapper=automation_archive_flow_error_mapper,
            request_options=request_options,
        )

    def automation_copy_flows(
        self,
        *,
        body: ApiV1AutomationsCopyRequest | ApiV1AutomationsCopyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsCopyResponse, AutomationCopyFlowsErrorBody]:
        """Duplicate one or more automation flows into another team. The copies are created as drafts so they can be
        re-pointed at that team's social accounts before going live.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/copy"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationsCopyRequest | ApiV1AutomationsCopyRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsCopyResponse],
            error_mapper=automation_copy_flows_error_mapper,
            request_options=request_options,
        )

    def automation_create_flow(
        self,
        *,
        body: ApiV1AutomationsRequest | ApiV1AutomationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsResponse1, AutomationCreateFlowErrorBody]:
        """Create an automation flow from a trigger and a list of steps. The flow starts as a draft and only runs once
        it is published.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationsRequest | ApiV1AutomationsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsResponse1],
            error_mapper=automation_create_flow_error_mapper,
            request_options=request_options,
        )

    def automation_delete_flow(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationsResponse1, AutomationDeleteFlowErrorBody]:
        """Delete an automation flow. Past executions are kept for auditing and stay readable.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/automations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsResponse1],
            error_mapper=automation_delete_flow_error_mapper,
            request_options=request_options,
        )

    def automation_get_execution(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationExecutionsResponse, AutomationGetExecutionErrorBody]:
        """Get a single automation run by id, including its input event, its per-step results and any error that stopped
        it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/automation-executions/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationExecutionsResponse],
            error_mapper=automation_get_execution_error_mapper,
            request_options=request_options,
        )

    def automation_get_flow(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationsResponse1, AutomationGetFlowErrorBody]:
        """Get a single automation flow by id, including its trigger, its steps and its current status.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/automations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsResponse1],
            error_mapper=automation_get_flow_error_mapper,
            request_options=request_options,
        )

    def automation_get_flow_executions(
        self,
        id_: str,
        team_id: str,
        *,
        flow_version_id: str | None = None,
        trigger_id: str | None = None,
        social_account_id: str | None = None,
        platform: PlatformOrStr | None = None,
        status: Status31OrStr | None = None,
        conversation_id: str | None = None,
        fetched_comment_id: str | None = None,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsExecutionsResponse, AutomationGetFlowExecutionsErrorBody]:
        """List the runs of a single automation flow, newest first. Use it to see which events matched and how each run
        ended. Paginate with ``offset`` (``limit`` max 500, default 10) or by passing the previous response's
        ``nextCursor`` back as ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            id_: Value sent with the request.
            team_id: Value sent with the request.
            flow_version_id: Value sent with the request.
            trigger_id: Value sent with the request.
            social_account_id: Value sent with the request.
            platform: Value sent with the request.
            status: Value sent with the request.
            conversation_id: Value sent with the request.
            fetched_comment_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/automations/{id}/executions"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("flowVersionId", flow_version_id),
                param[str | None]("triggerId", trigger_id),
                param[str | None]("socialAccountId", social_account_id),
                param[PlatformOrStr | None]("platform", platform),
                param[Status31OrStr | None]("status", status),
                param[str | None]("conversationId", conversation_id),
                param[str | None]("fetchedCommentId", fetched_comment_id),
                param[int | None]("offset", offset),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsExecutionsResponse],
            error_mapper=automation_get_flow_executions_error_mapper,
            request_options=request_options,
        )

    def automation_get_flows(
        self,
        team_id: str,
        *,
        status: StatusBundleSocialAutomationApiOrStr | None = None,
        platform_scope: PlatformScopeOrStr | None = None,
        social_account_id: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsResponse, AutomationGetFlowsErrorBody]:
        """List the automation flows of a team, newest first. Filter by ``socialAccountId``, ``status`` and
        ``platformScope``. Paginate with ``offset`` and ``limit`` (default 10). The response always carries the full
        ``total``.

        Args:
            team_id: Value sent with the request.
            status: Value sent with the request.
            platform_scope: Value sent with the request.
            social_account_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/automations"),
            query_params=[
                param[str]("teamId", team_id),
                param[StatusBundleSocialAutomationApiOrStr | None]("status", status),
                param[PlatformScopeOrStr | None]("platformScope", platform_scope),
                param[str | None]("socialAccountId", social_account_id),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsResponse],
            error_mapper=automation_get_flows_error_mapper,
            request_options=request_options,
        )

    def automation_get_provider_settings(
        self,
        team_id: str,
        *,
        platform: PlatformOrStr | None = None,
        social_account_id: str | None = None,
        type_: Type112OrStr | None = None,
        status: Status59OrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationProviderSettingsResponse, AutomationGetProviderSettingsErrorBody]:
        """List the platform-side automation settings stored per social account, such as the Instagram icebreakers or
        persistent menu we manage for you. Paginate with ``offset`` and ``limit`` (default 10). The response always
        carries the full ``total``.

        Args:
            team_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/automation-provider-settings"),
            query_params=[
                param[str]("teamId", team_id),
                param[PlatformOrStr | None]("platform", platform),
                param[str | None]("socialAccountId", social_account_id),
                param[Type112OrStr | None]("type", type_),
                param[Status59OrStr | None]("status", status),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationProviderSettingsResponse],
            error_mapper=automation_get_provider_settings_error_mapper,
            request_options=request_options,
        )

    def automation_pause_flow(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationsPauseResponse, AutomationPauseFlowErrorBody]:
        """Stop a live flow from triggering on new events while keeping its configuration intact.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/{id}/pause"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsPauseResponse],
            error_mapper=automation_pause_flow_error_mapper,
            request_options=request_options,
        )

    def automation_publish_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsPublishRequest | ApiV1AutomationsPublishRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsPublishResponse, AutomationPublishFlowErrorBody]:
        """Validate a draft flow and make it live, so that matching events start triggering it. Returns 400 when the
        flow is not valid.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/{id}/publish"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationsPublishRequest | ApiV1AutomationsPublishRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsPublishResponse],
            error_mapper=automation_publish_flow_error_mapper,
            request_options=request_options,
        )

    def automation_send_rich_message(
        self,
        conversation_id: str,
        *,
        body: (
            ApiV1AutomationRichMessagesConversationsRequest | ApiV1AutomationRichMessagesConversationsRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationRichMessagesConversationsResponse, AutomationSendRichMessageErrorBody]:
        """Send a rich message, such as a button or card template, into a conversation using the same renderer the
        automation steps use. Returns 503 while messaging sending is temporarily disabled.

        Args:
            conversation_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automation-rich-messages/conversations/{conversationId}"),
            path_params=[param[str]("conversationId", conversation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1AutomationRichMessagesConversationsRequest
                    | ApiV1AutomationRichMessagesConversationsRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationRichMessagesConversationsResponse],
            error_mapper=automation_send_rich_message_error_mapper,
            request_options=request_options,
        )

    def automation_sync_provider_setting(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationProviderSettingsSyncResponse, AutomationSyncProviderSettingErrorBody]:
        """Re-push a stored automation setting to the platform, for example after a failed sync or a reconnected
        account.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automation-provider-settings/{id}/sync"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationProviderSettingsSyncResponse],
            error_mapper=automation_sync_provider_setting_error_mapper,
            request_options=request_options,
        )

    def automation_test_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsTestRequest | ApiV1AutomationsTestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsTestResponse, AutomationTestFlowErrorBody]:
        """Run a flow once against a sample event and return the resulting execution. Steps that send a message really
        send it, so a test returns 503 while messaging sending is temporarily disabled.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/{id}/test"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationsTestRequest | ApiV1AutomationsTestRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsTestResponse],
            error_mapper=automation_test_flow_error_mapper,
            request_options=request_options,
        )

    def automation_update_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsRequest1 | ApiV1AutomationsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsResponse1, AutomationUpdateFlowErrorBody]:
        """Update the name, trigger or steps of an automation flow. Changes to a published flow take effect on the next
        matching event.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/automations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationsRequest1 | ApiV1AutomationsRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationsResponse1],
            error_mapper=automation_update_flow_error_mapper,
            request_options=request_options,
        )

    def automation_upsert_provider_setting(
        self,
        social_account_id: str,
        type_: Type112OrStr,
        *,
        body: ApiV1AutomationProviderSettingsRequest | ApiV1AutomationProviderSettingsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationProviderSettingsResponse1, AutomationUpsertProviderSettingErrorBody]:
        """Create or replace the automation setting of a given type for a social account, and push it to the platform.

        Args:
            social_account_id: Value sent with the request.
            type_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/automation-provider-settings/{socialAccountId}/{type}"),
            path_params=[param[str]("socialAccountId", social_account_id), param[Type112OrStr]("type", type_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationProviderSettingsRequest | ApiV1AutomationProviderSettingsRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1AutomationProviderSettingsResponse1],
            error_mapper=automation_upsert_provider_setting_error_mapper,
            request_options=request_options,
        )


class AsyncAutomationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def automation_activate_flow(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationsActivateResponse, AutomationActivateFlowErrorBody]:
        """Resume a paused flow so that it triggers on new events again.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/{id}/activate"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsActivateResponse],
            error_mapper=automation_activate_flow_error_mapper,
            request_options=request_options,
        )

    async def automation_archive_flow(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationsArchiveResponse, AutomationArchiveFlowErrorBody]:
        """Retire a flow without deleting it. Archived flows never trigger and are hidden from the default list.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsArchiveResponse],
            error_mapper=automation_archive_flow_error_mapper,
            request_options=request_options,
        )

    async def automation_copy_flows(
        self,
        *,
        body: ApiV1AutomationsCopyRequest | ApiV1AutomationsCopyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsCopyResponse, AutomationCopyFlowsErrorBody]:
        """Duplicate one or more automation flows into another team. The copies are created as drafts so they can be
        re-pointed at that team's social accounts before going live.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/copy"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationsCopyRequest | ApiV1AutomationsCopyRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsCopyResponse],
            error_mapper=automation_copy_flows_error_mapper,
            request_options=request_options,
        )

    async def automation_create_flow(
        self,
        *,
        body: ApiV1AutomationsRequest | ApiV1AutomationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsResponse1, AutomationCreateFlowErrorBody]:
        """Create an automation flow from a trigger and a list of steps. The flow starts as a draft and only runs once
        it is published.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationsRequest | ApiV1AutomationsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsResponse1],
            error_mapper=automation_create_flow_error_mapper,
            request_options=request_options,
        )

    async def automation_delete_flow(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationsResponse1, AutomationDeleteFlowErrorBody]:
        """Delete an automation flow. Past executions are kept for auditing and stay readable.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/automations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsResponse1],
            error_mapper=automation_delete_flow_error_mapper,
            request_options=request_options,
        )

    async def automation_get_execution(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationExecutionsResponse, AutomationGetExecutionErrorBody]:
        """Get a single automation run by id, including its input event, its per-step results and any error that stopped
        it.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/automation-executions/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationExecutionsResponse],
            error_mapper=automation_get_execution_error_mapper,
            request_options=request_options,
        )

    async def automation_get_flow(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationsResponse1, AutomationGetFlowErrorBody]:
        """Get a single automation flow by id, including its trigger, its steps and its current status.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/automations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsResponse1],
            error_mapper=automation_get_flow_error_mapper,
            request_options=request_options,
        )

    async def automation_get_flow_executions(
        self,
        id_: str,
        team_id: str,
        *,
        flow_version_id: str | None = None,
        trigger_id: str | None = None,
        social_account_id: str | None = None,
        platform: PlatformOrStr | None = None,
        status: Status31OrStr | None = None,
        conversation_id: str | None = None,
        fetched_comment_id: str | None = None,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsExecutionsResponse, AutomationGetFlowExecutionsErrorBody]:
        """List the runs of a single automation flow, newest first. Use it to see which events matched and how each run
        ended. Paginate with ``offset`` (``limit`` max 500, default 10) or by passing the previous response's
        ``nextCursor`` back as ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            id_: Value sent with the request.
            team_id: Value sent with the request.
            flow_version_id: Value sent with the request.
            trigger_id: Value sent with the request.
            social_account_id: Value sent with the request.
            platform: Value sent with the request.
            status: Value sent with the request.
            conversation_id: Value sent with the request.
            fetched_comment_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/automations/{id}/executions"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[str]("teamId", team_id),
                param[str | None]("flowVersionId", flow_version_id),
                param[str | None]("triggerId", trigger_id),
                param[str | None]("socialAccountId", social_account_id),
                param[PlatformOrStr | None]("platform", platform),
                param[Status31OrStr | None]("status", status),
                param[str | None]("conversationId", conversation_id),
                param[str | None]("fetchedCommentId", fetched_comment_id),
                param[int | None]("offset", offset),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsExecutionsResponse],
            error_mapper=automation_get_flow_executions_error_mapper,
            request_options=request_options,
        )

    async def automation_get_flows(
        self,
        team_id: str,
        *,
        status: StatusBundleSocialAutomationApiOrStr | None = None,
        platform_scope: PlatformScopeOrStr | None = None,
        social_account_id: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsResponse, AutomationGetFlowsErrorBody]:
        """List the automation flows of a team, newest first. Filter by ``socialAccountId``, ``status`` and
        ``platformScope``. Paginate with ``offset`` and ``limit`` (default 10). The response always carries the full
        ``total``.

        Args:
            team_id: Value sent with the request.
            status: Value sent with the request.
            platform_scope: Value sent with the request.
            social_account_id: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/automations"),
            query_params=[
                param[str]("teamId", team_id),
                param[StatusBundleSocialAutomationApiOrStr | None]("status", status),
                param[PlatformScopeOrStr | None]("platformScope", platform_scope),
                param[str | None]("socialAccountId", social_account_id),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsResponse],
            error_mapper=automation_get_flows_error_mapper,
            request_options=request_options,
        )

    async def automation_get_provider_settings(
        self,
        team_id: str,
        *,
        platform: PlatformOrStr | None = None,
        social_account_id: str | None = None,
        type_: Type112OrStr | None = None,
        status: Status59OrStr | None = None,
        offset: float | None = 0.0,
        limit: float | None = 10.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationProviderSettingsResponse, AutomationGetProviderSettingsErrorBody]:
        """List the platform-side automation settings stored per social account, such as the Instagram icebreakers or
        persistent menu we manage for you. Paginate with ``offset`` and ``limit`` (default 10). The response always
        carries the full ``total``.

        Args:
            team_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/automation-provider-settings"),
            query_params=[
                param[str]("teamId", team_id),
                param[PlatformOrStr | None]("platform", platform),
                param[str | None]("socialAccountId", social_account_id),
                param[Type112OrStr | None]("type", type_),
                param[Status59OrStr | None]("status", status),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationProviderSettingsResponse],
            error_mapper=automation_get_provider_settings_error_mapper,
            request_options=request_options,
        )

    async def automation_pause_flow(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationsPauseResponse, AutomationPauseFlowErrorBody]:
        """Stop a live flow from triggering on new events while keeping its configuration intact.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/{id}/pause"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsPauseResponse],
            error_mapper=automation_pause_flow_error_mapper,
            request_options=request_options,
        )

    async def automation_publish_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsPublishRequest | ApiV1AutomationsPublishRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsPublishResponse, AutomationPublishFlowErrorBody]:
        """Validate a draft flow and make it live, so that matching events start triggering it. Returns 400 when the
        flow is not valid.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/{id}/publish"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationsPublishRequest | ApiV1AutomationsPublishRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsPublishResponse],
            error_mapper=automation_publish_flow_error_mapper,
            request_options=request_options,
        )

    async def automation_send_rich_message(
        self,
        conversation_id: str,
        *,
        body: (
            ApiV1AutomationRichMessagesConversationsRequest | ApiV1AutomationRichMessagesConversationsRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationRichMessagesConversationsResponse, AutomationSendRichMessageErrorBody]:
        """Send a rich message, such as a button or card template, into a conversation using the same renderer the
        automation steps use. Returns 503 while messaging sending is temporarily disabled.

        Args:
            conversation_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automation-rich-messages/conversations/{conversationId}"),
            path_params=[param[str]("conversationId", conversation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApiV1AutomationRichMessagesConversationsRequest
                    | ApiV1AutomationRichMessagesConversationsRequestDict
                    | None
                )
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationRichMessagesConversationsResponse],
            error_mapper=automation_send_rich_message_error_mapper,
            request_options=request_options,
        )

    async def automation_sync_provider_setting(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AutomationProviderSettingsSyncResponse, AutomationSyncProviderSettingErrorBody]:
        """Re-push a stored automation setting to the platform, for example after a failed sync or a reconnected
        account.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automation-provider-settings/{id}/sync"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationProviderSettingsSyncResponse],
            error_mapper=automation_sync_provider_setting_error_mapper,
            request_options=request_options,
        )

    async def automation_test_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsTestRequest | ApiV1AutomationsTestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsTestResponse, AutomationTestFlowErrorBody]:
        """Run a flow once against a sample event and return the resulting execution. Steps that send a message really
        send it, so a test returns 503 while messaging sending is temporarily disabled.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/automations/{id}/test"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationsTestRequest | ApiV1AutomationsTestRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsTestResponse],
            error_mapper=automation_test_flow_error_mapper,
            request_options=request_options,
        )

    async def automation_update_flow(
        self,
        id_: str,
        *,
        body: ApiV1AutomationsRequest1 | ApiV1AutomationsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationsResponse1, AutomationUpdateFlowErrorBody]:
        """Update the name, trigger or steps of an automation flow. Changes to a published flow take effect on the next
        matching event.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/automations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationsRequest1 | ApiV1AutomationsRequest1Dict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationsResponse1],
            error_mapper=automation_update_flow_error_mapper,
            request_options=request_options,
        )

    async def automation_upsert_provider_setting(
        self,
        social_account_id: str,
        type_: Type112OrStr,
        *,
        body: ApiV1AutomationProviderSettingsRequest | ApiV1AutomationProviderSettingsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1AutomationProviderSettingsResponse1, AutomationUpsertProviderSettingErrorBody]:
        """Create or replace the automation setting of a given type for a social account, and push it to the platform.

        Args:
            social_account_id: Value sent with the request.
            type_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/automation-provider-settings/{socialAccountId}/{type}"),
            path_params=[param[str]("socialAccountId", social_account_id), param[Type112OrStr]("type", type_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1AutomationProviderSettingsRequest | ApiV1AutomationProviderSettingsRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1AutomationProviderSettingsResponse1],
            error_mapper=automation_upsert_provider_setting_error_mapper,
            request_options=request_options,
        )
