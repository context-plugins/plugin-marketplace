from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_organization_error import GetOrganizationErrorBody, get_organization_error_mapper
from ..errors.get_organization_shorten_counts_by_group_error import (
    GetOrganizationShortenCountsByGroupErrorBody,
    get_organization_shorten_counts_by_group_error_mapper,
)
from ..errors.get_organization_shorten_counts_error import (
    GetOrganizationShortenCountsErrorBody,
    get_organization_shorten_counts_error_mapper,
)
from ..errors.get_organizations_error import GetOrganizationsErrorBody, get_organizations_error_mapper
from ..errors.get_plan_limits_error import GetPlanLimitsErrorBody, get_plan_limits_error_mapper
from ..models.enums.time_unit import TimeUnit, TimeUnitOrStr
from ..models.metrics import Metrics
from ..models.organization import Organization
from ..models.organizations import Organizations
from ..models.plan_limits import PlanLimits
from ..server.server import Server


class OrganizationsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OrganizationsApiWithRawResponse(client, server, auth)

    def get_organization(
        self, organization_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Organization:
        """Retrive details for the specified organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_organization(organization_guid, request_options=request_options))

    def get_organization_shorten_counts(
        self,
        organization_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Metrics:
        """Returns the shorten counts for a specific organization over a specified time period.

        Args:
            organization_guid: A GUID for a Bitly organization
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_organization_shorten_counts(
                organization_guid,
                unit=unit,
                units=units,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    def get_organization_shorten_counts_by_group(
        self, organization_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Metrics:
        """Returns the shorten counts for a specific organization by group for the current month.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_organization_shorten_counts_by_group(
                organization_guid, request_options=request_options
            ),
        )

    def get_organizations(
        self, *, include_all: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Organizations:
        """Retrieve a list of organizations for the authenticated user. By default, only organizations permitted by the
        token's allowed_orgs are returned. Use include_all=true to return all organizations regardless of token
        restrictions. Each organization is annotated with its authentication requirements (require_sso, require_2fa)
        when configured.

        Args:
            include_all: When set to true, returns all of the user's organizations regardless of the token's
                allowed_orgs restrictions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_organizations(include_all=include_all, request_options=request_options)
        )

    def get_plan_limits(
        self, organization_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PlanLimits:
        """Returns all plan limits and counts available for an organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_plan_limits(organization_guid, request_options=request_options))

    @property
    def with_raw_response(self) -> OrganizationsApiWithRawResponse:
        return self._with_raw_response


class AsyncOrganizationsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOrganizationsApiWithRawResponse(client, server, auth)

    async def get_organization(
        self, organization_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Organization:
        """Retrive details for the specified organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_organization(organization_guid, request_options=request_options)
        )

    async def get_organization_shorten_counts(
        self,
        organization_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Metrics:
        """Returns the shorten counts for a specific organization over a specified time period.

        Args:
            organization_guid: A GUID for a Bitly organization
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_organization_shorten_counts(
                organization_guid,
                unit=unit,
                units=units,
                unit_reference=unit_reference,
                request_options=request_options,
            ),
        )

    async def get_organization_shorten_counts_by_group(
        self, organization_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Metrics:
        """Returns the shorten counts for a specific organization by group for the current month.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_organization_shorten_counts_by_group(
                organization_guid, request_options=request_options
            ),
        )

    async def get_organizations(
        self, *, include_all: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Organizations:
        """Retrieve a list of organizations for the authenticated user. By default, only organizations permitted by the
        token's allowed_orgs are returned. Use include_all=true to return all organizations regardless of token
        restrictions. Each organization is annotated with its authentication requirements (require_sso, require_2fa)
        when configured.

        Args:
            include_all: When set to true, returns all of the user's organizations regardless of the token's
                allowed_orgs restrictions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_organizations(include_all=include_all, request_options=request_options)
        )

    async def get_plan_limits(
        self, organization_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PlanLimits:
        """Returns all plan limits and counts available for an organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_plan_limits(organization_guid, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOrganizationsApiWithRawResponse:
        return self._with_raw_response


class OrganizationsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_organization(
        self, organization_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Organization, GetOrganizationErrorBody]:
        """Retrive details for the specified organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{organization_guid}"),
            path_params=[param[str]("organization_guid", organization_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Organization],
            error_mapper=get_organization_error_mapper,
            request_options=request_options,
        )

    def get_organization_shorten_counts(
        self,
        organization_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Metrics, GetOrganizationShortenCountsErrorBody]:
        """Returns the shorten counts for a specific organization over a specified time period.

        Args:
            organization_guid: A GUID for a Bitly organization
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{organization_guid}/shorten_counts"),
            path_params=[param[str]("organization_guid", organization_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Metrics],
            error_mapper=get_organization_shorten_counts_error_mapper,
            request_options=request_options,
        )

    def get_organization_shorten_counts_by_group(
        self, organization_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Metrics, GetOrganizationShortenCountsByGroupErrorBody]:
        """Returns the shorten counts for a specific organization by group for the current month.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{organization_guid}/shorten_counts_by_group"),
            path_params=[param[str]("organization_guid", organization_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Metrics],
            error_mapper=get_organization_shorten_counts_by_group_error_mapper,
            request_options=request_options,
        )

    def get_organizations(
        self, *, include_all: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Organizations, GetOrganizationsErrorBody]:
        """Retrieve a list of organizations for the authenticated user. By default, only organizations permitted by the
        token's allowed_orgs are returned. Use include_all=true to return all organizations regardless of token
        restrictions. Each organization is annotated with its authentication requirements (require_sso, require_2fa)
        when configured.

        Args:
            include_all: When set to true, returns all of the user's organizations regardless of the token's
                allowed_orgs restrictions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations"),
            query_params=[param[bool | None]("include_all", include_all)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Organizations],
            error_mapper=get_organizations_error_mapper,
            request_options=request_options,
        )

    def get_plan_limits(
        self, organization_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PlanLimits, GetPlanLimitsErrorBody]:
        """Returns all plan limits and counts available for an organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{organization_guid}/plan_limits"),
            path_params=[param[str]("organization_guid", organization_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PlanLimits],
            error_mapper=get_plan_limits_error_mapper,
            request_options=request_options,
        )


class AsyncOrganizationsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_organization(
        self, organization_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Organization, GetOrganizationErrorBody]:
        """Retrive details for the specified organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{organization_guid}"),
            path_params=[param[str]("organization_guid", organization_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Organization],
            error_mapper=get_organization_error_mapper,
            request_options=request_options,
        )

    async def get_organization_shorten_counts(
        self,
        organization_guid: str,
        *,
        unit: TimeUnitOrStr = TimeUnit.DAY,
        units: int = -1,
        unit_reference: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Metrics, GetOrganizationShortenCountsErrorBody]:
        """Returns the shorten counts for a specific organization over a specified time period.

        Args:
            organization_guid: A GUID for a Bitly organization
            unit: A unit of time
            units: An integer representing the time units to query data for. pass -1 to return all units of time
            unit_reference: An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will
                default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':'
                with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{organization_guid}/shorten_counts"),
            path_params=[param[str]("organization_guid", organization_guid)],
            query_params=[
                param[TimeUnitOrStr]("unit", unit),
                param[int]("units", units),
                param[str | None]("unit_reference", unit_reference),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Metrics],
            error_mapper=get_organization_shorten_counts_error_mapper,
            request_options=request_options,
        )

    async def get_organization_shorten_counts_by_group(
        self, organization_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Metrics, GetOrganizationShortenCountsByGroupErrorBody]:
        """Returns the shorten counts for a specific organization by group for the current month.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{organization_guid}/shorten_counts_by_group"),
            path_params=[param[str]("organization_guid", organization_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Metrics],
            error_mapper=get_organization_shorten_counts_by_group_error_mapper,
            request_options=request_options,
        )

    async def get_organizations(
        self, *, include_all: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Organizations, GetOrganizationsErrorBody]:
        """Retrieve a list of organizations for the authenticated user. By default, only organizations permitted by the
        token's allowed_orgs are returned. Use include_all=true to return all organizations regardless of token
        restrictions. Each organization is annotated with its authentication requirements (require_sso, require_2fa)
        when configured.

        Args:
            include_all: When set to true, returns all of the user's organizations regardless of the token's
                allowed_orgs restrictions.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations"),
            query_params=[param[bool | None]("include_all", include_all)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Organizations],
            error_mapper=get_organizations_error_mapper,
            request_options=request_options,
        )

    async def get_plan_limits(
        self, organization_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PlanLimits, GetPlanLimitsErrorBody]:
        """Returns all plan limits and counts available for an organization.

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{organization_guid}/plan_limits"),
            path_params=[param[str]("organization_guid", organization_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PlanLimits],
            error_mapper=get_plan_limits_error_mapper,
            request_options=request_options,
        )
