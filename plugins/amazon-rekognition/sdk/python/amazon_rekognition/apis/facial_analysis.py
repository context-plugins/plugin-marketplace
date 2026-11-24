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
from ..errors.compare_faces_error import CompareFacesErrorBody, compare_faces_error_mapper
from ..errors.detect_faces_error import DetectFacesErrorBody, detect_faces_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_facial_analysis_api import (
    XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr,
)
from ..models.enums.x_amz_target_amazon_rekognition_facial_analysis_api import (
    XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr,
)
from ..server.server import Server


class FacialAnalysis:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FacialAnalysisWithRawResponse(client, server, auth)

    def compare_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Compares a face in the source input image with each of the 100 largest faces detected in the target input
        image. If the source image contains multiple faces, the service detects the largest face and compares it with
        each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic.
        A false negative is an incorrect prediction that a face in the target image has a low similarity confidence
        score when compared to the face in the source image. To reduce the probability of false negatives, we recommend
        that you compare the target image against multiple source images. If you plan to use CompareFaces to make a
        decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the
        result to a human for review and further validation before taking action. You pass the input and target images
        either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI
        to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG
        or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

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
        return unwrap(self._with_raw_response.compare_faces(x_amz_target, request_options=request_options))

    def detect_faces(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the
        image. For each face detected, the operation returns face details. These details include a bounding box of the
        face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial
        landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The
        face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm
        might not detect the faces or might detect faces with lower confidence. You pass the input image either as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG
        formatted file. This is a stateless API operation. That is, the operation does not persist any data. This
        operation requires permissions to perform the rekognition:DetectFaces action.

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
        return unwrap(self._with_raw_response.detect_faces(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> FacialAnalysisWithRawResponse:
        return self._with_raw_response


class AsyncFacialAnalysis:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFacialAnalysisWithRawResponse(client, server, auth)

    async def compare_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Compares a face in the source input image with each of the 100 largest faces detected in the target input
        image. If the source image contains multiple faces, the service detects the largest face and compares it with
        each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic.
        A false negative is an incorrect prediction that a face in the target image has a low similarity confidence
        score when compared to the face in the source image. To reduce the probability of false negatives, we recommend
        that you compare the target image against multiple source images. If you plan to use CompareFaces to make a
        decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the
        result to a human for review and further validation before taking action. You pass the input and target images
        either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI
        to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG
        or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

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
        return unwrap(await self._with_raw_response.compare_faces(x_amz_target, request_options=request_options))

    async def detect_faces(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the
        image. For each face detected, the operation returns face details. These details include a bounding box of the
        face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial
        landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The
        face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm
        might not detect the faces or might detect faces with lower confidence. You pass the input image either as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG
        formatted file. This is a stateless API operation. That is, the operation does not persist any data. This
        operation requires permissions to perform the rekognition:DetectFaces action.

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
        return unwrap(await self._with_raw_response.detect_faces(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFacialAnalysisWithRawResponse:
        return self._with_raw_response


class FacialAnalysisWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def compare_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CompareFacesErrorBody]:
        """Compares a face in the source input image with each of the 100 largest faces detected in the target input
        image. If the source image contains multiple faces, the service detects the largest face and compares it with
        each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic.
        A false negative is an incorrect prediction that a face in the target image has a low similarity confidence
        score when compared to the face in the source image. To reduce the probability of false negatives, we recommend
        that you compare the target image against multiple source images. If you plan to use CompareFaces to make a
        decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the
        result to a human for review and further validation before taking action. You pass the input and target images
        either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI
        to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG
        or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CompareFaces"),
            headers=[
                param[XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=compare_faces_error_mapper,
            request_options=request_options,
        )

    def detect_faces(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectFacesErrorBody]:
        """Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the
        image. For each face detected, the operation returns face details. These details include a bounding box of the
        face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial
        landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The
        face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm
        might not detect the faces or might detect faces with lower confidence. You pass the input image either as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG
        formatted file. This is a stateless API operation. That is, the operation does not persist any data. This
        operation requires permissions to perform the rekognition:DetectFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectFaces"),
            headers=[
                param[XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=detect_faces_error_mapper,
            request_options=request_options,
        )


class AsyncFacialAnalysisWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def compare_faces(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CompareFacesErrorBody]:
        """Compares a face in the source input image with each of the 100 largest faces detected in the target input
        image. If the source image contains multiple faces, the service detects the largest face and compares it with
        each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic.
        A false negative is an incorrect prediction that a face in the target image has a low similarity confidence
        score when compared to the face in the source image. To reduce the probability of false negatives, we recommend
        that you compare the target image against multiple source images. If you plan to use CompareFaces to make a
        decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the
        result to a human for review and further validation before taking action. You pass the input and target images
        either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI
        to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG
        or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CompareFaces"),
            headers=[
                param[XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=compare_faces_error_mapper,
            request_options=request_options,
        )

    async def detect_faces(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DetectFacesErrorBody]:
        """Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the
        image. For each face detected, the operation returns face details. These details include a bounding box of the
        face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial
        landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The
        face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm
        might not detect the faces or might detect faces with lower confidence. You pass the input image either as
        base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call
        Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG
        formatted file. This is a stateless API operation. That is, the operation does not persist any data. This
        operation requires permissions to perform the rekognition:DetectFaces action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DetectFaces"),
            headers=[
                param[XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=detect_faces_error_mapper,
            request_options=request_options,
        )
