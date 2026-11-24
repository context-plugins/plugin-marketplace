from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.identities_create_error import IdentitiesCreateErrorBody, identities_create_error_mapper
from ..errors.identities_destroy_error import IdentitiesDestroyErrorBody, identities_destroy_error_mapper
from ..errors.identities_index_error import IdentitiesIndexErrorBody, identities_index_error_mapper
from ..models.api_v2_identities_request import ApiV2IdentitiesRequest, ApiV2IdentitiesRequestDict
from ..models.api_v2_identities_response import ApiV2IdentitiesResponse
from ..models.api_v2_identities_response1 import ApiV2IdentitiesResponse1
from ..models.api_v2_identities_response2 import ApiV2IdentitiesResponse2
from ..models.enums.order import Order, OrderOrStr
from ..server.server import Server


class Identities:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IdentitiesWithRawResponse(client, server, auth)

    def identities_create(
        self,
        body: ApiV2IdentitiesRequest | ApiV2IdentitiesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2IdentitiesResponse1:
        """Create a new identity for document organization.

        **Required Fields:**
        - name - Identity name

        ``identity.id`` feeds documents_index, documents_create, documents_update, identities_destroy and
        numbers_purchase_update. Rows: identities_index.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            creates a new identity

        Raises:
            ApiError: returns unauthorized returns unprocessable entity ``error`` is ``ApiV2Identities401Error1 | Error
                | RawError``."""
        return unwrap(self._with_raw_response.identities_create(body, request_options=request_options))

    def identities_destroy(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2IdentitiesResponse2:
        """Archive an identity.

        **Important notes:**
        - Identity is archived and becomes inactive
        - Cannot delete primary/default identity
        - Associated documents are preserved

        Args:
            id_: Identity ID from identities_index, identities_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            archives the identity

        Raises:
            ApiError: returns unauthorized returns not found returns forbidden ``error`` is ``ApiV2Identities401Error1 |
                ApiV2Identities404Error1 | ApiV2Identities422Error1 | RawError``."""
        return unwrap(self._with_raw_response.identities_destroy(id_, request_options=request_options))

    def identities_index(
        self,
        *,
        ids: str | None = None,
        name: str | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2IdentitiesResponse:
        """Retrieve a list of identities with filtering and pagination.

        **Important notes:**
        - Supports filtering by name, IDs, and date range
        - Results can be sorted and paginated

        ``identities[].id`` feeds documents_index, documents_create, documents_update, identities_destroy and
        numbers_purchase_update. When ``documents_count`` is above zero, documents_index lists those documents by
        ``identity_id``.

        Args:
            ids: Filter identities by IDs (comma-separated); ``identity_id`` from documents_index, documents_show
            name: Filter identities by name (partial match)
            created_at_from: Filter identities created from this date (YYYY-MM-DD)
            created_at_to: Filter identities created until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns identities with documents count

        Raises:
            ApiError: returns unauthorized ``error`` is ``ApiV2Identities401Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.identities_index(
                ids=ids,
                name=name,
                created_at_from=created_at_from,
                created_at_to=created_at_to,
                order_by=order_by,
                order=order,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> IdentitiesWithRawResponse:
        return self._with_raw_response


class AsyncIdentities:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIdentitiesWithRawResponse(client, server, auth)

    async def identities_create(
        self,
        body: ApiV2IdentitiesRequest | ApiV2IdentitiesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2IdentitiesResponse1:
        """Create a new identity for document organization.

        **Required Fields:**
        - name - Identity name

        ``identity.id`` feeds documents_index, documents_create, documents_update, identities_destroy and
        numbers_purchase_update. Rows: identities_index.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            creates a new identity

        Raises:
            ApiError: returns unauthorized returns unprocessable entity ``error`` is ``ApiV2Identities401Error1 | Error
                | RawError``."""
        return unwrap(await self._with_raw_response.identities_create(body, request_options=request_options))

    async def identities_destroy(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2IdentitiesResponse2:
        """Archive an identity.

        **Important notes:**
        - Identity is archived and becomes inactive
        - Cannot delete primary/default identity
        - Associated documents are preserved

        Args:
            id_: Identity ID from identities_index, identities_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            archives the identity

        Raises:
            ApiError: returns unauthorized returns not found returns forbidden ``error`` is ``ApiV2Identities401Error1 |
                ApiV2Identities404Error1 | ApiV2Identities422Error1 | RawError``."""
        return unwrap(await self._with_raw_response.identities_destroy(id_, request_options=request_options))

    async def identities_index(
        self,
        *,
        ids: str | None = None,
        name: str | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2IdentitiesResponse:
        """Retrieve a list of identities with filtering and pagination.

        **Important notes:**
        - Supports filtering by name, IDs, and date range
        - Results can be sorted and paginated

        ``identities[].id`` feeds documents_index, documents_create, documents_update, identities_destroy and
        numbers_purchase_update. When ``documents_count`` is above zero, documents_index lists those documents by
        ``identity_id``.

        Args:
            ids: Filter identities by IDs (comma-separated); ``identity_id`` from documents_index, documents_show
            name: Filter identities by name (partial match)
            created_at_from: Filter identities created from this date (YYYY-MM-DD)
            created_at_to: Filter identities created until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns identities with documents count

        Raises:
            ApiError: returns unauthorized ``error`` is ``ApiV2Identities401Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.identities_index(
                ids=ids,
                name=name,
                created_at_from=created_at_from,
                created_at_to=created_at_to,
                order_by=order_by,
                order=order,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIdentitiesWithRawResponse:
        return self._with_raw_response


class IdentitiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def identities_create(
        self,
        body: ApiV2IdentitiesRequest | ApiV2IdentitiesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2IdentitiesResponse1, IdentitiesCreateErrorBody]:
        """Create a new identity for document organization.

        **Required Fields:**
        - name - Identity name

        ``identity.id`` feeds documents_index, documents_create, documents_update, identities_destroy and
        numbers_purchase_update. Rows: identities_index.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/identities"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2IdentitiesRequest | ApiV2IdentitiesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2IdentitiesResponse1],
            error_mapper=identities_create_error_mapper,
            request_options=request_options,
        )

    def identities_destroy(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2IdentitiesResponse2, IdentitiesDestroyErrorBody]:
        """Archive an identity.

        **Important notes:**
        - Identity is archived and becomes inactive
        - Cannot delete primary/default identity
        - Associated documents are preserved

        Args:
            id_: Identity ID from identities_index, identities_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v2/identities/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2IdentitiesResponse2],
            error_mapper=identities_destroy_error_mapper,
            request_options=request_options,
        )

    def identities_index(
        self,
        *,
        ids: str | None = None,
        name: str | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2IdentitiesResponse, IdentitiesIndexErrorBody]:
        """Retrieve a list of identities with filtering and pagination.

        **Important notes:**
        - Supports filtering by name, IDs, and date range
        - Results can be sorted and paginated

        ``identities[].id`` feeds documents_index, documents_create, documents_update, identities_destroy and
        numbers_purchase_update. When ``documents_count`` is above zero, documents_index lists those documents by
        ``identity_id``.

        Args:
            ids: Filter identities by IDs (comma-separated); ``identity_id`` from documents_index, documents_show
            name: Filter identities by name (partial match)
            created_at_from: Filter identities created from this date (YYYY-MM-DD)
            created_at_to: Filter identities created until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/identities"),
            query_params=[
                param[str | None]("ids", ids),
                param[str | None]("name", name),
                param[Date | None]("created_at_from", created_at_from),
                param[Date | None]("created_at_to", created_at_to),
                param[str | None]("order_by", order_by),
                param[OrderOrStr | None]("order", order),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2IdentitiesResponse],
            error_mapper=identities_index_error_mapper,
            request_options=request_options,
        )


class AsyncIdentitiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def identities_create(
        self,
        body: ApiV2IdentitiesRequest | ApiV2IdentitiesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2IdentitiesResponse1, IdentitiesCreateErrorBody]:
        """Create a new identity for document organization.

        **Required Fields:**
        - name - Identity name

        ``identity.id`` feeds documents_index, documents_create, documents_update, identities_destroy and
        numbers_purchase_update. Rows: identities_index.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/identities"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2IdentitiesRequest | ApiV2IdentitiesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2IdentitiesResponse1],
            error_mapper=identities_create_error_mapper,
            request_options=request_options,
        )

    async def identities_destroy(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2IdentitiesResponse2, IdentitiesDestroyErrorBody]:
        """Archive an identity.

        **Important notes:**
        - Identity is archived and becomes inactive
        - Cannot delete primary/default identity
        - Associated documents are preserved

        Args:
            id_: Identity ID from identities_index, identities_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v2/identities/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2IdentitiesResponse2],
            error_mapper=identities_destroy_error_mapper,
            request_options=request_options,
        )

    async def identities_index(
        self,
        *,
        ids: str | None = None,
        name: str | None = None,
        created_at_from: Date | None = None,
        created_at_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2IdentitiesResponse, IdentitiesIndexErrorBody]:
        """Retrieve a list of identities with filtering and pagination.

        **Important notes:**
        - Supports filtering by name, IDs, and date range
        - Results can be sorted and paginated

        ``identities[].id`` feeds documents_index, documents_create, documents_update, identities_destroy and
        numbers_purchase_update. When ``documents_count`` is above zero, documents_index lists those documents by
        ``identity_id``.

        Args:
            ids: Filter identities by IDs (comma-separated); ``identity_id`` from documents_index, documents_show
            name: Filter identities by name (partial match)
            created_at_from: Filter identities created from this date (YYYY-MM-DD)
            created_at_to: Filter identities created until this date (YYYY-MM-DD)
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/identities"),
            query_params=[
                param[str | None]("ids", ids),
                param[str | None]("name", name),
                param[Date | None]("created_at_from", created_at_from),
                param[Date | None]("created_at_to", created_at_to),
                param[str | None]("order_by", order_by),
                param[OrderOrStr | None]("order", order),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2IdentitiesResponse],
            error_mapper=identities_index_error_mapper,
            request_options=request_options,
        )
