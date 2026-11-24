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
from ..errors.get_company_lookalikes_error import GetCompanyLookalikesErrorBody, get_company_lookalikes_error_mapper
from ..errors.get_contact_lookalikes_error import GetContactLookalikesErrorBody, get_contact_lookalikes_error_mapper
from ..errors.post_v3_lookalike_companies_error import (
    PostV3LookalikeCompaniesErrorBody,
    post_v3_lookalike_companies_error_mapper,
)
from ..errors.post_v3_lookalike_contacts_error import (
    PostV3LookalikeContactsErrorBody,
    post_v3_lookalike_contacts_error_mapper,
)
from ..models.company_lookalikes_request import CompanyLookalikesRequest, CompanyLookalikesRequestDict
from ..models.company_lookalikes_request2 import CompanyLookalikesRequest2, CompanyLookalikesRequest2Dict
from ..models.company_lookalikes_response import CompanyLookalikesResponse
from ..models.company_lookalikes_response2 import CompanyLookalikesResponse2
from ..models.contact_lookalikes_request import ContactLookalikesRequest, ContactLookalikesRequestDict
from ..models.contact_lookalikes_request2 import ContactLookalikesRequest2, ContactLookalikesRequest2Dict
from ..models.contact_lookalikes_response import ContactLookalikesResponse
from ..models.contact_lookalikes_response2 import ContactLookalikesResponse2
from ..server.server import Server


class Lookalikes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LookalikesWithRawResponse(client, server, auth)

    def get_company_lookalikes(
        self,
        body: CompanyLookalikesRequest | CompanyLookalikesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanyLookalikesResponse:
        """Find companies similar to a set of seed companies using AI-powered recommendations.

        Provide 5-100 seed companies via domains or LinkedIn URLs. The API returns companies with similar size,
        industry, and profile.

        **Pagination without duplicates:** On your first request, omit ``dedupeSessionId`` — the server generates one
        and returns it. Pass it on every subsequent request to get more results without repeating companies already
        seen. Sessions are retained for 30 days.

        Use the ``exclude`` field to always filter out specific companies (e.g. existing customers or competitors).

        Results are lightweight previews. Use Enrich Companies with the returned ``id`` to get full firmographic data.

        > **Billing:** Charged per result via the ``lookalikeCompany`` action.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. See
            Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved company lookalikes

        Raises:
            ApiError: Bad request - invalid input data Insufficient credits Forbidden - account inactive, V3 access not
                enabled, or plan does not include this feature dedupeSessionId is invalid or expired Internal server
                error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_company_lookalikes(body, request_options=request_options))

    def get_contact_lookalikes(
        self,
        body: ContactLookalikesRequest | ContactLookalikesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactLookalikesResponse:
        """Find contacts similar to a set of seed contacts using AI-powered recommendations.

        Provide 5-100 seed contacts via LinkedIn URLs, emails, Lusha IDs, or name + company. The API returns contacts
        who share similar roles, seniority, and company profiles.

        **Pagination without duplicates:** On your first request, omit ``dedupeSessionId`` — the server generates one
        and returns it. Pass it on every subsequent request to get more results without repeating contacts already seen.
        Sessions are retained for 30 days.

        Use the ``exclude`` field to always filter out specific contacts (e.g. existing customers).

        Results are lightweight previews. Use Enrich Contacts with the returned ``id`` to get emails and phones.

        > **Billing:** Charged per result via the ``lookalikeContact`` action.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. See
            Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved contact lookalikes

        Raises:
            ApiError: Bad request - invalid input data Insufficient credits Forbidden - account inactive, V3 access not
                enabled, or plan does not include this feature dedupeSessionId is invalid or expired Internal server
                error ``error`` is ``ErrorResponse | DedupeSessionInvalidError | RawError``."""
        return unwrap(self._with_raw_response.get_contact_lookalikes(body, request_options=request_options))

    def post_v3_lookalike_companies(
        self,
        body: CompanyLookalikesRequest2 | CompanyLookalikesRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompanyLookalikesResponse2:
        """Returns company lookalikes based on seed companies.

        *Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/companies**

        #### How It Works

        **First Request (Start a New Run):**
        - Do not send ``dedupeSessionId``
        - Server generates one and returns it in the response
        - Use returned ``dedupeSessionId`` for subsequent "get more" requests

        **Subsequent Requests ("Get More"):**
        - Send the returned ``dedupeSessionId`` to fetch more results without duplicates
        - Server uses ``dedupeSessionId`` to deduplicate companies already returned
        - Session history retained for 30 days from last activity (sliding window)
        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved company lookalikes

        Raises:
            ApiError: Bad request - invalid input data Insufficient credits Forbidden - account inactive or feature not
                available dedupeSessionId is invalid or expired Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.post_v3_lookalike_companies(body, request_options=request_options))

    def post_v3_lookalike_contacts(
        self,
        body: ContactLookalikesRequest2 | ContactLookalikesRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactLookalikesResponse2:
        """Returns contact lookalikes based on seed contacts.

        *Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/contacts**

        #### How It Works

        **First Request (Start a New Run):**
        - Do not send ``dedupeSessionId``
        - Server generates one and returns it in the response
        - Use returned ``dedupeSessionId`` for subsequent "get more" requests

        **Subsequent Requests ("Get More"):**
        - Send the returned ``dedupeSessionId`` to fetch more results without duplicates
        - Server dedupes against all contacts previously returned for the ``dedupeSessionId``
        - User-provided ``exclude.*`` is applied on every request and combined with server-side dedupe
        - Session history retained for 30 days from last activity (sliding window)
        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved contact lookalikes

        Raises:
            ApiError: Bad request - invalid input data Insufficient credits Forbidden - account inactive or feature not
                available dedupeSessionId is invalid or expired Internal server error ``error`` is ``ErrorResponse |
                DedupeSessionInvalidError | RawError``."""
        return unwrap(self._with_raw_response.post_v3_lookalike_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> LookalikesWithRawResponse:
        return self._with_raw_response


class AsyncLookalikes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLookalikesWithRawResponse(client, server, auth)

    async def get_company_lookalikes(
        self,
        body: CompanyLookalikesRequest | CompanyLookalikesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanyLookalikesResponse:
        """Find companies similar to a set of seed companies using AI-powered recommendations.

        Provide 5-100 seed companies via domains or LinkedIn URLs. The API returns companies with similar size,
        industry, and profile.

        **Pagination without duplicates:** On your first request, omit ``dedupeSessionId`` — the server generates one
        and returns it. Pass it on every subsequent request to get more results without repeating companies already
        seen. Sessions are retained for 30 days.

        Use the ``exclude`` field to always filter out specific companies (e.g. existing customers or competitors).

        Results are lightweight previews. Use Enrich Companies with the returned ``id`` to get full firmographic data.

        > **Billing:** Charged per result via the ``lookalikeCompany`` action.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. See
            Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved company lookalikes

        Raises:
            ApiError: Bad request - invalid input data Insufficient credits Forbidden - account inactive, V3 access not
                enabled, or plan does not include this feature dedupeSessionId is invalid or expired Internal server
                error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_company_lookalikes(body, request_options=request_options))

    async def get_contact_lookalikes(
        self,
        body: ContactLookalikesRequest | ContactLookalikesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactLookalikesResponse:
        """Find contacts similar to a set of seed contacts using AI-powered recommendations.

        Provide 5-100 seed contacts via LinkedIn URLs, emails, Lusha IDs, or name + company. The API returns contacts
        who share similar roles, seniority, and company profiles.

        **Pagination without duplicates:** On your first request, omit ``dedupeSessionId`` — the server generates one
        and returns it. Pass it on every subsequent request to get more results without repeating contacts already seen.
        Sessions are retained for 30 days.

        Use the ``exclude`` field to always filter out specific contacts (e.g. existing customers).

        Results are lightweight previews. Use Enrich Contacts with the returned ``id`` to get emails and phones.

        > **Billing:** Charged per result via the ``lookalikeContact`` action.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. See
            Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved contact lookalikes

        Raises:
            ApiError: Bad request - invalid input data Insufficient credits Forbidden - account inactive, V3 access not
                enabled, or plan does not include this feature dedupeSessionId is invalid or expired Internal server
                error ``error`` is ``ErrorResponse | DedupeSessionInvalidError | RawError``."""
        return unwrap(await self._with_raw_response.get_contact_lookalikes(body, request_options=request_options))

    async def post_v3_lookalike_companies(
        self,
        body: CompanyLookalikesRequest2 | CompanyLookalikesRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompanyLookalikesResponse2:
        """Returns company lookalikes based on seed companies.

        *Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/companies**

        #### How It Works

        **First Request (Start a New Run):**
        - Do not send ``dedupeSessionId``
        - Server generates one and returns it in the response
        - Use returned ``dedupeSessionId`` for subsequent "get more" requests

        **Subsequent Requests ("Get More"):**
        - Send the returned ``dedupeSessionId`` to fetch more results without duplicates
        - Server uses ``dedupeSessionId`` to deduplicate companies already returned
        - Session history retained for 30 days from last activity (sliding window)
        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved company lookalikes

        Raises:
            ApiError: Bad request - invalid input data Insufficient credits Forbidden - account inactive or feature not
                available dedupeSessionId is invalid or expired Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.post_v3_lookalike_companies(body, request_options=request_options))

    async def post_v3_lookalike_contacts(
        self,
        body: ContactLookalikesRequest2 | ContactLookalikesRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactLookalikesResponse2:
        """Returns contact lookalikes based on seed contacts.

        *Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/contacts**

        #### How It Works

        **First Request (Start a New Run):**
        - Do not send ``dedupeSessionId``
        - Server generates one and returns it in the response
        - Use returned ``dedupeSessionId`` for subsequent "get more" requests

        **Subsequent Requests ("Get More"):**
        - Send the returned ``dedupeSessionId`` to fetch more results without duplicates
        - Server dedupes against all contacts previously returned for the ``dedupeSessionId``
        - User-provided ``exclude.*`` is applied on every request and combined with server-side dedupe
        - Session history retained for 30 days from last activity (sliding window)
        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved contact lookalikes

        Raises:
            ApiError: Bad request - invalid input data Insufficient credits Forbidden - account inactive or feature not
                available dedupeSessionId is invalid or expired Internal server error ``error`` is ``ErrorResponse |
                DedupeSessionInvalidError | RawError``."""
        return unwrap(await self._with_raw_response.post_v3_lookalike_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncLookalikesWithRawResponse:
        return self._with_raw_response


class LookalikesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_company_lookalikes(
        self,
        body: CompanyLookalikesRequest | CompanyLookalikesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyLookalikesResponse, GetCompanyLookalikesErrorBody]:
        """Find companies similar to a set of seed companies using AI-powered recommendations.

        Provide 5-100 seed companies via domains or LinkedIn URLs. The API returns companies with similar size,
        industry, and profile.

        **Pagination without duplicates:** On your first request, omit ``dedupeSessionId`` — the server generates one
        and returns it. Pass it on every subsequent request to get more results without repeating companies already
        seen. Sessions are retained for 30 days.

        Use the ``exclude`` field to always filter out specific companies (e.g. existing customers or competitors).

        Results are lightweight previews. Use Enrich Companies with the returned ``id`` to get full firmographic data.

        > **Billing:** Charged per result via the ``lookalikeCompany`` action.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. See
            Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/lookalike"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyLookalikesRequest | CompanyLookalikesRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CompanyLookalikesResponse],
            error_mapper=get_company_lookalikes_error_mapper,
            request_options=request_options,
        )

    def get_contact_lookalikes(
        self,
        body: ContactLookalikesRequest | ContactLookalikesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactLookalikesResponse, GetContactLookalikesErrorBody]:
        """Find contacts similar to a set of seed contacts using AI-powered recommendations.

        Provide 5-100 seed contacts via LinkedIn URLs, emails, Lusha IDs, or name + company. The API returns contacts
        who share similar roles, seniority, and company profiles.

        **Pagination without duplicates:** On your first request, omit ``dedupeSessionId`` — the server generates one
        and returns it. Pass it on every subsequent request to get more results without repeating contacts already seen.
        Sessions are retained for 30 days.

        Use the ``exclude`` field to always filter out specific contacts (e.g. existing customers).

        Results are lightweight previews. Use Enrich Contacts with the returned ``id`` to get emails and phones.

        > **Billing:** Charged per result via the ``lookalikeContact`` action.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. See
            Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/lookalike"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactLookalikesRequest | ContactLookalikesRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactLookalikesResponse],
            error_mapper=get_contact_lookalikes_error_mapper,
            request_options=request_options,
        )

    def post_v3_lookalike_companies(
        self,
        body: CompanyLookalikesRequest2 | CompanyLookalikesRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyLookalikesResponse2, PostV3LookalikeCompaniesErrorBody]:
        """Returns company lookalikes based on seed companies.

        *Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/companies**

        #### How It Works

        **First Request (Start a New Run):**
        - Do not send ``dedupeSessionId``
        - Server generates one and returns it in the response
        - Use returned ``dedupeSessionId`` for subsequent "get more" requests

        **Subsequent Requests ("Get More"):**
        - Send the returned ``dedupeSessionId`` to fetch more results without duplicates
        - Server uses ``dedupeSessionId`` to deduplicate companies already returned
        - Session history retained for 30 days from last activity (sliding window)
        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/lookalike/companies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyLookalikesRequest2 | CompanyLookalikesRequest2Dict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CompanyLookalikesResponse2],
            error_mapper=post_v3_lookalike_companies_error_mapper,
            request_options=request_options,
        )

    def post_v3_lookalike_contacts(
        self,
        body: ContactLookalikesRequest2 | ContactLookalikesRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactLookalikesResponse2, PostV3LookalikeContactsErrorBody]:
        """Returns contact lookalikes based on seed contacts.

        *Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/contacts**

        #### How It Works

        **First Request (Start a New Run):**
        - Do not send ``dedupeSessionId``
        - Server generates one and returns it in the response
        - Use returned ``dedupeSessionId`` for subsequent "get more" requests

        **Subsequent Requests ("Get More"):**
        - Send the returned ``dedupeSessionId`` to fetch more results without duplicates
        - Server dedupes against all contacts previously returned for the ``dedupeSessionId``
        - User-provided ``exclude.*`` is applied on every request and combined with server-side dedupe
        - Session history retained for 30 days from last activity (sliding window)
        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/lookalike/contacts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactLookalikesRequest2 | ContactLookalikesRequest2Dict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ContactLookalikesResponse2],
            error_mapper=post_v3_lookalike_contacts_error_mapper,
            request_options=request_options,
        )


class AsyncLookalikesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_company_lookalikes(
        self,
        body: CompanyLookalikesRequest | CompanyLookalikesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyLookalikesResponse, GetCompanyLookalikesErrorBody]:
        """Find companies similar to a set of seed companies using AI-powered recommendations.

        Provide 5-100 seed companies via domains or LinkedIn URLs. The API returns companies with similar size,
        industry, and profile.

        **Pagination without duplicates:** On your first request, omit ``dedupeSessionId`` — the server generates one
        and returns it. Pass it on every subsequent request to get more results without repeating companies already
        seen. Sessions are retained for 30 days.

        Use the ``exclude`` field to always filter out specific companies (e.g. existing customers or competitors).

        Results are lightweight previews. Use Enrich Companies with the returned ``id`` to get full firmographic data.

        > **Billing:** Charged per result via the ``lookalikeCompany`` action.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. See
            Companies Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/lookalike"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyLookalikesRequest | CompanyLookalikesRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CompanyLookalikesResponse],
            error_mapper=get_company_lookalikes_error_mapper,
            request_options=request_options,
        )

    async def get_contact_lookalikes(
        self,
        body: ContactLookalikesRequest | ContactLookalikesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactLookalikesResponse, GetContactLookalikesErrorBody]:
        """Find contacts similar to a set of seed contacts using AI-powered recommendations.

        Provide 5-100 seed contacts via LinkedIn URLs, emails, Lusha IDs, or name + company. The API returns contacts
        who share similar roles, seniority, and company profiles.

        **Pagination without duplicates:** On your first request, omit ``dedupeSessionId`` — the server generates one
        and returns it. Pass it on every subsequent request to get more results without repeating contacts already seen.
        Sessions are retained for 30 days.

        Use the ``exclude`` field to always filter out specific contacts (e.g. existing customers).

        Results are lightweight previews. Use Enrich Contacts with the returned ``id`` to get emails and phones.

        > **Billing:** Charged per result via the ``lookalikeContact`` action.

        > **Persisting to a table:** Pass ``tableId`` to also persist matching results into an existing table. See
            Contacts Tables.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/contacts/lookalike"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactLookalikesRequest | ContactLookalikesRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactLookalikesResponse],
            error_mapper=get_contact_lookalikes_error_mapper,
            request_options=request_options,
        )

    async def post_v3_lookalike_companies(
        self,
        body: CompanyLookalikesRequest2 | CompanyLookalikesRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompanyLookalikesResponse2, PostV3LookalikeCompaniesErrorBody]:
        """Returns company lookalikes based on seed companies.

        *Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/companies**

        #### How It Works

        **First Request (Start a New Run):**
        - Do not send ``dedupeSessionId``
        - Server generates one and returns it in the response
        - Use returned ``dedupeSessionId`` for subsequent "get more" requests

        **Subsequent Requests ("Get More"):**
        - Send the returned ``dedupeSessionId`` to fetch more results without duplicates
        - Server uses ``dedupeSessionId`` to deduplicate companies already returned
        - Session history retained for 30 days from last activity (sliding window)
        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/lookalike/companies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompanyLookalikesRequest2 | CompanyLookalikesRequest2Dict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CompanyLookalikesResponse2],
            error_mapper=post_v3_lookalike_companies_error_mapper,
            request_options=request_options,
        )

    async def post_v3_lookalike_contacts(
        self,
        body: ContactLookalikesRequest2 | ContactLookalikesRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactLookalikesResponse2, PostV3LookalikeContactsErrorBody]:
        """Returns contact lookalikes based on seed contacts.

        *Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/contacts**

        #### How It Works

        **First Request (Start a New Run):**
        - Do not send ``dedupeSessionId``
        - Server generates one and returns it in the response
        - Use returned ``dedupeSessionId`` for subsequent "get more" requests

        **Subsequent Requests ("Get More"):**
        - Send the returned ``dedupeSessionId`` to fetch more results without duplicates
        - Server dedupes against all contacts previously returned for the ``dedupeSessionId``
        - User-provided ``exclude.*`` is applied on every request and combined with server-side dedupe
        - Session history retained for 30 days from last activity (sliding window)
        ---

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/lookalike/contacts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactLookalikesRequest2 | ContactLookalikesRequest2Dict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ContactLookalikesResponse2],
            error_mapper=post_v3_lookalike_contacts_error_mapper,
            request_options=request_options,
        )
