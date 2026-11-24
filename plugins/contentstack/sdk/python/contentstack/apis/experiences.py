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
from ..errors.create_experience_error import CreateExperienceErrorBody, create_experience_error_mapper
from ..errors.delete_experience_error import DeleteExperienceErrorBody, delete_experience_error_mapper
from ..errors.get_all_experiences_error import GetAllExperiencesErrorBody, get_all_experiences_error_mapper
from ..errors.get_experience_error import GetExperienceErrorBody, get_experience_error_mapper
from ..errors.get_experience_priority_error import GetExperiencePriorityErrorBody, get_experience_priority_error_mapper
from ..errors.update_experience_error import UpdateExperienceErrorBody, update_experience_error_mapper
from ..errors.update_experience_priority_error import (
    UpdateExperiencePriorityErrorBody,
    update_experience_priority_error_mapper,
)
from ..models.create_experience_request import CreateExperienceRequest, CreateExperienceRequestDict
from ..models.experience import Experience
from ..models.experience_list import ExperienceList
from ..models.experience_priority import ExperiencePriority, ExperiencePriorityDict
from ..server.server import Server


class Experiences:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExperiencesWithRawResponse(client, server, auth)

    def create_experience(
        self,
        x_project_uid: str,
        body: CreateExperienceRequest | CreateExperienceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Experience:
        """Creates a new experience in the Personalize project. Experiences can be of type SEGMENTED (rule-based
        audience targeting) or AB_TEST (split testing with traffic distribution).

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created experience.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.create_experience(x_project_uid, body, request_options=request_options))

    def delete_experience(
        self, id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes an experience from the Personalize project. Only experiences in draft or inactive status
        can be deleted.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Experience deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.delete_experience(id_, x_project_uid, request_options=request_options))

    def get_all_experiences(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ExperienceList:
        """Retrieves all experience configurations in the Personalize project, including their variant definitions and
        audience assignments.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of all experiences in the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.get_all_experiences(x_project_uid, request_options=request_options))

    def get_experience(
        self, id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Experience:
        """Retrieves details for a specific experience including its variants, audience assignments, status, and
        configuration.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested experience.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.get_experience(id_, x_project_uid, request_options=request_options))

    def get_experience_priority(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ExperiencePriority:
        """Retrieves the priority ordering of all active experiences, which determines which experience takes precedence
        when a user qualifies for multiple experiences.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current experience priority ordering.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(self._with_raw_response.get_experience_priority(x_project_uid, request_options=request_options))

    def update_experience(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateExperienceRequest | CreateExperienceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Experience:
        """Updates the configuration of an existing experience including its name, variants, and audience targeting
        rules.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated experience.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            self._with_raw_response.update_experience(id_, x_project_uid, body, request_options=request_options)
        )

    def update_experience_priority(
        self,
        x_project_uid: str,
        body: ExperiencePriority | ExperiencePriorityDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExperiencePriority:
        """Updates the priority ordering of experiences to control which experience is applied first when a user
        qualifies for multiple active experiences.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated experience priority ordering.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            self._with_raw_response.update_experience_priority(x_project_uid, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ExperiencesWithRawResponse:
        return self._with_raw_response


class AsyncExperiences:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExperiencesWithRawResponse(client, server, auth)

    async def create_experience(
        self,
        x_project_uid: str,
        body: CreateExperienceRequest | CreateExperienceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Experience:
        """Creates a new experience in the Personalize project. Experiences can be of type SEGMENTED (rule-based
        audience targeting) or AB_TEST (split testing with traffic distribution).

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created experience.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.create_experience(x_project_uid, body, request_options=request_options)
        )

    async def delete_experience(
        self, id_: str, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes an experience from the Personalize project. Only experiences in draft or inactive status
        can be deleted.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Experience deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_experience(id_, x_project_uid, request_options=request_options)
        )

    async def get_all_experiences(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExperienceList:
        """Retrieves all experience configurations in the Personalize project, including their variant definitions and
        audience assignments.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of all experiences in the project.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(await self._with_raw_response.get_all_experiences(x_project_uid, request_options=request_options))

    async def get_experience(
        self, id_: str, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Experience:
        """Retrieves details for a specific experience including its variants, audience assignments, status, and
        configuration.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested experience.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(await self._with_raw_response.get_experience(id_, x_project_uid, request_options=request_options))

    async def get_experience_priority(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExperiencePriority:
        """Retrieves the priority ordering of all active experiences, which determines which experience takes precedence
        when a user qualifies for multiple experiences.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current experience priority ordering.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_experience_priority(x_project_uid, request_options=request_options)
        )

    async def update_experience(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateExperienceRequest | CreateExperienceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Experience:
        """Updates the configuration of an existing experience including its name, variants, and audience targeting
        rules.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated experience.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.update_experience(id_, x_project_uid, body, request_options=request_options)
        )

    async def update_experience_priority(
        self,
        x_project_uid: str,
        body: ExperiencePriority | ExperiencePriorityDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExperiencePriority:
        """Updates the priority ordering of experiences to control which experience is applied first when a user
        qualifies for multiple active experiences.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated experience priority ordering.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is
                ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.update_experience_priority(
                x_project_uid, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncExperiencesWithRawResponse:
        return self._with_raw_response


class ExperiencesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_experience(
        self,
        x_project_uid: str,
        body: CreateExperienceRequest | CreateExperienceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Experience, CreateExperienceErrorBody]:
        """Creates a new experience in the Personalize project. Experiences can be of type SEGMENTED (rule-based
        audience targeting) or AB_TEST (split testing with traffic distribution).

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/experiences"),
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateExperienceRequest | CreateExperienceRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Experience],
            error_mapper=create_experience_error_mapper,
            request_options=request_options,
        )

    def delete_experience(
        self, id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteExperienceErrorBody]:
        """Permanently deletes an experience from the Personalize project. Only experiences in draft or inactive status
        can be deleted.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/experiences/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=empty_response,
            error_mapper=delete_experience_error_mapper,
            request_options=request_options,
        )

    def get_all_experiences(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExperienceList, GetAllExperiencesErrorBody]:
        """Retrieves all experience configurations in the Personalize project, including their variant definitions and
        audience assignments.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/experiences"),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[ExperienceList],
            error_mapper=get_all_experiences_error_mapper,
            request_options=request_options,
        )

    def get_experience(
        self, id_: str, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Experience, GetExperienceErrorBody]:
        """Retrieves details for a specific experience including its variants, audience assignments, status, and
        configuration.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/experiences/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Experience],
            error_mapper=get_experience_error_mapper,
            request_options=request_options,
        )

    def get_experience_priority(
        self, x_project_uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExperiencePriority, GetExperiencePriorityErrorBody]:
        """Retrieves the priority ordering of all active experiences, which determines which experience takes precedence
        when a user qualifies for multiple experiences.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api(
                "/experiences/priority"
            ),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[ExperiencePriority],
            error_mapper=get_experience_priority_error_mapper,
            request_options=request_options,
        )

    def update_experience(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateExperienceRequest | CreateExperienceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Experience, UpdateExperienceErrorBody]:
        """Updates the configuration of an existing experience including its name, variants, and audience targeting
        rules.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/experiences/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateExperienceRequest | CreateExperienceRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[Experience],
            error_mapper=update_experience_error_mapper,
            request_options=request_options,
        )

    def update_experience_priority(
        self,
        x_project_uid: str,
        body: ExperiencePriority | ExperiencePriorityDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExperiencePriority, UpdateExperiencePriorityErrorBody]:
        """Updates the priority ordering of experiences to control which experience is applied first when a user
        qualifies for multiple active experiences.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_personalize_management_attributes_api(
                "/experiences/priority"
            ),
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExperiencePriority | ExperiencePriorityDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[ExperiencePriority],
            error_mapper=update_experience_priority_error_mapper,
            request_options=request_options,
        )


class AsyncExperiencesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_experience(
        self,
        x_project_uid: str,
        body: CreateExperienceRequest | CreateExperienceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Experience, CreateExperienceErrorBody]:
        """Creates a new experience in the Personalize project. Experiences can be of type SEGMENTED (rule-based
        audience targeting) or AB_TEST (split testing with traffic distribution).

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/experiences"),
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateExperienceRequest | CreateExperienceRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Experience],
            error_mapper=create_experience_error_mapper,
            request_options=request_options,
        )

    async def delete_experience(
        self, id_: str, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteExperienceErrorBody]:
        """Permanently deletes an experience from the Personalize project. Only experiences in draft or inactive status
        can be deleted.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/experiences/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_empty_response,
            error_mapper=delete_experience_error_mapper,
            request_options=request_options,
        )

    async def get_all_experiences(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExperienceList, GetAllExperiencesErrorBody]:
        """Retrieves all experience configurations in the Personalize project, including their variant definitions and
        audience assignments.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/experiences"),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[ExperienceList],
            error_mapper=get_all_experiences_error_mapper,
            request_options=request_options,
        )

    async def get_experience(
        self, id_: str, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Experience, GetExperienceErrorBody]:
        """Retrieves details for a specific experience including its variants, audience assignments, status, and
        configuration.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/experiences/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Experience],
            error_mapper=get_experience_error_mapper,
            request_options=request_options,
        )

    async def get_experience_priority(
        self, x_project_uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExperiencePriority, GetExperiencePriorityErrorBody]:
        """Retrieves the priority ordering of all active experiences, which determines which experience takes precedence
        when a user qualifies for multiple experiences.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_personalize_management_attributes_api(
                "/experiences/priority"
            ),
            headers=[param[str]("x-project-uid", x_project_uid)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[ExperiencePriority],
            error_mapper=get_experience_priority_error_mapper,
            request_options=request_options,
        )

    async def update_experience(
        self,
        id_: str,
        x_project_uid: str,
        body: CreateExperienceRequest | CreateExperienceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Experience, UpdateExperienceErrorBody]:
        """Updates the configuration of an existing experience including its name, variants, and audience targeting
        rules.

        Args:
            id_: The unique identifier of the experience.
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_personalize_management_attributes_api("/experiences/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateExperienceRequest | CreateExperienceRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[Experience],
            error_mapper=update_experience_error_mapper,
            request_options=request_options,
        )

    async def update_experience_priority(
        self,
        x_project_uid: str,
        body: ExperiencePriority | ExperiencePriorityDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExperiencePriority, UpdateExperiencePriorityErrorBody]:
        """Updates the priority ordering of experiences to control which experience is applied first when a user
        qualifies for multiple active experiences.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_personalize_management_attributes_api(
                "/experiences/priority"
            ),
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExperiencePriority | ExperiencePriorityDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[ExperiencePriority],
            error_mapper=update_experience_priority_error_mapper,
            request_options=request_options,
        )
