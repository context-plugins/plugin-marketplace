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
from ..errors.get_international_vin_decoder_error import (
    GetInternationalVinDecoderErrorBody,
    get_international_vin_decoder_error_mapper,
)
from ..errors.get_vehicle_specs_error import GetVehicleSpecsErrorBody, get_vehicle_specs_error_mapper
from ..models.enums.deepdata import DeepdataOrStr
from ..models.enums.disable_int_vin_decoding import DisableIntVinDecodingOrStr
from ..models.enums.format import Format, FormatOrStr
from ..models.specs_response import SpecsResponse
from ..models.v1_international_vin_decoder_response import V1InternationalVinDecoderResponse
from ..server.server import Server


class Specifications:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SpecificationsWithRawResponse(client, server, auth)

    def get_international_vin_decoder(
        self, vin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1InternationalVinDecoderResponse:
        """Decode a non-US (international) VIN into vehicle attributes.

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            International VIN decoded.

        Raises:
            ApiError: Missing VIN. Missing API key, unknown/disabled API key, or inactive account. No data found for
                this VIN. API usage limit exceeded for the current billing period. Internal server error. ``error`` is
                ``Error | UsageLimitError | RawError``."""
        return unwrap(self._with_raw_response.get_international_vin_decoder(vin, request_options=request_options))

    def get_vehicle_specs(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        deepdata: DeepdataOrStr | None = None,
        disable_int_vin_decoding: DisableIntVinDecodingOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SpecsResponse:
        """Decode a 17-character VIN and return detailed vehicle specifications, including attributes, colors, equipment
        and warranties. If the VIN cannot be decoded, an International VIN decoding check is run as a fallback unless
        ``disableIntVINDecoding=1`` is set.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            deepdata: Request extra data. Set to ``1`` to use. Significantly slower than the regular request but
                retrieves additional data.
            disable_int_vin_decoding: Set to ``1`` to disable the International VIN decoding fallback and return an
                error instead of a potential partial response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vehicle specifications retrieved.

        Raises:
            ApiError: Missing or invalid VIN. Missing API key, unknown/disabled API key, or inactive account. No data
                found for this VIN. API usage limit exceeded for the current billing period. Internal server error.
                ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            self._with_raw_response.get_vehicle_specs(
                vin,
                format_=format_,
                deepdata=deepdata,
                disable_int_vin_decoding=disable_int_vin_decoding,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SpecificationsWithRawResponse:
        return self._with_raw_response


class AsyncSpecifications:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSpecificationsWithRawResponse(client, server, auth)

    async def get_international_vin_decoder(
        self, vin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1InternationalVinDecoderResponse:
        """Decode a non-US (international) VIN into vehicle attributes.

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            International VIN decoded.

        Raises:
            ApiError: Missing VIN. Missing API key, unknown/disabled API key, or inactive account. No data found for
                this VIN. API usage limit exceeded for the current billing period. Internal server error. ``error`` is
                ``Error | UsageLimitError | RawError``."""
        return unwrap(await self._with_raw_response.get_international_vin_decoder(vin, request_options=request_options))

    async def get_vehicle_specs(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        deepdata: DeepdataOrStr | None = None,
        disable_int_vin_decoding: DisableIntVinDecodingOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SpecsResponse:
        """Decode a 17-character VIN and return detailed vehicle specifications, including attributes, colors, equipment
        and warranties. If the VIN cannot be decoded, an International VIN decoding check is run as a fallback unless
        ``disableIntVINDecoding=1`` is set.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            deepdata: Request extra data. Set to ``1`` to use. Significantly slower than the regular request but
                retrieves additional data.
            disable_int_vin_decoding: Set to ``1`` to disable the International VIN decoding fallback and return an
                error instead of a potential partial response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vehicle specifications retrieved.

        Raises:
            ApiError: Missing or invalid VIN. Missing API key, unknown/disabled API key, or inactive account. No data
                found for this VIN. API usage limit exceeded for the current billing period. Internal server error.
                ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vehicle_specs(
                vin,
                format_=format_,
                deepdata=deepdata,
                disable_int_vin_decoding=disable_int_vin_decoding,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSpecificationsWithRawResponse:
        return self._with_raw_response


class SpecificationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_international_vin_decoder(
        self, vin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1InternationalVinDecoderResponse, GetInternationalVinDecoderErrorBody]:
        """Decode a non-US (international) VIN into vehicle attributes.

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/international-vin-decoder"),
            query_params=[param[str]("vin", vin)],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[V1InternationalVinDecoderResponse],
            error_mapper=get_international_vin_decoder_error_mapper,
            request_options=request_options,
        )

    def get_vehicle_specs(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        deepdata: DeepdataOrStr | None = None,
        disable_int_vin_decoding: DisableIntVinDecodingOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SpecsResponse, GetVehicleSpecsErrorBody]:
        """Decode a 17-character VIN and return detailed vehicle specifications, including attributes, colors, equipment
        and warranties. If the VIN cannot be decoded, an International VIN decoding check is run as a fallback unless
        ``disableIntVINDecoding=1`` is set.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            deepdata: Request extra data. Set to ``1`` to use. Significantly slower than the regular request but
                retrieves additional data.
            disable_int_vin_decoding: Set to ``1`` to disable the International VIN decoding fallback and return an
                error instead of a potential partial response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/specs"),
            query_params=[
                param[str]("vin", vin),
                param[FormatOrStr | None]("format", format_),
                param[DeepdataOrStr | None]("deepdata", deepdata),
                param[DisableIntVinDecodingOrStr | None]("disableIntVINDecoding", disable_int_vin_decoding),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[SpecsResponse],
            error_mapper=get_vehicle_specs_error_mapper,
            request_options=request_options,
        )


class AsyncSpecificationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_international_vin_decoder(
        self, vin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1InternationalVinDecoderResponse, GetInternationalVinDecoderErrorBody]:
        """Decode a non-US (international) VIN into vehicle attributes.

        Args:
            vin: The 17 character long vehicle identification number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/international-vin-decoder"),
            query_params=[param[str]("vin", vin)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[V1InternationalVinDecoderResponse],
            error_mapper=get_international_vin_decoder_error_mapper,
            request_options=request_options,
        )

    async def get_vehicle_specs(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        deepdata: DeepdataOrStr | None = None,
        disable_int_vin_decoding: DisableIntVinDecodingOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SpecsResponse, GetVehicleSpecsErrorBody]:
        """Decode a 17-character VIN and return detailed vehicle specifications, including attributes, colors, equipment
        and warranties. If the VIN cannot be decoded, an International VIN decoding check is run as a fallback unless
        ``disableIntVINDecoding=1`` is set.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            deepdata: Request extra data. Set to ``1`` to use. Significantly slower than the regular request but
                retrieves additional data.
            disable_int_vin_decoding: Set to ``1`` to disable the International VIN decoding fallback and return an
                error instead of a potential partial response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/specs"),
            query_params=[
                param[str]("vin", vin),
                param[FormatOrStr | None]("format", format_),
                param[DeepdataOrStr | None]("deepdata", deepdata),
                param[DisableIntVinDecodingOrStr | None]("disableIntVINDecoding", disable_int_vin_decoding),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[SpecsResponse],
            error_mapper=get_vehicle_specs_error_mapper,
            request_options=request_options,
        )
