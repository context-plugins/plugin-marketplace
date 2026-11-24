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
from ..errors.detect_text2_error import DetectText2ErrorBody, detect_text2_error_mapper
from ..errors.get_text_detection_error import GetTextDetectionErrorBody, get_text_detection_error_mapper
from ..errors.start_text_detection_error import StartTextDetectionErrorBody, start_text_detection_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_text_detection_api import (
    XAmzTarget1AmazonRekognitionTextDetectionApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_rekognition_text_detection_api import (
    XAmzTarget2AmazonRekognitionTextDetectionApiOrStr,
)
from ..models.enums.x_amz_target_amazon_rekognition_text_detection_api import (
    XAmzTargetAmazonRekognitionTextDetectionApiOrStr,
)
from ..server.server import Server


class TextDetectionApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TextDetectionApiWithRawResponse(client, server, auth)

    def detect_text2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Detects text in the input image and converts it into machine-readable text. Pass the input image as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS
        CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The
        DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection
        element provides information about a single word or line of text that was detected in the image. A word is one
        or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A
        line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's
        license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when
        there is a large gap between words, relative to the length of the words. This means, depending on the gap
        between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

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
        return unwrap(self._with_raw_response.detect_text2(x_amz_target, request_options=request_options))

    def get_text_detection(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets the text detection results of a Amazon Rekognition Video analysis started by StartTextDetection. Text
        detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by calling
        StartTextDetection which returns a job identifier (JobId) When the text detection operation finishes, Amazon
        Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the
        initial call to StartTextDetection. To get the results of the text detection operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and pass the job
        identifier (JobId) from the initial call of StartLabelDetection. GetTextDetection returns an array of detected
        text (TextDetections) sorted by the time the text was detected, up to 100 words per frame of video. Each element
        of the array includes the detected text, the precentage confidence in the acuracy of the detected text, the time
        the text was detected, bounding box information for where the text was located, and unique identifiers for words
        and their lines. Use MaxResults parameter to limit the number of text detections returned. If there are

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
        return unwrap(self._with_raw_response.get_text_detection(x_amz_target, request_options=request_options))

    def start_text_detection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Starts asynchronous detection of text in a stored video. Amazon Rekognition Video can detect text in a video
        stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video.
        StartTextDetection returns a job identifier (JobId) which you use to get the results of the operation. When text
        detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic that you specify in NotificationChannel. To get the results of the text detection operation, first
        check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and
        pass the job identifier (JobId) from the initial call to StartTextDetection.

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
        return unwrap(self._with_raw_response.start_text_detection(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> TextDetectionApiWithRawResponse:
        return self._with_raw_response


class AsyncTextDetectionApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTextDetectionApiWithRawResponse(client, server, auth)

    async def detect_text2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Detects text in the input image and converts it into machine-readable text. Pass the input image as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS
        CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The
        DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection
        element provides information about a single word or line of text that was detected in the image. A word is one
        or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A
        line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's
        license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when
        there is a large gap between words, relative to the length of the words. This means, depending on the gap
        between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

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
        return unwrap(await self._with_raw_response.detect_text2(x_amz_target, request_options=request_options))

    async def get_text_detection(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets the text detection results of a Amazon Rekognition Video analysis started by StartTextDetection. Text
        detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by calling
        StartTextDetection which returns a job identifier (JobId) When the text detection operation finishes, Amazon
        Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the
        initial call to StartTextDetection. To get the results of the text detection operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and pass the job
        identifier (JobId) from the initial call of StartLabelDetection. GetTextDetection returns an array of detected
        text (TextDetections) sorted by the time the text was detected, up to 100 words per frame of video. Each element
        of the array includes the detected text, the precentage confidence in the acuracy of the detected text, the time
        the text was detected, bounding box information for where the text was located, and unique identifiers for words
        and their lines. Use MaxResults parameter to limit the number of text detections returned. If there are

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
        return unwrap(await self._with_raw_response.get_text_detection(x_amz_target, request_options=request_options))

    async def start_text_detection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Starts asynchronous detection of text in a stored video. Amazon Rekognition Video can detect text in a video
        stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video.
        StartTextDetection returns a job identifier (JobId) which you use to get the results of the operation. When text
        detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic that you specify in NotificationChannel. To get the results of the text detection operation, first
        check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and
        pass the job identifier (JobId) from the initial call to StartTextDetection.

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
        return unwrap(await self._with_raw_response.start_text_detection(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTextDetectionApiWithRawResponse:
        return self._with_raw_response


class TextDetectionApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def detect_text2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectText2ErrorBody]:
        """Detects text in the input image and converts it into machine-readable text. Pass the input image as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS
        CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The
        DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection
        element provides information about a single word or line of text that was detected in the image. A word is one
        or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A
        line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's
        license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when
        there is a large gap between words, relative to the length of the words. This means, depending on the gap
        between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectText"),
            headers=[
                param[XAmzTarget2AmazonRekognitionTextDetectionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_text2_error_mapper,
            request_options=request_options,
        )

    def get_text_detection(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetTextDetectionErrorBody]:
        """Gets the text detection results of a Amazon Rekognition Video analysis started by StartTextDetection. Text
        detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by calling
        StartTextDetection which returns a job identifier (JobId) When the text detection operation finishes, Amazon
        Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the
        initial call to StartTextDetection. To get the results of the text detection operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and pass the job
        identifier (JobId) from the initial call of StartLabelDetection. GetTextDetection returns an array of detected
        text (TextDetections) sorted by the time the text was detected, up to 100 words per frame of video. Each element
        of the array includes the detected text, the precentage confidence in the acuracy of the detected text, the time
        the text was detected, bounding box information for where the text was located, and unique identifiers for words
        and their lines. Use MaxResults parameter to limit the number of text detections returned. If there are

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetTextDetection"),
            headers=[
                param[XAmzTargetAmazonRekognitionTextDetectionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_text_detection_error_mapper,
            request_options=request_options,
        )

    def start_text_detection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartTextDetectionErrorBody]:
        """Starts asynchronous detection of text in a stored video. Amazon Rekognition Video can detect text in a video
        stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video.
        StartTextDetection returns a job identifier (JobId) which you use to get the results of the operation. When text
        detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic that you specify in NotificationChannel. To get the results of the text detection operation, first
        check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and
        pass the job identifier (JobId) from the initial call to StartTextDetection.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartTextDetection"),
            headers=[
                param[XAmzTarget1AmazonRekognitionTextDetectionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_text_detection_error_mapper,
            request_options=request_options,
        )


class AsyncTextDetectionApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def detect_text2(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectText2ErrorBody]:
        """Detects text in the input image and converts it into machine-readable text. Pass the input image as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS
        CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The
        DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection
        element provides information about a single word or line of text that was detected in the image. A word is one
        or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A
        line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's
        license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when
        there is a large gap between words, relative to the length of the words. This means, depending on the gap
        between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectText"),
            headers=[
                param[XAmzTarget2AmazonRekognitionTextDetectionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_text2_error_mapper,
            request_options=request_options,
        )

    async def get_text_detection(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetTextDetectionErrorBody]:
        """Gets the text detection results of a Amazon Rekognition Video analysis started by StartTextDetection. Text
        detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by calling
        StartTextDetection which returns a job identifier (JobId) When the text detection operation finishes, Amazon
        Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the
        initial call to StartTextDetection. To get the results of the text detection operation, first check that the
        status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and pass the job
        identifier (JobId) from the initial call of StartLabelDetection. GetTextDetection returns an array of detected
        text (TextDetections) sorted by the time the text was detected, up to 100 words per frame of video. Each element
        of the array includes the detected text, the precentage confidence in the acuracy of the detected text, the time
        the text was detected, bounding box information for where the text was located, and unique identifiers for words
        and their lines. Use MaxResults parameter to limit the number of text detections returned. If there are

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetTextDetection"),
            headers=[
                param[XAmzTargetAmazonRekognitionTextDetectionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_text_detection_error_mapper,
            request_options=request_options,
        )

    async def start_text_detection(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionTextDetectionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartTextDetectionErrorBody]:
        """Starts asynchronous detection of text in a stored video. Amazon Rekognition Video can detect text in a video
        stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video.
        StartTextDetection returns a job identifier (JobId) which you use to get the results of the operation. When text
        detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic that you specify in NotificationChannel. To get the results of the text detection operation, first
        check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and
        pass the job identifier (JobId) from the initial call to StartTextDetection.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartTextDetection"),
            headers=[
                param[XAmzTarget1AmazonRekognitionTextDetectionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_text_detection_error_mapper,
            request_options=request_options,
        )
