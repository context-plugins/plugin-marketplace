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
from ..errors.create_face_liveness_session_error import (
    CreateFaceLivenessSessionErrorBody,
    create_face_liveness_session_error_mapper,
)
from ..errors.get_face_liveness_session_results_error import (
    GetFaceLivenessSessionResultsErrorBody,
    get_face_liveness_session_results_error_mapper,
)
from ..models.enums.x_amz_target1_amazon_rekognition_face_liveness_api import (
    XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr,
)
from ..models.enums.x_amz_target_amazon_rekognition_face_liveness_api import (
    XAmzTargetAmazonRekognitionFaceLivenessApiOrStr,
)
from ..server.server import Server


class FaceLiveness:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FaceLivenessWithRawResponse(client, server, auth)

    def create_face_liveness_session(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceLivenessApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This API operation initiates a Face Liveness session. It returns a SessionId, which you can use to start
        streaming Face Liveness video and get the results for a Face Liveness session. You can use the OutputConfig
        option in the Settings parameter to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference
        images and audit images. If no Amazon S3 bucket is defined, raw bytes are sent instead. You can use
        AuditImagesLimit to limit the number of audit images returned when GetFaceLivenessSessionResults is called. This
        number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on the duration of the
        selfie-video. You can use the ChallengePreferences option in the Settings parameter to choose between the
        'FaceMovementAndLightChallenge' or FaceMovementChallenge' settings. See the Shared Responsibility page for
        details on guidance for which setting to choose between these two settings depending on your use case and
        preferences. This parameter is optional and if no parameter is provided, then the
        'FaceMovementAndLightChallenge' settings is applied by default.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_face_liveness_session(x_amz_target, request_options=request_options)
        )

    def get_face_liveness_session_results(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves the results of a specific Face Liveness session. It requires the sessionId as input, which was
        created using CreateFaceLivenessSession. Returns the corresponding Face Liveness confidence score, a reference
        image that includes a face bounding box, and audit images that also contain face bounding boxes. The Face
        Liveness confidence score ranges from 0 to 100. The number of audit images returned by
        GetFaceLivenessSessionResults is defined by the AuditImagesLimit paramater when calling
        CreateFaceLivenessSession. Reference images are always returned when possible. For a session that has completed,
        the response can also include a Feedback list describing conditions that were detected in the selfie-video, such
        as low lighting or an obstructed face, and Metadata about the client that streamed the session.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                SessionNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_face_liveness_session_results(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> FaceLivenessWithRawResponse:
        return self._with_raw_response


class AsyncFaceLiveness:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFaceLivenessWithRawResponse(client, server, auth)

    async def create_face_liveness_session(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceLivenessApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This API operation initiates a Face Liveness session. It returns a SessionId, which you can use to start
        streaming Face Liveness video and get the results for a Face Liveness session. You can use the OutputConfig
        option in the Settings parameter to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference
        images and audit images. If no Amazon S3 bucket is defined, raw bytes are sent instead. You can use
        AuditImagesLimit to limit the number of audit images returned when GetFaceLivenessSessionResults is called. This
        number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on the duration of the
        selfie-video. You can use the ChallengePreferences option in the Settings parameter to choose between the
        'FaceMovementAndLightChallenge' or FaceMovementChallenge' settings. See the Shared Responsibility page for
        details on guidance for which setting to choose between these two settings depending on your use case and
        preferences. This parameter is optional and if no parameter is provided, then the
        'FaceMovementAndLightChallenge' settings is applied by default.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_face_liveness_session(x_amz_target, request_options=request_options)
        )

    async def get_face_liveness_session_results(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves the results of a specific Face Liveness session. It requires the sessionId as input, which was
        created using CreateFaceLivenessSession. Returns the corresponding Face Liveness confidence score, a reference
        image that includes a face bounding box, and audit images that also contain face bounding boxes. The Face
        Liveness confidence score ranges from 0 to 100. The number of audit images returned by
        GetFaceLivenessSessionResults is defined by the AuditImagesLimit paramater when calling
        CreateFaceLivenessSession. Reference images are always returned when possible. For a session that has completed,
        the response can also include a Feedback list describing conditions that were detected in the selfie-video, such
        as low lighting or an obstructed face, and Metadata about the client that streamed the session.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                SessionNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_face_liveness_session_results(
                x_amz_target, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFaceLivenessWithRawResponse:
        return self._with_raw_response


class FaceLivenessWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_face_liveness_session(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceLivenessApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateFaceLivenessSessionErrorBody]:
        """This API operation initiates a Face Liveness session. It returns a SessionId, which you can use to start
        streaming Face Liveness video and get the results for a Face Liveness session. You can use the OutputConfig
        option in the Settings parameter to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference
        images and audit images. If no Amazon S3 bucket is defined, raw bytes are sent instead. You can use
        AuditImagesLimit to limit the number of audit images returned when GetFaceLivenessSessionResults is called. This
        number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on the duration of the
        selfie-video. You can use the ChallengePreferences option in the Settings parameter to choose between the
        'FaceMovementAndLightChallenge' or FaceMovementChallenge' settings. See the Shared Responsibility page for
        details on guidance for which setting to choose between these two settings depending on your use case and
        preferences. This parameter is optional and if no parameter is provided, then the
        'FaceMovementAndLightChallenge' settings is applied by default.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateFaceLivenessSession"),
            headers=[
                param[XAmzTargetAmazonRekognitionFaceLivenessApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_face_liveness_session_error_mapper,
            request_options=request_options,
        )

    def get_face_liveness_session_results(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetFaceLivenessSessionResultsErrorBody]:
        """Retrieves the results of a specific Face Liveness session. It requires the sessionId as input, which was
        created using CreateFaceLivenessSession. Returns the corresponding Face Liveness confidence score, a reference
        image that includes a face bounding box, and audit images that also contain face bounding boxes. The Face
        Liveness confidence score ranges from 0 to 100. The number of audit images returned by
        GetFaceLivenessSessionResults is defined by the AuditImagesLimit paramater when calling
        CreateFaceLivenessSession. Reference images are always returned when possible. For a session that has completed,
        the response can also include a Feedback list describing conditions that were detected in the selfie-video, such
        as low lighting or an obstructed face, and Metadata about the client that streamed the session.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetFaceLivenessSessionResults"),
            headers=[
                param[XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_face_liveness_session_results_error_mapper,
            request_options=request_options,
        )


class AsyncFaceLivenessWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_face_liveness_session(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionFaceLivenessApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateFaceLivenessSessionErrorBody]:
        """This API operation initiates a Face Liveness session. It returns a SessionId, which you can use to start
        streaming Face Liveness video and get the results for a Face Liveness session. You can use the OutputConfig
        option in the Settings parameter to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference
        images and audit images. If no Amazon S3 bucket is defined, raw bytes are sent instead. You can use
        AuditImagesLimit to limit the number of audit images returned when GetFaceLivenessSessionResults is called. This
        number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on the duration of the
        selfie-video. You can use the ChallengePreferences option in the Settings parameter to choose between the
        'FaceMovementAndLightChallenge' or FaceMovementChallenge' settings. See the Shared Responsibility page for
        details on guidance for which setting to choose between these two settings depending on your use case and
        preferences. This parameter is optional and if no parameter is provided, then the
        'FaceMovementAndLightChallenge' settings is applied by default.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateFaceLivenessSession"),
            headers=[
                param[XAmzTargetAmazonRekognitionFaceLivenessApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_face_liveness_session_error_mapper,
            request_options=request_options,
        )

    async def get_face_liveness_session_results(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetFaceLivenessSessionResultsErrorBody]:
        """Retrieves the results of a specific Face Liveness session. It requires the sessionId as input, which was
        created using CreateFaceLivenessSession. Returns the corresponding Face Liveness confidence score, a reference
        image that includes a face bounding box, and audit images that also contain face bounding boxes. The Face
        Liveness confidence score ranges from 0 to 100. The number of audit images returned by
        GetFaceLivenessSessionResults is defined by the AuditImagesLimit paramater when calling
        CreateFaceLivenessSession. Reference images are always returned when possible. For a session that has completed,
        the response can also include a Feedback list describing conditions that were detected in the selfie-video, such
        as low lighting or an obstructed face, and Metadata about the client that streamed the session.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetFaceLivenessSessionResults"),
            headers=[
                param[XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_face_liveness_session_results_error_mapper,
            request_options=request_options,
        )
