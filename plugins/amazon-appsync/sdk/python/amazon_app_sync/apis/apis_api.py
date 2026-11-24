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
from ..errors.create_api_error import CreateApiErrorBody, create_api_error_mapper
from ..errors.create_graphql_api_error import CreateGraphqlApiErrorBody, create_graphql_api_error_mapper
from ..errors.delete_api_error import DeleteApiErrorBody, delete_api_error_mapper
from ..errors.delete_graphql_api_error import DeleteGraphqlApiErrorBody, delete_graphql_api_error_mapper
from ..errors.get_api_error import GetApiErrorBody, get_api_error_mapper
from ..errors.get_graphql_api_error import GetGraphqlApiErrorBody, get_graphql_api_error_mapper
from ..errors.list_apis_error import ListApisErrorBody, list_apis_error_mapper
from ..errors.list_graphql_apis_error import ListGraphqlApisErrorBody, list_graphql_apis_error_mapper
from ..errors.update_api_error import UpdateApiErrorBody, update_api_error_mapper
from ..errors.update_graphql_api_error import UpdateGraphqlApiErrorBody, update_graphql_api_error_mapper
from ..models.create_api_response import CreateApiResponse
from ..models.create_graphql_api_response import CreateGraphqlApiResponse
from ..models.enums.api_type2 import ApiType2OrStr
from ..models.enums.owner import OwnerOrStr
from ..models.get_api_response import GetApiResponse
from ..models.get_graphql_api_response import GetGraphqlApiResponse
from ..models.list_apis_response import ListApisResponse
from ..models.list_graphql_apis_response import ListGraphqlApisResponse
from ..models.update_api_response import UpdateApiResponse
from ..models.update_graphql_api_response import UpdateGraphqlApiResponse
from ..models.v1_apis_request import V1ApisRequest, V1ApisRequestDict
from ..models.v1_apis_request1 import V1ApisRequest1, V1ApisRequest1Dict
from ..models.v2_apis_request import V2ApisRequest, V2ApisRequestDict
from ..models.v2_apis_request1 import V2ApisRequest1, V2ApisRequest1Dict
from ..server.server import Server


class ApisApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ApisApiWithRawResponse(client, server, auth)

    def create_api(
        self,
        *,
        body: V2ApisRequest | V2ApisRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateApiResponse:
        """Creates an Api object. Use this operation to create an AppSync API with your preferred configuration, such as
        an Event API that provides real-time message publishing and message subscriptions over WebSockets.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException
                ServiceQuotaExceededException UnauthorizedException ``error`` is ``BadRequestException |
                UnauthorizedException | ServiceQuotaExceededException | ConcurrentModificationException |
                InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.create_api(body=body, request_options=request_options))

    def create_graphql_api(
        self,
        *,
        body: V1ApisRequest | V1ApisRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateGraphqlApiResponse:
        """Creates a GraphqlApi object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ApiLimitExceededException; BadRequestException ConcurrentModificationException
                InternalFailureException LimitExceededException UnauthorizedException ``error`` is
                ``ApiLimitExceededException | UnauthorizedException | ConcurrentModificationException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.create_graphql_api(body=body, request_options=request_options))

    def delete_api(self, api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes an Api object

        Args:
            api_id: The Api ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.delete_api(api_id, request_options=request_options))

    def delete_graphql_api(self, api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes a GraphqlApi object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.delete_graphql_api(api_id, request_options=request_options))

    def get_api(self, api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> GetApiResponse:
        """Retrieves an Api object.

        Args:
            api_id: The Api ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | AccessDeniedException
                | NotFoundException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_api(api_id, request_options=request_options))

    def get_graphql_api(
        self, api_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetGraphqlApiResponse:
        """Retrieves a GraphqlApi object.

        Args:
            api_id: The API ID for the GraphQL API.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | AccessDeniedException
                | NotFoundException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_graphql_api(api_id, request_options=request_options))

    def list_apis(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListApisResponse:
        """Lists the APIs in your AppSync account. ListApis returns only the high level API details. For more detailed
        information about an API, use GetApi.

        Args:
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.list_apis(
                next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    def list_graphql_apis(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        api_type: ApiType2OrStr | None = None,
        owner: OwnerOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListGraphqlApisResponse:
        """Lists your GraphQL APIs.

        Args:
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            api_type: The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API
                (MERGED).
            owner: The account owner of the GraphQL API.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.list_graphql_apis(
                next_token=next_token,
                max_results=max_results,
                api_type=api_type,
                owner=owner,
                request_options=request_options,
            ),
        )

    def update_api(
        self,
        api_id: str,
        *,
        body: V2ApisRequest1 | V2ApisRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateApiResponse:
        """Updates an Api.

        Args:
            api_id: The Api ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.update_api(api_id, body=body, request_options=request_options))

    def update_graphql_api(
        self,
        api_id: str,
        *,
        body: V1ApisRequest1 | V1ApisRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateGraphqlApiResponse:
        """Updates a GraphqlApi object.

        Args:
            api_id: The API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.update_graphql_api(api_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ApisApiWithRawResponse:
        return self._with_raw_response


class AsyncApisApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncApisApiWithRawResponse(client, server, auth)

    async def create_api(
        self,
        *,
        body: V2ApisRequest | V2ApisRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateApiResponse:
        """Creates an Api object. Use this operation to create an AppSync API with your preferred configuration, such as
        an Event API that provides real-time message publishing and message subscriptions over WebSockets.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException
                ServiceQuotaExceededException UnauthorizedException ``error`` is ``BadRequestException |
                UnauthorizedException | ServiceQuotaExceededException | ConcurrentModificationException |
                InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.create_api(body=body, request_options=request_options))

    async def create_graphql_api(
        self,
        *,
        body: V1ApisRequest | V1ApisRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateGraphqlApiResponse:
        """Creates a GraphqlApi object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ApiLimitExceededException; BadRequestException ConcurrentModificationException
                InternalFailureException LimitExceededException UnauthorizedException ``error`` is
                ``ApiLimitExceededException | UnauthorizedException | ConcurrentModificationException |
                LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.create_graphql_api(body=body, request_options=request_options))

    async def delete_api(self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Deletes an Api object

        Args:
            api_id: The Api ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_api(api_id, request_options=request_options))

    async def delete_graphql_api(self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Deletes a GraphqlApi object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_graphql_api(api_id, request_options=request_options))

    async def get_api(self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> GetApiResponse:
        """Retrieves an Api object.

        Args:
            api_id: The Api ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | AccessDeniedException
                | NotFoundException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.get_api(api_id, request_options=request_options))

    async def get_graphql_api(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetGraphqlApiResponse:
        """Retrieves a GraphqlApi object.

        Args:
            api_id: The API ID for the GraphQL API.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | AccessDeniedException
                | NotFoundException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.get_graphql_api(api_id, request_options=request_options))

    async def list_apis(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListApisResponse:
        """Lists the APIs in your AppSync account. ListApis returns only the high level API details. For more detailed
        information about an API, use GetApi.

        Args:
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_apis(
                next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    async def list_graphql_apis(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        api_type: ApiType2OrStr | None = None,
        owner: OwnerOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListGraphqlApisResponse:
        """Lists your GraphQL APIs.

        Args:
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            api_type: The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API
                (MERGED).
            owner: The account owner of the GraphQL API.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_graphql_apis(
                next_token=next_token,
                max_results=max_results,
                api_type=api_type,
                owner=owner,
                request_options=request_options,
            ),
        )

    async def update_api(
        self,
        api_id: str,
        *,
        body: V2ApisRequest1 | V2ApisRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateApiResponse:
        """Updates an Api.

        Args:
            api_id: The Api ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.update_api(api_id, body=body, request_options=request_options))

    async def update_graphql_api(
        self,
        api_id: str,
        *,
        body: V1ApisRequest1 | V1ApisRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateGraphqlApiResponse:
        """Updates a GraphqlApi object.

        Args:
            api_id: The API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException |
                AccessDeniedException | NotFoundException | ConcurrentModificationException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_graphql_api(api_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncApisApiWithRawResponse:
        return self._with_raw_response


class ApisApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_api(
        self,
        *,
        body: V2ApisRequest | V2ApisRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateApiResponse, CreateApiErrorBody]:
        """Creates an Api object. Use this operation to create an AppSync API with your preferred configuration, such as
        an Event API that provides real-time message publishing and message subscriptions over WebSockets.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/apis"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2ApisRequest | V2ApisRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateApiResponse],
            error_mapper=create_api_error_mapper,
            request_options=request_options,
        )

    def create_graphql_api(
        self,
        *,
        body: V1ApisRequest | V1ApisRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateGraphqlApiResponse, CreateGraphqlApiErrorBody]:
        """Creates a GraphqlApi object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisRequest | V1ApisRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateGraphqlApiResponse],
            error_mapper=create_graphql_api_error_mapper,
            request_options=request_options,
        )

    def delete_api(
        self, api_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteApiErrorBody]:
        """Deletes an Api object

        Args:
            api_id: The Api ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_api_error_mapper,
            request_options=request_options,
        )

    def delete_graphql_api(
        self, api_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteGraphqlApiErrorBody]:
        """Deletes a GraphqlApi object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_graphql_api_error_mapper,
            request_options=request_options,
        )

    def get_api(
        self, api_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetApiResponse, GetApiErrorBody]:
        """Retrieves an Api object.

        Args:
            api_id: The Api ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetApiResponse],
            error_mapper=get_api_error_mapper,
            request_options=request_options,
        )

    def get_graphql_api(
        self, api_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetGraphqlApiResponse, GetGraphqlApiErrorBody]:
        """Retrieves a GraphqlApi object.

        Args:
            api_id: The API ID for the GraphQL API.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetGraphqlApiResponse],
            error_mapper=get_graphql_api_error_mapper,
            request_options=request_options,
        )

    def list_apis(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListApisResponse, ListApisErrorBody]:
        """Lists the APIs in your AppSync account. ListApis returns only the high level API details. For more detailed
        information about an API, use GetApi.

        Args:
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/apis"),
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListApisResponse],
            error_mapper=list_apis_error_mapper,
            request_options=request_options,
        )

    def list_graphql_apis(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        api_type: ApiType2OrStr | None = None,
        owner: OwnerOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListGraphqlApisResponse, ListGraphqlApisErrorBody]:
        """Lists your GraphQL APIs.

        Args:
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            api_type: The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API
                (MERGED).
            owner: The account owner of the GraphQL API.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis"),
            query_params=[
                param[str | None]("nextToken", next_token),
                param[int | None]("maxResults", max_results),
                param[ApiType2OrStr | None]("apiType", api_type),
                param[OwnerOrStr | None]("owner", owner),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListGraphqlApisResponse],
            error_mapper=list_graphql_apis_error_mapper,
            request_options=request_options,
        )

    def update_api(
        self,
        api_id: str,
        *,
        body: V2ApisRequest1 | V2ApisRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateApiResponse, UpdateApiErrorBody]:
        """Updates an Api.

        Args:
            api_id: The Api ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2ApisRequest1 | V2ApisRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateApiResponse],
            error_mapper=update_api_error_mapper,
            request_options=request_options,
        )

    def update_graphql_api(
        self,
        api_id: str,
        *,
        body: V1ApisRequest1 | V1ApisRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateGraphqlApiResponse, UpdateGraphqlApiErrorBody]:
        """Updates a GraphqlApi object.

        Args:
            api_id: The API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisRequest1 | V1ApisRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateGraphqlApiResponse],
            error_mapper=update_graphql_api_error_mapper,
            request_options=request_options,
        )


class AsyncApisApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_api(
        self,
        *,
        body: V2ApisRequest | V2ApisRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateApiResponse, CreateApiErrorBody]:
        """Creates an Api object. Use this operation to create an AppSync API with your preferred configuration, such as
        an Event API that provides real-time message publishing and message subscriptions over WebSockets.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/apis"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2ApisRequest | V2ApisRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateApiResponse],
            error_mapper=create_api_error_mapper,
            request_options=request_options,
        )

    async def create_graphql_api(
        self,
        *,
        body: V1ApisRequest | V1ApisRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateGraphqlApiResponse, CreateGraphqlApiErrorBody]:
        """Creates a GraphqlApi object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisRequest | V1ApisRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateGraphqlApiResponse],
            error_mapper=create_graphql_api_error_mapper,
            request_options=request_options,
        )

    async def delete_api(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteApiErrorBody]:
        """Deletes an Api object

        Args:
            api_id: The Api ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_api_error_mapper,
            request_options=request_options,
        )

    async def delete_graphql_api(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteGraphqlApiErrorBody]:
        """Deletes a GraphqlApi object.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_graphql_api_error_mapper,
            request_options=request_options,
        )

    async def get_api(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetApiResponse, GetApiErrorBody]:
        """Retrieves an Api object.

        Args:
            api_id: The Api ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetApiResponse],
            error_mapper=get_api_error_mapper,
            request_options=request_options,
        )

    async def get_graphql_api(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetGraphqlApiResponse, GetGraphqlApiErrorBody]:
        """Retrieves a GraphqlApi object.

        Args:
            api_id: The API ID for the GraphQL API.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetGraphqlApiResponse],
            error_mapper=get_graphql_api_error_mapper,
            request_options=request_options,
        )

    async def list_apis(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListApisResponse, ListApisErrorBody]:
        """Lists the APIs in your AppSync account. ListApis returns only the high level API details. For more detailed
        information about an API, use GetApi.

        Args:
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/apis"),
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListApisResponse],
            error_mapper=list_apis_error_mapper,
            request_options=request_options,
        )

    async def list_graphql_apis(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        api_type: ApiType2OrStr | None = None,
        owner: OwnerOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListGraphqlApisResponse, ListGraphqlApisErrorBody]:
        """Lists your GraphQL APIs.

        Args:
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            api_type: The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API
                (MERGED).
            owner: The account owner of the GraphQL API.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis"),
            query_params=[
                param[str | None]("nextToken", next_token),
                param[int | None]("maxResults", max_results),
                param[ApiType2OrStr | None]("apiType", api_type),
                param[OwnerOrStr | None]("owner", owner),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListGraphqlApisResponse],
            error_mapper=list_graphql_apis_error_mapper,
            request_options=request_options,
        )

    async def update_api(
        self,
        api_id: str,
        *,
        body: V2ApisRequest1 | V2ApisRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateApiResponse, UpdateApiErrorBody]:
        """Updates an Api.

        Args:
            api_id: The Api ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2ApisRequest1 | V2ApisRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateApiResponse],
            error_mapper=update_api_error_mapper,
            request_options=request_options,
        )

    async def update_graphql_api(
        self,
        api_id: str,
        *,
        body: V1ApisRequest1 | V1ApisRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateGraphqlApiResponse, UpdateGraphqlApiErrorBody]:
        """Updates a GraphqlApi object.

        Args:
            api_id: The API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisRequest1 | V1ApisRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateGraphqlApiResponse],
            error_mapper=update_graphql_api_error_mapper,
            request_options=request_options,
        )
