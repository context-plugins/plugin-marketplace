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
from ..errors.get_builtin_intent_error import GetBuiltinIntentErrorBody, get_builtin_intent_error_mapper
from ..errors.get_builtin_intents_error import GetBuiltinIntentsErrorBody, get_builtin_intents_error_mapper
from ..errors.get_builtin_slot_types_error import GetBuiltinSlotTypesErrorBody, get_builtin_slot_types_error_mapper
from ..errors.list_built_in_intents_error import ListBuiltInIntentsErrorBody, list_built_in_intents_error_mapper
from ..errors.list_built_in_slot_types_error import ListBuiltInSlotTypesErrorBody, list_built_in_slot_types_error_mapper
from ..models.get_builtin_intent_response import GetBuiltinIntentResponse
from ..models.get_builtin_intents_response import GetBuiltinIntentsResponse
from ..models.get_builtin_slot_types_response import GetBuiltinSlotTypesResponse
from ..models.list_built_in_intents_request import ListBuiltInIntentsRequest, ListBuiltInIntentsRequestDict
from ..models.list_built_in_intents_response import ListBuiltInIntentsResponse
from ..models.list_built_in_slot_types_request import ListBuiltInSlotTypesRequest, ListBuiltInSlotTypesRequestDict
from ..models.list_built_in_slot_types_response import ListBuiltInSlotTypesResponse
from ..server.server import Server


class Builtins:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BuiltinsWithRawResponse(client, server, auth)

    def get_builtin_intent(
        self, signature: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetBuiltinIntentResponse:
        """Returns information about a built-in intent. This operation requires permission for the lex:GetBuiltinIntent
        action.

        Args:
            signature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_builtin_intent(signature, request_options=request_options))

    def get_builtin_intents(self, *, request_options: RequestOptionsOrDict | None = None) -> GetBuiltinIntentsResponse:
        """Gets a list of built-in intents that meet the specified criteria. This operation requires permission for the
        lex:GetBuiltinIntents action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_builtin_intents(request_options=request_options))

    def get_builtin_slot_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetBuiltinSlotTypesResponse:
        """Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see
        Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes
        action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_builtin_slot_types(request_options=request_options))

    def list_built_in_intents(
        self,
        locale_id: str,
        *,
        body: ListBuiltInIntentsRequest | ListBuiltInIntentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBuiltInIntentsResponse:
        """Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. To use a built-in intent
        as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter
        when you call the CreateIntent operation. For more information, see CreateIntent.

        Args:
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_built_in_intents(locale_id, body=body, request_options=request_options)
        )

    def list_built_in_slot_types(
        self,
        locale_id: str,
        *,
        body: ListBuiltInSlotTypesRequest | ListBuiltInSlotTypesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBuiltInSlotTypesResponse:
        """Gets a list of built-in slot types that meet the specified criteria.

        Args:
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_built_in_slot_types(locale_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> BuiltinsWithRawResponse:
        return self._with_raw_response


class AsyncBuiltins:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBuiltinsWithRawResponse(client, server, auth)

    async def get_builtin_intent(
        self, signature: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetBuiltinIntentResponse:
        """Returns information about a built-in intent. This operation requires permission for the lex:GetBuiltinIntent
        action.

        Args:
            signature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_builtin_intent(signature, request_options=request_options))

    async def get_builtin_intents(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetBuiltinIntentsResponse:
        """Gets a list of built-in intents that meet the specified criteria. This operation requires permission for the
        lex:GetBuiltinIntents action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.get_builtin_intents(request_options=request_options))

    async def get_builtin_slot_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetBuiltinSlotTypesResponse:
        """Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see
        Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes
        action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ``error`` is
                ``BadRequestException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.get_builtin_slot_types(request_options=request_options))

    async def list_built_in_intents(
        self,
        locale_id: str,
        *,
        body: ListBuiltInIntentsRequest | ListBuiltInIntentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBuiltInIntentsResponse:
        """Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. To use a built-in intent
        as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter
        when you call the CreateIntent operation. For more information, see CreateIntent.

        Args:
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_built_in_intents(locale_id, body=body, request_options=request_options)
        )

    async def list_built_in_slot_types(
        self,
        locale_id: str,
        *,
        body: ListBuiltInSlotTypesRequest | ListBuiltInSlotTypesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBuiltInSlotTypesResponse:
        """Gets a list of built-in slot types that meet the specified criteria.

        Args:
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ServiceQuotaExceededException ThrottlingException ValidationException
                ``error`` is ``ValidationException | ServiceQuotaExceededException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_built_in_slot_types(
                locale_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBuiltinsWithRawResponse:
        return self._with_raw_response


class BuiltinsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_builtin_intent(
        self, signature: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetBuiltinIntentResponse, GetBuiltinIntentErrorBody]:
        """Returns information about a built-in intent. This operation requires permission for the lex:GetBuiltinIntent
        action.

        Args:
            signature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_builtins_api(
                "/builtins/intents/{signature}"
            ),
            path_params=[param[str]("signature", signature)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetBuiltinIntentResponse],
            error_mapper=get_builtin_intent_error_mapper,
            request_options=request_options,
        )

    def get_builtin_intents(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetBuiltinIntentsResponse, GetBuiltinIntentsErrorBody]:
        """Gets a list of built-in intents that meet the specified criteria. This operation requires permission for the
        lex:GetBuiltinIntents action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_builtins_api("/builtins/intents"),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetBuiltinIntentsResponse],
            error_mapper=get_builtin_intents_error_mapper,
            request_options=request_options,
        )

    def get_builtin_slot_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetBuiltinSlotTypesResponse, GetBuiltinSlotTypesErrorBody]:
        """Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see
        Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes
        action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_builtins_api("/builtins/slottypes"),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetBuiltinSlotTypesResponse],
            error_mapper=get_builtin_slot_types_error_mapper,
            request_options=request_options,
        )

    def list_built_in_intents(
        self,
        locale_id: str,
        *,
        body: ListBuiltInIntentsRequest | ListBuiltInIntentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBuiltInIntentsResponse, ListBuiltInIntentsErrorBody]:
        """Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. To use a built-in intent
        as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter
        when you call the CreateIntent operation. For more information, see CreateIntent.

        Args:
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_builtins_api(
                "/builtins/locales/{localeId}/intents"
            ),
            path_params=[param[str]("localeId", locale_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBuiltInIntentsRequest | ListBuiltInIntentsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBuiltInIntentsResponse],
            error_mapper=list_built_in_intents_error_mapper,
            request_options=request_options,
        )

    def list_built_in_slot_types(
        self,
        locale_id: str,
        *,
        body: ListBuiltInSlotTypesRequest | ListBuiltInSlotTypesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBuiltInSlotTypesResponse, ListBuiltInSlotTypesErrorBody]:
        """Gets a list of built-in slot types that meet the specified criteria.

        Args:
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_builtins_api(
                "/builtins/locales/{localeId}/slottypes"
            ),
            path_params=[param[str]("localeId", locale_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBuiltInSlotTypesRequest | ListBuiltInSlotTypesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListBuiltInSlotTypesResponse],
            error_mapper=list_built_in_slot_types_error_mapper,
            request_options=request_options,
        )


class AsyncBuiltinsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_builtin_intent(
        self, signature: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetBuiltinIntentResponse, GetBuiltinIntentErrorBody]:
        """Returns information about a built-in intent. This operation requires permission for the lex:GetBuiltinIntent
        action.

        Args:
            signature: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_builtins_api(
                "/builtins/intents/{signature}"
            ),
            path_params=[param[str]("signature", signature)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetBuiltinIntentResponse],
            error_mapper=get_builtin_intent_error_mapper,
            request_options=request_options,
        )

    async def get_builtin_intents(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetBuiltinIntentsResponse, GetBuiltinIntentsErrorBody]:
        """Gets a list of built-in intents that meet the specified criteria. This operation requires permission for the
        lex:GetBuiltinIntents action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_builtins_api("/builtins/intents"),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetBuiltinIntentsResponse],
            error_mapper=get_builtin_intents_error_mapper,
            request_options=request_options,
        )

    async def get_builtin_slot_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetBuiltinSlotTypesResponse, GetBuiltinSlotTypesErrorBody]:
        """Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see
        Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes
        action.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_builtins_api("/builtins/slottypes"),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetBuiltinSlotTypesResponse],
            error_mapper=get_builtin_slot_types_error_mapper,
            request_options=request_options,
        )

    async def list_built_in_intents(
        self,
        locale_id: str,
        *,
        body: ListBuiltInIntentsRequest | ListBuiltInIntentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBuiltInIntentsResponse, ListBuiltInIntentsErrorBody]:
        """Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. To use a built-in intent
        as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter
        when you call the CreateIntent operation. For more information, see CreateIntent.

        Args:
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_builtins_api(
                "/builtins/locales/{localeId}/intents"
            ),
            path_params=[param[str]("localeId", locale_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBuiltInIntentsRequest | ListBuiltInIntentsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBuiltInIntentsResponse],
            error_mapper=list_built_in_intents_error_mapper,
            request_options=request_options,
        )

    async def list_built_in_slot_types(
        self,
        locale_id: str,
        *,
        body: ListBuiltInSlotTypesRequest | ListBuiltInSlotTypesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBuiltInSlotTypesResponse, ListBuiltInSlotTypesErrorBody]:
        """Gets a list of built-in slot types that meet the specified criteria.

        Args:
            locale_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_builtins_api(
                "/builtins/locales/{localeId}/slottypes"
            ),
            path_params=[param[str]("localeId", locale_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBuiltInSlotTypesRequest | ListBuiltInSlotTypesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListBuiltInSlotTypesResponse],
            error_mapper=list_built_in_slot_types_error_mapper,
            request_options=request_options,
        )
