from __future__ import annotations

from uuid import UUID

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.list_scheduled_jobs_error import ListScheduledJobsErrorBody, list_scheduled_jobs_error_mapper
from ..models.companies_api_scheduled_jobs_response import CompaniesApiScheduledJobsResponse
from ..server.server import Server


class ScheduledJobs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ScheduledJobsWithRawResponse(client, server, auth)

    def list_scheduled_jobs(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesApiScheduledJobsResponse:
        """Returns a list of scheduled background jobs.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved scheduled jobs

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_scheduled_jobs(company_id, request_options=request_options))

    @property
    def with_raw_response(self) -> ScheduledJobsWithRawResponse:
        return self._with_raw_response


class AsyncScheduledJobs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncScheduledJobsWithRawResponse(client, server, auth)

    async def list_scheduled_jobs(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesApiScheduledJobsResponse:
        """Returns a list of scheduled background jobs.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved scheduled jobs

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_scheduled_jobs(company_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncScheduledJobsWithRawResponse:
        return self._with_raw_response


class ScheduledJobsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_scheduled_jobs(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiScheduledJobsResponse, ListScheduledJobsErrorBody]:
        """Returns a list of scheduled background jobs.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/scheduledJobs"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiScheduledJobsResponse],
            error_mapper=list_scheduled_jobs_error_mapper,
            request_options=request_options,
        )


class AsyncScheduledJobsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_scheduled_jobs(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiScheduledJobsResponse, ListScheduledJobsErrorBody]:
        """Returns a list of scheduled background jobs.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/scheduledJobs"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiScheduledJobsResponse],
            error_mapper=list_scheduled_jobs_error_mapper,
            request_options=request_options,
        )
