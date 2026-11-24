from __future__ import annotations

from uuid import UUID

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.datasets_association_index_error import (
    DatasetsAssociationIndexErrorBody,
    datasets_association_index_error_mapper,
)
from ..errors.datasets_catalog_error import DatasetsCatalogErrorBody, datasets_catalog_error_mapper
from ..models.api_v1_associations_datasets_response import ApiV1AssociationsDatasetsResponse
from ..models.api_v1_datasets_response import ApiV1DatasetsResponse
from ..server.server import Server


class DatasetCatalog:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatasetCatalogWithRawResponse(client, server, auth)

    def datasets_association_index(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsDatasetsResponse:
        """What the platform holds for one association across every resource, in one round trip: record counts, how many
        of each resource's sources could be measured, whether your key can read them, and the coverage caveat. The call
        to make before deciding which resource endpoints are worth a request.

        - Counts are returned for resources above your plan on purpose. The size of what is behind the gate is the
            offer.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.datasets_association_index(id_, request_options=request_options))

    def datasets_catalog(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1DatasetsResponse:
        """The resource catalog: every published resource and every source behind it, with display name, buyer summary,
        provenance, state footprint, coverage basis and caveat, the plan each needs, and whether your key can read it.
        Resources above your plan are listed deliberately — an absence you cannot see is indistinguishable from a clean
        record.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``invalid_api_key`` — No Authorization header, a header that is not ``Bearer <key>``, or a key
                that does not resolve to an active record. Next: Send ``Authorization: Bearer ce_live_...``. If the
                header is correct, the key has been revoked or expired — mint a new one at /settings/api-keys. Keys are
                shown once at creation and stored only as a hash, so a lost key cannot be recovered.
                ``scope_not_allowed`` — The key is valid but was created without the scope this endpoint requires.
                Scopes are set at key creation and are not widened at request time. Next: Create a key carrying the
                scope named in the message, or use the ``all`` scope. Each endpoint's required scope is on its OpenAPI
                operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.datasets_catalog(request_options=request_options))

    @property
    def with_raw_response(self) -> DatasetCatalogWithRawResponse:
        return self._with_raw_response


class AsyncDatasetCatalog:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatasetCatalogWithRawResponse(client, server, auth)

    async def datasets_association_index(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1AssociationsDatasetsResponse:
        """What the platform holds for one association across every resource, in one round trip: record counts, how many
        of each resource's sources could be measured, whether your key can read them, and the coverage caveat. The call
        to make before deciding which resource endpoints are worth a request.

        - Counts are returned for resources above your plan on purpose. The size of what is behind the gate is the
            offer.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.datasets_association_index(id_, request_options=request_options))

    async def datasets_catalog(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1DatasetsResponse:
        """The resource catalog: every published resource and every source behind it, with display name, buyer summary,
        provenance, state footprint, coverage basis and caveat, the plan each needs, and whether your key can read it.
        Resources above your plan are listed deliberately — an absence you cannot see is indistinguishable from a clean
        record.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``invalid_api_key`` — No Authorization header, a header that is not ``Bearer <key>``, or a key
                that does not resolve to an active record. Next: Send ``Authorization: Bearer ce_live_...``. If the
                header is correct, the key has been revoked or expired — mint a new one at /settings/api-keys. Keys are
                shown once at creation and stored only as a hash, so a lost key cannot be recovered.
                ``scope_not_allowed`` — The key is valid but was created without the scope this endpoint requires.
                Scopes are set at key creation and are not widened at request time. Next: Create a key carrying the
                scope named in the message, or use the ``all`` scope. Each endpoint's required scope is on its OpenAPI
                operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.datasets_catalog(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatasetCatalogWithRawResponse:
        return self._with_raw_response


class DatasetCatalogWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def datasets_association_index(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsDatasetsResponse, DatasetsAssociationIndexErrorBody]:
        """What the platform holds for one association across every resource, in one round trip: record counts, how many
        of each resource's sources could be measured, whether your key can read them, and the coverage caveat. The call
        to make before deciding which resource endpoints are worth a request.

        - Counts are returned for resources above your plan on purpose. The size of what is behind the gate is the
            offer.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/datasets"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1AssociationsDatasetsResponse],
            error_mapper=datasets_association_index_error_mapper,
            request_options=request_options,
        )

    def datasets_catalog(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DatasetsResponse, DatasetsCatalogErrorBody]:
        """The resource catalog: every published resource and every source behind it, with display name, buyer summary,
        provenance, state footprint, coverage basis and caveat, the plan each needs, and whether your key can read it.
        Resources above your plan are listed deliberately — an absence you cannot see is indistinguishable from a clean
        record.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DatasetsResponse],
            error_mapper=datasets_catalog_error_mapper,
            request_options=request_options,
        )


class AsyncDatasetCatalogWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def datasets_association_index(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1AssociationsDatasetsResponse, DatasetsAssociationIndexErrorBody]:
        """What the platform holds for one association across every resource, in one round trip: record counts, how many
        of each resource's sources could be measured, whether your key can read them, and the coverage caveat. The call
        to make before deciding which resource endpoints are worth a request.

        - Counts are returned for resources above your plan on purpose. The size of what is behind the gate is the
            offer.

        Args:
            id_: Association id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/associations/{id}/datasets"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1AssociationsDatasetsResponse],
            error_mapper=datasets_association_index_error_mapper,
            request_options=request_options,
        )

    async def datasets_catalog(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DatasetsResponse, DatasetsCatalogErrorBody]:
        """The resource catalog: every published resource and every source behind it, with display name, buyer summary,
        provenance, state footprint, coverage basis and caveat, the plan each needs, and whether your key can read it.
        Resources above your plan are listed deliberately — an absence you cannot see is indistinguishable from a clean
        record.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DatasetsResponse],
            error_mapper=datasets_catalog_error_mapper,
            request_options=request_options,
        )
