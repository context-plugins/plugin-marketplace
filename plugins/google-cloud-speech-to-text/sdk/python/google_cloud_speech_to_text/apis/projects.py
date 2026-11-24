from __future__ import annotations

from typing import Any
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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.speech_projects_locations_custom_classes_create_error import (
    SpeechProjectsLocationsCustomClassesCreateErrorBody,
    speech_projects_locations_custom_classes_create_error_mapper,
)
from ..errors.speech_projects_locations_custom_classes_delete_error import (
    SpeechProjectsLocationsCustomClassesDeleteErrorBody,
    speech_projects_locations_custom_classes_delete_error_mapper,
)
from ..errors.speech_projects_locations_custom_classes_get_error import (
    SpeechProjectsLocationsCustomClassesGetErrorBody,
    speech_projects_locations_custom_classes_get_error_mapper,
)
from ..errors.speech_projects_locations_custom_classes_list_error import (
    SpeechProjectsLocationsCustomClassesListErrorBody,
    speech_projects_locations_custom_classes_list_error_mapper,
)
from ..errors.speech_projects_locations_custom_classes_patch_error import (
    SpeechProjectsLocationsCustomClassesPatchErrorBody,
    speech_projects_locations_custom_classes_patch_error_mapper,
)
from ..errors.speech_projects_locations_phrase_sets_create_error import (
    SpeechProjectsLocationsPhraseSetsCreateErrorBody,
    speech_projects_locations_phrase_sets_create_error_mapper,
)
from ..errors.speech_projects_locations_phrase_sets_delete_error import (
    SpeechProjectsLocationsPhraseSetsDeleteErrorBody,
    speech_projects_locations_phrase_sets_delete_error_mapper,
)
from ..errors.speech_projects_locations_phrase_sets_get_error import (
    SpeechProjectsLocationsPhraseSetsGetErrorBody,
    speech_projects_locations_phrase_sets_get_error_mapper,
)
from ..errors.speech_projects_locations_phrase_sets_list_error import (
    SpeechProjectsLocationsPhraseSetsListErrorBody,
    speech_projects_locations_phrase_sets_list_error_mapper,
)
from ..errors.speech_projects_locations_phrase_sets_patch_error import (
    SpeechProjectsLocationsPhraseSetsPatchErrorBody,
    speech_projects_locations_phrase_sets_patch_error_mapper,
)
from ..models.create_custom_class_request import CreateCustomClassRequest, CreateCustomClassRequestDict
from ..models.create_phrase_set_request import CreatePhraseSetRequest, CreatePhraseSetRequestDict
from ..models.custom_class import CustomClass, CustomClassDict
from ..models.list_custom_classes_response import ListCustomClassesResponse
from ..models.list_phrase_set_response import ListPhraseSetResponse
from ..models.phrase_set import PhraseSet, PhraseSetDict
from ..server.server import Server


class Projects:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectsWithRawResponse(client, server, auth)

    def speech_projects_locations_custom_classes_create(
        self,
        projects_id: str,
        locations_id: str,
        body: CreateCustomClassRequest | CreateCustomClassRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomClass:
        """Create a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.speech_projects_locations_custom_classes_create(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    def speech_projects_locations_custom_classes_delete(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.speech_projects_locations_custom_classes_delete(
                projects_id, locations_id, custom_classes_id, request_options=request_options
            ),
        )

    def speech_projects_locations_custom_classes_get(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomClass:
        """Get a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.speech_projects_locations_custom_classes_get(
                projects_id, locations_id, custom_classes_id, request_options=request_options
            ),
        )

    def speech_projects_locations_custom_classes_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListCustomClassesResponse:
        """List custom classes.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: The maximum number of custom classes to return. The service may return fewer than this value. If
                unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: A page token, received from a previous ``ListCustomClass`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListCustomClass`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.speech_projects_locations_custom_classes_list(
                projects_id, locations_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def speech_projects_locations_custom_classes_patch(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        body: CustomClass | CustomClassDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomClass:
        """Update a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            body: The request body.
            update_mask: The list of fields to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.speech_projects_locations_custom_classes_patch(
                projects_id,
                locations_id,
                custom_classes_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    def speech_projects_locations_phrase_sets_create(
        self,
        projects_id: str,
        locations_id: str,
        body: CreatePhraseSetRequest | CreatePhraseSetRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PhraseSet:
        """Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in
        the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.speech_projects_locations_phrase_sets_create(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    def speech_projects_locations_phrase_sets_delete(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.speech_projects_locations_phrase_sets_delete(
                projects_id, locations_id, phrase_sets_id, request_options=request_options
            ),
        )

    def speech_projects_locations_phrase_sets_get(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PhraseSet:
        """Get a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.speech_projects_locations_phrase_sets_get(
                projects_id, locations_id, phrase_sets_id, request_options=request_options
            ),
        )

    def speech_projects_locations_phrase_sets_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListPhraseSetResponse:
        """List phrase sets.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: The maximum number of phrase sets to return. The service may return fewer than this value. If
                unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will
                be coerced to 1000.
            page_token: A page token, received from a previous ``ListPhraseSet`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListPhraseSet`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.speech_projects_locations_phrase_sets_list(
                projects_id, locations_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    def speech_projects_locations_phrase_sets_patch(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        body: PhraseSet | PhraseSetDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PhraseSet:
        """Update a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            body: The request body.
            update_mask: The list of fields to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.speech_projects_locations_phrase_sets_patch(
                projects_id,
                locations_id,
                phrase_sets_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ProjectsWithRawResponse:
        return self._with_raw_response


class AsyncProjects:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectsWithRawResponse(client, server, auth)

    async def speech_projects_locations_custom_classes_create(
        self,
        projects_id: str,
        locations_id: str,
        body: CreateCustomClassRequest | CreateCustomClassRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomClass:
        """Create a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_projects_locations_custom_classes_create(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def speech_projects_locations_custom_classes_delete(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_projects_locations_custom_classes_delete(
                projects_id, locations_id, custom_classes_id, request_options=request_options
            ),
        )

    async def speech_projects_locations_custom_classes_get(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomClass:
        """Get a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_projects_locations_custom_classes_get(
                projects_id, locations_id, custom_classes_id, request_options=request_options
            ),
        )

    async def speech_projects_locations_custom_classes_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListCustomClassesResponse:
        """List custom classes.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: The maximum number of custom classes to return. The service may return fewer than this value. If
                unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: A page token, received from a previous ``ListCustomClass`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListCustomClass`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_projects_locations_custom_classes_list(
                projects_id, locations_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def speech_projects_locations_custom_classes_patch(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        body: CustomClass | CustomClassDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomClass:
        """Update a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            body: The request body.
            update_mask: The list of fields to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_projects_locations_custom_classes_patch(
                projects_id,
                locations_id,
                custom_classes_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    async def speech_projects_locations_phrase_sets_create(
        self,
        projects_id: str,
        locations_id: str,
        body: CreatePhraseSetRequest | CreatePhraseSetRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PhraseSet:
        """Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in
        the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_projects_locations_phrase_sets_create(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    async def speech_projects_locations_phrase_sets_delete(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Delete a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_projects_locations_phrase_sets_delete(
                projects_id, locations_id, phrase_sets_id, request_options=request_options
            ),
        )

    async def speech_projects_locations_phrase_sets_get(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PhraseSet:
        """Get a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_projects_locations_phrase_sets_get(
                projects_id, locations_id, phrase_sets_id, request_options=request_options
            ),
        )

    async def speech_projects_locations_phrase_sets_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListPhraseSetResponse:
        """List phrase sets.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: The maximum number of phrase sets to return. The service may return fewer than this value. If
                unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will
                be coerced to 1000.
            page_token: A page token, received from a previous ``ListPhraseSet`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListPhraseSet`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_projects_locations_phrase_sets_list(
                projects_id, locations_id, page_size=page_size, page_token=page_token, request_options=request_options
            ),
        )

    async def speech_projects_locations_phrase_sets_patch(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        body: PhraseSet | PhraseSetDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PhraseSet:
        """Update a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            body: The request body.
            update_mask: The list of fields to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.speech_projects_locations_phrase_sets_patch(
                projects_id,
                locations_id,
                phrase_sets_id,
                body,
                update_mask=update_mask,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProjectsWithRawResponse:
        return self._with_raw_response


class ProjectsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def speech_projects_locations_custom_classes_create(
        self,
        projects_id: str,
        locations_id: str,
        body: CreateCustomClassRequest | CreateCustomClassRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesCreateErrorBody]:
        """Create a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/customClasses"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomClassRequest | CreateCustomClassRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[CustomClass],
            error_mapper=speech_projects_locations_custom_classes_create_error_mapper,
            request_options=request_options,
        )

    def speech_projects_locations_custom_classes_delete(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SpeechProjectsLocationsCustomClassesDeleteErrorBody]:
        """Delete a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("customClassesId", custom_classes_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=speech_projects_locations_custom_classes_delete_error_mapper,
            request_options=request_options,
        )

    def speech_projects_locations_custom_classes_get(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesGetErrorBody]:
        """Get a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("customClassesId", custom_classes_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[CustomClass],
            error_mapper=speech_projects_locations_custom_classes_get_error_mapper,
            request_options=request_options,
        )

    def speech_projects_locations_custom_classes_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListCustomClassesResponse, SpeechProjectsLocationsCustomClassesListErrorBody]:
        """List custom classes.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: The maximum number of custom classes to return. The service may return fewer than this value. If
                unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: A page token, received from a previous ``ListCustomClass`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListCustomClass`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/customClasses"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListCustomClassesResponse],
            error_mapper=speech_projects_locations_custom_classes_list_error_mapper,
            request_options=request_options,
        )

    def speech_projects_locations_custom_classes_patch(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        body: CustomClass | CustomClassDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesPatchErrorBody]:
        """Update a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            body: The request body.
            update_mask: The list of fields to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("customClassesId", custom_classes_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomClass | CustomClassDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[CustomClass],
            error_mapper=speech_projects_locations_custom_classes_patch_error_mapper,
            request_options=request_options,
        )

    def speech_projects_locations_phrase_sets_create(
        self,
        projects_id: str,
        locations_id: str,
        body: CreatePhraseSetRequest | CreatePhraseSetRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsCreateErrorBody]:
        """Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in
        the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/phraseSets"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreatePhraseSetRequest | CreatePhraseSetRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[PhraseSet],
            error_mapper=speech_projects_locations_phrase_sets_create_error_mapper,
            request_options=request_options,
        )

    def speech_projects_locations_phrase_sets_delete(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SpeechProjectsLocationsPhraseSetsDeleteErrorBody]:
        """Delete a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("phraseSetsId", phrase_sets_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=speech_projects_locations_phrase_sets_delete_error_mapper,
            request_options=request_options,
        )

    def speech_projects_locations_phrase_sets_get(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsGetErrorBody]:
        """Get a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("phraseSetsId", phrase_sets_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[PhraseSet],
            error_mapper=speech_projects_locations_phrase_sets_get_error_mapper,
            request_options=request_options,
        )

    def speech_projects_locations_phrase_sets_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPhraseSetResponse, SpeechProjectsLocationsPhraseSetsListErrorBody]:
        """List phrase sets.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: The maximum number of phrase sets to return. The service may return fewer than this value. If
                unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will
                be coerced to 1000.
            page_token: A page token, received from a previous ``ListPhraseSet`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListPhraseSet`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/phraseSets"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListPhraseSetResponse],
            error_mapper=speech_projects_locations_phrase_sets_list_error_mapper,
            request_options=request_options,
        )

    def speech_projects_locations_phrase_sets_patch(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        body: PhraseSet | PhraseSetDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsPatchErrorBody]:
        """Update a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            body: The request body.
            update_mask: The list of fields to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("phraseSetsId", phrase_sets_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PhraseSet | PhraseSetDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[PhraseSet],
            error_mapper=speech_projects_locations_phrase_sets_patch_error_mapper,
            request_options=request_options,
        )


class AsyncProjectsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def speech_projects_locations_custom_classes_create(
        self,
        projects_id: str,
        locations_id: str,
        body: CreateCustomClassRequest | CreateCustomClassRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesCreateErrorBody]:
        """Create a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/customClasses"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomClassRequest | CreateCustomClassRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[CustomClass],
            error_mapper=speech_projects_locations_custom_classes_create_error_mapper,
            request_options=request_options,
        )

    async def speech_projects_locations_custom_classes_delete(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SpeechProjectsLocationsCustomClassesDeleteErrorBody]:
        """Delete a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("customClassesId", custom_classes_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=speech_projects_locations_custom_classes_delete_error_mapper,
            request_options=request_options,
        )

    async def speech_projects_locations_custom_classes_get(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesGetErrorBody]:
        """Get a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("customClassesId", custom_classes_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[CustomClass],
            error_mapper=speech_projects_locations_custom_classes_get_error_mapper,
            request_options=request_options,
        )

    async def speech_projects_locations_custom_classes_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListCustomClassesResponse, SpeechProjectsLocationsCustomClassesListErrorBody]:
        """List custom classes.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: The maximum number of custom classes to return. The service may return fewer than this value. If
                unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000
                will be coerced to 1000.
            page_token: A page token, received from a previous ``ListCustomClass`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListCustomClass`` must match the
                call that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/customClasses"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListCustomClassesResponse],
            error_mapper=speech_projects_locations_custom_classes_list_error_mapper,
            request_options=request_options,
        )

    async def speech_projects_locations_custom_classes_patch(
        self,
        projects_id: str,
        locations_id: str,
        custom_classes_id: str,
        body: CustomClass | CustomClassDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomClass, SpeechProjectsLocationsCustomClassesPatchErrorBody]:
        """Update a custom class.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            custom_classes_id: Resource name segment (customClassesId).
            body: The request body.
            update_mask: The list of fields to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("customClassesId", custom_classes_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomClass | CustomClassDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[CustomClass],
            error_mapper=speech_projects_locations_custom_classes_patch_error_mapper,
            request_options=request_options,
        )

    async def speech_projects_locations_phrase_sets_create(
        self,
        projects_id: str,
        locations_id: str,
        body: CreatePhraseSetRequest | CreatePhraseSetRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsCreateErrorBody]:
        """Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in
        the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/phraseSets"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreatePhraseSetRequest | CreatePhraseSetRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[PhraseSet],
            error_mapper=speech_projects_locations_phrase_sets_create_error_mapper,
            request_options=request_options,
        )

    async def speech_projects_locations_phrase_sets_delete(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SpeechProjectsLocationsPhraseSetsDeleteErrorBody]:
        """Delete a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("phraseSetsId", phrase_sets_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[Any],
            error_mapper=speech_projects_locations_phrase_sets_delete_error_mapper,
            request_options=request_options,
        )

    async def speech_projects_locations_phrase_sets_get(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsGetErrorBody]:
        """Get a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("phraseSetsId", phrase_sets_id),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[PhraseSet],
            error_mapper=speech_projects_locations_phrase_sets_get_error_mapper,
            request_options=request_options,
        )

    async def speech_projects_locations_phrase_sets_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPhraseSetResponse, SpeechProjectsLocationsPhraseSetsListErrorBody]:
        """List phrase sets.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            page_size: The maximum number of phrase sets to return. The service may return fewer than this value. If
                unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will
                be coerced to 1000.
            page_token: A page token, received from a previous ``ListPhraseSet`` call. Provide this to retrieve the
                subsequent page. When paginating, all other parameters provided to ``ListPhraseSet`` must match the call
                that provided the page token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{projectsId}/locations/{locationsId}/phraseSets"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[int | None]("pageSize", page_size), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[ListPhraseSetResponse],
            error_mapper=speech_projects_locations_phrase_sets_list_error_mapper,
            request_options=request_options,
        )

    async def speech_projects_locations_phrase_sets_patch(
        self,
        projects_id: str,
        locations_id: str,
        phrase_sets_id: str,
        body: PhraseSet | PhraseSetDict,
        *,
        update_mask: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PhraseSet, SpeechProjectsLocationsPhraseSetsPatchErrorBody]:
        """Update a phrase set.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            phrase_sets_id: Resource name segment (phraseSetsId).
            body: The request body.
            update_mask: The list of fields to be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default(
                "/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("phraseSetsId", phrase_sets_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PhraseSet | PhraseSetDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[PhraseSet],
            error_mapper=speech_projects_locations_phrase_sets_patch_error_mapper,
            request_options=request_options,
        )
