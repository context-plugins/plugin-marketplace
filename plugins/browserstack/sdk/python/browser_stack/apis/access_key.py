from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.automate_recycle_key_json_response import AutomateRecycleKeyJsonResponse
from ..server.server import Server


class AccessKey:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccessKeyWithRawResponse(client, server, auth)

    def recycle_access_key(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> AutomateRecycleKeyJsonResponse:
        """Generates a new access key, invalidating the old one.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            New access key

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.recycle_access_key(request_options=request_options))

    @property
    def with_raw_response(self) -> AccessKeyWithRawResponse:
        return self._with_raw_response


class AsyncAccessKey:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccessKeyWithRawResponse(client, server, auth)

    async def recycle_access_key(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AutomateRecycleKeyJsonResponse:
        """Generates a new access key, invalidating the old one.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            New access key

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.recycle_access_key(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccessKeyWithRawResponse:
        return self._with_raw_response


class AccessKeyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def recycle_access_key(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AutomateRecycleKeyJsonResponse, RawError]:
        """Generates a new access key, invalidating the old one.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/automate/recycle_key.json"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[AutomateRecycleKeyJsonResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAccessKeyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def recycle_access_key(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AutomateRecycleKeyJsonResponse, RawError]:
        """Generates a new access key, invalidating the old one.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/automate/recycle_key.json"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[AutomateRecycleKeyJsonResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
