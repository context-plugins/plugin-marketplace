from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.households_destroy_error import HouseholdsDestroyErrorBody, households_destroy_error_mapper
from ..errors.households_index_error import HouseholdsIndexErrorBody, households_index_error_mapper
from ..errors.households_show_error import HouseholdsShowErrorBody, households_show_error_mapper
from ..errors.households_store_error import HouseholdsStoreErrorBody, households_store_error_mapper
from ..errors.households_update_error import HouseholdsUpdateErrorBody, households_update_error_mapper
from ..models.app_http_resources_api_household_resource import AppHttpResourcesApiHouseholdResource
from ..models.household_resource import HouseholdResource
from ..models.household_store_request import HouseholdStoreRequest, HouseholdStoreRequestDict
from ..models.household_update_request import HouseholdUpdateRequest, HouseholdUpdateRequestDict
from ..server.server import Server


class Households:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = HouseholdsWithRawResponse(client, server, auth)

    def households_destroy(self, household: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(self._with_raw_response.households_destroy(household, request_options=request_options))

    def households_index(
        self,
        *,
        head_contact_id: str | None = None,
        contacts: str | None = None,
        query: str | None = None,
        sort_by: str | None = None,
        sort_by_desc: str | None = None,
        page: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[HouseholdResource]:
        """Send a ``GET`` request.

        Args:
            head_contact_id: Value sent with the request.
            contacts: Value sent with the request.
            query: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of ``HouseholdResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(
            self._with_raw_response.households_index(
                head_contact_id=head_contact_id,
                contacts=contacts,
                query=query,
                sort_by=sort_by,
                sort_by_desc=sort_by_desc,
                page=page,
                request_options=request_options,
            ),
        )

    def households_show(
        self, household: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> AppHttpResourcesApiHouseholdResource:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``App.Http.Resources.API.HouseholdResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.households_show(household, request_options=request_options))

    def households_store(
        self,
        body: HouseholdStoreRequest | HouseholdStoreRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AppHttpResourcesApiHouseholdResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``App.Http.Resources.API.HouseholdResource``

        Raises:
            ApiError: Authorization error Validation error ``error`` is ``AuthorizationException1 | ValidationException1
                | RawError``."""
        return unwrap(self._with_raw_response.households_store(body, request_options=request_options))

    def households_update(
        self,
        household: int,
        *,
        body: HouseholdUpdateRequest | HouseholdUpdateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AppHttpResourcesApiHouseholdResource:
        """Send a ``PUT`` request.

        Args:
            household: The household ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``App.Http.Resources.API.HouseholdResource``

        Raises:
            ApiError: Authorization error Not found Validation error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.households_update(household, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> HouseholdsWithRawResponse:
        return self._with_raw_response


class AsyncHouseholds:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncHouseholdsWithRawResponse(client, server, auth)

    async def households_destroy(
        self, household: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(await self._with_raw_response.households_destroy(household, request_options=request_options))

    async def households_index(
        self,
        *,
        head_contact_id: str | None = None,
        contacts: str | None = None,
        query: str | None = None,
        sort_by: str | None = None,
        sort_by_desc: str | None = None,
        page: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[HouseholdResource]:
        """Send a ``GET`` request.

        Args:
            head_contact_id: Value sent with the request.
            contacts: Value sent with the request.
            query: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of ``HouseholdResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.households_index(
                head_contact_id=head_contact_id,
                contacts=contacts,
                query=query,
                sort_by=sort_by,
                sort_by_desc=sort_by_desc,
                page=page,
                request_options=request_options,
            ),
        )

    async def households_show(
        self, household: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AppHttpResourcesApiHouseholdResource:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``App.Http.Resources.API.HouseholdResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.households_show(household, request_options=request_options))

    async def households_store(
        self,
        body: HouseholdStoreRequest | HouseholdStoreRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AppHttpResourcesApiHouseholdResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``App.Http.Resources.API.HouseholdResource``

        Raises:
            ApiError: Authorization error Validation error ``error`` is ``AuthorizationException1 | ValidationException1
                | RawError``."""
        return unwrap(await self._with_raw_response.households_store(body, request_options=request_options))

    async def households_update(
        self,
        household: int,
        *,
        body: HouseholdUpdateRequest | HouseholdUpdateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AppHttpResourcesApiHouseholdResource:
        """Send a ``PUT`` request.

        Args:
            household: The household ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``App.Http.Resources.API.HouseholdResource``

        Raises:
            ApiError: Authorization error Not found Validation error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.households_update(household, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncHouseholdsWithRawResponse:
        return self._with_raw_response


class HouseholdsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def households_destroy(
        self, household: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, HouseholdsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/households/{household}"),
            path_params=[param[int]("household", household)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=empty_response,
            error_mapper=households_destroy_error_mapper,
            request_options=request_options,
        )

    def households_index(
        self,
        *,
        head_contact_id: str | None = None,
        contacts: str | None = None,
        query: str | None = None,
        sort_by: str | None = None,
        sort_by_desc: str | None = None,
        page: str | None = "1",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[HouseholdResource], HouseholdsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            head_contact_id: Value sent with the request.
            contacts: Value sent with the request.
            query: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/households"),
            query_params=[
                param[str | None]("headContactId", head_contact_id),
                param[str | None]("contacts", contacts),
                param[str | None]("query", query),
                param[str | None]("sortBy", sort_by),
                param[str | None]("sortByDesc", sort_by_desc),
                param[str | None]("page", page),
            ],
            auth_scheme=self._auth.http,
            decoder=json_decoder[list[HouseholdResource]],
            error_mapper=households_index_error_mapper,
            request_options=request_options,
        )

    def households_show(
        self, household: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/households/{household}"),
            path_params=[param[int]("household", household)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[AppHttpResourcesApiHouseholdResource],
            error_mapper=households_show_error_mapper,
            request_options=request_options,
        )

    def households_store(
        self,
        body: HouseholdStoreRequest | HouseholdStoreRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/households"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[HouseholdStoreRequest | HouseholdStoreRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[AppHttpResourcesApiHouseholdResource],
            error_mapper=households_store_error_mapper,
            request_options=request_options,
        )

    def households_update(
        self,
        household: int,
        *,
        body: HouseholdUpdateRequest | HouseholdUpdateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            household: The household ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/households/{household}"),
            path_params=[param[int]("household", household)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[HouseholdUpdateRequest | HouseholdUpdateRequestDict | None](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[AppHttpResourcesApiHouseholdResource],
            error_mapper=households_update_error_mapper,
            request_options=request_options,
        )


class AsyncHouseholdsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def households_destroy(
        self, household: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, HouseholdsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/households/{household}"),
            path_params=[param[int]("household", household)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_empty_response,
            error_mapper=households_destroy_error_mapper,
            request_options=request_options,
        )

    async def households_index(
        self,
        *,
        head_contact_id: str | None = None,
        contacts: str | None = None,
        query: str | None = None,
        sort_by: str | None = None,
        sort_by_desc: str | None = None,
        page: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[HouseholdResource], HouseholdsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            head_contact_id: Value sent with the request.
            contacts: Value sent with the request.
            query: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/households"),
            query_params=[
                param[str | None]("headContactId", head_contact_id),
                param[str | None]("contacts", contacts),
                param[str | None]("query", query),
                param[str | None]("sortBy", sort_by),
                param[str | None]("sortByDesc", sort_by_desc),
                param[str | None]("page", page),
            ],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[list[HouseholdResource]],
            error_mapper=households_index_error_mapper,
            request_options=request_options,
        )

    async def households_show(
        self, household: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/households/{household}"),
            path_params=[param[int]("household", household)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[AppHttpResourcesApiHouseholdResource],
            error_mapper=households_show_error_mapper,
            request_options=request_options,
        )

    async def households_store(
        self,
        body: HouseholdStoreRequest | HouseholdStoreRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/households"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[HouseholdStoreRequest | HouseholdStoreRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[AppHttpResourcesApiHouseholdResource],
            error_mapper=households_store_error_mapper,
            request_options=request_options,
        )

    async def households_update(
        self,
        household: int,
        *,
        body: HouseholdUpdateRequest | HouseholdUpdateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            household: The household ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/households/{household}"),
            path_params=[param[int]("household", household)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[HouseholdUpdateRequest | HouseholdUpdateRequestDict | None](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[AppHttpResourcesApiHouseholdResource],
            error_mapper=households_update_error_mapper,
            request_options=request_options,
        )
