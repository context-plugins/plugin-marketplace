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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_api_v1_webhook_endpoints_by_id_error import (
    DeleteApiV1WebhookEndpointsByIdErrorBody,
    delete_api_v1_webhook_endpoints_by_id_error_mapper,
)
from ..errors.get_api_v1_webhook_endpoints_by_id_error import (
    GetApiV1WebhookEndpointsByIdErrorBody,
    get_api_v1_webhook_endpoints_by_id_error_mapper,
)
from ..errors.get_api_v1_webhook_endpoints_error import (
    GetApiV1WebhookEndpointsErrorBody,
    get_api_v1_webhook_endpoints_error_mapper,
)
from ..errors.patch_api_v1_webhook_endpoints_by_id_error import (
    PatchApiV1WebhookEndpointsByIdErrorBody,
    patch_api_v1_webhook_endpoints_by_id_error_mapper,
)
from ..errors.post_api_v1_webhook_endpoints_by_id_test_error import (
    PostApiV1WebhookEndpointsByIdTestErrorBody,
    post_api_v1_webhook_endpoints_by_id_test_error_mapper,
)
from ..errors.post_api_v1_webhook_endpoints_error import (
    PostApiV1WebhookEndpointsErrorBody,
    post_api_v1_webhook_endpoints_error_mapper,
)
from ..models.api_v1_webhook_endpoints_request import ApiV1WebhookEndpointsRequest, ApiV1WebhookEndpointsRequestDict
from ..models.api_v1_webhook_endpoints_request1 import ApiV1WebhookEndpointsRequest1, ApiV1WebhookEndpointsRequest1Dict
from ..models.api_v1_webhook_endpoints_response import ApiV1WebhookEndpointsResponse
from ..models.api_v1_webhook_endpoints_response1 import ApiV1WebhookEndpointsResponse1
from ..models.api_v1_webhook_endpoints_response2 import ApiV1WebhookEndpointsResponse2
from ..models.api_v1_webhook_endpoints_test_request import (
    ApiV1WebhookEndpointsTestRequest,
    ApiV1WebhookEndpointsTestRequestDict,
)
from ..models.api_v1_webhook_endpoints_test_response import ApiV1WebhookEndpointsTestResponse
from ..server.server import Server


class WebhookEndpoints:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhookEndpointsWithRawResponse(client, server, auth)

    def delete_api_v1_webhook_endpoints_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Its delivery log goes with it. ``PATCH`` with ``{"enabled": false}`` stops deliveries and keeps both.

        Args:
            id_: The endpoint
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed

        Raises:
            ApiError: ``agent_not_permitted`` — an agent key, whatever its scopes. ``not_permitted`` — the key's holder
                is not an owner or an administrator, read on every call. The scope is not the whole check: an endpoint
                receives every event in the organisation. ``not_found`` — no endpoint with that id in this organisation.
                ``error`` is ``ApiV1WebhookEndpoints403Error1 | ApiV1WebhookEndpoints404Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_webhook_endpoints_by_id(id_, request_options=request_options)
        )

    def get_api_v1_webhook_endpoints(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1WebhookEndpointsResponse:
        """The organisation's endpoints, newest first, with their delivery health. Never their signing secrets — those
        are returned once, when an endpoint is created. Owners and administrators only; an agent key is refused.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Endpoints, newest first

        Raises:
            ApiError: ``agent_not_permitted`` — an agent key, whatever its scopes. ``not_permitted`` — the key's holder
                is not an owner or an administrator, read on every call. The scope is not the whole check: an endpoint
                receives every event in the organisation. ``error`` is ``ApiV1WebhookEndpoints403Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_webhook_endpoints(
                limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    def get_api_v1_webhook_endpoints_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1WebhookEndpointsResponse2:
        """With its delivery health. Never its signing secret.

        Args:
            id_: The endpoint
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The endpoint

        Raises:
            ApiError: ``agent_not_permitted`` — an agent key, whatever its scopes. ``not_permitted`` — the key's holder
                is not an owner or an administrator, read on every call. The scope is not the whole check: an endpoint
                receives every event in the organisation. ``not_found`` — no endpoint with that id in this organisation.
                ``error`` is ``ApiV1WebhookEndpoints403Error1 | ApiV1WebhookEndpoints404Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_webhook_endpoints_by_id(id_, request_options=request_options))

    def patch_api_v1_webhook_endpoints_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1WebhookEndpointsRequest1 | ApiV1WebhookEndpointsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1WebhookEndpointsResponse2:
        """Only the fields sent change; at least one is required. Turning an endpoint back on clears its run of
        failures, as the console's switch does. The signing secret cannot be changed: delete the endpoint and add it
        again for a new one.

        Args:
            id_: The endpoint
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Changed

        Raises:
            ApiError: ``validation_error`` — ``details`` lists each problem: a URL that is not HTTPS or points into a
                private network, an event the server does not send, an unknown format. ``agent_not_permitted`` — an
                agent key, whatever its scopes. ``not_permitted`` — the key's holder is not an owner or an
                administrator, read on every call. The scope is not the whole check: an endpoint receives every event in
                the organisation. ``not_found`` — no endpoint with that id in this organisation. ``error`` is
                ``ApiV1WebhookEndpoints400Error1 | ApiV1WebhookEndpoints403Error1 | ApiV1WebhookEndpoints404Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.patch_api_v1_webhook_endpoints_by_id(
                id_, body=body, request_options=request_options
            ),
        )

    def post_api_v1_webhook_endpoints(
        self,
        *,
        body: ApiV1WebhookEndpointsRequest | ApiV1WebhookEndpointsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1WebhookEndpointsResponse1:
        """Every event the endpoint subscribes to then arrives as a signed POST. ``events`` empty or absent means every
        event, including ones added later, except the opt-in ones (the gate.* lifecycle, task.blocked,
        side_task.completed, context.changed, audit.event), which arrive only when named.

        The response carries **``secret``, on this response only**. No other call returns it and it cannot be retrieved
        afterwards; delete the endpoint and add it again if it is lost. A retry carrying the same ``Idempotency-Key``
        gets this same response back.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Added. Keep ``secret``: it is not shown again.

        Raises:
            ApiError: ``validation_error`` — ``details`` lists each problem: a URL that is not HTTPS or points into a
                private network, an event the server does not send, an unknown format. ``agent_not_permitted`` — an
                agent key, whatever its scopes. ``not_permitted`` — the key's holder is not an owner or an
                administrator, read on every call. The scope is not the whole check: an endpoint receives every event in
                the organisation. ``error`` is ``ApiV1WebhookEndpoints400Error1 | ApiV1WebhookEndpoints403Error1 |
                RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_webhook_endpoints(body=body, request_options=request_options))

    def post_api_v1_webhook_endpoints_by_id_test(
        self,
        id_: UUID,
        *,
        body: ApiV1WebhookEndpointsTestRequest | ApiV1WebhookEndpointsTestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1WebhookEndpointsTestResponse:
        """Posts the event now, with the same signature and headers as a real delivery, ``"test": true`` beside
        ``event`` and obviously fake ids in ``data``. One shot: never retried, and never counted toward the failures
        that switch an endpoint off. ``delivered: false`` is an answer about the endpoint, not a failure of this call.
        The body is optional.

        Args:
            id_: The endpoint
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            What the endpoint answered

        Raises:
            ApiError: ``validation_error`` — ``details`` lists each problem: a URL that is not HTTPS or points into a
                private network, an event the server does not send, an unknown format. ``agent_not_permitted`` — an
                agent key, whatever its scopes. ``not_permitted`` — the key's holder is not an owner or an
                administrator, read on every call. The scope is not the whole check: an endpoint receives every event in
                the organisation. ``not_found`` — no endpoint with that id in this organisation. ``error`` is
                ``ApiV1WebhookEndpointsTest400Error1 | ApiV1WebhookEndpointsTest403Error1 |
                ApiV1WebhookEndpointsTest404Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_webhook_endpoints_by_id_test(
                id_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> WebhookEndpointsWithRawResponse:
        return self._with_raw_response


class AsyncWebhookEndpoints:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhookEndpointsWithRawResponse(client, server, auth)

    async def delete_api_v1_webhook_endpoints_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Its delivery log goes with it. ``PATCH`` with ``{"enabled": false}`` stops deliveries and keeps both.

        Args:
            id_: The endpoint
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed

        Raises:
            ApiError: ``agent_not_permitted`` — an agent key, whatever its scopes. ``not_permitted`` — the key's holder
                is not an owner or an administrator, read on every call. The scope is not the whole check: an endpoint
                receives every event in the organisation. ``not_found`` — no endpoint with that id in this organisation.
                ``error`` is ``ApiV1WebhookEndpoints403Error1 | ApiV1WebhookEndpoints404Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_webhook_endpoints_by_id(id_, request_options=request_options)
        )

    async def get_api_v1_webhook_endpoints(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1WebhookEndpointsResponse:
        """The organisation's endpoints, newest first, with their delivery health. Never their signing secrets — those
        are returned once, when an endpoint is created. Owners and administrators only; an agent key is refused.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Endpoints, newest first

        Raises:
            ApiError: ``agent_not_permitted`` — an agent key, whatever its scopes. ``not_permitted`` — the key's holder
                is not an owner or an administrator, read on every call. The scope is not the whole check: an endpoint
                receives every event in the organisation. ``error`` is ``ApiV1WebhookEndpoints403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_webhook_endpoints(
                limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def get_api_v1_webhook_endpoints_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1WebhookEndpointsResponse2:
        """With its delivery health. Never its signing secret.

        Args:
            id_: The endpoint
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The endpoint

        Raises:
            ApiError: ``agent_not_permitted`` — an agent key, whatever its scopes. ``not_permitted`` — the key's holder
                is not an owner or an administrator, read on every call. The scope is not the whole check: an endpoint
                receives every event in the organisation. ``not_found`` — no endpoint with that id in this organisation.
                ``error`` is ``ApiV1WebhookEndpoints403Error1 | ApiV1WebhookEndpoints404Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_webhook_endpoints_by_id(id_, request_options=request_options)
        )

    async def patch_api_v1_webhook_endpoints_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1WebhookEndpointsRequest1 | ApiV1WebhookEndpointsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1WebhookEndpointsResponse2:
        """Only the fields sent change; at least one is required. Turning an endpoint back on clears its run of
        failures, as the console's switch does. The signing secret cannot be changed: delete the endpoint and add it
        again for a new one.

        Args:
            id_: The endpoint
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Changed

        Raises:
            ApiError: ``validation_error`` — ``details`` lists each problem: a URL that is not HTTPS or points into a
                private network, an event the server does not send, an unknown format. ``agent_not_permitted`` — an
                agent key, whatever its scopes. ``not_permitted`` — the key's holder is not an owner or an
                administrator, read on every call. The scope is not the whole check: an endpoint receives every event in
                the organisation. ``not_found`` — no endpoint with that id in this organisation. ``error`` is
                ``ApiV1WebhookEndpoints400Error1 | ApiV1WebhookEndpoints403Error1 | ApiV1WebhookEndpoints404Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.patch_api_v1_webhook_endpoints_by_id(
                id_, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_webhook_endpoints(
        self,
        *,
        body: ApiV1WebhookEndpointsRequest | ApiV1WebhookEndpointsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1WebhookEndpointsResponse1:
        """Every event the endpoint subscribes to then arrives as a signed POST. ``events`` empty or absent means every
        event, including ones added later, except the opt-in ones (the gate.* lifecycle, task.blocked,
        side_task.completed, context.changed, audit.event), which arrive only when named.

        The response carries **``secret``, on this response only**. No other call returns it and it cannot be retrieved
        afterwards; delete the endpoint and add it again if it is lost. A retry carrying the same ``Idempotency-Key``
        gets this same response back.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Added. Keep ``secret``: it is not shown again.

        Raises:
            ApiError: ``validation_error`` — ``details`` lists each problem: a URL that is not HTTPS or points into a
                private network, an event the server does not send, an unknown format. ``agent_not_permitted`` — an
                agent key, whatever its scopes. ``not_permitted`` — the key's holder is not an owner or an
                administrator, read on every call. The scope is not the whole check: an endpoint receives every event in
                the organisation. ``error`` is ``ApiV1WebhookEndpoints400Error1 | ApiV1WebhookEndpoints403Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_webhook_endpoints(body=body, request_options=request_options)
        )

    async def post_api_v1_webhook_endpoints_by_id_test(
        self,
        id_: UUID,
        *,
        body: ApiV1WebhookEndpointsTestRequest | ApiV1WebhookEndpointsTestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1WebhookEndpointsTestResponse:
        """Posts the event now, with the same signature and headers as a real delivery, ``"test": true`` beside
        ``event`` and obviously fake ids in ``data``. One shot: never retried, and never counted toward the failures
        that switch an endpoint off. ``delivered: false`` is an answer about the endpoint, not a failure of this call.
        The body is optional.

        Args:
            id_: The endpoint
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            What the endpoint answered

        Raises:
            ApiError: ``validation_error`` — ``details`` lists each problem: a URL that is not HTTPS or points into a
                private network, an event the server does not send, an unknown format. ``agent_not_permitted`` — an
                agent key, whatever its scopes. ``not_permitted`` — the key's holder is not an owner or an
                administrator, read on every call. The scope is not the whole check: an endpoint receives every event in
                the organisation. ``not_found`` — no endpoint with that id in this organisation. ``error`` is
                ``ApiV1WebhookEndpointsTest400Error1 | ApiV1WebhookEndpointsTest403Error1 |
                ApiV1WebhookEndpointsTest404Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_webhook_endpoints_by_id_test(
                id_, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWebhookEndpointsWithRawResponse:
        return self._with_raw_response


class WebhookEndpointsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_webhook_endpoints_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApiV1WebhookEndpointsByIdErrorBody]:
        """Its delivery log goes with it. ``PATCH`` with ``{"enabled": false}`` stops deliveries and keeps both.

        Args:
            id_: The endpoint
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/webhook-endpoints/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_api_v1_webhook_endpoints_by_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_webhook_endpoints(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WebhookEndpointsResponse, GetApiV1WebhookEndpointsErrorBody]:
        """The organisation's endpoints, newest first, with their delivery health. Never their signing secrets — those
        are returned once, when an endpoint is created. Owners and administrators only; an agent key is refused.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhook-endpoints"),
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1WebhookEndpointsResponse],
            error_mapper=get_api_v1_webhook_endpoints_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_webhook_endpoints_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1WebhookEndpointsResponse2, GetApiV1WebhookEndpointsByIdErrorBody]:
        """With its delivery health. Never its signing secret.

        Args:
            id_: The endpoint
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhook-endpoints/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1WebhookEndpointsResponse2],
            error_mapper=get_api_v1_webhook_endpoints_by_id_error_mapper,
            request_options=request_options,
        )

    def patch_api_v1_webhook_endpoints_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1WebhookEndpointsRequest1 | ApiV1WebhookEndpointsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WebhookEndpointsResponse2, PatchApiV1WebhookEndpointsByIdErrorBody]:
        """Only the fields sent change; at least one is required. Turning an endpoint back on clears its run of
        failures, as the console's switch does. The signing secret cannot be changed: delete the endpoint and add it
        again for a new one.

        Args:
            id_: The endpoint
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/webhook-endpoints/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1WebhookEndpointsRequest1 | ApiV1WebhookEndpointsRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1WebhookEndpointsResponse2],
            error_mapper=patch_api_v1_webhook_endpoints_by_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_webhook_endpoints(
        self,
        *,
        body: ApiV1WebhookEndpointsRequest | ApiV1WebhookEndpointsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WebhookEndpointsResponse1, PostApiV1WebhookEndpointsErrorBody]:
        """Every event the endpoint subscribes to then arrives as a signed POST. ``events`` empty or absent means every
        event, including ones added later, except the opt-in ones (the gate.* lifecycle, task.blocked,
        side_task.completed, context.changed, audit.event), which arrive only when named.

        The response carries **``secret``, on this response only**. No other call returns it and it cannot be retrieved
        afterwards; delete the endpoint and add it again if it is lost. A retry carrying the same ``Idempotency-Key``
        gets this same response back.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/webhook-endpoints"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1WebhookEndpointsRequest | ApiV1WebhookEndpointsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1WebhookEndpointsResponse1],
            error_mapper=post_api_v1_webhook_endpoints_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_webhook_endpoints_by_id_test(
        self,
        id_: UUID,
        *,
        body: ApiV1WebhookEndpointsTestRequest | ApiV1WebhookEndpointsTestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WebhookEndpointsTestResponse, PostApiV1WebhookEndpointsByIdTestErrorBody]:
        """Posts the event now, with the same signature and headers as a real delivery, ``"test": true`` beside
        ``event`` and obviously fake ids in ``data``. One shot: never retried, and never counted toward the failures
        that switch an endpoint off. ``delivered: false`` is an answer about the endpoint, not a failure of this call.
        The body is optional.

        Args:
            id_: The endpoint
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/webhook-endpoints/{id}/test"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1WebhookEndpointsTestRequest | ApiV1WebhookEndpointsTestRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1WebhookEndpointsTestResponse],
            error_mapper=post_api_v1_webhook_endpoints_by_id_test_error_mapper,
            request_options=request_options,
        )


class AsyncWebhookEndpointsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_webhook_endpoints_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApiV1WebhookEndpointsByIdErrorBody]:
        """Its delivery log goes with it. ``PATCH`` with ``{"enabled": false}`` stops deliveries and keeps both.

        Args:
            id_: The endpoint
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/webhook-endpoints/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_api_v1_webhook_endpoints_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_webhook_endpoints(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WebhookEndpointsResponse, GetApiV1WebhookEndpointsErrorBody]:
        """The organisation's endpoints, newest first, with their delivery health. Never their signing secrets — those
        are returned once, when an endpoint is created. Owners and administrators only; an agent key is refused.

        Args:
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhook-endpoints"),
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1WebhookEndpointsResponse],
            error_mapper=get_api_v1_webhook_endpoints_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_webhook_endpoints_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1WebhookEndpointsResponse2, GetApiV1WebhookEndpointsByIdErrorBody]:
        """With its delivery health. Never its signing secret.

        Args:
            id_: The endpoint
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhook-endpoints/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1WebhookEndpointsResponse2],
            error_mapper=get_api_v1_webhook_endpoints_by_id_error_mapper,
            request_options=request_options,
        )

    async def patch_api_v1_webhook_endpoints_by_id(
        self,
        id_: UUID,
        *,
        body: ApiV1WebhookEndpointsRequest1 | ApiV1WebhookEndpointsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WebhookEndpointsResponse2, PatchApiV1WebhookEndpointsByIdErrorBody]:
        """Only the fields sent change; at least one is required. Turning an endpoint back on clears its run of
        failures, as the console's switch does. The signing secret cannot be changed: delete the endpoint and add it
        again for a new one.

        Args:
            id_: The endpoint
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/webhook-endpoints/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1WebhookEndpointsRequest1 | ApiV1WebhookEndpointsRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1WebhookEndpointsResponse2],
            error_mapper=patch_api_v1_webhook_endpoints_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_webhook_endpoints(
        self,
        *,
        body: ApiV1WebhookEndpointsRequest | ApiV1WebhookEndpointsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WebhookEndpointsResponse1, PostApiV1WebhookEndpointsErrorBody]:
        """Every event the endpoint subscribes to then arrives as a signed POST. ``events`` empty or absent means every
        event, including ones added later, except the opt-in ones (the gate.* lifecycle, task.blocked,
        side_task.completed, context.changed, audit.event), which arrive only when named.

        The response carries **``secret``, on this response only**. No other call returns it and it cannot be retrieved
        afterwards; delete the endpoint and add it again if it is lost. A retry carrying the same ``Idempotency-Key``
        gets this same response back.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/webhook-endpoints"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1WebhookEndpointsRequest | ApiV1WebhookEndpointsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1WebhookEndpointsResponse1],
            error_mapper=post_api_v1_webhook_endpoints_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_webhook_endpoints_by_id_test(
        self,
        id_: UUID,
        *,
        body: ApiV1WebhookEndpointsTestRequest | ApiV1WebhookEndpointsTestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WebhookEndpointsTestResponse, PostApiV1WebhookEndpointsByIdTestErrorBody]:
        """Posts the event now, with the same signature and headers as a real delivery, ``"test": true`` beside
        ``event`` and obviously fake ids in ``data``. One shot: never retried, and never counted toward the failures
        that switch an endpoint off. ``delivered: false`` is an answer about the endpoint, not a failure of this call.
        The body is optional.

        Args:
            id_: The endpoint
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/webhook-endpoints/{id}/test"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1WebhookEndpointsTestRequest | ApiV1WebhookEndpointsTestRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1WebhookEndpointsTestResponse],
            error_mapper=post_api_v1_webhook_endpoints_by_id_test_error_mapper,
            request_options=request_options,
        )
