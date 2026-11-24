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
from ..errors.social_account_connect_error import SocialAccountConnectErrorBody, social_account_connect_error_mapper
from ..errors.social_account_connection_check_error import (
    SocialAccountConnectionCheckErrorBody,
    social_account_connection_check_error_mapper,
)
from ..errors.social_account_copy_error import SocialAccountCopyErrorBody, social_account_copy_error_mapper
from ..errors.social_account_create_portal_link_error import (
    SocialAccountCreatePortalLinkErrorBody,
    social_account_create_portal_link_error_mapper,
)
from ..errors.social_account_disable_messaging_error import (
    SocialAccountDisableMessagingErrorBody,
    social_account_disable_messaging_error_mapper,
)
from ..errors.social_account_disconnect_error import (
    SocialAccountDisconnectErrorBody,
    social_account_disconnect_error_mapper,
)
from ..errors.social_account_enable_messaging_error import (
    SocialAccountEnableMessagingErrorBody,
    social_account_enable_messaging_error_mapper,
)
from ..errors.social_account_get_accounts_to_delete_error import (
    SocialAccountGetAccountsToDeleteErrorBody,
    social_account_get_accounts_to_delete_error_mapper,
)
from ..errors.social_account_get_by_type_error import (
    SocialAccountGetByTypeErrorBody,
    social_account_get_by_type_error_mapper,
)
from ..errors.social_account_profile_refresh_error import (
    SocialAccountProfileRefreshErrorBody,
    social_account_profile_refresh_error_mapper,
)
from ..errors.social_account_refresh_channels_error import (
    SocialAccountRefreshChannelsErrorBody,
    social_account_refresh_channels_error_mapper,
)
from ..errors.social_account_set_channel_error import (
    SocialAccountSetChannelErrorBody,
    social_account_set_channel_error_mapper,
)
from ..errors.social_account_unset_channel_error import (
    SocialAccountUnsetChannelErrorBody,
    social_account_unset_channel_error_mapper,
)
from ..models.api_v1_social_account_by_type_response import ApiV1SocialAccountByTypeResponse
from ..models.api_v1_social_account_connect_request import (
    ApiV1SocialAccountConnectRequest,
    ApiV1SocialAccountConnectRequestDict,
)
from ..models.api_v1_social_account_connect_response import ApiV1SocialAccountConnectResponse
from ..models.api_v1_social_account_connection_check_request import (
    ApiV1SocialAccountConnectionCheckRequest,
    ApiV1SocialAccountConnectionCheckRequestDict,
)
from ..models.api_v1_social_account_connection_check_response import ApiV1SocialAccountConnectionCheckResponse
from ..models.api_v1_social_account_copy_request import ApiV1SocialAccountCopyRequest, ApiV1SocialAccountCopyRequestDict
from ..models.api_v1_social_account_copy_response import ApiV1SocialAccountCopyResponse
from ..models.api_v1_social_account_create_portal_link_request import (
    ApiV1SocialAccountCreatePortalLinkRequest,
    ApiV1SocialAccountCreatePortalLinkRequestDict,
)
from ..models.api_v1_social_account_create_portal_link_response import ApiV1SocialAccountCreatePortalLinkResponse
from ..models.api_v1_social_account_disconnect_request import (
    ApiV1SocialAccountDisconnectRequest,
    ApiV1SocialAccountDisconnectRequestDict,
)
from ..models.api_v1_social_account_disconnect_response import ApiV1SocialAccountDisconnectResponse
from ..models.api_v1_social_account_messaging_disable_request import (
    ApiV1SocialAccountMessagingDisableRequest,
    ApiV1SocialAccountMessagingDisableRequestDict,
)
from ..models.api_v1_social_account_messaging_disable_response import ApiV1SocialAccountMessagingDisableResponse
from ..models.api_v1_social_account_messaging_enable_request import (
    ApiV1SocialAccountMessagingEnableRequest,
    ApiV1SocialAccountMessagingEnableRequestDict,
)
from ..models.api_v1_social_account_messaging_enable_response import ApiV1SocialAccountMessagingEnableResponse
from ..models.api_v1_social_account_profile_refresh_request import (
    ApiV1SocialAccountProfileRefreshRequest,
    ApiV1SocialAccountProfileRefreshRequestDict,
)
from ..models.api_v1_social_account_profile_refresh_response import ApiV1SocialAccountProfileRefreshResponse
from ..models.api_v1_social_account_refresh_channels_request import (
    ApiV1SocialAccountRefreshChannelsRequest,
    ApiV1SocialAccountRefreshChannelsRequestDict,
)
from ..models.api_v1_social_account_refresh_channels_response import ApiV1SocialAccountRefreshChannelsResponse
from ..models.api_v1_social_account_set_channel_request import (
    ApiV1SocialAccountSetChannelRequest,
    ApiV1SocialAccountSetChannelRequestDict,
)
from ..models.api_v1_social_account_set_channel_response import ApiV1SocialAccountSetChannelResponse
from ..models.api_v1_social_account_to_delete_response import ApiV1SocialAccountToDeleteResponse
from ..models.api_v1_social_account_unset_channel_request import (
    ApiV1SocialAccountUnsetChannelRequest,
    ApiV1SocialAccountUnsetChannelRequestDict,
)
from ..models.api_v1_social_account_unset_channel_response import ApiV1SocialAccountUnsetChannelResponse
from ..models.enums.type import TypeOrStr
from ..server.server import Server


class SocialAccountApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SocialAccountApiWithRawResponse(client, server, auth)

    def social_account_connect(
        self,
        *,
        body: ApiV1SocialAccountConnectRequest | ApiV1SocialAccountConnectRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountConnectResponse:
        """Generate OAuth URL for social account connection. Redirect user to this URL to connect social account. For
        Mastodon and Bluesky an unusable ``serverUrl`` returns 400 with the reason, while a reachable-but-failing
        instance returns 502.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountConnect400Error1 |
                ApiV1SocialAccountConnect401Error1 | ApiV1SocialAccountConnect403Error1 |
                ApiV1SocialAccountConnect404Error1 | ApiV1SocialAccountConnect429Error1 |
                ApiV1SocialAccountConnect500Error1 | ApiV1SocialAccountConnect502Error1 |
                ApiV1SocialAccountConnect503Error1 | ApiV1SocialAccountConnect504Error1 | RawError``."""
        return unwrap(self._with_raw_response.social_account_connect(body=body, request_options=request_options))

    def social_account_connection_check(
        self,
        *,
        body: ApiV1SocialAccountConnectionCheckRequest | ApiV1SocialAccountConnectionCheckRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountConnectionCheckResponse:
        """Force an immediate check of whether a social account's authorization is still valid, instead of waiting for
        the scheduled check. Use it to surface expired tokens before a scheduled post fails.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountConnectionCheck400Error1 |
                ApiV1SocialAccountConnectionCheck401Error1 | ApiV1SocialAccountConnectionCheck403Error1 |
                ApiV1SocialAccountConnectionCheck404Error1 | ApiV1SocialAccountConnectionCheck429Error1 |
                ApiV1SocialAccountConnectionCheck500Error1 | ApiV1SocialAccountConnectionCheck502Error1 |
                ApiV1SocialAccountConnectionCheck503Error1 | ApiV1SocialAccountConnectionCheck504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.social_account_connection_check(body=body, request_options=request_options)
        )

    def social_account_copy(
        self,
        *,
        body: ApiV1SocialAccountCopyRequest | ApiV1SocialAccountCopyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ApiV1SocialAccountCopyResponse]:
        """Copy connected social accounts from one team to another so you can reuse an existing authorization without
        sending the user through OAuth again.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountCopy400Error1 |
                ApiV1SocialAccountCopy401Error1 | ApiV1SocialAccountCopy403Error1 | ApiV1SocialAccountCopy404Error1 |
                ApiV1SocialAccountCopy429Error1 | ApiV1SocialAccountCopy500Error1 | ApiV1SocialAccountCopy502Error1 |
                ApiV1SocialAccountCopy503Error1 | ApiV1SocialAccountCopy504Error1 | RawError``."""
        return unwrap(self._with_raw_response.social_account_copy(body=body, request_options=request_options))

    def social_account_create_portal_link(
        self,
        *,
        body: ApiV1SocialAccountCreatePortalLinkRequest | ApiV1SocialAccountCreatePortalLinkRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountCreatePortalLinkResponse:
        """Simplify connect flow. Create a portal link which can be used to manage connected social accounts directly on
        bundle.social platform without implementing the logic on your side.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountCreatePortalLink400Error1 |
                ApiV1SocialAccountCreatePortalLink401Error1 | ApiV1SocialAccountCreatePortalLink403Error1 |
                ApiV1SocialAccountCreatePortalLink404Error1 | ApiV1SocialAccountCreatePortalLink429Error1 |
                ApiV1SocialAccountCreatePortalLink500Error1 | ApiV1SocialAccountCreatePortalLink502Error1 |
                ApiV1SocialAccountCreatePortalLink503Error1 | ApiV1SocialAccountCreatePortalLink504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.social_account_create_portal_link(body=body, request_options=request_options)
        )

    def social_account_disable_messaging(
        self,
        *,
        body: ApiV1SocialAccountMessagingDisableRequest | ApiV1SocialAccountMessagingDisableRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountMessagingDisableResponse:
        """Stop processing DMs for the account and narrow its Meta webhook subscription to what other features still
        need. Idempotent. Processing stops immediately; if Meta does not confirm the change the status is
        DISABLE_PENDING and the call returns 502, so it can be retried.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountMessagingDisable400Error1 |
                ApiV1SocialAccountMessagingDisable401Error1 | ApiV1SocialAccountMessagingDisable403Error1 |
                ApiV1SocialAccountMessagingDisable404Error1 | ApiV1SocialAccountMessagingDisable429Error1 |
                ApiV1SocialAccountMessagingDisable500Error1 | ApiV1SocialAccountMessagingDisable502Error1 |
                ApiV1SocialAccountMessagingDisable503Error1 | ApiV1SocialAccountMessagingDisable504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.social_account_disable_messaging(body=body, request_options=request_options)
        )

    def social_account_disconnect(
        self,
        *,
        body: ApiV1SocialAccountDisconnectRequest | ApiV1SocialAccountDisconnectRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountDisconnectResponse:
        """This will remove the social account from all the scheduled posts too.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountDisconnect400Error1 |
                ApiV1SocialAccountDisconnect401Error1 | ApiV1SocialAccountDisconnect403Error1 |
                ApiV1SocialAccountDisconnect404Error1 | ApiV1SocialAccountDisconnect429Error1 |
                ApiV1SocialAccountDisconnect500Error1 | ApiV1SocialAccountDisconnect502Error1 |
                ApiV1SocialAccountDisconnect503Error1 | ApiV1SocialAccountDisconnect504Error1 | RawError``."""
        return unwrap(self._with_raw_response.social_account_disconnect(body=body, request_options=request_options))

    def social_account_enable_messaging(
        self,
        *,
        body: ApiV1SocialAccountMessagingEnableRequest | ApiV1SocialAccountMessagingEnableRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountMessagingEnableResponse:
        """Subscribe the team's Facebook page or Instagram account to Meta DM webhooks and start processing its
        messages. Connecting or re-authorizing an account never does this on its own. Idempotent. Returns 403 when the
        organization has not been granted Instagram and Facebook direct messages and automations (email
        contact@bundle.social to request it), 400 when the account lacks the messaging permissions (reconnect it), and
        502 when Meta rejects the subscription; the account then stays DISABLED.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountMessagingEnable400Error1 |
                ApiV1SocialAccountMessagingEnable401Error1 | ApiV1SocialAccountMessagingEnable403Error1 |
                ApiV1SocialAccountMessagingEnable404Error1 | ApiV1SocialAccountMessagingEnable429Error1 |
                ApiV1SocialAccountMessagingEnable500Error1 | ApiV1SocialAccountMessagingEnable502Error1 |
                ApiV1SocialAccountMessagingEnable503Error1 | ApiV1SocialAccountMessagingEnable504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.social_account_enable_messaging(body=body, request_options=request_options)
        )

    def social_account_get_accounts_to_delete(
        self,
        *,
        page: float | None = 1.0,
        page_size: float | None = 20.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountToDeleteResponse:
        """List social accounts queued for deletion, with pagination. Use it to warn users before an account and its
        data are permanently removed.

        Args:
            page: Value sent with the request.
            page_size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountToDelete400Error1 |
                ApiV1SocialAccountToDelete401Error1 | ApiV1SocialAccountToDelete403Error1 |
                ApiV1SocialAccountToDelete404Error1 | ApiV1SocialAccountToDelete429Error1 |
                ApiV1SocialAccountToDelete500Error1 | ApiV1SocialAccountToDelete502Error1 |
                ApiV1SocialAccountToDelete503Error1 | ApiV1SocialAccountToDelete504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.social_account_get_accounts_to_delete(
                page=page, page_size=page_size, request_options=request_options
            ),
        )

    def social_account_get_by_type(
        self, type_: TypeOrStr, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1SocialAccountByTypeResponse:
        """Look up a team's connected account for a specific platform without listing every account first. Useful when
        you already know which platform you want to publish to.

        Args:
            type_: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountByType400Error1 |
                ApiV1SocialAccountByType401Error1 | ApiV1SocialAccountByType403Error1 |
                ApiV1SocialAccountByType404Error1 | ApiV1SocialAccountByType429Error1 |
                ApiV1SocialAccountByType500Error1 | ApiV1SocialAccountByType502Error1 |
                ApiV1SocialAccountByType503Error1 | ApiV1SocialAccountByType504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.social_account_get_by_type(type_, team_id, request_options=request_options)
        )

    def social_account_profile_refresh(
        self,
        *,
        body: ApiV1SocialAccountProfileRefreshRequest | ApiV1SocialAccountProfileRefreshRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountProfileRefreshResponse:
        """Pull the latest profile name, handle, and avatar from the platform for a connected account. Use it to keep
        your own UI in sync after a user renames their profile.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountProfileRefresh400Error1 |
                ApiV1SocialAccountProfileRefresh401Error1 | ApiV1SocialAccountProfileRefresh403Error1 |
                ApiV1SocialAccountProfileRefresh404Error1 | ApiV1SocialAccountProfileRefresh429Error1 |
                ApiV1SocialAccountProfileRefresh500Error1 | ApiV1SocialAccountProfileRefresh502Error1 |
                ApiV1SocialAccountProfileRefresh503Error1 | ApiV1SocialAccountProfileRefresh504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.social_account_profile_refresh(body=body, request_options=request_options)
        )

    def social_account_refresh_channels(
        self,
        *,
        body: ApiV1SocialAccountRefreshChannelsRequest | ApiV1SocialAccountRefreshChannelsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountRefreshChannelsResponse:
        """Refresh channels saved on socialAccount.channels. This is only needed for some social account types - Reddit,
        Discord, Slack, Pinterest.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountRefreshChannels400Error1 |
                ApiV1SocialAccountRefreshChannels401Error1 | ApiV1SocialAccountRefreshChannels403Error1 |
                ApiV1SocialAccountRefreshChannels404Error1 | ApiV1SocialAccountRefreshChannels429Error1 |
                ApiV1SocialAccountRefreshChannels500Error1 | ApiV1SocialAccountRefreshChannels502Error1 |
                ApiV1SocialAccountRefreshChannels503Error1 | ApiV1SocialAccountRefreshChannels504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.social_account_refresh_channels(body=body, request_options=request_options)
        )

    def social_account_set_channel(
        self,
        *,
        body: ApiV1SocialAccountSetChannelRequest | ApiV1SocialAccountSetChannelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountSetChannelResponse:
        """Needed only for some social account types - Youtube, Instagram, Facebook and Linkedin.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountSetChannel400Error1 |
                ApiV1SocialAccountSetChannel401Error1 | ApiV1SocialAccountSetChannel403Error1 |
                ApiV1SocialAccountSetChannel404Error1 | ApiV1SocialAccountSetChannel429Error1 |
                ApiV1SocialAccountSetChannel500Error1 | ApiV1SocialAccountSetChannel502Error1 |
                ApiV1SocialAccountSetChannel503Error1 | ApiV1SocialAccountSetChannel504Error1 | RawError``."""
        return unwrap(self._with_raw_response.social_account_set_channel(body=body, request_options=request_options))

    def social_account_unset_channel(
        self,
        *,
        body: ApiV1SocialAccountUnsetChannelRequest | ApiV1SocialAccountUnsetChannelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountUnsetChannelResponse:
        """Clear selected channel while keeping social account authorization.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountUnsetChannel400Error1 |
                ApiV1SocialAccountUnsetChannel401Error1 | ApiV1SocialAccountUnsetChannel403Error1 |
                ApiV1SocialAccountUnsetChannel404Error1 | ApiV1SocialAccountUnsetChannel429Error1 |
                ApiV1SocialAccountUnsetChannel500Error1 | ApiV1SocialAccountUnsetChannel502Error1 |
                ApiV1SocialAccountUnsetChannel503Error1 | ApiV1SocialAccountUnsetChannel504Error1 | RawError``."""
        return unwrap(self._with_raw_response.social_account_unset_channel(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> SocialAccountApiWithRawResponse:
        return self._with_raw_response


class AsyncSocialAccountApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSocialAccountApiWithRawResponse(client, server, auth)

    async def social_account_connect(
        self,
        *,
        body: ApiV1SocialAccountConnectRequest | ApiV1SocialAccountConnectRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountConnectResponse:
        """Generate OAuth URL for social account connection. Redirect user to this URL to connect social account. For
        Mastodon and Bluesky an unusable ``serverUrl`` returns 400 with the reason, while a reachable-but-failing
        instance returns 502.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountConnect400Error1 |
                ApiV1SocialAccountConnect401Error1 | ApiV1SocialAccountConnect403Error1 |
                ApiV1SocialAccountConnect404Error1 | ApiV1SocialAccountConnect429Error1 |
                ApiV1SocialAccountConnect500Error1 | ApiV1SocialAccountConnect502Error1 |
                ApiV1SocialAccountConnect503Error1 | ApiV1SocialAccountConnect504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.social_account_connect(body=body, request_options=request_options))

    async def social_account_connection_check(
        self,
        *,
        body: ApiV1SocialAccountConnectionCheckRequest | ApiV1SocialAccountConnectionCheckRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountConnectionCheckResponse:
        """Force an immediate check of whether a social account's authorization is still valid, instead of waiting for
        the scheduled check. Use it to surface expired tokens before a scheduled post fails.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountConnectionCheck400Error1 |
                ApiV1SocialAccountConnectionCheck401Error1 | ApiV1SocialAccountConnectionCheck403Error1 |
                ApiV1SocialAccountConnectionCheck404Error1 | ApiV1SocialAccountConnectionCheck429Error1 |
                ApiV1SocialAccountConnectionCheck500Error1 | ApiV1SocialAccountConnectionCheck502Error1 |
                ApiV1SocialAccountConnectionCheck503Error1 | ApiV1SocialAccountConnectionCheck504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.social_account_connection_check(body=body, request_options=request_options)
        )

    async def social_account_copy(
        self,
        *,
        body: ApiV1SocialAccountCopyRequest | ApiV1SocialAccountCopyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ApiV1SocialAccountCopyResponse]:
        """Copy connected social accounts from one team to another so you can reuse an existing authorization without
        sending the user through OAuth again.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountCopy400Error1 |
                ApiV1SocialAccountCopy401Error1 | ApiV1SocialAccountCopy403Error1 | ApiV1SocialAccountCopy404Error1 |
                ApiV1SocialAccountCopy429Error1 | ApiV1SocialAccountCopy500Error1 | ApiV1SocialAccountCopy502Error1 |
                ApiV1SocialAccountCopy503Error1 | ApiV1SocialAccountCopy504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.social_account_copy(body=body, request_options=request_options))

    async def social_account_create_portal_link(
        self,
        *,
        body: ApiV1SocialAccountCreatePortalLinkRequest | ApiV1SocialAccountCreatePortalLinkRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountCreatePortalLinkResponse:
        """Simplify connect flow. Create a portal link which can be used to manage connected social accounts directly on
        bundle.social platform without implementing the logic on your side.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountCreatePortalLink400Error1 |
                ApiV1SocialAccountCreatePortalLink401Error1 | ApiV1SocialAccountCreatePortalLink403Error1 |
                ApiV1SocialAccountCreatePortalLink404Error1 | ApiV1SocialAccountCreatePortalLink429Error1 |
                ApiV1SocialAccountCreatePortalLink500Error1 | ApiV1SocialAccountCreatePortalLink502Error1 |
                ApiV1SocialAccountCreatePortalLink503Error1 | ApiV1SocialAccountCreatePortalLink504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.social_account_create_portal_link(body=body, request_options=request_options)
        )

    async def social_account_disable_messaging(
        self,
        *,
        body: ApiV1SocialAccountMessagingDisableRequest | ApiV1SocialAccountMessagingDisableRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountMessagingDisableResponse:
        """Stop processing DMs for the account and narrow its Meta webhook subscription to what other features still
        need. Idempotent. Processing stops immediately; if Meta does not confirm the change the status is
        DISABLE_PENDING and the call returns 502, so it can be retried.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountMessagingDisable400Error1 |
                ApiV1SocialAccountMessagingDisable401Error1 | ApiV1SocialAccountMessagingDisable403Error1 |
                ApiV1SocialAccountMessagingDisable404Error1 | ApiV1SocialAccountMessagingDisable429Error1 |
                ApiV1SocialAccountMessagingDisable500Error1 | ApiV1SocialAccountMessagingDisable502Error1 |
                ApiV1SocialAccountMessagingDisable503Error1 | ApiV1SocialAccountMessagingDisable504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.social_account_disable_messaging(body=body, request_options=request_options)
        )

    async def social_account_disconnect(
        self,
        *,
        body: ApiV1SocialAccountDisconnectRequest | ApiV1SocialAccountDisconnectRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountDisconnectResponse:
        """This will remove the social account from all the scheduled posts too.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountDisconnect400Error1 |
                ApiV1SocialAccountDisconnect401Error1 | ApiV1SocialAccountDisconnect403Error1 |
                ApiV1SocialAccountDisconnect404Error1 | ApiV1SocialAccountDisconnect429Error1 |
                ApiV1SocialAccountDisconnect500Error1 | ApiV1SocialAccountDisconnect502Error1 |
                ApiV1SocialAccountDisconnect503Error1 | ApiV1SocialAccountDisconnect504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.social_account_disconnect(body=body, request_options=request_options)
        )

    async def social_account_enable_messaging(
        self,
        *,
        body: ApiV1SocialAccountMessagingEnableRequest | ApiV1SocialAccountMessagingEnableRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountMessagingEnableResponse:
        """Subscribe the team's Facebook page or Instagram account to Meta DM webhooks and start processing its
        messages. Connecting or re-authorizing an account never does this on its own. Idempotent. Returns 403 when the
        organization has not been granted Instagram and Facebook direct messages and automations (email
        contact@bundle.social to request it), 400 when the account lacks the messaging permissions (reconnect it), and
        502 when Meta rejects the subscription; the account then stays DISABLED.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountMessagingEnable400Error1 |
                ApiV1SocialAccountMessagingEnable401Error1 | ApiV1SocialAccountMessagingEnable403Error1 |
                ApiV1SocialAccountMessagingEnable404Error1 | ApiV1SocialAccountMessagingEnable429Error1 |
                ApiV1SocialAccountMessagingEnable500Error1 | ApiV1SocialAccountMessagingEnable502Error1 |
                ApiV1SocialAccountMessagingEnable503Error1 | ApiV1SocialAccountMessagingEnable504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.social_account_enable_messaging(body=body, request_options=request_options)
        )

    async def social_account_get_accounts_to_delete(
        self,
        *,
        page: float | None = 1.0,
        page_size: float | None = 20.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountToDeleteResponse:
        """List social accounts queued for deletion, with pagination. Use it to warn users before an account and its
        data are permanently removed.

        Args:
            page: Value sent with the request.
            page_size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountToDelete400Error1 |
                ApiV1SocialAccountToDelete401Error1 | ApiV1SocialAccountToDelete403Error1 |
                ApiV1SocialAccountToDelete404Error1 | ApiV1SocialAccountToDelete429Error1 |
                ApiV1SocialAccountToDelete500Error1 | ApiV1SocialAccountToDelete502Error1 |
                ApiV1SocialAccountToDelete503Error1 | ApiV1SocialAccountToDelete504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.social_account_get_accounts_to_delete(
                page=page, page_size=page_size, request_options=request_options
            ),
        )

    async def social_account_get_by_type(
        self, type_: TypeOrStr, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1SocialAccountByTypeResponse:
        """Look up a team's connected account for a specific platform without listing every account first. Useful when
        you already know which platform you want to publish to.

        Args:
            type_: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountByType400Error1 |
                ApiV1SocialAccountByType401Error1 | ApiV1SocialAccountByType403Error1 |
                ApiV1SocialAccountByType404Error1 | ApiV1SocialAccountByType429Error1 |
                ApiV1SocialAccountByType500Error1 | ApiV1SocialAccountByType502Error1 |
                ApiV1SocialAccountByType503Error1 | ApiV1SocialAccountByType504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.social_account_get_by_type(type_, team_id, request_options=request_options)
        )

    async def social_account_profile_refresh(
        self,
        *,
        body: ApiV1SocialAccountProfileRefreshRequest | ApiV1SocialAccountProfileRefreshRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountProfileRefreshResponse:
        """Pull the latest profile name, handle, and avatar from the platform for a connected account. Use it to keep
        your own UI in sync after a user renames their profile.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountProfileRefresh400Error1 |
                ApiV1SocialAccountProfileRefresh401Error1 | ApiV1SocialAccountProfileRefresh403Error1 |
                ApiV1SocialAccountProfileRefresh404Error1 | ApiV1SocialAccountProfileRefresh429Error1 |
                ApiV1SocialAccountProfileRefresh500Error1 | ApiV1SocialAccountProfileRefresh502Error1 |
                ApiV1SocialAccountProfileRefresh503Error1 | ApiV1SocialAccountProfileRefresh504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.social_account_profile_refresh(body=body, request_options=request_options)
        )

    async def social_account_refresh_channels(
        self,
        *,
        body: ApiV1SocialAccountRefreshChannelsRequest | ApiV1SocialAccountRefreshChannelsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountRefreshChannelsResponse:
        """Refresh channels saved on socialAccount.channels. This is only needed for some social account types - Reddit,
        Discord, Slack, Pinterest.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountRefreshChannels400Error1 |
                ApiV1SocialAccountRefreshChannels401Error1 | ApiV1SocialAccountRefreshChannels403Error1 |
                ApiV1SocialAccountRefreshChannels404Error1 | ApiV1SocialAccountRefreshChannels429Error1 |
                ApiV1SocialAccountRefreshChannels500Error1 | ApiV1SocialAccountRefreshChannels502Error1 |
                ApiV1SocialAccountRefreshChannels503Error1 | ApiV1SocialAccountRefreshChannels504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.social_account_refresh_channels(body=body, request_options=request_options)
        )

    async def social_account_set_channel(
        self,
        *,
        body: ApiV1SocialAccountSetChannelRequest | ApiV1SocialAccountSetChannelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountSetChannelResponse:
        """Needed only for some social account types - Youtube, Instagram, Facebook and Linkedin.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountSetChannel400Error1 |
                ApiV1SocialAccountSetChannel401Error1 | ApiV1SocialAccountSetChannel403Error1 |
                ApiV1SocialAccountSetChannel404Error1 | ApiV1SocialAccountSetChannel429Error1 |
                ApiV1SocialAccountSetChannel500Error1 | ApiV1SocialAccountSetChannel502Error1 |
                ApiV1SocialAccountSetChannel503Error1 | ApiV1SocialAccountSetChannel504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.social_account_set_channel(body=body, request_options=request_options)
        )

    async def social_account_unset_channel(
        self,
        *,
        body: ApiV1SocialAccountUnsetChannelRequest | ApiV1SocialAccountUnsetChannelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SocialAccountUnsetChannelResponse:
        """Clear selected channel while keeping social account authorization.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1SocialAccountUnsetChannel400Error1 |
                ApiV1SocialAccountUnsetChannel401Error1 | ApiV1SocialAccountUnsetChannel403Error1 |
                ApiV1SocialAccountUnsetChannel404Error1 | ApiV1SocialAccountUnsetChannel429Error1 |
                ApiV1SocialAccountUnsetChannel500Error1 | ApiV1SocialAccountUnsetChannel502Error1 |
                ApiV1SocialAccountUnsetChannel503Error1 | ApiV1SocialAccountUnsetChannel504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.social_account_unset_channel(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSocialAccountApiWithRawResponse:
        return self._with_raw_response


class SocialAccountApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def social_account_connect(
        self,
        *,
        body: ApiV1SocialAccountConnectRequest | ApiV1SocialAccountConnectRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountConnectResponse, SocialAccountConnectErrorBody]:
        """Generate OAuth URL for social account connection. Redirect user to this URL to connect social account. For
        Mastodon and Bluesky an unusable ``serverUrl`` returns 400 with the reason, while a reachable-but-failing
        instance returns 502.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/connect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SocialAccountConnectRequest | ApiV1SocialAccountConnectRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountConnectResponse],
            error_mapper=social_account_connect_error_mapper,
            request_options=request_options,
        )

    def social_account_connection_check(
        self,
        *,
        body: ApiV1SocialAccountConnectionCheckRequest | ApiV1SocialAccountConnectionCheckRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountConnectionCheckResponse, SocialAccountConnectionCheckErrorBody]:
        """Force an immediate check of whether a social account's authorization is still valid, instead of waiting for
        the scheduled check. Use it to surface expired tokens before a scheduled post fails.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/connection-check"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountConnectionCheckRequest | ApiV1SocialAccountConnectionCheckRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountConnectionCheckResponse],
            error_mapper=social_account_connection_check_error_mapper,
            request_options=request_options,
        )

    def social_account_copy(
        self,
        *,
        body: ApiV1SocialAccountCopyRequest | ApiV1SocialAccountCopyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ApiV1SocialAccountCopyResponse], SocialAccountCopyErrorBody]:
        """Copy connected social accounts from one team to another so you can reuse an existing authorization without
        sending the user through OAuth again.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/copy"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SocialAccountCopyRequest | ApiV1SocialAccountCopyRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[list[ApiV1SocialAccountCopyResponse]],
            error_mapper=social_account_copy_error_mapper,
            request_options=request_options,
        )

    def social_account_create_portal_link(
        self,
        *,
        body: ApiV1SocialAccountCreatePortalLinkRequest | ApiV1SocialAccountCreatePortalLinkRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountCreatePortalLinkResponse, SocialAccountCreatePortalLinkErrorBody]:
        """Simplify connect flow. Create a portal link which can be used to manage connected social accounts directly on
        bundle.social platform without implementing the logic on your side.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/create-portal-link"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountCreatePortalLinkRequest | ApiV1SocialAccountCreatePortalLinkRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountCreatePortalLinkResponse],
            error_mapper=social_account_create_portal_link_error_mapper,
            request_options=request_options,
        )

    def social_account_disable_messaging(
        self,
        *,
        body: ApiV1SocialAccountMessagingDisableRequest | ApiV1SocialAccountMessagingDisableRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountMessagingDisableResponse, SocialAccountDisableMessagingErrorBody]:
        """Stop processing DMs for the account and narrow its Meta webhook subscription to what other features still
        need. Idempotent. Processing stops immediately; if Meta does not confirm the change the status is
        DISABLE_PENDING and the call returns 502, so it can be retried.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/messaging/disable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountMessagingDisableRequest | ApiV1SocialAccountMessagingDisableRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountMessagingDisableResponse],
            error_mapper=social_account_disable_messaging_error_mapper,
            request_options=request_options,
        )

    def social_account_disconnect(
        self,
        *,
        body: ApiV1SocialAccountDisconnectRequest | ApiV1SocialAccountDisconnectRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountDisconnectResponse, SocialAccountDisconnectErrorBody]:
        """This will remove the social account from all the scheduled posts too.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/social-account/disconnect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SocialAccountDisconnectRequest | ApiV1SocialAccountDisconnectRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountDisconnectResponse],
            error_mapper=social_account_disconnect_error_mapper,
            request_options=request_options,
        )

    def social_account_enable_messaging(
        self,
        *,
        body: ApiV1SocialAccountMessagingEnableRequest | ApiV1SocialAccountMessagingEnableRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountMessagingEnableResponse, SocialAccountEnableMessagingErrorBody]:
        """Subscribe the team's Facebook page or Instagram account to Meta DM webhooks and start processing its
        messages. Connecting or re-authorizing an account never does this on its own. Idempotent. Returns 403 when the
        organization has not been granted Instagram and Facebook direct messages and automations (email
        contact@bundle.social to request it), 400 when the account lacks the messaging permissions (reconnect it), and
        502 when Meta rejects the subscription; the account then stays DISABLED.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/messaging/enable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountMessagingEnableRequest | ApiV1SocialAccountMessagingEnableRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountMessagingEnableResponse],
            error_mapper=social_account_enable_messaging_error_mapper,
            request_options=request_options,
        )

    def social_account_get_accounts_to_delete(
        self,
        *,
        page: float | None = 1.0,
        page_size: float | None = 20.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountToDeleteResponse, SocialAccountGetAccountsToDeleteErrorBody]:
        """List social accounts queued for deletion, with pagination. Use it to warn users before an account and its
        data are permanently removed.

        Args:
            page: Value sent with the request.
            page_size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/social-account/to-delete"),
            query_params=[param[float | None]("page", page), param[float | None]("pageSize", page_size)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountToDeleteResponse],
            error_mapper=social_account_get_accounts_to_delete_error_mapper,
            request_options=request_options,
        )

    def social_account_get_by_type(
        self, type_: TypeOrStr, team_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SocialAccountByTypeResponse, SocialAccountGetByTypeErrorBody]:
        """Look up a team's connected account for a specific platform without listing every account first. Useful when
        you already know which platform you want to publish to.

        Args:
            type_: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/social-account/by-type"),
            query_params=[param[TypeOrStr]("type", type_), param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountByTypeResponse],
            error_mapper=social_account_get_by_type_error_mapper,
            request_options=request_options,
        )

    def social_account_profile_refresh(
        self,
        *,
        body: ApiV1SocialAccountProfileRefreshRequest | ApiV1SocialAccountProfileRefreshRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountProfileRefreshResponse, SocialAccountProfileRefreshErrorBody]:
        """Pull the latest profile name, handle, and avatar from the platform for a connected account. Use it to keep
        your own UI in sync after a user renames their profile.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/profile-refresh"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountProfileRefreshRequest | ApiV1SocialAccountProfileRefreshRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountProfileRefreshResponse],
            error_mapper=social_account_profile_refresh_error_mapper,
            request_options=request_options,
        )

    def social_account_refresh_channels(
        self,
        *,
        body: ApiV1SocialAccountRefreshChannelsRequest | ApiV1SocialAccountRefreshChannelsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountRefreshChannelsResponse, SocialAccountRefreshChannelsErrorBody]:
        """Refresh channels saved on socialAccount.channels. This is only needed for some social account types - Reddit,
        Discord, Slack, Pinterest.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/refresh-channels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountRefreshChannelsRequest | ApiV1SocialAccountRefreshChannelsRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountRefreshChannelsResponse],
            error_mapper=social_account_refresh_channels_error_mapper,
            request_options=request_options,
        )

    def social_account_set_channel(
        self,
        *,
        body: ApiV1SocialAccountSetChannelRequest | ApiV1SocialAccountSetChannelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountSetChannelResponse, SocialAccountSetChannelErrorBody]:
        """Needed only for some social account types - Youtube, Instagram, Facebook and Linkedin.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/set-channel"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SocialAccountSetChannelRequest | ApiV1SocialAccountSetChannelRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountSetChannelResponse],
            error_mapper=social_account_set_channel_error_mapper,
            request_options=request_options,
        )

    def social_account_unset_channel(
        self,
        *,
        body: ApiV1SocialAccountUnsetChannelRequest | ApiV1SocialAccountUnsetChannelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountUnsetChannelResponse, SocialAccountUnsetChannelErrorBody]:
        """Clear selected channel while keeping social account authorization.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/unset-channel"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SocialAccountUnsetChannelRequest | ApiV1SocialAccountUnsetChannelRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1SocialAccountUnsetChannelResponse],
            error_mapper=social_account_unset_channel_error_mapper,
            request_options=request_options,
        )


class AsyncSocialAccountApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def social_account_connect(
        self,
        *,
        body: ApiV1SocialAccountConnectRequest | ApiV1SocialAccountConnectRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountConnectResponse, SocialAccountConnectErrorBody]:
        """Generate OAuth URL for social account connection. Redirect user to this URL to connect social account. For
        Mastodon and Bluesky an unusable ``serverUrl`` returns 400 with the reason, while a reachable-but-failing
        instance returns 502.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/connect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SocialAccountConnectRequest | ApiV1SocialAccountConnectRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountConnectResponse],
            error_mapper=social_account_connect_error_mapper,
            request_options=request_options,
        )

    async def social_account_connection_check(
        self,
        *,
        body: ApiV1SocialAccountConnectionCheckRequest | ApiV1SocialAccountConnectionCheckRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountConnectionCheckResponse, SocialAccountConnectionCheckErrorBody]:
        """Force an immediate check of whether a social account's authorization is still valid, instead of waiting for
        the scheduled check. Use it to surface expired tokens before a scheduled post fails.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/connection-check"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountConnectionCheckRequest | ApiV1SocialAccountConnectionCheckRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountConnectionCheckResponse],
            error_mapper=social_account_connection_check_error_mapper,
            request_options=request_options,
        )

    async def social_account_copy(
        self,
        *,
        body: ApiV1SocialAccountCopyRequest | ApiV1SocialAccountCopyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ApiV1SocialAccountCopyResponse], SocialAccountCopyErrorBody]:
        """Copy connected social accounts from one team to another so you can reuse an existing authorization without
        sending the user through OAuth again.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/copy"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SocialAccountCopyRequest | ApiV1SocialAccountCopyRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[list[ApiV1SocialAccountCopyResponse]],
            error_mapper=social_account_copy_error_mapper,
            request_options=request_options,
        )

    async def social_account_create_portal_link(
        self,
        *,
        body: ApiV1SocialAccountCreatePortalLinkRequest | ApiV1SocialAccountCreatePortalLinkRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountCreatePortalLinkResponse, SocialAccountCreatePortalLinkErrorBody]:
        """Simplify connect flow. Create a portal link which can be used to manage connected social accounts directly on
        bundle.social platform without implementing the logic on your side.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/create-portal-link"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountCreatePortalLinkRequest | ApiV1SocialAccountCreatePortalLinkRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountCreatePortalLinkResponse],
            error_mapper=social_account_create_portal_link_error_mapper,
            request_options=request_options,
        )

    async def social_account_disable_messaging(
        self,
        *,
        body: ApiV1SocialAccountMessagingDisableRequest | ApiV1SocialAccountMessagingDisableRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountMessagingDisableResponse, SocialAccountDisableMessagingErrorBody]:
        """Stop processing DMs for the account and narrow its Meta webhook subscription to what other features still
        need. Idempotent. Processing stops immediately; if Meta does not confirm the change the status is
        DISABLE_PENDING and the call returns 502, so it can be retried.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/messaging/disable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountMessagingDisableRequest | ApiV1SocialAccountMessagingDisableRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountMessagingDisableResponse],
            error_mapper=social_account_disable_messaging_error_mapper,
            request_options=request_options,
        )

    async def social_account_disconnect(
        self,
        *,
        body: ApiV1SocialAccountDisconnectRequest | ApiV1SocialAccountDisconnectRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountDisconnectResponse, SocialAccountDisconnectErrorBody]:
        """This will remove the social account from all the scheduled posts too.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/social-account/disconnect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SocialAccountDisconnectRequest | ApiV1SocialAccountDisconnectRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountDisconnectResponse],
            error_mapper=social_account_disconnect_error_mapper,
            request_options=request_options,
        )

    async def social_account_enable_messaging(
        self,
        *,
        body: ApiV1SocialAccountMessagingEnableRequest | ApiV1SocialAccountMessagingEnableRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountMessagingEnableResponse, SocialAccountEnableMessagingErrorBody]:
        """Subscribe the team's Facebook page or Instagram account to Meta DM webhooks and start processing its
        messages. Connecting or re-authorizing an account never does this on its own. Idempotent. Returns 403 when the
        organization has not been granted Instagram and Facebook direct messages and automations (email
        contact@bundle.social to request it), 400 when the account lacks the messaging permissions (reconnect it), and
        502 when Meta rejects the subscription; the account then stays DISABLED.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/messaging/enable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountMessagingEnableRequest | ApiV1SocialAccountMessagingEnableRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountMessagingEnableResponse],
            error_mapper=social_account_enable_messaging_error_mapper,
            request_options=request_options,
        )

    async def social_account_get_accounts_to_delete(
        self,
        *,
        page: float | None = 1.0,
        page_size: float | None = 20.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountToDeleteResponse, SocialAccountGetAccountsToDeleteErrorBody]:
        """List social accounts queued for deletion, with pagination. Use it to warn users before an account and its
        data are permanently removed.

        Args:
            page: Value sent with the request.
            page_size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/social-account/to-delete"),
            query_params=[param[float | None]("page", page), param[float | None]("pageSize", page_size)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountToDeleteResponse],
            error_mapper=social_account_get_accounts_to_delete_error_mapper,
            request_options=request_options,
        )

    async def social_account_get_by_type(
        self, type_: TypeOrStr, team_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SocialAccountByTypeResponse, SocialAccountGetByTypeErrorBody]:
        """Look up a team's connected account for a specific platform without listing every account first. Useful when
        you already know which platform you want to publish to.

        Args:
            type_: Value sent with the request.
            team_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/social-account/by-type"),
            query_params=[param[TypeOrStr]("type", type_), param[str]("teamId", team_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountByTypeResponse],
            error_mapper=social_account_get_by_type_error_mapper,
            request_options=request_options,
        )

    async def social_account_profile_refresh(
        self,
        *,
        body: ApiV1SocialAccountProfileRefreshRequest | ApiV1SocialAccountProfileRefreshRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountProfileRefreshResponse, SocialAccountProfileRefreshErrorBody]:
        """Pull the latest profile name, handle, and avatar from the platform for a connected account. Use it to keep
        your own UI in sync after a user renames their profile.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/profile-refresh"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountProfileRefreshRequest | ApiV1SocialAccountProfileRefreshRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountProfileRefreshResponse],
            error_mapper=social_account_profile_refresh_error_mapper,
            request_options=request_options,
        )

    async def social_account_refresh_channels(
        self,
        *,
        body: ApiV1SocialAccountRefreshChannelsRequest | ApiV1SocialAccountRefreshChannelsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountRefreshChannelsResponse, SocialAccountRefreshChannelsErrorBody]:
        """Refresh channels saved on socialAccount.channels. This is only needed for some social account types - Reddit,
        Discord, Slack, Pinterest.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/refresh-channels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1SocialAccountRefreshChannelsRequest | ApiV1SocialAccountRefreshChannelsRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountRefreshChannelsResponse],
            error_mapper=social_account_refresh_channels_error_mapper,
            request_options=request_options,
        )

    async def social_account_set_channel(
        self,
        *,
        body: ApiV1SocialAccountSetChannelRequest | ApiV1SocialAccountSetChannelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountSetChannelResponse, SocialAccountSetChannelErrorBody]:
        """Needed only for some social account types - Youtube, Instagram, Facebook and Linkedin.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/set-channel"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SocialAccountSetChannelRequest | ApiV1SocialAccountSetChannelRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountSetChannelResponse],
            error_mapper=social_account_set_channel_error_mapper,
            request_options=request_options,
        )

    async def social_account_unset_channel(
        self,
        *,
        body: ApiV1SocialAccountUnsetChannelRequest | ApiV1SocialAccountUnsetChannelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SocialAccountUnsetChannelResponse, SocialAccountUnsetChannelErrorBody]:
        """Clear selected channel while keeping social account authorization.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/social-account/unset-channel"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SocialAccountUnsetChannelRequest | ApiV1SocialAccountUnsetChannelRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1SocialAccountUnsetChannelResponse],
            error_mapper=social_account_unset_channel_error_mapper,
            request_options=request_options,
        )
