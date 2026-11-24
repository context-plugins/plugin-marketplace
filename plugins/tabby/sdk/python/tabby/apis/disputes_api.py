from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    file_part,
    json_body,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.get_dispute_error import GetDisputeErrorBody, get_dispute_error_mapper
from ..errors.get_disputes_error import GetDisputesErrorBody, get_disputes_error_mapper
from ..errors.post_dispute_provide_evidence_error import (
    PostDisputeProvideEvidenceErrorBody,
    post_dispute_provide_evidence_error_mapper,
)
from ..errors.post_disputes_approve_error import PostDisputesApproveErrorBody, post_disputes_approve_error_mapper
from ..errors.post_disputes_challenge_error import PostDisputesChallengeErrorBody, post_disputes_challenge_error_mapper
from ..errors.post_upload_attachment_error import PostUploadAttachmentErrorBody, post_upload_attachment_error_mapper
from ..models.api_v1_disputes_approve_request import ApiV1DisputesApproveRequest, ApiV1DisputesApproveRequestDict
from ..models.api_v1_disputes_challenge_request import ApiV1DisputesChallengeRequest, ApiV1DisputesChallengeRequestDict
from ..models.api_v1_disputes_provide_evidence_request import (
    ApiV1DisputesProvideEvidenceRequest,
    ApiV1DisputesProvideEvidenceRequestDict,
)
from ..models.dispute1 import Dispute1
from ..models.dispute_attachment_upload import DisputeAttachmentUpload
from ..models.disputes import Disputes
from ..models.disputes_approve import DisputesApprove
from ..models.disputes_challenge import DisputesChallenge
from ..models.enums.statuses import StatusesOrStr
from ..models.evidence import Evidence
from ..server.server import Server


class DisputesApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DisputesApiWithRawResponse(client, server, auth)

    def get_dispute(
        self, dispute_id: UUID, dispute_id_template: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Dispute1:
        """Returns detailed information about dispute.

        Args:
            dispute_id: ID of the dispute.
            dispute_id_template: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns dispute info.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error404DisputeNotFound | Error401InvalidSecretKey | str | RawError``."""
        return unwrap(
            self._with_raw_response.get_dispute(dispute_id, dispute_id_template, request_options=request_options)
        )

    def get_disputes(
        self,
        *,
        statuses: StatusesOrStr | None = None,
        created_at_gte: str | None = None,
        created_at_lte: str | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Disputes:
        """Returns list of 100 recently created disputes.

        Args:
            statuses: Dispute status. If not set, then all statuses will be in result.
            created_at_gte: Filter disputes created after or at the specified date and time.
            created_at_lte: Filter disputes created before or at the specified date and time.
            page_token: To load the next page of disputed items provide page token. This code can be obtained from the
                ``next_page_token`` variable in the response of dispute list. If ``next_page_token`` is empty in
                response, it means last page of disputes has been reached.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns a list of disputes.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error404DisputeNotFound | Error401InvalidSecretKey | str | RawError``."""
        return unwrap(
            self._with_raw_response.get_disputes(
                statuses=statuses,
                created_at_gte=created_at_gte,
                created_at_lte=created_at_lte,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def post_dispute_provide_evidence(
        self,
        dispute_id: UUID,
        dispute_id_template: str,
        body: ApiV1DisputesProvideEvidenceRequest | ApiV1DisputesProvideEvidenceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Evidence:
        """Provide evidence (text and/or attachments) for a dispute. Used by the merchant to submit proof in response to
        an evidence request.

        Args:
            dispute_id: ID of the dispute.
            dispute_id_template: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Evidence was submitted for the dispute.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Conflict. Evidence cannot be submitted for the dispute in its
                current state. Something bad happened. We're notified. ``error`` is ``Error404DisputeNotFound |
                Error401InvalidSecretKey | Error400 | str | RawError``."""
        return unwrap(
            self._with_raw_response.post_dispute_provide_evidence(
                dispute_id, dispute_id_template, body, request_options=request_options
            ),
        )

    def post_disputes_approve(
        self,
        body: ApiV1DisputesApproveRequest | ApiV1DisputesApproveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DisputesApprove:
        """Approve disputes (refund money to the customer). Only 20 disputes can be approved within a single request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Disputes were approved.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error404DisputeNotFound | Error401InvalidSecretKey | str | RawError``."""
        return unwrap(self._with_raw_response.post_disputes_approve(body, request_options=request_options))

    def post_disputes_challenge(
        self,
        body: ApiV1DisputesChallengeRequest | ApiV1DisputesChallengeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DisputesChallenge:
        """Challenge disputes (request Tabby support to take a look at the case). Only 20 disputes can be challenged
        within a single request. Only disputes with status 'new' might be challenged.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Disputes were challenged.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error404DisputeNotFound | Error401InvalidSecretKey | str | RawError``."""
        return unwrap(self._with_raw_response.post_disputes_challenge(body, request_options=request_options))

    def post_upload_attachment(
        self, attachment: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> DisputeAttachmentUpload:
        """Upload an attachment. Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size.
        Files larger than 5 MB are rejected.

        Args:
            attachment: Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files larger
                than 5 MB are rejected.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Attachment was uploaded.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. Something bad happened. We're notified. ``error`` is ``Error404DisputeNotFound |
                Error401InvalidSecretKey | str | RawError``."""
        return unwrap(self._with_raw_response.post_upload_attachment(attachment, request_options=request_options))

    @property
    def with_raw_response(self) -> DisputesApiWithRawResponse:
        return self._with_raw_response


class AsyncDisputesApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDisputesApiWithRawResponse(client, server, auth)

    async def get_dispute(
        self, dispute_id: UUID, dispute_id_template: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Dispute1:
        """Returns detailed information about dispute.

        Args:
            dispute_id: ID of the dispute.
            dispute_id_template: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns dispute info.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error404DisputeNotFound | Error401InvalidSecretKey | str | RawError``."""
        return unwrap(
            await self._with_raw_response.get_dispute(dispute_id, dispute_id_template, request_options=request_options)
        )

    async def get_disputes(
        self,
        *,
        statuses: StatusesOrStr | None = None,
        created_at_gte: str | None = None,
        created_at_lte: str | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Disputes:
        """Returns list of 100 recently created disputes.

        Args:
            statuses: Dispute status. If not set, then all statuses will be in result.
            created_at_gte: Filter disputes created after or at the specified date and time.
            created_at_lte: Filter disputes created before or at the specified date and time.
            page_token: To load the next page of disputed items provide page token. This code can be obtained from the
                ``next_page_token`` variable in the response of dispute list. If ``next_page_token`` is empty in
                response, it means last page of disputes has been reached.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns a list of disputes.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error404DisputeNotFound | Error401InvalidSecretKey | str | RawError``."""
        return unwrap(
            await self._with_raw_response.get_disputes(
                statuses=statuses,
                created_at_gte=created_at_gte,
                created_at_lte=created_at_lte,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    async def post_dispute_provide_evidence(
        self,
        dispute_id: UUID,
        dispute_id_template: str,
        body: ApiV1DisputesProvideEvidenceRequest | ApiV1DisputesProvideEvidenceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Evidence:
        """Provide evidence (text and/or attachments) for a dispute. Used by the merchant to submit proof in response to
        an evidence request.

        Args:
            dispute_id: ID of the dispute.
            dispute_id_template: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Evidence was submitted for the dispute.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Conflict. Evidence cannot be submitted for the dispute in its
                current state. Something bad happened. We're notified. ``error`` is ``Error404DisputeNotFound |
                Error401InvalidSecretKey | Error400 | str | RawError``."""
        return unwrap(
            await self._with_raw_response.post_dispute_provide_evidence(
                dispute_id, dispute_id_template, body, request_options=request_options
            ),
        )

    async def post_disputes_approve(
        self,
        body: ApiV1DisputesApproveRequest | ApiV1DisputesApproveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DisputesApprove:
        """Approve disputes (refund money to the customer). Only 20 disputes can be approved within a single request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Disputes were approved.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error404DisputeNotFound | Error401InvalidSecretKey | str | RawError``."""
        return unwrap(await self._with_raw_response.post_disputes_approve(body, request_options=request_options))

    async def post_disputes_challenge(
        self,
        body: ApiV1DisputesChallengeRequest | ApiV1DisputesChallengeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DisputesChallenge:
        """Challenge disputes (request Tabby support to take a look at the case). Only 20 disputes can be challenged
        within a single request. Only disputes with status 'new' might be challenged.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Disputes were challenged.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error404DisputeNotFound | Error401InvalidSecretKey | str | RawError``."""
        return unwrap(await self._with_raw_response.post_disputes_challenge(body, request_options=request_options))

    async def post_upload_attachment(
        self, attachment: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DisputeAttachmentUpload:
        """Upload an attachment. Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size.
        Files larger than 5 MB are rejected.

        Args:
            attachment: Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files larger
                than 5 MB are rejected.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Attachment was uploaded.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. Something bad happened. We're notified. ``error`` is ``Error404DisputeNotFound |
                Error401InvalidSecretKey | str | RawError``."""
        return unwrap(await self._with_raw_response.post_upload_attachment(attachment, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDisputesApiWithRawResponse:
        return self._with_raw_response


class DisputesApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_dispute(
        self, dispute_id: UUID, dispute_id_template: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Dispute1, GetDisputeErrorBody]:
        """Returns detailed information about dispute.

        Args:
            dispute_id: ID of the dispute.
            dispute_id_template: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/disputes/{disputeId}"),
            path_params=[param[UUID]("dispute_id", dispute_id), param[str]("disputeId", dispute_id_template)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Dispute1],
            error_mapper=get_dispute_error_mapper,
            request_options=request_options,
        )

    def get_disputes(
        self,
        *,
        statuses: StatusesOrStr | None = None,
        created_at_gte: str | None = None,
        created_at_lte: str | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Disputes, GetDisputesErrorBody]:
        """Returns list of 100 recently created disputes.

        Args:
            statuses: Dispute status. If not set, then all statuses will be in result.
            created_at_gte: Filter disputes created after or at the specified date and time.
            created_at_lte: Filter disputes created before or at the specified date and time.
            page_token: To load the next page of disputed items provide page token. This code can be obtained from the
                ``next_page_token`` variable in the response of dispute list. If ``next_page_token`` is empty in
                response, it means last page of disputes has been reached.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/disputes"),
            query_params=[
                param[StatusesOrStr | None]("statuses", statuses),
                param[str | None]("created_at_gte", created_at_gte),
                param[str | None]("created_at_lte", created_at_lte),
                param[str | None]("page_token", page_token),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Disputes],
            error_mapper=get_disputes_error_mapper,
            request_options=request_options,
        )

    def post_dispute_provide_evidence(
        self,
        dispute_id: UUID,
        dispute_id_template: str,
        body: ApiV1DisputesProvideEvidenceRequest | ApiV1DisputesProvideEvidenceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Evidence, PostDisputeProvideEvidenceErrorBody]:
        """Provide evidence (text and/or attachments) for a dispute. Used by the merchant to submit proof in response to
        an evidence request.

        Args:
            dispute_id: ID of the dispute.
            dispute_id_template: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/disputes/{disputeId}/provide-evidence"),
            path_params=[param[UUID]("dispute_id", dispute_id), param[str]("disputeId", dispute_id_template)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DisputesProvideEvidenceRequest | ApiV1DisputesProvideEvidenceRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Evidence],
            error_mapper=post_dispute_provide_evidence_error_mapper,
            request_options=request_options,
        )

    def post_disputes_approve(
        self,
        body: ApiV1DisputesApproveRequest | ApiV1DisputesApproveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DisputesApprove, PostDisputesApproveErrorBody]:
        """Approve disputes (refund money to the customer). Only 20 disputes can be approved within a single request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/disputes/approve"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DisputesApproveRequest | ApiV1DisputesApproveRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DisputesApprove],
            error_mapper=post_disputes_approve_error_mapper,
            request_options=request_options,
        )

    def post_disputes_challenge(
        self,
        body: ApiV1DisputesChallengeRequest | ApiV1DisputesChallengeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DisputesChallenge, PostDisputesChallengeErrorBody]:
        """Challenge disputes (request Tabby support to take a look at the case). Only 20 disputes can be challenged
        within a single request. Only disputes with status 'new' might be challenged.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/disputes/challenge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DisputesChallengeRequest | ApiV1DisputesChallengeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DisputesChallenge],
            error_mapper=post_disputes_challenge_error_mapper,
            request_options=request_options,
        )

    def post_upload_attachment(
        self, attachment: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DisputeAttachmentUpload, PostUploadAttachmentErrorBody]:
        """Upload an attachment. Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size.
        Files larger than 5 MB are rejected.

        Args:
            attachment: Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files larger
                than 5 MB are rejected.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/disputes/attachments/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("attachment", attachment)),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DisputeAttachmentUpload],
            error_mapper=post_upload_attachment_error_mapper,
            request_options=request_options,
        )


class AsyncDisputesApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_dispute(
        self, dispute_id: UUID, dispute_id_template: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Dispute1, GetDisputeErrorBody]:
        """Returns detailed information about dispute.

        Args:
            dispute_id: ID of the dispute.
            dispute_id_template: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/disputes/{disputeId}"),
            path_params=[param[UUID]("dispute_id", dispute_id), param[str]("disputeId", dispute_id_template)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Dispute1],
            error_mapper=get_dispute_error_mapper,
            request_options=request_options,
        )

    async def get_disputes(
        self,
        *,
        statuses: StatusesOrStr | None = None,
        created_at_gte: str | None = None,
        created_at_lte: str | None = None,
        page_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Disputes, GetDisputesErrorBody]:
        """Returns list of 100 recently created disputes.

        Args:
            statuses: Dispute status. If not set, then all statuses will be in result.
            created_at_gte: Filter disputes created after or at the specified date and time.
            created_at_lte: Filter disputes created before or at the specified date and time.
            page_token: To load the next page of disputed items provide page token. This code can be obtained from the
                ``next_page_token`` variable in the response of dispute list. If ``next_page_token`` is empty in
                response, it means last page of disputes has been reached.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/disputes"),
            query_params=[
                param[StatusesOrStr | None]("statuses", statuses),
                param[str | None]("created_at_gte", created_at_gte),
                param[str | None]("created_at_lte", created_at_lte),
                param[str | None]("page_token", page_token),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Disputes],
            error_mapper=get_disputes_error_mapper,
            request_options=request_options,
        )

    async def post_dispute_provide_evidence(
        self,
        dispute_id: UUID,
        dispute_id_template: str,
        body: ApiV1DisputesProvideEvidenceRequest | ApiV1DisputesProvideEvidenceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Evidence, PostDisputeProvideEvidenceErrorBody]:
        """Provide evidence (text and/or attachments) for a dispute. Used by the merchant to submit proof in response to
        an evidence request.

        Args:
            dispute_id: ID of the dispute.
            dispute_id_template: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/disputes/{disputeId}/provide-evidence"),
            path_params=[param[UUID]("dispute_id", dispute_id), param[str]("disputeId", dispute_id_template)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DisputesProvideEvidenceRequest | ApiV1DisputesProvideEvidenceRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Evidence],
            error_mapper=post_dispute_provide_evidence_error_mapper,
            request_options=request_options,
        )

    async def post_disputes_approve(
        self,
        body: ApiV1DisputesApproveRequest | ApiV1DisputesApproveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DisputesApprove, PostDisputesApproveErrorBody]:
        """Approve disputes (refund money to the customer). Only 20 disputes can be approved within a single request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/disputes/approve"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DisputesApproveRequest | ApiV1DisputesApproveRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DisputesApprove],
            error_mapper=post_disputes_approve_error_mapper,
            request_options=request_options,
        )

    async def post_disputes_challenge(
        self,
        body: ApiV1DisputesChallengeRequest | ApiV1DisputesChallengeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DisputesChallenge, PostDisputesChallengeErrorBody]:
        """Challenge disputes (request Tabby support to take a look at the case). Only 20 disputes can be challenged
        within a single request. Only disputes with status 'new' might be challenged.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/disputes/challenge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DisputesChallengeRequest | ApiV1DisputesChallengeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DisputesChallenge],
            error_mapper=post_disputes_challenge_error_mapper,
            request_options=request_options,
        )

    async def post_upload_attachment(
        self, attachment: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DisputeAttachmentUpload, PostUploadAttachmentErrorBody]:
        """Upload an attachment. Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size.
        Files larger than 5 MB are rejected.

        Args:
            attachment: Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files larger
                than 5 MB are rejected.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/disputes/attachments/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("attachment", attachment)),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DisputeAttachmentUpload],
            error_mapper=post_upload_attachment_error_mapper,
            request_options=request_options,
        )
