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
from ..errors.create_graphql_api2_error import CreateGraphqlApi2ErrorBody, create_graphql_api2_error_mapper
from ..errors.delete_graphql_api2_error import DeleteGraphqlApi2ErrorBody, delete_graphql_api2_error_mapper
from ..errors.evaluate_mapping_template_error import (
    EvaluateMappingTemplateErrorBody,
    evaluate_mapping_template_error_mapper,
)
from ..errors.get_graphql_api2_error import GetGraphqlApi2ErrorBody, get_graphql_api2_error_mapper
from ..errors.list_graphql_apis2_error import ListGraphqlApis2ErrorBody, list_graphql_apis2_error_mapper
from ..errors.update_graphql_api2_error import UpdateGraphqlApi2ErrorBody, update_graphql_api2_error_mapper
from ..models.create_graphql_api_response import CreateGraphqlApiResponse
from ..models.enums.api_type2 import ApiType2OrStr
from ..models.enums.owner import OwnerOrStr
from ..models.evaluate_mapping_template_response import EvaluateMappingTemplateResponse
from ..models.get_graphql_api_response import GetGraphqlApiResponse
from ..models.list_graphql_apis_response import ListGraphqlApisResponse
from ..models.update_graphql_api_response import UpdateGraphqlApiResponse
from ..models.v1_apis_request import V1ApisRequest, V1ApisRequestDict
from ..models.v1_apis_request1 import V1ApisRequest1, V1ApisRequest1Dict
from ..models.v1_dataplane_evaluatetemplate_request import (
    V1DataplaneEvaluatetemplateRequest,
    V1DataplaneEvaluatetemplateRequestDict,
)
from ..server.server import Server


class GraphqlApis:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GraphqlApisWithRawResponse(client, server, auth)

    def create_graphql_api2(
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
        return unwrap(self._with_raw_response.create_graphql_api2(body=body, request_options=request_options))

    def delete_graphql_api2(self, api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
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
        return unwrap(self._with_raw_response.delete_graphql_api2(api_id, request_options=request_options))

    def evaluate_mapping_template(
        self,
        *,
        body: V1DataplaneEvaluatetemplateRequest | V1DataplaneEvaluatetemplateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EvaluateMappingTemplateResponse:
        """Evaluates a given template and returns the response. The mapping template can be a request or response
        template. Request templates take the incoming request after a GraphQL operation is parsed and convert it into a
        request configuration for the selected data source operation. Response templates interpret responses from the
        data source and map it to the shape of the GraphQL field output type. Mapping templates are written in the
        Apache Velocity Template Language (VTL).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException ``error`` is
                ``BadRequestException | AccessDeniedException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.evaluate_mapping_template(body=body, request_options=request_options))

    def get_graphql_api2(
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
        return unwrap(self._with_raw_response.get_graphql_api2(api_id, request_options=request_options))

    def list_graphql_apis2(
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
            self._with_raw_response.list_graphql_apis2(
                next_token=next_token,
                max_results=max_results,
                api_type=api_type,
                owner=owner,
                request_options=request_options,
            ),
        )

    def update_graphql_api2(
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
        return unwrap(self._with_raw_response.update_graphql_api2(api_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> GraphqlApisWithRawResponse:
        return self._with_raw_response


class AsyncGraphqlApis:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGraphqlApisWithRawResponse(client, server, auth)

    async def create_graphql_api2(
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
        return unwrap(await self._with_raw_response.create_graphql_api2(body=body, request_options=request_options))

    async def delete_graphql_api2(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
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
        return unwrap(await self._with_raw_response.delete_graphql_api2(api_id, request_options=request_options))

    async def evaluate_mapping_template(
        self,
        *,
        body: V1DataplaneEvaluatetemplateRequest | V1DataplaneEvaluatetemplateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EvaluateMappingTemplateResponse:
        """Evaluates a given template and returns the response. The mapping template can be a request or response
        template. Request templates take the incoming request after a GraphQL operation is parsed and convert it into a
        request configuration for the selected data source operation. Response templates interpret responses from the
        data source and map it to the shape of the GraphQL field output type. Mapping templates are written in the
        Apache Velocity Template Language (VTL).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException ``error`` is
                ``BadRequestException | AccessDeniedException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.evaluate_mapping_template(body=body, request_options=request_options)
        )

    async def get_graphql_api2(
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
        return unwrap(await self._with_raw_response.get_graphql_api2(api_id, request_options=request_options))

    async def list_graphql_apis2(
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
            await self._with_raw_response.list_graphql_apis2(
                next_token=next_token,
                max_results=max_results,
                api_type=api_type,
                owner=owner,
                request_options=request_options,
            ),
        )

    async def update_graphql_api2(
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
            await self._with_raw_response.update_graphql_api2(api_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncGraphqlApisWithRawResponse:
        return self._with_raw_response


class GraphqlApisWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_graphql_api2(
        self,
        *,
        body: V1ApisRequest | V1ApisRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateGraphqlApiResponse, CreateGraphqlApi2ErrorBody]:
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
            error_mapper=create_graphql_api2_error_mapper,
            request_options=request_options,
        )

    def delete_graphql_api2(
        self, api_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteGraphqlApi2ErrorBody]:
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
            error_mapper=delete_graphql_api2_error_mapper,
            request_options=request_options,
        )

    def evaluate_mapping_template(
        self,
        *,
        body: V1DataplaneEvaluatetemplateRequest | V1DataplaneEvaluatetemplateRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EvaluateMappingTemplateResponse, EvaluateMappingTemplateErrorBody]:
        """Evaluates a given template and returns the response. The mapping template can be a request or response
        template. Request templates take the incoming request after a GraphQL operation is parsed and convert it into a
        request configuration for the selected data source operation. Response templates interpret responses from the
        data source and map it to the shape of the GraphQL field output type. Mapping templates are written in the
        Apache Velocity Template Language (VTL).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/dataplane-evaluatetemplate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DataplaneEvaluatetemplateRequest | V1DataplaneEvaluatetemplateRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[EvaluateMappingTemplateResponse],
            error_mapper=evaluate_mapping_template_error_mapper,
            request_options=request_options,
        )

    def get_graphql_api2(
        self, api_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetGraphqlApiResponse, GetGraphqlApi2ErrorBody]:
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
            error_mapper=get_graphql_api2_error_mapper,
            request_options=request_options,
        )

    def list_graphql_apis2(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        api_type: ApiType2OrStr | None = None,
        owner: OwnerOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListGraphqlApisResponse, ListGraphqlApis2ErrorBody]:
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
            error_mapper=list_graphql_apis2_error_mapper,
            request_options=request_options,
        )

    def update_graphql_api2(
        self,
        api_id: str,
        *,
        body: V1ApisRequest1 | V1ApisRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateGraphqlApiResponse, UpdateGraphqlApi2ErrorBody]:
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
            error_mapper=update_graphql_api2_error_mapper,
            request_options=request_options,
        )


class AsyncGraphqlApisWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_graphql_api2(
        self,
        *,
        body: V1ApisRequest | V1ApisRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateGraphqlApiResponse, CreateGraphqlApi2ErrorBody]:
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
            error_mapper=create_graphql_api2_error_mapper,
            request_options=request_options,
        )

    async def delete_graphql_api2(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteGraphqlApi2ErrorBody]:
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
            error_mapper=delete_graphql_api2_error_mapper,
            request_options=request_options,
        )

    async def evaluate_mapping_template(
        self,
        *,
        body: V1DataplaneEvaluatetemplateRequest | V1DataplaneEvaluatetemplateRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EvaluateMappingTemplateResponse, EvaluateMappingTemplateErrorBody]:
        """Evaluates a given template and returns the response. The mapping template can be a request or response
        template. Request templates take the incoming request after a GraphQL operation is parsed and convert it into a
        request configuration for the selected data source operation. Response templates interpret responses from the
        data source and map it to the shape of the GraphQL field output type. Mapping templates are written in the
        Apache Velocity Template Language (VTL).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/dataplane-evaluatetemplate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DataplaneEvaluatetemplateRequest | V1DataplaneEvaluatetemplateRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[EvaluateMappingTemplateResponse],
            error_mapper=evaluate_mapping_template_error_mapper,
            request_options=request_options,
        )

    async def get_graphql_api2(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetGraphqlApiResponse, GetGraphqlApi2ErrorBody]:
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
            error_mapper=get_graphql_api2_error_mapper,
            request_options=request_options,
        )

    async def list_graphql_apis2(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        api_type: ApiType2OrStr | None = None,
        owner: OwnerOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListGraphqlApisResponse, ListGraphqlApis2ErrorBody]:
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
            error_mapper=list_graphql_apis2_error_mapper,
            request_options=request_options,
        )

    async def update_graphql_api2(
        self,
        api_id: str,
        *,
        body: V1ApisRequest1 | V1ApisRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateGraphqlApiResponse, UpdateGraphqlApi2ErrorBody]:
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
            error_mapper=update_graphql_api2_error_mapper,
            request_options=request_options,
        )
