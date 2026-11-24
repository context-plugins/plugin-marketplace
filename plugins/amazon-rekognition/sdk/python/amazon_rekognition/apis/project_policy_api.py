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
from ..errors.delete_project_policy_error import DeleteProjectPolicyErrorBody, delete_project_policy_error_mapper
from ..errors.list_project_policies_error import ListProjectPoliciesErrorBody, list_project_policies_error_mapper
from ..errors.put_project_policy_error import PutProjectPolicyErrorBody, put_project_policy_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_project_policy_api import (
    XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_rekognition_project_policy_api import (
    XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr,
)
from ..models.enums.x_amz_target_amazon_rekognition_project_policy_api import (
    XAmzTargetAmazonRekognitionProjectPolicyApiOrStr,
)
from ..server.server import Server


class ProjectPolicyApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectPolicyApiWithRawResponse(client, server, auth)

    def delete_project_policy(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing project policy. To get a
        list of project policies attached to a project, call ListProjectPolicies. To attach a project policy to a
        project, call PutProjectPolicy. This operation requires permissions to perform the
        rekognition:DeleteProjectPolicy action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; InvalidPolicyRevisionIdException;
                ProvisionedThroughputExceededException; ResourceNotFoundException InternalServerError;
                ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_project_policy(x_amz_target, request_options=request_options))

    def list_project_policies(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Gets a list of the project policies attached
        to a project. To attach a project policy to a project, call PutProjectPolicy. To remove a project policy from a
        project, call DeleteProjectPolicy. This operation requires permissions to perform the
        rekognition:ListProjectPolicies action.

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
        return unwrap(self._with_raw_response.list_project_policies(x_amz_target, request_options=request_options))

    def put_project_policy(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Attaches a project policy to a Amazon
        Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS
        account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a
        model version you use the CopyProjectVersion operation. Only applies to Custom Labels projects. For more
        information about the format of a project policy document, see Attaching a project policy (SDK) in the Amazon
        Rekognition Custom Labels Developer Guide. The response from PutProjectPolicy is a revision ID for the project
        policy. You can attach multiple project policies to a project. You can also update an existing project policy by
        specifying the policy revision ID of the existing policy. To remove a project policy from a project, call
        DeleteProjectPolicy. To get a list of project policies attached to a project, call ListProjectPolicies. You copy
        a model version by calling CopyProjectVersion. This operation requires permissions to perform the
        rekognition:PutProjectPolicy action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; InvalidPolicyRevisionIdException;
                LimitExceededException; MalformedPolicyDocumentException; ProvisionedThroughputExceededException;
                ResourceAlreadyExistsException; ResourceNotFoundException; ServiceQuotaExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.put_project_policy(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> ProjectPolicyApiWithRawResponse:
        return self._with_raw_response


class AsyncProjectPolicyApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectPolicyApiWithRawResponse(client, server, auth)

    async def delete_project_policy(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing project policy. To get a
        list of project policies attached to a project, call ListProjectPolicies. To attach a project policy to a
        project, call PutProjectPolicy. This operation requires permissions to perform the
        rekognition:DeleteProjectPolicy action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; InvalidPolicyRevisionIdException;
                ProvisionedThroughputExceededException; ResourceNotFoundException InternalServerError;
                ThrottlingException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_project_policy(x_amz_target, request_options=request_options)
        )

    async def list_project_policies(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Gets a list of the project policies attached
        to a project. To attach a project policy to a project, call PutProjectPolicy. To remove a project policy from a
        project, call DeleteProjectPolicy. This operation requires permissions to perform the
        rekognition:ListProjectPolicies action.

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
            await self._with_raw_response.list_project_policies(x_amz_target, request_options=request_options)
        )

    async def put_project_policy(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This operation applies only to Amazon Rekognition Custom Labels. Attaches a project policy to a Amazon
        Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS
        account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a
        model version you use the CopyProjectVersion operation. Only applies to Custom Labels projects. For more
        information about the format of a project policy document, see Attaching a project policy (SDK) in the Amazon
        Rekognition Custom Labels Developer Guide. The response from PutProjectPolicy is a revision ID for the project
        policy. You can attach multiple project policies to a project. You can also update an existing project policy by
        specifying the policy revision ID of the existing policy. To remove a project policy from a project, call
        DeleteProjectPolicy. To get a list of project policies attached to a project, call ListProjectPolicies. You copy
        a model version by calling CopyProjectVersion. This operation requires permissions to perform the
        rekognition:PutProjectPolicy action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; InvalidPolicyRevisionIdException;
                LimitExceededException; MalformedPolicyDocumentException; ProvisionedThroughputExceededException;
                ResourceAlreadyExistsException; ResourceNotFoundException; ServiceQuotaExceededException
                InternalServerError; ThrottlingException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.put_project_policy(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProjectPolicyApiWithRawResponse:
        return self._with_raw_response


class ProjectPolicyApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_project_policy(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteProjectPolicyErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing project policy. To get a
        list of project policies attached to a project, call ListProjectPolicies. To attach a project policy to a
        project, call PutProjectPolicy. This operation requires permissions to perform the
        rekognition:DeleteProjectPolicy action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteProjectPolicy"),
            headers=[
                param[XAmzTargetAmazonRekognitionProjectPolicyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_project_policy_error_mapper,
            request_options=request_options,
        )

    def list_project_policies(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListProjectPoliciesErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Gets a list of the project policies attached
        to a project. To attach a project policy to a project, call PutProjectPolicy. To remove a project policy from a
        project, call DeleteProjectPolicy. This operation requires permissions to perform the
        rekognition:ListProjectPolicies action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListProjectPolicies"),
            headers=[
                param[XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_project_policies_error_mapper,
            request_options=request_options,
        )

    def put_project_policy(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PutProjectPolicyErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Attaches a project policy to a Amazon
        Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS
        account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a
        model version you use the CopyProjectVersion operation. Only applies to Custom Labels projects. For more
        information about the format of a project policy document, see Attaching a project policy (SDK) in the Amazon
        Rekognition Custom Labels Developer Guide. The response from PutProjectPolicy is a revision ID for the project
        policy. You can attach multiple project policies to a project. You can also update an existing project policy by
        specifying the policy revision ID of the existing policy. To remove a project policy from a project, call
        DeleteProjectPolicy. To get a list of project policies attached to a project, call ListProjectPolicies. You copy
        a model version by calling CopyProjectVersion. This operation requires permissions to perform the
        rekognition:PutProjectPolicy action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PutProjectPolicy"),
            headers=[
                param[XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=put_project_policy_error_mapper,
            request_options=request_options,
        )


class AsyncProjectPolicyApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_project_policy(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteProjectPolicyErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing project policy. To get a
        list of project policies attached to a project, call ListProjectPolicies. To attach a project policy to a
        project, call PutProjectPolicy. This operation requires permissions to perform the
        rekognition:DeleteProjectPolicy action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteProjectPolicy"),
            headers=[
                param[XAmzTargetAmazonRekognitionProjectPolicyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_project_policy_error_mapper,
            request_options=request_options,
        )

    async def list_project_policies(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListProjectPoliciesErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Gets a list of the project policies attached
        to a project. To attach a project policy to a project, call PutProjectPolicy. To remove a project policy from a
        project, call DeleteProjectPolicy. This operation requires permissions to perform the
        rekognition:ListProjectPolicies action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListProjectPolicies"),
            headers=[
                param[XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_project_policies_error_mapper,
            request_options=request_options,
        )

    async def put_project_policy(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PutProjectPolicyErrorBody]:
        """This operation applies only to Amazon Rekognition Custom Labels. Attaches a project policy to a Amazon
        Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS
        account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a
        model version you use the CopyProjectVersion operation. Only applies to Custom Labels projects. For more
        information about the format of a project policy document, see Attaching a project policy (SDK) in the Amazon
        Rekognition Custom Labels Developer Guide. The response from PutProjectPolicy is a revision ID for the project
        policy. You can attach multiple project policies to a project. You can also update an existing project policy by
        specifying the policy revision ID of the existing policy. To remove a project policy from a project, call
        DeleteProjectPolicy. To get a list of project policies attached to a project, call ListProjectPolicies. You copy
        a model version by calling CopyProjectVersion. This operation requires permissions to perform the
        rekognition:PutProjectPolicy action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PutProjectPolicy"),
            headers=[
                param[XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=put_project_policy_error_mapper,
            request_options=request_options,
        )
