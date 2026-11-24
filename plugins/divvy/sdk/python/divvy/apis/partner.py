from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.archive_partner_user_error import ArchivePartnerUserErrorBody, archive_partner_user_error_mapper
from ..errors.create_organization_error import CreateOrganizationErrorBody, create_organization_error_mapper
from ..errors.create_partner_user_error import CreatePartnerUserErrorBody, create_partner_user_error_mapper
from ..errors.create_phone_error import CreatePhoneErrorBody, create_phone_error_mapper
from ..errors.get_partner_user_error import GetPartnerUserErrorBody, get_partner_user_error_mapper
from ..errors.get_partner_user_role_error import GetPartnerUserRoleErrorBody, get_partner_user_role_error_mapper
from ..errors.list_partner_organizations_error import (
    ListPartnerOrganizationsErrorBody,
    list_partner_organizations_error_mapper,
)
from ..errors.list_partner_user_roles_error import ListPartnerUserRolesErrorBody, list_partner_user_roles_error_mapper
from ..errors.list_partner_users_error import ListPartnerUsersErrorBody, list_partner_users_error_mapper
from ..errors.login_as_user_error import LoginAsUserErrorBody, login_as_user_error_mapper
from ..errors.partner_login_error import PartnerLoginErrorBody, partner_login_error_mapper
from ..errors.restore_partner_user_error import RestorePartnerUserErrorBody, restore_partner_user_error_mapper
from ..errors.update_org_partner_price_plan_error import (
    UpdateOrgPartnerPricePlanErrorBody,
    update_org_partner_price_plan_error_mapper,
)
from ..errors.update_partner_user_error import UpdatePartnerUserErrorBody, update_partner_user_error_mapper
from ..models.list_response_dto_organization_response_dto import ListResponseDtoOrganizationResponseDto
from ..models.list_response_dto_organization_user_response_dto import ListResponseDtoOrganizationUserResponseDto
from ..models.list_response_dto_role_response_dto import ListResponseDtoRoleResponseDto
from ..models.login_as_user_request_dto import LoginAsUserRequestDto, LoginAsUserRequestDtoDict
from ..models.login_as_user_response_dto import LoginAsUserResponseDto
from ..models.organization_create_request_dto import OrganizationCreateRequestDto, OrganizationCreateRequestDtoDict
from ..models.organization_response_dto import OrganizationResponseDto
from ..models.organization_user_response_dto import OrganizationUserResponseDto
from ..models.partner_login_request_dto import PartnerLoginRequestDto, PartnerLoginRequestDtoDict
from ..models.partner_login_response_dto import PartnerLoginResponseDto
from ..models.partner_user_create_request_dto import PartnerUserCreateRequestDto, PartnerUserCreateRequestDtoDict
from ..models.partner_user_update_request_dto import PartnerUserUpdateRequestDto, PartnerUserUpdateRequestDtoDict
from ..models.phone_verification_request_dto import PhoneVerificationRequestDto, PhoneVerificationRequestDtoDict
from ..models.role_response_dto import RoleResponseDto
from ..models.status_dto import StatusDto
from ..models.update_org_price_plan_request import UpdateOrgPricePlanRequest, UpdateOrgPricePlanRequestDict
from ..server.server import Server


class Partner:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = PartnerWithRawResponse(client, server)

    def archive_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Archive an existing user. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived user with ``POST /v3/users/{userId}/restore``. There is no change when you archive
        an archived user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_partner_user(
                user_id,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    def create_organization(
        self,
        body: OrganizationCreateRequestDto | OrganizationCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationResponseDto:
        """Create a new organization.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        See Organizations for BILL partners in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create an organization response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_organization(
                body, session_id=session_id, app_key=app_key, request_options=request_options
            ),
        )

    def create_partner_user(
        self,
        body: PartnerUserCreateRequestDto | PartnerUserCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Create a new user. The new user is created for the organization (``organizationId``) in the request header.

        In the request, set ``username`` as a unique alphanumeric value. The value must be 40 characters or fewer. This
        field is not case-sensitive. Do not set the value as an email address or any PII value. BILL uses this value to
        uniquely identify each user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        See Users for BILL partners in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_partner_user(
                body,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    def create_phone(
        self,
        user_id: str,
        body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Add a phone number for a created user. BILL requires organization users to have a linked phone number for
        initiating risk verification for the organization.

        You can check whether a phone number has been added for the user with ``GET /v3/risk-verifications/phone``.

        After you add a phone number with this endpoint, you can initiate risk verification for the organization with
        ``POST /v3/risk-verifications``.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add phone for risk verification response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_phone(
                user_id,
                body,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    def get_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Get details about an existing user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get user details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_partner_user(
                user_id,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    def get_partner_user_role(
        self,
        role_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RoleResponseDto:
        """Get details about an existing user role in a BILL organization.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            role_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get user role details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_partner_user_role(
                role_id,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    def list_partner_organizations(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationResponseDto:
        """Get a list of organization objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of organizations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_partner_organizations(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                app_key=app_key,
                request_options=request_options,
            ),
        )

    def list_partner_user_roles(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoRoleResponseDto:
        """Get a list of user role objects available in a BILL organization. By default, you get 20 results on one page
        of results. Set ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of user roles response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_partner_user_roles(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    def list_partner_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationUserResponseDto:
        """Get a list of user objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of users response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_partner_users(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    def login_as_user(
        self,
        body: LoginAsUserRequestDto | LoginAsUserRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> LoginAsUserResponseDto:
        """Sign in to a created organization as a created user of that organization. In the response, your API session
        is created and a generated ``sessionId`` is available for organization-level BILL API operations.

        This endpoint is required for a specific BILL partner-level workflow.
        1. Sign in to your partner account with API partner login.
        2. Create a child BILL organization with ``POST /v3/partner/organizations``. In the response, a BILL-generated
            organization ``id`` is available.
        3. Create a user for the child BILL organization with ``POST /v3/partner/users``. In the response, a
            BILL-generated user ``id`` is available.
        4. Sign in to the created organization as the created user of that organization with ``POST
            /v3/partner/login-as-user``. After signing in, you can perform organization-level BILL API operations, such
            as creating a bill or paying a vendor. All organization-level BILL API operations require a ``devKey`` and
            ``sessionId``.

        **Note**: When you create an organization and then create a user for that organization, it is important that you
        initiate risk verification with ``POST /v3/risk-verifications``. See Initiate risk verification for an
        organization for more information.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        ### MFA-trusted API session Set both ``rememberMeId`` and ``device`` as additional fields in your ``POST
        /v3/partner/login-as-user`` request to create an MFA-trusted API session.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API login as user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.login_as_user(
                body, session_id=session_id, app_key=app_key, request_options=request_options
            ),
        )

    def partner_login(
        self,
        body: PartnerLoginRequestDto | PartnerLoginRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PartnerLoginResponseDto:
        """Sign in to your BILL partner account. In the response, your partner API session is created and a
        BILL-generated ``sessionId`` is available. Use the ``sessionId`` in all subsequent API calls to confirm that you
        are in a signed-in session.

        You get additional permissions with a partner account ``sessionId``.
        * Create a child BILL organization with ``POST /v3/partner/organizations``.
        * Create a user for the child BILL organization with ``POST /v3/partner/users``.
        * Sign in to the created organization as the created user of that organization with
            ``/v3/partner/login-as-user``. After signing in, you can perform organization-level BILL API operations,
            such as creating a bill or paying a vendor. All organization-level BILL API operations require a ``devKey``
            and ``sessionId``.

        **Note**: When you create an organization and then create a user for that organization, it is important that you
        initiate risk verification with ``POST /v3/risk-verifications``. See Initiate risk verification for an
        organization for more information.

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API partner login response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(self._with_raw_response.partner_login(body, request_options=request_options))

    def restore_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Restore an archived user. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_partner_user(
                user_id,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    def update_org_partner_price_plan(
        self,
        organization_id: str,
        body: UpdateOrgPricePlanRequest | UpdateOrgPricePlanRequestDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Update the price plan for an existing organization.

        When you onboard as a BILL partner, BILL works with you to set up price plans for the organizations you create.
        Your organizations can have up to 5 price plans. Each price plan is named in the ``PricePlanN`` format
        (``PricePlan1`` up to ``PricePlan5``).

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an organization price plan response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_org_partner_price_plan(
                organization_id, body, session_id=session_id, app_key=app_key, request_options=request_options
            ),
        )

    def update_partner_user(
        self,
        user_id: str,
        body: PartnerUserUpdateRequestDto | PartnerUserUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Update details about an existing user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_partner_user(
                user_id,
                body,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> PartnerWithRawResponse:
        return self._with_raw_response


class AsyncPartner:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncPartnerWithRawResponse(client, server)

    async def archive_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Archive an existing user. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived user with ``POST /v3/users/{userId}/restore``. There is no change when you archive
        an archived user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_partner_user(
                user_id,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    async def create_organization(
        self,
        body: OrganizationCreateRequestDto | OrganizationCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationResponseDto:
        """Create a new organization.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        See Organizations for BILL partners in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create an organization response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_organization(
                body, session_id=session_id, app_key=app_key, request_options=request_options
            ),
        )

    async def create_partner_user(
        self,
        body: PartnerUserCreateRequestDto | PartnerUserCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Create a new user. The new user is created for the organization (``organizationId``) in the request header.

        In the request, set ``username`` as a unique alphanumeric value. The value must be 40 characters or fewer. This
        field is not case-sensitive. Do not set the value as an email address or any PII value. BILL uses this value to
        uniquely identify each user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        See Users for BILL partners in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_partner_user(
                body,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    async def create_phone(
        self,
        user_id: str,
        body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Add a phone number for a created user. BILL requires organization users to have a linked phone number for
        initiating risk verification for the organization.

        You can check whether a phone number has been added for the user with ``GET /v3/risk-verifications/phone``.

        After you add a phone number with this endpoint, you can initiate risk verification for the organization with
        ``POST /v3/risk-verifications``.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add phone for risk verification response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_phone(
                user_id,
                body,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    async def get_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Get details about an existing user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get user details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_partner_user(
                user_id,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    async def get_partner_user_role(
        self,
        role_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RoleResponseDto:
        """Get details about an existing user role in a BILL organization.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            role_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get user role details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_partner_user_role(
                role_id,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    async def list_partner_organizations(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationResponseDto:
        """Get a list of organization objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of organizations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_partner_organizations(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                app_key=app_key,
                request_options=request_options,
            ),
        )

    async def list_partner_user_roles(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoRoleResponseDto:
        """Get a list of user role objects available in a BILL organization. By default, you get 20 results on one page
        of results. Set ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of user roles response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_partner_user_roles(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    async def list_partner_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoOrganizationUserResponseDto:
        """Get a list of user objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of users response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_partner_users(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    async def login_as_user(
        self,
        body: LoginAsUserRequestDto | LoginAsUserRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LoginAsUserResponseDto:
        """Sign in to a created organization as a created user of that organization. In the response, your API session
        is created and a generated ``sessionId`` is available for organization-level BILL API operations.

        This endpoint is required for a specific BILL partner-level workflow.
        1. Sign in to your partner account with API partner login.
        2. Create a child BILL organization with ``POST /v3/partner/organizations``. In the response, a BILL-generated
            organization ``id`` is available.
        3. Create a user for the child BILL organization with ``POST /v3/partner/users``. In the response, a
            BILL-generated user ``id`` is available.
        4. Sign in to the created organization as the created user of that organization with ``POST
            /v3/partner/login-as-user``. After signing in, you can perform organization-level BILL API operations, such
            as creating a bill or paying a vendor. All organization-level BILL API operations require a ``devKey`` and
            ``sessionId``.

        **Note**: When you create an organization and then create a user for that organization, it is important that you
        initiate risk verification with ``POST /v3/risk-verifications``. See Initiate risk verification for an
        organization for more information.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        ### MFA-trusted API session Set both ``rememberMeId`` and ``device`` as additional fields in your ``POST
        /v3/partner/login-as-user`` request to create an MFA-trusted API session.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API login as user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.login_as_user(
                body, session_id=session_id, app_key=app_key, request_options=request_options
            ),
        )

    async def partner_login(
        self,
        body: PartnerLoginRequestDto | PartnerLoginRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PartnerLoginResponseDto:
        """Sign in to your BILL partner account. In the response, your partner API session is created and a
        BILL-generated ``sessionId`` is available. Use the ``sessionId`` in all subsequent API calls to confirm that you
        are in a signed-in session.

        You get additional permissions with a partner account ``sessionId``.
        * Create a child BILL organization with ``POST /v3/partner/organizations``.
        * Create a user for the child BILL organization with ``POST /v3/partner/users``.
        * Sign in to the created organization as the created user of that organization with
            ``/v3/partner/login-as-user``. After signing in, you can perform organization-level BILL API operations,
            such as creating a bill or paying a vendor. All organization-level BILL API operations require a ``devKey``
            and ``sessionId``.

        **Note**: When you create an organization and then create a user for that organization, it is important that you
        initiate risk verification with ``POST /v3/risk-verifications``. See Initiate risk verification for an
        organization for more information.

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API partner login response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(await self._with_raw_response.partner_login(body, request_options=request_options))

    async def restore_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Restore an archived user. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_partner_user(
                user_id,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    async def update_org_partner_price_plan(
        self,
        organization_id: str,
        body: UpdateOrgPricePlanRequest | UpdateOrgPricePlanRequestDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Update the price plan for an existing organization.

        When you onboard as a BILL partner, BILL works with you to set up price plans for the organizations you create.
        Your organizations can have up to 5 price plans. Each price plan is named in the ``PricePlanN`` format
        (``PricePlan1`` up to ``PricePlan5``).

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an organization price plan response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_org_partner_price_plan(
                organization_id, body, session_id=session_id, app_key=app_key, request_options=request_options
            ),
        )

    async def update_partner_user(
        self,
        user_id: str,
        body: PartnerUserUpdateRequestDto | PartnerUserUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrganizationUserResponseDto:
        """Update details about an existing user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a user response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_partner_user(
                user_id,
                body,
                session_id=session_id,
                app_key=app_key,
                organization_id=organization_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPartnerWithRawResponse:
        return self._with_raw_response


class PartnerWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, ArchivePartnerUserErrorBody]:
        """Archive an existing user. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived user with ``POST /v3/users/{userId}/restore``. There is no change when you archive
        an archived user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/users/{userId}/archive"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[OrganizationUserResponseDto],
            error_mapper=archive_partner_user_error_mapper,
            request_options=request_options,
        )

    def create_organization(
        self,
        body: OrganizationCreateRequestDto | OrganizationCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationResponseDto, CreateOrganizationErrorBody]:
        """Create a new organization.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        See Organizations for BILL partners in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/organizations"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationCreateRequestDto | OrganizationCreateRequestDtoDict](body),
            decoder=json_decoder[OrganizationResponseDto],
            error_mapper=create_organization_error_mapper,
            request_options=request_options,
        )

    def create_partner_user(
        self,
        body: PartnerUserCreateRequestDto | PartnerUserCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, CreatePartnerUserErrorBody]:
        """Create a new user. The new user is created for the organization (``organizationId``) in the request header.

        In the request, set ``username`` as a unique alphanumeric value. The value must be 40 characters or fewer. This
        field is not case-sensitive. Do not set the value as an email address or any PII value. BILL uses this value to
        uniquely identify each user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        See Users for BILL partners in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/users"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PartnerUserCreateRequestDto | PartnerUserCreateRequestDtoDict](body),
            decoder=json_decoder[OrganizationUserResponseDto],
            error_mapper=create_partner_user_error_mapper,
            request_options=request_options,
        )

    def create_phone(
        self,
        user_id: str,
        body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreatePhoneErrorBody]:
        """Add a phone number for a created user. BILL requires organization users to have a linked phone number for
        initiating risk verification for the organization.

        You can check whether a phone number has been added for the user with ``GET /v3/risk-verifications/phone``.

        After you add a phone number with this endpoint, you can initiate risk verification for the organization with
        ``POST /v3/risk-verifications``.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/risk-verifications/{userId}/phone"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict](body),
            decoder=empty_response,
            error_mapper=create_phone_error_mapper,
            request_options=request_options,
        )

    def get_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, GetPartnerUserErrorBody]:
        """Get details about an existing user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/partner/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
            ],
            decoder=json_decoder[OrganizationUserResponseDto],
            error_mapper=get_partner_user_error_mapper,
            request_options=request_options,
        )

    def get_partner_user_role(
        self,
        role_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RoleResponseDto, GetPartnerUserRoleErrorBody]:
        """Get details about an existing user role in a BILL organization.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            role_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/partner/roles/{roleId}"),
            path_params=[param[str]("roleId", role_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
            ],
            decoder=json_decoder[RoleResponseDto],
            error_mapper=get_partner_user_role_error_mapper,
            request_options=request_options,
        )

    def list_partner_organizations(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationResponseDto, ListPartnerOrganizationsErrorBody]:
        """Get a list of organization objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/partner/organizations"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("appKey", app_key)],
            decoder=json_decoder[ListResponseDtoOrganizationResponseDto],
            error_mapper=list_partner_organizations_error_mapper,
            request_options=request_options,
        )

    def list_partner_user_roles(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoRoleResponseDto, ListPartnerUserRolesErrorBody]:
        """Get a list of user role objects available in a BILL organization. By default, you get 20 results on one page
        of results. Set ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/partner/roles"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
            ],
            decoder=json_decoder[ListResponseDtoRoleResponseDto],
            error_mapper=list_partner_user_roles_error_mapper,
            request_options=request_options,
        )

    def list_partner_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationUserResponseDto, ListPartnerUsersErrorBody]:
        """Get a list of user objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/partner/users"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
            ],
            decoder=json_decoder[ListResponseDtoOrganizationUserResponseDto],
            error_mapper=list_partner_users_error_mapper,
            request_options=request_options,
        )

    def login_as_user(
        self,
        body: LoginAsUserRequestDto | LoginAsUserRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[LoginAsUserResponseDto, LoginAsUserErrorBody]:
        """Sign in to a created organization as a created user of that organization. In the response, your API session
        is created and a generated ``sessionId`` is available for organization-level BILL API operations.

        This endpoint is required for a specific BILL partner-level workflow.
        1. Sign in to your partner account with API partner login.
        2. Create a child BILL organization with ``POST /v3/partner/organizations``. In the response, a BILL-generated
            organization ``id`` is available.
        3. Create a user for the child BILL organization with ``POST /v3/partner/users``. In the response, a
            BILL-generated user ``id`` is available.
        4. Sign in to the created organization as the created user of that organization with ``POST
            /v3/partner/login-as-user``. After signing in, you can perform organization-level BILL API operations, such
            as creating a bill or paying a vendor. All organization-level BILL API operations require a ``devKey`` and
            ``sessionId``.

        **Note**: When you create an organization and then create a user for that organization, it is important that you
        initiate risk verification with ``POST /v3/risk-verifications``. See Initiate risk verification for an
        organization for more information.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        ### MFA-trusted API session Set both ``rememberMeId`` and ``device`` as additional fields in your ``POST
        /v3/partner/login-as-user`` request to create an MFA-trusted API session.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/login-as-user"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[LoginAsUserRequestDto | LoginAsUserRequestDtoDict](body),
            decoder=json_decoder[LoginAsUserResponseDto],
            error_mapper=login_as_user_error_mapper,
            request_options=request_options,
        )

    def partner_login(
        self,
        body: PartnerLoginRequestDto | PartnerLoginRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PartnerLoginResponseDto, PartnerLoginErrorBody]:
        """Sign in to your BILL partner account. In the response, your partner API session is created and a
        BILL-generated ``sessionId`` is available. Use the ``sessionId`` in all subsequent API calls to confirm that you
        are in a signed-in session.

        You get additional permissions with a partner account ``sessionId``.
        * Create a child BILL organization with ``POST /v3/partner/organizations``.
        * Create a user for the child BILL organization with ``POST /v3/partner/users``.
        * Sign in to the created organization as the created user of that organization with
            ``/v3/partner/login-as-user``. After signing in, you can perform organization-level BILL API operations,
            such as creating a bill or paying a vendor. All organization-level BILL API operations require a ``devKey``
            and ``sessionId``.

        **Note**: When you create an organization and then create a user for that organization, it is important that you
        initiate risk verification with ``POST /v3/risk-verifications``. See Initiate risk verification for an
        organization for more information.

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/login"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PartnerLoginRequestDto | PartnerLoginRequestDtoDict](body),
            decoder=json_decoder[PartnerLoginResponseDto],
            error_mapper=partner_login_error_mapper,
            request_options=request_options,
        )

    def restore_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, RestorePartnerUserErrorBody]:
        """Restore an archived user. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/users/{userId}/restore"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[OrganizationUserResponseDto],
            error_mapper=restore_partner_user_error_mapper,
            request_options=request_options,
        )

    def update_org_partner_price_plan(
        self,
        organization_id: str,
        body: UpdateOrgPricePlanRequest | UpdateOrgPricePlanRequestDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, UpdateOrgPartnerPricePlanErrorBody]:
        """Update the price plan for an existing organization.

        When you onboard as a BILL partner, BILL works with you to set up price plans for the organizations you create.
        Your organizations can have up to 5 price plans. Each price plan is named in the ``PricePlanN`` format
        (``PricePlan1`` up to ``PricePlan5``).

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/partner/organizations/{organizationId}/price-plan"),
            path_params=[param[str]("organizationId", organization_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateOrgPricePlanRequest | UpdateOrgPricePlanRequestDict](body),
            decoder=json_decoder[StatusDto],
            error_mapper=update_org_partner_price_plan_error_mapper,
            request_options=request_options,
        )

    def update_partner_user(
        self,
        user_id: str,
        body: PartnerUserUpdateRequestDto | PartnerUserUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, UpdatePartnerUserErrorBody]:
        """Update details about an existing user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/partner/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PartnerUserUpdateRequestDto | PartnerUserUpdateRequestDtoDict](body),
            decoder=json_decoder[OrganizationUserResponseDto],
            error_mapper=update_partner_user_error_mapper,
            request_options=request_options,
        )


class AsyncPartnerWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, ArchivePartnerUserErrorBody]:
        """Archive an existing user. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived user with ``POST /v3/users/{userId}/restore``. There is no change when you archive
        an archived user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/users/{userId}/archive"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[OrganizationUserResponseDto],
            error_mapper=archive_partner_user_error_mapper,
            request_options=request_options,
        )

    async def create_organization(
        self,
        body: OrganizationCreateRequestDto | OrganizationCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationResponseDto, CreateOrganizationErrorBody]:
        """Create a new organization.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        See Organizations for BILL partners in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/organizations"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[OrganizationCreateRequestDto | OrganizationCreateRequestDtoDict](body),
            decoder=async_json_decoder[OrganizationResponseDto],
            error_mapper=create_organization_error_mapper,
            request_options=request_options,
        )

    async def create_partner_user(
        self,
        body: PartnerUserCreateRequestDto | PartnerUserCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, CreatePartnerUserErrorBody]:
        """Create a new user. The new user is created for the organization (``organizationId``) in the request header.

        In the request, set ``username`` as a unique alphanumeric value. The value must be 40 characters or fewer. This
        field is not case-sensitive. Do not set the value as an email address or any PII value. BILL uses this value to
        uniquely identify each user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        See Users for BILL partners in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/users"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PartnerUserCreateRequestDto | PartnerUserCreateRequestDtoDict](body),
            decoder=async_json_decoder[OrganizationUserResponseDto],
            error_mapper=create_partner_user_error_mapper,
            request_options=request_options,
        )

    async def create_phone(
        self,
        user_id: str,
        body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreatePhoneErrorBody]:
        """Add a phone number for a created user. BILL requires organization users to have a linked phone number for
        initiating risk verification for the organization.

        You can check whether a phone number has been added for the user with ``GET /v3/risk-verifications/phone``.

        After you add a phone number with this endpoint, you can initiate risk verification for the organization with
        ``POST /v3/risk-verifications``.

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/risk-verifications/{userId}/phone"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict](body),
            decoder=async_empty_response,
            error_mapper=create_phone_error_mapper,
            request_options=request_options,
        )

    async def get_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, GetPartnerUserErrorBody]:
        """Get details about an existing user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/partner/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
            ],
            decoder=async_json_decoder[OrganizationUserResponseDto],
            error_mapper=get_partner_user_error_mapper,
            request_options=request_options,
        )

    async def get_partner_user_role(
        self,
        role_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RoleResponseDto, GetPartnerUserRoleErrorBody]:
        """Get details about an existing user role in a BILL organization.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            role_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/partner/roles/{roleId}"),
            path_params=[param[str]("roleId", role_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
            ],
            decoder=async_json_decoder[RoleResponseDto],
            error_mapper=get_partner_user_role_error_mapper,
            request_options=request_options,
        )

    async def list_partner_organizations(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationResponseDto, ListPartnerOrganizationsErrorBody]:
        """Get a list of organization objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/partner/organizations"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("appKey", app_key)],
            decoder=async_json_decoder[ListResponseDtoOrganizationResponseDto],
            error_mapper=list_partner_organizations_error_mapper,
            request_options=request_options,
        )

    async def list_partner_user_roles(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoRoleResponseDto, ListPartnerUserRolesErrorBody]:
        """Get a list of user role objects available in a BILL organization. By default, you get 20 results on one page
        of results. Set ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/partner/roles"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
            ],
            decoder=async_json_decoder[ListResponseDtoRoleResponseDto],
            error_mapper=list_partner_user_roles_error_mapper,
            request_options=request_options,
        )

    async def list_partner_users(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoOrganizationUserResponseDto, ListPartnerUsersErrorBody]:
        """Get a list of user objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/partner/users"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
            ],
            decoder=async_json_decoder[ListResponseDtoOrganizationUserResponseDto],
            error_mapper=list_partner_users_error_mapper,
            request_options=request_options,
        )

    async def login_as_user(
        self,
        body: LoginAsUserRequestDto | LoginAsUserRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LoginAsUserResponseDto, LoginAsUserErrorBody]:
        """Sign in to a created organization as a created user of that organization. In the response, your API session
        is created and a generated ``sessionId`` is available for organization-level BILL API operations.

        This endpoint is required for a specific BILL partner-level workflow.
        1. Sign in to your partner account with API partner login.
        2. Create a child BILL organization with ``POST /v3/partner/organizations``. In the response, a BILL-generated
            organization ``id`` is available.
        3. Create a user for the child BILL organization with ``POST /v3/partner/users``. In the response, a
            BILL-generated user ``id`` is available.
        4. Sign in to the created organization as the created user of that organization with ``POST
            /v3/partner/login-as-user``. After signing in, you can perform organization-level BILL API operations, such
            as creating a bill or paying a vendor. All organization-level BILL API operations require a ``devKey`` and
            ``sessionId``.

        **Note**: When you create an organization and then create a user for that organization, it is important that you
        initiate risk verification with ``POST /v3/risk-verifications``. See Initiate risk verification for an
        organization for more information.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        ### MFA-trusted API session Set both ``rememberMeId`` and ``device`` as additional fields in your ``POST
        /v3/partner/login-as-user`` request to create an MFA-trusted API session.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/login-as-user"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[LoginAsUserRequestDto | LoginAsUserRequestDtoDict](body),
            decoder=async_json_decoder[LoginAsUserResponseDto],
            error_mapper=login_as_user_error_mapper,
            request_options=request_options,
        )

    async def partner_login(
        self,
        body: PartnerLoginRequestDto | PartnerLoginRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PartnerLoginResponseDto, PartnerLoginErrorBody]:
        """Sign in to your BILL partner account. In the response, your partner API session is created and a
        BILL-generated ``sessionId`` is available. Use the ``sessionId`` in all subsequent API calls to confirm that you
        are in a signed-in session.

        You get additional permissions with a partner account ``sessionId``.
        * Create a child BILL organization with ``POST /v3/partner/organizations``.
        * Create a user for the child BILL organization with ``POST /v3/partner/users``.
        * Sign in to the created organization as the created user of that organization with
            ``/v3/partner/login-as-user``. After signing in, you can perform organization-level BILL API operations,
            such as creating a bill or paying a vendor. All organization-level BILL API operations require a ``devKey``
            and ``sessionId``.

        **Note**: When you create an organization and then create a user for that organization, it is important that you
        initiate risk verification with ``POST /v3/risk-verifications``. See Initiate risk verification for an
        organization for more information.

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/login"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PartnerLoginRequestDto | PartnerLoginRequestDtoDict](body),
            decoder=async_json_decoder[PartnerLoginResponseDto],
            error_mapper=partner_login_error_mapper,
            request_options=request_options,
        )

    async def restore_partner_user(
        self,
        user_id: str,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, RestorePartnerUserErrorBody]:
        """Restore an archived user. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/partner/users/{userId}/restore"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[OrganizationUserResponseDto],
            error_mapper=restore_partner_user_error_mapper,
            request_options=request_options,
        )

    async def update_org_partner_price_plan(
        self,
        organization_id: str,
        body: UpdateOrgPricePlanRequest | UpdateOrgPricePlanRequestDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, UpdateOrgPartnerPricePlanErrorBody]:
        """Update the price plan for an existing organization.

        When you onboard as a BILL partner, BILL works with you to set up price plans for the organizations you create.
        Your organizations can have up to 5 price plans. Each price plan is named in the ``PricePlanN`` format
        (``PricePlan1`` up to ``PricePlan5``).

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/partner/organizations/{organizationId}/price-plan"),
            path_params=[param[str]("organizationId", organization_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateOrgPricePlanRequest | UpdateOrgPricePlanRequestDict](body),
            decoder=async_json_decoder[StatusDto],
            error_mapper=update_org_partner_price_plan_error_mapper,
            request_options=request_options,
        )

    async def update_partner_user(
        self,
        user_id: str,
        body: PartnerUserUpdateRequestDto | PartnerUserUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        app_key: str | None = None,
        organization_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrganizationUserResponseDto, UpdatePartnerUserErrorBody]:
        """Update details about an existing user.

        This operation requires partner-level permissions.
        * A ``sessionId`` header value generated with API partner login
        * An ``appKey`` header value
        * The ``organizationId`` of the organization

        Args:
            user_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            app_key: Value sent with the request.
            organization_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/partner/users/{userId}"),
            path_params=[param[str]("userId", user_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("appKey", app_key),
                param[str | None]("organizationId", organization_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PartnerUserUpdateRequestDto | PartnerUserUpdateRequestDtoDict](body),
            decoder=async_json_decoder[OrganizationUserResponseDto],
            error_mapper=update_partner_user_error_mapper,
            request_options=request_options,
        )
