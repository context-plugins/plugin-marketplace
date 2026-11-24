from __future__ import annotations

from uuid import UUID, uuid4

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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.recognize_plate_error import RecognizePlateErrorBody, recognize_plate_error_mapper
from ..errors.vin_ocr_error import VinOcrErrorBody, vin_ocr_error_mapper
from ..models.platerecognition_request import PlaterecognitionRequest, PlaterecognitionRequestDict
from ..models.platerecognition_response import PlaterecognitionResponse
from ..models.v1_vinocr_request import V1VinocrRequest, V1VinocrRequestDict
from ..models.v1_vinocr_response import V1VinocrResponse
from ..server.server import Server


class Recognition:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RecognitionWithRawResponse(client, server, auth)

    def recognize_plate(
        self,
        body: PlaterecognitionRequest | PlaterecognitionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PlaterecognitionResponse:
        """Extract a license plate number from an image of a vehicle. Send a JSON body containing an ``image_url`` field
        with a URL to the image.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plate recognized.

        Raises:
            ApiError: Missing image URL in the request body. Missing API key, unknown/disabled API key, or inactive
                account. No plate could be recognized in the image. API usage limit exceeded for the current billing
                period. Plate recognition service error. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(self._with_raw_response.recognize_plate(body, request_options=request_options))

    def vin_ocr(
        self, body: V1VinocrRequest | V1VinocrRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1VinocrResponse:
        """Extract a VIN from a photo. Send a JSON body containing an ``image_url`` field with either a URL to an image
        or a base64-encoded image string.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            VIN extracted from the image.

        Raises:
            ApiError: Missing API key, missing image, invalid image data, image processing failure, or no text detected.
                User with this API key is not active. API key not found, or no valid VIN found in the image. API usage
                limit exceeded for the current billing period. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(self._with_raw_response.vin_ocr(body, request_options=request_options))

    @property
    def with_raw_response(self) -> RecognitionWithRawResponse:
        return self._with_raw_response


class AsyncRecognition:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRecognitionWithRawResponse(client, server, auth)

    async def recognize_plate(
        self,
        body: PlaterecognitionRequest | PlaterecognitionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PlaterecognitionResponse:
        """Extract a license plate number from an image of a vehicle. Send a JSON body containing an ``image_url`` field
        with a URL to the image.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plate recognized.

        Raises:
            ApiError: Missing image URL in the request body. Missing API key, unknown/disabled API key, or inactive
                account. No plate could be recognized in the image. API usage limit exceeded for the current billing
                period. Plate recognition service error. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(await self._with_raw_response.recognize_plate(body, request_options=request_options))

    async def vin_ocr(
        self, body: V1VinocrRequest | V1VinocrRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1VinocrResponse:
        """Extract a VIN from a photo. Send a JSON body containing an ``image_url`` field with either a URL to an image
        or a base64-encoded image string.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            VIN extracted from the image.

        Raises:
            ApiError: Missing API key, missing image, invalid image data, image processing failure, or no text detected.
                User with this API key is not active. API key not found, or no valid VIN found in the image. API usage
                limit exceeded for the current billing period. ``error`` is ``Error | UsageLimitError | RawError``."""
        return unwrap(await self._with_raw_response.vin_ocr(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncRecognitionWithRawResponse:
        return self._with_raw_response


class RecognitionWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def recognize_plate(
        self,
        body: PlaterecognitionRequest | PlaterecognitionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PlaterecognitionResponse, RecognizePlateErrorBody]:
        """Extract a license plate number from an image of a vehicle. Send a JSON body containing an ``image_url`` field
        with a URL to the image.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/platerecognition"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlaterecognitionRequest | PlaterecognitionRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[PlaterecognitionResponse],
            error_mapper=recognize_plate_error_mapper,
            request_options=request_options,
        )

    def vin_ocr(
        self, body: V1VinocrRequest | V1VinocrRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1VinocrResponse, VinOcrErrorBody]:
        """Extract a VIN from a photo. Send a JSON body containing an ``image_url`` field with either a URL to an image
        or a base64-encoded image string.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/vinocr"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1VinocrRequest | V1VinocrRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[V1VinocrResponse],
            error_mapper=vin_ocr_error_mapper,
            request_options=request_options,
        )


class AsyncRecognitionWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def recognize_plate(
        self,
        body: PlaterecognitionRequest | PlaterecognitionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PlaterecognitionResponse, RecognizePlateErrorBody]:
        """Extract a license plate number from an image of a vehicle. Send a JSON body containing an ``image_url`` field
        with a URL to the image.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/platerecognition"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlaterecognitionRequest | PlaterecognitionRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[PlaterecognitionResponse],
            error_mapper=recognize_plate_error_mapper,
            request_options=request_options,
        )

    async def vin_ocr(
        self, body: V1VinocrRequest | V1VinocrRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1VinocrResponse, VinOcrErrorBody]:
        """Extract a VIN from a photo. Send a JSON body containing an ``image_url`` field with either a URL to an image
        or a base64-encoded image string.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/vinocr"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1VinocrRequest | V1VinocrRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[V1VinocrResponse],
            error_mapper=vin_ocr_error_mapper,
            request_options=request_options,
        )
