from __future__ import annotations

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
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.lead import Lead
from ..models.lead_deletion_request import LeadDeletionRequest
from ..models.pages_lead_deletion_request_response import PagesLeadDeletionRequestResponse
from ..models.pages_leads_response import PagesLeadsResponse
from ..server.server import Server


class Leads:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LeadsWithRawResponse(client, server, auth)

    def get_lead(self, lead_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Lead:
        """Send a ``GET`` request.

        Args:
            lead_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lead

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_lead(lead_id, request_options=request_options))

    def get_lead_deletion_request(
        self, page_id: str, lead_deletion_request_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> LeadDeletionRequest:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            lead_deletion_request_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lead deletion request

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_lead_deletion_request(
                page_id, lead_deletion_request_id, request_options=request_options
            ),
        )

    def get_lead_for_page(
        self, page_id: str, lead_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Lead:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            lead_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lead

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_lead_for_page(page_id, lead_id, request_options=request_options))

    def list_lead_deletion_requests(
        self, page_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PagesLeadDeletionRequestResponse:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lead deletion request collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_lead_deletion_requests(page_id, request_options=request_options))

    def list_leads_for_page(
        self, page_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PagesLeadsResponse:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lead collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_leads_for_page(page_id, request_options=request_options))

    @property
    def with_raw_response(self) -> LeadsWithRawResponse:
        return self._with_raw_response


class AsyncLeads:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLeadsWithRawResponse(client, server, auth)

    async def get_lead(self, lead_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Lead:
        """Send a ``GET`` request.

        Args:
            lead_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lead

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_lead(lead_id, request_options=request_options))

    async def get_lead_deletion_request(
        self, page_id: str, lead_deletion_request_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LeadDeletionRequest:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            lead_deletion_request_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lead deletion request

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_lead_deletion_request(
                page_id, lead_deletion_request_id, request_options=request_options
            ),
        )

    async def get_lead_for_page(
        self, page_id: str, lead_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Lead:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            lead_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lead

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_lead_for_page(page_id, lead_id, request_options=request_options)
        )

    async def list_lead_deletion_requests(
        self, page_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PagesLeadDeletionRequestResponse:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lead deletion request collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_lead_deletion_requests(page_id, request_options=request_options)
        )

    async def list_leads_for_page(
        self, page_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PagesLeadsResponse:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lead collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_leads_for_page(page_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncLeadsWithRawResponse:
        return self._with_raw_response


class LeadsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_lead(
        self, lead_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Lead, RawError]:
        """Send a ``GET`` request.

        Args:
            lead_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/leads/{lead_id}"),
            path_params=[param[str]("lead_id", lead_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[Lead],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_lead_deletion_request(
        self, page_id: str, lead_deletion_request_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LeadDeletionRequest, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            lead_deletion_request_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}/lead_deletion_request/{lead_deletion_request_id}"),
            path_params=[
                param[str]("page_id", page_id), param[str]("lead_deletion_request_id", lead_deletion_request_id)
            ],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[LeadDeletionRequest],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_lead_for_page(
        self, page_id: str, lead_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Lead, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            lead_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}/leads/{lead_id}"),
            path_params=[param[str]("page_id", page_id), param[str]("lead_id", lead_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[Lead],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_lead_deletion_requests(
        self, page_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PagesLeadDeletionRequestResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}/lead_deletion_request"),
            path_params=[param[str]("page_id", page_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[PagesLeadDeletionRequestResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_leads_for_page(
        self, page_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PagesLeadsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}/leads"),
            path_params=[param[str]("page_id", page_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[PagesLeadsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncLeadsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_lead(
        self, lead_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Lead, RawError]:
        """Send a ``GET`` request.

        Args:
            lead_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/leads/{lead_id}"),
            path_params=[param[str]("lead_id", lead_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[Lead],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_lead_deletion_request(
        self, page_id: str, lead_deletion_request_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LeadDeletionRequest, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            lead_deletion_request_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}/lead_deletion_request/{lead_deletion_request_id}"),
            path_params=[
                param[str]("page_id", page_id), param[str]("lead_deletion_request_id", lead_deletion_request_id)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[LeadDeletionRequest],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_lead_for_page(
        self, page_id: str, lead_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Lead, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            lead_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}/leads/{lead_id}"),
            path_params=[param[str]("page_id", page_id), param[str]("lead_id", lead_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[Lead],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_lead_deletion_requests(
        self, page_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PagesLeadDeletionRequestResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}/lead_deletion_request"),
            path_params=[param[str]("page_id", page_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[PagesLeadDeletionRequestResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_leads_for_page(
        self, page_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PagesLeadsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            page_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pages/{page_id}/leads"),
            path_params=[param[str]("page_id", page_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[PagesLeadsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
