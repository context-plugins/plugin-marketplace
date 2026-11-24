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
from ..errors.get_vehicle_images_error import GetVehicleImagesErrorBody, get_vehicle_images_error_mapper
from ..models.enums.angle import AngleOrStr
from ..models.enums.format import Format, FormatOrStr
from ..models.enums.license import LicenseOrStr
from ..models.enums.photo_type import PhotoTypeOrStr
from ..models.enums.size import SizeOrStr
from ..models.images_response import ImagesResponse
from ..server.server import Server


class Images:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ImagesWithRawResponse(client, server, auth)

    def get_vehicle_images(
        self,
        make: str,
        model: str,
        *,
        year: str | None = None,
        trim: str | None = None,
        color: str | None = None,
        transparent: bool | None = None,
        angle: AngleOrStr | None = None,
        photo_type: PhotoTypeOrStr | None = None,
        size: SizeOrStr | None = None,
        license_: LicenseOrStr | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ImagesResponse:
        """Retrieve images of a vehicle by make, model and other filters.

        Args:
            make: The vehicle make.
            model: The vehicle model.
            year: The vehicle year.
            trim: The vehicle trim.
            color: The vehicle color.
            transparent: Prioritize images with transparent background. Defaults to ``true``.
            angle: The angle to show the car in.
            photo_type: Request images of the interior, exterior or engine. Can only be used in conjunction with year,
                make, model and trim query params.
            size: Request images of a given size. Defaults to all sizes.
            license_: Filter images by license type. Leave blank to return all images.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Images retrieved.

        Raises:
            ApiError: Missing API key, unknown/disabled API key, or inactive account. No images found for this query.
                API usage limit exceeded for the current billing period. Missing make/model, or the image search failed.
                ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            self._with_raw_response.get_vehicle_images(
                make,
                model,
                year=year,
                trim=trim,
                color=color,
                transparent=transparent,
                angle=angle,
                photo_type=photo_type,
                size=size,
                license_=license_,
                format_=format_,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ImagesWithRawResponse:
        return self._with_raw_response


class AsyncImages:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncImagesWithRawResponse(client, server, auth)

    async def get_vehicle_images(
        self,
        make: str,
        model: str,
        *,
        year: str | None = None,
        trim: str | None = None,
        color: str | None = None,
        transparent: bool | None = None,
        angle: AngleOrStr | None = None,
        photo_type: PhotoTypeOrStr | None = None,
        size: SizeOrStr | None = None,
        license_: LicenseOrStr | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ImagesResponse:
        """Retrieve images of a vehicle by make, model and other filters.

        Args:
            make: The vehicle make.
            model: The vehicle model.
            year: The vehicle year.
            trim: The vehicle trim.
            color: The vehicle color.
            transparent: Prioritize images with transparent background. Defaults to ``true``.
            angle: The angle to show the car in.
            photo_type: Request images of the interior, exterior or engine. Can only be used in conjunction with year,
                make, model and trim query params.
            size: Request images of a given size. Defaults to all sizes.
            license_: Filter images by license type. Leave blank to return all images.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Images retrieved.

        Raises:
            ApiError: Missing API key, unknown/disabled API key, or inactive account. No images found for this query.
                API usage limit exceeded for the current billing period. Missing make/model, or the image search failed.
                ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vehicle_images(
                make,
                model,
                year=year,
                trim=trim,
                color=color,
                transparent=transparent,
                angle=angle,
                photo_type=photo_type,
                size=size,
                license_=license_,
                format_=format_,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncImagesWithRawResponse:
        return self._with_raw_response


class ImagesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_vehicle_images(
        self,
        make: str,
        model: str,
        *,
        year: str | None = None,
        trim: str | None = None,
        color: str | None = None,
        transparent: bool | None = None,
        angle: AngleOrStr | None = None,
        photo_type: PhotoTypeOrStr | None = None,
        size: SizeOrStr | None = None,
        license_: LicenseOrStr | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ImagesResponse, GetVehicleImagesErrorBody]:
        """Retrieve images of a vehicle by make, model and other filters.

        Args:
            make: The vehicle make.
            model: The vehicle model.
            year: The vehicle year.
            trim: The vehicle trim.
            color: The vehicle color.
            transparent: Prioritize images with transparent background. Defaults to ``true``.
            angle: The angle to show the car in.
            photo_type: Request images of the interior, exterior or engine. Can only be used in conjunction with year,
                make, model and trim query params.
            size: Request images of a given size. Defaults to all sizes.
            license_: Filter images by license type. Leave blank to return all images.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/images"),
            query_params=[
                param[str]("make", make),
                param[str]("model", model),
                param[str | None]("year", year),
                param[str | None]("trim", trim),
                param[str | None]("color", color),
                param[bool | None]("transparent", transparent),
                param[AngleOrStr | None]("angle", angle),
                param[PhotoTypeOrStr | None]("photoType", photo_type),
                param[SizeOrStr | None]("size", size),
                param[LicenseOrStr | None]("license", license_),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[ImagesResponse],
            error_mapper=get_vehicle_images_error_mapper,
            request_options=request_options,
        )


class AsyncImagesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_vehicle_images(
        self,
        make: str,
        model: str,
        *,
        year: str | None = None,
        trim: str | None = None,
        color: str | None = None,
        transparent: bool | None = None,
        angle: AngleOrStr | None = None,
        photo_type: PhotoTypeOrStr | None = None,
        size: SizeOrStr | None = None,
        license_: LicenseOrStr | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ImagesResponse, GetVehicleImagesErrorBody]:
        """Retrieve images of a vehicle by make, model and other filters.

        Args:
            make: The vehicle make.
            model: The vehicle model.
            year: The vehicle year.
            trim: The vehicle trim.
            color: The vehicle color.
            transparent: Prioritize images with transparent background. Defaults to ``true``.
            angle: The angle to show the car in.
            photo_type: Request images of the interior, exterior or engine. Can only be used in conjunction with year,
                make, model and trim query params.
            size: Request images of a given size. Defaults to all sizes.
            license_: Filter images by license type. Leave blank to return all images.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/images"),
            query_params=[
                param[str]("make", make),
                param[str]("model", model),
                param[str | None]("year", year),
                param[str | None]("trim", trim),
                param[str | None]("color", color),
                param[bool | None]("transparent", transparent),
                param[AngleOrStr | None]("angle", angle),
                param[PhotoTypeOrStr | None]("photoType", photo_type),
                param[SizeOrStr | None]("size", size),
                param[LicenseOrStr | None]("license", license_),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[ImagesResponse],
            error_mapper=get_vehicle_images_error_mapper,
            request_options=request_options,
        )
