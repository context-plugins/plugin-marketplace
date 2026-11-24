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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_resource_policy_error import CreateResourcePolicyErrorBody, create_resource_policy_error_mapper
from ..errors.create_resource_policy_statement_error import (
    CreateResourcePolicyStatementErrorBody,
    create_resource_policy_statement_error_mapper,
)
from ..errors.delete_resource_policy_error import DeleteResourcePolicyErrorBody, delete_resource_policy_error_mapper
from ..errors.delete_resource_policy_statement_error import (
    DeleteResourcePolicyStatementErrorBody,
    delete_resource_policy_statement_error_mapper,
)
from ..errors.describe_resource_policy_error import (
    DescribeResourcePolicyErrorBody,
    describe_resource_policy_error_mapper,
)
from ..errors.update_resource_policy_error import UpdateResourcePolicyErrorBody, update_resource_policy_error_mapper
from ..models.create_resource_policy_request import CreateResourcePolicyRequest, CreateResourcePolicyRequestDict
from ..models.create_resource_policy_response import CreateResourcePolicyResponse
from ..models.create_resource_policy_statement_request import (
    CreateResourcePolicyStatementRequest,
    CreateResourcePolicyStatementRequestDict,
)
from ..models.create_resource_policy_statement_response import CreateResourcePolicyStatementResponse
from ..models.delete_resource_policy_request import DeleteResourcePolicyRequest, DeleteResourcePolicyRequestDict
from ..models.delete_resource_policy_response import DeleteResourcePolicyResponse
from ..models.delete_resource_policy_statement_request import (
    DeleteResourcePolicyStatementRequest,
    DeleteResourcePolicyStatementRequestDict,
)
from ..models.delete_resource_policy_statement_response import DeleteResourcePolicyStatementResponse
from ..models.describe_resource_policy_response import DescribeResourcePolicyResponse
from ..models.update_resource_policy_request import UpdateResourcePolicyRequest, UpdateResourcePolicyRequestDict
from ..models.update_resource_policy_response import UpdateResourcePolicyResponse
from ..server.server import Server


class Policy:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PolicyWithRawResponse(client, server, auth)

    def create_resource_policy(
        self,
        resource_arn: str,
        *,
        body: CreateResourcePolicyRequest | CreateResourcePolicyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateResourcePolicyResponse:
        """Creates a new resource policy with the specified policy statements.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | PreconditionFailedException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.create_resource_policy(resource_arn, body=body, request_options=request_options)
        )

    def create_resource_policy_statement(
        self,
        resource_arn: str,
        *,
        body: CreateResourcePolicyStatementRequest | CreateResourcePolicyStatementRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateResourcePolicyStatementResponse:
        """Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is
        added to the current resource policy. If a policy doesn't exist, a new policy is created. You can't create a
        resource policy statement that allows cross-account access. You need to add the CreateResourcePolicy or
        UpdateResourcePolicy action to the bot role in order to call the API.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | ConflictException |
                PreconditionFailedException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.create_resource_policy_statement(
                resource_arn, body=body, request_options=request_options
            ),
        )

    def delete_resource_policy(
        self,
        resource_arn: str,
        *,
        body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteResourcePolicyResponse:
        """Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon
        Lex returns an exception.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ResourceNotFoundException ThrottlingException
                ``error`` is ``ResourceNotFoundException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_resource_policy(resource_arn, body=body, request_options=request_options)
        )

    def delete_resource_policy_statement(
        self,
        resource_arn: str,
        statement_id: str,
        *,
        body: DeleteResourcePolicyStatementRequest | DeleteResourcePolicyStatementRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteResourcePolicyStatementResponse:
        """Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy
        is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't
        have a policy attached, Amazon Lex returns an exception. You need to add the DeleteResourcePolicy or
        UpdateResourcePolicy action to the bot role in order to call the API.

        Args:
            resource_arn: Value sent with the request.
            statement_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ResourceNotFoundException ThrottlingException
                ``error`` is ``ResourceNotFoundException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_resource_policy_statement(
                resource_arn, statement_id, body=body, request_options=request_options
            ),
        )

    def describe_resource_policy(
        self, resource_arn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeResourcePolicyResponse:
        """Gets the resource policy and policy revision for a bot or bot alias.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ``error`` is
                ``ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.describe_resource_policy(resource_arn, request_options=request_options))

    def update_resource_policy(
        self,
        resource_arn: str,
        *,
        body: UpdateResourcePolicyRequest | UpdateResourcePolicyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateResourcePolicyResponse:
        """Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist,
        Amazon Lex returns an exception.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | PreconditionFailedException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.update_resource_policy(resource_arn, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> PolicyWithRawResponse:
        return self._with_raw_response


class AsyncPolicy:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPolicyWithRawResponse(client, server, auth)

    async def create_resource_policy(
        self,
        resource_arn: str,
        *,
        body: CreateResourcePolicyRequest | CreateResourcePolicyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResourcePolicyResponse:
        """Creates a new resource policy with the specified policy statements.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | PreconditionFailedException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_resource_policy(
                resource_arn, body=body, request_options=request_options
            ),
        )

    async def create_resource_policy_statement(
        self,
        resource_arn: str,
        *,
        body: CreateResourcePolicyStatementRequest | CreateResourcePolicyStatementRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResourcePolicyStatementResponse:
        """Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is
        added to the current resource policy. If a policy doesn't exist, a new policy is created. You can't create a
        resource policy statement that allows cross-account access. You need to add the CreateResourcePolicy or
        UpdateResourcePolicy action to the bot role in order to call the API.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | ConflictException |
                PreconditionFailedException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_resource_policy_statement(
                resource_arn, body=body, request_options=request_options
            ),
        )

    async def delete_resource_policy(
        self,
        resource_arn: str,
        *,
        body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteResourcePolicyResponse:
        """Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon
        Lex returns an exception.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ResourceNotFoundException ThrottlingException
                ``error`` is ``ResourceNotFoundException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_resource_policy(
                resource_arn, body=body, request_options=request_options
            ),
        )

    async def delete_resource_policy_statement(
        self,
        resource_arn: str,
        statement_id: str,
        *,
        body: DeleteResourcePolicyStatementRequest | DeleteResourcePolicyStatementRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteResourcePolicyStatementResponse:
        """Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy
        is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't
        have a policy attached, Amazon Lex returns an exception. You need to add the DeleteResourcePolicy or
        UpdateResourcePolicy action to the bot role in order to call the API.

        Args:
            resource_arn: Value sent with the request.
            statement_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ResourceNotFoundException ThrottlingException
                ``error`` is ``ResourceNotFoundException | PreconditionFailedException | ThrottlingException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_resource_policy_statement(
                resource_arn, statement_id, body=body, request_options=request_options
            ),
        )

    async def describe_resource_policy(
        self, resource_arn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeResourcePolicyResponse:
        """Gets the resource policy and policy revision for a bot or bot alias.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException ResourceNotFoundException ThrottlingException ``error`` is
                ``ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.describe_resource_policy(resource_arn, request_options=request_options)
        )

    async def update_resource_policy(
        self,
        resource_arn: str,
        *,
        body: UpdateResourcePolicyRequest | UpdateResourcePolicyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateResourcePolicyResponse:
        """Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist,
        Amazon Lex returns an exception.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerException PreconditionFailedException ResourceNotFoundException
                ServiceQuotaExceededException ThrottlingException ValidationException ``error`` is ``ValidationException
                | ServiceQuotaExceededException | ResourceNotFoundException | PreconditionFailedException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_resource_policy(
                resource_arn, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPolicyWithRawResponse:
        return self._with_raw_response


class PolicyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_resource_policy(
        self,
        resource_arn: str,
        *,
        body: CreateResourcePolicyRequest | CreateResourcePolicyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResourcePolicyResponse, CreateResourcePolicyErrorBody]:
        """Creates a new resource policy with the specified policy statements.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/policy/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateResourcePolicyRequest | CreateResourcePolicyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateResourcePolicyResponse],
            error_mapper=create_resource_policy_error_mapper,
            request_options=request_options,
        )

    def create_resource_policy_statement(
        self,
        resource_arn: str,
        *,
        body: CreateResourcePolicyStatementRequest | CreateResourcePolicyStatementRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResourcePolicyStatementResponse, CreateResourcePolicyStatementErrorBody]:
        """Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is
        added to the current resource policy. If a policy doesn't exist, a new policy is created. You can't create a
        resource policy statement that allows cross-account access. You need to add the CreateResourcePolicy or
        UpdateResourcePolicy action to the bot role in order to call the API.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/policy/{resourceArn}/statements"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateResourcePolicyStatementRequest | CreateResourcePolicyStatementRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateResourcePolicyStatementResponse],
            error_mapper=create_resource_policy_statement_error_mapper,
            request_options=request_options,
        )

    def delete_resource_policy(
        self,
        resource_arn: str,
        *,
        body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteResourcePolicyResponse, DeleteResourcePolicyErrorBody]:
        """Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon
        Lex returns an exception.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/policy/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteResourcePolicyResponse],
            error_mapper=delete_resource_policy_error_mapper,
            request_options=request_options,
        )

    def delete_resource_policy_statement(
        self,
        resource_arn: str,
        statement_id: str,
        *,
        body: DeleteResourcePolicyStatementRequest | DeleteResourcePolicyStatementRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteResourcePolicyStatementResponse, DeleteResourcePolicyStatementErrorBody]:
        """Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy
        is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't
        have a policy attached, Amazon Lex returns an exception. You need to add the DeleteResourcePolicy or
        UpdateResourcePolicy action to the bot role in order to call the API.

        Args:
            resource_arn: Value sent with the request.
            statement_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/policy/{resourceArn}/statements/{statementId}"
            ),
            path_params=[param[str]("resourceArn", resource_arn), param[str]("statementId", statement_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteResourcePolicyStatementRequest | DeleteResourcePolicyStatementRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteResourcePolicyStatementResponse],
            error_mapper=delete_resource_policy_statement_error_mapper,
            request_options=request_options,
        )

    def describe_resource_policy(
        self, resource_arn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeResourcePolicyResponse, DescribeResourcePolicyErrorBody]:
        """Gets the resource policy and policy revision for a bot or bot alias.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/policy/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeResourcePolicyResponse],
            error_mapper=describe_resource_policy_error_mapper,
            request_options=request_options,
        )

    def update_resource_policy(
        self,
        resource_arn: str,
        *,
        body: UpdateResourcePolicyRequest | UpdateResourcePolicyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateResourcePolicyResponse, UpdateResourcePolicyErrorBody]:
        """Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist,
        Amazon Lex returns an exception.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/policy/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateResourcePolicyRequest | UpdateResourcePolicyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateResourcePolicyResponse],
            error_mapper=update_resource_policy_error_mapper,
            request_options=request_options,
        )


class AsyncPolicyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_resource_policy(
        self,
        resource_arn: str,
        *,
        body: CreateResourcePolicyRequest | CreateResourcePolicyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResourcePolicyResponse, CreateResourcePolicyErrorBody]:
        """Creates a new resource policy with the specified policy statements.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/policy/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateResourcePolicyRequest | CreateResourcePolicyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateResourcePolicyResponse],
            error_mapper=create_resource_policy_error_mapper,
            request_options=request_options,
        )

    async def create_resource_policy_statement(
        self,
        resource_arn: str,
        *,
        body: CreateResourcePolicyStatementRequest | CreateResourcePolicyStatementRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResourcePolicyStatementResponse, CreateResourcePolicyStatementErrorBody]:
        """Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is
        added to the current resource policy. If a policy doesn't exist, a new policy is created. You can't create a
        resource policy statement that allows cross-account access. You need to add the CreateResourcePolicy or
        UpdateResourcePolicy action to the bot role in order to call the API.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/policy/{resourceArn}/statements"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateResourcePolicyStatementRequest | CreateResourcePolicyStatementRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateResourcePolicyStatementResponse],
            error_mapper=create_resource_policy_statement_error_mapper,
            request_options=request_options,
        )

    async def delete_resource_policy(
        self,
        resource_arn: str,
        *,
        body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteResourcePolicyResponse, DeleteResourcePolicyErrorBody]:
        """Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon
        Lex returns an exception.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/policy/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteResourcePolicyResponse],
            error_mapper=delete_resource_policy_error_mapper,
            request_options=request_options,
        )

    async def delete_resource_policy_statement(
        self,
        resource_arn: str,
        statement_id: str,
        *,
        body: DeleteResourcePolicyStatementRequest | DeleteResourcePolicyStatementRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteResourcePolicyStatementResponse, DeleteResourcePolicyStatementErrorBody]:
        """Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy
        is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't
        have a policy attached, Amazon Lex returns an exception. You need to add the DeleteResourcePolicy or
        UpdateResourcePolicy action to the bot role in order to call the API.

        Args:
            resource_arn: Value sent with the request.
            statement_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api(
                "/policy/{resourceArn}/statements/{statementId}"
            ),
            path_params=[param[str]("resourceArn", resource_arn), param[str]("statementId", statement_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteResourcePolicyStatementRequest | DeleteResourcePolicyStatementRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteResourcePolicyStatementResponse],
            error_mapper=delete_resource_policy_statement_error_mapper,
            request_options=request_options,
        )

    async def describe_resource_policy(
        self, resource_arn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeResourcePolicyResponse, DescribeResourcePolicyErrorBody]:
        """Gets the resource policy and policy revision for a bot or bot alias.

        Args:
            resource_arn: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/policy/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeResourcePolicyResponse],
            error_mapper=describe_resource_policy_error_mapper,
            request_options=request_options,
        )

    async def update_resource_policy(
        self,
        resource_arn: str,
        *,
        body: UpdateResourcePolicyRequest | UpdateResourcePolicyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateResourcePolicyResponse, UpdateResourcePolicyErrorBody]:
        """Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist,
        Amazon Lex returns an exception.

        Args:
            resource_arn: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/policy/{resourceArn}"),
            path_params=[param[str]("resourceArn", resource_arn)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateResourcePolicyRequest | UpdateResourcePolicyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateResourcePolicyResponse],
            error_mapper=update_resource_policy_error_mapper,
            request_options=request_options,
        )
