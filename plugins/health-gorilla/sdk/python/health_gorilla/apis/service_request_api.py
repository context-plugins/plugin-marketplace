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
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.bundle import Bundle
from ..models.service_request import ServiceRequest, ServiceRequestDict
from ..server.server import Server


class ServiceRequestApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ServiceRequestApiWithRawResponse(client, server, auth)

    def create_service_request(
        self, body: ServiceRequest | ServiceRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ServiceRequest:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_service_request(body, request_options=request_options))

    def read_service_request(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ServiceRequest:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.read_service_request(id_, request_options=request_options))

    def search_service_requests(
        self,
        *,
        patient: str | None = None,
        status: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            status: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of ServiceRequest resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.search_service_requests(
                patient=patient, status=status, count=count, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ServiceRequestApiWithRawResponse:
        return self._with_raw_response


class AsyncServiceRequestApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncServiceRequestApiWithRawResponse(client, server, auth)

    async def create_service_request(
        self, body: ServiceRequest | ServiceRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ServiceRequest:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_service_request(body, request_options=request_options))

    async def read_service_request(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ServiceRequest:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.read_service_request(id_, request_options=request_options))

    async def search_service_requests(
        self,
        *,
        patient: str | None = None,
        status: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            status: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of ServiceRequest resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_service_requests(
                patient=patient, status=status, count=count, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncServiceRequestApiWithRawResponse:
        return self._with_raw_response


class ServiceRequestApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_service_request(
        self, body: ServiceRequest | ServiceRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceRequest, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ServiceRequest"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ServiceRequest | ServiceRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ServiceRequest],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def read_service_request(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceRequest, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ServiceRequest/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ServiceRequest],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def search_service_requests(
        self,
        *,
        patient: str | None = None,
        status: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            status: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ServiceRequest"),
            query_params=[
                param[str | None]("patient", patient),
                param[str | None]("status", status),
                param[int | None]("_count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncServiceRequestApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_service_request(
        self, body: ServiceRequest | ServiceRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceRequest, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ServiceRequest"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ServiceRequest | ServiceRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ServiceRequest],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def read_service_request(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ServiceRequest, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ServiceRequest/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ServiceRequest],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def search_service_requests(
        self,
        *,
        patient: str | None = None,
        status: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            status: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ServiceRequest"),
            query_params=[
                param[str | None]("patient", patient),
                param[str | None]("status", status),
                param[int | None]("_count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
