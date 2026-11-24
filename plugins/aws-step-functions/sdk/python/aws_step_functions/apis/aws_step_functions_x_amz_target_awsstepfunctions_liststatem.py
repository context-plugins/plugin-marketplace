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
from ..errors.list_state_machine_aliases_error import (
    ListStateMachineAliasesErrorBody,
    list_state_machine_aliases_error_mapper,
)
from ..errors.list_state_machine_versions_error import (
    ListStateMachineVersionsErrorBody,
    list_state_machine_versions_error_mapper,
)
from ..models.enums.x_amz_target1_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_liststatem_api import (
    XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr,
)
from ..models.enums.x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_liststatem_api import (
    XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr,
)
from ..server.server import Server


class AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemWithRawResponse(
            client, server, auth
        )

    def list_state_machine_aliases(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Lists aliases for a specified state machine ARN. Results are sorted by time, with the most recently created
        aliases listed first. To list aliases that reference a state machine version, you can specify the version ARN in
        the stateMachineArn parameter. If nextToken is returned, there are more results available. The value of
        nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve
        the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an
        expired pagination token will return an HTTP 400 InvalidToken error. Related operations: CreateStateMachineAlias
        DescribeStateMachineAlias UpdateStateMachineAlias DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; InvalidToken; StateMachineDeleting; StateMachineDoesNotExist ResourceNotFound
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_state_machine_aliases(x_amz_target, request_options=request_options))

    def list_state_machine_versions(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Lists versions for the specified state machine Amazon Resource Name (ARN). The results are sorted in
        descending order of the version creation time. If nextToken is returned, there are more results available. The
        value of nextToken is a unique pagination token for each page. Make the call again using the returned token to
        retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using
        an expired pagination token will return an HTTP 400 InvalidToken error. Related operations:
        PublishStateMachineVersion DeleteStateMachineVersion

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; InvalidToken; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_state_machine_versions(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemWithRawResponse:
        return self._with_raw_response


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemWithRawResponse(
            client, server, auth
        )

    async def list_state_machine_aliases(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Lists aliases for a specified state machine ARN. Results are sorted by time, with the most recently created
        aliases listed first. To list aliases that reference a state machine version, you can specify the version ARN in
        the stateMachineArn parameter. If nextToken is returned, there are more results available. The value of
        nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve
        the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an
        expired pagination token will return an HTTP 400 InvalidToken error. Related operations: CreateStateMachineAlias
        DescribeStateMachineAlias UpdateStateMachineAlias DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; InvalidToken; StateMachineDeleting; StateMachineDoesNotExist ResourceNotFound
                ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_state_machine_aliases(x_amz_target, request_options=request_options)
        )

    async def list_state_machine_versions(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Lists versions for the specified state machine Amazon Resource Name (ARN). The results are sorted in
        descending order of the version creation time. If nextToken is returned, there are more results available. The
        value of nextToken is a unique pagination token for each page. Make the call again using the returned token to
        retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using
        an expired pagination token will return an HTTP 400 InvalidToken error. Related operations:
        PublishStateMachineVersion DeleteStateMachineVersion

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArn; InvalidToken; ValidationException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_state_machine_versions(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemWithRawResponse:
        return self._with_raw_response


class AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemWithRawResponse(
    SecuredRawResponse[RawClient, Server, AuthSchemes]
):
    def list_state_machine_aliases(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListStateMachineAliasesErrorBody]:
        """Lists aliases for a specified state machine ARN. Results are sorted by time, with the most recently created
        aliases listed first. To list aliases that reference a state machine version, you can specify the version ARN in
        the stateMachineArn parameter. If nextToken is returned, there are more results available. The value of
        nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve
        the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an
        expired pagination token will return an HTTP 400 InvalidToken error. Related operations: CreateStateMachineAlias
        DescribeStateMachineAlias UpdateStateMachineAlias DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListStateMachineAliases"),
            headers=[
                param[XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_state_machine_aliases_error_mapper,
            request_options=request_options,
        )

    def list_state_machine_versions(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListStateMachineVersionsErrorBody]:
        """Lists versions for the specified state machine Amazon Resource Name (ARN). The results are sorted in
        descending order of the version creation time. If nextToken is returned, there are more results available. The
        value of nextToken is a unique pagination token for each page. Make the call again using the returned token to
        retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using
        an expired pagination token will return an HTTP 400 InvalidToken error. Related operations:
        PublishStateMachineVersion DeleteStateMachineVersion

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListStateMachineVersions"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_state_machine_versions_error_mapper,
            request_options=request_options,
        )


class AsyncAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def list_state_machine_aliases(
        self,
        x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListStateMachineAliasesErrorBody]:
        """Lists aliases for a specified state machine ARN. Results are sorted by time, with the most recently created
        aliases listed first. To list aliases that reference a state machine version, you can specify the version ARN in
        the stateMachineArn parameter. If nextToken is returned, there are more results available. The value of
        nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve
        the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an
        expired pagination token will return an HTTP 400 InvalidToken error. Related operations: CreateStateMachineAlias
        DescribeStateMachineAlias UpdateStateMachineAlias DeleteStateMachineAlias

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListStateMachineAliases"),
            headers=[
                param[XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_state_machine_aliases_error_mapper,
            request_options=request_options,
        )

    async def list_state_machine_versions(
        self,
        x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListStateMachineVersionsErrorBody]:
        """Lists versions for the specified state machine Amazon Resource Name (ARN). The results are sorted in
        descending order of the version creation time. If nextToken is returned, there are more results available. The
        value of nextToken is a unique pagination token for each page. Make the call again using the returned token to
        retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using
        an expired pagination token will return an HTTP 400 InvalidToken error. Related operations:
        PublishStateMachineVersion DeleteStateMachineVersion

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListStateMachineVersions"),
            headers=[
                param[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr](
                    "X-Amz-Target", x_amz_target
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_state_machine_versions_error_mapper,
            request_options=request_options,
        )
