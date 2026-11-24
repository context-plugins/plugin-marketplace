from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.automation_input import AutomationInput, AutomationInputDict
from ..models.automations_request import AutomationsRequest, AutomationsRequestDict
from ..models.deleted import Deleted
from ..server.server import Server


class Automations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AutomationsWithRawResponse(client, server, auth)

    def automations_capabilities(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Capabilities

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.automations_capabilities(request_options=request_options))

    def create_automation(
        self, body: AutomationInput | AutomationInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_automation(body, request_options=request_options))

    def delete_automation(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_automation(id_, request_options=request_options))

    def get_automation(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_automation(id_, request_options=request_options))

    def list_automations(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automations

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_automations(request_options=request_options))

    def set_automation_enabled(
        self,
        id_: str,
        body: AutomationsRequest | AutomationsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.set_automation_enabled(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AutomationsWithRawResponse:
        return self._with_raw_response


class AsyncAutomations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAutomationsWithRawResponse(client, server, auth)

    async def automations_capabilities(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Capabilities

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.automations_capabilities(request_options=request_options))

    async def create_automation(
        self, body: AutomationInput | AutomationInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_automation(body, request_options=request_options))

    async def delete_automation(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_automation(id_, request_options=request_options))

    async def get_automation(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_automation(id_, request_options=request_options))

    async def list_automations(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automations

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_automations(request_options=request_options))

    async def set_automation_enabled(
        self,
        id_: str,
        body: AutomationsRequest | AutomationsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.set_automation_enabled(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAutomationsWithRawResponse:
        return self._with_raw_response


class AutomationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def automations_capabilities(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automations-capabilities"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def create_automation(
        self, body: AutomationInput | AutomationInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/automations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomationInput | AutomationInputDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_automation(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/automations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_automation(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_automations(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automations"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def set_automation_enabled(
        self,
        id_: str,
        body: AutomationsRequest | AutomationsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/automations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomationsRequest | AutomationsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAutomationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def automations_capabilities(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automations-capabilities"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def create_automation(
        self, body: AutomationInput | AutomationInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/automations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomationInput | AutomationInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_automation(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/automations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_automation(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_automations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automations"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def set_automation_enabled(
        self,
        id_: str,
        body: AutomationsRequest | AutomationsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/automations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomationsRequest | AutomationsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
