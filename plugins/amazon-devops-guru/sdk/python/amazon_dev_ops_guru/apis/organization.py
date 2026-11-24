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
from ..errors.describe_organization_health_error import (
    DescribeOrganizationHealthErrorBody,
    describe_organization_health_error_mapper,
)
from ..errors.describe_organization_overview_error import (
    DescribeOrganizationOverviewErrorBody,
    describe_organization_overview_error_mapper,
)
from ..errors.describe_organization_resource_collection_health_error import (
    DescribeOrganizationResourceCollectionHealthErrorBody,
    describe_organization_resource_collection_health_error_mapper,
)
from ..errors.list_organization_insights_error import (
    ListOrganizationInsightsErrorBody,
    list_organization_insights_error_mapper,
)
from ..errors.search_organization_insights_error import (
    SearchOrganizationInsightsErrorBody,
    search_organization_insights_error_mapper,
)
from ..models.describe_organization_health_response import DescribeOrganizationHealthResponse
from ..models.describe_organization_overview_response import DescribeOrganizationOverviewResponse
from ..models.describe_organization_resource_collection_health_response import (
    DescribeOrganizationResourceCollectionHealthResponse,
)
from ..models.list_organization_insights_response import ListOrganizationInsightsResponse
from ..models.organization_health_request import OrganizationHealthRequest, OrganizationHealthRequestDict
from ..models.organization_health_resource_collection_request import (
    OrganizationHealthResourceCollectionRequest,
    OrganizationHealthResourceCollectionRequestDict,
)
from ..models.organization_insights_request import OrganizationInsightsRequest, OrganizationInsightsRequestDict
from ..models.organization_insights_search_request import (
    OrganizationInsightsSearchRequest,
    OrganizationInsightsSearchRequestDict,
)
from ..models.organization_overview_request import OrganizationOverviewRequest, OrganizationOverviewRequestDict
from ..models.search_organization_insights_response import SearchOrganizationInsightsResponse
from ..server.server import Server


class Organization:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OrganizationWithRawResponse(client, server, auth)

    def describe_organization_health(
        self,
        *,
        body: OrganizationHealthRequest | OrganizationHealthRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeOrganizationHealthResponse:
        """Returns active insights, predictive insights, and resource hours analyzed in last hour.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.describe_organization_health(body=body, request_options=request_options))

    def describe_organization_overview(
        self,
        *,
        body: OrganizationOverviewRequest | OrganizationOverviewRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeOrganizationOverviewResponse:
        """Returns an overview of your organization's history based on the specified time range. The overview includes
        the total reactive and proactive insights.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            self._with_raw_response.describe_organization_overview(body=body, request_options=request_options)
        )

    def describe_organization_resource_collection_health(
        self,
        *,
        body: (
            OrganizationHealthResourceCollectionRequest | OrganizationHealthResourceCollectionRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeOrganizationResourceCollectionHealthResponse:
        """Provides an overview of your system's health. If additional member accounts are part of your organization,
        you can filter those accounts using the AccountIds field.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            self._with_raw_response.describe_organization_resource_collection_health(
                body=body, request_options=request_options
            ),
        )

    def list_organization_insights(
        self,
        *,
        body: OrganizationInsightsRequest | OrganizationInsightsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListOrganizationInsightsResponse:
        """Returns a list of insights associated with the account or OU Id.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.list_organization_insights(body=body, request_options=request_options))

    def search_organization_insights(
        self,
        *,
        body: OrganizationInsightsSearchRequest | OrganizationInsightsSearchRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchOrganizationInsightsResponse:
        """Returns a list of insights in your organization. You can specify which insights are returned by their start
        time, one or more statuses (ONGOING, CLOSED, and CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and
        type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use
        the Type parameter to specify REACTIVE or PROACTIVE in your search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.search_organization_insights(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> OrganizationWithRawResponse:
        return self._with_raw_response


class AsyncOrganization:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOrganizationWithRawResponse(client, server, auth)

    async def describe_organization_health(
        self,
        *,
        body: OrganizationHealthRequest | OrganizationHealthRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeOrganizationHealthResponse:
        """Returns active insights, predictive insights, and resource hours analyzed in last hour.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.describe_organization_health(body=body, request_options=request_options)
        )

    async def describe_organization_overview(
        self,
        *,
        body: OrganizationOverviewRequest | OrganizationOverviewRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeOrganizationOverviewResponse:
        """Returns an overview of your organization's history based on the specified time range. The overview includes
        the total reactive and proactive insights.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.describe_organization_overview(body=body, request_options=request_options)
        )

    async def describe_organization_resource_collection_health(
        self,
        *,
        body: (
            OrganizationHealthResourceCollectionRequest | OrganizationHealthResourceCollectionRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeOrganizationResourceCollectionHealthResponse:
        """Provides an overview of your system's health. If additional member accounts are part of your organization,
        you can filter those accounts using the AccountIds field.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.describe_organization_resource_collection_health(
                body=body, request_options=request_options
            ),
        )

    async def list_organization_insights(
        self,
        *,
        body: OrganizationInsightsRequest | OrganizationInsightsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListOrganizationInsightsResponse:
        """Returns a list of insights associated with the account or OU Id.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_organization_insights(body=body, request_options=request_options)
        )

    async def search_organization_insights(
        self,
        *,
        body: OrganizationInsightsSearchRequest | OrganizationInsightsSearchRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchOrganizationInsightsResponse:
        """Returns a list of insights in your organization. You can specify which insights are returned by their start
        time, one or more statuses (ONGOING, CLOSED, and CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and
        type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use
        the Type parameter to specify REACTIVE or PROACTIVE in your search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ThrottlingException ValidationException ``error`` is
                ``ValidationException | AccessDeniedException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.search_organization_insights(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncOrganizationWithRawResponse:
        return self._with_raw_response


class OrganizationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def describe_organization_health(
        self,
        *,
        body: OrganizationHealthRequest | OrganizationHealthRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeOrganizationHealthResponse, DescribeOrganizationHealthErrorBody]:
        """Returns active insights, predictive insights, and resource hours analyzed in last hour.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organization/health"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrganizationHealthRequest | OrganizationHealthRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeOrganizationHealthResponse],
            error_mapper=describe_organization_health_error_mapper,
            request_options=request_options,
        )

    def describe_organization_overview(
        self,
        *,
        body: OrganizationOverviewRequest | OrganizationOverviewRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeOrganizationOverviewResponse, DescribeOrganizationOverviewErrorBody]:
        """Returns an overview of your organization's history based on the specified time range. The overview includes
        the total reactive and proactive insights.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organization/overview"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrganizationOverviewRequest | OrganizationOverviewRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeOrganizationOverviewResponse],
            error_mapper=describe_organization_overview_error_mapper,
            request_options=request_options,
        )

    def describe_organization_resource_collection_health(
        self,
        *,
        body: (
            OrganizationHealthResourceCollectionRequest | OrganizationHealthResourceCollectionRequestDict | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        DescribeOrganizationResourceCollectionHealthResponse, DescribeOrganizationResourceCollectionHealthErrorBody
    ]:
        """Provides an overview of your system's health. If additional member accounts are part of your organization,
        you can filter those accounts using the AccountIds field.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organization/health/resource-collection"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                OrganizationHealthResourceCollectionRequest | OrganizationHealthResourceCollectionRequestDict | None
            ](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeOrganizationResourceCollectionHealthResponse],
            error_mapper=describe_organization_resource_collection_health_error_mapper,
            request_options=request_options,
        )

    def list_organization_insights(
        self,
        *,
        body: OrganizationInsightsRequest | OrganizationInsightsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListOrganizationInsightsResponse, ListOrganizationInsightsErrorBody]:
        """Returns a list of insights associated with the account or OU Id.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organization/insights"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrganizationInsightsRequest | OrganizationInsightsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListOrganizationInsightsResponse],
            error_mapper=list_organization_insights_error_mapper,
            request_options=request_options,
        )

    def search_organization_insights(
        self,
        *,
        body: OrganizationInsightsSearchRequest | OrganizationInsightsSearchRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchOrganizationInsightsResponse, SearchOrganizationInsightsErrorBody]:
        """Returns a list of insights in your organization. You can specify which insights are returned by their start
        time, one or more statuses (ONGOING, CLOSED, and CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and
        type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use
        the Type parameter to specify REACTIVE or PROACTIVE in your search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organization/insights/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrganizationInsightsSearchRequest | OrganizationInsightsSearchRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[SearchOrganizationInsightsResponse],
            error_mapper=search_organization_insights_error_mapper,
            request_options=request_options,
        )


class AsyncOrganizationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def describe_organization_health(
        self,
        *,
        body: OrganizationHealthRequest | OrganizationHealthRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeOrganizationHealthResponse, DescribeOrganizationHealthErrorBody]:
        """Returns active insights, predictive insights, and resource hours analyzed in last hour.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organization/health"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrganizationHealthRequest | OrganizationHealthRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeOrganizationHealthResponse],
            error_mapper=describe_organization_health_error_mapper,
            request_options=request_options,
        )

    async def describe_organization_overview(
        self,
        *,
        body: OrganizationOverviewRequest | OrganizationOverviewRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeOrganizationOverviewResponse, DescribeOrganizationOverviewErrorBody]:
        """Returns an overview of your organization's history based on the specified time range. The overview includes
        the total reactive and proactive insights.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organization/overview"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrganizationOverviewRequest | OrganizationOverviewRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeOrganizationOverviewResponse],
            error_mapper=describe_organization_overview_error_mapper,
            request_options=request_options,
        )

    async def describe_organization_resource_collection_health(
        self,
        *,
        body: (
            OrganizationHealthResourceCollectionRequest | OrganizationHealthResourceCollectionRequestDict | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        DescribeOrganizationResourceCollectionHealthResponse, DescribeOrganizationResourceCollectionHealthErrorBody
    ]:
        """Provides an overview of your system's health. If additional member accounts are part of your organization,
        you can filter those accounts using the AccountIds field.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organization/health/resource-collection"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                OrganizationHealthResourceCollectionRequest | OrganizationHealthResourceCollectionRequestDict | None
            ](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeOrganizationResourceCollectionHealthResponse],
            error_mapper=describe_organization_resource_collection_health_error_mapper,
            request_options=request_options,
        )

    async def list_organization_insights(
        self,
        *,
        body: OrganizationInsightsRequest | OrganizationInsightsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListOrganizationInsightsResponse, ListOrganizationInsightsErrorBody]:
        """Returns a list of insights associated with the account or OU Id.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organization/insights"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrganizationInsightsRequest | OrganizationInsightsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListOrganizationInsightsResponse],
            error_mapper=list_organization_insights_error_mapper,
            request_options=request_options,
        )

    async def search_organization_insights(
        self,
        *,
        body: OrganizationInsightsSearchRequest | OrganizationInsightsSearchRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchOrganizationInsightsResponse, SearchOrganizationInsightsErrorBody]:
        """Returns a list of insights in your organization. You can specify which insights are returned by their start
        time, one or more statuses (ONGOING, CLOSED, and CLOSED), one or more severities (LOW, MEDIUM, and HIGH), and
        type (REACTIVE or PROACTIVE). Use the Filters parameter to specify status and severity search parameters. Use
        the Type parameter to specify REACTIVE or PROACTIVE in your search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organization/insights/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrganizationInsightsSearchRequest | OrganizationInsightsSearchRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[SearchOrganizationInsightsResponse],
            error_mapper=search_organization_insights_error_mapper,
            request_options=request_options,
        )
