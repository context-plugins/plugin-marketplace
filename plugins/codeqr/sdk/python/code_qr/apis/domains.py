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
from ..errors.create_domain_error import CreateDomainErrorBody, create_domain_error_mapper
from ..errors.delete_domain_error import DeleteDomainErrorBody, delete_domain_error_mapper
from ..errors.list_domains_error import ListDomainsErrorBody, list_domains_error_mapper
from ..errors.update_domain_error import UpdateDomainErrorBody, update_domain_error_mapper
from ..models.domain_schema import DomainSchema
from ..models.domains_request import DomainsRequest, DomainsRequestDict
from ..models.domains_request1 import DomainsRequest1, DomainsRequest1Dict
from ..models.domains_response import DomainsResponse
from ..server.server import Server


class Domains:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DomainsWithRawResponse(client, server, auth)

    def create_domain(
        self,
        *,
        body: DomainsRequest | DomainsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DomainSchema:
        """Create a domain for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domain was created.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.create_domain(body=body, request_options=request_options))

    def delete_domain(self, slug: str, *, request_options: RequestOptionsOrDict | None = None) -> DomainsResponse:
        """Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with
        the domain.

        Args:
            slug: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domain was deleted.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.delete_domain(slug, request_options=request_options))

    def list_domains(
        self,
        *,
        archived: bool | None = False,
        search: str | None = None,
        page: float | None = 1.0,
        page_size: float | None = 50.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[DomainSchema]:
        """Retrieve a list of domains associated with the authenticated workspace.

        Args:
            archived: Whether to include archived domains in the response. Defaults to ``false`` if not provided.
            search: The search term to filter the domains by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domains were retrieved.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            self._with_raw_response.list_domains(
                archived=archived, search=search, page=page, page_size=page_size, request_options=request_options
            ),
        )

    def update_domain(
        self,
        slug: str,
        *,
        body: DomainsRequest1 | DomainsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DomainSchema:
        """Update a domain for the authenticated workspace.

        Args:
            slug: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domain was updated.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.update_domain(slug, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> DomainsWithRawResponse:
        return self._with_raw_response


class AsyncDomains:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDomainsWithRawResponse(client, server, auth)

    async def create_domain(
        self,
        *,
        body: DomainsRequest | DomainsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DomainSchema:
        """Create a domain for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domain was created.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.create_domain(body=body, request_options=request_options))

    async def delete_domain(
        self, slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DomainsResponse:
        """Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with
        the domain.

        Args:
            slug: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domain was deleted.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.delete_domain(slug, request_options=request_options))

    async def list_domains(
        self,
        *,
        archived: bool | None = False,
        search: str | None = None,
        page: float | None = 1.0,
        page_size: float | None = 50.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[DomainSchema]:
        """Retrieve a list of domains associated with the authenticated workspace.

        Args:
            archived: Whether to include archived domains in the response. Defaults to ``false`` if not provided.
            search: The search term to filter the domains by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domains were retrieved.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            await self._with_raw_response.list_domains(
                archived=archived, search=search, page=page, page_size=page_size, request_options=request_options
            ),
        )

    async def update_domain(
        self,
        slug: str,
        *,
        body: DomainsRequest1 | DomainsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DomainSchema:
        """Update a domain for the authenticated workspace.

        Args:
            slug: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domain was updated.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.update_domain(slug, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDomainsWithRawResponse:
        return self._with_raw_response


class DomainsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_domain(
        self,
        *,
        body: DomainsRequest | DomainsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DomainSchema, CreateDomainErrorBody]:
        """Create a domain for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/domains"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DomainsRequest | DomainsRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[DomainSchema],
            error_mapper=create_domain_error_mapper,
            request_options=request_options,
        )

    def delete_domain(
        self, slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DomainsResponse, DeleteDomainErrorBody]:
        """Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with
        the domain.

        Args:
            slug: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/domains/{slug}"),
            path_params=[param[str]("slug", slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=json_decoder[DomainsResponse],
            error_mapper=delete_domain_error_mapper,
            request_options=request_options,
        )

    def list_domains(
        self,
        *,
        archived: bool | None = False,
        search: str | None = None,
        page: float | None = 1.0,
        page_size: float | None = 50.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[DomainSchema], ListDomainsErrorBody]:
        """Retrieve a list of domains associated with the authenticated workspace.

        Args:
            archived: Whether to include archived domains in the response. Defaults to ``false`` if not provided.
            search: The search term to filter the domains by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/domains"),
            query_params=[
                param[bool | None]("archived", archived),
                param[str | None]("search", search),
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.token,
            decoder=json_decoder[list[DomainSchema]],
            error_mapper=list_domains_error_mapper,
            request_options=request_options,
        )

    def update_domain(
        self,
        slug: str,
        *,
        body: DomainsRequest1 | DomainsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DomainSchema, UpdateDomainErrorBody]:
        """Update a domain for the authenticated workspace.

        Args:
            slug: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/domains/{slug}"),
            path_params=[param[str]("slug", slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DomainsRequest1 | DomainsRequest1Dict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[DomainSchema],
            error_mapper=update_domain_error_mapper,
            request_options=request_options,
        )


class AsyncDomainsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_domain(
        self,
        *,
        body: DomainsRequest | DomainsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DomainSchema, CreateDomainErrorBody]:
        """Create a domain for the authenticated workspace.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/domains"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DomainsRequest | DomainsRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[DomainSchema],
            error_mapper=create_domain_error_mapper,
            request_options=request_options,
        )

    async def delete_domain(
        self, slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DomainsResponse, DeleteDomainErrorBody]:
        """Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with
        the domain.

        Args:
            slug: The domain name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/domains/{slug}"),
            path_params=[param[str]("slug", slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[DomainsResponse],
            error_mapper=delete_domain_error_mapper,
            request_options=request_options,
        )

    async def list_domains(
        self,
        *,
        archived: bool | None = False,
        search: str | None = None,
        page: float | None = 1.0,
        page_size: float | None = 50.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[DomainSchema], ListDomainsErrorBody]:
        """Retrieve a list of domains associated with the authenticated workspace.

        Args:
            archived: Whether to include archived domains in the response. Defaults to ``false`` if not provided.
            search: The search term to filter the domains by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/domains"),
            query_params=[
                param[bool | None]("archived", archived),
                param[str | None]("search", search),
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[list[DomainSchema]],
            error_mapper=list_domains_error_mapper,
            request_options=request_options,
        )

    async def update_domain(
        self,
        slug: str,
        *,
        body: DomainsRequest1 | DomainsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DomainSchema, UpdateDomainErrorBody]:
        """Update a domain for the authenticated workspace.

        Args:
            slug: The domain name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/domains/{slug}"),
            path_params=[param[str]("slug", slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DomainsRequest1 | DomainsRequest1Dict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[DomainSchema],
            error_mapper=update_domain_error_mapper,
            request_options=request_options,
        )
