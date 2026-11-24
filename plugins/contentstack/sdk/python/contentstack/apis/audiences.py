from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.create_audience_error import CreateAudienceErrorBody, create_audience_error_mapper
from ..errors.delete_audience_error import DeleteAudienceErrorBody, delete_audience_error_mapper
from ..errors.get_all_audiences_error import GetAllAudiencesErrorBody, get_all_audiences_error_mapper
from ..errors.update_audience_error import UpdateAudienceErrorBody, update_audience_error_mapper
from ..models.audience import Audience
from ..models.audience_list import AudienceList
from ..models.create_audience_request import CreateAudienceRequest, CreateAudienceRequestDict
from ..server.server import Server


class Audiences:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AudiencesWithRawResponse(client, server, auth)

    def create_audience(
        self,
        x_project_uid: str,
        body: CreateAudienceRequest | CreateAudienceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Audience:
        """Creates a new audience segment in the Personalize project based on attribute conditions and behavioral rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created audience.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.create_audience(x_project_uid, body, request_options=request_options))

    def delete_audience(
        self, id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes an audience from the Personalize project. Audiences referenced in active experiences
        cannot be deleted.

        Args:
            id_: The unique identifier of the audience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Audience deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.delete_audience(id_, x_project_uid, request_options=request_options))

    def get_all_audiences(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AudienceList:
        """Retrieves all audience segment definitions in the Personalize project. Audiences define the user groups that
        experiences are targeted to.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of all audiences in the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.get_all_audiences(x_project_uid, request_options=request_options))

    def update_audience(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateAudienceRequest | CreateAudienceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Audience:
        """Updates the rules and configuration of an existing audience segment.

        Args:
            id_: The unique identifier of the audience.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated audience.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. The requested resource was not found. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            self._with_raw_response.update_audience(id_, x_project_uid, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AudiencesWithRawResponse:
        return self._with_raw_response


class AsyncAudiences:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAudiencesWithRawResponse(client, server, auth)

    async def create_audience(
        self,
        x_project_uid: str,
        body: CreateAudienceRequest | CreateAudienceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Audience:
        """Creates a new audience segment in the Personalize project based on attribute conditions and behavioral rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created audience.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.create_audience(x_project_uid, body, request_options=request_options)
        )

    async def delete_audience(
        self, id_: str, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes an audience from the Personalize project. Audiences referenced in active experiences
        cannot be deleted.

        Args:
            id_: The unique identifier of the audience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Audience deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_audience(id_, x_project_uid, request_options=request_options)
        )

    async def get_all_audiences(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AudienceList:
        """Retrieves all audience segment definitions in the Personalize project. Audiences define the user groups that
        experiences are targeted to.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of all audiences in the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(await self._with_raw_response.get_all_audiences(x_project_uid, request_options=request_options))

    async def update_audience(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateAudienceRequest | CreateAudienceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Audience:
        """Updates the rules and configuration of an existing audience segment.

        Args:
            id_: The unique identifier of the audience.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated audience.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. The requested resource was not found. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.update_audience(id_, x_project_uid, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAudiencesWithRawResponse:
        return self._with_raw_response


class AudiencesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_audience(
        self,
        x_project_uid: str,
        body: CreateAudienceRequest | CreateAudienceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Audience, CreateAudienceErrorBody]:
        """Creates a new audience segment in the Personalize project based on attribute conditions and behavioral rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/audiences"),
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAudienceRequest | CreateAudienceRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Audience],
            error_mapper=create_audience_error_mapper,
            request_options=request_options,
        )

    def delete_audience(
        self, id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAudienceErrorBody]:
        """Permanently deletes an audience from the Personalize project. Audiences referenced in active experiences
        cannot be deleted.

        Args:
            id_: The unique identifier of the audience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/audiences/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=empty_response,
            error_mapper=delete_audience_error_mapper,
            request_options=request_options,
        )

    def get_all_audiences(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AudienceList, GetAllAudiencesErrorBody]:
        """Retrieves all audience segment definitions in the Personalize project. Audiences define the user groups that
        experiences are targeted to.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/audiences"),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[AudienceList],
            error_mapper=get_all_audiences_error_mapper,
            request_options=request_options,
        )

    def update_audience(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateAudienceRequest | CreateAudienceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Audience, UpdateAudienceErrorBody]:
        """Updates the rules and configuration of an existing audience segment.

        Args:
            id_: The unique identifier of the audience.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/audiences/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAudienceRequest | CreateAudienceRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Audience],
            error_mapper=update_audience_error_mapper,
            request_options=request_options,
        )


class AsyncAudiencesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_audience(
        self,
        x_project_uid: str,
        body: CreateAudienceRequest | CreateAudienceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Audience, CreateAudienceErrorBody]:
        """Creates a new audience segment in the Personalize project based on attribute conditions and behavioral rules.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/audiences"),
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAudienceRequest | CreateAudienceRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Audience],
            error_mapper=create_audience_error_mapper,
            request_options=request_options,
        )

    async def delete_audience(
        self, id_: str, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAudienceErrorBody]:
        """Permanently deletes an audience from the Personalize project. Audiences referenced in active experiences
        cannot be deleted.

        Args:
            id_: The unique identifier of the audience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/audiences/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_empty_response,
            error_mapper=delete_audience_error_mapper,
            request_options=request_options,
        )

    async def get_all_audiences(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AudienceList, GetAllAudiencesErrorBody]:
        """Retrieves all audience segment definitions in the Personalize project. Audiences define the user groups that
        experiences are targeted to.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/audiences"),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[AudienceList],
            error_mapper=get_all_audiences_error_mapper,
            request_options=request_options,
        )

    async def update_audience(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateAudienceRequest | CreateAudienceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Audience, UpdateAudienceErrorBody]:
        """Updates the rules and configuration of an existing audience segment.

        Args:
            id_: The unique identifier of the audience.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/audiences/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAudienceRequest | CreateAudienceRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Audience],
            error_mapper=update_audience_error_mapper,
            request_options=request_options,
        )
