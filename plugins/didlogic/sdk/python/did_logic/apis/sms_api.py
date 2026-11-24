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
from ..errors.sms_create_error import SmsCreateErrorBody, sms_create_error_mapper
from ..errors.sms_index_error import SmsIndexErrorBody, sms_index_error_mapper
from ..errors.sms_show_error import SmsShowErrorBody, sms_show_error_mapper
from ..models.api_v1_sms_request import ApiV1SmsRequest, ApiV1SmsRequestDict
from ..models.api_v1_sms_response import ApiV1SmsResponse
from ..models.api_v1_sms_response1 import ApiV1SmsResponse1
from ..models.api_v1_sms_response3 import ApiV1SmsResponse3
from ..server.server import Server


class SmsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SmsApiWithRawResponse(client, server, auth)

    def sms_create(
        self, body: ApiV1SmsRequest | ApiV1SmsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1SmsResponse1:
        """Send an SMS message from a DID number owned by the authenticated user.

        **Requirements:**
        - Source DID must be owned by user
        - Source DID must have SMS enabled
        - Sufficient account balance for SMS cost
        - Valid destination phone number

        **Cost:**
        - Charged per segment (160 characters)
        - Price varies by destination country

        ``sms.id`` feeds sms_show. See also: numbers_search_show, to find SMS-enabled numbers to buy.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully sends SMS message and returns details with ID

        Raises:
            ApiError: The request body must be valid JSON. Returns 403 error when destination number is blocked Returns
                422 error when destination phone number is invalid ``error`` is ``Error | ApiV1Sms403Error1 |
                ApiV1SmsResponse21 | RawError``."""
        return unwrap(self._with_raw_response.sms_create(body, request_options=request_options))

    def sms_index(
        self,
        *,
        page: str | None = "1",
        per_page: str | None = "20",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SmsResponse:
        """Retrieve paginated list of SMS messages sent by the authenticated user. Note: Contact your account manager to
        set up a Relay URL for inbound messages.

        ``sms[].id`` feeds sms_show. Full record: sms_show.

        Args:
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns paginated list of sent SMS messages

        Raises:
            ApiError: Returns 403 error when API token is incorrect ``error`` is ``ApiV1Sms403Error1 | RawError``."""
        return unwrap(self._with_raw_response.sms_index(page=page, per_page=per_page, request_options=request_options))

    def sms_show(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1SmsResponse3:
        """Retrieve details of a specific SMS message sent by the authenticated user.

        **Returned Information:**
        - SMS ID and status
        - Source and destination numbers
        - Message content
        - Delivery status and timestamps
        - Cost and segment count

        Rows: sms_index.

        Args:
            id_: SMS message id from sms_index, sms_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns SMS message details including status and timestamps

        Raises:
            ApiError: Returns 403 error when API token is incorrect The requested resource could not be found. ``error``
                is ``ApiV1Sms403Error1 | Error | RawError``."""
        return unwrap(self._with_raw_response.sms_show(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> SmsApiWithRawResponse:
        return self._with_raw_response


class AsyncSmsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSmsApiWithRawResponse(client, server, auth)

    async def sms_create(
        self, body: ApiV1SmsRequest | ApiV1SmsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1SmsResponse1:
        """Send an SMS message from a DID number owned by the authenticated user.

        **Requirements:**
        - Source DID must be owned by user
        - Source DID must have SMS enabled
        - Sufficient account balance for SMS cost
        - Valid destination phone number

        **Cost:**
        - Charged per segment (160 characters)
        - Price varies by destination country

        ``sms.id`` feeds sms_show. See also: numbers_search_show, to find SMS-enabled numbers to buy.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully sends SMS message and returns details with ID

        Raises:
            ApiError: The request body must be valid JSON. Returns 403 error when destination number is blocked Returns
                422 error when destination phone number is invalid ``error`` is ``Error | ApiV1Sms403Error1 |
                ApiV1SmsResponse21 | RawError``."""
        return unwrap(await self._with_raw_response.sms_create(body, request_options=request_options))

    async def sms_index(
        self,
        *,
        page: str | None = "1",
        per_page: str | None = "20",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SmsResponse:
        """Retrieve paginated list of SMS messages sent by the authenticated user. Note: Contact your account manager to
        set up a Relay URL for inbound messages.

        ``sms[].id`` feeds sms_show. Full record: sms_show.

        Args:
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns paginated list of sent SMS messages

        Raises:
            ApiError: Returns 403 error when API token is incorrect ``error`` is ``ApiV1Sms403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.sms_index(page=page, per_page=per_page, request_options=request_options)
        )

    async def sms_show(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1SmsResponse3:
        """Retrieve details of a specific SMS message sent by the authenticated user.

        **Returned Information:**
        - SMS ID and status
        - Source and destination numbers
        - Message content
        - Delivery status and timestamps
        - Cost and segment count

        Rows: sms_index.

        Args:
            id_: SMS message id from sms_index, sms_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns SMS message details including status and timestamps

        Raises:
            ApiError: Returns 403 error when API token is incorrect The requested resource could not be found. ``error``
                is ``ApiV1Sms403Error1 | Error | RawError``."""
        return unwrap(await self._with_raw_response.sms_show(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSmsApiWithRawResponse:
        return self._with_raw_response


class SmsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def sms_create(
        self, body: ApiV1SmsRequest | ApiV1SmsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SmsResponse1, SmsCreateErrorBody]:
        """Send an SMS message from a DID number owned by the authenticated user.

        **Requirements:**
        - Source DID must be owned by user
        - Source DID must have SMS enabled
        - Sufficient account balance for SMS cost
        - Valid destination phone number

        **Cost:**
        - Charged per segment (160 characters)
        - Price varies by destination country

        ``sms.id`` feeds sms_show. See also: numbers_search_show, to find SMS-enabled numbers to buy.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sms"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SmsRequest | ApiV1SmsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SmsResponse1],
            error_mapper=sms_create_error_mapper,
            request_options=request_options,
        )

    def sms_index(
        self,
        *,
        page: str | None = "1",
        per_page: str | None = "20",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SmsResponse, SmsIndexErrorBody]:
        """Retrieve paginated list of SMS messages sent by the authenticated user. Note: Contact your account manager to
        set up a Relay URL for inbound messages.

        ``sms[].id`` feeds sms_show. Full record: sms_show.

        Args:
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sms"),
            query_params=[param[str | None]("page", page), param[str | None]("per_page", per_page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SmsResponse],
            error_mapper=sms_index_error_mapper,
            request_options=request_options,
        )

    def sms_show(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SmsResponse3, SmsShowErrorBody]:
        """Retrieve details of a specific SMS message sent by the authenticated user.

        **Returned Information:**
        - SMS ID and status
        - Source and destination numbers
        - Message content
        - Delivery status and timestamps
        - Cost and segment count

        Rows: sms_index.

        Args:
            id_: SMS message id from sms_index, sms_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sms/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SmsResponse3],
            error_mapper=sms_show_error_mapper,
            request_options=request_options,
        )


class AsyncSmsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def sms_create(
        self, body: ApiV1SmsRequest | ApiV1SmsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SmsResponse1, SmsCreateErrorBody]:
        """Send an SMS message from a DID number owned by the authenticated user.

        **Requirements:**
        - Source DID must be owned by user
        - Source DID must have SMS enabled
        - Sufficient account balance for SMS cost
        - Valid destination phone number

        **Cost:**
        - Charged per segment (160 characters)
        - Price varies by destination country

        ``sms.id`` feeds sms_show. See also: numbers_search_show, to find SMS-enabled numbers to buy.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sms"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SmsRequest | ApiV1SmsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SmsResponse1],
            error_mapper=sms_create_error_mapper,
            request_options=request_options,
        )

    async def sms_index(
        self,
        *,
        page: str | None = "1",
        per_page: str | None = "20",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SmsResponse, SmsIndexErrorBody]:
        """Retrieve paginated list of SMS messages sent by the authenticated user. Note: Contact your account manager to
        set up a Relay URL for inbound messages.

        ``sms[].id`` feeds sms_show. Full record: sms_show.

        Args:
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sms"),
            query_params=[param[str | None]("page", page), param[str | None]("per_page", per_page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SmsResponse],
            error_mapper=sms_index_error_mapper,
            request_options=request_options,
        )

    async def sms_show(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SmsResponse3, SmsShowErrorBody]:
        """Retrieve details of a specific SMS message sent by the authenticated user.

        **Returned Information:**
        - SMS ID and status
        - Source and destination numbers
        - Message content
        - Delivery status and timestamps
        - Cost and segment count

        Rows: sms_index.

        Args:
            id_: SMS message id from sms_index, sms_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sms/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SmsResponse3],
            error_mapper=sms_show_error_mapper,
            request_options=request_options,
        )
