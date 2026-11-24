from __future__ import annotations

from typing import Any
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
from ..errors.create_api_key_error import CreateApiKeyErrorBody, create_api_key_error_mapper
from ..errors.delete_api_key_error import DeleteApiKeyErrorBody, delete_api_key_error_mapper
from ..errors.list_api_keys_error import ListApiKeysErrorBody, list_api_keys_error_mapper
from ..errors.update_api_key_error import UpdateApiKeyErrorBody, update_api_key_error_mapper
from ..models.create_api_key_response import CreateApiKeyResponse
from ..models.list_api_keys_response import ListApiKeysResponse
from ..models.update_api_key_response import UpdateApiKeyResponse
from ..models.v1_apis_apikeys_request import V1ApisApikeysRequest, V1ApisApikeysRequestDict
from ..models.v1_apis_apikeys_request1 import V1ApisApikeysRequest1, V1ApisApikeysRequest1Dict
from ..server.server import Server


class ApiKeys:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ApiKeysWithRawResponse(client, server, auth)

    def create_api_key(
        self,
        api_id: str,
        *,
        body: V1ApisApikeysRequest | V1ApisApikeysRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateApiKeyResponse:
        """Creates a unique key that you can distribute to clients who invoke your API.

        Args:
            api_id: The ID for your GraphQL API.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ApiKeyLimitExceededException; ApiKeyValidityOutOfBoundsException; BadRequestException
                InternalFailureException LimitExceededException NotFoundException UnauthorizedException ``error`` is
                ``ApiKeyLimitExceededException | UnauthorizedException | NotFoundException | LimitExceededException |
                InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.create_api_key(api_id, body=body, request_options=request_options))

    def delete_api_key(self, api_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes an API key.

        Args:
            api_id: The API ID.
            id_: The ID for the API key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.delete_api_key(api_id, id_, request_options=request_options))

    def list_api_keys(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListApiKeysResponse:
        """Lists the API keys for a given API. API keys are deleted automatically 60 days after they expire. However,
        they may still be included in the response until they have actually been deleted. You can safely call
        DeleteApiKey to manually delete a key before it's automatically deleted.

        Args:
            api_id: The API ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_api_keys(
                api_id, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    def update_api_key(
        self,
        api_id: str,
        id_: str,
        *,
        body: V1ApisApikeysRequest1 | V1ApisApikeysRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateApiKeyResponse:
        """Updates an API key. You can update the key as long as it's not deleted.

        Args:
            api_id: The ID for the GraphQL API.
            id_: The API key ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ApiKeyValidityOutOfBoundsException; BadRequestException InternalFailureException
                LimitExceededException NotFoundException UnauthorizedException ``error`` is
                ``ApiKeyValidityOutOfBoundsException | UnauthorizedException | NotFoundException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.update_api_key(api_id, id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ApiKeysWithRawResponse:
        return self._with_raw_response


class AsyncApiKeys:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncApiKeysWithRawResponse(client, server, auth)

    async def create_api_key(
        self,
        api_id: str,
        *,
        body: V1ApisApikeysRequest | V1ApisApikeysRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateApiKeyResponse:
        """Creates a unique key that you can distribute to clients who invoke your API.

        Args:
            api_id: The ID for your GraphQL API.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ApiKeyLimitExceededException; ApiKeyValidityOutOfBoundsException; BadRequestException
                InternalFailureException LimitExceededException NotFoundException UnauthorizedException ``error`` is
                ``ApiKeyLimitExceededException | UnauthorizedException | NotFoundException | LimitExceededException |
                InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.create_api_key(api_id, body=body, request_options=request_options))

    async def delete_api_key(
        self, api_id: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes an API key.

        Args:
            api_id: The API ID.
            id_: The ID for the API key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_api_key(api_id, id_, request_options=request_options))

    async def list_api_keys(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListApiKeysResponse:
        """Lists the API keys for a given API. API keys are deleted automatically 60 days after they expire. However,
        they may still be included in the response until they have actually been deleted. You can safely call
        DeleteApiKey to manually delete a key before it's automatically deleted.

        Args:
            api_id: The API ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_api_keys(
                api_id, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    async def update_api_key(
        self,
        api_id: str,
        id_: str,
        *,
        body: V1ApisApikeysRequest1 | V1ApisApikeysRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateApiKeyResponse:
        """Updates an API key. You can update the key as long as it's not deleted.

        Args:
            api_id: The ID for the GraphQL API.
            id_: The API key ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ApiKeyValidityOutOfBoundsException; BadRequestException InternalFailureException
                LimitExceededException NotFoundException UnauthorizedException ``error`` is
                ``ApiKeyValidityOutOfBoundsException | UnauthorizedException | NotFoundException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_api_key(api_id, id_, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncApiKeysWithRawResponse:
        return self._with_raw_response


class ApiKeysWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_api_key(
        self,
        api_id: str,
        *,
        body: V1ApisApikeysRequest | V1ApisApikeysRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateApiKeyResponse, CreateApiKeyErrorBody]:
        """Creates a unique key that you can distribute to clients who invoke your API.

        Args:
            api_id: The ID for your GraphQL API.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/apikeys"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisApikeysRequest | V1ApisApikeysRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateApiKeyResponse],
            error_mapper=create_api_key_error_mapper,
            request_options=request_options,
        )

    def delete_api_key(
        self, api_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteApiKeyErrorBody]:
        """Deletes an API key.

        Args:
            api_id: The API ID.
            id_: The ID for the API key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/apikeys/{id}"),
            path_params=[param[str]("apiId", api_id), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_api_key_error_mapper,
            request_options=request_options,
        )

    def list_api_keys(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListApiKeysResponse, ListApiKeysErrorBody]:
        """Lists the API keys for a given API. API keys are deleted automatically 60 days after they expire. However,
        they may still be included in the response until they have actually been deleted. You can safely call
        DeleteApiKey to manually delete a key before it's automatically deleted.

        Args:
            api_id: The API ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/apikeys"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListApiKeysResponse],
            error_mapper=list_api_keys_error_mapper,
            request_options=request_options,
        )

    def update_api_key(
        self,
        api_id: str,
        id_: str,
        *,
        body: V1ApisApikeysRequest1 | V1ApisApikeysRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateApiKeyResponse, UpdateApiKeyErrorBody]:
        """Updates an API key. You can update the key as long as it's not deleted.

        Args:
            api_id: The ID for the GraphQL API.
            id_: The API key ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/apikeys/{id}"),
            path_params=[param[str]("apiId", api_id), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisApikeysRequest1 | V1ApisApikeysRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateApiKeyResponse],
            error_mapper=update_api_key_error_mapper,
            request_options=request_options,
        )


class AsyncApiKeysWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_api_key(
        self,
        api_id: str,
        *,
        body: V1ApisApikeysRequest | V1ApisApikeysRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateApiKeyResponse, CreateApiKeyErrorBody]:
        """Creates a unique key that you can distribute to clients who invoke your API.

        Args:
            api_id: The ID for your GraphQL API.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/apikeys"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisApikeysRequest | V1ApisApikeysRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateApiKeyResponse],
            error_mapper=create_api_key_error_mapper,
            request_options=request_options,
        )

    async def delete_api_key(
        self, api_id: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteApiKeyErrorBody]:
        """Deletes an API key.

        Args:
            api_id: The API ID.
            id_: The ID for the API key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/apikeys/{id}"),
            path_params=[param[str]("apiId", api_id), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_api_key_error_mapper,
            request_options=request_options,
        )

    async def list_api_keys(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListApiKeysResponse, ListApiKeysErrorBody]:
        """Lists the API keys for a given API. API keys are deleted automatically 60 days after they expire. However,
        they may still be included in the response until they have actually been deleted. You can safely call
        DeleteApiKey to manually delete a key before it's automatically deleted.

        Args:
            api_id: The API ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/apikeys"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListApiKeysResponse],
            error_mapper=list_api_keys_error_mapper,
            request_options=request_options,
        )

    async def update_api_key(
        self,
        api_id: str,
        id_: str,
        *,
        body: V1ApisApikeysRequest1 | V1ApisApikeysRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateApiKeyResponse, UpdateApiKeyErrorBody]:
        """Updates an API key. You can update the key as long as it's not deleted.

        Args:
            api_id: The ID for the GraphQL API.
            id_: The API key ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/apikeys/{id}"),
            path_params=[param[str]("apiId", api_id), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisApikeysRequest1 | V1ApisApikeysRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateApiKeyResponse],
            error_mapper=update_api_key_error_mapper,
            request_options=request_options,
        )
