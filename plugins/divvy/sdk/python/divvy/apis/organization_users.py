from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.archive_organization_user_error import (
    ArchiveOrganizationUserErrorBody,
    archive_organization_user_error_mapper,
)
from ..errors.create_organization_user_error import (
    CreateOrganizationUserErrorBody,
    create_organization_user_error_mapper,
)
from ..errors.get_organization_user_error import GetOrganizationUserErrorBody, get_organization_user_error_mapper
from ..errors.list_organization_users_error import ListOrganizationUsersErrorBody, list_organization_users_error_mapper
from ..errors.restore_organization_user_error import (
    RestoreOrganizationUserErrorBody,
    restore_organization_user_error_mapper,
)
from ..errors.update_organization_user_error import (
    UpdateOrganizationUserErrorBody,
    update_organization_user_error_mapper,
)
from ..models.list_response_dto_organization_user_response_dto import ListResponseDtoOrganizationUserResponseDto
from ..models.organization_user_create_request_dto import (
    OrganizationUserCreateRequestDto,
    OrganizationUserCreateRequestDtoDict,
)
from ..models.organization_user_response_dto import OrganizationUserResponseDto
from ..models.organization_user_update_request_dto import (
    OrganizationUserUpdateRequestDto,
    OrganizationUserUpdateRequestDtoDict,
)
from ..server.server import Server


class OrganizationUsers:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = OrganizationUsersWithRawResponse(client, server)

    def archive_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Archive an existing user. In the response, the ``archived`` field is set as ``true``."

        You can restore an archived user with ``POST /v3/users/{userId}/restore``. There is no change when you archive
        an archived user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_organization_user(
                user_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_organization_user(
        self,
        body: OrganizationUserCreateRequestDto | OrganizationUserCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Create a new user. The currently signed-in user must have the ``ADMINISTRATOR`` user role in the BILL
        organization to perform this operation.

        When you create a user, BILL sends an email to the user for them to complete their sign-up. After user sign-up
        is complete, the user can access features in your BILL organization depending on the user role.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_organization_user(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Get details about an existing user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get user details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_organization_user(
                user_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_organization_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationUserResponseDto:
        """Get a list of user objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of users response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_organization_users(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def restore_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Restore an archived user. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_organization_user(
                user_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_organization_user(
        self,
        user_id: str,
        body: OrganizationUserUpdateRequestDto | OrganizationUserUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Update details about an existing user.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_organization_user(
                user_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> OrganizationUsersWithRawResponse:
        return self._with_raw_response


class AsyncOrganizationUsers:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncOrganizationUsersWithRawResponse(client, server)

    async def archive_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Archive an existing user. In the response, the ``archived`` field is set as ``true``."

        You can restore an archived user with ``POST /v3/users/{userId}/restore``. There is no change when you archive
        an archived user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_organization_user(
                user_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_organization_user(
        self,
        body: OrganizationUserCreateRequestDto | OrganizationUserCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Create a new user. The currently signed-in user must have the ``ADMINISTRATOR`` user role in the BILL
        organization to perform this operation.

        When you create a user, BILL sends an email to the user for them to complete their sign-up. After user sign-up
        is complete, the user can access features in your BILL organization depending on the user role.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_organization_user(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Get details about an existing user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get user details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_organization_user(
                user_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_organization_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationUserResponseDto:
        """Get a list of user objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of users response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_organization_users(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def restore_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Restore an archived user. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_organization_user(
                user_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_organization_user(
        self,
        user_id: str,
        body: OrganizationUserUpdateRequestDto | OrganizationUserUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Update details about an existing user.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_organization_user(
                user_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOrganizationUsersWithRawResponse:
        return self._with_raw_response


class OrganizationUsersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, ArchiveOrganizationUserErrorBody]:
        """Archive an existing user. In the response, the ``archived`` field is set as ``true``."

        You can restore an archived user with ``POST /v3/users/{userId}/restore``. There is no change when you archive
        an archived user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/users/{userId}/archive"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[OrganizationUserResponseDto],
            error_mapper=archive_organization_user_error_mapper,
            request_options=request_options,
        )

    def create_organization_user(
        self,
        body: OrganizationUserCreateRequestDto | OrganizationUserCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, CreateOrganizationUserErrorBody]:
        """Create a new user. The currently signed-in user must have the ``ADMINISTRATOR`` user role in the BILL
        organization to perform this operation.

        When you create a user, BILL sends an email to the user for them to complete their sign-up. After user sign-up
        is complete, the user can access features in your BILL organization depending on the user role.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/users"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationUserCreateRequestDto | OrganizationUserCreateRequestDtoDict](body),
            decoder=json_decoder[OrganizationUserResponseDto],
            error_mapper=create_organization_user_error_mapper,
            request_options=request_options,
        )

    def get_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, GetOrganizationUserErrorBody]:
        """Get details about an existing user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[OrganizationUserResponseDto],
            error_mapper=get_organization_user_error_mapper,
            request_options=request_options,
        )

    def list_organization_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationUserResponseDto, ListOrganizationUsersErrorBody]:
        """Get a list of user objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/users"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoOrganizationUserResponseDto],
            error_mapper=list_organization_users_error_mapper,
            request_options=request_options,
        )

    def restore_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, RestoreOrganizationUserErrorBody]:
        """Restore an archived user. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/users/{userId}/restore"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[OrganizationUserResponseDto],
            error_mapper=restore_organization_user_error_mapper,
            request_options=request_options,
        )

    def update_organization_user(
        self,
        user_id: str,
        body: OrganizationUserUpdateRequestDto | OrganizationUserUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, UpdateOrganizationUserErrorBody]:
        """Update details about an existing user.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationUserUpdateRequestDto | OrganizationUserUpdateRequestDtoDict](body),
            decoder=json_decoder[OrganizationUserResponseDto],
            error_mapper=update_organization_user_error_mapper,
            request_options=request_options,
        )


class AsyncOrganizationUsersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, ArchiveOrganizationUserErrorBody]:
        """Archive an existing user. In the response, the ``archived`` field is set as ``true``."

        You can restore an archived user with ``POST /v3/users/{userId}/restore``. There is no change when you archive
        an archived user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/users/{userId}/archive"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[OrganizationUserResponseDto],
            error_mapper=archive_organization_user_error_mapper,
            request_options=request_options,
        )

    async def create_organization_user(
        self,
        body: OrganizationUserCreateRequestDto | OrganizationUserCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, CreateOrganizationUserErrorBody]:
        """Create a new user. The currently signed-in user must have the ``ADMINISTRATOR`` user role in the BILL
        organization to perform this operation.

        When you create a user, BILL sends an email to the user for them to complete their sign-up. After user sign-up
        is complete, the user can access features in your BILL organization depending on the user role.

        See Organizations and Users in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/users"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationUserCreateRequestDto | OrganizationUserCreateRequestDtoDict](body),
            decoder=async_json_decoder[OrganizationUserResponseDto],
            error_mapper=create_organization_user_error_mapper,
            request_options=request_options,
        )

    async def get_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, GetOrganizationUserErrorBody]:
        """Get details about an existing user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[OrganizationUserResponseDto],
            error_mapper=get_organization_user_error_mapper,
            request_options=request_options,
        )

    async def list_organization_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationUserResponseDto, ListOrganizationUsersErrorBody]:
        """Get a list of user objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/users"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoOrganizationUserResponseDto],
            error_mapper=list_organization_users_error_mapper,
            request_options=request_options,
        )

    async def restore_organization_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, RestoreOrganizationUserErrorBody]:
        """Restore an archived user. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/users/{userId}/restore"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[OrganizationUserResponseDto],
            error_mapper=restore_organization_user_error_mapper,
            request_options=request_options,
        )

    async def update_organization_user(
        self,
        user_id: str,
        body: OrganizationUserUpdateRequestDto | OrganizationUserUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, UpdateOrganizationUserErrorBody]:
        """Update details about an existing user.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationUserUpdateRequestDto | OrganizationUserUpdateRequestDtoDict](body),
            decoder=async_json_decoder[OrganizationUserResponseDto],
            error_mapper=update_organization_user_error_mapper,
            request_options=request_options,
        )
