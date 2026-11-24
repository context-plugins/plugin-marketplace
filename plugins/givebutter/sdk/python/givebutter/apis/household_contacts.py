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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.households_contacts_destroy_error import (
    HouseholdsContactsDestroyErrorBody,
    households_contacts_destroy_error_mapper,
)
from ..errors.households_contacts_index_error import (
    HouseholdsContactsIndexErrorBody,
    households_contacts_index_error_mapper,
)
from ..errors.households_contacts_show_error import (
    HouseholdsContactsShowErrorBody,
    households_contacts_show_error_mapper,
)
from ..errors.households_contacts_store_error import (
    HouseholdsContactsStoreErrorBody,
    households_contacts_store_error_mapper,
)
from ..models.app_http_resources_api_household_resource import AppHttpResourcesApiHouseholdResource
from ..models.contact_resource import ContactResource
from ..models.v1_households_contacts_request import V1HouseholdsContactsRequest, V1HouseholdsContactsRequestDict
from ..models.v1_households_contacts_response import V1HouseholdsContactsResponse
from ..server.server import Server


class HouseholdContacts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = HouseholdContactsWithRawResponse(client, server, auth)

    def households_contacts_destroy(
        self, household: int, contact: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> AppHttpResourcesApiHouseholdResource:
        """Send a ``DELETE`` request.

        Args:
            household: The household ID
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``App.Http.Resources.API.HouseholdResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.households_contacts_destroy(household, contact, request_options=request_options)
        )

    def households_contacts_index(
        self, household: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1HouseholdsContactsResponse:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``ContactResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.households_contacts_index(household, request_options=request_options))

    def households_contacts_show(
        self, household: int, contact: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ContactResource:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.households_contacts_show(household, contact, request_options=request_options)
        )

    def households_contacts_store(
        self,
        household: int,
        body: V1HouseholdsContactsRequest | V1HouseholdsContactsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AppHttpResourcesApiHouseholdResource:
        """Send a ``POST`` request.

        Args:
            household: The household ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``App.Http.Resources.API.HouseholdResource``

        Raises:
            ApiError: Validation error Authorization error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            self._with_raw_response.households_contacts_store(household, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> HouseholdContactsWithRawResponse:
        return self._with_raw_response


class AsyncHouseholdContacts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncHouseholdContactsWithRawResponse(client, server, auth)

    async def households_contacts_destroy(
        self, household: int, contact: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AppHttpResourcesApiHouseholdResource:
        """Send a ``DELETE`` request.

        Args:
            household: The household ID
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``App.Http.Resources.API.HouseholdResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.households_contacts_destroy(
                household, contact, request_options=request_options
            ),
        )

    async def households_contacts_index(
        self, household: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1HouseholdsContactsResponse:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``ContactResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.households_contacts_index(household, request_options=request_options)
        )

    async def households_contacts_show(
        self, household: int, contact: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ContactResource:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.households_contacts_show(household, contact, request_options=request_options)
        )

    async def households_contacts_store(
        self,
        household: int,
        body: V1HouseholdsContactsRequest | V1HouseholdsContactsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AppHttpResourcesApiHouseholdResource:
        """Send a ``POST`` request.

        Args:
            household: The household ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``App.Http.Resources.API.HouseholdResource``

        Raises:
            ApiError: Validation error Authorization error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.households_contacts_store(household, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncHouseholdContactsWithRawResponse:
        return self._with_raw_response


class HouseholdContactsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def households_contacts_destroy(
        self, household: int, contact: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsContactsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            household: The household ID
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/households/{household}/contacts/{contact}"),
            path_params=[param[int]("household", household), param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=json_decoder[AppHttpResourcesApiHouseholdResource],
            error_mapper=households_contacts_destroy_error_mapper,
            request_options=request_options,
        )

    def households_contacts_index(
        self, household: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1HouseholdsContactsResponse, HouseholdsContactsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/households/{household}/contacts"),
            path_params=[param[int]("household", household)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1HouseholdsContactsResponse],
            error_mapper=households_contacts_index_error_mapper,
            request_options=request_options,
        )

    def households_contacts_show(
        self, household: int, contact: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ContactResource, HouseholdsContactsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/households/{household}/contacts/{contact}"),
            path_params=[param[int]("household", household), param[int]("contact", contact)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[ContactResource],
            error_mapper=households_contacts_show_error_mapper,
            request_options=request_options,
        )

    def households_contacts_store(
        self,
        household: int,
        body: V1HouseholdsContactsRequest | V1HouseholdsContactsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsContactsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            household: The household ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/households/{household}/contacts"),
            path_params=[param[int]("household", household)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HouseholdsContactsRequest | V1HouseholdsContactsRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[AppHttpResourcesApiHouseholdResource],
            error_mapper=households_contacts_store_error_mapper,
            request_options=request_options,
        )


class AsyncHouseholdContactsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def households_contacts_destroy(
        self, household: int, contact: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsContactsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            household: The household ID
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/households/{household}/contacts/{contact}"),
            path_params=[param[int]("household", household), param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[AppHttpResourcesApiHouseholdResource],
            error_mapper=households_contacts_destroy_error_mapper,
            request_options=request_options,
        )

    async def households_contacts_index(
        self, household: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1HouseholdsContactsResponse, HouseholdsContactsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/households/{household}/contacts"),
            path_params=[param[int]("household", household)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1HouseholdsContactsResponse],
            error_mapper=households_contacts_index_error_mapper,
            request_options=request_options,
        )

    async def households_contacts_show(
        self, household: int, contact: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ContactResource, HouseholdsContactsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            household: The household ID
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/households/{household}/contacts/{contact}"),
            path_params=[param[int]("household", household), param[int]("contact", contact)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[ContactResource],
            error_mapper=households_contacts_show_error_mapper,
            request_options=request_options,
        )

    async def households_contacts_store(
        self,
        household: int,
        body: V1HouseholdsContactsRequest | V1HouseholdsContactsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsContactsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            household: The household ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/households/{household}/contacts"),
            path_params=[param[int]("household", household)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HouseholdsContactsRequest | V1HouseholdsContactsRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[AppHttpResourcesApiHouseholdResource],
            error_mapper=households_contacts_store_error_mapper,
            request_options=request_options,
        )
