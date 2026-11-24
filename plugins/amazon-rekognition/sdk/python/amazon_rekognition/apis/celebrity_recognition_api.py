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
from ..errors.get_celebrity_recognition_error import (
    GetCelebrityRecognitionErrorBody,
    get_celebrity_recognition_error_mapper,
)
from ..errors.recognize_celebrities_error import RecognizeCelebritiesErrorBody, recognize_celebrities_error_mapper
from ..errors.start_celebrity_recognition_error import (
    StartCelebrityRecognitionErrorBody,
    start_celebrity_recognition_error_mapper,
)
from ..models.enums.x_amz_target import XAmzTargetOrStr
from ..models.enums.x_amz_target1 import XAmzTarget1OrStr
from ..models.enums.x_amz_target2 import XAmzTarget2OrStr
from ..server.server import Server


class CelebrityRecognitionApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CelebrityRecognitionApiWithRawResponse(client, server, auth)

    def get_celebrity_recognition(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by
        StartCelebrityRecognition. Celebrity recognition in a video is an asynchronous operation. Analysis is started by
        a call to StartCelebrityRecognition which returns a job identifier (JobId). When the celebrity recognition
        operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic registered in the initial call to StartCelebrityRecognition. To get the results of the celebrity
        recognition analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so,
        call GetCelebrityDetection and pass the job identifier (JobId) from the initial call to StartCelebrityDetection.
        For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide.
        GetCelebrityRecognition returns detected celebrities and the time(s) they are detected in an array (Celebrities)
        of CelebrityRecognition objects. Each CelebrityRecognition contains information about the celebrity in a
        CelebrityDetail object and the time, Timestamp, the celebrity was detected. This CelebrityDetail object stores
        information about the

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
        return unwrap(self._with_raw_response.get_celebrity_recognition(x_amz_target, request_options=request_options))

    def recognize_celebrities(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns an array of celebrities recognized in the input image. For more information, see Recognizing
        celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the
        image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the
        UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64
        faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The
        Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a
        ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't
        retain information about which images a celebrity has been recognized in. Your application must store this
        information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the
        celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify
        the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded
        image

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
        return unwrap(self._with_raw_response.recognize_celebrities(x_amz_target, request_options=request_options))

    def start_celebrity_recognition(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Starts asynchronous recognition of celebrities in a stored video. Amazon Rekognition Video can detect
        celebrities in a video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the
        filename of the video. StartCelebrityRecognition returns a job identifier (JobId) which you use to get the
        results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a
        completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To
        get the results of the celebrity recognition analysis, first check that the status value published to the Amazon
        SNS topic is SUCCEEDED. If so, call GetCelebrityRecognition and pass the job identifier (JobId) from the initial
        call to StartCelebrityRecognition. For more information, see Recognizing celebrities in the Amazon Rekognition
        Developer Guide.

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
            self._with_raw_response.start_celebrity_recognition(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CelebrityRecognitionApiWithRawResponse:
        return self._with_raw_response


class AsyncCelebrityRecognitionApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCelebrityRecognitionApiWithRawResponse(client, server, auth)

    async def get_celebrity_recognition(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by
        StartCelebrityRecognition. Celebrity recognition in a video is an asynchronous operation. Analysis is started by
        a call to StartCelebrityRecognition which returns a job identifier (JobId). When the celebrity recognition
        operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic registered in the initial call to StartCelebrityRecognition. To get the results of the celebrity
        recognition analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so,
        call GetCelebrityDetection and pass the job identifier (JobId) from the initial call to StartCelebrityDetection.
        For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide.
        GetCelebrityRecognition returns detected celebrities and the time(s) they are detected in an array (Celebrities)
        of CelebrityRecognition objects. Each CelebrityRecognition contains information about the celebrity in a
        CelebrityDetail object and the time, Timestamp, the celebrity was detected. This CelebrityDetail object stores
        information about the

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
            await self._with_raw_response.get_celebrity_recognition(x_amz_target, request_options=request_options)
        )

    async def recognize_celebrities(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns an array of celebrities recognized in the input image. For more information, see Recognizing
        celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the
        image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the
        UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64
        faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The
        Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a
        ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't
        retain information about which images a celebrity has been recognized in. Your application must store this
        information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the
        celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify
        the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded
        image

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
        return unwrap(
            await self._with_raw_response.recognize_celebrities(x_amz_target, request_options=request_options)
        )

    async def start_celebrity_recognition(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts asynchronous recognition of celebrities in a stored video. Amazon Rekognition Video can detect
        celebrities in a video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the
        filename of the video. StartCelebrityRecognition returns a job identifier (JobId) which you use to get the
        results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a
        completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To
        get the results of the celebrity recognition analysis, first check that the status value published to the Amazon
        SNS topic is SUCCEEDED. If so, call GetCelebrityRecognition and pass the job identifier (JobId) from the initial
        call to StartCelebrityRecognition. For more information, see Recognizing celebrities in the Amazon Rekognition
        Developer Guide.

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
            await self._with_raw_response.start_celebrity_recognition(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCelebrityRecognitionApiWithRawResponse:
        return self._with_raw_response


class CelebrityRecognitionApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_celebrity_recognition(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetCelebrityRecognitionErrorBody]:
        """Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by
        StartCelebrityRecognition. Celebrity recognition in a video is an asynchronous operation. Analysis is started by
        a call to StartCelebrityRecognition which returns a job identifier (JobId). When the celebrity recognition
        operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic registered in the initial call to StartCelebrityRecognition. To get the results of the celebrity
        recognition analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so,
        call GetCelebrityDetection and pass the job identifier (JobId) from the initial call to StartCelebrityDetection.
        For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide.
        GetCelebrityRecognition returns detected celebrities and the time(s) they are detected in an array (Celebrities)
        of CelebrityRecognition objects. Each CelebrityRecognition contains information about the celebrity in a
        CelebrityDetail object and the time, Timestamp, the celebrity was detected. This CelebrityDetail object stores
        information about the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetCelebrityRecognition"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_celebrity_recognition_error_mapper,
            request_options=request_options,
        )

    def recognize_celebrities(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RecognizeCelebritiesErrorBody]:
        """Returns an array of celebrities recognized in the input image. For more information, see Recognizing
        celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the
        image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the
        UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64
        faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The
        Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a
        ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't
        retain information about which images a celebrity has been recognized in. Your application must store this
        information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the
        celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify
        the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded
        image

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RecognizeCelebrities"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=recognize_celebrities_error_mapper,
            request_options=request_options,
        )

    def start_celebrity_recognition(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartCelebrityRecognitionErrorBody]:
        """Starts asynchronous recognition of celebrities in a stored video. Amazon Rekognition Video can detect
        celebrities in a video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the
        filename of the video. StartCelebrityRecognition returns a job identifier (JobId) which you use to get the
        results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a
        completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To
        get the results of the celebrity recognition analysis, first check that the status value published to the Amazon
        SNS topic is SUCCEEDED. If so, call GetCelebrityRecognition and pass the job identifier (JobId) from the initial
        call to StartCelebrityRecognition. For more information, see Recognizing celebrities in the Amazon Rekognition
        Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartCelebrityRecognition"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_celebrity_recognition_error_mapper,
            request_options=request_options,
        )


class AsyncCelebrityRecognitionApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_celebrity_recognition(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetCelebrityRecognitionErrorBody]:
        """Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by
        StartCelebrityRecognition. Celebrity recognition in a video is an asynchronous operation. Analysis is started by
        a call to StartCelebrityRecognition which returns a job identifier (JobId). When the celebrity recognition
        operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
        Service topic registered in the initial call to StartCelebrityRecognition. To get the results of the celebrity
        recognition analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so,
        call GetCelebrityDetection and pass the job identifier (JobId) from the initial call to StartCelebrityDetection.
        For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide.
        GetCelebrityRecognition returns detected celebrities and the time(s) they are detected in an array (Celebrities)
        of CelebrityRecognition objects. Each CelebrityRecognition contains information about the celebrity in a
        CelebrityDetail object and the time, Timestamp, the celebrity was detected. This CelebrityDetail object stores
        information about the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetCelebrityRecognition"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_celebrity_recognition_error_mapper,
            request_options=request_options,
        )

    async def recognize_celebrities(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RecognizeCelebritiesErrorBody]:
        """Returns an array of celebrities recognized in the input image. For more information, see Recognizing
        celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the
        image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the
        UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64
        faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The
        Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a
        ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't
        retain information about which images a celebrity has been recognized in. Your application must store this
        information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the
        celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify
        the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded
        image

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RecognizeCelebrities"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=recognize_celebrities_error_mapper,
            request_options=request_options,
        )

    async def start_celebrity_recognition(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, StartCelebrityRecognitionErrorBody]:
        """Starts asynchronous recognition of celebrities in a stored video. Amazon Rekognition Video can detect
        celebrities in a video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the
        filename of the video. StartCelebrityRecognition returns a job identifier (JobId) which you use to get the
        results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a
        completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To
        get the results of the celebrity recognition analysis, first check that the status value published to the Amazon
        SNS topic is SUCCEEDED. If so, call GetCelebrityRecognition and pass the job identifier (JobId) from the initial
        call to StartCelebrityRecognition. For more information, see Recognizing celebrities in the Amazon Rekognition
        Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartCelebrityRecognition"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_celebrity_recognition_error_mapper,
            request_options=request_options,
        )
