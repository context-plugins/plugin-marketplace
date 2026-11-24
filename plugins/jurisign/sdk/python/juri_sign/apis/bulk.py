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
from ..errors.cancel_bulk_campaign_error import CancelBulkCampaignErrorBody, cancel_bulk_campaign_error_mapper
from ..errors.create_bulk_campaign_error import CreateBulkCampaignErrorBody, create_bulk_campaign_error_mapper
from ..errors.create_bulk_template_error import CreateBulkTemplateErrorBody, create_bulk_template_error_mapper
from ..errors.delete_bulk_campaign_error import DeleteBulkCampaignErrorBody, delete_bulk_campaign_error_mapper
from ..errors.delete_bulk_template_error import DeleteBulkTemplateErrorBody, delete_bulk_template_error_mapper
from ..errors.export_bulk_campaign_results_error import (
    ExportBulkCampaignResultsErrorBody,
    export_bulk_campaign_results_error_mapper,
)
from ..errors.get_bulk_campaign_error import GetBulkCampaignErrorBody, get_bulk_campaign_error_mapper
from ..errors.get_bulk_template_error import GetBulkTemplateErrorBody, get_bulk_template_error_mapper
from ..errors.launch_bulk_campaign_error import LaunchBulkCampaignErrorBody, launch_bulk_campaign_error_mapper
from ..errors.list_bulk_campaigns_error import ListBulkCampaignsErrorBody, list_bulk_campaigns_error_mapper
from ..errors.list_bulk_templates_error import ListBulkTemplatesErrorBody, list_bulk_templates_error_mapper
from ..errors.retry_bulk_campaign_error import RetryBulkCampaignErrorBody, retry_bulk_campaign_error_mapper
from ..errors.update_bulk_template_error import UpdateBulkTemplateErrorBody, update_bulk_template_error_mapper
from ..models.bulk_campaigns_cancel_response import BulkCampaignsCancelResponse
from ..models.bulk_campaigns_export_response import BulkCampaignsExportResponse
from ..models.bulk_campaigns_launch_response import BulkCampaignsLaunchResponse
from ..models.bulk_campaigns_request import BulkCampaignsRequest, BulkCampaignsRequestDict
from ..models.bulk_campaigns_response import BulkCampaignsResponse
from ..models.bulk_campaigns_response1 import BulkCampaignsResponse1
from ..models.bulk_campaigns_response2 import BulkCampaignsResponse2
from ..models.bulk_campaigns_retry_response import BulkCampaignsRetryResponse
from ..models.bulk_templates_request import BulkTemplatesRequest, BulkTemplatesRequestDict
from ..models.bulk_templates_request1 import BulkTemplatesRequest1, BulkTemplatesRequest1Dict
from ..models.bulk_templates_response import BulkTemplatesResponse
from ..models.bulk_templates_response1 import BulkTemplatesResponse1
from ..models.message_response import MessageResponse
from ..server.server import Server


class Bulk:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BulkWithRawResponse(client, server, auth)

    def cancel_bulk_campaign(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BulkCampaignsCancelResponse:
        """Send a ``POST`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign cancelled

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(self._with_raw_response.cancel_bulk_campaign(id_, request_options=request_options))

    def create_bulk_campaign(
        self,
        body: BulkCampaignsRequest | BulkCampaignsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkCampaignsResponse1:
        """Create a bulk campaign with recipients provided directly as JSON (no Excel upload needed for API clients).
        Each recipient generates one individualized sign request, merged from the bulk template. Invalid rows (missing
        fields, invalid email, duplicate email) are skipped and reported in ``skipped_recipients``, not fatal.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign created (draft, not yet launched)

        Raises:
            ApiError: Missing or invalid Bearer token Validation error ``error`` is ``MessageResponse | ValidationError1
                | RawError``."""
        return unwrap(self._with_raw_response.create_bulk_campaign(body, request_options=request_options))

    def create_bulk_template(
        self,
        body: BulkTemplatesRequest | BulkTemplatesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkTemplatesResponse1:
        """Create a merge-field HTML template (e.g. ` Bonjour {{prenom}} {{nom}} `). Merge fields are auto-extracted
        from the content.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk template created

        Raises:
            ApiError: Missing or invalid Bearer token Validation error ``error`` is ``MessageResponse | ValidationError1
                | RawError``."""
        return unwrap(self._with_raw_response.create_bulk_template(body, request_options=request_options))

    def delete_bulk_campaign(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Fails with 422 if the campaign is currently processing.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk campaign deleted

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(self._with_raw_response.delete_bulk_campaign(id_, request_options=request_options))

    def delete_bulk_template(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Fails with 422 if the template is still referenced by a campaign.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk template deleted

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(self._with_raw_response.delete_bulk_template(id_, request_options=request_options))

    def export_bulk_campaign_results(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BulkCampaignsExportResponse:
        """Per-recipient status, send/sign timestamps, and error messages.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recipient results

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.export_bulk_campaign_results(id_, request_options=request_options))

    def get_bulk_campaign(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BulkCampaignsResponse2:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk campaign details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.get_bulk_campaign(id_, request_options=request_options))

    def get_bulk_template(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BulkTemplatesResponse1:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk template details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.get_bulk_template(id_, request_options=request_options))

    def launch_bulk_campaign(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BulkCampaignsLaunchResponse:
        """Dispatches an asynchronous job that generates each recipient's document, creates their sign request, and
        sends it. Fails with 422 if the organization does not have enough remaining credits.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign launched (status: processing)

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(self._with_raw_response.launch_bulk_campaign(id_, request_options=request_options))

    def list_bulk_campaigns(
        self,
        *,
        status: str | None = None,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkCampaignsResponse:
        """Send a ``GET`` request.

        Args:
            status: Value sent with the request.
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk campaigns list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_bulk_campaigns(
                status=status, per_page=per_page, request_options=request_options
            ),
        )

    def list_bulk_templates(self, *, request_options: RequestOptionsOrDict | None = None) -> BulkTemplatesResponse:
        """Retrieve reusable merge-field HTML templates used by bulk campaigns.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk templates list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.list_bulk_templates(request_options=request_options))

    def retry_bulk_campaign(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BulkCampaignsRetryResponse:
        """Resets recipients in error back to pending so the campaign can be launched again.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Failed recipients reset

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(self._with_raw_response.retry_bulk_campaign(id_, request_options=request_options))

    def update_bulk_template(
        self,
        id_: UUID,
        *,
        body: BulkTemplatesRequest1 | BulkTemplatesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkTemplatesResponse1:
        """Send a ``PUT`` request.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk template updated

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.update_bulk_template(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> BulkWithRawResponse:
        return self._with_raw_response


class AsyncBulk:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBulkWithRawResponse(client, server, auth)

    async def cancel_bulk_campaign(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BulkCampaignsCancelResponse:
        """Send a ``POST`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign cancelled

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.cancel_bulk_campaign(id_, request_options=request_options))

    async def create_bulk_campaign(
        self,
        body: BulkCampaignsRequest | BulkCampaignsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkCampaignsResponse1:
        """Create a bulk campaign with recipients provided directly as JSON (no Excel upload needed for API clients).
        Each recipient generates one individualized sign request, merged from the bulk template. Invalid rows (missing
        fields, invalid email, duplicate email) are skipped and reported in ``skipped_recipients``, not fatal.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign created (draft, not yet launched)

        Raises:
            ApiError: Missing or invalid Bearer token Validation error ``error`` is ``MessageResponse | ValidationError1
                | RawError``."""
        return unwrap(await self._with_raw_response.create_bulk_campaign(body, request_options=request_options))

    async def create_bulk_template(
        self,
        body: BulkTemplatesRequest | BulkTemplatesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkTemplatesResponse1:
        """Create a merge-field HTML template (e.g. ` Bonjour {{prenom}} {{nom}} `). Merge fields are auto-extracted
        from the content.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk template created

        Raises:
            ApiError: Missing or invalid Bearer token Validation error ``error`` is ``MessageResponse | ValidationError1
                | RawError``."""
        return unwrap(await self._with_raw_response.create_bulk_template(body, request_options=request_options))

    async def delete_bulk_campaign(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Fails with 422 if the campaign is currently processing.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk campaign deleted

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_bulk_campaign(id_, request_options=request_options))

    async def delete_bulk_template(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Fails with 422 if the template is still referenced by a campaign.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk template deleted

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_bulk_template(id_, request_options=request_options))

    async def export_bulk_campaign_results(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BulkCampaignsExportResponse:
        """Per-recipient status, send/sign timestamps, and error messages.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recipient results

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.export_bulk_campaign_results(id_, request_options=request_options))

    async def get_bulk_campaign(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BulkCampaignsResponse2:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk campaign details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_bulk_campaign(id_, request_options=request_options))

    async def get_bulk_template(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BulkTemplatesResponse1:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk template details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_bulk_template(id_, request_options=request_options))

    async def launch_bulk_campaign(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BulkCampaignsLaunchResponse:
        """Dispatches an asynchronous job that generates each recipient's document, creates their sign request, and
        sends it. Fails with 422 if the organization does not have enough remaining credits.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign launched (status: processing)

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.launch_bulk_campaign(id_, request_options=request_options))

    async def list_bulk_campaigns(
        self,
        *,
        status: str | None = None,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkCampaignsResponse:
        """Send a ``GET`` request.

        Args:
            status: Value sent with the request.
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk campaigns list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_bulk_campaigns(
                status=status, per_page=per_page, request_options=request_options
            ),
        )

    async def list_bulk_templates(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BulkTemplatesResponse:
        """Retrieve reusable merge-field HTML templates used by bulk campaigns.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk templates list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_bulk_templates(request_options=request_options))

    async def retry_bulk_campaign(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BulkCampaignsRetryResponse:
        """Resets recipients in error back to pending so the campaign can be launched again.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Failed recipients reset

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.retry_bulk_campaign(id_, request_options=request_options))

    async def update_bulk_template(
        self,
        id_: UUID,
        *,
        body: BulkTemplatesRequest1 | BulkTemplatesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkTemplatesResponse1:
        """Send a ``PUT`` request.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bulk template updated

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_bulk_template(id_, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncBulkWithRawResponse:
        return self._with_raw_response


class BulkWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_bulk_campaign(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkCampaignsCancelResponse, CancelBulkCampaignErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk-campaigns/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkCampaignsCancelResponse],
            error_mapper=cancel_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    def create_bulk_campaign(
        self,
        body: BulkCampaignsRequest | BulkCampaignsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkCampaignsResponse1, CreateBulkCampaignErrorBody]:
        """Create a bulk campaign with recipients provided directly as JSON (no Excel upload needed for API clients).
        Each recipient generates one individualized sign request, merged from the bulk template. Invalid rows (missing
        fields, invalid email, duplicate email) are skipped and reported in ``skipped_recipients``, not fatal.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk-campaigns"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkCampaignsRequest | BulkCampaignsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkCampaignsResponse1],
            error_mapper=create_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    def create_bulk_template(
        self,
        body: BulkTemplatesRequest | BulkTemplatesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkTemplatesResponse1, CreateBulkTemplateErrorBody]:
        """Create a merge-field HTML template (e.g. ` Bonjour {{prenom}} {{nom}} `). Merge fields are auto-extracted
        from the content.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk-templates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkTemplatesRequest | BulkTemplatesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkTemplatesResponse1],
            error_mapper=create_bulk_template_error_mapper,
            request_options=request_options,
        )

    def delete_bulk_campaign(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteBulkCampaignErrorBody]:
        """Fails with 422 if the campaign is currently processing.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bulk-campaigns/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    def delete_bulk_template(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteBulkTemplateErrorBody]:
        """Fails with 422 if the template is still referenced by a campaign.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bulk-templates/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_bulk_template_error_mapper,
            request_options=request_options,
        )

    def export_bulk_campaign_results(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkCampaignsExportResponse, ExportBulkCampaignResultsErrorBody]:
        """Per-recipient status, send/sign timestamps, and error messages.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk-campaigns/{id}/export"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkCampaignsExportResponse],
            error_mapper=export_bulk_campaign_results_error_mapper,
            request_options=request_options,
        )

    def get_bulk_campaign(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkCampaignsResponse2, GetBulkCampaignErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk-campaigns/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkCampaignsResponse2],
            error_mapper=get_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    def get_bulk_template(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkTemplatesResponse1, GetBulkTemplateErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk-templates/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkTemplatesResponse1],
            error_mapper=get_bulk_template_error_mapper,
            request_options=request_options,
        )

    def launch_bulk_campaign(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkCampaignsLaunchResponse, LaunchBulkCampaignErrorBody]:
        """Dispatches an asynchronous job that generates each recipient's document, creates their sign request, and
        sends it. Fails with 422 if the organization does not have enough remaining credits.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk-campaigns/{id}/launch"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkCampaignsLaunchResponse],
            error_mapper=launch_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    def list_bulk_campaigns(
        self,
        *,
        status: str | None = None,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkCampaignsResponse, ListBulkCampaignsErrorBody]:
        """Send a ``GET`` request.

        Args:
            status: Value sent with the request.
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk-campaigns"),
            query_params=[param[str | None]("status", status), param[int | None]("per_page", per_page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkCampaignsResponse],
            error_mapper=list_bulk_campaigns_error_mapper,
            request_options=request_options,
        )

    def list_bulk_templates(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkTemplatesResponse, ListBulkTemplatesErrorBody]:
        """Retrieve reusable merge-field HTML templates used by bulk campaigns.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk-templates"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkTemplatesResponse],
            error_mapper=list_bulk_templates_error_mapper,
            request_options=request_options,
        )

    def retry_bulk_campaign(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BulkCampaignsRetryResponse, RetryBulkCampaignErrorBody]:
        """Resets recipients in error back to pending so the campaign can be launched again.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk-campaigns/{id}/retry"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkCampaignsRetryResponse],
            error_mapper=retry_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    def update_bulk_template(
        self,
        id_: UUID,
        *,
        body: BulkTemplatesRequest1 | BulkTemplatesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkTemplatesResponse1, UpdateBulkTemplateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/bulk-templates/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkTemplatesRequest1 | BulkTemplatesRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkTemplatesResponse1],
            error_mapper=update_bulk_template_error_mapper,
            request_options=request_options,
        )


class AsyncBulkWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_bulk_campaign(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BulkCampaignsCancelResponse, CancelBulkCampaignErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk-campaigns/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkCampaignsCancelResponse],
            error_mapper=cancel_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    async def create_bulk_campaign(
        self,
        body: BulkCampaignsRequest | BulkCampaignsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkCampaignsResponse1, CreateBulkCampaignErrorBody]:
        """Create a bulk campaign with recipients provided directly as JSON (no Excel upload needed for API clients).
        Each recipient generates one individualized sign request, merged from the bulk template. Invalid rows (missing
        fields, invalid email, duplicate email) are skipped and reported in ``skipped_recipients``, not fatal.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk-campaigns"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkCampaignsRequest | BulkCampaignsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkCampaignsResponse1],
            error_mapper=create_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    async def create_bulk_template(
        self,
        body: BulkTemplatesRequest | BulkTemplatesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkTemplatesResponse1, CreateBulkTemplateErrorBody]:
        """Create a merge-field HTML template (e.g. ` Bonjour {{prenom}} {{nom}} `). Merge fields are auto-extracted
        from the content.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk-templates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkTemplatesRequest | BulkTemplatesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkTemplatesResponse1],
            error_mapper=create_bulk_template_error_mapper,
            request_options=request_options,
        )

    async def delete_bulk_campaign(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteBulkCampaignErrorBody]:
        """Fails with 422 if the campaign is currently processing.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bulk-campaigns/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    async def delete_bulk_template(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteBulkTemplateErrorBody]:
        """Fails with 422 if the template is still referenced by a campaign.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bulk-templates/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_bulk_template_error_mapper,
            request_options=request_options,
        )

    async def export_bulk_campaign_results(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BulkCampaignsExportResponse, ExportBulkCampaignResultsErrorBody]:
        """Per-recipient status, send/sign timestamps, and error messages.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk-campaigns/{id}/export"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkCampaignsExportResponse],
            error_mapper=export_bulk_campaign_results_error_mapper,
            request_options=request_options,
        )

    async def get_bulk_campaign(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BulkCampaignsResponse2, GetBulkCampaignErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk-campaigns/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkCampaignsResponse2],
            error_mapper=get_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    async def get_bulk_template(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BulkTemplatesResponse1, GetBulkTemplateErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk-templates/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkTemplatesResponse1],
            error_mapper=get_bulk_template_error_mapper,
            request_options=request_options,
        )

    async def launch_bulk_campaign(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BulkCampaignsLaunchResponse, LaunchBulkCampaignErrorBody]:
        """Dispatches an asynchronous job that generates each recipient's document, creates their sign request, and
        sends it. Fails with 422 if the organization does not have enough remaining credits.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk-campaigns/{id}/launch"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkCampaignsLaunchResponse],
            error_mapper=launch_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    async def list_bulk_campaigns(
        self,
        *,
        status: str | None = None,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkCampaignsResponse, ListBulkCampaignsErrorBody]:
        """Send a ``GET`` request.

        Args:
            status: Value sent with the request.
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk-campaigns"),
            query_params=[param[str | None]("status", status), param[int | None]("per_page", per_page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkCampaignsResponse],
            error_mapper=list_bulk_campaigns_error_mapper,
            request_options=request_options,
        )

    async def list_bulk_templates(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BulkTemplatesResponse, ListBulkTemplatesErrorBody]:
        """Retrieve reusable merge-field HTML templates used by bulk campaigns.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk-templates"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkTemplatesResponse],
            error_mapper=list_bulk_templates_error_mapper,
            request_options=request_options,
        )

    async def retry_bulk_campaign(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BulkCampaignsRetryResponse, RetryBulkCampaignErrorBody]:
        """Resets recipients in error back to pending so the campaign can be launched again.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk-campaigns/{id}/retry"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkCampaignsRetryResponse],
            error_mapper=retry_bulk_campaign_error_mapper,
            request_options=request_options,
        )

    async def update_bulk_template(
        self,
        id_: UUID,
        *,
        body: BulkTemplatesRequest1 | BulkTemplatesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkTemplatesResponse1, UpdateBulkTemplateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            id_: Resource UUID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/bulk-templates/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkTemplatesRequest1 | BulkTemplatesRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkTemplatesResponse1],
            error_mapper=update_bulk_template_error_mapper,
            request_options=request_options,
        )
