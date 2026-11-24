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
from ..errors.conversation_archive_error import ConversationArchiveErrorBody, conversation_archive_error_mapper
from ..errors.conversation_get_error import ConversationGetErrorBody, conversation_get_error_mapper
from ..errors.conversation_get_list_error import ConversationGetListErrorBody, conversation_get_list_error_mapper
from ..errors.conversation_get_messages_error import (
    ConversationGetMessagesErrorBody,
    conversation_get_messages_error_mapper,
)
from ..errors.conversation_mark_read_error import ConversationMarkReadErrorBody, conversation_mark_read_error_mapper
from ..errors.conversation_open_error import ConversationOpenErrorBody, conversation_open_error_mapper
from ..errors.conversation_private_reply_error import (
    ConversationPrivateReplyErrorBody,
    conversation_private_reply_error_mapper,
)
from ..errors.conversation_react_message_error import (
    ConversationReactMessageErrorBody,
    conversation_react_message_error_mapper,
)
from ..errors.conversation_send_message_error import (
    ConversationSendMessageErrorBody,
    conversation_send_message_error_mapper,
)
from ..errors.conversation_update_error import ConversationUpdateErrorBody, conversation_update_error_mapper
from ..models.api_v1_conversations_archive_response import ApiV1ConversationsArchiveResponse
from ..models.api_v1_conversations_messages_reaction_request import (
    ApiV1ConversationsMessagesReactionRequest,
    ApiV1ConversationsMessagesReactionRequestDict,
)
from ..models.api_v1_conversations_messages_reaction_response import ApiV1ConversationsMessagesReactionResponse
from ..models.api_v1_conversations_messages_request import (
    ApiV1ConversationsMessagesRequest,
    ApiV1ConversationsMessagesRequestDict,
)
from ..models.api_v1_conversations_messages_response import ApiV1ConversationsMessagesResponse
from ..models.api_v1_conversations_messages_response1 import ApiV1ConversationsMessagesResponse1
from ..models.api_v1_conversations_open_response import ApiV1ConversationsOpenResponse
from ..models.api_v1_conversations_private_reply_request import (
    ApiV1ConversationsPrivateReplyRequest,
    ApiV1ConversationsPrivateReplyRequestDict,
)
from ..models.api_v1_conversations_private_reply_response import ApiV1ConversationsPrivateReplyResponse
from ..models.api_v1_conversations_read_request import ApiV1ConversationsReadRequest, ApiV1ConversationsReadRequestDict
from ..models.api_v1_conversations_read_response import ApiV1ConversationsReadResponse
from ..models.api_v1_conversations_request import ApiV1ConversationsRequest, ApiV1ConversationsRequestDict
from ..models.api_v1_conversations_response import ApiV1ConversationsResponse
from ..models.api_v1_conversations_response1 import ApiV1ConversationsResponse1
from ..models.enums.platform_bundle_social_conversation_api import PlatformBundleSocialConversationApiOrStr
from ..models.enums.status_bundle_social_conversation_api import StatusBundleSocialConversationApiOrStr
from ..server.server import Server


class ConversationApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ConversationApiWithRawResponse(client, server, auth)

    def conversation_archive(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ConversationsArchiveResponse:
        """Move a conversation out of the active inbox. Incoming messages reopen it automatically.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsArchive400Error1 |
                ApiV1ConversationsArchive401Error1 | ApiV1ConversationsArchive403Error1 |
                ApiV1ConversationsArchive404Error1 | ApiV1ConversationsArchive429Error1 |
                ApiV1ConversationsArchive500Error1 | ApiV1ConversationsArchive502Error1 |
                ApiV1ConversationsArchive503Error1 | ApiV1ConversationsArchive504Error1 | RawError``."""
        return unwrap(self._with_raw_response.conversation_archive(id_, request_options=request_options))

    def conversation_get(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ConversationsResponse1:
        """Get a single conversation by id, including the participant, the linked social account and its unread and
        status flags.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Conversations400Error1 |
                ApiV1Conversations401Error1 | ApiV1Conversations403Error1 | ApiV1Conversations404Error1 |
                ApiV1Conversations429Error1 | ApiV1Conversations500Error1 | ApiV1Conversations502Error1 |
                ApiV1Conversations503Error1 | ApiV1Conversations504Error1 | RawError``."""
        return unwrap(self._with_raw_response.conversation_get(id_, request_options=request_options))

    def conversation_get_list(
        self,
        team_id: str,
        *,
        platform: PlatformBundleSocialConversationApiOrStr | None = None,
        social_account_id: str | None = None,
        status: StatusBundleSocialConversationApiOrStr | None = None,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsResponse:
        """List conversations for a team, newest activity first. Filter by ``socialAccountId``, ``platform`` and
        ``status``. Paginate with ``offset`` (``limit`` max 500, default 10) or by passing the previous response's
        ``nextCursor`` back as ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            team_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Conversations400Error1 |
                ApiV1Conversations401Error1 | ApiV1Conversations403Error1 | ApiV1Conversations404Error1 |
                ApiV1Conversations429Error1 | ApiV1Conversations500Error1 | ApiV1Conversations502Error1 |
                ApiV1Conversations503Error1 | ApiV1Conversations504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.conversation_get_list(
                team_id,
                platform=platform,
                social_account_id=social_account_id,
                status=status,
                offset=offset,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    def conversation_get_messages(
        self,
        id_: str,
        *,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsMessagesResponse:
        """List the messages of a conversation. Pages walk backwards in time, while the messages inside a page are
        ordered oldest first, ready to render. Includes attachments, reactions and delivery state. Paginate with
        ``offset`` (``limit`` max 500, default 10) or by passing the previous response's ``nextCursor`` back as
        ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            id_: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsMessages400Error1 |
                ApiV1ConversationsMessages401Error1 | ApiV1ConversationsMessages403Error1 |
                ApiV1ConversationsMessages404Error1 | ApiV1ConversationsMessages429Error1 |
                ApiV1ConversationsMessages500Error1 | ApiV1ConversationsMessages502Error1 |
                ApiV1ConversationsMessages503Error1 | ApiV1ConversationsMessages504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.conversation_get_messages(
                id_, offset=offset, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    def conversation_mark_read(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsReadRequest | ApiV1ConversationsReadRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsReadResponse:
        """Clear the unread state of a conversation, optionally up to a specific message.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsRead400Error1 |
                ApiV1ConversationsRead401Error1 | ApiV1ConversationsRead403Error1 | ApiV1ConversationsRead404Error1 |
                ApiV1ConversationsRead429Error1 | ApiV1ConversationsRead500Error1 | ApiV1ConversationsRead502Error1 |
                ApiV1ConversationsRead503Error1 | ApiV1ConversationsRead504Error1 | RawError``."""
        return unwrap(self._with_raw_response.conversation_mark_read(id_, body=body, request_options=request_options))

    def conversation_open(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ConversationsOpenResponse:
        """Move an archived or closed conversation back into the active inbox.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsOpen400Error1 |
                ApiV1ConversationsOpen401Error1 | ApiV1ConversationsOpen403Error1 | ApiV1ConversationsOpen404Error1 |
                ApiV1ConversationsOpen429Error1 | ApiV1ConversationsOpen500Error1 | ApiV1ConversationsOpen502Error1 |
                ApiV1ConversationsOpen503Error1 | ApiV1ConversationsOpen504Error1 | RawError``."""
        return unwrap(self._with_raw_response.conversation_open(id_, request_options=request_options))

    def conversation_private_reply(
        self,
        *,
        body: ApiV1ConversationsPrivateReplyRequest | ApiV1ConversationsPrivateReplyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsPrivateReplyResponse:
        """Send a direct message in reply to a Facebook or Instagram comment we have already imported. Creates the
        conversation when none exists yet. Returns 503 while messaging sending is temporarily disabled.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsPrivateReply400Error1 |
                ApiV1ConversationsPrivateReply401Error1 | ApiV1ConversationsPrivateReply403Error1 |
                ApiV1ConversationsPrivateReply404Error1 | ApiV1ConversationsPrivateReply429Error1 |
                ApiV1ConversationsPrivateReply500Error1 | ApiV1ConversationsPrivateReply502Error1 |
                ApiV1ConversationsPrivateReply503Error1 | ApiV1ConversationsPrivateReply504Error1 | RawError``."""
        return unwrap(self._with_raw_response.conversation_private_reply(body=body, request_options=request_options))

    def conversation_react_message(
        self,
        id_: str,
        message_id: str,
        *,
        body: ApiV1ConversationsMessagesReactionRequest | ApiV1ConversationsMessagesReactionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsMessagesReactionResponse:
        """Add or remove a reaction on a message in a conversation. Returns 503 while messaging sending is temporarily
        disabled.

        Args:
            id_: Value sent with the request.
            message_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsMessagesReaction400Error1 |
                ApiV1ConversationsMessagesReaction401Error1 | ApiV1ConversationsMessagesReaction403Error1 |
                ApiV1ConversationsMessagesReaction404Error1 | ApiV1ConversationsMessagesReaction429Error1 |
                ApiV1ConversationsMessagesReaction500Error1 | ApiV1ConversationsMessagesReaction502Error1 |
                ApiV1ConversationsMessagesReaction503Error1 | ApiV1ConversationsMessagesReaction504Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.conversation_react_message(
                id_, message_id, body=body, request_options=request_options
            ),
        )

    def conversation_send_message(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsMessagesRequest | ApiV1ConversationsMessagesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsMessagesResponse1:
        """Send a message to the participant of a conversation. The platform reply window must still be open. Returns
        503 while messaging sending is temporarily disabled.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsMessages400Error1 |
                ApiV1ConversationsMessages401Error1 | ApiV1ConversationsMessages403Error1 |
                ApiV1ConversationsMessages404Error1 | ApiV1ConversationsMessages429Error1 |
                ApiV1ConversationsMessages500Error1 | ApiV1ConversationsMessages502Error1 |
                ApiV1ConversationsMessages503Error1 | ApiV1ConversationsMessages504Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.conversation_send_message(id_, body=body, request_options=request_options)
        )

    def conversation_update(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsRequest | ApiV1ConversationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsResponse1:
        """Set the status of a conversation. This is the general form of the archive and open endpoints, which move a
        conversation to one specific status.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Conversations400Error1 |
                ApiV1Conversations401Error1 | ApiV1Conversations403Error1 | ApiV1Conversations404Error1 |
                ApiV1Conversations429Error1 | ApiV1Conversations500Error1 | ApiV1Conversations502Error1 |
                ApiV1Conversations503Error1 | ApiV1Conversations504Error1 | RawError``."""
        return unwrap(self._with_raw_response.conversation_update(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ConversationApiWithRawResponse:
        return self._with_raw_response


class AsyncConversationApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncConversationApiWithRawResponse(client, server, auth)

    async def conversation_archive(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ConversationsArchiveResponse:
        """Move a conversation out of the active inbox. Incoming messages reopen it automatically.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsArchive400Error1 |
                ApiV1ConversationsArchive401Error1 | ApiV1ConversationsArchive403Error1 |
                ApiV1ConversationsArchive404Error1 | ApiV1ConversationsArchive429Error1 |
                ApiV1ConversationsArchive500Error1 | ApiV1ConversationsArchive502Error1 |
                ApiV1ConversationsArchive503Error1 | ApiV1ConversationsArchive504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.conversation_archive(id_, request_options=request_options))

    async def conversation_get(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ConversationsResponse1:
        """Get a single conversation by id, including the participant, the linked social account and its unread and
        status flags.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Conversations400Error1 |
                ApiV1Conversations401Error1 | ApiV1Conversations403Error1 | ApiV1Conversations404Error1 |
                ApiV1Conversations429Error1 | ApiV1Conversations500Error1 | ApiV1Conversations502Error1 |
                ApiV1Conversations503Error1 | ApiV1Conversations504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.conversation_get(id_, request_options=request_options))

    async def conversation_get_list(
        self,
        team_id: str,
        *,
        platform: PlatformBundleSocialConversationApiOrStr | None = None,
        social_account_id: str | None = None,
        status: StatusBundleSocialConversationApiOrStr | None = None,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsResponse:
        """List conversations for a team, newest activity first. Filter by ``socialAccountId``, ``platform`` and
        ``status``. Paginate with ``offset`` (``limit`` max 500, default 10) or by passing the previous response's
        ``nextCursor`` back as ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            team_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Conversations400Error1 |
                ApiV1Conversations401Error1 | ApiV1Conversations403Error1 | ApiV1Conversations404Error1 |
                ApiV1Conversations429Error1 | ApiV1Conversations500Error1 | ApiV1Conversations502Error1 |
                ApiV1Conversations503Error1 | ApiV1Conversations504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.conversation_get_list(
                team_id,
                platform=platform,
                social_account_id=social_account_id,
                status=status,
                offset=offset,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    async def conversation_get_messages(
        self,
        id_: str,
        *,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsMessagesResponse:
        """List the messages of a conversation. Pages walk backwards in time, while the messages inside a page are
        ordered oldest first, ready to render. Includes attachments, reactions and delivery state. Paginate with
        ``offset`` (``limit`` max 500, default 10) or by passing the previous response's ``nextCursor`` back as
        ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            id_: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsMessages400Error1 |
                ApiV1ConversationsMessages401Error1 | ApiV1ConversationsMessages403Error1 |
                ApiV1ConversationsMessages404Error1 | ApiV1ConversationsMessages429Error1 |
                ApiV1ConversationsMessages500Error1 | ApiV1ConversationsMessages502Error1 |
                ApiV1ConversationsMessages503Error1 | ApiV1ConversationsMessages504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.conversation_get_messages(
                id_, offset=offset, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def conversation_mark_read(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsReadRequest | ApiV1ConversationsReadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsReadResponse:
        """Clear the unread state of a conversation, optionally up to a specific message.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsRead400Error1 |
                ApiV1ConversationsRead401Error1 | ApiV1ConversationsRead403Error1 | ApiV1ConversationsRead404Error1 |
                ApiV1ConversationsRead429Error1 | ApiV1ConversationsRead500Error1 | ApiV1ConversationsRead502Error1 |
                ApiV1ConversationsRead503Error1 | ApiV1ConversationsRead504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.conversation_mark_read(id_, body=body, request_options=request_options)
        )

    async def conversation_open(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ConversationsOpenResponse:
        """Move an archived or closed conversation back into the active inbox.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsOpen400Error1 |
                ApiV1ConversationsOpen401Error1 | ApiV1ConversationsOpen403Error1 | ApiV1ConversationsOpen404Error1 |
                ApiV1ConversationsOpen429Error1 | ApiV1ConversationsOpen500Error1 | ApiV1ConversationsOpen502Error1 |
                ApiV1ConversationsOpen503Error1 | ApiV1ConversationsOpen504Error1 | RawError``."""
        return unwrap(await self._with_raw_response.conversation_open(id_, request_options=request_options))

    async def conversation_private_reply(
        self,
        *,
        body: ApiV1ConversationsPrivateReplyRequest | ApiV1ConversationsPrivateReplyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsPrivateReplyResponse:
        """Send a direct message in reply to a Facebook or Instagram comment we have already imported. Creates the
        conversation when none exists yet. Returns 503 while messaging sending is temporarily disabled.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsPrivateReply400Error1 |
                ApiV1ConversationsPrivateReply401Error1 | ApiV1ConversationsPrivateReply403Error1 |
                ApiV1ConversationsPrivateReply404Error1 | ApiV1ConversationsPrivateReply429Error1 |
                ApiV1ConversationsPrivateReply500Error1 | ApiV1ConversationsPrivateReply502Error1 |
                ApiV1ConversationsPrivateReply503Error1 | ApiV1ConversationsPrivateReply504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.conversation_private_reply(body=body, request_options=request_options)
        )

    async def conversation_react_message(
        self,
        id_: str,
        message_id: str,
        *,
        body: ApiV1ConversationsMessagesReactionRequest | ApiV1ConversationsMessagesReactionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsMessagesReactionResponse:
        """Add or remove a reaction on a message in a conversation. Returns 503 while messaging sending is temporarily
        disabled.

        Args:
            id_: Value sent with the request.
            message_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsMessagesReaction400Error1 |
                ApiV1ConversationsMessagesReaction401Error1 | ApiV1ConversationsMessagesReaction403Error1 |
                ApiV1ConversationsMessagesReaction404Error1 | ApiV1ConversationsMessagesReaction429Error1 |
                ApiV1ConversationsMessagesReaction500Error1 | ApiV1ConversationsMessagesReaction502Error1 |
                ApiV1ConversationsMessagesReaction503Error1 | ApiV1ConversationsMessagesReaction504Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.conversation_react_message(
                id_, message_id, body=body, request_options=request_options
            ),
        )

    async def conversation_send_message(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsMessagesRequest | ApiV1ConversationsMessagesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsMessagesResponse1:
        """Send a message to the participant of a conversation. The platform reply window must still be open. Returns
        503 while messaging sending is temporarily disabled.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1ConversationsMessages400Error1 |
                ApiV1ConversationsMessages401Error1 | ApiV1ConversationsMessages403Error1 |
                ApiV1ConversationsMessages404Error1 | ApiV1ConversationsMessages429Error1 |
                ApiV1ConversationsMessages500Error1 | ApiV1ConversationsMessages502Error1 |
                ApiV1ConversationsMessages503Error1 | ApiV1ConversationsMessages504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.conversation_send_message(id_, body=body, request_options=request_options)
        )

    async def conversation_update(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsRequest | ApiV1ConversationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ConversationsResponse1:
        """Set the status of a conversation. This is the general form of the archive and open endpoints, which move a
        conversation to one specific status.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 401 403 404 429 500 502 503 504 ``error`` is ``ApiV1Conversations400Error1 |
                ApiV1Conversations401Error1 | ApiV1Conversations403Error1 | ApiV1Conversations404Error1 |
                ApiV1Conversations429Error1 | ApiV1Conversations500Error1 | ApiV1Conversations502Error1 |
                ApiV1Conversations503Error1 | ApiV1Conversations504Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.conversation_update(id_, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncConversationApiWithRawResponse:
        return self._with_raw_response


class ConversationApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def conversation_archive(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ConversationsArchiveResponse, ConversationArchiveErrorBody]:
        """Move a conversation out of the active inbox. Incoming messages reopen it automatically.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1ConversationsArchiveResponse],
            error_mapper=conversation_archive_error_mapper,
            request_options=request_options,
        )

    def conversation_get(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ConversationsResponse1, ConversationGetErrorBody]:
        """Get a single conversation by id, including the participant, the linked social account and its unread and
        status flags.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/conversations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1ConversationsResponse1],
            error_mapper=conversation_get_error_mapper,
            request_options=request_options,
        )

    def conversation_get_list(
        self,
        team_id: str,
        *,
        platform: PlatformBundleSocialConversationApiOrStr | None = None,
        social_account_id: str | None = None,
        status: StatusBundleSocialConversationApiOrStr | None = None,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsResponse, ConversationGetListErrorBody]:
        """List conversations for a team, newest activity first. Filter by ``socialAccountId``, ``platform`` and
        ``status``. Paginate with ``offset`` (``limit`` max 500, default 10) or by passing the previous response's
        ``nextCursor`` back as ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            team_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/conversations/"),
            query_params=[
                param[str]("teamId", team_id),
                param[PlatformBundleSocialConversationApiOrStr | None]("platform", platform),
                param[str | None]("socialAccountId", social_account_id),
                param[StatusBundleSocialConversationApiOrStr | None]("status", status),
                param[int | None]("offset", offset),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1ConversationsResponse],
            error_mapper=conversation_get_list_error_mapper,
            request_options=request_options,
        )

    def conversation_get_messages(
        self,
        id_: str,
        *,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsMessagesResponse, ConversationGetMessagesErrorBody]:
        """List the messages of a conversation. Pages walk backwards in time, while the messages inside a page are
        ordered oldest first, ready to render. Includes attachments, reactions and delivery state. Paginate with
        ``offset`` (``limit`` max 500, default 10) or by passing the previous response's ``nextCursor`` back as
        ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            id_: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/conversations/{id}/messages"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[int | None]("offset", offset),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1ConversationsMessagesResponse],
            error_mapper=conversation_get_messages_error_mapper,
            request_options=request_options,
        )

    def conversation_mark_read(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsReadRequest | ApiV1ConversationsReadRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsReadResponse, ConversationMarkReadErrorBody]:
        """Clear the unread state of a conversation, optionally up to a specific message.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/{id}/read"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ConversationsReadRequest | ApiV1ConversationsReadRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1ConversationsReadResponse],
            error_mapper=conversation_mark_read_error_mapper,
            request_options=request_options,
        )

    def conversation_open(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ConversationsOpenResponse, ConversationOpenErrorBody]:
        """Move an archived or closed conversation back into the active inbox.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/{id}/open"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1ConversationsOpenResponse],
            error_mapper=conversation_open_error_mapper,
            request_options=request_options,
        )

    def conversation_private_reply(
        self,
        *,
        body: ApiV1ConversationsPrivateReplyRequest | ApiV1ConversationsPrivateReplyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsPrivateReplyResponse, ConversationPrivateReplyErrorBody]:
        """Send a direct message in reply to a Facebook or Instagram comment we have already imported. Creates the
        conversation when none exists yet. Returns 503 while messaging sending is temporarily disabled.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/private-reply"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ConversationsPrivateReplyRequest | ApiV1ConversationsPrivateReplyRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1ConversationsPrivateReplyResponse],
            error_mapper=conversation_private_reply_error_mapper,
            request_options=request_options,
        )

    def conversation_react_message(
        self,
        id_: str,
        message_id: str,
        *,
        body: ApiV1ConversationsMessagesReactionRequest | ApiV1ConversationsMessagesReactionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsMessagesReactionResponse, ConversationReactMessageErrorBody]:
        """Add or remove a reaction on a message in a conversation. Returns 503 while messaging sending is temporarily
        disabled.

        Args:
            id_: Value sent with the request.
            message_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/{id}/messages/{messageId}/reaction"),
            path_params=[param[str]("id", id_), param[str]("messageId", message_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1ConversationsMessagesReactionRequest | ApiV1ConversationsMessagesReactionRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1ConversationsMessagesReactionResponse],
            error_mapper=conversation_react_message_error_mapper,
            request_options=request_options,
        )

    def conversation_send_message(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsMessagesRequest | ApiV1ConversationsMessagesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsMessagesResponse1, ConversationSendMessageErrorBody]:
        """Send a message to the participant of a conversation. The platform reply window must still be open. Returns
        503 while messaging sending is temporarily disabled.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/{id}/messages"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ConversationsMessagesRequest | ApiV1ConversationsMessagesRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1ConversationsMessagesResponse1],
            error_mapper=conversation_send_message_error_mapper,
            request_options=request_options,
        )

    def conversation_update(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsRequest | ApiV1ConversationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsResponse1, ConversationUpdateErrorBody]:
        """Set the status of a conversation. This is the general form of the archive and open endpoints, which move a
        conversation to one specific status.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/conversations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ConversationsRequest | ApiV1ConversationsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ApiV1ConversationsResponse1],
            error_mapper=conversation_update_error_mapper,
            request_options=request_options,
        )


class AsyncConversationApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def conversation_archive(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ConversationsArchiveResponse, ConversationArchiveErrorBody]:
        """Move a conversation out of the active inbox. Incoming messages reopen it automatically.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1ConversationsArchiveResponse],
            error_mapper=conversation_archive_error_mapper,
            request_options=request_options,
        )

    async def conversation_get(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ConversationsResponse1, ConversationGetErrorBody]:
        """Get a single conversation by id, including the participant, the linked social account and its unread and
        status flags.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/conversations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1ConversationsResponse1],
            error_mapper=conversation_get_error_mapper,
            request_options=request_options,
        )

    async def conversation_get_list(
        self,
        team_id: str,
        *,
        platform: PlatformBundleSocialConversationApiOrStr | None = None,
        social_account_id: str | None = None,
        status: StatusBundleSocialConversationApiOrStr | None = None,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsResponse, ConversationGetListErrorBody]:
        """List conversations for a team, newest activity first. Filter by ``socialAccountId``, ``platform`` and
        ``status``. Paginate with ``offset`` (``limit`` max 500, default 10) or by passing the previous response's
        ``nextCursor`` back as ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            team_id: Value sent with the request.
            platform: Value sent with the request.
            social_account_id: Value sent with the request.
            status: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/conversations/"),
            query_params=[
                param[str]("teamId", team_id),
                param[PlatformBundleSocialConversationApiOrStr | None]("platform", platform),
                param[str | None]("socialAccountId", social_account_id),
                param[StatusBundleSocialConversationApiOrStr | None]("status", status),
                param[int | None]("offset", offset),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1ConversationsResponse],
            error_mapper=conversation_get_list_error_mapper,
            request_options=request_options,
        )

    async def conversation_get_messages(
        self,
        id_: str,
        *,
        offset: int | None = 0,
        limit: int | None = 10,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsMessagesResponse, ConversationGetMessagesErrorBody]:
        """List the messages of a conversation. Pages walk backwards in time, while the messages inside a page are
        ordered oldest first, ready to render. Includes attachments, reactions and delivery state. Paginate with
        ``offset`` (``limit`` max 500, default 10) or by passing the previous response's ``nextCursor`` back as
        ``cursor``; the two cannot be combined. ``total`` is returned on the first page only.

        Args:
            id_: Value sent with the request.
            offset: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/conversations/{id}/messages"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[int | None]("offset", offset),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1ConversationsMessagesResponse],
            error_mapper=conversation_get_messages_error_mapper,
            request_options=request_options,
        )

    async def conversation_mark_read(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsReadRequest | ApiV1ConversationsReadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsReadResponse, ConversationMarkReadErrorBody]:
        """Clear the unread state of a conversation, optionally up to a specific message.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/{id}/read"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ConversationsReadRequest | ApiV1ConversationsReadRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1ConversationsReadResponse],
            error_mapper=conversation_mark_read_error_mapper,
            request_options=request_options,
        )

    async def conversation_open(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ConversationsOpenResponse, ConversationOpenErrorBody]:
        """Move an archived or closed conversation back into the active inbox.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/{id}/open"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1ConversationsOpenResponse],
            error_mapper=conversation_open_error_mapper,
            request_options=request_options,
        )

    async def conversation_private_reply(
        self,
        *,
        body: ApiV1ConversationsPrivateReplyRequest | ApiV1ConversationsPrivateReplyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsPrivateReplyResponse, ConversationPrivateReplyErrorBody]:
        """Send a direct message in reply to a Facebook or Instagram comment we have already imported. Creates the
        conversation when none exists yet. Returns 503 while messaging sending is temporarily disabled.

        Args:
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/private-reply"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ConversationsPrivateReplyRequest | ApiV1ConversationsPrivateReplyRequestDict | None](
                body
            ),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1ConversationsPrivateReplyResponse],
            error_mapper=conversation_private_reply_error_mapper,
            request_options=request_options,
        )

    async def conversation_react_message(
        self,
        id_: str,
        message_id: str,
        *,
        body: ApiV1ConversationsMessagesReactionRequest | ApiV1ConversationsMessagesReactionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsMessagesReactionResponse, ConversationReactMessageErrorBody]:
        """Add or remove a reaction on a message in a conversation. Returns 503 while messaging sending is temporarily
        disabled.

        Args:
            id_: Value sent with the request.
            message_id: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/{id}/messages/{messageId}/reaction"),
            path_params=[param[str]("id", id_), param[str]("messageId", message_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1ConversationsMessagesReactionRequest | ApiV1ConversationsMessagesReactionRequestDict | None
            ](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1ConversationsMessagesReactionResponse],
            error_mapper=conversation_react_message_error_mapper,
            request_options=request_options,
        )

    async def conversation_send_message(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsMessagesRequest | ApiV1ConversationsMessagesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsMessagesResponse1, ConversationSendMessageErrorBody]:
        """Send a message to the participant of a conversation. The platform reply window must still be open. Returns
        503 while messaging sending is temporarily disabled.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/conversations/{id}/messages"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ConversationsMessagesRequest | ApiV1ConversationsMessagesRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1ConversationsMessagesResponse1],
            error_mapper=conversation_send_message_error_mapper,
            request_options=request_options,
        )

    async def conversation_update(
        self,
        id_: str,
        *,
        body: ApiV1ConversationsRequest | ApiV1ConversationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ConversationsResponse1, ConversationUpdateErrorBody]:
        """Set the status of a conversation. This is the general form of the archive and open endpoints, which move a
        conversation to one specific status.

        Args:
            id_: Value sent with the request.
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/conversations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ConversationsRequest | ApiV1ConversationsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ApiV1ConversationsResponse1],
            error_mapper=conversation_update_error_mapper,
            request_options=request_options,
        )
