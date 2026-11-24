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
from ..errors.enrich_bulk_records_error import EnrichBulkRecordsErrorBody, enrich_bulk_records_error_mapper
from ..errors.enrich_single_record_error import EnrichSingleRecordErrorBody, enrich_single_record_error_mapper
from ..models.bulk_accepted import BulkAccepted
from ..models.bulk_enrichment_request import BulkEnrichmentRequest, BulkEnrichmentRequestDict
from ..models.enrichment_result import EnrichmentResult
from ..models.single_enrichment_request import SingleEnrichmentRequest, SingleEnrichmentRequestDict
from ..server.server import Server


class Enrichment:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EnrichmentWithRawResponse(client, server, auth)

    def enrich_bulk_records(
        self,
        body: BulkEnrichmentRequest | BulkEnrichmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkAccepted:
        """Accepts up to 500 records per request and returns a polling URI. An optional callbackUrl receives a
        notification when processing completes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The bulk job was successfully accepted

        Raises:
            ApiError: The request failed due to insufficient basic input, or the JSON format is invalid Unauthorized
                request (wrong credentials or credentials have expired) Insufficient credits, or the program ID is
                invalid Server error ``error`` is ``ErrorLeadspaceApiV4EnrichmentApi | RawError``."""
        return unwrap(self._with_raw_response.enrich_bulk_records(body, request_options=request_options))

    def enrich_single_record(
        self,
        body: SingleEnrichmentRequest | SingleEnrichmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnrichmentResult:
        """Synchronously enriches one record. Account enrichment requires a company name. Person enrichment requires
        first name, last name, and one of company name, email address, or website.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The enrichment request was successfully processed

        Raises:
            ApiError: The request failed due to insufficient basic input, or the JSON format is invalid Unauthorized
                request (wrong credentials or credentials have expired) Invalid HTTP method Bad or missing HTTP headers
                Insufficient credits, or the program ID is invalid Rate limit was exceeded Server error ``error`` is
                ``ErrorLeadspaceApiV4EnrichmentApi | RawError``."""
        return unwrap(self._with_raw_response.enrich_single_record(body, request_options=request_options))

    @property
    def with_raw_response(self) -> EnrichmentWithRawResponse:
        return self._with_raw_response


class AsyncEnrichment:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEnrichmentWithRawResponse(client, server, auth)

    async def enrich_bulk_records(
        self,
        body: BulkEnrichmentRequest | BulkEnrichmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkAccepted:
        """Accepts up to 500 records per request and returns a polling URI. An optional callbackUrl receives a
        notification when processing completes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The bulk job was successfully accepted

        Raises:
            ApiError: The request failed due to insufficient basic input, or the JSON format is invalid Unauthorized
                request (wrong credentials or credentials have expired) Insufficient credits, or the program ID is
                invalid Server error ``error`` is ``ErrorLeadspaceApiV4EnrichmentApi | RawError``."""
        return unwrap(await self._with_raw_response.enrich_bulk_records(body, request_options=request_options))

    async def enrich_single_record(
        self,
        body: SingleEnrichmentRequest | SingleEnrichmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnrichmentResult:
        """Synchronously enriches one record. Account enrichment requires a company name. Person enrichment requires
        first name, last name, and one of company name, email address, or website.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The enrichment request was successfully processed

        Raises:
            ApiError: The request failed due to insufficient basic input, or the JSON format is invalid Unauthorized
                request (wrong credentials or credentials have expired) Invalid HTTP method Bad or missing HTTP headers
                Insufficient credits, or the program ID is invalid Rate limit was exceeded Server error ``error`` is
                ``ErrorLeadspaceApiV4EnrichmentApi | RawError``."""
        return unwrap(await self._with_raw_response.enrich_single_record(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEnrichmentWithRawResponse:
        return self._with_raw_response


class EnrichmentWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def enrich_bulk_records(
        self,
        body: BulkEnrichmentRequest | BulkEnrichmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkAccepted, EnrichBulkRecordsErrorBody]:
        """Accepts up to 500 records per request and returns a polling URI. An optional callbackUrl receives a
        notification when processing completes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/enrichment/enrich/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkEnrichmentRequest | BulkEnrichmentRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BulkAccepted],
            error_mapper=enrich_bulk_records_error_mapper,
            request_options=request_options,
        )

    def enrich_single_record(
        self,
        body: SingleEnrichmentRequest | SingleEnrichmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnrichmentResult, EnrichSingleRecordErrorBody]:
        """Synchronously enriches one record. Account enrichment requires a company name. Person enrichment requires
        first name, last name, and one of company name, email address, or website.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/enrichment/enrich/single"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SingleEnrichmentRequest | SingleEnrichmentRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EnrichmentResult],
            error_mapper=enrich_single_record_error_mapper,
            request_options=request_options,
        )


class AsyncEnrichmentWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def enrich_bulk_records(
        self,
        body: BulkEnrichmentRequest | BulkEnrichmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkAccepted, EnrichBulkRecordsErrorBody]:
        """Accepts up to 500 records per request and returns a polling URI. An optional callbackUrl receives a
        notification when processing completes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/enrichment/enrich/bulk"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkEnrichmentRequest | BulkEnrichmentRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BulkAccepted],
            error_mapper=enrich_bulk_records_error_mapper,
            request_options=request_options,
        )

    async def enrich_single_record(
        self,
        body: SingleEnrichmentRequest | SingleEnrichmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnrichmentResult, EnrichSingleRecordErrorBody]:
        """Synchronously enriches one record. Account enrichment requires a company name. Person enrichment requires
        first name, last name, and one of company name, email address, or website.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/enrichment/enrich/single"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SingleEnrichmentRequest | SingleEnrichmentRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EnrichmentResult],
            error_mapper=enrich_single_record_error_mapper,
            request_options=request_options,
        )
