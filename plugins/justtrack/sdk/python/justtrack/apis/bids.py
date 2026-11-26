from __future__ import annotations

from typing import Any
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
from ..errors.post_management_v1_bids_error import PostManagementV1BidsErrorBody, post_management_v1_bids_error_mapper
from ..errors.post_management_v1_bids_upload_error import (
    PostManagementV1BidsUploadErrorBody,
    post_management_v1_bids_upload_error_mapper,
)
from ..models.list_bids_request import ListBidsRequest, ListBidsRequestDict
from ..models.list_bids_response import ListBidsResponse
from ..models.upload_bid_input import UploadBidInput, UploadBidInputDict
from ..server.server import Server


class Bids:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BidsWithRawResponse(client, server, auth)

    def post_management_v1_bids(
        self,
        *,
        body: ListBidsRequest | ListBidsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListBidsResponse:
        """This API provides with the bids within justtrack. In addition, it exposes the status of the latest operation
        associated with the bid. The following filter combinations are eligible:
        - networkId + campaignId
        - networkId + campaignId + countryCode
        - networkId + campaignId + countryCode + sourceId
        - networkId + adSetId
        - networkId + adSetId + countryCode
        - networkId + adSetId + countryCode + sourceId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Internal server error. Please try again, or
                contact us at support@justtrack.io if the error persists. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_management_v1_bids(body=body, request_options=request_options))

    def post_management_v1_bids_upload(
        self,
        *,
        body: list[UploadBidInput | UploadBidInputDict] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """With this API you can upload a batch of bids, similar to the CSV upload. The same hierarchy, rules, and
        limitations apply.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bids are accepted and will be processed asynchronously

        Raises:
            ApiError: Invalid bids provided. Check the response for details Internal server error. Please try again, or
                contact us at support@justtrack.io if the error persists. ``error`` is ``UploadBidsInvalidBidResponse |
                ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_management_v1_bids_upload(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> BidsWithRawResponse:
        return self._with_raw_response


class AsyncBids:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBidsWithRawResponse(client, server, auth)

    async def post_management_v1_bids(
        self,
        *,
        body: ListBidsRequest | ListBidsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListBidsResponse:
        """This API provides with the bids within justtrack. In addition, it exposes the status of the latest operation
        associated with the bid. The following filter combinations are eligible:
        - networkId + campaignId
        - networkId + campaignId + countryCode
        - networkId + campaignId + countryCode + sourceId
        - networkId + adSetId
        - networkId + adSetId + countryCode
        - networkId + adSetId + countryCode + sourceId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Internal server error. Please try again, or
                contact us at support@justtrack.io if the error persists. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_management_v1_bids(body=body, request_options=request_options))

    async def post_management_v1_bids_upload(
        self,
        *,
        body: list[UploadBidInput | UploadBidInputDict] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """With this API you can upload a batch of bids, similar to the CSV upload. The same hierarchy, rules, and
        limitations apply.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bids are accepted and will be processed asynchronously

        Raises:
            ApiError: Invalid bids provided. Check the response for details Internal server error. Please try again, or
                contact us at support@justtrack.io if the error persists. ``error`` is ``UploadBidsInvalidBidResponse |
                ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_management_v1_bids_upload(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncBidsWithRawResponse:
        return self._with_raw_response


class BidsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_management_v1_bids(
        self,
        *,
        body: ListBidsRequest | ListBidsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBidsResponse, PostManagementV1BidsErrorBody]:
        """This API provides with the bids within justtrack. In addition, it exposes the status of the latest operation
        associated with the bid. The following filter combinations are eligible:
        - networkId + campaignId
        - networkId + campaignId + countryCode
        - networkId + campaignId + countryCode + sourceId
        - networkId + adSetId
        - networkId + adSetId + countryCode
        - networkId + adSetId + countryCode + sourceId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/bids"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBidsRequest | ListBidsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ListBidsResponse],
            error_mapper=post_management_v1_bids_error_mapper,
            request_options=request_options,
        )

    def post_management_v1_bids_upload(
        self,
        *,
        body: list[UploadBidInput | UploadBidInputDict] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, PostManagementV1BidsUploadErrorBody]:
        """With this API you can upload a batch of bids, similar to the CSV upload. The same hierarchy, rules, and
        limitations apply.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/bids/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[UploadBidInput | UploadBidInputDict] | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=post_management_v1_bids_upload_error_mapper,
            request_options=request_options,
        )


class AsyncBidsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_management_v1_bids(
        self,
        *,
        body: ListBidsRequest | ListBidsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListBidsResponse, PostManagementV1BidsErrorBody]:
        """This API provides with the bids within justtrack. In addition, it exposes the status of the latest operation
        associated with the bid. The following filter combinations are eligible:
        - networkId + campaignId
        - networkId + campaignId + countryCode
        - networkId + campaignId + countryCode + sourceId
        - networkId + adSetId
        - networkId + adSetId + countryCode
        - networkId + adSetId + countryCode + sourceId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/bids"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListBidsRequest | ListBidsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ListBidsResponse],
            error_mapper=post_management_v1_bids_error_mapper,
            request_options=request_options,
        )

    async def post_management_v1_bids_upload(
        self,
        *,
        body: list[UploadBidInput | UploadBidInputDict] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, PostManagementV1BidsUploadErrorBody]:
        """With this API you can upload a batch of bids, similar to the CSV upload. The same hierarchy, rules, and
        limitations apply.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/bids/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[UploadBidInput | UploadBidInputDict] | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=post_management_v1_bids_upload_error_mapper,
            request_options=request_options,
        )
