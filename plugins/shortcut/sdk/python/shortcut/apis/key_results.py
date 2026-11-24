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
from ..errors.get_key_result_error import GetKeyResultErrorBody, get_key_result_error_mapper
from ..errors.update_key_result_error import UpdateKeyResultErrorBody, update_key_result_error_mapper
from ..models.key_result import KeyResult
from ..models.update_key_result import UpdateKeyResult, UpdateKeyResultDict
from ..server.server import Server


class KeyResults:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = KeyResultsWithRawResponse(client, server, auth)

    def get_key_result(
        self, key_result_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> KeyResult:
        """Get Key Result returns information about a chosen Key Result.

        Args:
            key_result_public_id: The ID of the Key Result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_key_result(key_result_public_id, request_options=request_options))

    def update_key_result(
        self,
        key_result_public_id: UUID,
        body: UpdateKeyResult | UpdateKeyResultDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> KeyResult:
        """Update Key Result allows updating a Key Result's name or initial, observed, or target values.

        Args:
            key_result_public_id: The ID of the Key Result.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_key_result(key_result_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> KeyResultsWithRawResponse:
        return self._with_raw_response


class AsyncKeyResults:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncKeyResultsWithRawResponse(client, server, auth)

    async def get_key_result(
        self, key_result_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> KeyResult:
        """Get Key Result returns information about a chosen Key Result.

        Args:
            key_result_public_id: The ID of the Key Result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_key_result(key_result_public_id, request_options=request_options)
        )

    async def update_key_result(
        self,
        key_result_public_id: UUID,
        body: UpdateKeyResult | UpdateKeyResultDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> KeyResult:
        """Update Key Result allows updating a Key Result's name or initial, observed, or target values.

        Args:
            key_result_public_id: The ID of the Key Result.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_key_result(key_result_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncKeyResultsWithRawResponse:
        return self._with_raw_response


class KeyResultsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_key_result(
        self, key_result_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[KeyResult, GetKeyResultErrorBody]:
        """Get Key Result returns information about a chosen Key Result.

        Args:
            key_result_public_id: The ID of the Key Result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/key-results/{key-result-public-id}"),
            path_params=[param[UUID]("key-result-public-id", key_result_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[KeyResult],
            error_mapper=get_key_result_error_mapper,
            request_options=request_options,
        )

    def update_key_result(
        self,
        key_result_public_id: UUID,
        body: UpdateKeyResult | UpdateKeyResultDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[KeyResult, UpdateKeyResultErrorBody]:
        """Update Key Result allows updating a Key Result's name or initial, observed, or target values.

        Args:
            key_result_public_id: The ID of the Key Result.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/key-results/{key-result-public-id}"),
            path_params=[param[UUID]("key-result-public-id", key_result_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateKeyResult | UpdateKeyResultDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[KeyResult],
            error_mapper=update_key_result_error_mapper,
            request_options=request_options,
        )


class AsyncKeyResultsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_key_result(
        self, key_result_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[KeyResult, GetKeyResultErrorBody]:
        """Get Key Result returns information about a chosen Key Result.

        Args:
            key_result_public_id: The ID of the Key Result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/key-results/{key-result-public-id}"),
            path_params=[param[UUID]("key-result-public-id", key_result_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[KeyResult],
            error_mapper=get_key_result_error_mapper,
            request_options=request_options,
        )

    async def update_key_result(
        self,
        key_result_public_id: UUID,
        body: UpdateKeyResult | UpdateKeyResultDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[KeyResult, UpdateKeyResultErrorBody]:
        """Update Key Result allows updating a Key Result's name or initial, observed, or target values.

        Args:
            key_result_public_id: The ID of the Key Result.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/key-results/{key-result-public-id}"),
            path_params=[param[UUID]("key-result-public-id", key_result_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateKeyResult | UpdateKeyResultDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[KeyResult],
            error_mapper=update_key_result_error_mapper,
            request_options=request_options,
        )
