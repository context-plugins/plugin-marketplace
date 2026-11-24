from __future__ import annotations

from uuid import UUID, uuid4

from pydantic import EmailStr

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.add_companies_table_entities_error import (
    AddCompaniesTableEntitiesErrorBody,
    add_companies_table_entities_error_mapper,
)
from ..errors.create_companies_table_error import CreateCompaniesTableErrorBody, create_companies_table_error_mapper
from ..errors.delete_companies_table_error import DeleteCompaniesTableErrorBody, delete_companies_table_error_mapper
from ..errors.get_companies_table_entities_error import (
    GetCompaniesTableEntitiesErrorBody,
    get_companies_table_entities_error_mapper,
)
from ..errors.get_companies_table_error import GetCompaniesTableErrorBody, get_companies_table_error_mapper
from ..errors.list_companies_table_columns_error import (
    ListCompaniesTableColumnsErrorBody,
    list_companies_table_columns_error_mapper,
)
from ..errors.list_companies_tables_error import ListCompaniesTablesErrorBody, list_companies_tables_error_mapper
from ..errors.remove_companies_table_column_error import (
    RemoveCompaniesTableColumnErrorBody,
    remove_companies_table_column_error_mapper,
)
from ..errors.remove_companies_table_entities_error import (
    RemoveCompaniesTableEntitiesErrorBody,
    remove_companies_table_entities_error_mapper,
)
from ..errors.run_companies_table_column_error import (
    RunCompaniesTableColumnErrorBody,
    run_companies_table_column_error_mapper,
)
from ..errors.update_companies_table_error import UpdateCompaniesTableErrorBody, update_companies_table_error_mapper
from ..models.columns_list_response import ColumnsListResponse
from ..models.columns_run_request import ColumnsRunRequest, ColumnsRunRequestDict
from ..models.columns_run_response import ColumnsRunResponse
from ..models.entities_add_request import EntitiesAddRequest, EntitiesAddRequestDict
from ..models.entities_add_response import EntitiesAddResponse
from ..models.entities_get_response import EntitiesGetResponse
from ..models.entities_remove_request import EntitiesRemoveRequest, EntitiesRemoveRequestDict
from ..models.entities_remove_response import EntitiesRemoveResponse
from ..models.table_create_request import TableCreateRequest, TableCreateRequestDict
from ..models.table_list_request import TableListRequest, TableListRequestDict
from ..models.table_list_response import TableListResponse
from ..models.table_response import TableResponse
from ..models.table_update_request import TableUpdateRequest, TableUpdateRequestDict
from ..models.v3_companies_tables_columns_response import V3CompaniesTablesColumnsResponse
from ..models.v3_companies_tables_response import V3CompaniesTablesResponse
from ..server.server import Server


class CompaniesTables:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CompaniesTablesWithRawResponse(client, server, auth)

    def add_companies_table_entities(
        self,
        table_id: str,
        body: EntitiesAddRequest | EntitiesAddRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntitiesAddResponse:
        """Add up to 500 company IDs to an existing table. ``entityIds`` accepts either the encrypted Lusha token
        (``v{N}.…``, as returned by Search/Enrich/Get Entities) or the legacy numeric ``lushaCompanyId`` — an ID that's
        neither returns ``400``. Already-present IDs are reported as ``alreadyPresent`` and not re-added; unresolvable
        IDs are not an error, they come back in ``invalidIds`` with a ``200``.

        > **Billing:** Charges ``reveal_company`` per newly-added company, deduped via row-count delta — duplicates and
            already-present companies aren't charged again.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entities added

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Not found - table does not exist
                or is not accessible to this account ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.add_companies_table_entities(table_id, body, request_options=request_options)
        )

    def create_companies_table(
        self, body: TableCreateRequest | TableCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> TableResponse:
        """Create a new, empty companies table, optionally seeded with an initial list of company IDs.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Table created

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Conflict - a table with this name
                already exists ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_companies_table(body, request_options=request_options))

    def delete_companies_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V3CompaniesTablesResponse:
        """Permanently delete a table and all its data. This cannot be undone.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Table deleted

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Not found - table does not exist or is not accessible to this account
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_companies_table(table_id, email=email, request_options=request_options)
        )

    def get_companies_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> TableResponse:
        """Get a table's metadata and current processing status.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Not found - table does not exist or is not accessible to this account
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_table(table_id, email=email, request_options=request_options)
        )

    def get_companies_table_entities(
        self,
        table_id: str,
        *,
        email: EmailStr | None = None,
        page: int | None = 0,
        size: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntitiesGetResponse:
        """Read a page of rows in the table, with all column values and per-cell status.

        > **Billing:** Charged per row returned via ``export_api``.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Not found - table does not exist or is not accessible to this account
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_companies_table_entities(
                table_id, email=email, page=page, size=size, request_options=request_options
            ),
        )

    def list_companies_table_columns(
        self, table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ColumnsListResponse:
        """List the columns on a table, with type and aggregated per-cell status counts.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Not found - table does not exist or is not accessible to this account
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_companies_table_columns(table_id, email=email, request_options=request_options)
        )

    def list_companies_tables(
        self, body: TableListRequest | TableListRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> TableListResponse:
        """List companies tables owned by the given user, plus any tables shared with the account.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.list_companies_tables(body, request_options=request_options))

    def remove_companies_table_column(
        self,
        table_id: str,
        column_id: str,
        *,
        email: EmailStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3CompaniesTablesColumnsResponse:
        """Remove a column and delete all of its cell data across the table. Default Lusha columns cannot be removed.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            column_id: The column's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Column removed

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Not found - column does not exist on the given table ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.remove_companies_table_column(
                table_id, column_id, email=email, request_options=request_options
            ),
        )

    def remove_companies_table_entities(
        self,
        table_id: str,
        body: EntitiesRemoveRequest | EntitiesRemoveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntitiesRemoveResponse:
        """Remove specific company IDs from a table.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entities removed

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Not found - table does not exist
                or is not accessible to this account ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.remove_companies_table_entities(table_id, body, request_options=request_options)
        )

    def run_companies_table_column(
        self,
        table_id: str,
        column_id: str,
        body: ColumnsRunRequest | ColumnsRunRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ColumnsRunResponse:
        """Populate or refresh a column's data for some or all rows in the table. This is **asynchronous** — the call
        returns immediately with ``status: "processing"``; poll Get Companies Table for ``isProcessing`` and per-column
        row-status counts to know when it's done, then read the values via Get Companies Table Entities.

        **``runScope`` values:**
        - ``all`` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
        - ``missing`` — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
        - ``specific`` — only the ``entityIds`` you pass. Also how you implement "run for this page" — fetch the page
            via Get Companies Table Entities, then pass those IDs here.

        > **Billing:** Charged per row processed, per the column's credit tier. Company enrichment charges once per
            company per table — re-runs on an already-paid company in the same table are free.

        Args:
            table_id: The table's ID.
            column_id: The column's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Column run started

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Not found - column does not exist
                on the given table ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.run_companies_table_column(
                table_id, column_id, body, request_options=request_options
            ),
        )

    def update_companies_table(
        self,
        table_id: str,
        body: TableUpdateRequest | TableUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TableResponse:
        """Rename a table, change its visibility, or reassign its owner. All fields except ``owner`` are optional — send
        only what changes.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Table updated

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Not found - table does not exist
                or is not accessible to this account ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_companies_table(table_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> CompaniesTablesWithRawResponse:
        return self._with_raw_response


class AsyncCompaniesTables:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCompaniesTablesWithRawResponse(client, server, auth)

    async def add_companies_table_entities(
        self,
        table_id: str,
        body: EntitiesAddRequest | EntitiesAddRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntitiesAddResponse:
        """Add up to 500 company IDs to an existing table. ``entityIds`` accepts either the encrypted Lusha token
        (``v{N}.…``, as returned by Search/Enrich/Get Entities) or the legacy numeric ``lushaCompanyId`` — an ID that's
        neither returns ``400``. Already-present IDs are reported as ``alreadyPresent`` and not re-added; unresolvable
        IDs are not an error, they come back in ``invalidIds`` with a ``200``.

        > **Billing:** Charges ``reveal_company`` per newly-added company, deduped via row-count delta — duplicates and
            already-present companies aren't charged again.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entities added

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Not found - table does not exist
                or is not accessible to this account ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.add_companies_table_entities(table_id, body, request_options=request_options)
        )

    async def create_companies_table(
        self,
        body: TableCreateRequest | TableCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TableResponse:
        """Create a new, empty companies table, optionally seeded with an initial list of company IDs.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Table created

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Conflict - a table with this name
                already exists ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_companies_table(body, request_options=request_options))

    async def delete_companies_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V3CompaniesTablesResponse:
        """Permanently delete a table and all its data. This cannot be undone.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Table deleted

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Not found - table does not exist or is not accessible to this account
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_companies_table(table_id, email=email, request_options=request_options)
        )

    async def get_companies_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TableResponse:
        """Get a table's metadata and current processing status.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Not found - table does not exist or is not accessible to this account
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_table(table_id, email=email, request_options=request_options)
        )

    async def get_companies_table_entities(
        self,
        table_id: str,
        *,
        email: EmailStr | None = None,
        page: int | None = 0,
        size: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntitiesGetResponse:
        """Read a page of rows in the table, with all column values and per-cell status.

        > **Billing:** Charged per row returned via ``export_api``.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Not found - table does not exist or is not accessible to this account
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_companies_table_entities(
                table_id, email=email, page=page, size=size, request_options=request_options
            ),
        )

    async def list_companies_table_columns(
        self, table_id: str, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ColumnsListResponse:
        """List the columns on a table, with type and aggregated per-cell status counts.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Not found - table does not exist or is not accessible to this account
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_companies_table_columns(
                table_id, email=email, request_options=request_options
            ),
        )

    async def list_companies_tables(
        self, body: TableListRequest | TableListRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TableListResponse:
        """List companies tables owned by the given user, plus any tables shared with the account.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.list_companies_tables(body, request_options=request_options))

    async def remove_companies_table_column(
        self,
        table_id: str,
        column_id: str,
        *,
        email: EmailStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3CompaniesTablesColumnsResponse:
        """Remove a column and delete all of its cell data across the table. Default Lusha columns cannot be removed.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            column_id: The column's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Column removed

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Not found - column does not exist on the given table ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.remove_companies_table_column(
                table_id, column_id, email=email, request_options=request_options
            ),
        )

    async def remove_companies_table_entities(
        self,
        table_id: str,
        body: EntitiesRemoveRequest | EntitiesRemoveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntitiesRemoveResponse:
        """Remove specific company IDs from a table.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entities removed

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Not found - table does not exist
                or is not accessible to this account ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.remove_companies_table_entities(
                table_id, body, request_options=request_options
            ),
        )

    async def run_companies_table_column(
        self,
        table_id: str,
        column_id: str,
        body: ColumnsRunRequest | ColumnsRunRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ColumnsRunResponse:
        """Populate or refresh a column's data for some or all rows in the table. This is **asynchronous** — the call
        returns immediately with ``status: "processing"``; poll Get Companies Table for ``isProcessing`` and per-column
        row-status counts to know when it's done, then read the values via Get Companies Table Entities.

        **``runScope`` values:**
        - ``all`` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
        - ``missing`` — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
        - ``specific`` — only the ``entityIds`` you pass. Also how you implement "run for this page" — fetch the page
            via Get Companies Table Entities, then pass those IDs here.

        > **Billing:** Charged per row processed, per the column's credit tier. Company enrichment charges once per
            company per table — re-runs on an already-paid company in the same table are free.

        Args:
            table_id: The table's ID.
            column_id: The column's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Column run started

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Not found - column does not exist
                on the given table ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.run_companies_table_column(
                table_id, column_id, body, request_options=request_options
            ),
        )

    async def update_companies_table(
        self,
        table_id: str,
        body: TableUpdateRequest | TableUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TableResponse:
        """Rename a table, change its visibility, or reassign its owner. All fields except ``owner`` are optional — send
        only what changes.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Table updated

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Not found - table does not exist
                or is not accessible to this account ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_companies_table(table_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCompaniesTablesWithRawResponse:
        return self._with_raw_response


class CompaniesTablesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_companies_table_entities(
        self,
        table_id: str,
        body: EntitiesAddRequest | EntitiesAddRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesAddResponse, AddCompaniesTableEntitiesErrorBody]:
        """Add up to 500 company IDs to an existing table. ``entityIds`` accepts either the encrypted Lusha token
        (``v{N}.…``, as returned by Search/Enrich/Get Entities) or the legacy numeric ``lushaCompanyId`` — an ID that's
        neither returns ``400``. Already-present IDs are reported as ``alreadyPresent`` and not re-added; unresolvable
        IDs are not an error, they come back in ``invalidIds`` with a ``200``.

        > **Billing:** Charges ``reveal_company`` per newly-added company, deduped via row-count delta — duplicates and
            already-present companies aren't charged again.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntitiesAddRequest | EntitiesAddRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[EntitiesAddResponse],
            error_mapper=add_companies_table_entities_error_mapper,
            request_options=request_options,
        )

    def create_companies_table(
        self, body: TableCreateRequest | TableCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TableResponse, CreateCompaniesTableErrorBody]:
        """Create a new, empty companies table, optionally seeded with an initial list of company IDs.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/tables"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableCreateRequest | TableCreateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TableResponse],
            error_mapper=create_companies_table_error_mapper,
            request_options=request_options,
        )

    def delete_companies_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V3CompaniesTablesResponse, DeleteCompaniesTableErrorBody]:
        """Permanently delete a table and all its data. This cannot be undone.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/companies/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3CompaniesTablesResponse],
            error_mapper=delete_companies_table_error_mapper,
            request_options=request_options,
        )

    def get_companies_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TableResponse, GetCompaniesTableErrorBody]:
        """Get a table's metadata and current processing status.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TableResponse],
            error_mapper=get_companies_table_error_mapper,
            request_options=request_options,
        )

    def get_companies_table_entities(
        self,
        table_id: str,
        *,
        email: EmailStr | None = None,
        page: int | None = 0,
        size: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesGetResponse, GetCompaniesTableEntitiesErrorBody]:
        """Read a page of rows in the table, with all column values and per-cell status.

        > **Billing:** Charged per row returned via ``export_api``.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[
                param[EmailStr | None]("email", email), param[int | None]("page", page), param[int | None]("size", size)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[EntitiesGetResponse],
            error_mapper=get_companies_table_entities_error_mapper,
            request_options=request_options,
        )

    def list_companies_table_columns(
        self, table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ColumnsListResponse, ListCompaniesTableColumnsErrorBody]:
        """List the columns on a table, with type and aggregated per-cell status counts.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/tables/{table_id}/columns"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ColumnsListResponse],
            error_mapper=list_companies_table_columns_error_mapper,
            request_options=request_options,
        )

    def list_companies_tables(
        self, body: TableListRequest | TableListRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TableListResponse, ListCompaniesTablesErrorBody]:
        """List companies tables owned by the given user, plus any tables shared with the account.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/tables/list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableListRequest | TableListRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TableListResponse],
            error_mapper=list_companies_tables_error_mapper,
            request_options=request_options,
        )

    def remove_companies_table_column(
        self,
        table_id: str,
        column_id: str,
        *,
        email: EmailStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3CompaniesTablesColumnsResponse, RemoveCompaniesTableColumnErrorBody]:
        """Remove a column and delete all of its cell data across the table. Default Lusha columns cannot be removed.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            column_id: The column's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/companies/tables/{table_id}/columns/{column_id}"),
            path_params=[param[str]("table_id", table_id), param[str]("column_id", column_id)],
            query_params=[param[EmailStr | None]("email", email)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3CompaniesTablesColumnsResponse],
            error_mapper=remove_companies_table_column_error_mapper,
            request_options=request_options,
        )

    def remove_companies_table_entities(
        self,
        table_id: str,
        body: EntitiesRemoveRequest | EntitiesRemoveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesRemoveResponse, RemoveCompaniesTableEntitiesErrorBody]:
        """Remove specific company IDs from a table.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/companies/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntitiesRemoveRequest | EntitiesRemoveRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[EntitiesRemoveResponse],
            error_mapper=remove_companies_table_entities_error_mapper,
            request_options=request_options,
        )

    def run_companies_table_column(
        self,
        table_id: str,
        column_id: str,
        body: ColumnsRunRequest | ColumnsRunRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ColumnsRunResponse, RunCompaniesTableColumnErrorBody]:
        """Populate or refresh a column's data for some or all rows in the table. This is **asynchronous** — the call
        returns immediately with ``status: "processing"``; poll Get Companies Table for ``isProcessing`` and per-column
        row-status counts to know when it's done, then read the values via Get Companies Table Entities.

        **``runScope`` values:**
        - ``all`` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
        - ``missing`` — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
        - ``specific`` — only the ``entityIds`` you pass. Also how you implement "run for this page" — fetch the page
            via Get Companies Table Entities, then pass those IDs here.

        > **Billing:** Charged per row processed, per the column's credit tier. Company enrichment charges once per
            company per table — re-runs on an already-paid company in the same table are free.

        Args:
            table_id: The table's ID.
            column_id: The column's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/tables/{table_id}/columns/{column_id}/run"),
            path_params=[param[str]("table_id", table_id), param[str]("column_id", column_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ColumnsRunRequest | ColumnsRunRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ColumnsRunResponse],
            error_mapper=run_companies_table_column_error_mapper,
            request_options=request_options,
        )

    def update_companies_table(
        self,
        table_id: str,
        body: TableUpdateRequest | TableUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TableResponse, UpdateCompaniesTableErrorBody]:
        """Rename a table, change its visibility, or reassign its owner. All fields except ``owner`` are optional — send
        only what changes.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/companies/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableUpdateRequest | TableUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TableResponse],
            error_mapper=update_companies_table_error_mapper,
            request_options=request_options,
        )


class AsyncCompaniesTablesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_companies_table_entities(
        self,
        table_id: str,
        body: EntitiesAddRequest | EntitiesAddRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesAddResponse, AddCompaniesTableEntitiesErrorBody]:
        """Add up to 500 company IDs to an existing table. ``entityIds`` accepts either the encrypted Lusha token
        (``v{N}.…``, as returned by Search/Enrich/Get Entities) or the legacy numeric ``lushaCompanyId`` — an ID that's
        neither returns ``400``. Already-present IDs are reported as ``alreadyPresent`` and not re-added; unresolvable
        IDs are not an error, they come back in ``invalidIds`` with a ``200``.

        > **Billing:** Charges ``reveal_company`` per newly-added company, deduped via row-count delta — duplicates and
            already-present companies aren't charged again.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntitiesAddRequest | EntitiesAddRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[EntitiesAddResponse],
            error_mapper=add_companies_table_entities_error_mapper,
            request_options=request_options,
        )

    async def create_companies_table(
        self,
        body: TableCreateRequest | TableCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TableResponse, CreateCompaniesTableErrorBody]:
        """Create a new, empty companies table, optionally seeded with an initial list of company IDs.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/tables"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableCreateRequest | TableCreateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TableResponse],
            error_mapper=create_companies_table_error_mapper,
            request_options=request_options,
        )

    async def delete_companies_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V3CompaniesTablesResponse, DeleteCompaniesTableErrorBody]:
        """Permanently delete a table and all its data. This cannot be undone.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/companies/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3CompaniesTablesResponse],
            error_mapper=delete_companies_table_error_mapper,
            request_options=request_options,
        )

    async def get_companies_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TableResponse, GetCompaniesTableErrorBody]:
        """Get a table's metadata and current processing status.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TableResponse],
            error_mapper=get_companies_table_error_mapper,
            request_options=request_options,
        )

    async def get_companies_table_entities(
        self,
        table_id: str,
        *,
        email: EmailStr | None = None,
        page: int | None = 0,
        size: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesGetResponse, GetCompaniesTableEntitiesErrorBody]:
        """Read a page of rows in the table, with all column values and per-cell status.

        > **Billing:** Charged per row returned via ``export_api``.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[
                param[EmailStr | None]("email", email), param[int | None]("page", page), param[int | None]("size", size)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[EntitiesGetResponse],
            error_mapper=get_companies_table_entities_error_mapper,
            request_options=request_options,
        )

    async def list_companies_table_columns(
        self, table_id: str, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ColumnsListResponse, ListCompaniesTableColumnsErrorBody]:
        """List the columns on a table, with type and aggregated per-cell status counts.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/tables/{table_id}/columns"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ColumnsListResponse],
            error_mapper=list_companies_table_columns_error_mapper,
            request_options=request_options,
        )

    async def list_companies_tables(
        self, body: TableListRequest | TableListRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TableListResponse, ListCompaniesTablesErrorBody]:
        """List companies tables owned by the given user, plus any tables shared with the account.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/tables/list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableListRequest | TableListRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TableListResponse],
            error_mapper=list_companies_tables_error_mapper,
            request_options=request_options,
        )

    async def remove_companies_table_column(
        self,
        table_id: str,
        column_id: str,
        *,
        email: EmailStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3CompaniesTablesColumnsResponse, RemoveCompaniesTableColumnErrorBody]:
        """Remove a column and delete all of its cell data across the table. Default Lusha columns cannot be removed.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            column_id: The column's ID.
            email: Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls,
                which cannot carry a body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/companies/tables/{table_id}/columns/{column_id}"),
            path_params=[param[str]("table_id", table_id), param[str]("column_id", column_id)],
            query_params=[param[EmailStr | None]("email", email)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3CompaniesTablesColumnsResponse],
            error_mapper=remove_companies_table_column_error_mapper,
            request_options=request_options,
        )

    async def remove_companies_table_entities(
        self,
        table_id: str,
        body: EntitiesRemoveRequest | EntitiesRemoveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesRemoveResponse, RemoveCompaniesTableEntitiesErrorBody]:
        """Remove specific company IDs from a table.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/companies/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntitiesRemoveRequest | EntitiesRemoveRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[EntitiesRemoveResponse],
            error_mapper=remove_companies_table_entities_error_mapper,
            request_options=request_options,
        )

    async def run_companies_table_column(
        self,
        table_id: str,
        column_id: str,
        body: ColumnsRunRequest | ColumnsRunRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ColumnsRunResponse, RunCompaniesTableColumnErrorBody]:
        """Populate or refresh a column's data for some or all rows in the table. This is **asynchronous** — the call
        returns immediately with ``status: "processing"``; poll Get Companies Table for ``isProcessing`` and per-column
        row-status counts to know when it's done, then read the values via Get Companies Table Entities.

        **``runScope`` values:**
        - ``all`` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
        - ``missing`` — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
        - ``specific`` — only the ``entityIds`` you pass. Also how you implement "run for this page" — fetch the page
            via Get Companies Table Entities, then pass those IDs here.

        > **Billing:** Charged per row processed, per the column's credit tier. Company enrichment charges once per
            company per table — re-runs on an already-paid company in the same table are free.

        Args:
            table_id: The table's ID.
            column_id: The column's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/tables/{table_id}/columns/{column_id}/run"),
            path_params=[param[str]("table_id", table_id), param[str]("column_id", column_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ColumnsRunRequest | ColumnsRunRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ColumnsRunResponse],
            error_mapper=run_companies_table_column_error_mapper,
            request_options=request_options,
        )

    async def update_companies_table(
        self,
        table_id: str,
        body: TableUpdateRequest | TableUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TableResponse, UpdateCompaniesTableErrorBody]:
        """Rename a table, change its visibility, or reassign its owner. All fields except ``owner`` are optional — send
        only what changes.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/companies/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableUpdateRequest | TableUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TableResponse],
            error_mapper=update_companies_table_error_mapper,
            request_options=request_options,
        )
