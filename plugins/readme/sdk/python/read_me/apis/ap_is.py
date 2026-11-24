from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.get_branches_by_branch_apis_error import (
    GetBranchesByBranchApisErrorBody,
    get_branches_by_branch_apis_error_mapper,
)
from ..server.server import Server


class ApIs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ApIsWithRawResponse(client, server, auth)

    def delete_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_branches_by_branch_apis_by_id(branch, id_, request_options=request_options)
        )

    def get_branches_by_branch_apis(
        self,
        branch: str,
        *,
        per_page: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieve metadata for API definitions on a branch.

        Args:
            branch: Value sent with the request.
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful retrieval

        Raises:
            ApiError: Unauthorized Branch not found ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_branches_by_branch_apis(
                branch, per_page=per_page, page=page, request_options=request_options
            ),
        )

    def get_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API definition

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_branches_by_branch_apis_by_id(branch, id_, request_options=request_options)
        )

    def post_branches_by_branch_apis(self, branch: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            branch: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_branches_by_branch_apis(branch, request_options=request_options))

    def put_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``PUT`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.put_branches_by_branch_apis_by_id(branch, id_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ApIsWithRawResponse:
        return self._with_raw_response


class AsyncApIs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncApIsWithRawResponse(client, server, auth)

    async def delete_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_branches_by_branch_apis_by_id(
                branch, id_, request_options=request_options
            ),
        )

    async def get_branches_by_branch_apis(
        self,
        branch: str,
        *,
        per_page: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieve metadata for API definitions on a branch.

        Args:
            branch: Value sent with the request.
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful retrieval

        Raises:
            ApiError: Unauthorized Branch not found ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_branches_by_branch_apis(
                branch, per_page=per_page, page=page, request_options=request_options
            ),
        )

    async def get_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API definition

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_branches_by_branch_apis_by_id(
                branch, id_, request_options=request_options
            ),
        )

    async def post_branches_by_branch_apis(
        self, branch: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``POST`` request.

        Args:
            branch: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_branches_by_branch_apis(branch, request_options=request_options)
        )

    async def put_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``PUT`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.put_branches_by_branch_apis_by_id(
                branch, id_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncApIsWithRawResponse:
        return self._with_raw_response


class ApIsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``DELETE`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_read_me_api_keys_api("/branches/{branch}/apis/{id}"),
            path_params=[param[str]("branch", branch), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_branches_by_branch_apis(
        self,
        branch: str,
        *,
        per_page: int | None = 10,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetBranchesByBranchApisErrorBody]:
        """Retrieve metadata for API definitions on a branch.

        Args:
            branch: Value sent with the request.
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_read_me_api_keys_api("/branches/{branch}/apis"),
            path_params=[param[str]("branch", branch)],
            query_params=[param[int | None]("perPage", per_page), param[int | None]("page", page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=get_branches_by_branch_apis_error_mapper,
            request_options=request_options,
        )

    def get_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_read_me_api_keys_api("/branches/{branch}/apis/{id}"),
            path_params=[param[str]("branch", branch), param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_branches_by_branch_apis(
        self, branch: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            branch: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_read_me_api_keys_api("/branches/{branch}/apis"),
            path_params=[param[str]("branch", branch)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def put_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``PUT`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_read_me_api_keys_api("/branches/{branch}/apis/{id}"),
            path_params=[param[str]("branch", branch), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncApIsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``DELETE`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_read_me_api_keys_api("/branches/{branch}/apis/{id}"),
            path_params=[param[str]("branch", branch), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_branches_by_branch_apis(
        self,
        branch: str,
        *,
        per_page: int | None = 10,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetBranchesByBranchApisErrorBody]:
        """Retrieve metadata for API definitions on a branch.

        Args:
            branch: Value sent with the request.
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_read_me_api_keys_api("/branches/{branch}/apis"),
            path_params=[param[str]("branch", branch)],
            query_params=[param[int | None]("perPage", per_page), param[int | None]("page", page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=get_branches_by_branch_apis_error_mapper,
            request_options=request_options,
        )

    async def get_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_read_me_api_keys_api("/branches/{branch}/apis/{id}"),
            path_params=[param[str]("branch", branch), param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_branches_by_branch_apis(
        self, branch: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            branch: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_read_me_api_keys_api("/branches/{branch}/apis"),
            path_params=[param[str]("branch", branch)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def put_branches_by_branch_apis_by_id(
        self, branch: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``PUT`` request.

        Args:
            branch: Value sent with the request.
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_read_me_api_keys_api("/branches/{branch}/apis/{id}"),
            path_params=[param[str]("branch", branch), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
