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
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_iteration_error import CreateIterationErrorBody, create_iteration_error_mapper
from ..errors.delete_iteration_error import DeleteIterationErrorBody, delete_iteration_error_mapper
from ..errors.disable_iterations_error import DisableIterationsErrorBody, disable_iterations_error_mapper
from ..errors.enable_iterations_error import EnableIterationsErrorBody, enable_iterations_error_mapper
from ..errors.get_iteration_error import GetIterationErrorBody, get_iteration_error_mapper
from ..errors.list_iteration_stories_error import ListIterationStoriesErrorBody, list_iteration_stories_error_mapper
from ..errors.list_iterations_error import ListIterationsErrorBody, list_iterations_error_mapper
from ..errors.update_iteration_error import UpdateIterationErrorBody, update_iteration_error_mapper
from ..models.create_iteration import CreateIteration, CreateIterationDict
from ..models.iteration import Iteration
from ..models.iteration_slim import IterationSlim
from ..models.story_slim import StorySlim
from ..models.update_iteration import UpdateIteration, UpdateIterationDict
from ..server.server import Server


class Iterations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IterationsWithRawResponse(client, server, auth)

    def create_iteration(
        self, body: CreateIteration | CreateIterationDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Iteration:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_iteration(body, request_options=request_options))

    def delete_iteration(
        self, iteration_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_iteration(iteration_public_id, request_options=request_options))

    def disable_iterations(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Disables Iterations for the current workspace

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.disable_iterations(request_options=request_options))

    def enable_iterations(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Enables Iterations for the current workspace

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.enable_iterations(request_options=request_options))

    def get_iteration(
        self, iteration_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> Iteration:
        """Send a ``GET`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_iteration(iteration_public_id, request_options=request_options))

    def list_iteration_stories(
        self,
        iteration_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[StorySlim]:
        """Get a list of all Stories in an Iteration.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_iteration_stories(
                iteration_public_id, includes_description=includes_description, request_options=request_options
            ),
        )

    def list_iterations(self, *, request_options: RequestOptionsOrDict | None = None) -> list[IterationSlim]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_iterations(request_options=request_options))

    def update_iteration(
        self,
        iteration_public_id: int,
        body: UpdateIteration | UpdateIterationDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Iteration:
        """Send a ``PUT`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_iteration(iteration_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> IterationsWithRawResponse:
        return self._with_raw_response


class AsyncIterations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIterationsWithRawResponse(client, server, auth)

    async def create_iteration(
        self, body: CreateIteration | CreateIterationDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Iteration:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_iteration(body, request_options=request_options))

    async def delete_iteration(
        self, iteration_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_iteration(iteration_public_id, request_options=request_options)
        )

    async def disable_iterations(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Disables Iterations for the current workspace

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.disable_iterations(request_options=request_options))

    async def enable_iterations(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Enables Iterations for the current workspace

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.enable_iterations(request_options=request_options))

    async def get_iteration(
        self, iteration_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Iteration:
        """Send a ``GET`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_iteration(iteration_public_id, request_options=request_options))

    async def list_iteration_stories(
        self,
        iteration_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[StorySlim]:
        """Get a list of all Stories in an Iteration.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_iteration_stories(
                iteration_public_id, includes_description=includes_description, request_options=request_options
            ),
        )

    async def list_iterations(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[IterationSlim]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_iterations(request_options=request_options))

    async def update_iteration(
        self,
        iteration_public_id: int,
        body: UpdateIteration | UpdateIterationDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Iteration:
        """Send a ``PUT`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_iteration(iteration_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncIterationsWithRawResponse:
        return self._with_raw_response


class IterationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_iteration(
        self, body: CreateIteration | CreateIterationDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Iteration, CreateIterationErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/iterations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateIteration | CreateIterationDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Iteration],
            error_mapper=create_iteration_error_mapper,
            request_options=request_options,
        )

    def delete_iteration(
        self, iteration_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteIterationErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/iterations/{iteration-public-id}"),
            path_params=[param[int]("iteration-public-id", iteration_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_iteration_error_mapper,
            request_options=request_options,
        )

    def disable_iterations(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisableIterationsErrorBody]:
        """Disables Iterations for the current workspace

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/iterations/disable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=disable_iterations_error_mapper,
            request_options=request_options,
        )

    def enable_iterations(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, EnableIterationsErrorBody]:
        """Enables Iterations for the current workspace

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/iterations/enable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=enable_iterations_error_mapper,
            request_options=request_options,
        )

    def get_iteration(
        self, iteration_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Iteration, GetIterationErrorBody]:
        """Send a ``GET`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/iterations/{iteration-public-id}"),
            path_params=[param[int]("iteration-public-id", iteration_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Iteration],
            error_mapper=get_iteration_error_mapper,
            request_options=request_options,
        )

    def list_iteration_stories(
        self,
        iteration_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StorySlim], ListIterationStoriesErrorBody]:
        """Get a list of all Stories in an Iteration.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/iterations/{iteration-public-id}/stories"),
            path_params=[param[int]("iteration-public-id", iteration_public_id)],
            query_params=[param[bool | None]("includes_description", includes_description)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StorySlim]],
            error_mapper=list_iteration_stories_error_mapper,
            request_options=request_options,
        )

    def list_iterations(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[IterationSlim], ListIterationsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/iterations"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[IterationSlim]],
            error_mapper=list_iterations_error_mapper,
            request_options=request_options,
        )

    def update_iteration(
        self,
        iteration_public_id: int,
        body: UpdateIteration | UpdateIterationDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Iteration, UpdateIterationErrorBody]:
        """Send a ``PUT`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/iterations/{iteration-public-id}"),
            path_params=[param[int]("iteration-public-id", iteration_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateIteration | UpdateIterationDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Iteration],
            error_mapper=update_iteration_error_mapper,
            request_options=request_options,
        )


class AsyncIterationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_iteration(
        self, body: CreateIteration | CreateIterationDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Iteration, CreateIterationErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/iterations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateIteration | CreateIterationDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Iteration],
            error_mapper=create_iteration_error_mapper,
            request_options=request_options,
        )

    async def delete_iteration(
        self, iteration_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteIterationErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/iterations/{iteration-public-id}"),
            path_params=[param[int]("iteration-public-id", iteration_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_iteration_error_mapper,
            request_options=request_options,
        )

    async def disable_iterations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DisableIterationsErrorBody]:
        """Disables Iterations for the current workspace

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/iterations/disable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=disable_iterations_error_mapper,
            request_options=request_options,
        )

    async def enable_iterations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, EnableIterationsErrorBody]:
        """Enables Iterations for the current workspace

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/iterations/enable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=enable_iterations_error_mapper,
            request_options=request_options,
        )

    async def get_iteration(
        self, iteration_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Iteration, GetIterationErrorBody]:
        """Send a ``GET`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/iterations/{iteration-public-id}"),
            path_params=[param[int]("iteration-public-id", iteration_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Iteration],
            error_mapper=get_iteration_error_mapper,
            request_options=request_options,
        )

    async def list_iteration_stories(
        self,
        iteration_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StorySlim], ListIterationStoriesErrorBody]:
        """Get a list of all Stories in an Iteration.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/iterations/{iteration-public-id}/stories"),
            path_params=[param[int]("iteration-public-id", iteration_public_id)],
            query_params=[param[bool | None]("includes_description", includes_description)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StorySlim]],
            error_mapper=list_iteration_stories_error_mapper,
            request_options=request_options,
        )

    async def list_iterations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[IterationSlim], ListIterationsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/iterations"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[IterationSlim]],
            error_mapper=list_iterations_error_mapper,
            request_options=request_options,
        )

    async def update_iteration(
        self,
        iteration_public_id: int,
        body: UpdateIteration | UpdateIterationDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Iteration, UpdateIterationErrorBody]:
        """Send a ``PUT`` request.

        Args:
            iteration_public_id: The unique ID of the Iteration.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/iterations/{iteration-public-id}"),
            path_params=[param[int]("iteration-public-id", iteration_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateIteration | UpdateIterationDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Iteration],
            error_mapper=update_iteration_error_mapper,
            request_options=request_options,
        )
