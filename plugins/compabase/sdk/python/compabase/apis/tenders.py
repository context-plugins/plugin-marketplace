from __future__ import annotations

from typing import Any

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.get_tenders_awards_error import GetTendersAwardsErrorBody, get_tenders_awards_error_mapper
from ..errors.get_tenders_error import GetTendersErrorBody, get_tenders_error_mapper
from ..models.enums.currency import CurrencyOrStr
from ..models.enums.industry import IndustryOrStr
from ..models.enums.kind import KindOrStr
from ..models.enums.limit import LimitOrInt
from ..models.enums.min import MinOrInt
from ..models.enums.source import SourceOrStr
from ..models.enums.status import StatusOrStr
from ..server.server import Server


class Tenders:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TendersWithRawResponse(client, server, auth)

    def get_tenders(
        self,
        *,
        status: StatusOrStr | None = None,
        industry: str | None = None,
        source: SourceOrStr | None = None,
        region: str | None = None,
        city: str | None = None,
        postal: str | None = None,
        kind: KindOrStr | None = None,
        value_min: float | None = None,
        value_max: float | None = None,
        currency: CurrencyOrStr | None = None,
        limit: LimitOrInt | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Polish public tenders — national notices from the Public Procurement Bulletin (BZP) and EU-threshold notices
        for Poland from TED — with contracting authority, value, deadlines and (for awarded notices) the winner.

        Args:
            status: Open tenders or awarded contracts.
            industry: CPV group or 2-digit CPV division.
            source: National (BZP) or EU (TED) notices.
            region: Voivodeship.
            city: City of the contracting authority.
            postal: Postal code prefix.
            kind: Contract type.
            value_min: Minimum estimated value (in ``currency``).
            value_max: Maximum estimated value (in ``currency``).
            currency: Currency of value filters and returned values.
            limit: Page size.
            offset: Zero-based offset (max 2000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page of tender notices.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_tenders(
                status=status,
                industry=industry,
                source=source,
                region=region,
                city=city,
                postal=postal,
                kind=kind,
                value_min=value_min,
                value_max=value_max,
                currency=currency,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    def get_tenders_awards(
        self,
        *,
        industry: IndustryOrStr | None = None,
        min_: MinOrInt | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Largest recent public contract awards in Poland with the winning company (KRS when matched).

        Args:
            industry: Industry filter.
            min_: Minimum contract value in PLN (default 1000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recent awards, largest first.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_tenders_awards(industry=industry, min_=min_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> TendersWithRawResponse:
        return self._with_raw_response


class AsyncTenders:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTendersWithRawResponse(client, server, auth)

    async def get_tenders(
        self,
        *,
        status: StatusOrStr | None = None,
        industry: str | None = None,
        source: SourceOrStr | None = None,
        region: str | None = None,
        city: str | None = None,
        postal: str | None = None,
        kind: KindOrStr | None = None,
        value_min: float | None = None,
        value_max: float | None = None,
        currency: CurrencyOrStr | None = None,
        limit: LimitOrInt | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Polish public tenders — national notices from the Public Procurement Bulletin (BZP) and EU-threshold notices
        for Poland from TED — with contracting authority, value, deadlines and (for awarded notices) the winner.

        Args:
            status: Open tenders or awarded contracts.
            industry: CPV group or 2-digit CPV division.
            source: National (BZP) or EU (TED) notices.
            region: Voivodeship.
            city: City of the contracting authority.
            postal: Postal code prefix.
            kind: Contract type.
            value_min: Minimum estimated value (in ``currency``).
            value_max: Maximum estimated value (in ``currency``).
            currency: Currency of value filters and returned values.
            limit: Page size.
            offset: Zero-based offset (max 2000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page of tender notices.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_tenders(
                status=status,
                industry=industry,
                source=source,
                region=region,
                city=city,
                postal=postal,
                kind=kind,
                value_min=value_min,
                value_max=value_max,
                currency=currency,
                limit=limit,
                offset=offset,
                request_options=request_options,
            ),
        )

    async def get_tenders_awards(
        self,
        *,
        industry: IndustryOrStr | None = None,
        min_: MinOrInt | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Largest recent public contract awards in Poland with the winning company (KRS when matched).

        Args:
            industry: Industry filter.
            min_: Minimum contract value in PLN (default 1000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recent awards, largest first.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_tenders_awards(
                industry=industry, min_=min_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTendersWithRawResponse:
        return self._with_raw_response


class TendersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_tenders(
        self,
        *,
        status: StatusOrStr | None = None,
        industry: str | None = None,
        source: SourceOrStr | None = None,
        region: str | None = None,
        city: str | None = None,
        postal: str | None = None,
        kind: KindOrStr | None = None,
        value_min: float | None = None,
        value_max: float | None = None,
        currency: CurrencyOrStr | None = None,
        limit: LimitOrInt | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetTendersErrorBody]:
        """Polish public tenders — national notices from the Public Procurement Bulletin (BZP) and EU-threshold notices
        for Poland from TED — with contracting authority, value, deadlines and (for awarded notices) the winner.

        Args:
            status: Open tenders or awarded contracts.
            industry: CPV group or 2-digit CPV division.
            source: National (BZP) or EU (TED) notices.
            region: Voivodeship.
            city: City of the contracting authority.
            postal: Postal code prefix.
            kind: Contract type.
            value_min: Minimum estimated value (in ``currency``).
            value_max: Maximum estimated value (in ``currency``).
            currency: Currency of value filters and returned values.
            limit: Page size.
            offset: Zero-based offset (max 2000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/tenders"),
            query_params=[
                param[StatusOrStr | None]("status", status),
                param[str | None]("industry", industry),
                param[SourceOrStr | None]("source", source),
                param[str | None]("region", region),
                param[str | None]("city", city),
                param[str | None]("postal", postal),
                param[KindOrStr | None]("kind", kind),
                param[float | None]("value_min", value_min),
                param[float | None]("value_max", value_max),
                param[CurrencyOrStr | None]("currency", currency),
                param[LimitOrInt | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_tenders_error_mapper,
            request_options=request_options,
        )

    def get_tenders_awards(
        self,
        *,
        industry: IndustryOrStr | None = None,
        min_: MinOrInt | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetTendersAwardsErrorBody]:
        """Largest recent public contract awards in Poland with the winning company (KRS when matched).

        Args:
            industry: Industry filter.
            min_: Minimum contract value in PLN (default 1000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/tenders/awards"),
            query_params=[param[IndustryOrStr | None]("industry", industry), param[MinOrInt | None]("min", min_)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_tenders_awards_error_mapper,
            request_options=request_options,
        )


class AsyncTendersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_tenders(
        self,
        *,
        status: StatusOrStr | None = None,
        industry: str | None = None,
        source: SourceOrStr | None = None,
        region: str | None = None,
        city: str | None = None,
        postal: str | None = None,
        kind: KindOrStr | None = None,
        value_min: float | None = None,
        value_max: float | None = None,
        currency: CurrencyOrStr | None = None,
        limit: LimitOrInt | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetTendersErrorBody]:
        """Polish public tenders — national notices from the Public Procurement Bulletin (BZP) and EU-threshold notices
        for Poland from TED — with contracting authority, value, deadlines and (for awarded notices) the winner.

        Args:
            status: Open tenders or awarded contracts.
            industry: CPV group or 2-digit CPV division.
            source: National (BZP) or EU (TED) notices.
            region: Voivodeship.
            city: City of the contracting authority.
            postal: Postal code prefix.
            kind: Contract type.
            value_min: Minimum estimated value (in ``currency``).
            value_max: Maximum estimated value (in ``currency``).
            currency: Currency of value filters and returned values.
            limit: Page size.
            offset: Zero-based offset (max 2000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/tenders"),
            query_params=[
                param[StatusOrStr | None]("status", status),
                param[str | None]("industry", industry),
                param[SourceOrStr | None]("source", source),
                param[str | None]("region", region),
                param[str | None]("city", city),
                param[str | None]("postal", postal),
                param[KindOrStr | None]("kind", kind),
                param[float | None]("value_min", value_min),
                param[float | None]("value_max", value_max),
                param[CurrencyOrStr | None]("currency", currency),
                param[LimitOrInt | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_tenders_error_mapper,
            request_options=request_options,
        )

    async def get_tenders_awards(
        self,
        *,
        industry: IndustryOrStr | None = None,
        min_: MinOrInt | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetTendersAwardsErrorBody]:
        """Largest recent public contract awards in Poland with the winning company (KRS when matched).

        Args:
            industry: Industry filter.
            min_: Minimum contract value in PLN (default 1000000).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/tenders/awards"),
            query_params=[param[IndustryOrStr | None]("industry", industry), param[MinOrInt | None]("min", min_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_tenders_awards_error_mapper,
            request_options=request_options,
        )
