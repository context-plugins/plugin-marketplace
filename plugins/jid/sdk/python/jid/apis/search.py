from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.search_businesses_error import SearchBusinessesErrorBody, search_businesses_error_mapper
from ..models.search_response import SearchResponse
from ..server.server import Server


class Search:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SearchWithRawResponse(client, server)

    def search_businesses(
        self, q: str, *, country: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> SearchResponse:
        """Free (not a check). Identifiers first (FEI, LEI, CIK, DUNS, NDC labeler, USDOT, NPI, EIN, UEI, state numbers,
        French SIREN/SIRET), then name: exact, begins with, contains, similar. A SIREN or SIRET no file holds is looked
        up live on SIRENE (France) and becomes a file; with country=FR a name is also searched on SIRENE (up to 5
        business units, filed on demand, listed first).

        Args:
            q: Value sent with the request.
            country: ISO 3166-1 alpha-2. FR also searches the French SIRENE register live.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Candidates

        Raises:
            ApiError: Error Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.search_businesses(q, country=country, request_options=request_options))

    @property
    def with_raw_response(self) -> SearchWithRawResponse:
        return self._with_raw_response


class AsyncSearch:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSearchWithRawResponse(client, server)

    async def search_businesses(
        self, q: str, *, country: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SearchResponse:
        """Free (not a check). Identifiers first (FEI, LEI, CIK, DUNS, NDC labeler, USDOT, NPI, EIN, UEI, state numbers,
        French SIREN/SIRET), then name: exact, begins with, contains, similar. A SIREN or SIRET no file holds is looked
        up live on SIRENE (France) and becomes a file; with country=FR a name is also searched on SIRENE (up to 5
        business units, filed on demand, listed first).

        Args:
            q: Value sent with the request.
            country: ISO 3166-1 alpha-2. FR also searches the French SIRENE register live.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Candidates

        Raises:
            ApiError: Error Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.search_businesses(q, country=country, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSearchWithRawResponse:
        return self._with_raw_response


class SearchWithRawResponse(BaseRawResponse[RawClient, Server]):
    def search_businesses(
        self, q: str, *, country: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResponse, SearchBusinessesErrorBody]:
        """Free (not a check). Identifiers first (FEI, LEI, CIK, DUNS, NDC labeler, USDOT, NPI, EIN, UEI, state numbers,
        French SIREN/SIRET), then name: exact, begins with, contains, similar. A SIREN or SIRET no file holds is looked
        up live on SIRENE (France) and becomes a file; with country=FR a name is also searched on SIRENE (up to 5
        business units, filed on demand, listed first).

        Args:
            q: Value sent with the request.
            country: ISO 3166-1 alpha-2. FR also searches the French SIRENE register live.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/search"),
            query_params=[param[str]("q", q), param[str | None]("country", country)],
            decoder=json_decoder[SearchResponse],
            error_mapper=search_businesses_error_mapper,
            request_options=request_options,
        )


class AsyncSearchWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def search_businesses(
        self, q: str, *, country: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResponse, SearchBusinessesErrorBody]:
        """Free (not a check). Identifiers first (FEI, LEI, CIK, DUNS, NDC labeler, USDOT, NPI, EIN, UEI, state numbers,
        French SIREN/SIRET), then name: exact, begins with, contains, similar. A SIREN or SIRET no file holds is looked
        up live on SIRENE (France) and becomes a file; with country=FR a name is also searched on SIRENE (up to 5
        business units, filed on demand, listed first).

        Args:
            q: Value sent with the request.
            country: ISO 3166-1 alpha-2. FR also searches the French SIRENE register live.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/search"),
            query_params=[param[str]("q", q), param[str | None]("country", country)],
            decoder=async_json_decoder[SearchResponse],
            error_mapper=search_businesses_error_mapper,
            request_options=request_options,
        )
