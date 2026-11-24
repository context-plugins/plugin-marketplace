from __future__ import annotations

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
from ..models.bundle import Bundle
from ..models.coverage import Coverage
from ..server.server import Server


class CoverageApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CoverageApiWithRawResponse(client, server, auth)

    def read_coverage(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Coverage:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.read_coverage(id_, request_options=request_options))

    def search_coverage(
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
            A FHIR Bundle of Coverage resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.search_coverage(patient=patient, count=count, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CoverageApiWithRawResponse:
        return self._with_raw_response


class AsyncCoverageApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCoverageApiWithRawResponse(client, server, auth)

    async def read_coverage(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Coverage:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.read_coverage(id_, request_options=request_options))

    async def search_coverage(
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
            A FHIR Bundle of Coverage resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_coverage(patient=patient, count=count, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCoverageApiWithRawResponse:
        return self._with_raw_response


class CoverageApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def read_coverage(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Coverage, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Coverage/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Coverage],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def search_coverage(
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
            url_template=self._server.default("/Coverage"),
            query_params=[param[str | None]("patient", patient), param[int | None]("_count", count)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncCoverageApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def read_coverage(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Coverage, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Coverage/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Coverage],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def search_coverage(
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
            url_template=self._server.default("/Coverage"),
            query_params=[param[str | None]("patient", patient), param[int | None]("_count", count)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
