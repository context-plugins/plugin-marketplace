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
from ..server.server import Server


class Observation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ObservationWithRawResponse(client, server, auth)

    def search_observations(
        self,
        *,
        patient: str | None = None,
        code: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            code: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of Observation resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.search_observations(
                patient=patient, code=code, count=count, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ObservationWithRawResponse:
        return self._with_raw_response


class AsyncObservation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncObservationWithRawResponse(client, server, auth)

    async def search_observations(
        self,
        *,
        patient: str | None = None,
        code: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Bundle:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            code: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A FHIR Bundle of Observation resources.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_observations(
                patient=patient, code=code, count=count, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncObservationWithRawResponse:
        return self._with_raw_response


class ObservationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_observations(
        self,
        *,
        patient: str | None = None,
        code: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            code: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Observation"),
            query_params=[
                param[str | None]("patient", patient),
                param[str | None]("code", code),
                param[int | None]("_count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncObservationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_observations(
        self,
        *,
        patient: str | None = None,
        code: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Bundle, RawError]:
        """Send a ``GET`` request.

        Args:
            patient: Reference to the subject Patient (e.g. Patient/{id}).
            code: Value sent with the request.
            count: Number of results per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Observation"),
            query_params=[
                param[str | None]("patient", patient),
                param[str | None]("code", code),
                param[int | None]("_count", count),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Bundle],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
