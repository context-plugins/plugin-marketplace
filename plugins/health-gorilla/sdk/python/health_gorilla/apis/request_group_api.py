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
from ..models.request_group import RequestGroup, RequestGroupDict
from ..server.server import Server


class RequestGroupApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RequestGroupApiWithRawResponse(client, server, auth)

    def create_request_group(
        self, body: RequestGroup | RequestGroupDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> RequestGroup:
        """Creates a RequestGroup parent order that nests one or more ServiceRequest resources (individual tests) for
        submission to a participating diagnostic laboratory or radiology partner.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_request_group(body, request_options=request_options))

    def read_request_group(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> RequestGroup:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.read_request_group(id_, request_options=request_options))

    def search_request_groups(
        self,
        *,
        patient: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of RequestGroup resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.search_request_groups(patient=patient, count=count, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> RequestGroupApiWithRawResponse:
        return self._with_raw_response


class AsyncRequestGroupApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRequestGroupApiWithRawResponse(client, server, auth)

    async def create_request_group(
        self, body: RequestGroup | RequestGroupDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RequestGroup:
        """Creates a RequestGroup parent order that nests one or more ServiceRequest resources (individual tests) for
        submission to a participating diagnostic laboratory or radiology partner.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_request_group(body, request_options=request_options))

    async def read_request_group(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RequestGroup:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.read_request_group(id_, request_options=request_options))

    async def search_request_groups(
        self,
        *,
        patient: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of RequestGroup resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_request_groups(
                patient=patient, count=count, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRequestGroupApiWithRawResponse:
        return self._with_raw_response


class RequestGroupApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_request_group(
        self, body: RequestGroup | RequestGroupDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RequestGroup, RawError]:
        """Creates a RequestGroup parent order that nests one or more ServiceRequest resources (individual tests) for
        submission to a participating diagnostic laboratory or radiology partner.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/RequestGroup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RequestGroup | RequestGroupDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[RequestGroup],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def read_request_group(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RequestGroup, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/RequestGroup/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[RequestGroup],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def search_request_groups(
        self,
        *,
        patient: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/RequestGroup"),
            query_params=[param[str | None]("patient", patient), param[int | None]("_count", count)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncRequestGroupApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_request_group(
        self, body: RequestGroup | RequestGroupDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RequestGroup, RawError]:
        """Creates a RequestGroup parent order that nests one or more ServiceRequest resources (individual tests) for
        submission to a participating diagnostic laboratory or radiology partner.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/RequestGroup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RequestGroup | RequestGroupDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[RequestGroup],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def read_request_group(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RequestGroup, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/RequestGroup/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[RequestGroup],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def search_request_groups(
        self,
        *,
        patient: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/RequestGroup"),
            query_params=[param[str | None]("patient", patient), param[int | None]("_count", count)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
