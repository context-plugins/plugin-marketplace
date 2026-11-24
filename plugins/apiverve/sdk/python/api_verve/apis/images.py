from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.facedetect_error import FacedetectErrorBody, facedetect_error_mapper
from ..errors.heicconverter_error import HeicconverterErrorBody, heicconverter_error_mapper
from ..errors.imageconverter_error import ImageconverterErrorBody, imageconverter_error_mapper
from ..errors.nsfwimagedetector_error import NsfwimagedetectorErrorBody, nsfwimagedetector_error_mapper
from ..errors.qrcodereader_error import QrcodereaderErrorBody, qrcodereader_error_mapper
from ..errors.svgconverter_error import SvgconverterErrorBody, svgconverter_error_mapper
from ..errors.webpconverter_error import WebpconverterErrorBody, webpconverter_error_mapper
from ..models.v1_facedetect_response import V1FacedetectResponse
from ..models.v1_heicconverter_response import V1HeicconverterResponse
from ..models.v1_imageconverter_response import V1ImageconverterResponse
from ..models.v1_nsfwimagedetector_response import V1NsfwimagedetectorResponse
from ..models.v1_qrcodereader_response import V1QrcodereaderResponse
from ..models.v1_svgconverter_response import V1SvgconverterResponse
from ..models.v1_webpconverter_response import V1WebpconverterResponse
from ..server.server import Server


class Images:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ImagesWithRawResponse(client, server, auth)

    def facedetect(
        self,
        *,
        confidence: float | None = None,
        image: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1FacedetectResponse:
        """Detect all faces in an uploaded image and return their bounding box coordinates

        Args:
            confidence: Minimum confidence threshold for face detection (0.1 to 1.0)
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, .webp, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.facedetect(confidence=confidence, image=image, request_options=request_options)
        )

    def heicconverter(
        self,
        output_format: str,
        image: FileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1HeicconverterResponse:
        """Convert a HEIC/HEIF image to another format. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .heic, .heif, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.heicconverter(
                output_format,
                image,
                quality=quality,
                max_width=max_width,
                max_height=max_height,
                request_options=request_options,
            ),
        )

    def imageconverter(
        self,
        output_format: str,
        image: FileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ImageconverterResponse:
        """Convert an image from one format to another. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .heic, .heif, .avif, .webp, .png, .jpg, .jpeg, .gif, .tiff, .tif, .bmp,
                .pdf, .svg, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.imageconverter(
                output_format,
                image,
                quality=quality,
                max_width=max_width,
                max_height=max_height,
                request_options=request_options,
            ),
        )

    def nsfwimagedetector(
        self, image: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1NsfwimagedetectorResponse:
        """NSFW Detector is a simple tool for detecting NSFW content. It returns a boolean

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.nsfwimagedetector(image, request_options=request_options))

    def qrcodereader(
        self, image: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1QrcodereaderResponse:
        """QR Code Reader is a powerful tool that extracts text and data from QR codes in images. Simply provide an
        image URL or upload an image containing a QR code to decode its contents.

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.qrcodereader(image, request_options=request_options))

    def svgconverter(
        self,
        output_format: str,
        image: FileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SvgconverterResponse:
        """Convert an SVG vector image to a raster format. Upload an SVG file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .svg, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.svgconverter(
                output_format,
                image,
                quality=quality,
                max_width=max_width,
                max_height=max_height,
                request_options=request_options,
            ),
        )

    def webpconverter(
        self,
        output_format: str,
        image: FileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WebpconverterResponse:
        """Convert a WebP image to another format, or convert other formats to WebP. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .webp, .png, .jpg, .jpeg, .gif, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.webpconverter(
                output_format,
                image,
                quality=quality,
                max_width=max_width,
                max_height=max_height,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ImagesWithRawResponse:
        return self._with_raw_response


class AsyncImages:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncImagesWithRawResponse(client, server, auth)

    async def facedetect(
        self,
        *,
        confidence: float | None = None,
        image: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1FacedetectResponse:
        """Detect all faces in an uploaded image and return their bounding box coordinates

        Args:
            confidence: Minimum confidence threshold for face detection (0.1 to 1.0)
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, .webp, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.facedetect(
                confidence=confidence, image=image, request_options=request_options
            ),
        )

    async def heicconverter(
        self,
        output_format: str,
        image: AsyncFileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1HeicconverterResponse:
        """Convert a HEIC/HEIF image to another format. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .heic, .heif, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.heicconverter(
                output_format,
                image,
                quality=quality,
                max_width=max_width,
                max_height=max_height,
                request_options=request_options,
            ),
        )

    async def imageconverter(
        self,
        output_format: str,
        image: AsyncFileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ImageconverterResponse:
        """Convert an image from one format to another. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .heic, .heif, .avif, .webp, .png, .jpg, .jpeg, .gif, .tiff, .tif, .bmp,
                .pdf, .svg, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.imageconverter(
                output_format,
                image,
                quality=quality,
                max_width=max_width,
                max_height=max_height,
                request_options=request_options,
            ),
        )

    async def nsfwimagedetector(
        self, image: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1NsfwimagedetectorResponse:
        """NSFW Detector is a simple tool for detecting NSFW content. It returns a boolean

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.nsfwimagedetector(image, request_options=request_options))

    async def qrcodereader(
        self, image: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1QrcodereaderResponse:
        """QR Code Reader is a powerful tool that extracts text and data from QR codes in images. Simply provide an
        image URL or upload an image containing a QR code to decode its contents.

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.qrcodereader(image, request_options=request_options))

    async def svgconverter(
        self,
        output_format: str,
        image: AsyncFileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SvgconverterResponse:
        """Convert an SVG vector image to a raster format. Upload an SVG file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .svg, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.svgconverter(
                output_format,
                image,
                quality=quality,
                max_width=max_width,
                max_height=max_height,
                request_options=request_options,
            ),
        )

    async def webpconverter(
        self,
        output_format: str,
        image: AsyncFileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WebpconverterResponse:
        """Convert a WebP image to another format, or convert other formats to WebP. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .webp, .png, .jpg, .jpeg, .gif, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.webpconverter(
                output_format,
                image,
                quality=quality,
                max_width=max_width,
                max_height=max_height,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncImagesWithRawResponse:
        return self._with_raw_response


class ImagesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def facedetect(
        self,
        *,
        confidence: float | None = None,
        image: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1FacedetectResponse, FacedetectErrorBody]:
        """Detect all faces in an uploaded image and return their bounding box coordinates

        Args:
            confidence: Minimum confidence threshold for face detection (0.1 to 1.0)
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, .webp, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/facedetect"),
            query_params=[param[float | None]("confidence", confidence)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image) if image is not None else None),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1FacedetectResponse],
            error_mapper=facedetect_error_mapper,
            request_options=request_options,
        )

    def heicconverter(
        self,
        output_format: str,
        image: FileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HeicconverterResponse, HeicconverterErrorBody]:
        """Convert a HEIC/HEIF image to another format. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .heic, .heif, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/heicconverter"),
            query_params=[
                param[str]("outputFormat", output_format),
                param[int | None]("quality", quality),
                param[int | None]("maxWidth", max_width),
                param[int | None]("maxHeight", max_height),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HeicconverterResponse],
            error_mapper=heicconverter_error_mapper,
            request_options=request_options,
        )

    def imageconverter(
        self,
        output_format: str,
        image: FileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ImageconverterResponse, ImageconverterErrorBody]:
        """Convert an image from one format to another. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .heic, .heif, .avif, .webp, .png, .jpg, .jpeg, .gif, .tiff, .tif, .bmp,
                .pdf, .svg, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/imageconverter"),
            query_params=[
                param[str]("outputFormat", output_format),
                param[int | None]("quality", quality),
                param[int | None]("maxWidth", max_width),
                param[int | None]("maxHeight", max_height),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ImageconverterResponse],
            error_mapper=imageconverter_error_mapper,
            request_options=request_options,
        )

    def nsfwimagedetector(
        self, image: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1NsfwimagedetectorResponse, NsfwimagedetectorErrorBody]:
        """NSFW Detector is a simple tool for detecting NSFW content. It returns a boolean

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/nsfwimagedetector"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1NsfwimagedetectorResponse],
            error_mapper=nsfwimagedetector_error_mapper,
            request_options=request_options,
        )

    def qrcodereader(
        self, image: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1QrcodereaderResponse, QrcodereaderErrorBody]:
        """QR Code Reader is a powerful tool that extracts text and data from QR codes in images. Simply provide an
        image URL or upload an image containing a QR code to decode its contents.

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/qrcodereader"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1QrcodereaderResponse],
            error_mapper=qrcodereader_error_mapper,
            request_options=request_options,
        )

    def svgconverter(
        self,
        output_format: str,
        image: FileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SvgconverterResponse, SvgconverterErrorBody]:
        """Convert an SVG vector image to a raster format. Upload an SVG file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .svg, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/svgconverter"),
            query_params=[
                param[str]("outputFormat", output_format),
                param[int | None]("quality", quality),
                param[int | None]("maxWidth", max_width),
                param[int | None]("maxHeight", max_height),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SvgconverterResponse],
            error_mapper=svgconverter_error_mapper,
            request_options=request_options,
        )

    def webpconverter(
        self,
        output_format: str,
        image: FileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebpconverterResponse, WebpconverterErrorBody]:
        """Convert a WebP image to another format, or convert other formats to WebP. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .webp, .png, .jpg, .jpeg, .gif, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webpconverter"),
            query_params=[
                param[str]("outputFormat", output_format),
                param[int | None]("quality", quality),
                param[int | None]("maxWidth", max_width),
                param[int | None]("maxHeight", max_height),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WebpconverterResponse],
            error_mapper=webpconverter_error_mapper,
            request_options=request_options,
        )


class AsyncImagesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def facedetect(
        self,
        *,
        confidence: float | None = None,
        image: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1FacedetectResponse, FacedetectErrorBody]:
        """Detect all faces in an uploaded image and return their bounding box coordinates

        Args:
            confidence: Minimum confidence threshold for face detection (0.1 to 1.0)
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, .webp, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/facedetect"),
            query_params=[param[float | None]("confidence", confidence)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image) if image is not None else None),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1FacedetectResponse],
            error_mapper=facedetect_error_mapper,
            request_options=request_options,
        )

    async def heicconverter(
        self,
        output_format: str,
        image: AsyncFileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HeicconverterResponse, HeicconverterErrorBody]:
        """Convert a HEIC/HEIF image to another format. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .heic, .heif, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/heicconverter"),
            query_params=[
                param[str]("outputFormat", output_format),
                param[int | None]("quality", quality),
                param[int | None]("maxWidth", max_width),
                param[int | None]("maxHeight", max_height),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HeicconverterResponse],
            error_mapper=heicconverter_error_mapper,
            request_options=request_options,
        )

    async def imageconverter(
        self,
        output_format: str,
        image: AsyncFileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ImageconverterResponse, ImageconverterErrorBody]:
        """Convert an image from one format to another. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .heic, .heif, .avif, .webp, .png, .jpg, .jpeg, .gif, .tiff, .tif, .bmp,
                .pdf, .svg, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/imageconverter"),
            query_params=[
                param[str]("outputFormat", output_format),
                param[int | None]("quality", quality),
                param[int | None]("maxWidth", max_width),
                param[int | None]("maxHeight", max_height),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ImageconverterResponse],
            error_mapper=imageconverter_error_mapper,
            request_options=request_options,
        )

    async def nsfwimagedetector(
        self, image: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1NsfwimagedetectorResponse, NsfwimagedetectorErrorBody]:
        """NSFW Detector is a simple tool for detecting NSFW content. It returns a boolean

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/nsfwimagedetector"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1NsfwimagedetectorResponse],
            error_mapper=nsfwimagedetector_error_mapper,
            request_options=request_options,
        )

    async def qrcodereader(
        self, image: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1QrcodereaderResponse, QrcodereaderErrorBody]:
        """QR Code Reader is a powerful tool that extracts text and data from QR codes in images. Simply provide an
        image URL or upload an image containing a QR code to decode its contents.

        Args:
            image: File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/qrcodereader"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1QrcodereaderResponse],
            error_mapper=qrcodereader_error_mapper,
            request_options=request_options,
        )

    async def svgconverter(
        self,
        output_format: str,
        image: AsyncFileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SvgconverterResponse, SvgconverterErrorBody]:
        """Convert an SVG vector image to a raster format. Upload an SVG file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .svg, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/svgconverter"),
            query_params=[
                param[str]("outputFormat", output_format),
                param[int | None]("quality", quality),
                param[int | None]("maxWidth", max_width),
                param[int | None]("maxHeight", max_height),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SvgconverterResponse],
            error_mapper=svgconverter_error_mapper,
            request_options=request_options,
        )

    async def webpconverter(
        self,
        output_format: str,
        image: AsyncFileInput,
        *,
        quality: int | None = None,
        max_width: int | None = None,
        max_height: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebpconverterResponse, WebpconverterErrorBody]:
        """Convert a WebP image to another format, or convert other formats to WebP. Upload an image file to convert.

        Args:
            output_format: Target format
            image: File to upload (accepted: .webp, .png, .jpg, .jpeg, .gif, max 10MB)
            quality: Output quality (applies to jpg/webp)
            max_width: Maximum width in pixels (maintains aspect ratio)
            max_height: Maximum height in pixels (maintains aspect ratio)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webpconverter"),
            query_params=[
                param[str]("outputFormat", output_format),
                param[int | None]("quality", quality),
                param[int | None]("maxWidth", max_width),
                param[int | None]("maxHeight", max_height),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("image", image)),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WebpconverterResponse],
            error_mapper=webpconverter_error_mapper,
            request_options=request_options,
        )
