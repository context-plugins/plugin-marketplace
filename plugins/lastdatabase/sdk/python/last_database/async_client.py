from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseLastDatabaseClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiResult,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    no_auth,
    param,
    unwrap,
)
from .errors.search_leads_error import SearchLeadsErrorBody, search_leads_error_mapper
from .models.enums.type import Type, TypeOrStr
from .models.lead_search_response import LeadSearchResponse
from .server.server import Server


class AsyncLastDatabaseClient(BaseLastDatabaseClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "LastDatabaseClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def with_raw_response(self) -> AsyncApiWithRawResponse:
        return AsyncApiWithRawResponse(self._raw_client, self._server, self._auth)

    async def search_leads(
        self,
        *,
        type_: TypeOrStr | None = Type.EMAIL,
        country: str | None = None,
        city: str | None = None,
        industry: str | None = None,
        keyword: str | None = None,
        limit: int | None = 25,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LeadSearchResponse:
        """Search email, phone, or fax lead inventory.

        The default lead type is email.

        For phone searches, the public industry parameter maps to the phone category field.

        The current endpoint does not expose page, offset, or cursor pagination.

        Args:
            type_: Lead inventory type. Defaults to email. The current implementation falls back to email when an
                unrecognized type value is supplied.
            country: Filter results by country.
            city: Filter results by city.
            industry: Filter by industry. For phone inventory, this parameter maps to the phone category field.
            keyword: Keyword filter. Email keyword matching covers country, city, industry, and company name. Phone
                keyword matching covers country, city, and category. Fax keyword matching covers country, city,
                industry, and company name.
            limit: Number of records to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lead search completed successfully.

        Raises:
            ApiError: Missing or invalid API token. Daily API request limit exceeded. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self.with_raw_response.search_leads(
                type_=type_,
                country=country,
                city=city,
                industry=industry,
                keyword=keyword,
                limit=limit,
                request_options=request_options,
            ),
        )

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


class AsyncApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_leads(
        self,
        *,
        type_: TypeOrStr | None = Type.EMAIL,
        country: str | None = None,
        city: str | None = None,
        industry: str | None = None,
        keyword: str | None = None,
        limit: int | None = 25,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LeadSearchResponse, SearchLeadsErrorBody]:
        """Search email, phone, or fax lead inventory.

        The default lead type is email.

        For phone searches, the public industry parameter maps to the phone category field.

        The current endpoint does not expose page, offset, or cursor pagination.

        Args:
            type_: Lead inventory type. Defaults to email. The current implementation falls back to email when an
                unrecognized type value is supplied.
            country: Filter results by country.
            city: Filter results by city.
            industry: Filter by industry. For phone inventory, this parameter maps to the phone category field.
            keyword: Keyword filter. Email keyword matching covers country, city, industry, and company name. Phone
                keyword matching covers country, city, and category. Fax keyword matching covers country, city,
                industry, and company name.
            limit: Number of records to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/leads/search"),
            query_params=[
                param[TypeOrStr | None]("type", type_),
                param[str | None]("country", country),
                param[str | None]("city", city),
                param[str | None]("industry", industry),
                param[str | None]("keyword", keyword),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[LeadSearchResponse],
            error_mapper=search_leads_error_mapper,
            request_options=request_options,
        )


AsyncClient = AsyncLastDatabaseClient
