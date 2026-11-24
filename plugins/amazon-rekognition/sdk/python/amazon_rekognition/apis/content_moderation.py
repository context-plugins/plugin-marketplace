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
from ..errors.detect_moderation_labels_error import (
    DetectModerationLabelsErrorBody,
    detect_moderation_labels_error_mapper,
)
from ..errors.get_content_moderation_error import GetContentModerationErrorBody, get_content_moderation_error_mapper
from ..errors.start_content_moderation_error import (
    StartContentModerationErrorBody,
    start_content_moderation_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_rekognition_content_moderation_api import (
    XAmzTarget1AmazonRekognitionContentModerationApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_rekognition_content_moderation_api import (
    XAmzTarget2AmazonRekognitionContentModerationApiOrStr,
)
from ..models.enums.x_amz_target_amazon_rekognition_content_moderation_api import (
    XAmzTargetAmazonRekognitionContentModerationApiOrStr,
)
from ..server.server import Server


class ContentModeration:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContentModerationWithRawResponse(client, server, auth)

    def detect_moderation_labels(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images
        depending on your requirements. For example, you might want to filter images that contain nudity, but not images
        containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine
        which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in
        the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a
        reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations,
        passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an
        adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion
        argument.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; ResourceNotReadyException HumanLoopQuotaExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.detect_moderation_labels(x_amz_target, request_options=request_options))

    def get_content_moderation(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets the inappropriate, unwanted, or offensive content analysis results for a Amazon Rekognition Video
        analysis started by StartContentModeration. For a list of moderation labels in Amazon Rekognition, see Using the
        image and video moderation APIs. Amazon Rekognition Video inappropriate or offensive content detection in a
        stored video is an asynchronous operation. You start analysis by calling StartContentModeration which returns a
        job identifier (JobId). When analysis finishes, Amazon Rekognition Video publishes a completion status to the
        Amazon Simple Notification Service topic registered in the initial call to StartContentModeration. To get the
        results of the content analysis, first check that the status value published to the Amazon SNS topic is
        SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to
        StartContentModeration. For more information, see Working with Stored Videos in the Amazon Rekognition Devlopers
        Guide. GetContentModeration returns detected inappropriate, unwanted, or offensive content moderation labels,
        and the time they are detected, in an array, ModerationLabels, of ContentModerationDetection objects. By default

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException; ResourceNotFoundException InternalServerError;
                ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_content_moderation(x_amz_target, request_options=request_options))

    def start_content_moderation(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Starts asynchronous detection of inappropriate, unwanted, or offensive content in a stored video. For a list
        of moderation labels in Amazon Rekognition, see Using the image and video moderation APIs. Amazon Rekognition
        Video can moderate content in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and
        the filename of the video. StartContentModeration returns a job identifier (JobId) which you use to get the
        results of the analysis. When content analysis is finished, Amazon Rekognition Video publishes a completion
        status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the
        results of the content analysis, first check that the status value published to the Amazon SNS topic is
        SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to
        StartContentModeration. For more information, see Moderating content in the Amazon Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; IdempotentParameterMismatchException; InvalidParameterException;
                InvalidS3ObjectException; LimitExceededException; ProvisionedThroughputExceededException;
                VideoTooLargeException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_content_moderation(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> ContentModerationWithRawResponse:
        return self._with_raw_response


class AsyncContentModeration:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContentModerationWithRawResponse(client, server, auth)

    async def detect_moderation_labels(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images
        depending on your requirements. For example, you might want to filter images that contain nudity, but not images
        containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine
        which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in
        the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a
        reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations,
        passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an
        adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion
        argument.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException;
                ResourceNotFoundException; ResourceNotReadyException HumanLoopQuotaExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.detect_moderation_labels(x_amz_target, request_options=request_options)
        )

    async def get_content_moderation(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets the inappropriate, unwanted, or offensive content analysis results for a Amazon Rekognition Video
        analysis started by StartContentModeration. For a list of moderation labels in Amazon Rekognition, see Using the
        image and video moderation APIs. Amazon Rekognition Video inappropriate or offensive content detection in a
        stored video is an asynchronous operation. You start analysis by calling StartContentModeration which returns a
        job identifier (JobId). When analysis finishes, Amazon Rekognition Video publishes a completion status to the
        Amazon Simple Notification Service topic registered in the initial call to StartContentModeration. To get the
        results of the content analysis, first check that the status value published to the Amazon SNS topic is
        SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to
        StartContentModeration. For more information, see Working with Stored Videos in the Amazon Rekognition Devlopers
        Guide. GetContentModeration returns detected inappropriate, unwanted, or offensive content moderation labels,
        and the time they are detected, in an array, ModerationLabels, of ContentModerationDetection objects. By default

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException; ResourceNotFoundException InternalServerError;
                ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_content_moderation(x_amz_target, request_options=request_options)
        )

    async def start_content_moderation(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Starts asynchronous detection of inappropriate, unwanted, or offensive content in a stored video. For a list
        of moderation labels in Amazon Rekognition, see Using the image and video moderation APIs. Amazon Rekognition
        Video can moderate content in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and
        the filename of the video. StartContentModeration returns a job identifier (JobId) which you use to get the
        results of the analysis. When content analysis is finished, Amazon Rekognition Video publishes a completion
        status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the
        results of the content analysis, first check that the status value published to the Amazon SNS topic is
        SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to
        StartContentModeration. For more information, see Moderating content in the Amazon Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; IdempotentParameterMismatchException; InvalidParameterException;
                InvalidS3ObjectException; LimitExceededException; ProvisionedThroughputExceededException;
                VideoTooLargeException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_content_moderation(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncContentModerationWithRawResponse:
        return self._with_raw_response


class ContentModerationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def detect_moderation_labels(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectModerationLabelsErrorBody]:
        """Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images
        depending on your requirements. For example, you might want to filter images that contain nudity, but not images
        containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine
        which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in
        the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a
        reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations,
        passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an
        adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion
        argument.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectModerationLabels"),
            headers=[
                param[XAmzTarget2AmazonRekognitionContentModerationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_moderation_labels_error_mapper,
            request_options=request_options,
        )

    def get_content_moderation(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetContentModerationErrorBody]:
        """Gets the inappropriate, unwanted, or offensive content analysis results for a Amazon Rekognition Video
        analysis started by StartContentModeration. For a list of moderation labels in Amazon Rekognition, see Using the
        image and video moderation APIs. Amazon Rekognition Video inappropriate or offensive content detection in a
        stored video is an asynchronous operation. You start analysis by calling StartContentModeration which returns a
        job identifier (JobId). When analysis finishes, Amazon Rekognition Video publishes a completion status to the
        Amazon Simple Notification Service topic registered in the initial call to StartContentModeration. To get the
        results of the content analysis, first check that the status value published to the Amazon SNS topic is
        SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to
        StartContentModeration. For more information, see Working with Stored Videos in the Amazon Rekognition Devlopers
        Guide. GetContentModeration returns detected inappropriate, unwanted, or offensive content moderation labels,
        and the time they are detected, in an array, ModerationLabels, of ContentModerationDetection objects. By default

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetContentModeration"),
            headers=[
                param[XAmzTargetAmazonRekognitionContentModerationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_content_moderation_error_mapper,
            request_options=request_options,
        )

    def start_content_moderation(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartContentModerationErrorBody]:
        """Starts asynchronous detection of inappropriate, unwanted, or offensive content in a stored video. For a list
        of moderation labels in Amazon Rekognition, see Using the image and video moderation APIs. Amazon Rekognition
        Video can moderate content in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and
        the filename of the video. StartContentModeration returns a job identifier (JobId) which you use to get the
        results of the analysis. When content analysis is finished, Amazon Rekognition Video publishes a completion
        status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the
        results of the content analysis, first check that the status value published to the Amazon SNS topic is
        SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to
        StartContentModeration. For more information, see Moderating content in the Amazon Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartContentModeration"),
            headers=[
                param[XAmzTarget1AmazonRekognitionContentModerationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_content_moderation_error_mapper,
            request_options=request_options,
        )


class AsyncContentModerationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def detect_moderation_labels(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectModerationLabelsErrorBody]:
        """Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images
        depending on your requirements. For example, you might want to filter images that contain nudity, but not images
        containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine
        which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in
        the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a
        reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations,
        passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an
        adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion
        argument.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectModerationLabels"),
            headers=[
                param[XAmzTarget2AmazonRekognitionContentModerationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_moderation_labels_error_mapper,
            request_options=request_options,
        )

    async def get_content_moderation(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetContentModerationErrorBody]:
        """Gets the inappropriate, unwanted, or offensive content analysis results for a Amazon Rekognition Video
        analysis started by StartContentModeration. For a list of moderation labels in Amazon Rekognition, see Using the
        image and video moderation APIs. Amazon Rekognition Video inappropriate or offensive content detection in a
        stored video is an asynchronous operation. You start analysis by calling StartContentModeration which returns a
        job identifier (JobId). When analysis finishes, Amazon Rekognition Video publishes a completion status to the
        Amazon Simple Notification Service topic registered in the initial call to StartContentModeration. To get the
        results of the content analysis, first check that the status value published to the Amazon SNS topic is
        SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to
        StartContentModeration. For more information, see Working with Stored Videos in the Amazon Rekognition Devlopers
        Guide. GetContentModeration returns detected inappropriate, unwanted, or offensive content moderation labels,
        and the time they are detected, in an array, ModerationLabels, of ContentModerationDetection objects. By default

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetContentModeration"),
            headers=[
                param[XAmzTargetAmazonRekognitionContentModerationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_content_moderation_error_mapper,
            request_options=request_options,
        )

    async def start_content_moderation(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionContentModerationApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartContentModerationErrorBody]:
        """Starts asynchronous detection of inappropriate, unwanted, or offensive content in a stored video. For a list
        of moderation labels in Amazon Rekognition, see Using the image and video moderation APIs. Amazon Rekognition
        Video can moderate content in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and
        the filename of the video. StartContentModeration returns a job identifier (JobId) which you use to get the
        results of the analysis. When content analysis is finished, Amazon Rekognition Video publishes a completion
        status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the
        results of the content analysis, first check that the status value published to the Amazon SNS topic is
        SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to
        StartContentModeration. For more information, see Moderating content in the Amazon Rekognition Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartContentModeration"),
            headers=[
                param[XAmzTarget1AmazonRekognitionContentModerationApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_content_moderation_error_mapper,
            request_options=request_options,
        )
