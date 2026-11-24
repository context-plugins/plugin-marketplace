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
from ..errors.describe_account_health_error import DescribeAccountHealthErrorBody, describe_account_health_error_mapper
from ..errors.describe_account_overview_error import (
    DescribeAccountOverviewErrorBody,
    describe_account_overview_error_mapper,
)
from ..errors.describe_resource_collection_health_error import (
    DescribeResourceCollectionHealthErrorBody,
    describe_resource_collection_health_error_mapper,
)
from ..models.accounts_overview_request import AccountsOverviewRequest, AccountsOverviewRequestDict
from ..models.describe_account_health_response import DescribeAccountHealthResponse
from ..models.describe_account_overview_response import DescribeAccountOverviewResponse
from ..models.describe_resource_collection_health_response import DescribeResourceCollectionHealthResponse
from ..models.enums.resource_collection_type import ResourceCollectionTypeOrStr
from ..server.server import Server


class Accounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountsWithRawResponse(client, server, auth)

    def describe_account_health(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> DescribeAccountHealthResponse:
        """Returns the number of open reactive insights, the number of open proactive insights, and the number of
        metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in
        your Amazon Web Services account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.describe_account_health(request_options=request_options))

    def describe_account_overview(
        self,
        *,
        body: AccountsOverviewRequest | AccountsOverviewRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeAccountOverviewResponse:
        """For the time range passed in, returns the number of open reactive insight that were created, the number of
        open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.describe_account_overview(body=body, request_options=request_options))

    def describe_resource_collection_health(
        self,
        resource_collection_type: ResourceCollectionTypeOrStr,
        *,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeResourceCollectionHealthResponse:
        """Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR)
        for all closed insights in resource collections in your account. You specify the type of Amazon Web Services
        resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web
        Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag.
        DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or
        that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.

        Args:
            resource_collection_type: An Amazon Web Services resource collection type. This type specifies how analyzed
                Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections
                supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain
                the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services
                resources that are defined in the stacks or that are tagged using the same tag key. You can specify up
                to 500 Amazon Web Services CloudFormation stacks.
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            self._with_raw_response.describe_resource_collection_health(
                resource_collection_type, next_token=next_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AccountsWithRawResponse:
        return self._with_raw_response


class AsyncAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountsWithRawResponse(client, server, auth)

    async def describe_account_health(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DescribeAccountHealthResponse:
        """Returns the number of open reactive insights, the number of open proactive insights, and the number of
        metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in
        your Amazon Web Services account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(await self._with_raw_response.describe_account_health(request_options=request_options))

    async def describe_account_overview(
        self,
        *,
        body: AccountsOverviewRequest | AccountsOverviewRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeAccountOverviewResponse:
        """For the time range passed in, returns the number of open reactive insight that were created, the number of
        open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.describe_account_overview(body=body, request_options=request_options)
        )

    async def describe_resource_collection_health(
        self,
        resource_collection_type: ResourceCollectionTypeOrStr,
        *,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeResourceCollectionHealthResponse:
        """Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR)
        for all closed insights in resource collections in your account. You specify the type of Amazon Web Services
        resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web
        Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag.
        DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or
        that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.

        Args:
            resource_collection_type: An Amazon Web Services resource collection type. This type specifies how analyzed
                Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections
                supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain
                the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services
                resources that are defined in the stacks or that are tagged using the same tag key. You can specify up
                to 500 Amazon Web Services CloudFormation stacks.
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.describe_resource_collection_health(
                resource_collection_type, next_token=next_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAccountsWithRawResponse:
        return self._with_raw_response


class AccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def describe_account_health(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeAccountHealthResponse, DescribeAccountHealthErrorBody]:
        """Returns the number of open reactive insights, the number of open proactive insights, and the number of
        metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in
        your Amazon Web Services account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts/health"),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeAccountHealthResponse],
            error_mapper=describe_account_health_error_mapper,
            request_options=request_options,
        )

    def describe_account_overview(
        self,
        *,
        body: AccountsOverviewRequest | AccountsOverviewRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeAccountOverviewResponse, DescribeAccountOverviewErrorBody]:
        """For the time range passed in, returns the number of open reactive insight that were created, the number of
        open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/accounts/overview"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AccountsOverviewRequest | AccountsOverviewRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeAccountOverviewResponse],
            error_mapper=describe_account_overview_error_mapper,
            request_options=request_options,
        )

    def describe_resource_collection_health(
        self,
        resource_collection_type: ResourceCollectionTypeOrStr,
        *,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeResourceCollectionHealthResponse, DescribeResourceCollectionHealthErrorBody]:
        """Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR)
        for all closed insights in resource collections in your account. You specify the type of Amazon Web Services
        resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web
        Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag.
        DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or
        that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.

        Args:
            resource_collection_type: An Amazon Web Services resource collection type. This type specifies how analyzed
                Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections
                supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain
                the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services
                resources that are defined in the stacks or that are tagged using the same tag key. You can specify up
                to 500 Amazon Web Services CloudFormation stacks.
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts/health/resource-collection/{ResourceCollectionType}"),
            path_params=[param[ResourceCollectionTypeOrStr]("ResourceCollectionType", resource_collection_type)],
            query_params=[param[str | None]("NextToken", next_token)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeResourceCollectionHealthResponse],
            error_mapper=describe_resource_collection_health_error_mapper,
            request_options=request_options,
        )


class AsyncAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def describe_account_health(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DescribeAccountHealthResponse, DescribeAccountHealthErrorBody]:
        """Returns the number of open reactive insights, the number of open proactive insights, and the number of
        metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in
        your Amazon Web Services account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts/health"),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeAccountHealthResponse],
            error_mapper=describe_account_health_error_mapper,
            request_options=request_options,
        )

    async def describe_account_overview(
        self,
        *,
        body: AccountsOverviewRequest | AccountsOverviewRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeAccountOverviewResponse, DescribeAccountOverviewErrorBody]:
        """For the time range passed in, returns the number of open reactive insight that were created, the number of
        open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/accounts/overview"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AccountsOverviewRequest | AccountsOverviewRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeAccountOverviewResponse],
            error_mapper=describe_account_overview_error_mapper,
            request_options=request_options,
        )

    async def describe_resource_collection_health(
        self,
        resource_collection_type: ResourceCollectionTypeOrStr,
        *,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeResourceCollectionHealthResponse, DescribeResourceCollectionHealthErrorBody]:
        """Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR)
        for all closed insights in resource collections in your account. You specify the type of Amazon Web Services
        resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web
        Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag.
        DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or
        that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.

        Args:
            resource_collection_type: An Amazon Web Services resource collection type. This type specifies how analyzed
                Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections
                supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain
                the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services
                resources that are defined in the stacks or that are tagged using the same tag key. You can specify up
                to 500 Amazon Web Services CloudFormation stacks.
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts/health/resource-collection/{ResourceCollectionType}"),
            path_params=[param[ResourceCollectionTypeOrStr]("ResourceCollectionType", resource_collection_type)],
            query_params=[param[str | None]("NextToken", next_token)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeResourceCollectionHealthResponse],
            error_mapper=describe_resource_collection_health_error_mapper,
            request_options=request_options,
        )
