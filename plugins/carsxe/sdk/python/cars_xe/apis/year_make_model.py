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
from ..errors.decode_obd_code_error import DecodeObdCodeErrorBody, decode_obd_code_error_mapper
from ..errors.get_year_make_model_error import GetYearMakeModelErrorBody, get_year_make_model_error_mapper
from ..errors.get_year_make_model_options_error import (
    GetYearMakeModelOptionsErrorBody,
    get_year_make_model_options_error_mapper,
)
from ..models.enums.all_trim_options import AllTrimOptionsOrStr
from ..models.enums.dimension import DimensionOrStr
from ..models.obdcodesdecoder_response import ObdcodesdecoderResponse
from ..models.v1_ymm_options_response import V1YmmOptionsResponse
from ..models.v1_ymm_response import V1YmmResponse
from ..server.server import Server


class YearMakeModel:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = YearMakeModelWithRawResponse(client, server, auth)

    def decode_obd_code(
        self, code: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ObdcodesdecoderResponse:
        """Decode an OBD-II diagnostic trouble code (e.g. P0115).

        Args:
            code: The OBD code.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OBD code decoded.

        Raises:
            ApiError: Missing OBD code. Missing API key, unknown/disabled API key, or inactive account. The OBD code
                could not be found. API usage limit exceeded for the current billing period. ``error`` is ``Error |
                UsageLimitError | RawError``."""
        return unwrap(self._with_raw_response.decode_obd_code(code, request_options=request_options))

    def get_year_make_model(
        self,
        year: str,
        make: str,
        model: str,
        *,
        trim: str | None = None,
        all_trim_options: AllTrimOptionsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1YmmResponse:
        """Look up vehicle data by year, make and model (and optionally trim) without a VIN.

        Args:
            year: The manufacturing year of the vehicle (numeric, between 1900 and the current model year plus one).
            make: The manufacturer of the vehicle (e.g., Toyota, Ford, BMW).
            model: The specific model of the vehicle (e.g., Camry, F-150, X5).
            trim: The vehicle trim (e.g., XLE, XSE).
            all_trim_options: Return all trim options available for the year, make and model. Set to ``1`` to use.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vehicle matched.

        Raises:
            ApiError: Missing or invalid year, make or model. Missing API key, unknown/disabled API key, or inactive
                account. No vehicle matched the specified year, make and model. API usage limit exceeded for the current
                billing period. Could not fetch data. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            self._with_raw_response.get_year_make_model(
                year, make, model, trim=trim, all_trim_options=all_trim_options, request_options=request_options
            ),
        )

    def get_year_make_model_options(
        self,
        *,
        dimension: DimensionOrStr | None = None,
        year: str | None = None,
        make: str | None = None,
        model: str | None = None,
        trim: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1YmmOptionsResponse:
        """Populate Year, Make, Model, and Variant dropdown menus. Each response returns exactly one layer.
        ``dimension`` is optional — when omitted, the response shape is inferred from ``make``/``model``/``year``.
        Billing: most calls cost 1 unit. ``dimension=variants`` with ``year`` + ``make`` (no ``model``) costs 1 unit per
        model; the response includes ``modelCount``. Required filters help you get better, more relevant results.
        ``year``, ``make``, and ``model`` can be combined for reversed lookups (e.g. years for a given make+model).

        Args:
            dimension: Return exactly this array when required filters are present. If omitted, the response is inferred
                automatically from ``make``/``model``/``year``.
            year: Filter to a specific manufacturing year. Required when filtering by ``model`` without ``make``.
            make: Filter to a specific manufacturer (e.g., Toyota, Ford, Lexus). Required for ``dimension=models``.
            model: Filter to a specific model (e.g., Camry, F-150, LX). Required for ``dimension=trims`` and for
                ``dimension=variants`` unless both ``year`` and ``make`` are set.
            trim: Optional substring filter on trim names. Only applied when querying ``dimension=trims`` or
                ``dimension=variants``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Distinct values for the requested (or inferred) dimension(s).

        Raises:
            ApiError: Invalid dimension, invalid year, missing required filters, or model without make/year. Missing API
                key, unknown/disabled API key, or inactive account. API usage limit exceeded for the current billing
                period. Could not fetch data. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            self._with_raw_response.get_year_make_model_options(
                dimension=dimension, year=year, make=make, model=model, trim=trim, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> YearMakeModelWithRawResponse:
        return self._with_raw_response


class AsyncYearMakeModel:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncYearMakeModelWithRawResponse(client, server, auth)

    async def decode_obd_code(
        self, code: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ObdcodesdecoderResponse:
        """Decode an OBD-II diagnostic trouble code (e.g. P0115).

        Args:
            code: The OBD code.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OBD code decoded.

        Raises:
            ApiError: Missing OBD code. Missing API key, unknown/disabled API key, or inactive account. The OBD code
                could not be found. API usage limit exceeded for the current billing period. ``error`` is ``Error |
                UsageLimitError | RawError``."""
        return unwrap(await self._with_raw_response.decode_obd_code(code, request_options=request_options))

    async def get_year_make_model(
        self,
        year: str,
        make: str,
        model: str,
        *,
        trim: str | None = None,
        all_trim_options: AllTrimOptionsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1YmmResponse:
        """Look up vehicle data by year, make and model (and optionally trim) without a VIN.

        Args:
            year: The manufacturing year of the vehicle (numeric, between 1900 and the current model year plus one).
            make: The manufacturer of the vehicle (e.g., Toyota, Ford, BMW).
            model: The specific model of the vehicle (e.g., Camry, F-150, X5).
            trim: The vehicle trim (e.g., XLE, XSE).
            all_trim_options: Return all trim options available for the year, make and model. Set to ``1`` to use.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vehicle matched.

        Raises:
            ApiError: Missing or invalid year, make or model. Missing API key, unknown/disabled API key, or inactive
                account. No vehicle matched the specified year, make and model. API usage limit exceeded for the current
                billing period. Could not fetch data. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_year_make_model(
                year, make, model, trim=trim, all_trim_options=all_trim_options, request_options=request_options
            ),
        )

    async def get_year_make_model_options(
        self,
        *,
        dimension: DimensionOrStr | None = None,
        year: str | None = None,
        make: str | None = None,
        model: str | None = None,
        trim: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1YmmOptionsResponse:
        """Populate Year, Make, Model, and Variant dropdown menus. Each response returns exactly one layer.
        ``dimension`` is optional — when omitted, the response shape is inferred from ``make``/``model``/``year``.
        Billing: most calls cost 1 unit. ``dimension=variants`` with ``year`` + ``make`` (no ``model``) costs 1 unit per
        model; the response includes ``modelCount``. Required filters help you get better, more relevant results.
        ``year``, ``make``, and ``model`` can be combined for reversed lookups (e.g. years for a given make+model).

        Args:
            dimension: Return exactly this array when required filters are present. If omitted, the response is inferred
                automatically from ``make``/``model``/``year``.
            year: Filter to a specific manufacturing year. Required when filtering by ``model`` without ``make``.
            make: Filter to a specific manufacturer (e.g., Toyota, Ford, Lexus). Required for ``dimension=models``.
            model: Filter to a specific model (e.g., Camry, F-150, LX). Required for ``dimension=trims`` and for
                ``dimension=variants`` unless both ``year`` and ``make`` are set.
            trim: Optional substring filter on trim names. Only applied when querying ``dimension=trims`` or
                ``dimension=variants``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Distinct values for the requested (or inferred) dimension(s).

        Raises:
            ApiError: Invalid dimension, invalid year, missing required filters, or model without make/year. Missing API
                key, unknown/disabled API key, or inactive account. API usage limit exceeded for the current billing
                period. Could not fetch data. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_year_make_model_options(
                dimension=dimension, year=year, make=make, model=model, trim=trim, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncYearMakeModelWithRawResponse:
        return self._with_raw_response


class YearMakeModelWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def decode_obd_code(
        self, code: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ObdcodesdecoderResponse, DecodeObdCodeErrorBody]:
        """Decode an OBD-II diagnostic trouble code (e.g. P0115).

        Args:
            code: The OBD code.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/obdcodesdecoder"),
            query_params=[param[str]("code", code)],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[ObdcodesdecoderResponse],
            error_mapper=decode_obd_code_error_mapper,
            request_options=request_options,
        )

    def get_year_make_model(
        self,
        year: str,
        make: str,
        model: str,
        *,
        trim: str | None = None,
        all_trim_options: AllTrimOptionsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1YmmResponse, GetYearMakeModelErrorBody]:
        """Look up vehicle data by year, make and model (and optionally trim) without a VIN.

        Args:
            year: The manufacturing year of the vehicle (numeric, between 1900 and the current model year plus one).
            make: The manufacturer of the vehicle (e.g., Toyota, Ford, BMW).
            model: The specific model of the vehicle (e.g., Camry, F-150, X5).
            trim: The vehicle trim (e.g., XLE, XSE).
            all_trim_options: Return all trim options available for the year, make and model. Set to ``1`` to use.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ymm"),
            query_params=[
                param[str]("year", year),
                param[str]("make", make),
                param[str]("model", model),
                param[str | None]("trim", trim),
                param[AllTrimOptionsOrStr | None]("allTrimOptions", all_trim_options),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[V1YmmResponse],
            error_mapper=get_year_make_model_error_mapper,
            request_options=request_options,
        )

    def get_year_make_model_options(
        self,
        *,
        dimension: DimensionOrStr | None = None,
        year: str | None = None,
        make: str | None = None,
        model: str | None = None,
        trim: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1YmmOptionsResponse, GetYearMakeModelOptionsErrorBody]:
        """Populate Year, Make, Model, and Variant dropdown menus. Each response returns exactly one layer.
        ``dimension`` is optional — when omitted, the response shape is inferred from ``make``/``model``/``year``.
        Billing: most calls cost 1 unit. ``dimension=variants`` with ``year`` + ``make`` (no ``model``) costs 1 unit per
        model; the response includes ``modelCount``. Required filters help you get better, more relevant results.
        ``year``, ``make``, and ``model`` can be combined for reversed lookups (e.g. years for a given make+model).

        Args:
            dimension: Return exactly this array when required filters are present. If omitted, the response is inferred
                automatically from ``make``/``model``/``year``.
            year: Filter to a specific manufacturing year. Required when filtering by ``model`` without ``make``.
            make: Filter to a specific manufacturer (e.g., Toyota, Ford, Lexus). Required for ``dimension=models``.
            model: Filter to a specific model (e.g., Camry, F-150, LX). Required for ``dimension=trims`` and for
                ``dimension=variants`` unless both ``year`` and ``make`` are set.
            trim: Optional substring filter on trim names. Only applied when querying ``dimension=trims`` or
                ``dimension=variants``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ymm-options"),
            query_params=[
                param[DimensionOrStr | None]("dimension", dimension),
                param[str | None]("year", year),
                param[str | None]("make", make),
                param[str | None]("model", model),
                param[str | None]("trim", trim),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[V1YmmOptionsResponse],
            error_mapper=get_year_make_model_options_error_mapper,
            request_options=request_options,
        )


class AsyncYearMakeModelWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def decode_obd_code(
        self, code: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ObdcodesdecoderResponse, DecodeObdCodeErrorBody]:
        """Decode an OBD-II diagnostic trouble code (e.g. P0115).

        Args:
            code: The OBD code.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/obdcodesdecoder"),
            query_params=[param[str]("code", code)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[ObdcodesdecoderResponse],
            error_mapper=decode_obd_code_error_mapper,
            request_options=request_options,
        )

    async def get_year_make_model(
        self,
        year: str,
        make: str,
        model: str,
        *,
        trim: str | None = None,
        all_trim_options: AllTrimOptionsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1YmmResponse, GetYearMakeModelErrorBody]:
        """Look up vehicle data by year, make and model (and optionally trim) without a VIN.

        Args:
            year: The manufacturing year of the vehicle (numeric, between 1900 and the current model year plus one).
            make: The manufacturer of the vehicle (e.g., Toyota, Ford, BMW).
            model: The specific model of the vehicle (e.g., Camry, F-150, X5).
            trim: The vehicle trim (e.g., XLE, XSE).
            all_trim_options: Return all trim options available for the year, make and model. Set to ``1`` to use.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ymm"),
            query_params=[
                param[str]("year", year),
                param[str]("make", make),
                param[str]("model", model),
                param[str | None]("trim", trim),
                param[AllTrimOptionsOrStr | None]("allTrimOptions", all_trim_options),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[V1YmmResponse],
            error_mapper=get_year_make_model_error_mapper,
            request_options=request_options,
        )

    async def get_year_make_model_options(
        self,
        *,
        dimension: DimensionOrStr | None = None,
        year: str | None = None,
        make: str | None = None,
        model: str | None = None,
        trim: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1YmmOptionsResponse, GetYearMakeModelOptionsErrorBody]:
        """Populate Year, Make, Model, and Variant dropdown menus. Each response returns exactly one layer.
        ``dimension`` is optional — when omitted, the response shape is inferred from ``make``/``model``/``year``.
        Billing: most calls cost 1 unit. ``dimension=variants`` with ``year`` + ``make`` (no ``model``) costs 1 unit per
        model; the response includes ``modelCount``. Required filters help you get better, more relevant results.
        ``year``, ``make``, and ``model`` can be combined for reversed lookups (e.g. years for a given make+model).

        Args:
            dimension: Return exactly this array when required filters are present. If omitted, the response is inferred
                automatically from ``make``/``model``/``year``.
            year: Filter to a specific manufacturing year. Required when filtering by ``model`` without ``make``.
            make: Filter to a specific manufacturer (e.g., Toyota, Ford, Lexus). Required for ``dimension=models``.
            model: Filter to a specific model (e.g., Camry, F-150, LX). Required for ``dimension=trims`` and for
                ``dimension=variants`` unless both ``year`` and ``make`` are set.
            trim: Optional substring filter on trim names. Only applied when querying ``dimension=trims`` or
                ``dimension=variants``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ymm-options"),
            query_params=[
                param[DimensionOrStr | None]("dimension", dimension),
                param[str | None]("year", year),
                param[str | None]("make", make),
                param[str | None]("model", model),
                param[str | None]("trim", trim),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[V1YmmOptionsResponse],
            error_mapper=get_year_make_model_options_error_mapper,
            request_options=request_options,
        )
