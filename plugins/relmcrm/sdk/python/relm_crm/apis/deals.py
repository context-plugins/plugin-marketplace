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
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.deal import Deal
from ..models.deal_input import DealInput, DealInputDict
from ..models.deal_list import DealList
from ..models.deleted import Deleted
from ..server.server import Server


class Deals:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DealsWithRawResponse(client, server, auth)

    def create_deal(
        self,
        body: DealInput | DealInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Deal:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_deal(body, idempotency_key=idempotency_key, request_options=request_options)
        )

    def delete_deal(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_deal(id_, request_options=request_options))

    def get_deal(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deal:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deal

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_deal(id_, request_options=request_options))

    def list_deals(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        q: str | None = None,
        pipeline: str | None = None,
        pipeline_id: str | None = None,
        stage: str | None = None,
        company_id: str | None = None,
        primary_contact_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DealList:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            q: Value sent with the request.
            pipeline: Scope to ONE pipeline (key or pl_ id). Omit and you get deals from ALL pipelines merged - pass
                this whenever you reason about a single funnel, since stage keys are not unique across pipelines. Alias:
                pipeline_id.
            pipeline_id: Value sent with the request.
            stage: Value sent with the request.
            company_id: Value sent with the request.
            primary_contact_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deal list

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_deals(
                limit=limit,
                cursor=cursor,
                include_deleted=include_deleted,
                q=q,
                pipeline=pipeline,
                pipeline_id=pipeline_id,
                stage=stage,
                company_id=company_id,
                primary_contact_id=primary_contact_id,
                request_options=request_options,
            ),
        )

    def restore_deal(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deal:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restored

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.restore_deal(id_, request_options=request_options))

    def update_deal(
        self,
        id_: str,
        body: DealInput | DealInputDict,
        *,
        if_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Deal:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_deal(id_, body, if_match=if_match, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DealsWithRawResponse:
        return self._with_raw_response


class AsyncDeals:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDealsWithRawResponse(client, server, auth)

    async def create_deal(
        self,
        body: DealInput | DealInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Deal:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_deal(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def delete_deal(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_deal(id_, request_options=request_options))

    async def get_deal(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Deal:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deal

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_deal(id_, request_options=request_options))

    async def list_deals(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        q: str | None = None,
        pipeline: str | None = None,
        pipeline_id: str | None = None,
        stage: str | None = None,
        company_id: str | None = None,
        primary_contact_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DealList:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            q: Value sent with the request.
            pipeline: Scope to ONE pipeline (key or pl_ id). Omit and you get deals from ALL pipelines merged - pass
                this whenever you reason about a single funnel, since stage keys are not unique across pipelines. Alias:
                pipeline_id.
            pipeline_id: Value sent with the request.
            stage: Value sent with the request.
            company_id: Value sent with the request.
            primary_contact_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deal list

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_deals(
                limit=limit,
                cursor=cursor,
                include_deleted=include_deleted,
                q=q,
                pipeline=pipeline,
                pipeline_id=pipeline_id,
                stage=stage,
                company_id=company_id,
                primary_contact_id=primary_contact_id,
                request_options=request_options,
            ),
        )

    async def restore_deal(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Deal:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restored

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.restore_deal(id_, request_options=request_options))

    async def update_deal(
        self,
        id_: str,
        body: DealInput | DealInputDict,
        *,
        if_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Deal:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_deal(id_, body, if_match=if_match, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDealsWithRawResponse:
        return self._with_raw_response


class DealsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_deal(
        self,
        body: DealInput | DealInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Deal, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/deals"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[DealInput | DealInputDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Deal],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_deal(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/deals/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_deal(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Deal, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/deals/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Deal],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_deals(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        q: str | None = None,
        pipeline: str | None = None,
        pipeline_id: str | None = None,
        stage: str | None = None,
        company_id: str | None = None,
        primary_contact_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DealList, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            q: Value sent with the request.
            pipeline: Scope to ONE pipeline (key or pl_ id). Omit and you get deals from ALL pipelines merged - pass
                this whenever you reason about a single funnel, since stage keys are not unique across pipelines. Alias:
                pipeline_id.
            pipeline_id: Value sent with the request.
            stage: Value sent with the request.
            company_id: Value sent with the request.
            primary_contact_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/deals"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[bool | None]("include_deleted", include_deleted),
                param[str | None]("q", q),
                param[str | None]("pipeline", pipeline),
                param[str | None]("pipeline_id", pipeline_id),
                param[str | None]("stage", stage),
                param[str | None]("company_id", company_id),
                param[str | None]("primary_contact_id", primary_contact_id),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[DealList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def restore_deal(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Deal, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/deals/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Deal],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_deal(
        self,
        id_: str,
        body: DealInput | DealInputDict,
        *,
        if_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Deal, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/deals/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DealInput | DealInputDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Deal],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncDealsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_deal(
        self,
        body: DealInput | DealInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Deal, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/deals"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[DealInput | DealInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Deal],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_deal(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/deals/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_deal(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Deal, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/deals/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Deal],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_deals(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        q: str | None = None,
        pipeline: str | None = None,
        pipeline_id: str | None = None,
        stage: str | None = None,
        company_id: str | None = None,
        primary_contact_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DealList, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            q: Value sent with the request.
            pipeline: Scope to ONE pipeline (key or pl_ id). Omit and you get deals from ALL pipelines merged - pass
                this whenever you reason about a single funnel, since stage keys are not unique across pipelines. Alias:
                pipeline_id.
            pipeline_id: Value sent with the request.
            stage: Value sent with the request.
            company_id: Value sent with the request.
            primary_contact_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/deals"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[bool | None]("include_deleted", include_deleted),
                param[str | None]("q", q),
                param[str | None]("pipeline", pipeline),
                param[str | None]("pipeline_id", pipeline_id),
                param[str | None]("stage", stage),
                param[str | None]("company_id", company_id),
                param[str | None]("primary_contact_id", primary_contact_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[DealList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def restore_deal(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Deal, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/deals/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Deal],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_deal(
        self,
        id_: str,
        body: DealInput | DealInputDict,
        *,
        if_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Deal, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/deals/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DealInput | DealInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Deal],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
