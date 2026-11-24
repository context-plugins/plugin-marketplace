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
from ..errors.create_user_error import CreateUserErrorBody, create_user_error_mapper
from ..errors.delete_user_error import DeleteUserErrorBody, delete_user_error_mapper
from ..errors.list_users_error import ListUsersErrorBody, list_users_error_mapper
from ..errors.search_users_by_image_error import SearchUsersByImageErrorBody, search_users_by_image_error_mapper
from ..errors.search_users_error import SearchUsersErrorBody, search_users_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_user_api import XAmzTarget1AmazonRekognitionUserApiOrStr
from ..models.enums.x_amz_target2_amazon_rekognition_user_api import XAmzTarget2AmazonRekognitionUserApiOrStr
from ..models.enums.x_amz_target3_amazon_rekognition_user_api import XAmzTarget3AmazonRekognitionUserApiOrStr
from ..models.enums.x_amz_target4_amazon_rekognition_user_api import XAmzTarget4AmazonRekognitionUserApiOrStr
from ..models.enums.x_amz_target_amazon_rekognition_user_api import XAmzTargetAmazonRekognitionUserApiOrStr
from ..server.server import Server


class UserApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UserApiWithRawResponse(client, server, auth)

    def create_user(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionUserApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new User within a collection specified by CollectionId. Takes UserId as a parameter, which is a
        user provided ID which should be unique within the collection. The provided UserId will alias the system
        generated UUID to make the UserId more user friendly. Uses a ClientToken, an idempotency token that ensures a
        call to CreateUser completes only once. If the value is not supplied, the AWS SDK generates an idempotency token
        for the requests. This prevents retries after a network error results from making multiple CreateUser calls.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ConflictException; IdempotentParameterMismatchException;
                InvalidParameterException; ProvisionedThroughputExceededException; ResourceNotFoundException;
                ServiceQuotaExceededException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_user(x_amz_target, request_options=request_options))

    def delete_user(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionUserApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified UserID within the collection. Faces that are associated with the UserID are
        disassociated from the UserID before deleting the specified UserID. If the specified Collection or UserID is
        already deleted or not found, a ResourceNotFoundException will be thrown. If the action is successful with a 200
        response, an empty HTTP body is returned.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ConflictException; IdempotentParameterMismatchException;
                InvalidParameterException; ProvisionedThroughputExceededException; ResourceNotFoundException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_user(x_amz_target, request_options=request_options))

    def list_users(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionUserApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns metadata of the User such as UserID in the specified collection. Anonymous User (to reserve faces
        without any identity) is not returned as part of this request. The results are sorted by system generated
        primary key ID. If the response is truncated, NextToken is returned in the response that can be used in the
        subsequent request to retrieve the next set of identities.

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
        return unwrap(self._with_raw_response.list_users(x_amz_target, request_options=request_options))

    def search_users(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionUserApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Searches for UserIDs within a collection based on a FaceId or UserId. This API can be used to find the
        closest UserID (with a highest similarity) to associate a face. The request must be provided with either FaceId
        or UserId. The operation returns an array of UserID that match the FaceId or UserId, ordered by similarity score
        with the highest similarity first.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.search_users(x_amz_target, request_options=request_options))

    def search_users_by_image(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionUserApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Searches for UserIDs using a supplied image. It first detects the largest face in the image, and then
        searches a specified collection for matching UserIDs. The operation returns an array of UserIDs that match the
        face in the supplied image, ordered by similarity score with the highest similarity first. It also returns a
        bounding box for the face found in the input image. Information about faces detected in the supplied image, but
        not used for the search, is returned in an array of UnsearchedFace objects. If no valid face is detected in the
        image, the response will contain an empty UserMatches list and no SearchedFace object.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.search_users_by_image(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> UserApiWithRawResponse:
        return self._with_raw_response


class AsyncUserApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUserApiWithRawResponse(client, server, auth)

    async def create_user(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionUserApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new User within a collection specified by CollectionId. Takes UserId as a parameter, which is a
        user provided ID which should be unique within the collection. The provided UserId will alias the system
        generated UUID to make the UserId more user friendly. Uses a ClientToken, an idempotency token that ensures a
        call to CreateUser completes only once. If the value is not supplied, the AWS SDK generates an idempotency token
        for the requests. This prevents retries after a network error results from making multiple CreateUser calls.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ConflictException; IdempotentParameterMismatchException;
                InvalidParameterException; ProvisionedThroughputExceededException; ResourceNotFoundException;
                ServiceQuotaExceededException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_user(x_amz_target, request_options=request_options))

    async def delete_user(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionUserApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the specified UserID within the collection. Faces that are associated with the UserID are
        disassociated from the UserID before deleting the specified UserID. If the specified Collection or UserID is
        already deleted or not found, a ResourceNotFoundException will be thrown. If the action is successful with a 200
        response, an empty HTTP body is returned.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ConflictException; IdempotentParameterMismatchException;
                InvalidParameterException; ProvisionedThroughputExceededException; ResourceNotFoundException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_user(x_amz_target, request_options=request_options))

    async def list_users(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionUserApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns metadata of the User such as UserID in the specified collection. Anonymous User (to reserve faces
        without any identity) is not returned as part of this request. The results are sorted by system generated
        primary key ID. If the response is truncated, NextToken is returned in the response that can be used in the
        subsequent request to retrieve the next set of identities.

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
        return unwrap(await self._with_raw_response.list_users(x_amz_target, request_options=request_options))

    async def search_users(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionUserApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Searches for UserIDs within a collection based on a FaceId or UserId. This API can be used to find the
        closest UserID (with a highest similarity) to associate a face. The request must be provided with either FaceId
        or UserId. The operation returns an array of UserID that match the FaceId or UserId, ordered by similarity score
        with the highest similarity first.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.search_users(x_amz_target, request_options=request_options))

    async def search_users_by_image(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionUserApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Searches for UserIDs using a supplied image. It first detects the largest face in the image, and then
        searches a specified collection for matching UserIDs. The operation returns an array of UserIDs that match the
        face in the supplied image, ordered by similarity score with the highest similarity first. It also returns a
        bounding box for the face found in the input image. Information about faces detected in the supplied image, but
        not used for the search, is returned in an array of UnsearchedFace objects. If no valid face is detected in the
        image, the response will contain an empty UserMatches list and no SearchedFace object.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; ImageTooLargeException; InvalidImageFormatException;
                InvalidParameterException; InvalidS3ObjectException; ProvisionedThroughputExceededException;
                ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_users_by_image(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncUserApiWithRawResponse:
        return self._with_raw_response


class UserApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_user(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionUserApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateUserErrorBody]:
        """Creates a new User within a collection specified by CollectionId. Takes UserId as a parameter, which is a
        user provided ID which should be unique within the collection. The provided UserId will alias the system
        generated UUID to make the UserId more user friendly. Uses a ClientToken, an idempotency token that ensures a
        call to CreateUser completes only once. If the value is not supplied, the AWS SDK generates an idempotency token
        for the requests. This prevents retries after a network error results from making multiple CreateUser calls.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateUser"),
            headers=[
                param[XAmzTargetAmazonRekognitionUserApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_user_error_mapper,
            request_options=request_options,
        )

    def delete_user(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionUserApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteUserErrorBody]:
        """Deletes the specified UserID within the collection. Faces that are associated with the UserID are
        disassociated from the UserID before deleting the specified UserID. If the specified Collection or UserID is
        already deleted or not found, a ResourceNotFoundException will be thrown. If the action is successful with a 200
        response, an empty HTTP body is returned.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteUser"),
            headers=[
                param[XAmzTarget1AmazonRekognitionUserApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_user_error_mapper,
            request_options=request_options,
        )

    def list_users(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionUserApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListUsersErrorBody]:
        """Returns metadata of the User such as UserID in the specified collection. Anonymous User (to reserve faces
        without any identity) is not returned as part of this request. The results are sorted by system generated
        primary key ID. If the response is truncated, NextToken is returned in the response that can be used in the
        subsequent request to retrieve the next set of identities.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListUsers"),
            headers=[
                param[XAmzTarget2AmazonRekognitionUserApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_users_error_mapper,
            request_options=request_options,
        )

    def search_users(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionUserApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SearchUsersErrorBody]:
        """Searches for UserIDs within a collection based on a FaceId or UserId. This API can be used to find the
        closest UserID (with a highest similarity) to associate a face. The request must be provided with either FaceId
        or UserId. The operation returns an array of UserID that match the FaceId or UserId, ordered by similarity score
        with the highest similarity first.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SearchUsers"),
            headers=[
                param[XAmzTarget3AmazonRekognitionUserApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=search_users_error_mapper,
            request_options=request_options,
        )

    def search_users_by_image(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionUserApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SearchUsersByImageErrorBody]:
        """Searches for UserIDs using a supplied image. It first detects the largest face in the image, and then
        searches a specified collection for matching UserIDs. The operation returns an array of UserIDs that match the
        face in the supplied image, ordered by similarity score with the highest similarity first. It also returns a
        bounding box for the face found in the input image. Information about faces detected in the supplied image, but
        not used for the search, is returned in an array of UnsearchedFace objects. If no valid face is detected in the
        image, the response will contain an empty UserMatches list and no SearchedFace object.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SearchUsersByImage"),
            headers=[
                param[XAmzTarget4AmazonRekognitionUserApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=search_users_by_image_error_mapper,
            request_options=request_options,
        )


class AsyncUserApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_user(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionUserApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateUserErrorBody]:
        """Creates a new User within a collection specified by CollectionId. Takes UserId as a parameter, which is a
        user provided ID which should be unique within the collection. The provided UserId will alias the system
        generated UUID to make the UserId more user friendly. Uses a ClientToken, an idempotency token that ensures a
        call to CreateUser completes only once. If the value is not supplied, the AWS SDK generates an idempotency token
        for the requests. This prevents retries after a network error results from making multiple CreateUser calls.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateUser"),
            headers=[
                param[XAmzTargetAmazonRekognitionUserApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_user_error_mapper,
            request_options=request_options,
        )

    async def delete_user(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionUserApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteUserErrorBody]:
        """Deletes the specified UserID within the collection. Faces that are associated with the UserID are
        disassociated from the UserID before deleting the specified UserID. If the specified Collection or UserID is
        already deleted or not found, a ResourceNotFoundException will be thrown. If the action is successful with a 200
        response, an empty HTTP body is returned.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteUser"),
            headers=[
                param[XAmzTarget1AmazonRekognitionUserApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_user_error_mapper,
            request_options=request_options,
        )

    async def list_users(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionUserApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListUsersErrorBody]:
        """Returns metadata of the User such as UserID in the specified collection. Anonymous User (to reserve faces
        without any identity) is not returned as part of this request. The results are sorted by system generated
        primary key ID. If the response is truncated, NextToken is returned in the response that can be used in the
        subsequent request to retrieve the next set of identities.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListUsers"),
            headers=[
                param[XAmzTarget2AmazonRekognitionUserApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_users_error_mapper,
            request_options=request_options,
        )

    async def search_users(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionUserApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SearchUsersErrorBody]:
        """Searches for UserIDs within a collection based on a FaceId or UserId. This API can be used to find the
        closest UserID (with a highest similarity) to associate a face. The request must be provided with either FaceId
        or UserId. The operation returns an array of UserID that match the FaceId or UserId, ordered by similarity score
        with the highest similarity first.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SearchUsers"),
            headers=[
                param[XAmzTarget3AmazonRekognitionUserApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=search_users_error_mapper,
            request_options=request_options,
        )

    async def search_users_by_image(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionUserApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SearchUsersByImageErrorBody]:
        """Searches for UserIDs using a supplied image. It first detects the largest face in the image, and then
        searches a specified collection for matching UserIDs. The operation returns an array of UserIDs that match the
        face in the supplied image, ordered by similarity score with the highest similarity first. It also returns a
        bounding box for the face found in the input image. Information about faces detected in the supplied image, but
        not used for the search, is returned in an array of UnsearchedFace objects. If no valid face is detected in the
        image, the response will contain an empty UserMatches list and no SearchedFace object.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SearchUsersByImage"),
            headers=[
                param[XAmzTarget4AmazonRekognitionUserApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=search_users_by_image_error_mapper,
            request_options=request_options,
        )
