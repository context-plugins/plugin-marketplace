from __future__ import annotations

from typing import Any
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
from ..errors.get_resource_collection_error import GetResourceCollectionErrorBody, get_resource_collection_error_mapper
from ..errors.update_resource_collection_error import (
    UpdateResourceCollectionErrorBody,
    update_resource_collection_error_mapper,
)
from ..models.enums.resource_collection_type import ResourceCollectionTypeOrStr
from ..models.get_resource_collection_response import GetResourceCollectionResponse
from ..models.resource_collections_request import ResourceCollectionsRequest, ResourceCollectionsRequestDict
from ..server.server import Server


class ResourceCollections:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ResourceCollectionsWithRawResponse(client, server, auth)

    def get_resource_collection(
        self,
        resource_collection_type: ResourceCollectionTypeOrStr,
        *,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetResourceCollectionResponse:
        """Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types
        of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon
        Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
        the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You
        can specify up to 500 Amazon Web Services CloudFormation stacks.

        Args:
            resource_collection_type: The type of Amazon Web Services resource collections to return. The one valid
                value is CLOUD_FORMATION for Amazon Web Services CloudFormation stacks.
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.get_resource_collection(
                resource_collection_type, next_token=next_token, request_options=request_options
            ),
        )

    def update_resource_collection(
        self,
        *,
        body: ResourceCollectionsRequest | ResourceCollectionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource
        collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that
        contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services
        resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500
        Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps
        Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException | ConflictException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.update_resource_collection(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ResourceCollectionsWithRawResponse:
        return self._with_raw_response


class AsyncResourceCollections:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncResourceCollectionsWithRawResponse(client, server, auth)

    async def get_resource_collection(
        self,
        resource_collection_type: ResourceCollectionTypeOrStr,
        *,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetResourceCollectionResponse:
        """Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types
        of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon
        Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
        the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You
        can specify up to 500 Amazon Web Services CloudFormation stacks.

        Args:
            resource_collection_type: The type of Amazon Web Services resource collections to return. The one valid
                value is CLOUD_FORMATION for Amazon Web Services CloudFormation stacks.
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_resource_collection(
                resource_collection_type, next_token=next_token, request_options=request_options
            ),
        )

    async def update_resource_collection(
        self,
        *,
        body: ResourceCollectionsRequest | ResourceCollectionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource
        collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that
        contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services
        resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500
        Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps
        Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException | ConflictException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_resource_collection(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncResourceCollectionsWithRawResponse:
        return self._with_raw_response


class ResourceCollectionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_resource_collection(
        self,
        resource_collection_type: ResourceCollectionTypeOrStr,
        *,
        next_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetResourceCollectionResponse, GetResourceCollectionErrorBody]:
        """Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types
        of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon
        Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
        the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You
        can specify up to 500 Amazon Web Services CloudFormation stacks.

        Args:
            resource_collection_type: The type of Amazon Web Services resource collections to return. The one valid
                value is CLOUD_FORMATION for Amazon Web Services CloudFormation stacks.
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/resource-collections/{ResourceCollectionType}"),
            path_params=[param[ResourceCollectionTypeOrStr]("ResourceCollectionType", resource_collection_type)],
            query_params=[param[str | None]("NextToken", next_token)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetResourceCollectionResponse],
            error_mapper=get_resource_collection_error_mapper,
            request_options=request_options,
        )

    def update_resource_collection(
        self,
        *,
        body: ResourceCollectionsRequest | ResourceCollectionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UpdateResourceCollectionErrorBody]:
        """Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource
        collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that
        contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services
        resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500
        Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps
        Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/resource-collections"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ResourceCollectionsRequest | ResourceCollectionsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=update_resource_collection_error_mapper,
            request_options=request_options,
        )


class AsyncResourceCollectionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_resource_collection(
        self,
        resource_collection_type: ResourceCollectionTypeOrStr,
        *,
        next_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetResourceCollectionResponse, GetResourceCollectionErrorBody]:
        """Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types
        of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon
        Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
        the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You
        can specify up to 500 Amazon Web Services CloudFormation stacks.

        Args:
            resource_collection_type: The type of Amazon Web Services resource collections to return. The one valid
                value is CLOUD_FORMATION for Amazon Web Services CloudFormation stacks.
            next_token: The pagination token to use to retrieve the next page of results for this operation. If this
                value is null, it retrieves the first page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/resource-collections/{ResourceCollectionType}"),
            path_params=[param[ResourceCollectionTypeOrStr]("ResourceCollectionType", resource_collection_type)],
            query_params=[param[str | None]("NextToken", next_token)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetResourceCollectionResponse],
            error_mapper=get_resource_collection_error_mapper,
            request_options=request_options,
        )

    async def update_resource_collection(
        self,
        *,
        body: ResourceCollectionsRequest | ResourceCollectionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UpdateResourceCollectionErrorBody]:
        """Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource
        collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that
        contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services
        resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500
        Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps
        Guru.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/resource-collections"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ResourceCollectionsRequest | ResourceCollectionsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=update_resource_collection_error_mapper,
            request_options=request_options,
        )
