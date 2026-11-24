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
from ..errors.add_contacts_table_entities_error import (
    AddContactsTableEntitiesErrorBody,
    add_contacts_table_entities_error_mapper,
)
from ..errors.create_contacts_table_error import CreateContactsTableErrorBody, create_contacts_table_error_mapper
from ..errors.delete_contacts_table_error import DeleteContactsTableErrorBody, delete_contacts_table_error_mapper
from ..errors.get_contacts_table_entities_error import (
    GetContactsTableEntitiesErrorBody,
    get_contacts_table_entities_error_mapper,
)
from ..errors.get_contacts_table_error import GetContactsTableErrorBody, get_contacts_table_error_mapper
from ..errors.list_contacts_table_columns_error import (
    ListContactsTableColumnsErrorBody,
    list_contacts_table_columns_error_mapper,
)
from ..errors.list_contacts_tables_error import ListContactsTablesErrorBody, list_contacts_tables_error_mapper
from ..errors.remove_contacts_table_column_error import (
    RemoveContactsTableColumnErrorBody,
    remove_contacts_table_column_error_mapper,
)
from ..errors.remove_contacts_table_entities_error import (
    RemoveContactsTableEntitiesErrorBody,
    remove_contacts_table_entities_error_mapper,
)
from ..errors.run_contacts_table_column_error import (
    RunContactsTableColumnErrorBody,
    run_contacts_table_column_error_mapper,
)
from ..errors.update_contacts_table_error import UpdateContactsTableErrorBody, update_contacts_table_error_mapper
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
from ..models.v3_contacts_tables_columns_response import V3ContactsTablesColumnsResponse
from ..models.v3_contacts_tables_response import V3ContactsTablesResponse
from ..server.server import Server


class ContactsTables:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContactsTablesWithRawResponse(client, server, auth)

    def add_contacts_table_entities(
        self,
        table_id: str,
        body: EntitiesAddRequest | EntitiesAddRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntitiesAddResponse:
        """Add up to 500 contact IDs to an existing table. ``entityIds`` accepts either the encrypted Lusha token
        (``v{N}.…``, as returned by Search/Enrich/Get Entities) or the legacy numeric ``personId`` — an ID that's
        neither returns ``400``. Already-present IDs are reported as ``alreadyPresent`` and not re-added; unresolvable
        IDs are not an error, they come back in ``invalidIds`` with a ``200``.

        Optionally pass ``companyIds`` — one ``lushaCompanyId`` per contact, index-aligned with ``entityIds`` — to help
        pair company-level enrichment to the right company for each contact.

        > **Billing:** Free.

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
            self._with_raw_response.add_contacts_table_entities(table_id, body, request_options=request_options)
        )

    def create_contacts_table(
        self, body: TableCreateRequest | TableCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> TableResponse:
        """Create a new, empty contacts table, optionally seeded with an initial list of contact IDs.

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
        return unwrap(self._with_raw_response.create_contacts_table(body, request_options=request_options))

    def delete_contacts_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V3ContactsTablesResponse:
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
            self._with_raw_response.delete_contacts_table(table_id, email=email, request_options=request_options)
        )

    def get_contacts_table(
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
            self._with_raw_response.get_contacts_table(table_id, email=email, request_options=request_options)
        )

    def get_contacts_table_entities(
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
            self._with_raw_response.get_contacts_table_entities(
                table_id, email=email, page=page, size=size, request_options=request_options
            ),
        )

    def list_contacts_table_columns(
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
            self._with_raw_response.list_contacts_table_columns(table_id, email=email, request_options=request_options)
        )

    def list_contacts_tables(
        self, body: TableListRequest | TableListRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> TableListResponse:
        """List contacts tables owned by the given user, plus any tables shared with the account.

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
        return unwrap(self._with_raw_response.list_contacts_tables(body, request_options=request_options))

    def remove_contacts_table_column(
        self,
        table_id: str,
        column_id: str,
        *,
        email: EmailStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3ContactsTablesColumnsResponse:
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
            self._with_raw_response.remove_contacts_table_column(
                table_id, column_id, email=email, request_options=request_options
            ),
        )

    def remove_contacts_table_entities(
        self,
        table_id: str,
        body: EntitiesRemoveRequest | EntitiesRemoveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntitiesRemoveResponse:
        """Remove specific contact IDs from a table.

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
            self._with_raw_response.remove_contacts_table_entities(table_id, body, request_options=request_options)
        )

    def run_contacts_table_column(
        self,
        table_id: str,
        column_id: str,
        body: ColumnsRunRequest | ColumnsRunRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ColumnsRunResponse:
        """Populate or refresh a column's data for some or all rows in the table. This is **asynchronous** — the call
        returns immediately with ``status: "processing"``; poll Get Contacts Table for ``isProcessing`` and per-column
        row-status counts to know when it's done, then read the values via Get Contacts Table Entities.

        **``runScope`` values:**
        - ``all`` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
        - ``missing`` — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
        - ``specific`` — only the ``entityIds`` you pass. Also how you implement "run for this page" — fetch the page
            via Get Contacts Table Entities, then pass those IDs here.

        > **Billing:** Charged per row processed, per the column's credit tier. Re-running with ``all`` charges again
            for rows that already have data.

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
            self._with_raw_response.run_contacts_table_column(
                table_id, column_id, body, request_options=request_options
            ),
        )

    def update_contacts_table(
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
        return unwrap(self._with_raw_response.update_contacts_table(table_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ContactsTablesWithRawResponse:
        return self._with_raw_response


class AsyncContactsTables:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContactsTablesWithRawResponse(client, server, auth)

    async def add_contacts_table_entities(
        self,
        table_id: str,
        body: EntitiesAddRequest | EntitiesAddRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntitiesAddResponse:
        """Add up to 500 contact IDs to an existing table. ``entityIds`` accepts either the encrypted Lusha token
        (``v{N}.…``, as returned by Search/Enrich/Get Entities) or the legacy numeric ``personId`` — an ID that's
        neither returns ``400``. Already-present IDs are reported as ``alreadyPresent`` and not re-added; unresolvable
        IDs are not an error, they come back in ``invalidIds`` with a ``200``.

        Optionally pass ``companyIds`` — one ``lushaCompanyId`` per contact, index-aligned with ``entityIds`` — to help
        pair company-level enrichment to the right company for each contact.

        > **Billing:** Free.

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
            await self._with_raw_response.add_contacts_table_entities(table_id, body, request_options=request_options)
        )

    async def create_contacts_table(
        self,
        body: TableCreateRequest | TableCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TableResponse:
        """Create a new, empty contacts table, optionally seeded with an initial list of contact IDs.

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
        return unwrap(await self._with_raw_response.create_contacts_table(body, request_options=request_options))

    async def delete_contacts_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V3ContactsTablesResponse:
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
            await self._with_raw_response.delete_contacts_table(table_id, email=email, request_options=request_options)
        )

    async def get_contacts_table(
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
            await self._with_raw_response.get_contacts_table(table_id, email=email, request_options=request_options)
        )

    async def get_contacts_table_entities(
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
            await self._with_raw_response.get_contacts_table_entities(
                table_id, email=email, page=page, size=size, request_options=request_options
            ),
        )

    async def list_contacts_table_columns(
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
            await self._with_raw_response.list_contacts_table_columns(
                table_id, email=email, request_options=request_options
            ),
        )

    async def list_contacts_tables(
        self, body: TableListRequest | TableListRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TableListResponse:
        """List contacts tables owned by the given user, plus any tables shared with the account.

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
        return unwrap(await self._with_raw_response.list_contacts_tables(body, request_options=request_options))

    async def remove_contacts_table_column(
        self,
        table_id: str,
        column_id: str,
        *,
        email: EmailStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3ContactsTablesColumnsResponse:
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
            await self._with_raw_response.remove_contacts_table_column(
                table_id, column_id, email=email, request_options=request_options
            ),
        )

    async def remove_contacts_table_entities(
        self,
        table_id: str,
        body: EntitiesRemoveRequest | EntitiesRemoveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntitiesRemoveResponse:
        """Remove specific contact IDs from a table.

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
            await self._with_raw_response.remove_contacts_table_entities(
                table_id, body, request_options=request_options
            ),
        )

    async def run_contacts_table_column(
        self,
        table_id: str,
        column_id: str,
        body: ColumnsRunRequest | ColumnsRunRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ColumnsRunResponse:
        """Populate or refresh a column's data for some or all rows in the table. This is **asynchronous** — the call
        returns immediately with ``status: "processing"``; poll Get Contacts Table for ``isProcessing`` and per-column
        row-status counts to know when it's done, then read the values via Get Contacts Table Entities.

        **``runScope`` values:**
        - ``all`` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
        - ``missing`` — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
        - ``specific`` — only the ``entityIds`` you pass. Also how you implement "run for this page" — fetch the page
            via Get Contacts Table Entities, then pass those IDs here.

        > **Billing:** Charged per row processed, per the column's credit tier. Re-running with ``all`` charges again
            for rows that already have data.

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
            await self._with_raw_response.run_contacts_table_column(
                table_id, column_id, body, request_options=request_options
            ),
        )

    async def update_contacts_table(
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
            await self._with_raw_response.update_contacts_table(table_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncContactsTablesWithRawResponse:
        return self._with_raw_response


class ContactsTablesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_contacts_table_entities(
        self,
        table_id: str,
        body: EntitiesAddRequest | EntitiesAddRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesAddResponse, AddContactsTableEntitiesErrorBody]:
        """Add up to 500 contact IDs to an existing table. ``entityIds`` accepts either the encrypted Lusha token
        (``v{N}.…``, as returned by Search/Enrich/Get Entities) or the legacy numeric ``personId`` — an ID that's
        neither returns ``400``. Already-present IDs are reported as ``alreadyPresent`` and not re-added; unresolvable
        IDs are not an error, they come back in ``invalidIds`` with a ``200``.

        Optionally pass ``companyIds`` — one ``lushaCompanyId`` per contact, index-aligned with ``entityIds`` — to help
        pair company-level enrichment to the right company for each contact.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntitiesAddRequest | EntitiesAddRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[EntitiesAddResponse],
            error_mapper=add_contacts_table_entities_error_mapper,
            request_options=request_options,
        )

    def create_contacts_table(
        self, body: TableCreateRequest | TableCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TableResponse, CreateContactsTableErrorBody]:
        """Create a new, empty contacts table, optionally seeded with an initial list of contact IDs.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/tables"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableCreateRequest | TableCreateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TableResponse],
            error_mapper=create_contacts_table_error_mapper,
            request_options=request_options,
        )

    def delete_contacts_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V3ContactsTablesResponse, DeleteContactsTableErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3ContactsTablesResponse],
            error_mapper=delete_contacts_table_error_mapper,
            request_options=request_options,
        )

    def get_contacts_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TableResponse, GetContactsTableErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TableResponse],
            error_mapper=get_contacts_table_error_mapper,
            request_options=request_options,
        )

    def get_contacts_table_entities(
        self,
        table_id: str,
        *,
        email: EmailStr | None = None,
        page: int | None = 0,
        size: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesGetResponse, GetContactsTableEntitiesErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[
                param[EmailStr | None]("email", email), param[int | None]("page", page), param[int | None]("size", size)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[EntitiesGetResponse],
            error_mapper=get_contacts_table_entities_error_mapper,
            request_options=request_options,
        )

    def list_contacts_table_columns(
        self, table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ColumnsListResponse, ListContactsTableColumnsErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}/columns"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ColumnsListResponse],
            error_mapper=list_contacts_table_columns_error_mapper,
            request_options=request_options,
        )

    def list_contacts_tables(
        self, body: TableListRequest | TableListRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TableListResponse, ListContactsTablesErrorBody]:
        """List contacts tables owned by the given user, plus any tables shared with the account.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/tables/list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableListRequest | TableListRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TableListResponse],
            error_mapper=list_contacts_tables_error_mapper,
            request_options=request_options,
        )

    def remove_contacts_table_column(
        self,
        table_id: str,
        column_id: str,
        *,
        email: EmailStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ContactsTablesColumnsResponse, RemoveContactsTableColumnErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}/columns/{column_id}"),
            path_params=[param[str]("table_id", table_id), param[str]("column_id", column_id)],
            query_params=[param[EmailStr | None]("email", email)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3ContactsTablesColumnsResponse],
            error_mapper=remove_contacts_table_column_error_mapper,
            request_options=request_options,
        )

    def remove_contacts_table_entities(
        self,
        table_id: str,
        body: EntitiesRemoveRequest | EntitiesRemoveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesRemoveResponse, RemoveContactsTableEntitiesErrorBody]:
        """Remove specific contact IDs from a table.

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
            url_template=self._server.default("/v3/contacts/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntitiesRemoveRequest | EntitiesRemoveRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[EntitiesRemoveResponse],
            error_mapper=remove_contacts_table_entities_error_mapper,
            request_options=request_options,
        )

    def run_contacts_table_column(
        self,
        table_id: str,
        column_id: str,
        body: ColumnsRunRequest | ColumnsRunRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ColumnsRunResponse, RunContactsTableColumnErrorBody]:
        """Populate or refresh a column's data for some or all rows in the table. This is **asynchronous** — the call
        returns immediately with ``status: "processing"``; poll Get Contacts Table for ``isProcessing`` and per-column
        row-status counts to know when it's done, then read the values via Get Contacts Table Entities.

        **``runScope`` values:**
        - ``all`` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
        - ``missing`` — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
        - ``specific`` — only the ``entityIds`` you pass. Also how you implement "run for this page" — fetch the page
            via Get Contacts Table Entities, then pass those IDs here.

        > **Billing:** Charged per row processed, per the column's credit tier. Re-running with ``all`` charges again
            for rows that already have data.

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
            url_template=self._server.default("/v3/contacts/tables/{table_id}/columns/{column_id}/run"),
            path_params=[param[str]("table_id", table_id), param[str]("column_id", column_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ColumnsRunRequest | ColumnsRunRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ColumnsRunResponse],
            error_mapper=run_contacts_table_column_error_mapper,
            request_options=request_options,
        )

    def update_contacts_table(
        self,
        table_id: str,
        body: TableUpdateRequest | TableUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TableResponse, UpdateContactsTableErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableUpdateRequest | TableUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[TableResponse],
            error_mapper=update_contacts_table_error_mapper,
            request_options=request_options,
        )


class AsyncContactsTablesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_contacts_table_entities(
        self,
        table_id: str,
        body: EntitiesAddRequest | EntitiesAddRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesAddResponse, AddContactsTableEntitiesErrorBody]:
        """Add up to 500 contact IDs to an existing table. ``entityIds`` accepts either the encrypted Lusha token
        (``v{N}.…``, as returned by Search/Enrich/Get Entities) or the legacy numeric ``personId`` — an ID that's
        neither returns ``400``. Already-present IDs are reported as ``alreadyPresent`` and not re-added; unresolvable
        IDs are not an error, they come back in ``invalidIds`` with a ``200``.

        Optionally pass ``companyIds`` — one ``lushaCompanyId`` per contact, index-aligned with ``entityIds`` — to help
        pair company-level enrichment to the right company for each contact.

        > **Billing:** Free.

        Args:
            table_id: The table's ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntitiesAddRequest | EntitiesAddRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[EntitiesAddResponse],
            error_mapper=add_contacts_table_entities_error_mapper,
            request_options=request_options,
        )

    async def create_contacts_table(
        self,
        body: TableCreateRequest | TableCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TableResponse, CreateContactsTableErrorBody]:
        """Create a new, empty contacts table, optionally seeded with an initial list of contact IDs.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/tables"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableCreateRequest | TableCreateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TableResponse],
            error_mapper=create_contacts_table_error_mapper,
            request_options=request_options,
        )

    async def delete_contacts_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V3ContactsTablesResponse, DeleteContactsTableErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3ContactsTablesResponse],
            error_mapper=delete_contacts_table_error_mapper,
            request_options=request_options,
        )

    async def get_contacts_table(
        self, table_id: str, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TableResponse, GetContactsTableErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TableResponse],
            error_mapper=get_contacts_table_error_mapper,
            request_options=request_options,
        )

    async def get_contacts_table_entities(
        self,
        table_id: str,
        *,
        email: EmailStr | None = None,
        page: int | None = 0,
        size: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesGetResponse, GetContactsTableEntitiesErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[
                param[EmailStr | None]("email", email), param[int | None]("page", page), param[int | None]("size", size)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[EntitiesGetResponse],
            error_mapper=get_contacts_table_entities_error_mapper,
            request_options=request_options,
        )

    async def list_contacts_table_columns(
        self, table_id: str, *, email: EmailStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ColumnsListResponse, ListContactsTableColumnsErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}/columns"),
            path_params=[param[str]("table_id", table_id)],
            query_params=[param[EmailStr | None]("email", email)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ColumnsListResponse],
            error_mapper=list_contacts_table_columns_error_mapper,
            request_options=request_options,
        )

    async def list_contacts_tables(
        self, body: TableListRequest | TableListRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TableListResponse, ListContactsTablesErrorBody]:
        """List contacts tables owned by the given user, plus any tables shared with the account.

        > **Billing:** Free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/tables/list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableListRequest | TableListRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TableListResponse],
            error_mapper=list_contacts_tables_error_mapper,
            request_options=request_options,
        )

    async def remove_contacts_table_column(
        self,
        table_id: str,
        column_id: str,
        *,
        email: EmailStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ContactsTablesColumnsResponse, RemoveContactsTableColumnErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}/columns/{column_id}"),
            path_params=[param[str]("table_id", table_id), param[str]("column_id", column_id)],
            query_params=[param[EmailStr | None]("email", email)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3ContactsTablesColumnsResponse],
            error_mapper=remove_contacts_table_column_error_mapper,
            request_options=request_options,
        )

    async def remove_contacts_table_entities(
        self,
        table_id: str,
        body: EntitiesRemoveRequest | EntitiesRemoveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntitiesRemoveResponse, RemoveContactsTableEntitiesErrorBody]:
        """Remove specific contact IDs from a table.

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
            url_template=self._server.default("/v3/contacts/tables/{table_id}/entities"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EntitiesRemoveRequest | EntitiesRemoveRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[EntitiesRemoveResponse],
            error_mapper=remove_contacts_table_entities_error_mapper,
            request_options=request_options,
        )

    async def run_contacts_table_column(
        self,
        table_id: str,
        column_id: str,
        body: ColumnsRunRequest | ColumnsRunRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ColumnsRunResponse, RunContactsTableColumnErrorBody]:
        """Populate or refresh a column's data for some or all rows in the table. This is **asynchronous** — the call
        returns immediately with ``status: "processing"``; poll Get Contacts Table for ``isProcessing`` and per-column
        row-status counts to know when it's done, then read the values via Get Contacts Table Entities.

        **``runScope`` values:**
        - ``all`` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
        - ``missing`` — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
        - ``specific`` — only the ``entityIds`` you pass. Also how you implement "run for this page" — fetch the page
            via Get Contacts Table Entities, then pass those IDs here.

        > **Billing:** Charged per row processed, per the column's credit tier. Re-running with ``all`` charges again
            for rows that already have data.

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
            url_template=self._server.default("/v3/contacts/tables/{table_id}/columns/{column_id}/run"),
            path_params=[param[str]("table_id", table_id), param[str]("column_id", column_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ColumnsRunRequest | ColumnsRunRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ColumnsRunResponse],
            error_mapper=run_contacts_table_column_error_mapper,
            request_options=request_options,
        )

    async def update_contacts_table(
        self,
        table_id: str,
        body: TableUpdateRequest | TableUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TableResponse, UpdateContactsTableErrorBody]:
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
            url_template=self._server.default("/v3/contacts/tables/{table_id}"),
            path_params=[param[str]("table_id", table_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TableUpdateRequest | TableUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[TableResponse],
            error_mapper=update_contacts_table_error_mapper,
            request_options=request_options,
        )
