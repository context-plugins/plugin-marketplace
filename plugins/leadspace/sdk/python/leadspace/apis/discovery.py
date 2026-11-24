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
from ..errors.discover_company_contacts_error import (
    DiscoverCompanyContactsErrorBody,
    discover_company_contacts_error_mapper,
)
from ..models.discovery_accepted import DiscoveryAccepted
from ..models.discovery_request import DiscoveryRequest, DiscoveryRequestDict
from ..server.server import Server


class Discovery:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DiscoveryWithRawResponse(client, server, auth)

    def discover_company_contacts(
        self, body: DiscoveryRequest | DiscoveryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> DiscoveryAccepted:
        """Expands up to 500 accounts into ranked contacts. Either companyName or companyWebsite is mandatory for each
        account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk job successfully accepted

        Raises:
            ApiError: Request fails basic input validation or JSON format is invalid Unauthorized request (wrong
                credentials or credentials have expired) Program ID is invalid Insufficient credits to process this
                request Server error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.discover_company_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> DiscoveryWithRawResponse:
        return self._with_raw_response


class AsyncDiscovery:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDiscoveryWithRawResponse(client, server, auth)

    async def discover_company_contacts(
        self, body: DiscoveryRequest | DiscoveryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DiscoveryAccepted:
        """Expands up to 500 accounts into ranked contacts. Either companyName or companyWebsite is mandatory for each
        account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk job successfully accepted

        Raises:
            ApiError: Request fails basic input validation or JSON format is invalid Unauthorized request (wrong
                credentials or credentials have expired) Program ID is invalid Insufficient credits to process this
                request Server error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.discover_company_contacts(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDiscoveryWithRawResponse:
        return self._with_raw_response


class DiscoveryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def discover_company_contacts(
        self, body: DiscoveryRequest | DiscoveryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DiscoveryAccepted, DiscoverCompanyContactsErrorBody]:
        """Expands up to 500 accounts into ranked contacts. Either companyName or companyWebsite is mandatory for each
        account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/expansion/company"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DiscoveryRequest | DiscoveryRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DiscoveryAccepted],
            error_mapper=discover_company_contacts_error_mapper,
            request_options=request_options,
        )


class AsyncDiscoveryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def discover_company_contacts(
        self, body: DiscoveryRequest | DiscoveryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DiscoveryAccepted, DiscoverCompanyContactsErrorBody]:
        """Expands up to 500 accounts into ranked contacts. Either companyName or companyWebsite is mandatory for each
        account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/expansion/company"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DiscoveryRequest | DiscoveryRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DiscoveryAccepted],
            error_mapper=discover_company_contacts_error_mapper,
            request_options=request_options,
        )
