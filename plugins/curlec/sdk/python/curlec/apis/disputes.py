from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.accept_dispute_error import AcceptDisputeErrorBody, accept_dispute_error_mapper
from ..errors.contest_dispute_error import ContestDisputeErrorBody, contest_dispute_error_mapper
from ..errors.fetch_all_disputes_error import FetchAllDisputesErrorBody, fetch_all_disputes_error_mapper
from ..errors.fetch_dispute_error import FetchDisputeErrorBody, fetch_dispute_error_mapper
from ..models.dispute import Dispute
from ..models.disputes_contest_request import DisputesContestRequest, DisputesContestRequestDict
from ..models.disputes_response import DisputesResponse
from ..models.enums.expand import ExpandOrStr
from ..server.server import Server


class Disputes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DisputesWithRawResponse(client, server, auth)

    def accept_dispute(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Dispute:
        """Accept a dispute, acknowledging it as lost. This is irreversible — the dispute status changes to 'lost' and
        the disputed amount is deducted from your balance. Only accept if you do not wish to contest.

        Args:
            id_: Dispute ID (disp_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dispute accepted. Status changes to 'lost'.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.accept_dispute(id_, request_options=request_options))

    def contest_dispute(
        self,
        id_: str,
        body: DisputesContestRequest | DisputesContestRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Dispute:
        """Submit evidence to challenge a dispute. Use action=draft to save without submitting, or action=submit to send
        for bank review (triggers payment.dispute.under_review webhook). At least one evidence document is required when
        submitting. You can contest partial amounts by specifying amount.

        Args:
            id_: Dispute ID (disp_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dispute contested. Status changes to 'under_review' on submit.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.contest_dispute(id_, body, request_options=request_options))

    def fetch_all_disputes(
        self,
        *,
        count: int | None = 10,
        skip: int | None = 0,
        expand: ExpandOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DisputesResponse:
        """Retrieve a list of all payment disputes. Use expand[]=payment or expand[]=transaction.settlement for
        additional context.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            expand: Expand sub-entities. Supported: payment, transaction.settlement.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of disputes.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_all_disputes(
                count=count, skip=skip, expand=expand, request_options=request_options
            ),
        )

    def fetch_dispute(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Dispute:
        """Retrieve full details of a specific dispute including submitted evidence.

        Args:
            id_: Dispute ID (disp_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dispute details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_dispute(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> DisputesWithRawResponse:
        return self._with_raw_response


class AsyncDisputes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDisputesWithRawResponse(client, server, auth)

    async def accept_dispute(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Dispute:
        """Accept a dispute, acknowledging it as lost. This is irreversible — the dispute status changes to 'lost' and
        the disputed amount is deducted from your balance. Only accept if you do not wish to contest.

        Args:
            id_: Dispute ID (disp_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dispute accepted. Status changes to 'lost'.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.accept_dispute(id_, request_options=request_options))

    async def contest_dispute(
        self,
        id_: str,
        body: DisputesContestRequest | DisputesContestRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Dispute:
        """Submit evidence to challenge a dispute. Use action=draft to save without submitting, or action=submit to send
        for bank review (triggers payment.dispute.under_review webhook). At least one evidence document is required when
        submitting. You can contest partial amounts by specifying amount.

        Args:
            id_: Dispute ID (disp_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dispute contested. Status changes to 'under_review' on submit.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.contest_dispute(id_, body, request_options=request_options))

    async def fetch_all_disputes(
        self,
        *,
        count: int | None = 10,
        skip: int | None = 0,
        expand: ExpandOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DisputesResponse:
        """Retrieve a list of all payment disputes. Use expand[]=payment or expand[]=transaction.settlement for
        additional context.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            expand: Expand sub-entities. Supported: payment, transaction.settlement.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of disputes.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_all_disputes(
                count=count, skip=skip, expand=expand, request_options=request_options
            ),
        )

    async def fetch_dispute(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Dispute:
        """Retrieve full details of a specific dispute including submitted evidence.

        Args:
            id_: Dispute ID (disp_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Dispute details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_dispute(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDisputesWithRawResponse:
        return self._with_raw_response


class DisputesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def accept_dispute(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Dispute, AcceptDisputeErrorBody]:
        """Accept a dispute, acknowledging it as lost. This is irreversible — the dispute status changes to 'lost' and
        the disputed amount is deducted from your balance. Only accept if you do not wish to contest.

        Args:
            id_: Dispute ID (disp_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/disputes/{id}/accept"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Dispute],
            error_mapper=accept_dispute_error_mapper,
            request_options=request_options,
        )

    def contest_dispute(
        self,
        id_: str,
        body: DisputesContestRequest | DisputesContestRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Dispute, ContestDisputeErrorBody]:
        """Submit evidence to challenge a dispute. Use action=draft to save without submitting, or action=submit to send
        for bank review (triggers payment.dispute.under_review webhook). At least one evidence document is required when
        submitting. You can contest partial amounts by specifying amount.

        Args:
            id_: Dispute ID (disp_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/disputes/{id}/contest"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DisputesContestRequest | DisputesContestRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Dispute],
            error_mapper=contest_dispute_error_mapper,
            request_options=request_options,
        )

    def fetch_all_disputes(
        self,
        *,
        count: int | None = 10,
        skip: int | None = 0,
        expand: ExpandOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DisputesResponse, FetchAllDisputesErrorBody]:
        """Retrieve a list of all payment disputes. Use expand[]=payment or expand[]=transaction.settlement for
        additional context.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            expand: Expand sub-entities. Supported: payment, transaction.settlement.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/disputes"),
            query_params=[
                param[int | None]("count", count),
                param[int | None]("skip", skip),
                param[ExpandOrStr | None]("expand[]", expand),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[DisputesResponse],
            error_mapper=fetch_all_disputes_error_mapper,
            request_options=request_options,
        )

    def fetch_dispute(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Dispute, FetchDisputeErrorBody]:
        """Retrieve full details of a specific dispute including submitted evidence.

        Args:
            id_: Dispute ID (disp_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/disputes/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Dispute],
            error_mapper=fetch_dispute_error_mapper,
            request_options=request_options,
        )


class AsyncDisputesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def accept_dispute(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Dispute, AcceptDisputeErrorBody]:
        """Accept a dispute, acknowledging it as lost. This is irreversible — the dispute status changes to 'lost' and
        the disputed amount is deducted from your balance. Only accept if you do not wish to contest.

        Args:
            id_: Dispute ID (disp_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/disputes/{id}/accept"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Dispute],
            error_mapper=accept_dispute_error_mapper,
            request_options=request_options,
        )

    async def contest_dispute(
        self,
        id_: str,
        body: DisputesContestRequest | DisputesContestRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Dispute, ContestDisputeErrorBody]:
        """Submit evidence to challenge a dispute. Use action=draft to save without submitting, or action=submit to send
        for bank review (triggers payment.dispute.under_review webhook). At least one evidence document is required when
        submitting. You can contest partial amounts by specifying amount.

        Args:
            id_: Dispute ID (disp_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/disputes/{id}/contest"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DisputesContestRequest | DisputesContestRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Dispute],
            error_mapper=contest_dispute_error_mapper,
            request_options=request_options,
        )

    async def fetch_all_disputes(
        self,
        *,
        count: int | None = 10,
        skip: int | None = 0,
        expand: ExpandOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DisputesResponse, FetchAllDisputesErrorBody]:
        """Retrieve a list of all payment disputes. Use expand[]=payment or expand[]=transaction.settlement for
        additional context.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            expand: Expand sub-entities. Supported: payment, transaction.settlement.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/disputes"),
            query_params=[
                param[int | None]("count", count),
                param[int | None]("skip", skip),
                param[ExpandOrStr | None]("expand[]", expand),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[DisputesResponse],
            error_mapper=fetch_all_disputes_error_mapper,
            request_options=request_options,
        )

    async def fetch_dispute(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Dispute, FetchDisputeErrorBody]:
        """Retrieve full details of a specific dispute including submitted evidence.

        Args:
            id_: Dispute ID (disp_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/disputes/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Dispute],
            error_mapper=fetch_dispute_error_mapper,
            request_options=request_options,
        )
