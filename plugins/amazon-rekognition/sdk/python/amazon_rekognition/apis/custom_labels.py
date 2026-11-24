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
from ..errors.detect_custom_labels_error import DetectCustomLabelsErrorBody, detect_custom_labels_error_mapper
from ..models.enums.x_amz_target_amazon_rekognition_custom_labels_api import (
    XAmzTargetAmazonRekognitionCustomLabelsApiOrStr,
)
from ..server.server import Server


class CustomLabels:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CustomLabelsWithRawResponse(client, server, auth)

    def detect_custom_labels(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionCustomLabelsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by
        using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using
        the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference
        to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model
        version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel
        object provides the label name (Name), the level of confidence that the image contains the object (Confidence),
        and object location information, if it exists, for the label on the image (Geometry). To filter labels that are
        returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence
        that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created
        during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceNotFoundException; ResourceNotReadyException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_custom_labels(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> CustomLabelsWithRawResponse:
        return self._with_raw_response


class AsyncCustomLabels:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCustomLabelsWithRawResponse(client, server, auth)

    async def detect_custom_labels(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionCustomLabelsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by
        using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using
        the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference
        to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model
        version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel
        object provides the label name (Name), the level of confidence that the image contains the object (Confidence),
        and object location information, if it exists, for the label on the image (Geometry). To filter labels that are
        returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence
        that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created
        during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceNotFoundException; ResourceNotReadyException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.detect_custom_labels(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCustomLabelsWithRawResponse:
        return self._with_raw_response


class CustomLabelsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def detect_custom_labels(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionCustomLabelsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectCustomLabelsErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by
        using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using
        the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference
        to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model
        version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel
        object provides the label name (Name), the level of confidence that the image contains the object (Confidence),
        and object location information, if it exists, for the label on the image (Geometry). To filter labels that are
        returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence
        that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created
        during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectCustomLabels"),
            headers=[
                param[XAmzTargetAmazonRekognitionCustomLabelsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_custom_labels_error_mapper,
            request_options=request_options,
        )


class AsyncCustomLabelsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def detect_custom_labels(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionCustomLabelsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectCustomLabelsErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by
        using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using
        the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference
        to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image
        bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model
        version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel
        object provides the label name (Name), the level of confidence that the image contains the object (Confidence),
        and object location information, if it exists, for the label on the image (Geometry). To filter labels that are
        returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence
        that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created
        during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectCustomLabels"),
            headers=[
                param[XAmzTargetAmazonRekognitionCustomLabelsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_custom_labels_error_mapper,
            request_options=request_options,
        )
