from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
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
from ..errors.list_service_quotas_error import ListServiceQuotasErrorBody, list_service_quotas_error_mapper
from ..models.enums.cloud_provider1 import CloudProvider1OrStr
from ..models.service_quota_list import ServiceQuotaList
from ..server.server import Server


class ServiceQuotas:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ServiceQuotasWithRawResponse(client, server, auth)

    def list_service_quotas(
        self,
        *,
        cloud_provider: CloudProvider1OrStr | None = None,
        min_utilization_percent: float | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ServiceQuotaList:
        """Returns the latest service quota usage snapshots collected by DoiT for the authenticated customer. Results
        include only quotas retained by DoiT's monitoring collectors and are not a complete or live inventory from the
        cloud providers. Results are sorted by utilization percentage in descending order.

        Args:
            cloud_provider: Filter results to a cloud provider. Omit to return all supported providers.
            min_utilization_percent: Return quotas whose utilization percentage is greater than or equal to this value.
            max_results: Maximum number of results to return in one page.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Service quotas returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_service_quotas(
                cloud_provider=cloud_provider,
                min_utilization_percent=min_utilization_percent,
                max_results=max_results,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ServiceQuotasWithRawResponse:
        return self._with_raw_response


class AsyncServiceQuotas:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncServiceQuotasWithRawResponse(client, server, auth)

    async def list_service_quotas(
        self,
        *,
        cloud_provider: CloudProvider1OrStr | None = None,
        min_utilization_percent: float | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ServiceQuotaList:
        """Returns the latest service quota usage snapshots collected by DoiT for the authenticated customer. Results
        include only quotas retained by DoiT's monitoring collectors and are not a complete or live inventory from the
        cloud providers. Results are sorted by utilization percentage in descending order.

        Args:
            cloud_provider: Filter results to a cloud provider. Omit to return all supported providers.
            min_utilization_percent: Return quotas whose utilization percentage is greater than or equal to this value.
            max_results: Maximum number of results to return in one page.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Service quotas returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_service_quotas(
                cloud_provider=cloud_provider,
                min_utilization_percent=min_utilization_percent,
                max_results=max_results,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncServiceQuotasWithRawResponse:
        return self._with_raw_response


class ServiceQuotasWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_service_quotas(
        self,
        *,
        cloud_provider: CloudProvider1OrStr | None = None,
        min_utilization_percent: float | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceQuotaList, ListServiceQuotasErrorBody]:
        """Returns the latest service quota usage snapshots collected by DoiT for the authenticated customer. Results
        include only quotas retained by DoiT's monitoring collectors and are not a complete or live inventory from the
        cloud providers. Results are sorted by utilization percentage in descending order.

        Args:
            cloud_provider: Filter results to a cloud provider. Omit to return all supported providers.
            min_utilization_percent: Return quotas whose utilization percentage is greater than or equal to this value.
            max_results: Maximum number of results to return in one page.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/core/v1/service-quotas"),
            query_params=[
                param[CloudProvider1OrStr | None]("cloudProvider", cloud_provider),
                param[float | None]("minUtilizationPercent", min_utilization_percent),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ServiceQuotaList],
            error_mapper=list_service_quotas_error_mapper,
            request_options=request_options,
        )


class AsyncServiceQuotasWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_service_quotas(
        self,
        *,
        cloud_provider: CloudProvider1OrStr | None = None,
        min_utilization_percent: float | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceQuotaList, ListServiceQuotasErrorBody]:
        """Returns the latest service quota usage snapshots collected by DoiT for the authenticated customer. Results
        include only quotas retained by DoiT's monitoring collectors and are not a complete or live inventory from the
        cloud providers. Results are sorted by utilization percentage in descending order.

        Args:
            cloud_provider: Filter results to a cloud provider. Omit to return all supported providers.
            min_utilization_percent: Return quotas whose utilization percentage is greater than or equal to this value.
            max_results: Maximum number of results to return in one page.
            page_token: Page token, returned by a previous call, to request the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/core/v1/service-quotas"),
            query_params=[
                param[CloudProvider1OrStr | None]("cloudProvider", cloud_provider),
                param[float | None]("minUtilizationPercent", min_utilization_percent),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ServiceQuotaList],
            error_mapper=list_service_quotas_error_mapper,
            request_options=request_options,
        )
