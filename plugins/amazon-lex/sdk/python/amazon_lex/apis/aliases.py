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
from ..errors.delete_bot_alias_error import DeleteBotAliasErrorBody, delete_bot_alias_error_mapper
from ..errors.get_bot_alias_error import GetBotAliasErrorBody, get_bot_alias_error_mapper
from ..errors.get_bot_aliases_error import GetBotAliasesErrorBody, get_bot_aliases_error_mapper
from ..errors.put_bot_alias_error import PutBotAliasErrorBody, put_bot_alias_error_mapper
from ..models.get_bot_alias_response import GetBotAliasResponse
from ..models.get_bot_aliases_response import GetBotAliasesResponse
from ..models.models_lex_delete_bot_alias_request import (
    ModelsLexDeleteBotAliasRequest,
    ModelsLexDeleteBotAliasRequestDict,
)
from ..models.put_bot_alias_request import PutBotAliasRequest, PutBotAliasRequestDict
from ..models.put_bot_alias_response import PutBotAliasResponse
from ..server.server import Server


class Aliases:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AliasesWithRawResponse(client, server, auth)

    def delete_bot_alias(
        self,
        bot_name: str,
        name: str,
        *,
        body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a
        bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a
        ResourceInUseException exception that includes a reference to the channel association that refers to the bot.
        You can remove the reference to the alias by deleting the channel association. If you get the same exception
        again, delete the referring association until the DeleteBotAlias operation is successful.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_bot_alias(bot_name, name, body=body, request_options=request_options)
        )

    def get_bot_alias(
        self, bot_name: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetBotAliasResponse:
        """Returns information about an Amazon Lex bot alias. For more information about aliases, see
        versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_bot_alias(bot_name, name, request_options=request_options))

    def get_bot_aliases(
        self, bot_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetBotAliasesResponse:
        """Returns a list of aliases for a specified Amazon Lex bot. This operation requires permissions for the
        lex:GetBotAliases action.

        Args:
            bot_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_bot_aliases(bot_name, request_options=request_options))

    def put_bot_alias(
        self,
        bot_name: str,
        name: str,
        *,
        body: PutBotAliasRequest | PutBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PutBotAliasResponse:
        """Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change
        the version of the bot that the alias points to, replace the alias. For more information about aliases, see
        versioning-aliases. This operation requires permissions for the lex:PutBotAlias action.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                PreconditionFailedException ``error`` is ``BadRequestException | ConflictException |
                PreconditionFailedException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.put_bot_alias(bot_name, name, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AliasesWithRawResponse:
        return self._with_raw_response


class AsyncAliases:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAliasesWithRawResponse(client, server, auth)

    async def delete_bot_alias(
        self,
        bot_name: str,
        name: str,
        *,
        body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a
        bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a
        ResourceInUseException exception that includes a reference to the channel association that refers to the bot.
        You can remove the reference to the alias by deleting the channel association. If you get the same exception
        again, delete the referring association until the DeleteBotAlias operation is successful.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_bot_alias(bot_name, name, body=body, request_options=request_options)
        )

    async def get_bot_alias(
        self, bot_name: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetBotAliasResponse:
        """Returns information about an Amazon Lex bot alias. For more information about aliases, see
        versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_bot_alias(bot_name, name, request_options=request_options))

    async def get_bot_aliases(
        self, bot_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetBotAliasesResponse:
        """Returns a list of aliases for a specified Amazon Lex bot. This operation requires permissions for the
        lex:GetBotAliases action.

        Args:
            bot_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.get_bot_aliases(bot_name, request_options=request_options))

    async def put_bot_alias(
        self,
        bot_name: str,
        name: str,
        *,
        body: PutBotAliasRequest | PutBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PutBotAliasResponse:
        """Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change
        the version of the bot that the alias points to, replace the alias. For more information about aliases, see
        versioning-aliases. This operation requires permissions for the lex:PutBotAlias action.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                PreconditionFailedException ``error`` is ``BadRequestException | ConflictException |
                PreconditionFailedException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.put_bot_alias(bot_name, name, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAliasesWithRawResponse:
        return self._with_raw_response


class AliasesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_bot_alias(
        self,
        bot_name: str,
        name: str,
        *,
        body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBotAliasErrorBody]:
        """Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a
        bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a
        ResourceInUseException exception that includes a reference to the channel association that refers to the bot.
        You can remove the reference to the alias by deleting the channel association. If you get the same exception
        again, delete the referring association until the DeleteBotAlias operation is successful.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bots/{botName}/aliases/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_bot_alias_error_mapper,
            request_options=request_options,
        )

    def get_bot_alias(
        self, bot_name: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotAliasResponse, GetBotAliasErrorBody]:
        """Returns information about an Amazon Lex bot alias. For more information about aliases, see
        versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{botName}/aliases/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetBotAliasResponse],
            error_mapper=get_bot_alias_error_mapper,
            request_options=request_options,
        )

    def get_bot_aliases(
        self, bot_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotAliasesResponse, GetBotAliasesErrorBody]:
        """Returns a list of aliases for a specified Amazon Lex bot. This operation requires permissions for the
        lex:GetBotAliases action.

        Args:
            bot_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{botName}/aliases"),
            path_params=[param[str]("botName", bot_name)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetBotAliasesResponse],
            error_mapper=get_bot_aliases_error_mapper,
            request_options=request_options,
        )

    def put_bot_alias(
        self,
        bot_name: str,
        name: str,
        *,
        body: PutBotAliasRequest | PutBotAliasRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PutBotAliasResponse, PutBotAliasErrorBody]:
        """Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change
        the version of the bot that the alias points to, replace the alias. For more information about aliases, see
        versioning-aliases. This operation requires permissions for the lex:PutBotAlias action.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/bots/{botName}/aliases/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutBotAliasRequest | PutBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[PutBotAliasResponse],
            error_mapper=put_bot_alias_error_mapper,
            request_options=request_options,
        )


class AsyncAliasesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_bot_alias(
        self,
        bot_name: str,
        name: str,
        *,
        body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBotAliasErrorBody]:
        """Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a
        bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a
        ResourceInUseException exception that includes a reference to the channel association that refers to the bot.
        You can remove the reference to the alias by deleting the channel association. If you get the same exception
        again, delete the referring association until the DeleteBotAlias operation is successful.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bots/{botName}/aliases/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_bot_alias_error_mapper,
            request_options=request_options,
        )

    async def get_bot_alias(
        self, bot_name: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotAliasResponse, GetBotAliasErrorBody]:
        """Returns information about an Amazon Lex bot alias. For more information about aliases, see
        versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{botName}/aliases/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetBotAliasResponse],
            error_mapper=get_bot_alias_error_mapper,
            request_options=request_options,
        )

    async def get_bot_aliases(
        self, bot_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotAliasesResponse, GetBotAliasesErrorBody]:
        """Returns a list of aliases for a specified Amazon Lex bot. This operation requires permissions for the
        lex:GetBotAliases action.

        Args:
            bot_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{botName}/aliases"),
            path_params=[param[str]("botName", bot_name)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetBotAliasesResponse],
            error_mapper=get_bot_aliases_error_mapper,
            request_options=request_options,
        )

    async def put_bot_alias(
        self,
        bot_name: str,
        name: str,
        *,
        body: PutBotAliasRequest | PutBotAliasRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PutBotAliasResponse, PutBotAliasErrorBody]:
        """Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change
        the version of the bot that the alias points to, replace the alias. For more information about aliases, see
        versioning-aliases. This operation requires permissions for the lex:PutBotAlias action.

        Args:
            bot_name: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/bots/{botName}/aliases/{name}"),
            path_params=[param[str]("botName", bot_name), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutBotAliasRequest | PutBotAliasRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[PutBotAliasResponse],
            error_mapper=put_bot_alias_error_mapper,
            request_options=request_options,
        )
