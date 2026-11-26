from __future__ import annotations

from uuid import UUID, uuid4

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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_automation_company_error import (
    CreateAutomationCompanyErrorBody,
    create_automation_company_error_mapper,
)
from ..errors.delete_automation_company_error import (
    DeleteAutomationCompanyErrorBody,
    delete_automation_company_error_mapper,
)
from ..errors.get_automation_company_error import GetAutomationCompanyErrorBody, get_automation_company_error_mapper
from ..errors.list_automation_companies_error import (
    ListAutomationCompaniesErrorBody,
    list_automation_companies_error_mapper,
)
from ..errors.list_companies_error import ListCompaniesErrorBody, list_companies_error_mapper
from ..errors.update_automation_company_error import (
    UpdateAutomationCompanyErrorBody,
    update_automation_company_error_mapper,
)
from ..models.automation_company import AutomationCompany
from ..models.automation_company_create import AutomationCompanyCreate, AutomationCompanyCreateDict
from ..models.automation_company_update import AutomationCompanyUpdate, AutomationCompanyUpdateDict
from ..models.companies_api_automation_companies_response import CompaniesApiAutomationCompaniesResponse
from ..models.companies_response import CompaniesResponse
from ..server.server import Server


class Companies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CompaniesWithRawResponse(client, server, auth)

    def create_automation_company(
        self,
        company_id: UUID,
        body: AutomationCompanyCreate | AutomationCompanyCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AutomationCompany:
        """Creates a new company in the Business Central tenant.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.create_automation_company(company_id, body, request_options=request_options)
        )

    def delete_automation_company(
        self, company_id: UUID, automation_company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a company from the tenant.

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_automation_company(
                company_id, automation_company_id, request_options=request_options
            ),
        )

    def get_automation_company(
        self, company_id: UUID, automation_company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> AutomationCompany:
        """Retrieves a specific automation company by ID.

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved automation company

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_automation_company(
                company_id, automation_company_id, request_options=request_options
            ),
        )

    def list_automation_companies(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesApiAutomationCompaniesResponse:
        """Returns a list of automation company objects.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved automation companies

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_automation_companies(company_id, request_options=request_options))

    def list_companies(
        self, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesResponse:
        """Returns a list of companies available for automation.

        Args:
            filter_: OData filter expression to return targeted results (Business Central API/OData filtering).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved companies

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_companies(filter_=filter_, request_options=request_options))

    def update_automation_company(
        self,
        company_id: UUID,
        automation_company_id: UUID,
        if_match: str,
        body: AutomationCompanyUpdate | AutomationCompanyUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AutomationCompany:
        """Updates properties of an automation company (e.g., rename).

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company updated successfully

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_automation_company(
                company_id, automation_company_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CompaniesWithRawResponse:
        return self._with_raw_response


class AsyncCompanies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCompaniesWithRawResponse(client, server, auth)

    async def create_automation_company(
        self,
        company_id: UUID,
        body: AutomationCompanyCreate | AutomationCompanyCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AutomationCompany:
        """Creates a new company in the Business Central tenant.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_automation_company(company_id, body, request_options=request_options)
        )

    async def delete_automation_company(
        self, company_id: UUID, automation_company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a company from the tenant.

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_automation_company(
                company_id, automation_company_id, request_options=request_options
            ),
        )

    async def get_automation_company(
        self, company_id: UUID, automation_company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AutomationCompany:
        """Retrieves a specific automation company by ID.

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved automation company

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_automation_company(
                company_id, automation_company_id, request_options=request_options
            ),
        )

    async def list_automation_companies(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesApiAutomationCompaniesResponse:
        """Returns a list of automation company objects.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved automation companies

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_automation_companies(company_id, request_options=request_options)
        )

    async def list_companies(
        self, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesResponse:
        """Returns a list of companies available for automation.

        Args:
            filter_: OData filter expression to return targeted results (Business Central API/OData filtering).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved companies

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_companies(filter_=filter_, request_options=request_options))

    async def update_automation_company(
        self,
        company_id: UUID,
        automation_company_id: UUID,
        if_match: str,
        body: AutomationCompanyUpdate | AutomationCompanyUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AutomationCompany:
        """Updates properties of an automation company (e.g., rename).

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company updated successfully

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_automation_company(
                company_id, automation_company_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCompaniesWithRawResponse:
        return self._with_raw_response


class CompaniesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_automation_company(
        self,
        company_id: UUID,
        body: AutomationCompanyCreate | AutomationCompanyCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationCompany, CreateAutomationCompanyErrorBody]:
        """Creates a new company in the Business Central tenant.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/automationCompanies"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomationCompanyCreate | AutomationCompanyCreateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[AutomationCompany],
            error_mapper=create_automation_company_error_mapper,
            request_options=request_options,
        )

    def delete_automation_company(
        self, company_id: UUID, automation_company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAutomationCompanyErrorBody]:
        """Deletes a company from the tenant.

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/automationCompanies({automationCompany_id})"
            ),
            path_params=[
                param[UUID]("company_id", company_id), param[UUID]("automationCompany_id", automation_company_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=delete_automation_company_error_mapper,
            request_options=request_options,
        )

    def get_automation_company(
        self, company_id: UUID, automation_company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AutomationCompany, GetAutomationCompanyErrorBody]:
        """Retrieves a specific automation company by ID.

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/automationCompanies({automationCompany_id})"
            ),
            path_params=[
                param[UUID]("company_id", company_id), param[UUID]("automationCompany_id", automation_company_id)
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[AutomationCompany],
            error_mapper=get_automation_company_error_mapper,
            request_options=request_options,
        )

    def list_automation_companies(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiAutomationCompaniesResponse, ListAutomationCompaniesErrorBody]:
        """Returns a list of automation company objects.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/automationCompanies"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiAutomationCompaniesResponse],
            error_mapper=list_automation_companies_error_mapper,
            request_options=request_options,
        )

    def list_companies(
        self, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesResponse, ListCompaniesErrorBody]:
        """Returns a list of companies available for automation.

        Args:
            filter_: OData filter expression to return targeted results (Business Central API/OData filtering).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api("/companies"),
            query_params=[param[str | None]("$filter", filter_)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesResponse],
            error_mapper=list_companies_error_mapper,
            request_options=request_options,
        )

    def update_automation_company(
        self,
        company_id: UUID,
        automation_company_id: UUID,
        if_match: str,
        body: AutomationCompanyUpdate | AutomationCompanyUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationCompany, UpdateAutomationCompanyErrorBody]:
        """Updates properties of an automation company (e.g., rename).

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/automationCompanies({automationCompany_id})"
            ),
            path_params=[
                param[UUID]("company_id", company_id), param[UUID]("automationCompany_id", automation_company_id)
            ],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomationCompanyUpdate | AutomationCompanyUpdateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[AutomationCompany],
            error_mapper=update_automation_company_error_mapper,
            request_options=request_options,
        )


class AsyncCompaniesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_automation_company(
        self,
        company_id: UUID,
        body: AutomationCompanyCreate | AutomationCompanyCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationCompany, CreateAutomationCompanyErrorBody]:
        """Creates a new company in the Business Central tenant.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/automationCompanies"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomationCompanyCreate | AutomationCompanyCreateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[AutomationCompany],
            error_mapper=create_automation_company_error_mapper,
            request_options=request_options,
        )

    async def delete_automation_company(
        self, company_id: UUID, automation_company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAutomationCompanyErrorBody]:
        """Deletes a company from the tenant.

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/automationCompanies({automationCompany_id})"
            ),
            path_params=[
                param[UUID]("company_id", company_id), param[UUID]("automationCompany_id", automation_company_id)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=delete_automation_company_error_mapper,
            request_options=request_options,
        )

    async def get_automation_company(
        self, company_id: UUID, automation_company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AutomationCompany, GetAutomationCompanyErrorBody]:
        """Retrieves a specific automation company by ID.

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/automationCompanies({automationCompany_id})"
            ),
            path_params=[
                param[UUID]("company_id", company_id), param[UUID]("automationCompany_id", automation_company_id)
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[AutomationCompany],
            error_mapper=get_automation_company_error_mapper,
            request_options=request_options,
        )

    async def list_automation_companies(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiAutomationCompaniesResponse, ListAutomationCompaniesErrorBody]:
        """Returns a list of automation company objects.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/automationCompanies"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiAutomationCompaniesResponse],
            error_mapper=list_automation_companies_error_mapper,
            request_options=request_options,
        )

    async def list_companies(
        self, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesResponse, ListCompaniesErrorBody]:
        """Returns a list of companies available for automation.

        Args:
            filter_: OData filter expression to return targeted results (Business Central API/OData filtering).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api("/companies"),
            query_params=[param[str | None]("$filter", filter_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesResponse],
            error_mapper=list_companies_error_mapper,
            request_options=request_options,
        )

    async def update_automation_company(
        self,
        company_id: UUID,
        automation_company_id: UUID,
        if_match: str,
        body: AutomationCompanyUpdate | AutomationCompanyUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AutomationCompany, UpdateAutomationCompanyErrorBody]:
        """Updates properties of an automation company (e.g., rename).

        Args:
            company_id: The unique identifier of the company
            automation_company_id: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/automationCompanies({automationCompany_id})"
            ),
            path_params=[
                param[UUID]("company_id", company_id), param[UUID]("automationCompany_id", automation_company_id)
            ],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomationCompanyUpdate | AutomationCompanyUpdateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[AutomationCompany],
            error_mapper=update_automation_company_error_mapper,
            request_options=request_options,
        )
