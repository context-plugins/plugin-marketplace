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
from ..errors.search_and_enrich_companies_error import (
    SearchAndEnrichCompaniesErrorBody,
    search_and_enrich_companies_error_mapper,
)
from ..errors.search_and_enrich_contacts_error import (
    SearchAndEnrichContactsErrorBody,
    search_and_enrich_contacts_error_mapper,
)
from ..models.v3_companies_search_and_enrich_request import (
    V3CompaniesSearchAndEnrichRequest,
    V3CompaniesSearchAndEnrichRequestDict,
)
from ..models.v3_companies_search_and_enrich_response import V3CompaniesSearchAndEnrichResponse
from ..models.v3_contacts_search_and_enrich_request import (
    V3ContactsSearchAndEnrichRequest,
    V3ContactsSearchAndEnrichRequestDict,
)
from ..models.v3_contacts_search_and_enrich_response import V3ContactsSearchAndEnrichResponse
from ..server.server import Server


class SearchEnrich:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchEnrichWithRawResponse(client, server, auth)

    def search_and_enrich_companies(
        self,
        body: V3CompaniesSearchAndEnrichRequest | V3CompaniesSearchAndEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3CompaniesSearchAndEnrichResponse:
        """Find companies and reveal their full data in a single call. Combines Search and Enrich into one request.

        Provide company identifiers the same way you would for Search Companies. Up to 100 companies per request.

        > **Billing:** Same as Enrich Companies — charged per successful result via the ``reveal_company`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.search_and_enrich_companies(body, request_options=request_options))

    def search_and_enrich_contacts(
        self,
        body: V3ContactsSearchAndEnrichRequest | V3ContactsSearchAndEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V3ContactsSearchAndEnrichResponse:
        """Find contacts and reveal their full data in a single call. Combines Search and Enrich into one request.

        Provide contact identifiers the same way you would for Search Contacts. Use the ``reveal`` field to control what
        gets unlocked (``emails``, ``phones``, or both).

        Up to 100 contacts per request.

        > **Billing:** Two charges apply — one for the search (``api_search``) and one per revealed field. The
            ``billing.creditsCharged`` in the response reflects the total.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.search_and_enrich_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> SearchEnrichWithRawResponse:
        return self._with_raw_response


class AsyncSearchEnrich:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchEnrichWithRawResponse(client, server, auth)

    async def search_and_enrich_companies(
        self,
        body: V3CompaniesSearchAndEnrichRequest | V3CompaniesSearchAndEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3CompaniesSearchAndEnrichResponse:
        """Find companies and reveal their full data in a single call. Combines Search and Enrich into one request.

        Provide company identifiers the same way you would for Search Companies. Up to 100 companies per request.

        > **Billing:** Same as Enrich Companies — charged per successful result via the ``reveal_company`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.search_and_enrich_companies(body, request_options=request_options))

    async def search_and_enrich_contacts(
        self,
        body: V3ContactsSearchAndEnrichRequest | V3ContactsSearchAndEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V3ContactsSearchAndEnrichResponse:
        """Find contacts and reveal their full data in a single call. Combines Search and Enrich into one request.

        Provide contact identifiers the same way you would for Search Contacts. Use the ``reveal`` field to control what
        gets unlocked (``emails``, ``phones``, or both).

        Up to 100 contacts per request.

        > **Billing:** Two charges apply — one for the search (``api_search``) and one per revealed field. The
            ``billing.creditsCharged`` in the response reflects the total.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.search_and_enrich_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSearchEnrichWithRawResponse:
        return self._with_raw_response


class SearchEnrichWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_and_enrich_companies(
        self,
        body: V3CompaniesSearchAndEnrichRequest | V3CompaniesSearchAndEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3CompaniesSearchAndEnrichResponse, SearchAndEnrichCompaniesErrorBody]:
        """Find companies and reveal their full data in a single call. Combines Search and Enrich into one request.

        Provide company identifiers the same way you would for Search Companies. Up to 100 companies per request.

        > **Billing:** Same as Enrich Companies — charged per successful result via the ``reveal_company`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/search-and-enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3CompaniesSearchAndEnrichRequest | V3CompaniesSearchAndEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3CompaniesSearchAndEnrichResponse],
            error_mapper=search_and_enrich_companies_error_mapper,
            request_options=request_options,
        )

    def search_and_enrich_contacts(
        self,
        body: V3ContactsSearchAndEnrichRequest | V3ContactsSearchAndEnrichRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ContactsSearchAndEnrichResponse, SearchAndEnrichContactsErrorBody]:
        """Find contacts and reveal their full data in a single call. Combines Search and Enrich into one request.

        Provide contact identifiers the same way you would for Search Contacts. Use the ``reveal`` field to control what
        gets unlocked (``emails``, ``phones``, or both).

        Up to 100 contacts per request.

        > **Billing:** Two charges apply — one for the search (``api_search``) and one per revealed field. The
            ``billing.creditsCharged`` in the response reflects the total.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/search-and-enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ContactsSearchAndEnrichRequest | V3ContactsSearchAndEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V3ContactsSearchAndEnrichResponse],
            error_mapper=search_and_enrich_contacts_error_mapper,
            request_options=request_options,
        )


class AsyncSearchEnrichWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_and_enrich_companies(
        self,
        body: V3CompaniesSearchAndEnrichRequest | V3CompaniesSearchAndEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3CompaniesSearchAndEnrichResponse, SearchAndEnrichCompaniesErrorBody]:
        """Find companies and reveal their full data in a single call. Combines Search and Enrich into one request.

        Provide company identifiers the same way you would for Search Companies. Up to 100 companies per request.

        > **Billing:** Same as Enrich Companies — charged per successful result via the ``reveal_company`` action.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/search-and-enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3CompaniesSearchAndEnrichRequest | V3CompaniesSearchAndEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3CompaniesSearchAndEnrichResponse],
            error_mapper=search_and_enrich_companies_error_mapper,
            request_options=request_options,
        )

    async def search_and_enrich_contacts(
        self,
        body: V3ContactsSearchAndEnrichRequest | V3ContactsSearchAndEnrichRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V3ContactsSearchAndEnrichResponse, SearchAndEnrichContactsErrorBody]:
        """Find contacts and reveal their full data in a single call. Combines Search and Enrich into one request.

        Provide contact identifiers the same way you would for Search Contacts. Use the ``reveal`` field to control what
        gets unlocked (``emails``, ``phones``, or both).

        Up to 100 contacts per request.

        > **Billing:** Two charges apply — one for the search (``api_search``) and one per revealed field. The
            ``billing.creditsCharged`` in the response reflects the total.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/search-and-enrich"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V3ContactsSearchAndEnrichRequest | V3ContactsSearchAndEnrichRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V3ContactsSearchAndEnrichResponse],
            error_mapper=search_and_enrich_contacts_error_mapper,
            request_options=request_options,
        )
