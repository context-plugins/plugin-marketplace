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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_journal_error import CreateJournalErrorBody, create_journal_error_mapper
from ..errors.list_journal_lines_error import ListJournalLinesErrorBody, list_journal_lines_error_mapper
from ..errors.list_journals_error import ListJournalsErrorBody, list_journals_error_mapper
from ..models.companies_api_journals_api_journal_lines_response import CompaniesApiJournalsApiJournalLinesResponse
from ..models.companies_api_journals_response import CompaniesApiJournalsResponse
from ..models.journal import Journal
from ..models.journal_create import JournalCreate, JournalCreateDict
from ..server.server import Server


class Journals:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = JournalsWithRawResponse(client, server, auth)

    def create_journal(
        self,
        company_id: UUID,
        body: JournalCreate | JournalCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Journal:
        """Creates a new journal in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Journal created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.create_journal(company_id, body, request_options=request_options))

    def list_journal_lines(
        self,
        company_id: UUID,
        journal_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompaniesApiJournalsApiJournalLinesResponse:
        """Returns a list of journal line objects for a specific journal.

        Args:
            company_id: The unique identifier of the company
            journal_id: Value sent with the request.
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved journal lines

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_journal_lines(
                company_id,
                journal_id,
                top=top,
                skip=skip,
                filter_=filter_,
                select=select,
                request_options=request_options,
            ),
        )

    def list_journals(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompaniesApiJournalsResponse:
        """Returns a list of journal objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved journals

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_journals(
                company_id, top=top, skip=skip, filter_=filter_, select=select, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> JournalsWithRawResponse:
        return self._with_raw_response


class AsyncJournals:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncJournalsWithRawResponse(client, server, auth)

    async def create_journal(
        self,
        company_id: UUID,
        body: JournalCreate | JournalCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Journal:
        """Creates a new journal in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Journal created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.create_journal(company_id, body, request_options=request_options))

    async def list_journal_lines(
        self,
        company_id: UUID,
        journal_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompaniesApiJournalsApiJournalLinesResponse:
        """Returns a list of journal line objects for a specific journal.

        Args:
            company_id: The unique identifier of the company
            journal_id: Value sent with the request.
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved journal lines

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_journal_lines(
                company_id,
                journal_id,
                top=top,
                skip=skip,
                filter_=filter_,
                select=select,
                request_options=request_options,
            ),
        )

    async def list_journals(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompaniesApiJournalsResponse:
        """Returns a list of journal objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved journals

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_journals(
                company_id, top=top, skip=skip, filter_=filter_, select=select, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncJournalsWithRawResponse:
        return self._with_raw_response


class JournalsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_journal(
        self,
        company_id: UUID,
        body: JournalCreate | JournalCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Journal, CreateJournalErrorBody]:
        """Creates a new journal in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/journals"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JournalCreate | JournalCreateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Journal],
            error_mapper=create_journal_error_mapper,
            request_options=request_options,
        )

    def list_journal_lines(
        self,
        company_id: UUID,
        journal_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiJournalsApiJournalLinesResponse, ListJournalLinesErrorBody]:
        """Returns a list of journal line objects for a specific journal.

        Args:
            company_id: The unique identifier of the company
            journal_id: Value sent with the request.
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/journals({journal_id})/journalLines"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("journal_id", journal_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$select", select),
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiJournalsApiJournalLinesResponse],
            error_mapper=list_journal_lines_error_mapper,
            request_options=request_options,
        )

    def list_journals(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiJournalsResponse, ListJournalsErrorBody]:
        """Returns a list of journal objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/journals"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$select", select),
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiJournalsResponse],
            error_mapper=list_journals_error_mapper,
            request_options=request_options,
        )


class AsyncJournalsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_journal(
        self,
        company_id: UUID,
        body: JournalCreate | JournalCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Journal, CreateJournalErrorBody]:
        """Creates a new journal in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/journals"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JournalCreate | JournalCreateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Journal],
            error_mapper=create_journal_error_mapper,
            request_options=request_options,
        )

    async def list_journal_lines(
        self,
        company_id: UUID,
        journal_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiJournalsApiJournalLinesResponse, ListJournalLinesErrorBody]:
        """Returns a list of journal line objects for a specific journal.

        Args:
            company_id: The unique identifier of the company
            journal_id: Value sent with the request.
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/journals({journal_id})/journalLines"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("journal_id", journal_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$select", select),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiJournalsApiJournalLinesResponse],
            error_mapper=list_journal_lines_error_mapper,
            request_options=request_options,
        )

    async def list_journals(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiJournalsResponse, ListJournalsErrorBody]:
        """Returns a list of journal objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/journals"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$select", select),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiJournalsResponse],
            error_mapper=list_journals_error_mapper,
            request_options=request_options,
        )
