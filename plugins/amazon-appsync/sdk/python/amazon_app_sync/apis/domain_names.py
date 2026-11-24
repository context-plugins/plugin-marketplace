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
from ..errors.associate_api_error import AssociateApiErrorBody, associate_api_error_mapper
from ..errors.create_domain_name_error import CreateDomainNameErrorBody, create_domain_name_error_mapper
from ..errors.delete_domain_name_error import DeleteDomainNameErrorBody, delete_domain_name_error_mapper
from ..errors.disassociate_api_error import DisassociateApiErrorBody, disassociate_api_error_mapper
from ..errors.get_api_association_error import GetApiAssociationErrorBody, get_api_association_error_mapper
from ..errors.get_domain_name_error import GetDomainNameErrorBody, get_domain_name_error_mapper
from ..errors.list_domain_names_error import ListDomainNamesErrorBody, list_domain_names_error_mapper
from ..errors.update_domain_name_error import UpdateDomainNameErrorBody, update_domain_name_error_mapper
from ..models.associate_api_response import AssociateApiResponse
from ..models.create_domain_name_response import CreateDomainNameResponse
from ..models.get_api_association_response import GetApiAssociationResponse
from ..models.get_domain_name_response import GetDomainNameResponse
from ..models.list_domain_names_response import ListDomainNamesResponse
from ..models.update_domain_name_response import UpdateDomainNameResponse
from ..models.v1_domainnames_apiassociation_request import (
    V1DomainnamesApiassociationRequest,
    V1DomainnamesApiassociationRequestDict,
)
from ..models.v1_domainnames_request import V1DomainnamesRequest, V1DomainnamesRequestDict
from ..models.v1_domainnames_request1 import V1DomainnamesRequest1, V1DomainnamesRequest1Dict
from ..server.server import Server


class DomainNames:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DomainNamesWithRawResponse(client, server, auth)

    def associate_api(
        self,
        domain_name: str,
        *,
        body: V1DomainnamesApiassociationRequest | V1DomainnamesApiassociationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AssociateApiResponse:
        """Maps an endpoint to your custom domain.

        Args:
            domain_name: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException ``error`` is
                ``BadRequestException | AccessDeniedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.associate_api(domain_name, body=body, request_options=request_options))

    def create_domain_name(
        self,
        *,
        body: V1DomainnamesRequest | V1DomainnamesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateDomainNameResponse:
        """Creates a custom DomainName object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException ``error`` is
                ``BadRequestException | AccessDeniedException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.create_domain_name(body=body, request_options=request_options))

    def delete_domain_name(self, domain_name: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes a custom DomainName object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException ``error`` is ``BadRequestException | AccessDeniedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.delete_domain_name(domain_name, request_options=request_options))

    def disassociate_api(self, domain_name: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Removes an ApiAssociation object from a custom domain.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException ``error`` is ``BadRequestException | AccessDeniedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.disassociate_api(domain_name, request_options=request_options))

    def get_api_association(
        self, domain_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetApiAssociationResponse:
        """Retrieves an ApiAssociation object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException ``error`` is
                ``BadRequestException | AccessDeniedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_api_association(domain_name, request_options=request_options))

    def get_domain_name(
        self, domain_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetDomainNameResponse:
        """Retrieves a custom DomainName object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException ``error`` is
                ``BadRequestException | AccessDeniedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_domain_name(domain_name, request_options=request_options))

    def list_domain_names(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListDomainNamesResponse:
        """Lists multiple custom domain names.

        Args:
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException ``error`` is
                ``BadRequestException | AccessDeniedException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.list_domain_names(
                next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    def update_domain_name(
        self,
        domain_name: str,
        *,
        body: V1DomainnamesRequest1 | V1DomainnamesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateDomainNameResponse:
        """Updates a custom DomainName object.

        Args:
            domain_name: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException ``error`` is ``BadRequestException | AccessDeniedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.update_domain_name(domain_name, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DomainNamesWithRawResponse:
        return self._with_raw_response


class AsyncDomainNames:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDomainNamesWithRawResponse(client, server, auth)

    async def associate_api(
        self,
        domain_name: str,
        *,
        body: V1DomainnamesApiassociationRequest | V1DomainnamesApiassociationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AssociateApiResponse:
        """Maps an endpoint to your custom domain.

        Args:
            domain_name: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException ``error`` is
                ``BadRequestException | AccessDeniedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.associate_api(domain_name, body=body, request_options=request_options)
        )

    async def create_domain_name(
        self,
        *,
        body: V1DomainnamesRequest | V1DomainnamesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateDomainNameResponse:
        """Creates a custom DomainName object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException ``error`` is
                ``BadRequestException | AccessDeniedException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.create_domain_name(body=body, request_options=request_options))

    async def delete_domain_name(
        self, domain_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a custom DomainName object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException ``error`` is ``BadRequestException | AccessDeniedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.delete_domain_name(domain_name, request_options=request_options))

    async def disassociate_api(
        self, domain_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Removes an ApiAssociation object from a custom domain.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException ``error`` is ``BadRequestException | AccessDeniedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.disassociate_api(domain_name, request_options=request_options))

    async def get_api_association(
        self, domain_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetApiAssociationResponse:
        """Retrieves an ApiAssociation object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException ``error`` is
                ``BadRequestException | AccessDeniedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_api_association(domain_name, request_options=request_options))

    async def get_domain_name(
        self, domain_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetDomainNameResponse:
        """Retrieves a custom DomainName object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException NotFoundException ``error`` is
                ``BadRequestException | AccessDeniedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_domain_name(domain_name, request_options=request_options))

    async def list_domain_names(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListDomainNamesResponse:
        """Lists multiple custom domain names.

        Args:
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException InternalFailureException ``error`` is
                ``BadRequestException | AccessDeniedException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_domain_names(
                next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    async def update_domain_name(
        self,
        domain_name: str,
        *,
        body: V1DomainnamesRequest1 | V1DomainnamesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateDomainNameResponse:
        """Updates a custom DomainName object.

        Args:
            domain_name: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException BadRequestException ConcurrentModificationException InternalFailureException
                NotFoundException ``error`` is ``BadRequestException | AccessDeniedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_domain_name(domain_name, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDomainNamesWithRawResponse:
        return self._with_raw_response


class DomainNamesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def associate_api(
        self,
        domain_name: str,
        *,
        body: V1DomainnamesApiassociationRequest | V1DomainnamesApiassociationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AssociateApiResponse, AssociateApiErrorBody]:
        """Maps an endpoint to your custom domain.

        Args:
            domain_name: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/domainnames/{domainName}/apiassociation"),
            path_params=[param[str]("domainName", domain_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DomainnamesApiassociationRequest | V1DomainnamesApiassociationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[AssociateApiResponse],
            error_mapper=associate_api_error_mapper,
            request_options=request_options,
        )

    def create_domain_name(
        self,
        *,
        body: V1DomainnamesRequest | V1DomainnamesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateDomainNameResponse, CreateDomainNameErrorBody]:
        """Creates a custom DomainName object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/domainnames"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DomainnamesRequest | V1DomainnamesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateDomainNameResponse],
            error_mapper=create_domain_name_error_mapper,
            request_options=request_options,
        )

    def delete_domain_name(
        self, domain_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteDomainNameErrorBody]:
        """Deletes a custom DomainName object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/domainnames/{domainName}"),
            path_params=[param[str]("domainName", domain_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_domain_name_error_mapper,
            request_options=request_options,
        )

    def disassociate_api(
        self, domain_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DisassociateApiErrorBody]:
        """Removes an ApiAssociation object from a custom domain.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/domainnames/{domainName}/apiassociation"),
            path_params=[param[str]("domainName", domain_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=disassociate_api_error_mapper,
            request_options=request_options,
        )

    def get_api_association(
        self, domain_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetApiAssociationResponse, GetApiAssociationErrorBody]:
        """Retrieves an ApiAssociation object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/domainnames/{domainName}/apiassociation"),
            path_params=[param[str]("domainName", domain_name)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetApiAssociationResponse],
            error_mapper=get_api_association_error_mapper,
            request_options=request_options,
        )

    def get_domain_name(
        self, domain_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetDomainNameResponse, GetDomainNameErrorBody]:
        """Retrieves a custom DomainName object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/domainnames/{domainName}"),
            path_params=[param[str]("domainName", domain_name)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetDomainNameResponse],
            error_mapper=get_domain_name_error_mapper,
            request_options=request_options,
        )

    def list_domain_names(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListDomainNamesResponse, ListDomainNamesErrorBody]:
        """Lists multiple custom domain names.

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
            url_template=self._server.default("/v1/domainnames"),
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListDomainNamesResponse],
            error_mapper=list_domain_names_error_mapper,
            request_options=request_options,
        )

    def update_domain_name(
        self,
        domain_name: str,
        *,
        body: V1DomainnamesRequest1 | V1DomainnamesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateDomainNameResponse, UpdateDomainNameErrorBody]:
        """Updates a custom DomainName object.

        Args:
            domain_name: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/domainnames/{domainName}"),
            path_params=[param[str]("domainName", domain_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DomainnamesRequest1 | V1DomainnamesRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateDomainNameResponse],
            error_mapper=update_domain_name_error_mapper,
            request_options=request_options,
        )


class AsyncDomainNamesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def associate_api(
        self,
        domain_name: str,
        *,
        body: V1DomainnamesApiassociationRequest | V1DomainnamesApiassociationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AssociateApiResponse, AssociateApiErrorBody]:
        """Maps an endpoint to your custom domain.

        Args:
            domain_name: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/domainnames/{domainName}/apiassociation"),
            path_params=[param[str]("domainName", domain_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DomainnamesApiassociationRequest | V1DomainnamesApiassociationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[AssociateApiResponse],
            error_mapper=associate_api_error_mapper,
            request_options=request_options,
        )

    async def create_domain_name(
        self,
        *,
        body: V1DomainnamesRequest | V1DomainnamesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateDomainNameResponse, CreateDomainNameErrorBody]:
        """Creates a custom DomainName object.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/domainnames"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DomainnamesRequest | V1DomainnamesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateDomainNameResponse],
            error_mapper=create_domain_name_error_mapper,
            request_options=request_options,
        )

    async def delete_domain_name(
        self, domain_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteDomainNameErrorBody]:
        """Deletes a custom DomainName object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/domainnames/{domainName}"),
            path_params=[param[str]("domainName", domain_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_domain_name_error_mapper,
            request_options=request_options,
        )

    async def disassociate_api(
        self, domain_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DisassociateApiErrorBody]:
        """Removes an ApiAssociation object from a custom domain.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/domainnames/{domainName}/apiassociation"),
            path_params=[param[str]("domainName", domain_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=disassociate_api_error_mapper,
            request_options=request_options,
        )

    async def get_api_association(
        self, domain_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetApiAssociationResponse, GetApiAssociationErrorBody]:
        """Retrieves an ApiAssociation object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/domainnames/{domainName}/apiassociation"),
            path_params=[param[str]("domainName", domain_name)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetApiAssociationResponse],
            error_mapper=get_api_association_error_mapper,
            request_options=request_options,
        )

    async def get_domain_name(
        self, domain_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetDomainNameResponse, GetDomainNameErrorBody]:
        """Retrieves a custom DomainName object.

        Args:
            domain_name: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/domainnames/{domainName}"),
            path_params=[param[str]("domainName", domain_name)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetDomainNameResponse],
            error_mapper=get_domain_name_error_mapper,
            request_options=request_options,
        )

    async def list_domain_names(
        self,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListDomainNamesResponse, ListDomainNamesErrorBody]:
        """Lists multiple custom domain names.

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
            url_template=self._server.default("/v1/domainnames"),
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListDomainNamesResponse],
            error_mapper=list_domain_names_error_mapper,
            request_options=request_options,
        )

    async def update_domain_name(
        self,
        domain_name: str,
        *,
        body: V1DomainnamesRequest1 | V1DomainnamesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateDomainNameResponse, UpdateDomainNameErrorBody]:
        """Updates a custom DomainName object.

        Args:
            domain_name: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/domainnames/{domainName}"),
            path_params=[param[str]("domainName", domain_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DomainnamesRequest1 | V1DomainnamesRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateDomainNameResponse],
            error_mapper=update_domain_name_error_mapper,
            request_options=request_options,
        )
