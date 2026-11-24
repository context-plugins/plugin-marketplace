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
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.detect_labels_error import DetectLabelsErrorBody, detect_labels_error_mapper
from ..models.enums.x_amz_target_amazon_rekognition_image_analysis_api import (
    XAmzTargetAmazonRekognitionImageAnalysisApiOrStr,
)
from ..server.server import Server


class ImageAnalysis:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ImageAnalysisWithRawResponse(client, server, auth)

    def detect_labels(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionImageAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes
        objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like
        landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon
        Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an
        image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes
        is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one
        or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including
        GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including
        IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using
        GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can
        filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_labels(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> ImageAnalysisWithRawResponse:
        return self._with_raw_response


class AsyncImageAnalysis:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncImageAnalysisWithRawResponse(client, server, auth)

    async def detect_labels(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionImageAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes
        objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like
        landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon
        Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an
        image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes
        is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one
        or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including
        GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including
        IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using
        GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can
        filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_labels(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncImageAnalysisWithRawResponse:
        return self._with_raw_response


class ImageAnalysisWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def detect_labels(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionImageAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectLabelsErrorBody]:
        """Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes
        objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like
        landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon
        Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an
        image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes
        is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one
        or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including
        GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including
        IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using
        GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can
        filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectLabels"),
            headers=[
                param[XAmzTargetAmazonRekognitionImageAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_labels_error_mapper,
            request_options=request_options,
        )


class AsyncImageAnalysisWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def detect_labels(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionImageAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectLabelsErrorBody]:
        """Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes
        objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like
        landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon
        Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an
        image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes
        is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one
        or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including
        GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including
        IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using
        GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can
        filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectLabels"),
            headers=[
                param[XAmzTargetAmazonRekognitionImageAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_labels_error_mapper,
            request_options=request_options,
        )
