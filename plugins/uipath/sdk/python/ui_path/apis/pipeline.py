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
    unwrap,
)
from ..errors.get_automation_pipeline_error import GetAutomationPipelineErrorBody, get_automation_pipeline_error_mapper
from ..models.pipeline_data import PipelineData
from ..server.server import Server


class Pipeline:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PipelineWithRawResponse(client, server, auth)

    def get_automation_pipeline(self, *, request_options: RequestOptionsOrDict | None = None) -> PipelineData:
        """Retrieves aggregated pipeline data showing the distribution of automations across phases and statuses. Used
        for reporting and dashboard views by CoE administrators to understand the overall health and throughput of the
        automation program.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation pipeline summary data

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(self._with_raw_response.get_automation_pipeline(request_options=request_options))

    @property
    def with_raw_response(self) -> PipelineWithRawResponse:
        return self._with_raw_response


class AsyncPipeline:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPipelineWithRawResponse(client, server, auth)

    async def get_automation_pipeline(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PipelineData:
        """Retrieves aggregated pipeline data showing the distribution of automations across phases and statuses. Used
        for reporting and dashboard views by CoE administrators to understand the overall health and throughput of the
        automation program.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Automation pipeline summary data

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is
                ``ErrorResponseUiPathAutomationHubAppInventoryApi | RawError``."""
        return unwrap(await self._with_raw_response.get_automation_pipeline(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPipelineWithRawResponse:
        return self._with_raw_response


class PipelineWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_automation_pipeline(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineData, GetAutomationPipelineErrorBody]:
        """Retrieves aggregated pipeline data showing the distribution of automations across phases and statuses. Used
        for reporting and dashboard views by CoE administrators to understand the overall health and throughput of the
        automation program.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automationpipeline"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[PipelineData],
            error_mapper=get_automation_pipeline_error_mapper,
            request_options=request_options,
        )


class AsyncPipelineWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_automation_pipeline(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PipelineData, GetAutomationPipelineErrorBody]:
        """Retrieves aggregated pipeline data showing the distribution of automations across phases and statuses. Used
        for reporting and dashboard views by CoE administrators to understand the overall health and throughput of the
        automation program.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_automation_hub_app_inventory_api("/automationpipeline"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[PipelineData],
            error_mapper=get_automation_pipeline_error_mapper,
            request_options=request_options,
        )
