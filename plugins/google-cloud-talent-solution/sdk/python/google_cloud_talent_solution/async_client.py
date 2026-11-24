from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from typing import Any
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AsyncAuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseGoogleCloudTalentSolutionClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyQueryScheme,
    ApiResult,
    AsyncAnySchemes,
    AsyncAuthorizationCodeCredentials,
    AsyncAuthorizationCodeCredentialsOrDict,
    AsyncAuthorizationCodeTokenSource,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncOAuth2RefreshableScheme,
    AsyncRawClient,
    AsyncRefreshableTokenSource,
    AsyncRequestOptionsOrDict,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    client_secret_basic,
    json_body,
    no_auth,
    param,
    unwrap,
)
from .errors.jobs_projects_operations_get_error import (
    JobsProjectsOperationsGetErrorBody,
    jobs_projects_operations_get_error_mapper,
)
from .errors.jobs_projects_tenants_client_events_create_error import (
    JobsProjectsTenantsClientEventsCreateErrorBody,
    jobs_projects_tenants_client_events_create_error_mapper,
)
from .errors.jobs_projects_tenants_companies_create_error import (
    JobsProjectsTenantsCompaniesCreateErrorBody,
    jobs_projects_tenants_companies_create_error_mapper,
)
from .errors.jobs_projects_tenants_companies_delete_error import (
    JobsProjectsTenantsCompaniesDeleteErrorBody,
    jobs_projects_tenants_companies_delete_error_mapper,
)
from .errors.jobs_projects_tenants_companies_get_error import (
    JobsProjectsTenantsCompaniesGetErrorBody,
    jobs_projects_tenants_companies_get_error_mapper,
)
from .errors.jobs_projects_tenants_companies_list_error import (
    JobsProjectsTenantsCompaniesListErrorBody,
    jobs_projects_tenants_companies_list_error_mapper,
)
from .errors.jobs_projects_tenants_companies_patch_error import (
    JobsProjectsTenantsCompaniesPatchErrorBody,
    jobs_projects_tenants_companies_patch_error_mapper,
)
from .errors.jobs_projects_tenants_complete_query_error import (
    JobsProjectsTenantsCompleteQueryErrorBody,
    jobs_projects_tenants_complete_query_error_mapper,
)
from .errors.jobs_projects_tenants_create_error import (
    JobsProjectsTenantsCreateErrorBody,
    jobs_projects_tenants_create_error_mapper,
)
from .errors.jobs_projects_tenants_delete_error import (
    JobsProjectsTenantsDeleteErrorBody,
    jobs_projects_tenants_delete_error_mapper,
)
from .errors.jobs_projects_tenants_get_error import (
    JobsProjectsTenantsGetErrorBody,
    jobs_projects_tenants_get_error_mapper,
)
from .errors.jobs_projects_tenants_jobs_batch_create_error import (
    JobsProjectsTenantsJobsBatchCreateErrorBody,
    jobs_projects_tenants_jobs_batch_create_error_mapper,
)
from .errors.jobs_projects_tenants_jobs_batch_delete_error import (
    JobsProjectsTenantsJobsBatchDeleteErrorBody,
    jobs_projects_tenants_jobs_batch_delete_error_mapper,
)
from .errors.jobs_projects_tenants_jobs_batch_update_error import (
    JobsProjectsTenantsJobsBatchUpdateErrorBody,
    jobs_projects_tenants_jobs_batch_update_error_mapper,
)
from .errors.jobs_projects_tenants_jobs_create_error import (
    JobsProjectsTenantsJobsCreateErrorBody,
    jobs_projects_tenants_jobs_create_error_mapper,
)
from .errors.jobs_projects_tenants_jobs_delete_error import (
    JobsProjectsTenantsJobsDeleteErrorBody,
    jobs_projects_tenants_jobs_delete_error_mapper,
)
from .errors.jobs_projects_tenants_jobs_get_error import (
    JobsProjectsTenantsJobsGetErrorBody,
    jobs_projects_tenants_jobs_get_error_mapper,
)
from .errors.jobs_projects_tenants_jobs_list_error import (
    JobsProjectsTenantsJobsListErrorBody,
    jobs_projects_tenants_jobs_list_error_mapper,
)
from .errors.jobs_projects_tenants_jobs_patch_error import (
    JobsProjectsTenantsJobsPatchErrorBody,
    jobs_projects_tenants_jobs_patch_error_mapper,
)
from .errors.jobs_projects_tenants_jobs_search_error import (
    JobsProjectsTenantsJobsSearchErrorBody,
    jobs_projects_tenants_jobs_search_error_mapper,
)
from .errors.jobs_projects_tenants_jobs_search_for_alert_error import (
    JobsProjectsTenantsJobsSearchForAlertErrorBody,
    jobs_projects_tenants_jobs_search_for_alert_error_mapper,
)
from .errors.jobs_projects_tenants_list_error import (
    JobsProjectsTenantsListErrorBody,
    jobs_projects_tenants_list_error_mapper,
)
from .errors.jobs_projects_tenants_patch_error import (
    JobsProjectsTenantsPatchErrorBody,
    jobs_projects_tenants_patch_error_mapper,
)
from .models.batch_create_jobs_request import BatchCreateJobsRequest, BatchCreateJobsRequestDict
from .models.batch_delete_jobs_request import BatchDeleteJobsRequest, BatchDeleteJobsRequestDict
from .models.batch_update_jobs_request import BatchUpdateJobsRequest, BatchUpdateJobsRequestDict
from .models.client_event import ClientEvent, ClientEventDict
from .models.company import Company, CompanyDict
from .models.complete_query_response import CompleteQueryResponse
from .models.enums.job_view1 import JobView1OrStr
from .models.enums.scope import ScopeOrStr
from .models.enums.type4 import Type4OrStr
from .models.job import Job, JobDict
from .models.list_companies_response import ListCompaniesResponse
from .models.list_jobs_response import ListJobsResponse
from .models.list_tenants_response import ListTenantsResponse
from .models.operation import Operation
from .models.search_jobs_request import SearchJobsRequest, SearchJobsRequestDict
from .models.search_jobs_response import SearchJobsResponse
from .models.tenant import Tenant, TenantDict
from .server.server import Server
from .server.server_config import ServerConfigOrDict


class AsyncGoogleCloudTalentSolutionClient(BaseGoogleCloudTalentSolutionClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key: str | None = None,
        oauth2: AsyncAuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: AsyncRefreshableTokenSource[AsyncAuthorizationCodeCredentials[Oauth2Scope]] | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "GoogleCloudTalentSolutionClient/v4 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v4"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key=ApiKeyQueryScheme("key", api_key) if api_key is not None else no_auth,
            oauth2=(
                AsyncOAuth2RefreshableScheme(
                    credentials=AsyncAuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AsyncAuthorizationCodeTokenSource[Oauth2Scope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/auth"),
                            token_url=self._server.access_token_server("/token"),
                            refresh_url=self._server.access_token_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2 is not None
                else no_auth
            ),
        )

    @cached_property
    def with_raw_response(self) -> AsyncApiWithRawResponse:
        return AsyncApiWithRawResponse(self._raw_client, self._server, self._auth)

    async def jobs_projects_operations_get(
        self, projects_id: str, operations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Operation:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_operations_get(
                projects_id, operations_id, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_client_events_create(
        self,
        projects_id: str,
        tenants_id: str,
        body: ClientEvent | ClientEventDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClientEvent:
        """Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You
        may inspect the created events in self service tools. Learn more about self service tools.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_client_events_create(
                projects_id, tenants_id, body, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_companies_create(
        self,
        projects_id: str,
        tenants_id: str,
        body: Company | CompanyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Company:
        """Creates a new company entity.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_companies_create(
                projects_id, tenants_id, body, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_companies_delete(
        self,
        projects_id: str,
        tenants_id: str,
        companies_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes specified company. Prerequisite: The company has no jobs associated with it.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            companies_id: Resource name segment (companiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_companies_delete(
                projects_id, tenants_id, companies_id, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_companies_get(
        self,
        projects_id: str,
        tenants_id: str,
        companies_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Company:
        """Retrieves specified company.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            companies_id: Resource name segment (companiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_companies_get(
                projects_id, tenants_id, companies_id, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_companies_list(
        self,
        projects_id: str,
        tenants_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        require_open_jobs: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListCompaniesResponse:
        """Lists all companies associated with the project.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            page_size: The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive
                number is provided.
            page_token: The starting indicator from which to return results.
            require_open_jobs: Set to true if the companies requested must have open jobs. Defaults to false. If true,
                at most page_size of companies are fetched, among which only those with open jobs are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_companies_list(
                projects_id,
                tenants_id,
                page_size=page_size,
                page_token=page_token,
                require_open_jobs=require_open_jobs,
                request_options=request_options,
            ),
        )

    async def jobs_projects_tenants_companies_patch(
        self,
        projects_id: str,
        tenants_id: str,
        companies_id: str,
        body: Company | CompanyDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Company:
        """Updates specified company.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            companies_id: Resource name segment (companiesId).
            body: The request body.
            update_mask: Strongly recommended for the best service experience. If update_mask is provided, only the
                specified fields in company are updated. Otherwise all the fields are updated. A field mask to specify
                the company fields to be updated. Only top level fields of Company are supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_companies_patch(
                projects_id, tenants_id, companies_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_complete_query(
        self,
        projects_id: str,
        tenants_id: str,
        *,
        company: str | None = None,
        language_codes: list[str] | None = None,
        page_size: int | None = None,
        query: str | None = None,
        scope: ScopeOrStr | None = None,
        type_: Type4OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompleteQueryResponse:
        """Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete
        search box.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            company: If provided, restricts completion to specified company. The format is
                "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example,
                "projects/foo/tenants/bar/companies/baz".
            language_codes: The list of languages of the query. This is the BCP-47 language code, such as "en-US" or
                "sr-Latn". For more information, see `Tags for Identifying Languages
                <https://tools.ietf.org/html/bcp47>`__. The maximum number of allowed characters is 255.
            page_size: Required. Completion result count. The maximum allowed page size is 10.
            query: Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
            scope: The scope of the completion. The defaults is CompletionScope.PUBLIC.
            type_: The completion topic. The default is CompletionType.COMBINED.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_complete_query(
                projects_id,
                tenants_id,
                company=company,
                language_codes=language_codes,
                page_size=page_size,
                query=query,
                scope=scope,
                type_=type_,
                request_options=request_options,
            ),
        )

    async def jobs_projects_tenants_create(
        self, projects_id: str, body: Tenant | TenantDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Tenant:
        """Creates a new tenant entity.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_create(
                projects_id, body, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_delete(
        self, projects_id: str, tenants_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes specified tenant.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_delete(
                projects_id, tenants_id, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_get(
        self, projects_id: str, tenants_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Tenant:
        """Retrieves specified tenant.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_get(
                projects_id, tenants_id, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_jobs_batch_create(
        self,
        projects_id: str,
        tenants_id: str,
        body: BatchCreateJobsRequest | BatchCreateJobsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Begins executing a batch create jobs operation.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_jobs_batch_create(
                projects_id, tenants_id, body, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_jobs_batch_delete(
        self,
        projects_id: str,
        tenants_id: str,
        body: BatchDeleteJobsRequest | BatchDeleteJobsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Begins executing a batch delete jobs operation.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_jobs_batch_delete(
                projects_id, tenants_id, body, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_jobs_batch_update(
        self,
        projects_id: str,
        tenants_id: str,
        body: BatchUpdateJobsRequest | BatchUpdateJobsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Operation:
        """Begins executing a batch update jobs operation.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_jobs_batch_update(
                projects_id, tenants_id, body, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_jobs_create(
        self,
        projects_id: str,
        tenants_id: str,
        body: Job | JobDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Job:
        """Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_jobs_create(
                projects_id, tenants_id, body, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_jobs_delete(
        self,
        projects_id: str,
        tenants_id: str,
        jobs_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5
        minutes.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            jobs_id: Resource name segment (jobsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_jobs_delete(
                projects_id, tenants_id, jobs_id, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_jobs_get(
        self,
        projects_id: str,
        tenants_id: str,
        jobs_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Job:
        """Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            jobs_id: Resource name segment (jobsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_jobs_get(
                projects_id, tenants_id, jobs_id, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_jobs_list(
        self,
        projects_id: str,
        tenants_id: str,
        *,
        filter_: str | None = None,
        job_view: JobView1OrStr | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListJobsResponse:
        """Lists jobs by filter.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            filter_: Required. The filter string specifies the jobs to be enumerated. Supported operator: =, AND The
                fields eligible for filtering are: * ``companyName`` * ``requisitionId`` * ``status`` Available values:
                OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified. At least one of ``companyName`` and
                ``requisitionId`` must present or an INVALID_ARGUMENT error is thrown. Sample Query: * companyName =
                "projects/foo/tenants/bar/companies/baz" * companyName = "projects/foo/tenants/bar/companies/baz" AND
                requisitionId = "req-1" * companyName = "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED"
                * requisitionId = "req-1" * requisitionId = "req-1" AND status = "EXPIRED"
            job_view: The desired job attributes returned for jobs in the search response. Defaults to
                JobView.JOB_VIEW_FULL if no value is specified.
            page_size: The maximum number of jobs to be returned per page of results. If job_view is set to
                JobView.JOB_VIEW_ID_ONLY, the maximum allowed page size is 1000. Otherwise, the maximum allowed page
                size is 100. Default is 100 if empty or a number < 1 is specified.
            page_token: The starting point of a query result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_jobs_list(
                projects_id,
                tenants_id,
                filter_=filter_,
                job_view=job_view,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def jobs_projects_tenants_jobs_patch(
        self,
        projects_id: str,
        tenants_id: str,
        jobs_id: str,
        body: Job | JobDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Job:
        """Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it
        may take up to 5 minutes.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            jobs_id: Resource name segment (jobsId).
            body: The request body.
            update_mask: Strongly recommended for the best service experience. If update_mask is provided, only the
                specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the
                fields that are updated. Only top level fields of Job are supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_jobs_patch(
                projects_id, tenants_id, jobs_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_jobs_search(
        self,
        projects_id: str,
        tenants_id: str,
        body: SearchJobsRequest | SearchJobsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchJobsResponse:
        """Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present
        in the database, and only returns jobs that the caller has permission to search against.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_jobs_search(
                projects_id, tenants_id, body, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_jobs_search_for_alert(
        self,
        projects_id: str,
        tenants_id: str,
        body: SearchJobsRequest | SearchJobsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchJobsResponse:
        """Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of
        targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about
        potential job opportunities), it has different algorithmic adjustments that are designed to specifically target
        passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs
        the caller has permission to search against.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_jobs_search_for_alert(
                projects_id, tenants_id, body, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_list(
        self,
        projects_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListTenantsResponse:
        """Lists all tenants associated with the project.

        Args:
            projects_id: Resource name segment (projectsId).
            page_size: The maximum number of tenants to be returned, at most 100. Default is 100 if a non-positive
                number is provided.
            page_token: The starting indicator from which to return results.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_list(
                projects_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def jobs_projects_tenants_patch(
        self,
        projects_id: str,
        tenants_id: str,
        body: Tenant | TenantDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Tenant:
        """Updates specified tenant.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            update_mask: Strongly recommended for the best service experience. If update_mask is provided, only the
                specified fields in tenant are updated. Otherwise all the fields are updated. A field mask to specify
                the tenant fields to be updated. Only top level fields of Tenant are supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self.with_raw_response.jobs_projects_tenants_patch(
                projects_id, tenants_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


class AsyncApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def jobs_projects_operations_get(
        self, projects_id: str, operations_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Operation, JobsProjectsOperationsGetErrorBody]:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v4/projects/{projectsId}/operations/{operationsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("operationsId", operations_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=jobs_projects_operations_get_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_client_events_create(
        self,
        projects_id: str,
        tenants_id: str,
        body: ClientEvent | ClientEventDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClientEvent, JobsProjectsTenantsClientEventsCreateErrorBody]:
        """Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You
        may inspect the created events in self service tools. Learn more about self service tools.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/clientEvents"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ClientEvent | ClientEventDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ClientEvent],
            error_mapper=jobs_projects_tenants_client_events_create_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_companies_create(
        self,
        projects_id: str,
        tenants_id: str,
        body: Company | CompanyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Company, JobsProjectsTenantsCompaniesCreateErrorBody]:
        """Creates a new company entity.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Company | CompanyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Company],
            error_mapper=jobs_projects_tenants_companies_create_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_companies_delete(
        self,
        projects_id: str,
        tenants_id: str,
        companies_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, JobsProjectsTenantsCompaniesDeleteErrorBody]:
        """Deletes specified company. Prerequisite: The company has no jobs associated with it.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            companies_id: Resource name segment (companiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("tenantsId", tenants_id),
                param[str]("companiesId", companies_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=jobs_projects_tenants_companies_delete_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_companies_get(
        self,
        projects_id: str,
        tenants_id: str,
        companies_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Company, JobsProjectsTenantsCompaniesGetErrorBody]:
        """Retrieves specified company.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            companies_id: Resource name segment (companiesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("tenantsId", tenants_id),
                param[str]("companiesId", companies_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Company],
            error_mapper=jobs_projects_tenants_companies_get_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_companies_list(
        self,
        projects_id: str,
        tenants_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        require_open_jobs: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListCompaniesResponse, JobsProjectsTenantsCompaniesListErrorBody]:
        """Lists all companies associated with the project.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            page_size: The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive
                number is provided.
            page_token: The starting indicator from which to return results.
            require_open_jobs: Set to true if the companies requested must have open jobs. Defaults to false. If true,
                at most page_size of companies are fetched, among which only those with open jobs are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            query_params=[
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[bool | None]("requireOpenJobs", require_open_jobs),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListCompaniesResponse],
            error_mapper=jobs_projects_tenants_companies_list_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_companies_patch(
        self,
        projects_id: str,
        tenants_id: str,
        companies_id: str,
        body: Company | CompanyDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Company, JobsProjectsTenantsCompaniesPatchErrorBody]:
        """Updates specified company.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            companies_id: Resource name segment (companiesId).
            body: The request body.
            update_mask: Strongly recommended for the best service experience. If update_mask is provided, only the
                specified fields in company are updated. Otherwise all the fields are updated. A field mask to specify
                the company fields to be updated. Only top level fields of Company are supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("tenantsId", tenants_id),
                param[str]("companiesId", companies_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Company | CompanyDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Company],
            error_mapper=jobs_projects_tenants_companies_patch_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_complete_query(
        self,
        projects_id: str,
        tenants_id: str,
        *,
        company: str | None = None,
        language_codes: list[str] | None = None,
        page_size: int | None = None,
        query: str | None = None,
        scope: ScopeOrStr | None = None,
        type_: Type4OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompleteQueryResponse, JobsProjectsTenantsCompleteQueryErrorBody]:
        """Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete
        search box.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            company: If provided, restricts completion to specified company. The format is
                "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example,
                "projects/foo/tenants/bar/companies/baz".
            language_codes: The list of languages of the query. This is the BCP-47 language code, such as "en-US" or
                "sr-Latn". For more information, see `Tags for Identifying Languages
                <https://tools.ietf.org/html/bcp47>`__. The maximum number of allowed characters is 255.
            page_size: Required. Completion result count. The maximum allowed page size is 10.
            query: Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
            scope: The scope of the completion. The defaults is CompletionScope.PUBLIC.
            type_: The completion topic. The default is CompletionType.COMBINED.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}:completeQuery"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            query_params=[
                param[str | None]("company", company),
                param[list[str] | None]("languageCodes", language_codes),
                param[int | None]("pageSize", page_size),
                param[str | None]("query", query),
                param[ScopeOrStr | None]("scope", scope),
                param[Type4OrStr | None]("type", type_),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[CompleteQueryResponse],
            error_mapper=jobs_projects_tenants_complete_query_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_create(
        self, projects_id: str, body: Tenant | TenantDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Tenant, JobsProjectsTenantsCreateErrorBody]:
        """Creates a new tenant entity.

        Args:
            projects_id: Resource name segment (projectsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants"),
            path_params=[param[str]("projectsId", projects_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Tenant | TenantDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Tenant],
            error_mapper=jobs_projects_tenants_create_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_delete(
        self, projects_id: str, tenants_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, JobsProjectsTenantsDeleteErrorBody]:
        """Deletes specified tenant.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=jobs_projects_tenants_delete_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_get(
        self, projects_id: str, tenants_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Tenant, JobsProjectsTenantsGetErrorBody]:
        """Retrieves specified tenant.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Tenant],
            error_mapper=jobs_projects_tenants_get_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_jobs_batch_create(
        self,
        projects_id: str,
        tenants_id: str,
        body: BatchCreateJobsRequest | BatchCreateJobsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, JobsProjectsTenantsJobsBatchCreateErrorBody]:
        """Begins executing a batch create jobs operation.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchCreate"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchCreateJobsRequest | BatchCreateJobsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=jobs_projects_tenants_jobs_batch_create_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_jobs_batch_delete(
        self,
        projects_id: str,
        tenants_id: str,
        body: BatchDeleteJobsRequest | BatchDeleteJobsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, JobsProjectsTenantsJobsBatchDeleteErrorBody]:
        """Begins executing a batch delete jobs operation.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchDelete"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchDeleteJobsRequest | BatchDeleteJobsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=jobs_projects_tenants_jobs_batch_delete_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_jobs_batch_update(
        self,
        projects_id: str,
        tenants_id: str,
        body: BatchUpdateJobsRequest | BatchUpdateJobsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, JobsProjectsTenantsJobsBatchUpdateErrorBody]:
        """Begins executing a batch update jobs operation.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchUpdate"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchUpdateJobsRequest | BatchUpdateJobsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Operation],
            error_mapper=jobs_projects_tenants_jobs_batch_update_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_jobs_create(
        self,
        projects_id: str,
        tenants_id: str,
        body: Job | JobDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Job, JobsProjectsTenantsJobsCreateErrorBody]:
        """Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Job | JobDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Job],
            error_mapper=jobs_projects_tenants_jobs_create_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_jobs_delete(
        self,
        projects_id: str,
        tenants_id: str,
        jobs_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, JobsProjectsTenantsJobsDeleteErrorBody]:
        """Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5
        minutes.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            jobs_id: Resource name segment (jobsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("tenantsId", tenants_id),
                param[str]("jobsId", jobs_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=jobs_projects_tenants_jobs_delete_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_jobs_get(
        self,
        projects_id: str,
        tenants_id: str,
        jobs_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Job, JobsProjectsTenantsJobsGetErrorBody]:
        """Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            jobs_id: Resource name segment (jobsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("tenantsId", tenants_id),
                param[str]("jobsId", jobs_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Job],
            error_mapper=jobs_projects_tenants_jobs_get_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_jobs_list(
        self,
        projects_id: str,
        tenants_id: str,
        *,
        filter_: str | None = None,
        job_view: JobView1OrStr | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListJobsResponse, JobsProjectsTenantsJobsListErrorBody]:
        """Lists jobs by filter.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            filter_: Required. The filter string specifies the jobs to be enumerated. Supported operator: =, AND The
                fields eligible for filtering are: * ``companyName`` * ``requisitionId`` * ``status`` Available values:
                OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified. At least one of ``companyName`` and
                ``requisitionId`` must present or an INVALID_ARGUMENT error is thrown. Sample Query: * companyName =
                "projects/foo/tenants/bar/companies/baz" * companyName = "projects/foo/tenants/bar/companies/baz" AND
                requisitionId = "req-1" * companyName = "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED"
                * requisitionId = "req-1" * requisitionId = "req-1" AND status = "EXPIRED"
            job_view: The desired job attributes returned for jobs in the search response. Defaults to
                JobView.JOB_VIEW_FULL if no value is specified.
            page_size: The maximum number of jobs to be returned per page of results. If job_view is set to
                JobView.JOB_VIEW_ID_ONLY, the maximum allowed page size is 1000. Otherwise, the maximum allowed page
                size is 100. Default is 100 if empty or a number < 1 is specified.
            page_token: The starting point of a query result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[JobView1OrStr | None]("jobView", job_view),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListJobsResponse],
            error_mapper=jobs_projects_tenants_jobs_list_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_jobs_patch(
        self,
        projects_id: str,
        tenants_id: str,
        jobs_id: str,
        body: Job | JobDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Job, JobsProjectsTenantsJobsPatchErrorBody]:
        """Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it
        may take up to 5 minutes.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            jobs_id: Resource name segment (jobsId).
            body: The request body.
            update_mask: Strongly recommended for the best service experience. If update_mask is provided, only the
                specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the
                fields that are updated. Only top level fields of Job are supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("tenantsId", tenants_id),
                param[str]("jobsId", jobs_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Job | JobDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Job],
            error_mapper=jobs_projects_tenants_jobs_patch_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_jobs_search(
        self,
        projects_id: str,
        tenants_id: str,
        body: SearchJobsRequest | SearchJobsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchJobsResponse, JobsProjectsTenantsJobsSearchErrorBody]:
        """Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present
        in the database, and only returns jobs that the caller has permission to search against.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:search"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchJobsRequest | SearchJobsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[SearchJobsResponse],
            error_mapper=jobs_projects_tenants_jobs_search_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_jobs_search_for_alert(
        self,
        projects_id: str,
        tenants_id: str,
        body: SearchJobsRequest | SearchJobsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchJobsResponse, JobsProjectsTenantsJobsSearchForAlertErrorBody]:
        """Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of
        targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about
        potential job opportunities), it has different algorithmic adjustments that are designed to specifically target
        passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs
        the caller has permission to search against.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:searchForAlert"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchJobsRequest | SearchJobsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[SearchJobsResponse],
            error_mapper=jobs_projects_tenants_jobs_search_for_alert_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_list(
        self,
        projects_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTenantsResponse, JobsProjectsTenantsListErrorBody]:
        """Lists all tenants associated with the project.

        Args:
            projects_id: Resource name segment (projectsId).
            page_size: The maximum number of tenants to be returned, at most 100. Default is 100 if a non-positive
                number is provided.
            page_token: The starting indicator from which to return results.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListTenantsResponse],
            error_mapper=jobs_projects_tenants_list_error_mapper,
            request_options=request_options,
        )

    async def jobs_projects_tenants_patch(
        self,
        projects_id: str,
        tenants_id: str,
        body: Tenant | TenantDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Tenant, JobsProjectsTenantsPatchErrorBody]:
        """Updates specified tenant.

        Args:
            projects_id: Resource name segment (projectsId).
            tenants_id: Resource name segment (tenantsId).
            body: The request body.
            update_mask: Strongly recommended for the best service experience. If update_mask is provided, only the
                specified fields in tenant are updated. Otherwise all the fields are updated. A field mask to specify
                the tenant fields to be updated. Only top level fields of Tenant are supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v4/projects/{projectsId}/tenants/{tenantsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("tenantsId", tenants_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Tenant | TenantDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Tenant],
            error_mapper=jobs_projects_tenants_patch_error_mapper,
            request_options=request_options,
        )


AsyncClient = AsyncGoogleCloudTalentSolutionClient
