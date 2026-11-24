from __future__ import annotations

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
from ..errors.decode_plate_error import DecodePlateErrorBody, decode_plate_error_mapper
from ..errors.decode_plate_v2_error import DecodePlateV2ErrorBody, decode_plate_v2_error_mapper
from ..errors.decode_us_plate_error import DecodeUsPlateErrorBody, decode_us_plate_error_mapper
from ..models.enums.decode_vin import DecodeVinOrStr
from ..models.enums.format import Format, FormatOrStr
from ..models.platedecoder_response import PlatedecoderResponse
from ..models.v1_us_platedecoder_response import V1UsPlatedecoderResponse
from ..models.v2_platedecoder_response import V2PlatedecoderResponse
from ..server.server import Server


class PlateDecoder:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PlateDecoderWithRawResponse(client, server, auth)

    def decode_plate(
        self,
        plate: str,
        state: str,
        *,
        country: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PlatedecoderResponse:
        """Decode a license plate into vehicle data. Internally proxies to the v2 plate decoder. The ``state`` parameter
        accepts a two-letter US state code, Australian state, or one of the legacy country codes ``BR``, ``UK``, ``IR``,
        ``IT``, ``ES``, ``IND``, ``MX``, ``NZ``.

        Args:
            plate: The vehicle registration number or license plate number.
            state: The two letter state code (US) such as ``CA`` or ``NY``, Australian state, or Brazil ``BR``, United
                Kingdom ``UK``, Ireland ``IR``, Italy ``IT``, Spain ``ES``, India ``IND``, Mexico ``MX``, New Zealand
                ``NZ``.
            country: Country code, e.g. Australia ``AU``. Optional for ``US``.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plate decoded.

        Raises:
            ApiError: Missing plate or state. Missing API key, unknown/disabled API key, or inactive account. No data
                found for this plate (passed through from the v2 decoder). API usage limit exceeded for the current
                billing period. Upstream plate decoder request failed. Upstream plate decoder request timed out.
                ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            self._with_raw_response.decode_plate(
                plate, state, country=country, format_=format_, request_options=request_options
            ),
        )

    def decode_plate_v2(
        self,
        plate: str,
        *,
        country: str | None = None,
        state: str | None = None,
        district: str | None = None,
        require_vin: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V2PlatedecoderResponse:
        """Decode a license plate into vehicle data across 60+ supported countries. ``country`` is an ISO 3166-1 alpha-2
        code (optional for ``US``). ``state`` is required for ``US``, ``AU`` and ``CA``. For Pakistan (``PK``) a
        ``district`` is also required for the Khyber-Pakhtunkhwa province.

        For Spain (``ES``), set ``require_vin=true`` to always include a VIN. Additional charges apply: when
        ``require_vin=true``, the request is billed 2x and usage counts 2x.

        Args:
            plate: The vehicle registration number or license plate number.
            country: ISO 3166-1 alpha-2 country code such as ``AU`` for Australia or ``ZA`` for South Africa. Optional
                for ``US``.
            state: The two letter state code (US) such as ``CA`` or ``NY``, an Australian state (e.g. ``NSW``, ``VIC``),
                or a Canadian province (e.g. ``ON``). Required only for ``US``, ``AU`` and ``CA``.
            district: The district of the vehicle registration number. Required for Pakistan (``PK``) plates registered
                in the Khyber-Pakhtunkhwa province.
            require_vin: Only supported when ``country=ES``. Set to ``true`` to always include a VIN. The request is
                billed 2x and usage counts 2x.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plate decoded.

        Raises:
            ApiError: Missing plate, or ``require_vin`` used with a country other than ES. Missing API key,
                unknown/disabled API key, or inactive account. Invalid state/country/district, or no data found for this
                plate. API usage limit exceeded for the current billing period. ``error`` is ``Error | UsageLimitError |
                RawError``."""
        return unwrap(
            self._with_raw_response.decode_plate_v2(
                plate,
                country=country,
                state=state,
                district=district,
                require_vin=require_vin,
                request_options=request_options,
            ),
        )

    def decode_us_plate(
        self,
        plate: str,
        state: str,
        *,
        decode_vin: DecodeVinOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1UsPlatedecoderResponse:
        """Look up a US vehicle by license plate number and state. Returns the VIN, year, make, model, trim, engine,
        body style, transmission, drive type, fuel type and exterior color. Optionally decodes the VIN to include the
        full vehicle specifications object. Accepts plates from all 50 US states, the District of Columbia (DC) and
        Puerto Rico (PR).

        This endpoint is **not** available on the free Sandbox tier.

        Args:
            plate: The vehicle registration number or license plate number.
            state: Two-letter abbreviation for one of the 50 US states, the District of Columbia (``DC``), or Puerto
                Rico (``PR``).
            decode_vin: Set to ``true`` or ``1`` to decode the resolved VIN and include a ``vehicle_specs`` object in
                the response (identical in shape to the Specifications endpoint response).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plate decoded successfully.

        Raises:
            ApiError: Missing plate, state, or API key. Missing API key, unknown/disabled API key, or inactive account.
                No data found for this plate/state combination. API usage limit exceeded for the current billing period.
                Internal server error. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            self._with_raw_response.decode_us_plate(
                plate, state, decode_vin=decode_vin, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PlateDecoderWithRawResponse:
        return self._with_raw_response


class AsyncPlateDecoder:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPlateDecoderWithRawResponse(client, server, auth)

    async def decode_plate(
        self,
        plate: str,
        state: str,
        *,
        country: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PlatedecoderResponse:
        """Decode a license plate into vehicle data. Internally proxies to the v2 plate decoder. The ``state`` parameter
        accepts a two-letter US state code, Australian state, or one of the legacy country codes ``BR``, ``UK``, ``IR``,
        ``IT``, ``ES``, ``IND``, ``MX``, ``NZ``.

        Args:
            plate: The vehicle registration number or license plate number.
            state: The two letter state code (US) such as ``CA`` or ``NY``, Australian state, or Brazil ``BR``, United
                Kingdom ``UK``, Ireland ``IR``, Italy ``IT``, Spain ``ES``, India ``IND``, Mexico ``MX``, New Zealand
                ``NZ``.
            country: Country code, e.g. Australia ``AU``. Optional for ``US``.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plate decoded.

        Raises:
            ApiError: Missing plate or state. Missing API key, unknown/disabled API key, or inactive account. No data
                found for this plate (passed through from the v2 decoder). API usage limit exceeded for the current
                billing period. Upstream plate decoder request failed. Upstream plate decoder request timed out.
                ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            await self._with_raw_response.decode_plate(
                plate, state, country=country, format_=format_, request_options=request_options
            ),
        )

    async def decode_plate_v2(
        self,
        plate: str,
        *,
        country: str | None = None,
        state: str | None = None,
        district: str | None = None,
        require_vin: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V2PlatedecoderResponse:
        """Decode a license plate into vehicle data across 60+ supported countries. ``country`` is an ISO 3166-1 alpha-2
        code (optional for ``US``). ``state`` is required for ``US``, ``AU`` and ``CA``. For Pakistan (``PK``) a
        ``district`` is also required for the Khyber-Pakhtunkhwa province.

        For Spain (``ES``), set ``require_vin=true`` to always include a VIN. Additional charges apply: when
        ``require_vin=true``, the request is billed 2x and usage counts 2x.

        Args:
            plate: The vehicle registration number or license plate number.
            country: ISO 3166-1 alpha-2 country code such as ``AU`` for Australia or ``ZA`` for South Africa. Optional
                for ``US``.
            state: The two letter state code (US) such as ``CA`` or ``NY``, an Australian state (e.g. ``NSW``, ``VIC``),
                or a Canadian province (e.g. ``ON``). Required only for ``US``, ``AU`` and ``CA``.
            district: The district of the vehicle registration number. Required for Pakistan (``PK``) plates registered
                in the Khyber-Pakhtunkhwa province.
            require_vin: Only supported when ``country=ES``. Set to ``true`` to always include a VIN. The request is
                billed 2x and usage counts 2x.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plate decoded.

        Raises:
            ApiError: Missing plate, or ``require_vin`` used with a country other than ES. Missing API key,
                unknown/disabled API key, or inactive account. Invalid state/country/district, or no data found for this
                plate. API usage limit exceeded for the current billing period. ``error`` is ``Error | UsageLimitError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.decode_plate_v2(
                plate,
                country=country,
                state=state,
                district=district,
                require_vin=require_vin,
                request_options=request_options,
            ),
        )

    async def decode_us_plate(
        self,
        plate: str,
        state: str,
        *,
        decode_vin: DecodeVinOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UsPlatedecoderResponse:
        """Look up a US vehicle by license plate number and state. Returns the VIN, year, make, model, trim, engine,
        body style, transmission, drive type, fuel type and exterior color. Optionally decodes the VIN to include the
        full vehicle specifications object. Accepts plates from all 50 US states, the District of Columbia (DC) and
        Puerto Rico (PR).

        This endpoint is **not** available on the free Sandbox tier.

        Args:
            plate: The vehicle registration number or license plate number.
            state: Two-letter abbreviation for one of the 50 US states, the District of Columbia (``DC``), or Puerto
                Rico (``PR``).
            decode_vin: Set to ``true`` or ``1`` to decode the resolved VIN and include a ``vehicle_specs`` object in
                the response (identical in shape to the Specifications endpoint response).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plate decoded successfully.

        Raises:
            ApiError: Missing plate, state, or API key. Missing API key, unknown/disabled API key, or inactive account.
                No data found for this plate/state combination. API usage limit exceeded for the current billing period.
                Internal server error. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            await self._with_raw_response.decode_us_plate(
                plate, state, decode_vin=decode_vin, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPlateDecoderWithRawResponse:
        return self._with_raw_response


class PlateDecoderWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def decode_plate(
        self,
        plate: str,
        state: str,
        *,
        country: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PlatedecoderResponse, DecodePlateErrorBody]:
        """Decode a license plate into vehicle data. Internally proxies to the v2 plate decoder. The ``state`` parameter
        accepts a two-letter US state code, Australian state, or one of the legacy country codes ``BR``, ``UK``, ``IR``,
        ``IT``, ``ES``, ``IND``, ``MX``, ``NZ``.

        Args:
            plate: The vehicle registration number or license plate number.
            state: The two letter state code (US) such as ``CA`` or ``NY``, Australian state, or Brazil ``BR``, United
                Kingdom ``UK``, Ireland ``IR``, Italy ``IT``, Spain ``ES``, India ``IND``, Mexico ``MX``, New Zealand
                ``NZ``.
            country: Country code, e.g. Australia ``AU``. Optional for ``US``.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/platedecoder"),
            query_params=[
                param[str]("plate", plate),
                param[str]("state", state),
                param[str | None]("country", country),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[PlatedecoderResponse],
            error_mapper=decode_plate_error_mapper,
            request_options=request_options,
        )

    def decode_plate_v2(
        self,
        plate: str,
        *,
        country: str | None = None,
        state: str | None = None,
        district: str | None = None,
        require_vin: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V2PlatedecoderResponse, DecodePlateV2ErrorBody]:
        """Decode a license plate into vehicle data across 60+ supported countries. ``country`` is an ISO 3166-1 alpha-2
        code (optional for ``US``). ``state`` is required for ``US``, ``AU`` and ``CA``. For Pakistan (``PK``) a
        ``district`` is also required for the Khyber-Pakhtunkhwa province.

        For Spain (``ES``), set ``require_vin=true`` to always include a VIN. Additional charges apply: when
        ``require_vin=true``, the request is billed 2x and usage counts 2x.

        Args:
            plate: The vehicle registration number or license plate number.
            country: ISO 3166-1 alpha-2 country code such as ``AU`` for Australia or ``ZA`` for South Africa. Optional
                for ``US``.
            state: The two letter state code (US) such as ``CA`` or ``NY``, an Australian state (e.g. ``NSW``, ``VIC``),
                or a Canadian province (e.g. ``ON``). Required only for ``US``, ``AU`` and ``CA``.
            district: The district of the vehicle registration number. Required for Pakistan (``PK``) plates registered
                in the Khyber-Pakhtunkhwa province.
            require_vin: Only supported when ``country=ES``. Set to ``true`` to always include a VIN. The request is
                billed 2x and usage counts 2x.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/platedecoder"),
            query_params=[
                param[str]("plate", plate),
                param[str | None]("country", country),
                param[str | None]("state", state),
                param[str | None]("district", district),
                param[bool | None]("require_vin", require_vin),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[V2PlatedecoderResponse],
            error_mapper=decode_plate_v2_error_mapper,
            request_options=request_options,
        )

    def decode_us_plate(
        self,
        plate: str,
        state: str,
        *,
        decode_vin: DecodeVinOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UsPlatedecoderResponse, DecodeUsPlateErrorBody]:
        """Look up a US vehicle by license plate number and state. Returns the VIN, year, make, model, trim, engine,
        body style, transmission, drive type, fuel type and exterior color. Optionally decodes the VIN to include the
        full vehicle specifications object. Accepts plates from all 50 US states, the District of Columbia (DC) and
        Puerto Rico (PR).

        This endpoint is **not** available on the free Sandbox tier.

        Args:
            plate: The vehicle registration number or license plate number.
            state: Two-letter abbreviation for one of the 50 US states, the District of Columbia (``DC``), or Puerto
                Rico (``PR``).
            decode_vin: Set to ``true`` or ``1`` to decode the resolved VIN and include a ``vehicle_specs`` object in
                the response (identical in shape to the Specifications endpoint response).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/us-platedecoder"),
            query_params=[
                param[str]("plate", plate),
                param[str]("state", state),
                param[DecodeVinOrStr | None]("decodeVIN", decode_vin),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[V1UsPlatedecoderResponse],
            error_mapper=decode_us_plate_error_mapper,
            request_options=request_options,
        )


class AsyncPlateDecoderWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def decode_plate(
        self,
        plate: str,
        state: str,
        *,
        country: str | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PlatedecoderResponse, DecodePlateErrorBody]:
        """Decode a license plate into vehicle data. Internally proxies to the v2 plate decoder. The ``state`` parameter
        accepts a two-letter US state code, Australian state, or one of the legacy country codes ``BR``, ``UK``, ``IR``,
        ``IT``, ``ES``, ``IND``, ``MX``, ``NZ``.

        Args:
            plate: The vehicle registration number or license plate number.
            state: The two letter state code (US) such as ``CA`` or ``NY``, Australian state, or Brazil ``BR``, United
                Kingdom ``UK``, Ireland ``IR``, Italy ``IT``, Spain ``ES``, India ``IND``, Mexico ``MX``, New Zealand
                ``NZ``.
            country: Country code, e.g. Australia ``AU``. Optional for ``US``.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/platedecoder"),
            query_params=[
                param[str]("plate", plate),
                param[str]("state", state),
                param[str | None]("country", country),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[PlatedecoderResponse],
            error_mapper=decode_plate_error_mapper,
            request_options=request_options,
        )

    async def decode_plate_v2(
        self,
        plate: str,
        *,
        country: str | None = None,
        state: str | None = None,
        district: str | None = None,
        require_vin: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V2PlatedecoderResponse, DecodePlateV2ErrorBody]:
        """Decode a license plate into vehicle data across 60+ supported countries. ``country`` is an ISO 3166-1 alpha-2
        code (optional for ``US``). ``state`` is required for ``US``, ``AU`` and ``CA``. For Pakistan (``PK``) a
        ``district`` is also required for the Khyber-Pakhtunkhwa province.

        For Spain (``ES``), set ``require_vin=true`` to always include a VIN. Additional charges apply: when
        ``require_vin=true``, the request is billed 2x and usage counts 2x.

        Args:
            plate: The vehicle registration number or license plate number.
            country: ISO 3166-1 alpha-2 country code such as ``AU`` for Australia or ``ZA`` for South Africa. Optional
                for ``US``.
            state: The two letter state code (US) such as ``CA`` or ``NY``, an Australian state (e.g. ``NSW``, ``VIC``),
                or a Canadian province (e.g. ``ON``). Required only for ``US``, ``AU`` and ``CA``.
            district: The district of the vehicle registration number. Required for Pakistan (``PK``) plates registered
                in the Khyber-Pakhtunkhwa province.
            require_vin: Only supported when ``country=ES``. Set to ``true`` to always include a VIN. The request is
                billed 2x and usage counts 2x.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/platedecoder"),
            query_params=[
                param[str]("plate", plate),
                param[str | None]("country", country),
                param[str | None]("state", state),
                param[str | None]("district", district),
                param[bool | None]("require_vin", require_vin),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[V2PlatedecoderResponse],
            error_mapper=decode_plate_v2_error_mapper,
            request_options=request_options,
        )

    async def decode_us_plate(
        self,
        plate: str,
        state: str,
        *,
        decode_vin: DecodeVinOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UsPlatedecoderResponse, DecodeUsPlateErrorBody]:
        """Look up a US vehicle by license plate number and state. Returns the VIN, year, make, model, trim, engine,
        body style, transmission, drive type, fuel type and exterior color. Optionally decodes the VIN to include the
        full vehicle specifications object. Accepts plates from all 50 US states, the District of Columbia (DC) and
        Puerto Rico (PR).

        This endpoint is **not** available on the free Sandbox tier.

        Args:
            plate: The vehicle registration number or license plate number.
            state: Two-letter abbreviation for one of the 50 US states, the District of Columbia (``DC``), or Puerto
                Rico (``PR``).
            decode_vin: Set to ``true`` or ``1`` to decode the resolved VIN and include a ``vehicle_specs`` object in
                the response (identical in shape to the Specifications endpoint response).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/us-platedecoder"),
            query_params=[
                param[str]("plate", plate),
                param[str]("state", state),
                param[DecodeVinOrStr | None]("decodeVIN", decode_vin),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[V1UsPlatedecoderResponse],
            error_mapper=decode_us_plate_error_mapper,
            request_options=request_options,
        )
