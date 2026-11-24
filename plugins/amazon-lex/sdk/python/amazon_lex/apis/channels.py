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
from ..errors.delete_bot_channel_association_error import (
    DeleteBotChannelAssociationErrorBody,
    delete_bot_channel_association_error_mapper,
)
from ..errors.get_bot_channel_association_error import (
    GetBotChannelAssociationErrorBody,
    get_bot_channel_association_error_mapper,
)
from ..errors.get_bot_channel_associations_error import (
    GetBotChannelAssociationsErrorBody,
    get_bot_channel_associations_error_mapper,
)
from ..models.delete_bot_channel_association_request import (
    DeleteBotChannelAssociationRequest,
    DeleteBotChannelAssociationRequestDict,
)
from ..models.get_bot_channel_association_response import GetBotChannelAssociationResponse
from ..models.get_bot_channel_associations_response import GetBotChannelAssociationsResponse
from ..server.server import Server


class Channels:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ChannelsWithRawResponse(client, server, auth)

    def delete_bot_channel_association(
        self,
        bot_name: str,
        bot_alias: str,
        name: str,
        *,
        body: DeleteBotChannelAssociationRequest | DeleteBotChannelAssociationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires
        permission for the lex:DeleteBotChannelAssociation action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``BadRequestException | NotFoundException | ConflictException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_bot_channel_association(
                bot_name, bot_alias, name, body=body, request_options=request_options
            ),
        )

    def get_bot_channel_association(
        self, bot_name: str, bot_alias: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetBotChannelAssociationResponse:
        """Returns information about the association between an Amazon Lex bot and a messaging platform. This operation
        requires permissions for the lex:GetBotChannelAssociation action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_bot_channel_association(
                bot_name, bot_alias, name, request_options=request_options
            ),
        )

    def get_bot_channel_associations(
        self, bot_name: str, bot_alias: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetBotChannelAssociationsResponse:
        """Returns a list of all of the channels associated with the specified bot. The GetBotChannelAssociations
        operation requires permissions for the lex:GetBotChannelAssociations action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.get_bot_channel_associations(bot_name, bot_alias, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ChannelsWithRawResponse:
        return self._with_raw_response


class AsyncChannels:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncChannelsWithRawResponse(client, server, auth)

    async def delete_bot_channel_association(
        self,
        bot_name: str,
        bot_alias: str,
        name: str,
        *,
        body: DeleteBotChannelAssociationRequest | DeleteBotChannelAssociationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires
        permission for the lex:DeleteBotChannelAssociation action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``BadRequestException | NotFoundException | ConflictException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_bot_channel_association(
                bot_name, bot_alias, name, body=body, request_options=request_options
            ),
        )

    async def get_bot_channel_association(
        self, bot_name: str, bot_alias: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetBotChannelAssociationResponse:
        """Returns information about the association between an Amazon Lex bot and a messaging platform. This operation
        requires permissions for the lex:GetBotChannelAssociation action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_bot_channel_association(
                bot_name, bot_alias, name, request_options=request_options
            ),
        )

    async def get_bot_channel_associations(
        self, bot_name: str, bot_alias: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetBotChannelAssociationsResponse:
        """Returns a list of all of the channels associated with the specified bot. The GetBotChannelAssociations
        operation requires permissions for the lex:GetBotChannelAssociations action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_bot_channel_associations(
                bot_name, bot_alias, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncChannelsWithRawResponse:
        return self._with_raw_response


class ChannelsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_bot_channel_association(
        self,
        bot_name: str,
        bot_alias: str,
        name: str,
        *,
        body: DeleteBotChannelAssociationRequest | DeleteBotChannelAssociationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBotChannelAssociationErrorBody]:
        """Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires
        permission for the lex:DeleteBotChannelAssociation action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bots/{botName}/aliases/{botAlias}/channels/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotChannelAssociationRequest | DeleteBotChannelAssociationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_bot_channel_association_error_mapper,
            request_options=request_options,
        )

    def get_bot_channel_association(
        self, bot_name: str, bot_alias: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotChannelAssociationResponse, GetBotChannelAssociationErrorBody]:
        """Returns information about the association between an Amazon Lex bot and a messaging platform. This operation
        requires permissions for the lex:GetBotChannelAssociation action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{botName}/aliases/{botAlias}/channels/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetBotChannelAssociationResponse],
            error_mapper=get_bot_channel_association_error_mapper,
            request_options=request_options,
        )

    def get_bot_channel_associations(
        self, bot_name: str, bot_alias: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotChannelAssociationsResponse, GetBotChannelAssociationsErrorBody]:
        """Returns a list of all of the channels associated with the specified bot. The GetBotChannelAssociations
        operation requires permissions for the lex:GetBotChannelAssociations action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{botName}/aliases/{botAlias}/channels"),
            path_params=[param[str]("botName", bot_name), param[str]("botAlias", bot_alias)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetBotChannelAssociationsResponse],
            error_mapper=get_bot_channel_associations_error_mapper,
            request_options=request_options,
        )


class AsyncChannelsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_bot_channel_association(
        self,
        bot_name: str,
        bot_alias: str,
        name: str,
        *,
        body: DeleteBotChannelAssociationRequest | DeleteBotChannelAssociationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBotChannelAssociationErrorBody]:
        """Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires
        permission for the lex:DeleteBotChannelAssociation action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bots/{botName}/aliases/{botAlias}/channels/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteBotChannelAssociationRequest | DeleteBotChannelAssociationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_bot_channel_association_error_mapper,
            request_options=request_options,
        )

    async def get_bot_channel_association(
        self, bot_name: str, bot_alias: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotChannelAssociationResponse, GetBotChannelAssociationErrorBody]:
        """Returns information about the association between an Amazon Lex bot and a messaging platform. This operation
        requires permissions for the lex:GetBotChannelAssociation action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{botName}/aliases/{botAlias}/channels/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("botAlias", bot_alias), param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetBotChannelAssociationResponse],
            error_mapper=get_bot_channel_association_error_mapper,
            request_options=request_options,
        )

    async def get_bot_channel_associations(
        self, bot_name: str, bot_alias: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotChannelAssociationsResponse, GetBotChannelAssociationsErrorBody]:
        """Returns a list of all of the channels associated with the specified bot. The GetBotChannelAssociations
        operation requires permissions for the lex:GetBotChannelAssociations action.

        Args:
            bot_name: Value sent with the request.
            bot_alias: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{botName}/aliases/{botAlias}/channels"),
            path_params=[param[str]("botName", bot_name), param[str]("botAlias", bot_alias)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetBotChannelAssociationsResponse],
            error_mapper=get_bot_channel_associations_error_mapper,
            request_options=request_options,
        )
