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
from ..errors.create_label_error import CreateLabelErrorBody, create_label_error_mapper
from ..errors.delete_label_error import DeleteLabelErrorBody, delete_label_error_mapper
from ..errors.get_label_error import GetLabelErrorBody, get_label_error_mapper
from ..errors.list_label_epics_error import ListLabelEpicsErrorBody, list_label_epics_error_mapper
from ..errors.list_label_stories_error import ListLabelStoriesErrorBody, list_label_stories_error_mapper
from ..errors.list_labels_error import ListLabelsErrorBody, list_labels_error_mapper
from ..errors.update_label_error import UpdateLabelErrorBody, update_label_error_mapper
from ..models.create_label_params import CreateLabelParams, CreateLabelParamsDict
from ..models.epic_slim import EpicSlim
from ..models.label import Label
from ..models.story_slim import StorySlim
from ..models.update_label import UpdateLabel, UpdateLabelDict
from ..server.server import Server


class Labels:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LabelsWithRawResponse(client, server, auth)

    def create_label(
        self, body: CreateLabelParams | CreateLabelParamsDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Label:
        """Create Label allows you to create a new Label in Shortcut.

        Args:
            body: Request parameters for creating a Label on a Shortcut Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_label(body, request_options=request_options))

    def delete_label(self, label_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Delete Label can be used to delete any Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_label(label_public_id, request_options=request_options))

    def get_label(self, label_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> Label:
        """Get Label returns information about the selected Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_label(label_public_id, request_options=request_options))

    def list_label_epics(
        self, label_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[EpicSlim]:
        """List all of the Epics with the Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_label_epics(label_public_id, request_options=request_options))

    def list_label_stories(
        self,
        label_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[StorySlim]:
        """List all of the Stories with the Label.

        Args:
            label_public_id: The unique ID of the Label.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_label_stories(
                label_public_id, includes_description=includes_description, request_options=request_options
            ),
        )

    def list_labels(
        self, *, slim: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[Label]:
        """List Labels returns a list of all Labels and their attributes.

        Args:
            slim: A true/false boolean indicating if the slim versions of the Label should be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_labels(slim=slim, request_options=request_options))

    def update_label(
        self,
        label_public_id: int,
        body: UpdateLabel | UpdateLabelDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Label:
        """Update Label allows you to replace a Label name with another name. If you try to name a Label something that
        already exists, you will receive a 422 response.

        Args:
            label_public_id: The unique ID of the Label you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_label(label_public_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> LabelsWithRawResponse:
        return self._with_raw_response


class AsyncLabels:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLabelsWithRawResponse(client, server, auth)

    async def create_label(
        self,
        body: CreateLabelParams | CreateLabelParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Label:
        """Create Label allows you to create a new Label in Shortcut.

        Args:
            body: Request parameters for creating a Label on a Shortcut Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_label(body, request_options=request_options))

    async def delete_label(
        self, label_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete Label can be used to delete any Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_label(label_public_id, request_options=request_options))

    async def get_label(
        self, label_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Label:
        """Get Label returns information about the selected Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_label(label_public_id, request_options=request_options))

    async def list_label_epics(
        self, label_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[EpicSlim]:
        """List all of the Epics with the Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_label_epics(label_public_id, request_options=request_options))

    async def list_label_stories(
        self,
        label_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[StorySlim]:
        """List all of the Stories with the Label.

        Args:
            label_public_id: The unique ID of the Label.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_label_stories(
                label_public_id, includes_description=includes_description, request_options=request_options
            ),
        )

    async def list_labels(
        self, *, slim: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Label]:
        """List Labels returns a list of all Labels and their attributes.

        Args:
            slim: A true/false boolean indicating if the slim versions of the Label should be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_labels(slim=slim, request_options=request_options))

    async def update_label(
        self,
        label_public_id: int,
        body: UpdateLabel | UpdateLabelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Label:
        """Update Label allows you to replace a Label name with another name. If you try to name a Label something that
        already exists, you will receive a 422 response.

        Args:
            label_public_id: The unique ID of the Label you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_label(label_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncLabelsWithRawResponse:
        return self._with_raw_response


class LabelsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_label(
        self, body: CreateLabelParams | CreateLabelParamsDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Label, CreateLabelErrorBody]:
        """Create Label allows you to create a new Label in Shortcut.

        Args:
            body: Request parameters for creating a Label on a Shortcut Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/labels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateLabelParams | CreateLabelParamsDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Label],
            error_mapper=create_label_error_mapper,
            request_options=request_options,
        )

    def delete_label(
        self, label_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteLabelErrorBody]:
        """Delete Label can be used to delete any Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/labels/{label-public-id}"),
            path_params=[param[int]("label-public-id", label_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_label_error_mapper,
            request_options=request_options,
        )

    def get_label(
        self, label_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Label, GetLabelErrorBody]:
        """Get Label returns information about the selected Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/labels/{label-public-id}"),
            path_params=[param[int]("label-public-id", label_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Label],
            error_mapper=get_label_error_mapper,
            request_options=request_options,
        )

    def list_label_epics(
        self, label_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[EpicSlim], ListLabelEpicsErrorBody]:
        """List all of the Epics with the Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/labels/{label-public-id}/epics"),
            path_params=[param[int]("label-public-id", label_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[EpicSlim]],
            error_mapper=list_label_epics_error_mapper,
            request_options=request_options,
        )

    def list_label_stories(
        self,
        label_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StorySlim], ListLabelStoriesErrorBody]:
        """List all of the Stories with the Label.

        Args:
            label_public_id: The unique ID of the Label.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/labels/{label-public-id}/stories"),
            path_params=[param[int]("label-public-id", label_public_id)],
            query_params=[param[bool | None]("includes_description", includes_description)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[StorySlim]],
            error_mapper=list_label_stories_error_mapper,
            request_options=request_options,
        )

    def list_labels(
        self, *, slim: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Label], ListLabelsErrorBody]:
        """List Labels returns a list of all Labels and their attributes.

        Args:
            slim: A true/false boolean indicating if the slim versions of the Label should be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/labels"),
            query_params=[param[bool | None]("slim", slim)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Label]],
            error_mapper=list_labels_error_mapper,
            request_options=request_options,
        )

    def update_label(
        self,
        label_public_id: int,
        body: UpdateLabel | UpdateLabelDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Label, UpdateLabelErrorBody]:
        """Update Label allows you to replace a Label name with another name. If you try to name a Label something that
        already exists, you will receive a 422 response.

        Args:
            label_public_id: The unique ID of the Label you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/labels/{label-public-id}"),
            path_params=[param[int]("label-public-id", label_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateLabel | UpdateLabelDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Label],
            error_mapper=update_label_error_mapper,
            request_options=request_options,
        )


class AsyncLabelsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_label(
        self,
        body: CreateLabelParams | CreateLabelParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Label, CreateLabelErrorBody]:
        """Create Label allows you to create a new Label in Shortcut.

        Args:
            body: Request parameters for creating a Label on a Shortcut Story.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/labels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateLabelParams | CreateLabelParamsDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Label],
            error_mapper=create_label_error_mapper,
            request_options=request_options,
        )

    async def delete_label(
        self, label_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteLabelErrorBody]:
        """Delete Label can be used to delete any Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/labels/{label-public-id}"),
            path_params=[param[int]("label-public-id", label_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_label_error_mapper,
            request_options=request_options,
        )

    async def get_label(
        self, label_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Label, GetLabelErrorBody]:
        """Get Label returns information about the selected Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/labels/{label-public-id}"),
            path_params=[param[int]("label-public-id", label_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Label],
            error_mapper=get_label_error_mapper,
            request_options=request_options,
        )

    async def list_label_epics(
        self, label_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[EpicSlim], ListLabelEpicsErrorBody]:
        """List all of the Epics with the Label.

        Args:
            label_public_id: The unique ID of the Label.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/labels/{label-public-id}/epics"),
            path_params=[param[int]("label-public-id", label_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[EpicSlim]],
            error_mapper=list_label_epics_error_mapper,
            request_options=request_options,
        )

    async def list_label_stories(
        self,
        label_public_id: int,
        *,
        includes_description: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[StorySlim], ListLabelStoriesErrorBody]:
        """List all of the Stories with the Label.

        Args:
            label_public_id: The unique ID of the Label.
            includes_description: A true/false boolean indicating whether to return Stories with their descriptions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/labels/{label-public-id}/stories"),
            path_params=[param[int]("label-public-id", label_public_id)],
            query_params=[param[bool | None]("includes_description", includes_description)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[StorySlim]],
            error_mapper=list_label_stories_error_mapper,
            request_options=request_options,
        )

    async def list_labels(
        self, *, slim: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Label], ListLabelsErrorBody]:
        """List Labels returns a list of all Labels and their attributes.

        Args:
            slim: A true/false boolean indicating if the slim versions of the Label should be returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/labels"),
            query_params=[param[bool | None]("slim", slim)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Label]],
            error_mapper=list_labels_error_mapper,
            request_options=request_options,
        )

    async def update_label(
        self,
        label_public_id: int,
        body: UpdateLabel | UpdateLabelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Label, UpdateLabelErrorBody]:
        """Update Label allows you to replace a Label name with another name. If you try to name a Label something that
        already exists, you will receive a 422 response.

        Args:
            label_public_id: The unique ID of the Label you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/labels/{label-public-id}"),
            path_params=[param[int]("label-public-id", label_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateLabel | UpdateLabelDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Label],
            error_mapper=update_label_error_mapper,
            request_options=request_options,
        )
