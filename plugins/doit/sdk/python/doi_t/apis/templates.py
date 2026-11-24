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
from ..errors.get_cloudflow_template2_error import GetCloudflowTemplate2ErrorBody, get_cloudflow_template2_error_mapper
from ..errors.list_cloudflow_templates2_error import (
    ListCloudflowTemplates2ErrorBody,
    list_cloudflow_templates2_error_mapper,
)
from ..models.cloudflow_template import CloudflowTemplate
from ..models.cloudflow_template_list_response import CloudflowTemplateListResponse
from ..server.server import Server


class Templates:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TemplatesWithRawResponse(client, server, auth)

    def get_cloudflow_template2(
        self, template_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CloudflowTemplate:
        """Returns a single CloudFlow template by ID.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_cloudflow_template2(template_id, request_options=request_options))

    def list_cloudflow_templates2(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudflowTemplateListResponse:
        """Returns the catalogue of available CloudFlow templates (blueprints). Templates are read-only. To create a
        flow from a template, use ``POST /flows`` with a ``templateId``.

        Args:
            max_results: Maximum number of templates to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_cloudflow_templates2(
                max_results=max_results, page_token=page_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TemplatesWithRawResponse:
        return self._with_raw_response


class AsyncTemplates:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTemplatesWithRawResponse(client, server, auth)

    async def get_cloudflow_template2(
        self, template_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CloudflowTemplate:
        """Returns a single CloudFlow template by ID.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cloudflow_template2(template_id, request_options=request_options)
        )

    async def list_cloudflow_templates2(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudflowTemplateListResponse:
        """Returns the catalogue of available CloudFlow templates (blueprints). Templates are read-only. To create a
        flow from a template, use ``POST /flows`` with a ``templateId``.

        Args:
            max_results: Maximum number of templates to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_cloudflow_templates2(
                max_results=max_results, page_token=page_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTemplatesWithRawResponse:
        return self._with_raw_response


class TemplatesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_cloudflow_template2(
        self, template_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowTemplate, GetCloudflowTemplate2ErrorBody]:
        """Returns a single CloudFlow template by ID.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/templates/{templateId}"),
            path_params=[param[str]("templateId", template_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowTemplate],
            error_mapper=get_cloudflow_template2_error_mapper,
            request_options=request_options,
        )

    def list_cloudflow_templates2(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowTemplateListResponse, ListCloudflowTemplates2ErrorBody]:
        """Returns the catalogue of available CloudFlow templates (blueprints). Templates are read-only. To create a
        flow from a template, use ``POST /flows`` with a ``templateId``.

        Args:
            max_results: Maximum number of templates to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/templates"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudflowTemplateListResponse],
            error_mapper=list_cloudflow_templates2_error_mapper,
            request_options=request_options,
        )


class AsyncTemplatesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_cloudflow_template2(
        self, template_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CloudflowTemplate, GetCloudflowTemplate2ErrorBody]:
        """Returns a single CloudFlow template by ID.

        Args:
            template_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/templates/{templateId}"),
            path_params=[param[str]("templateId", template_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowTemplate],
            error_mapper=get_cloudflow_template2_error_mapper,
            request_options=request_options,
        )

    async def list_cloudflow_templates2(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudflowTemplateListResponse, ListCloudflowTemplates2ErrorBody]:
        """Returns the catalogue of available CloudFlow templates (blueprints). Templates are read-only. To create a
        flow from a template, use ``POST /flows`` with a ``templateId``.

        Args:
            max_results: Maximum number of templates to return (1–500). Defaults to 50.
            page_token: Opaque cursor for the next page, taken from ``pageToken`` in the previous response. Omit to
                start from the beginning.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/cloudflow/v1/templates"),
            query_params=[param[int | None]("maxResults", max_results), param[str | None]("pageToken", page_token)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudflowTemplateListResponse],
            error_mapper=list_cloudflow_templates2_error_mapper,
            request_options=request_options,
        )
