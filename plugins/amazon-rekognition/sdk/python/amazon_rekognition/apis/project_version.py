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
from ..errors.create_project_version_error import CreateProjectVersionErrorBody, create_project_version_error_mapper
from ..errors.delete_project_version_error import DeleteProjectVersionErrorBody, delete_project_version_error_mapper
from ..errors.describe_project_versions_error import (
    DescribeProjectVersionsErrorBody,
    describe_project_versions_error_mapper,
)
from ..errors.start_project_version_error import StartProjectVersionErrorBody, start_project_version_error_mapper
from ..errors.stop_project_version_error import StopProjectVersionErrorBody, stop_project_version_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_project_version_api import (
    XAmzTarget1AmazonRekognitionProjectVersionApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_rekognition_project_version_api import (
    XAmzTarget2AmazonRekognitionProjectVersionApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_rekognition_project_version_api import (
    XAmzTarget3AmazonRekognitionProjectVersionApiOrStr,
)
from ..models.enums.x_amz_target4_amazon_rekognition_project_version_api import (
    XAmzTarget4AmazonRekognitionProjectVersionApiOrStr,
)
from ..models.enums.x_amz_target_amazon_rekognition_project_version_api import (
    XAmzTargetAmazonRekognitionProjectVersionApiOrStr,
)
from ..server.server import Server


class ProjectVersion:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectVersionWithRawResponse(client, server, auth)

    def create_project_version(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new version of Amazon Rekognition project (like a Custom Labels model or a custom adapter) and
        begins training. Models and adapters are managed as part of a Rekognition project. The response from
        CreateProjectVersion is an Amazon Resource Name (ARN) for the project version. The FeatureConfig operation
        argument allows you to configure specific model or adapter settings. You can provide a description to the
        project version by using the VersionDescription argment. Training can take a while to complete. You can get the
        current status by calling DescribeProjectVersions. Training completed successfully if the value of the Status
        field is TRAINING_COMPLETED. Once training has successfully completed, call DescribeProjectVersions to get the
        training results and evaluate the model. This operation requires permissions to perform the
        rekognition:CreateProjectVersion action. The following applies only to projects with Amazon Rekognition Custom
        Labels as the chosen feature: You can train a model in a project that doesn't have associated datasets by
        specifying manifest files in the TrainingData and TestingData fields. If you open the console after training a
        model with manifest files, A

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException;
                ServiceQuotaExceededException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_project_version(x_amz_target, request_options=request_options))

    def delete_project_version(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a Rekognition project model or project version, like a Amazon Rekognition Custom Labels model or a
        custom adapter. You can't delete a project version if it is running or if it is training. To check the status of
        a project version, use the Status field returned from DescribeProjectVersions. To stop a project version call
        StopProjectVersion. If the project version is training, wait until it finishes. This operation requires
        permissions to perform the rekognition:DeleteProjectVersion action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_project_version(x_amz_target, request_options=request_options))

    def describe_project_versions(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Lists and describes the versions of an Amazon Rekognition project. You can specify up to 10 model or adapter
        versions in ProjectVersionArns. If you don't specify a value, descriptions for all model/adapter versions in the
        project are returned. This operation requires permissions to perform the rekognition:DescribeProjectVersions
        action.

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
        return unwrap(self._with_raw_response.describe_project_versions(x_amz_target, request_options=request_options))

    def start_project_version(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Starts the running of the version of a
        model. Starting a model takes a while to complete. To check the current state of the model, use
        DescribeProjectVersions. Once the model is running, you can detect custom labels in new images by calling
        DetectCustomLabels. You are charged for the amount of time that the model is running. To stop a running model,
        call StopProjectVersion. This operation requires permissions to perform the rekognition:StartProjectVersion
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.start_project_version(x_amz_target, request_options=request_options))

    def stop_project_version(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Stops a running model. The operation might
        take a while to complete. To check the current status, call DescribeProjectVersions. Only applies to Custom
        Labels projects. This operation requires permissions to perform the rekognition:StopProjectVersion action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.stop_project_version(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> ProjectVersionWithRawResponse:
        return self._with_raw_response


class AsyncProjectVersion:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectVersionWithRawResponse(client, server, auth)

    async def create_project_version(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new version of Amazon Rekognition project (like a Custom Labels model or a custom adapter) and
        begins training. Models and adapters are managed as part of a Rekognition project. The response from
        CreateProjectVersion is an Amazon Resource Name (ARN) for the project version. The FeatureConfig operation
        argument allows you to configure specific model or adapter settings. You can provide a description to the
        project version by using the VersionDescription argment. Training can take a while to complete. You can get the
        current status by calling DescribeProjectVersions. Training completed successfully if the value of the Status
        field is TRAINING_COMPLETED. Once training has successfully completed, call DescribeProjectVersions to get the
        training results and evaluate the model. This operation requires permissions to perform the
        rekognition:CreateProjectVersion action. The following applies only to projects with Amazon Rekognition Custom
        Labels as the chosen feature: You can train a model in a project that doesn't have associated datasets by
        specifying manifest files in the TrainingData and TestingData fields. If you open the console after training a
        model with manifest files, A

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException;
                ServiceQuotaExceededException InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_project_version(x_amz_target, request_options=request_options)
        )

    async def delete_project_version(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a Rekognition project model or project version, like a Amazon Rekognition Custom Labels model or a
        custom adapter. You can't delete a project version if it is running or if it is training. To check the status of
        a project version, use the Status field returned from DescribeProjectVersions. To stop a project version call
        StopProjectVersion. If the project version is training, wait until it finishes. This operation requires
        permissions to perform the rekognition:DeleteProjectVersion action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_project_version(x_amz_target, request_options=request_options)
        )

    async def describe_project_versions(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Lists and describes the versions of an Amazon Rekognition project. You can specify up to 10 model or adapter
        versions in ProjectVersionArns. If you don't specify a value, descriptions for all model/adapter versions in the
        project are returned. This operation requires permissions to perform the rekognition:DescribeProjectVersions
        action.

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
            await self._with_raw_response.describe_project_versions(x_amz_target, request_options=request_options)
        )

    async def start_project_version(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Starts the running of the version of a
        model. Starting a model takes a while to complete. To check the current state of the model, use
        DescribeProjectVersions. Once the model is running, you can detect custom labels in new images by calling
        DetectCustomLabels. You are charged for the amount of time that the model is running. To stop a running model,
        call StopProjectVersion. This operation requires permissions to perform the rekognition:StartProjectVersion
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException; ResourceNotFoundException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.start_project_version(x_amz_target, request_options=request_options)
        )

    async def stop_project_version(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Stops a running model. The operation might
        take a while to complete. To check the current status, call DescribeProjectVersions. Only applies to Custom
        Labels projects. This operation requires permissions to perform the rekognition:StopProjectVersion action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.stop_project_version(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProjectVersionWithRawResponse:
        return self._with_raw_response


class ProjectVersionWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_project_version(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateProjectVersionErrorBody]:
        """Creates a new version of Amazon Rekognition project (like a Custom Labels model or a custom adapter) and
        begins training. Models and adapters are managed as part of a Rekognition project. The response from
        CreateProjectVersion is an Amazon Resource Name (ARN) for the project version. The FeatureConfig operation
        argument allows you to configure specific model or adapter settings. You can provide a description to the
        project version by using the VersionDescription argment. Training can take a while to complete. You can get the
        current status by calling DescribeProjectVersions. Training completed successfully if the value of the Status
        field is TRAINING_COMPLETED. Once training has successfully completed, call DescribeProjectVersions to get the
        training results and evaluate the model. This operation requires permissions to perform the
        rekognition:CreateProjectVersion action. The following applies only to projects with Amazon Rekognition Custom
        Labels as the chosen feature: You can train a model in a project that doesn't have associated datasets by
        specifying manifest files in the TrainingData and TestingData fields. If you open the console after training a
        model with manifest files, A

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateProjectVersion"),
            headers=[
                param[XAmzTargetAmazonRekognitionProjectVersionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_project_version_error_mapper,
            request_options=request_options,
        )

    def delete_project_version(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteProjectVersionErrorBody]:
        """Deletes a Rekognition project model or project version, like a Amazon Rekognition Custom Labels model or a
        custom adapter. You can't delete a project version if it is running or if it is training. To check the status of
        a project version, use the Status field returned from DescribeProjectVersions. To stop a project version call
        StopProjectVersion. If the project version is training, wait until it finishes. This operation requires
        permissions to perform the rekognition:DeleteProjectVersion action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteProjectVersion"),
            headers=[
                param[XAmzTarget1AmazonRekognitionProjectVersionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_project_version_error_mapper,
            request_options=request_options,
        )

    def describe_project_versions(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeProjectVersionsErrorBody]:
        """Lists and describes the versions of an Amazon Rekognition project. You can specify up to 10 model or adapter
        versions in ProjectVersionArns. If you don't specify a value, descriptions for all model/adapter versions in the
        project are returned. This operation requires permissions to perform the rekognition:DescribeProjectVersions
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeProjectVersions"),
            headers=[
                param[XAmzTarget2AmazonRekognitionProjectVersionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_project_versions_error_mapper,
            request_options=request_options,
        )

    def start_project_version(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartProjectVersionErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Starts the running of the version of a
        model. Starting a model takes a while to complete. To check the current state of the model, use
        DescribeProjectVersions. Once the model is running, you can detect custom labels in new images by calling
        DetectCustomLabels. You are charged for the amount of time that the model is running. To stop a running model,
        call StopProjectVersion. This operation requires permissions to perform the rekognition:StartProjectVersion
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartProjectVersion"),
            headers=[
                param[XAmzTarget3AmazonRekognitionProjectVersionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=start_project_version_error_mapper,
            request_options=request_options,
        )

    def stop_project_version(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopProjectVersionErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Stops a running model. The operation might
        take a while to complete. To check the current status, call DescribeProjectVersions. Only applies to Custom
        Labels projects. This operation requires permissions to perform the rekognition:StopProjectVersion action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopProjectVersion"),
            headers=[
                param[XAmzTarget4AmazonRekognitionProjectVersionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=stop_project_version_error_mapper,
            request_options=request_options,
        )


class AsyncProjectVersionWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_project_version(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateProjectVersionErrorBody]:
        """Creates a new version of Amazon Rekognition project (like a Custom Labels model or a custom adapter) and
        begins training. Models and adapters are managed as part of a Rekognition project. The response from
        CreateProjectVersion is an Amazon Resource Name (ARN) for the project version. The FeatureConfig operation
        argument allows you to configure specific model or adapter settings. You can provide a description to the
        project version by using the VersionDescription argment. Training can take a while to complete. You can get the
        current status by calling DescribeProjectVersions. Training completed successfully if the value of the Status
        field is TRAINING_COMPLETED. Once training has successfully completed, call DescribeProjectVersions to get the
        training results and evaluate the model. This operation requires permissions to perform the
        rekognition:CreateProjectVersion action. The following applies only to projects with Amazon Rekognition Custom
        Labels as the chosen feature: You can train a model in a project that doesn't have associated datasets by
        specifying manifest files in the TrainingData and TestingData fields. If you open the console after training a
        model with manifest files, A

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateProjectVersion"),
            headers=[
                param[XAmzTargetAmazonRekognitionProjectVersionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_project_version_error_mapper,
            request_options=request_options,
        )

    async def delete_project_version(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteProjectVersionErrorBody]:
        """Deletes a Rekognition project model or project version, like a Amazon Rekognition Custom Labels model or a
        custom adapter. You can't delete a project version if it is running or if it is training. To check the status of
        a project version, use the Status field returned from DescribeProjectVersions. To stop a project version call
        StopProjectVersion. If the project version is training, wait until it finishes. This operation requires
        permissions to perform the rekognition:DeleteProjectVersion action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteProjectVersion"),
            headers=[
                param[XAmzTarget1AmazonRekognitionProjectVersionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_project_version_error_mapper,
            request_options=request_options,
        )

    async def describe_project_versions(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeProjectVersionsErrorBody]:
        """Lists and describes the versions of an Amazon Rekognition project. You can specify up to 10 model or adapter
        versions in ProjectVersionArns. If you don't specify a value, descriptions for all model/adapter versions in the
        project are returned. This operation requires permissions to perform the rekognition:DescribeProjectVersions
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeProjectVersions"),
            headers=[
                param[XAmzTarget2AmazonRekognitionProjectVersionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_project_versions_error_mapper,
            request_options=request_options,
        )

    async def start_project_version(
        self,
        x_amz_target: XAmzTarget3AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StartProjectVersionErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Starts the running of the version of a
        model. Starting a model takes a while to complete. To check the current state of the model, use
        DescribeProjectVersions. Once the model is running, you can detect custom labels in new images by calling
        DetectCustomLabels. You are charged for the amount of time that the model is running. To stop a running model,
        call StopProjectVersion. This operation requires permissions to perform the rekognition:StartProjectVersion
        action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StartProjectVersion"),
            headers=[
                param[XAmzTarget3AmazonRekognitionProjectVersionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=start_project_version_error_mapper,
            request_options=request_options,
        )

    async def stop_project_version(
        self,
        x_amz_target: XAmzTarget4AmazonRekognitionProjectVersionApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopProjectVersionErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Stops a running model. The operation might
        take a while to complete. To check the current status, call DescribeProjectVersions. Only applies to Custom
        Labels projects. This operation requires permissions to perform the rekognition:StopProjectVersion action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#StopProjectVersion"),
            headers=[
                param[XAmzTarget4AmazonRekognitionProjectVersionApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=stop_project_version_error_mapper,
            request_options=request_options,
        )
