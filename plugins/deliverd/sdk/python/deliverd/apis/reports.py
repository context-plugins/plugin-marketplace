from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.delete_api_v1_reports_by_id_or_slug_comments_by_comment_id_error import (
    DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody,
    delete_api_v1_reports_by_id_or_slug_comments_by_comment_id_error_mapper,
)
from ..errors.get_api_v1_reports_by_id_or_slug_analytics_error import (
    GetApiV1ReportsByIdOrSlugAnalyticsErrorBody,
    get_api_v1_reports_by_id_or_slug_analytics_error_mapper,
)
from ..errors.get_api_v1_reports_by_id_or_slug_evidence_error import (
    GetApiV1ReportsByIdOrSlugEvidenceErrorBody,
    get_api_v1_reports_by_id_or_slug_evidence_error_mapper,
)
from ..errors.post_api_v1_reports_by_id_or_slug_comments_error import (
    PostApiV1ReportsByIdOrSlugCommentsErrorBody,
    post_api_v1_reports_by_id_or_slug_comments_error_mapper,
)
from ..errors.post_api_v1_reports_by_id_or_slug_copy_error import (
    PostApiV1ReportsByIdOrSlugCopyErrorBody,
    post_api_v1_reports_by_id_or_slug_copy_error_mapper,
)
from ..errors.post_api_v1_reports_by_id_or_slug_revision_briefs_error import (
    PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody,
    post_api_v1_reports_by_id_or_slug_revision_briefs_error_mapper,
)
from ..errors.post_api_v1_reports_by_id_or_slug_rollback_error import (
    PostApiV1ReportsByIdOrSlugRollbackErrorBody,
    post_api_v1_reports_by_id_or_slug_rollback_error_mapper,
)
from ..errors.post_api_v1_reports_by_id_or_slug_send_error import (
    PostApiV1ReportsByIdOrSlugSendErrorBody,
    post_api_v1_reports_by_id_or_slug_send_error_mapper,
)
from ..errors.post_api_v1_reports_by_id_or_slug_versions_error import (
    PostApiV1ReportsByIdOrSlugVersionsErrorBody,
    post_api_v1_reports_by_id_or_slug_versions_error_mapper,
)
from ..errors.put_api_v1_reports_by_id_or_slug_data_by_name_error import (
    PutApiV1ReportsByIdOrSlugDataByNameErrorBody,
    put_api_v1_reports_by_id_or_slug_data_by_name_error_mapper,
)
from ..models.api_v1_reports_analytics_response import ApiV1ReportsAnalyticsResponse
from ..models.api_v1_reports_archive_request import ApiV1ReportsArchiveRequest, ApiV1ReportsArchiveRequestDict
from ..models.api_v1_reports_archive_response import ApiV1ReportsArchiveResponse
from ..models.api_v1_reports_comments_request import ApiV1ReportsCommentsRequest, ApiV1ReportsCommentsRequestDict
from ..models.api_v1_reports_comments_response import ApiV1ReportsCommentsResponse
from ..models.api_v1_reports_comments_response1 import ApiV1ReportsCommentsResponse1
from ..models.api_v1_reports_comments_response2 import ApiV1ReportsCommentsResponse2
from ..models.api_v1_reports_copy_request import ApiV1ReportsCopyRequest, ApiV1ReportsCopyRequestDict
from ..models.api_v1_reports_copy_response import ApiV1ReportsCopyResponse
from ..models.api_v1_reports_data_response import ApiV1ReportsDataResponse
from ..models.api_v1_reports_data_response1 import ApiV1ReportsDataResponse1
from ..models.api_v1_reports_request import ApiV1ReportsRequest, ApiV1ReportsRequestDict
from ..models.api_v1_reports_request1 import ApiV1ReportsRequest1, ApiV1ReportsRequest1Dict
from ..models.api_v1_reports_response import ApiV1ReportsResponse
from ..models.api_v1_reports_response1 import ApiV1ReportsResponse1
from ..models.api_v1_reports_response3 import ApiV1ReportsResponse3
from ..models.api_v1_reports_response4 import ApiV1ReportsResponse4
from ..models.api_v1_reports_revision_briefs_request import (
    ApiV1ReportsRevisionBriefsRequest,
    ApiV1ReportsRevisionBriefsRequestDict,
)
from ..models.api_v1_reports_revision_briefs_response import ApiV1ReportsRevisionBriefsResponse
from ..models.api_v1_reports_rollback_request import ApiV1ReportsRollbackRequest, ApiV1ReportsRollbackRequestDict
from ..models.api_v1_reports_rollback_response import ApiV1ReportsRollbackResponse
from ..models.api_v1_reports_send_request import ApiV1ReportsSendRequest, ApiV1ReportsSendRequestDict
from ..models.api_v1_reports_send_response import ApiV1ReportsSendResponse
from ..models.api_v1_reports_share_request import ApiV1ReportsShareRequest, ApiV1ReportsShareRequestDict
from ..models.api_v1_reports_share_request1 import ApiV1ReportsShareRequest1, ApiV1ReportsShareRequest1Dict
from ..models.api_v1_reports_share_response import ApiV1ReportsShareResponse
from ..models.api_v1_reports_share_response1 import ApiV1ReportsShareResponse1
from ..models.api_v1_reports_versions_request import ApiV1ReportsVersionsRequest, ApiV1ReportsVersionsRequestDict
from ..models.api_v1_reports_versions_response import ApiV1ReportsVersionsResponse
from ..models.api_v1_reports_versions_response2 import ApiV1ReportsVersionsResponse2
from ..models.enums.format import FormatOrStr
from ..models.enums.status12 import Status12OrStr
from ..server.server import Server


class Reports:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ReportsWithRawResponse(client, server, auth)

    def delete_api_v1_reports_by_id_or_slug_comments_by_comment_id(
        self, id_or_slug: str, comment_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ReportsCommentsResponse2:
        """Take back a comment this credential posted. Your own last comment in a thread, while the thread is open: once
        somebody has replied it stays, so their reply is never left answering something no longer on the page.
        Retracting the only comment in a thread takes the thread and its highlight with it, and removes any images
        attached to the comment. It unsends nothing — the report's owner may have been emailed when it was posted.
        ``commentId`` comes from the ``POST`` above or from ``GET /reports/{idOrSlug}/comments``, which marks the one
        message this credential can still take back.

        Args:
            id_or_slug: Value sent with the request.
            comment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment retracted

        Raises:
            ApiError: ``answered`` — somebody has replied since, so the comment stays; ``not_author`` — only the person
                who wrote a comment can take it back; ``thread_resolved`` — reopen the thread first. No such comment on
                that report. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_reports_by_id_or_slug_comments_by_comment_id(
                id_or_slug, comment_id, request_options=request_options
            ),
        )

    def delete_api_v1_reports_by_id_or_slug_data_by_name(
        self, id_or_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_or_slug: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_reports_by_id_or_slug_data_by_name(
                id_or_slug, name, request_options=request_options
            ),
        )

    def delete_api_v1_reports_by_id_or_slug_share(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsShareRequest1 | ApiV1ReportsShareRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsShareResponse1:
        """Take access away from the same audience phrase that granted it. By audience rather than by grant id because
        that is all a caller has: the audience on ``GET /reports/{idOrSlug}`` carries each grant's *principal* id, never
        the grant row's. The owner's access cannot be revoked, and an audience that never had access is a refusal rather
        than a no-op — a caller told "revoked" for a grant that was not there would report the door shut while it is
        open.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Grants removed

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_reports_by_id_or_slug_share(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    def get_api_v1_reports(
        self,
        *,
        q: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsResponse:
        """Send a ``GET`` request.

        Args:
            q: Searches title, slug and description
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reports in the organisation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_reports(q=q, limit=limit, cursor=cursor, request_options=request_options)
        )

    def get_api_v1_reports_by_id_or_slug(
        self, id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ReportsResponse4:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Report detail

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_reports_by_id_or_slug(id_or_slug, request_options=request_options)
        )

    def get_api_v1_reports_by_id_or_slug_analytics(
        self, id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ReportsAnalyticsResponse:
        """The same figures the report page shows. Total views are on every plan; unique, internal and external viewers,
        the 30-day series, per-version views and recent readers need the analytics entitlement and come back null or
        empty without it. Reader names appear only when the organisation's sharing policy shows viewer identities.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Readership

        Raises:
            ApiError: ``not_found`` ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_reports_by_id_or_slug_analytics(
                id_or_slug, request_options=request_options
            ),
        )

    def get_api_v1_reports_by_id_or_slug_comments(
        self,
        id_or_slug: str,
        *,
        status: Status12OrStr | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsCommentsResponse:
        """Threads with the quoted passage and a plain-text excerpt of the surrounding content in the *current* version,
        so a client can find what to change without fetching the file. ``anchorStatus`` says whether the commented text
        still exists: ``anchored`` and ``shifted`` mean it does; ``stale`` means it was edited away, and the excerpt
        then comes from the version the comment was written against.

        Args:
            id_or_slug: Value sent with the request.
            status: Defaults to open — the threads still needing action
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment threads

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_reports_by_id_or_slug_comments(
                id_or_slug, status=status, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    def get_api_v1_reports_by_id_or_slug_data(
        self, id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ReportsDataResponse:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Datasets

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_reports_by_id_or_slug_data(id_or_slug, request_options=request_options)
        )

    def get_api_v1_reports_by_id_or_slug_evidence(
        self,
        id_or_slug: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """The whole record of one piece of work: every approval, review and request for information with who was asked
        and what they said, the report's version history, and the timeline across all of it. Requires reports:read,
        approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that
        reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every
        export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken. For a
        report the steps are the approvals, reviews and requests that point at it, which is the subject an auditor
        usually names and works for work done before flows existed.

        Args:
            id_or_slug: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pack (JSON), or the timeline (CSV)

        Raises:
            ApiError: The key does not hold every scope the pack draws on Not found ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_reports_by_id_or_slug_evidence(
                id_or_slug, format_=format_, request_options=request_options
            ),
        )

    def get_api_v1_reports_by_id_or_slug_versions(
        self,
        id_or_slug: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsVersionsResponse2:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Version history

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_reports_by_id_or_slug_versions(
                id_or_slug, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    def patch_api_v1_reports_by_id_or_slug(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRequest1 | ApiV1ReportsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsResponse3:
        """Change the title, the address, or both. Changing the address keeps the old one: it permanently redirects to
        the new URL, so links already shared keep working. ``previousSlug`` names the address that was kept, or null
        when only the title changed.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Renamed

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.patch_api_v1_reports_by_id_or_slug(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    def post_api_v1_reports(
        self,
        *,
        body: ApiV1ReportsRequest | ApiV1ReportsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsResponse1:
        """Publish from an uploadId, inline HTML content, or inline files. Creates the report on first publish; new
        versions after that. ``taskId`` keeps the report with a Task Graph task: it is listed on the task and returned
        in the task's context. A later publish naming another task moves it there, and one naming none leaves it where
        it is. Naming a task needs ``tasks:read`` on the key and the Tasks plan feature (``402 feature_unavailable``
        without it).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Published

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_reports(body=body, request_options=request_options))

    def post_api_v1_reports_by_id_or_slug_archive(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsArchiveRequest | ApiV1ReportsArchiveRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsArchiveResponse:
        """Archiving stops the URL serving: a reader following a link they already hold is told the report is no longer
        available. Nothing is deleted and the audience is kept, so ``{"archived": false}`` restores it exactly as it
        was. The body is optional and defaults to archiving.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archived, or restored

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_reports_by_id_or_slug_archive(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    def post_api_v1_reports_by_id_or_slug_comments(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsCommentsRequest | ApiV1ReportsCommentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsCommentsResponse1:
        """Omit ``quote`` for a comment about the report as a whole. Include it and the comment attaches to that passage
        and highlights it, the way a reader's selection does. The quote must occur exactly once in the current version;
        otherwise the request is refused rather than placed on a guess.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment posted

        Raises:
            ApiError: ``quote_not_found`` — the passage is not in the current version; ``quote_ambiguous`` — it occurs
                more than once, quote more of the surrounding sentence. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_reports_by_id_or_slug_comments(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    def post_api_v1_reports_by_id_or_slug_copy(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsCopyRequest | ApiV1ReportsCopyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsCopyResponse:
        """Duplicate a report's current version into a new report you own — the primitive behind duplicating a report
        and behind using one as a template. The copy carries the content, the classification and any datasets; it
        carries **no** audience, comments or share links, and starts private to you. Requires that you can already read
        the source and may publish. Agent keys are refused: a copy lands outside an agent's allow-list.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The new report

        Raises:
            ApiError: ``not_readable`` — you have no access to the source; ``agent_not_permitted`` — agent keys cannot
                copy. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_reports_by_id_or_slug_copy(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    def post_api_v1_reports_by_id_or_slug_revision_briefs(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRevisionBriefsRequest | ApiV1ReportsRevisionBriefsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsRevisionBriefsResponse:
        """One prompt an agent can revise the report from: each open thread's quoted passage, the surrounding text in
        the current version, the conversation, and signed links to the images readers attached, ending with how to
        publish the next version and close each thread. Composing a brief is recorded on the report. Pass ``threadIds``
        to include only some open threads.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The brief

        Raises:
            ApiError: ``no_open_threads`` — nothing to revise from; ``no_version`` — the report has never been
                published. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_reports_by_id_or_slug_revision_briefs(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    def post_api_v1_reports_by_id_or_slug_rollback(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRollbackRequest | ApiV1ReportsRollbackRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsRollbackResponse:
        """Serve an earlier version again at the same URL. Name it by number — the ``currentVersion`` and
        ``latestVersion`` every other endpoint returns — or by ``versionId`` from the versions list. Nothing is deleted:
        roll forward the same way.

        Datasets are not versioned, so a rollback restores the markup and not the numbers it renders.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rolled back

        Raises:
            ApiError: ``not_found`` — no such report, or no such version. ``approval_pending`` — that version is
                awaiting approval or was declined. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_reports_by_id_or_slug_rollback(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    def post_api_v1_reports_by_id_or_slug_send(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsSendRequest | ApiV1ReportsSendRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsSendResponse:
        """Distinct from ``POST …/share``, which grants access to people the organisation already knows. This takes bare
        email addresses, creates the guest records behind them, grants access and emails each recipient a link with the
        sender's covering note.

        **Not a mailing list.** Each recipient gets their own link tied to their own guest record, which is what makes
        the audit trail and the per-reader analytics mean anything — and why the list is capped at 50. The link keeps
        working as the report is updated, so there is no new file to send next time.

        Governed by everything a share is, because it grants through the same function: the ``share_external``
        publishing policy — which the seeded confidential-and-restricted rule denies outright — the agent's own
        allow-list, the expiry clamp, the audit trail and the ``report.shared`` webhook. A recipient who already had
        access is emailed again rather than skipped: re-sending to somebody who says they never got it is the point.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sent

        Raises:
            ApiError: A publishing rule or the agent's policy refused it — commonly ``policy_denied`` on a confidential
                or restricted report. ``not_found``. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_reports_by_id_or_slug_send(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    def post_api_v1_reports_by_id_or_slug_share(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsShareRequest | ApiV1ReportsShareRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsShareResponse:
        """``capability`` is what the audience may do: ``view`` (the default) or ``comment``. A grant that already
        exists is only ever raised, never lowered, by granting again.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Grants applied

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_reports_by_id_or_slug_share(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    def post_api_v1_reports_by_id_or_slug_versions(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsVersionsRequest | ApiV1ReportsVersionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsVersionsResponse:
        """Send a ``POST`` request.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            New version published

        Raises:
            ApiError: ``expectedVersion`` was supplied and is no longer current — someone published in between.
                ``details.currentVersion`` says what is. Re-read that version, redo the change on top of it, and retry.
                ``error`` is ``ApiV1ReportsVersions409Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_reports_by_id_or_slug_versions(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    def put_api_v1_reports_by_id_or_slug_data_by_name(
        self,
        id_or_slug: str,
        name: str,
        *,
        body: dict[str, Any] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsDataResponse1:
        """Data the published report fetches at view time, so a dashboard can show current numbers without republishing.
        The body is JSON, stored verbatim, up to 5 MB. Served behind the same access check as the report and never
        edge-cached.

        **A dataset is mutable and a version is not.** Rolling the report back does not roll the data back — the earlier
        markup renders today's numbers.

        Args:
            id_or_slug: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stored

        Raises:
            ApiError: ``invalid_json`` or ``invalid_name``. ``too_many`` — a report may hold 25 datasets. ``too_large``
                — the limit is 5 MB. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.put_api_v1_reports_by_id_or_slug_data_by_name(
                id_or_slug, name, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ReportsWithRawResponse:
        return self._with_raw_response


class AsyncReports:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncReportsWithRawResponse(client, server, auth)

    async def delete_api_v1_reports_by_id_or_slug_comments_by_comment_id(
        self, id_or_slug: str, comment_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ReportsCommentsResponse2:
        """Take back a comment this credential posted. Your own last comment in a thread, while the thread is open: once
        somebody has replied it stays, so their reply is never left answering something no longer on the page.
        Retracting the only comment in a thread takes the thread and its highlight with it, and removes any images
        attached to the comment. It unsends nothing — the report's owner may have been emailed when it was posted.
        ``commentId`` comes from the ``POST`` above or from ``GET /reports/{idOrSlug}/comments``, which marks the one
        message this credential can still take back.

        Args:
            id_or_slug: Value sent with the request.
            comment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment retracted

        Raises:
            ApiError: ``answered`` — somebody has replied since, so the comment stays; ``not_author`` — only the person
                who wrote a comment can take it back; ``thread_resolved`` — reopen the thread first. No such comment on
                that report. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_reports_by_id_or_slug_comments_by_comment_id(
                id_or_slug, comment_id, request_options=request_options
            ),
        )

    async def delete_api_v1_reports_by_id_or_slug_data_by_name(
        self, id_or_slug: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_or_slug: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_reports_by_id_or_slug_data_by_name(
                id_or_slug, name, request_options=request_options
            ),
        )

    async def delete_api_v1_reports_by_id_or_slug_share(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsShareRequest1 | ApiV1ReportsShareRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsShareResponse1:
        """Take access away from the same audience phrase that granted it. By audience rather than by grant id because
        that is all a caller has: the audience on ``GET /reports/{idOrSlug}`` carries each grant's *principal* id, never
        the grant row's. The owner's access cannot be revoked, and an audience that never had access is a refusal rather
        than a no-op — a caller told "revoked" for a grant that was not there would report the door shut while it is
        open.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Grants removed

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_reports_by_id_or_slug_share(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    async def get_api_v1_reports(
        self,
        *,
        q: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsResponse:
        """Send a ``GET`` request.

        Args:
            q: Searches title, slug and description
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reports in the organisation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_reports(
                q=q, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def get_api_v1_reports_by_id_or_slug(
        self, id_or_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ReportsResponse4:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Report detail

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_reports_by_id_or_slug(id_or_slug, request_options=request_options)
        )

    async def get_api_v1_reports_by_id_or_slug_analytics(
        self, id_or_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ReportsAnalyticsResponse:
        """The same figures the report page shows. Total views are on every plan; unique, internal and external viewers,
        the 30-day series, per-version views and recent readers need the analytics entitlement and come back null or
        empty without it. Reader names appear only when the organisation's sharing policy shows viewer identities.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Readership

        Raises:
            ApiError: ``not_found`` ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_reports_by_id_or_slug_analytics(
                id_or_slug, request_options=request_options
            ),
        )

    async def get_api_v1_reports_by_id_or_slug_comments(
        self,
        id_or_slug: str,
        *,
        status: Status12OrStr | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsCommentsResponse:
        """Threads with the quoted passage and a plain-text excerpt of the surrounding content in the *current* version,
        so a client can find what to change without fetching the file. ``anchorStatus`` says whether the commented text
        still exists: ``anchored`` and ``shifted`` mean it does; ``stale`` means it was edited away, and the excerpt
        then comes from the version the comment was written against.

        Args:
            id_or_slug: Value sent with the request.
            status: Defaults to open — the threads still needing action
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment threads

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_reports_by_id_or_slug_comments(
                id_or_slug, status=status, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def get_api_v1_reports_by_id_or_slug_data(
        self, id_or_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ReportsDataResponse:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Datasets

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_reports_by_id_or_slug_data(
                id_or_slug, request_options=request_options
            ),
        )

    async def get_api_v1_reports_by_id_or_slug_evidence(
        self,
        id_or_slug: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """The whole record of one piece of work: every approval, review and request for information with who was asked
        and what they said, the report's version history, and the timeline across all of it. Requires reports:read,
        approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that
        reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every
        export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken. For a
        report the steps are the approvals, reviews and requests that point at it, which is the subject an auditor
        usually names and works for work done before flows existed.

        Args:
            id_or_slug: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The pack (JSON), or the timeline (CSV)

        Raises:
            ApiError: The key does not hold every scope the pack draws on Not found ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_reports_by_id_or_slug_evidence(
                id_or_slug, format_=format_, request_options=request_options
            ),
        )

    async def get_api_v1_reports_by_id_or_slug_versions(
        self,
        id_or_slug: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsVersionsResponse2:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Version history

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_reports_by_id_or_slug_versions(
                id_or_slug, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def patch_api_v1_reports_by_id_or_slug(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRequest1 | ApiV1ReportsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsResponse3:
        """Change the title, the address, or both. Changing the address keeps the old one: it permanently redirects to
        the new URL, so links already shared keep working. ``previousSlug`` names the address that was kept, or null
        when only the title changed.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Renamed

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.patch_api_v1_reports_by_id_or_slug(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_reports(
        self,
        *,
        body: ApiV1ReportsRequest | ApiV1ReportsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsResponse1:
        """Publish from an uploadId, inline HTML content, or inline files. Creates the report on first publish; new
        versions after that. ``taskId`` keeps the report with a Task Graph task: it is listed on the task and returned
        in the task's context. A later publish naming another task moves it there, and one naming none leaves it where
        it is. Naming a task needs ``tasks:read`` on the key and the Tasks plan feature (``402 feature_unavailable``
        without it).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Published

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_reports(body=body, request_options=request_options))

    async def post_api_v1_reports_by_id_or_slug_archive(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsArchiveRequest | ApiV1ReportsArchiveRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsArchiveResponse:
        """Archiving stops the URL serving: a reader following a link they already hold is told the report is no longer
        available. Nothing is deleted and the audience is kept, so ``{"archived": false}`` restores it exactly as it
        was. The body is optional and defaults to archiving.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archived, or restored

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_reports_by_id_or_slug_archive(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_reports_by_id_or_slug_comments(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsCommentsRequest | ApiV1ReportsCommentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsCommentsResponse1:
        """Omit ``quote`` for a comment about the report as a whole. Include it and the comment attaches to that passage
        and highlights it, the way a reader's selection does. The quote must occur exactly once in the current version;
        otherwise the request is refused rather than placed on a guess.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Comment posted

        Raises:
            ApiError: ``quote_not_found`` — the passage is not in the current version; ``quote_ambiguous`` — it occurs
                more than once, quote more of the surrounding sentence. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_reports_by_id_or_slug_comments(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_reports_by_id_or_slug_copy(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsCopyRequest | ApiV1ReportsCopyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsCopyResponse:
        """Duplicate a report's current version into a new report you own — the primitive behind duplicating a report
        and behind using one as a template. The copy carries the content, the classification and any datasets; it
        carries **no** audience, comments or share links, and starts private to you. Requires that you can already read
        the source and may publish. Agent keys are refused: a copy lands outside an agent's allow-list.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The new report

        Raises:
            ApiError: ``not_readable`` — you have no access to the source; ``agent_not_permitted`` — agent keys cannot
                copy. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_reports_by_id_or_slug_copy(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_reports_by_id_or_slug_revision_briefs(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRevisionBriefsRequest | ApiV1ReportsRevisionBriefsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsRevisionBriefsResponse:
        """One prompt an agent can revise the report from: each open thread's quoted passage, the surrounding text in
        the current version, the conversation, and signed links to the images readers attached, ending with how to
        publish the next version and close each thread. Composing a brief is recorded on the report. Pass ``threadIds``
        to include only some open threads.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The brief

        Raises:
            ApiError: ``no_open_threads`` — nothing to revise from; ``no_version`` — the report has never been
                published. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_reports_by_id_or_slug_revision_briefs(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_reports_by_id_or_slug_rollback(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRollbackRequest | ApiV1ReportsRollbackRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsRollbackResponse:
        """Serve an earlier version again at the same URL. Name it by number — the ``currentVersion`` and
        ``latestVersion`` every other endpoint returns — or by ``versionId`` from the versions list. Nothing is deleted:
        roll forward the same way.

        Datasets are not versioned, so a rollback restores the markup and not the numbers it renders.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rolled back

        Raises:
            ApiError: ``not_found`` — no such report, or no such version. ``approval_pending`` — that version is
                awaiting approval or was declined. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_reports_by_id_or_slug_rollback(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_reports_by_id_or_slug_send(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsSendRequest | ApiV1ReportsSendRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsSendResponse:
        """Distinct from ``POST …/share``, which grants access to people the organisation already knows. This takes bare
        email addresses, creates the guest records behind them, grants access and emails each recipient a link with the
        sender's covering note.

        **Not a mailing list.** Each recipient gets their own link tied to their own guest record, which is what makes
        the audit trail and the per-reader analytics mean anything — and why the list is capped at 50. The link keeps
        working as the report is updated, so there is no new file to send next time.

        Governed by everything a share is, because it grants through the same function: the ``share_external``
        publishing policy — which the seeded confidential-and-restricted rule denies outright — the agent's own
        allow-list, the expiry clamp, the audit trail and the ``report.shared`` webhook. A recipient who already had
        access is emailed again rather than skipped: re-sending to somebody who says they never got it is the point.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sent

        Raises:
            ApiError: A publishing rule or the agent's policy refused it — commonly ``policy_denied`` on a confidential
                or restricted report. ``not_found``. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_reports_by_id_or_slug_send(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_reports_by_id_or_slug_share(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsShareRequest | ApiV1ReportsShareRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsShareResponse:
        """``capability`` is what the audience may do: ``view`` (the default) or ``comment``. A grant that already
        exists is only ever raised, never lowered, by granting again.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Grants applied

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_reports_by_id_or_slug_share(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    async def post_api_v1_reports_by_id_or_slug_versions(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsVersionsRequest | ApiV1ReportsVersionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsVersionsResponse:
        """Send a ``POST`` request.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            New version published

        Raises:
            ApiError: ``expectedVersion`` was supplied and is no longer current — someone published in between.
                ``details.currentVersion`` says what is. Re-read that version, redo the change on top of it, and retry.
                ``error`` is ``ApiV1ReportsVersions409Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_reports_by_id_or_slug_versions(
                id_or_slug, body=body, request_options=request_options
            ),
        )

    async def put_api_v1_reports_by_id_or_slug_data_by_name(
        self,
        id_or_slug: str,
        name: str,
        *,
        body: dict[str, Any] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReportsDataResponse1:
        """Data the published report fetches at view time, so a dashboard can show current numbers without republishing.
        The body is JSON, stored verbatim, up to 5 MB. Served behind the same access check as the report and never
        edge-cached.

        **A dataset is mutable and a version is not.** Rolling the report back does not roll the data back — the earlier
        markup renders today's numbers.

        Args:
            id_or_slug: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stored

        Raises:
            ApiError: ``invalid_json`` or ``invalid_name``. ``too_many`` — a report may hold 25 datasets. ``too_large``
                — the limit is 5 MB. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.put_api_v1_reports_by_id_or_slug_data_by_name(
                id_or_slug, name, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncReportsWithRawResponse:
        return self._with_raw_response


class ReportsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_reports_by_id_or_slug_comments_by_comment_id(
        self, id_or_slug: str, comment_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReportsCommentsResponse2, DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody]:
        """Take back a comment this credential posted. Your own last comment in a thread, while the thread is open: once
        somebody has replied it stays, so their reply is never left answering something no longer on the page.
        Retracting the only comment in a thread takes the thread and its highlight with it, and removes any images
        attached to the comment. It unsends nothing — the report's owner may have been emailed when it was posted.
        ``commentId`` comes from the ``POST`` above or from ``GET /reports/{idOrSlug}/comments``, which marks the one
        message this credential can still take back.

        Args:
            id_or_slug: Value sent with the request.
            comment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/comments/{commentId}"),
            path_params=[param[str]("idOrSlug", id_or_slug), param[UUID]("commentId", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsCommentsResponse2],
            error_mapper=delete_api_v1_reports_by_id_or_slug_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    def delete_api_v1_reports_by_id_or_slug_data_by_name(
        self, id_or_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_or_slug: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/data/{name}"),
            path_params=[param[str]("idOrSlug", id_or_slug), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_api_v1_reports_by_id_or_slug_share(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsShareRequest1 | ApiV1ReportsShareRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsShareResponse1, RawError]:
        """Take access away from the same audience phrase that granted it. By audience rather than by grant id because
        that is all a caller has: the audience on ``GET /reports/{idOrSlug}`` carries each grant's *principal* id, never
        the grant row's. The owner's access cannot be revoked, and an audience that never had access is a refusal rather
        than a no-op — a caller told "revoked" for a grant that was not there would report the door shut while it is
        open.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/share"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsShareRequest1 | ApiV1ReportsShareRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsShareResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_reports(
        self,
        *,
        q: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            q: Searches title, slug and description
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports"),
            query_params=[
                param[str | None]("q", q), param[int | None]("limit", limit), param[str | None]("cursor", cursor)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_reports_by_id_or_slug(
        self, id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReportsResponse4, RawError]:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsResponse4],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_reports_by_id_or_slug_analytics(
        self, id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReportsAnalyticsResponse, GetApiV1ReportsByIdOrSlugAnalyticsErrorBody]:
        """The same figures the report page shows. Total views are on every plan; unique, internal and external viewers,
        the 30-day series, per-version views and recent readers need the analytics entitlement and come back null or
        empty without it. Reader names appear only when the organisation's sharing policy shows viewer identities.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/analytics"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsAnalyticsResponse],
            error_mapper=get_api_v1_reports_by_id_or_slug_analytics_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_reports_by_id_or_slug_comments(
        self,
        id_or_slug: str,
        *,
        status: Status12OrStr | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsCommentsResponse, RawError]:
        """Threads with the quoted passage and a plain-text excerpt of the surrounding content in the *current* version,
        so a client can find what to change without fetching the file. ``anchorStatus`` says whether the commented text
        still exists: ``anchored`` and ``shifted`` mean it does; ``stale`` means it was edited away, and the excerpt
        then comes from the version the comment was written against.

        Args:
            id_or_slug: Value sent with the request.
            status: Defaults to open — the threads still needing action
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/comments"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            query_params=[
                param[Status12OrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsCommentsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_reports_by_id_or_slug_data(
        self, id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReportsDataResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/data"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsDataResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_reports_by_id_or_slug_evidence(
        self,
        id_or_slug: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], GetApiV1ReportsByIdOrSlugEvidenceErrorBody]:
        """The whole record of one piece of work: every approval, review and request for information with who was asked
        and what they said, the report's version history, and the timeline across all of it. Requires reports:read,
        approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that
        reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every
        export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken. For a
        report the steps are the approvals, reviews and requests that point at it, which is the subject an auditor
        usually names and works for work done before flows existed.

        Args:
            id_or_slug: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/evidence"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_reports_by_id_or_slug_evidence_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_reports_by_id_or_slug_versions(
        self,
        id_or_slug: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsVersionsResponse2, RawError]:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/versions"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsVersionsResponse2],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def patch_api_v1_reports_by_id_or_slug(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRequest1 | ApiV1ReportsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsResponse3, RawError]:
        """Change the title, the address, or both. Changing the address keeps the old one: it permanently redirects to
        the new URL, so links already shared keep working. ``previousSlug`` names the address that was kept, or null
        when only the title changed.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsRequest1 | ApiV1ReportsRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsResponse3],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_reports(
        self,
        *,
        body: ApiV1ReportsRequest | ApiV1ReportsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsResponse1, RawError]:
        """Publish from an uploadId, inline HTML content, or inline files. Creates the report on first publish; new
        versions after that. ``taskId`` keeps the report with a Task Graph task: it is listed on the task and returned
        in the task's context. A later publish naming another task moves it there, and one naming none leaves it where
        it is. Naming a task needs ``tasks:read`` on the key and the Tasks plan feature (``402 feature_unavailable``
        without it).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsRequest | ApiV1ReportsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_reports_by_id_or_slug_archive(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsArchiveRequest | ApiV1ReportsArchiveRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsArchiveResponse, RawError]:
        """Archiving stops the URL serving: a reader following a link they already hold is told the report is no longer
        available. Nothing is deleted and the audience is kept, so ``{"archived": false}`` restores it exactly as it
        was. The body is optional and defaults to archiving.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/archive"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsArchiveRequest | ApiV1ReportsArchiveRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsArchiveResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_reports_by_id_or_slug_comments(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsCommentsRequest | ApiV1ReportsCommentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsCommentsResponse1, PostApiV1ReportsByIdOrSlugCommentsErrorBody]:
        """Omit ``quote`` for a comment about the report as a whole. Include it and the comment attaches to that passage
        and highlights it, the way a reader's selection does. The quote must occur exactly once in the current version;
        otherwise the request is refused rather than placed on a guess.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/comments"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsCommentsRequest | ApiV1ReportsCommentsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsCommentsResponse1],
            error_mapper=post_api_v1_reports_by_id_or_slug_comments_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_reports_by_id_or_slug_copy(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsCopyRequest | ApiV1ReportsCopyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsCopyResponse, PostApiV1ReportsByIdOrSlugCopyErrorBody]:
        """Duplicate a report's current version into a new report you own — the primitive behind duplicating a report
        and behind using one as a template. The copy carries the content, the classification and any datasets; it
        carries **no** audience, comments or share links, and starts private to you. Requires that you can already read
        the source and may publish. Agent keys are refused: a copy lands outside an agent's allow-list.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/copy"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsCopyRequest | ApiV1ReportsCopyRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsCopyResponse],
            error_mapper=post_api_v1_reports_by_id_or_slug_copy_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_reports_by_id_or_slug_revision_briefs(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRevisionBriefsRequest | ApiV1ReportsRevisionBriefsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsRevisionBriefsResponse, PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody]:
        """One prompt an agent can revise the report from: each open thread's quoted passage, the surrounding text in
        the current version, the conversation, and signed links to the images readers attached, ending with how to
        publish the next version and close each thread. Composing a brief is recorded on the report. Pass ``threadIds``
        to include only some open threads.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/revision-briefs"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsRevisionBriefsRequest | ApiV1ReportsRevisionBriefsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsRevisionBriefsResponse],
            error_mapper=post_api_v1_reports_by_id_or_slug_revision_briefs_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_reports_by_id_or_slug_rollback(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRollbackRequest | ApiV1ReportsRollbackRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsRollbackResponse, PostApiV1ReportsByIdOrSlugRollbackErrorBody]:
        """Serve an earlier version again at the same URL. Name it by number — the ``currentVersion`` and
        ``latestVersion`` every other endpoint returns — or by ``versionId`` from the versions list. Nothing is deleted:
        roll forward the same way.

        Datasets are not versioned, so a rollback restores the markup and not the numbers it renders.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/rollback"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsRollbackRequest | ApiV1ReportsRollbackRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsRollbackResponse],
            error_mapper=post_api_v1_reports_by_id_or_slug_rollback_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_reports_by_id_or_slug_send(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsSendRequest | ApiV1ReportsSendRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsSendResponse, PostApiV1ReportsByIdOrSlugSendErrorBody]:
        """Distinct from ``POST …/share``, which grants access to people the organisation already knows. This takes bare
        email addresses, creates the guest records behind them, grants access and emails each recipient a link with the
        sender's covering note.

        **Not a mailing list.** Each recipient gets their own link tied to their own guest record, which is what makes
        the audit trail and the per-reader analytics mean anything — and why the list is capped at 50. The link keeps
        working as the report is updated, so there is no new file to send next time.

        Governed by everything a share is, because it grants through the same function: the ``share_external``
        publishing policy — which the seeded confidential-and-restricted rule denies outright — the agent's own
        allow-list, the expiry clamp, the audit trail and the ``report.shared`` webhook. A recipient who already had
        access is emailed again rather than skipped: re-sending to somebody who says they never got it is the point.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/send"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsSendRequest | ApiV1ReportsSendRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsSendResponse],
            error_mapper=post_api_v1_reports_by_id_or_slug_send_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_reports_by_id_or_slug_share(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsShareRequest | ApiV1ReportsShareRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsShareResponse, RawError]:
        """``capability`` is what the audience may do: ``view`` (the default) or ``comment``. A grant that already
        exists is only ever raised, never lowered, by granting again.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/share"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsShareRequest | ApiV1ReportsShareRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsShareResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def post_api_v1_reports_by_id_or_slug_versions(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsVersionsRequest | ApiV1ReportsVersionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsVersionsResponse, PostApiV1ReportsByIdOrSlugVersionsErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/versions"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsVersionsRequest | ApiV1ReportsVersionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsVersionsResponse],
            error_mapper=post_api_v1_reports_by_id_or_slug_versions_error_mapper,
            request_options=request_options,
        )

    def put_api_v1_reports_by_id_or_slug_data_by_name(
        self,
        id_or_slug: str,
        name: str,
        *,
        body: dict[str, Any] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsDataResponse1, PutApiV1ReportsByIdOrSlugDataByNameErrorBody]:
        """Data the published report fetches at view time, so a dashboard can show current numbers without republishing.
        The body is JSON, stored verbatim, up to 5 MB. Served behind the same access check as the report and never
        edge-cached.

        **A dataset is mutable and a version is not.** Rolling the report back does not roll the data back — the earlier
        markup renders today's numbers.

        Args:
            id_or_slug: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/data/{name}"),
            path_params=[param[str]("idOrSlug", id_or_slug), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[dict[str, Any] | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReportsDataResponse1],
            error_mapper=put_api_v1_reports_by_id_or_slug_data_by_name_error_mapper,
            request_options=request_options,
        )


class AsyncReportsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_reports_by_id_or_slug_comments_by_comment_id(
        self, id_or_slug: str, comment_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReportsCommentsResponse2, DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody]:
        """Take back a comment this credential posted. Your own last comment in a thread, while the thread is open: once
        somebody has replied it stays, so their reply is never left answering something no longer on the page.
        Retracting the only comment in a thread takes the thread and its highlight with it, and removes any images
        attached to the comment. It unsends nothing — the report's owner may have been emailed when it was posted.
        ``commentId`` comes from the ``POST`` above or from ``GET /reports/{idOrSlug}/comments``, which marks the one
        message this credential can still take back.

        Args:
            id_or_slug: Value sent with the request.
            comment_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/comments/{commentId}"),
            path_params=[param[str]("idOrSlug", id_or_slug), param[UUID]("commentId", comment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsCommentsResponse2],
            error_mapper=delete_api_v1_reports_by_id_or_slug_comments_by_comment_id_error_mapper,
            request_options=request_options,
        )

    async def delete_api_v1_reports_by_id_or_slug_data_by_name(
        self, id_or_slug: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_or_slug: Value sent with the request.
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/data/{name}"),
            path_params=[param[str]("idOrSlug", id_or_slug), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_api_v1_reports_by_id_or_slug_share(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsShareRequest1 | ApiV1ReportsShareRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsShareResponse1, RawError]:
        """Take access away from the same audience phrase that granted it. By audience rather than by grant id because
        that is all a caller has: the audience on ``GET /reports/{idOrSlug}`` carries each grant's *principal* id, never
        the grant row's. The owner's access cannot be revoked, and an audience that never had access is a refusal rather
        than a no-op — a caller told "revoked" for a grant that was not there would report the door shut while it is
        open.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/share"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsShareRequest1 | ApiV1ReportsShareRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsShareResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_reports(
        self,
        *,
        q: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            q: Searches title, slug and description
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports"),
            query_params=[
                param[str | None]("q", q), param[int | None]("limit", limit), param[str | None]("cursor", cursor)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_reports_by_id_or_slug(
        self, id_or_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReportsResponse4, RawError]:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsResponse4],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_reports_by_id_or_slug_analytics(
        self, id_or_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReportsAnalyticsResponse, GetApiV1ReportsByIdOrSlugAnalyticsErrorBody]:
        """The same figures the report page shows. Total views are on every plan; unique, internal and external viewers,
        the 30-day series, per-version views and recent readers need the analytics entitlement and come back null or
        empty without it. Reader names appear only when the organisation's sharing policy shows viewer identities.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/analytics"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsAnalyticsResponse],
            error_mapper=get_api_v1_reports_by_id_or_slug_analytics_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_reports_by_id_or_slug_comments(
        self,
        id_or_slug: str,
        *,
        status: Status12OrStr | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsCommentsResponse, RawError]:
        """Threads with the quoted passage and a plain-text excerpt of the surrounding content in the *current* version,
        so a client can find what to change without fetching the file. ``anchorStatus`` says whether the commented text
        still exists: ``anchored`` and ``shifted`` mean it does; ``stale`` means it was edited away, and the excerpt
        then comes from the version the comment was written against.

        Args:
            id_or_slug: Value sent with the request.
            status: Defaults to open — the threads still needing action
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/comments"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            query_params=[
                param[Status12OrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsCommentsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_reports_by_id_or_slug_data(
        self, id_or_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReportsDataResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/data"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsDataResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_reports_by_id_or_slug_evidence(
        self,
        id_or_slug: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], GetApiV1ReportsByIdOrSlugEvidenceErrorBody]:
        """The whole record of one piece of work: every approval, review and request for information with who was asked
        and what they said, the report's version history, and the timeline across all of it. Requires reports:read,
        approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that
        reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every
        export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken. For a
        report the steps are the approvals, reviews and requests that point at it, which is the subject an auditor
        usually names and works for work done before flows existed.

        Args:
            id_or_slug: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/evidence"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_reports_by_id_or_slug_evidence_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_reports_by_id_or_slug_versions(
        self,
        id_or_slug: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsVersionsResponse2, RawError]:
        """Send a ``GET`` request.

        Args:
            id_or_slug: Value sent with the request.
            limit: Rows per page. Above the maximum you get the maximum, not an error.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/versions"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsVersionsResponse2],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def patch_api_v1_reports_by_id_or_slug(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRequest1 | ApiV1ReportsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsResponse3, RawError]:
        """Change the title, the address, or both. Changing the address keeps the old one: it permanently redirects to
        the new URL, so links already shared keep working. ``previousSlug`` names the address that was kept, or null
        when only the title changed.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsRequest1 | ApiV1ReportsRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsResponse3],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_reports(
        self,
        *,
        body: ApiV1ReportsRequest | ApiV1ReportsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsResponse1, RawError]:
        """Publish from an uploadId, inline HTML content, or inline files. Creates the report on first publish; new
        versions after that. ``taskId`` keeps the report with a Task Graph task: it is listed on the task and returned
        in the task's context. A later publish naming another task moves it there, and one naming none leaves it where
        it is. Naming a task needs ``tasks:read`` on the key and the Tasks plan feature (``402 feature_unavailable``
        without it).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsRequest | ApiV1ReportsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_reports_by_id_or_slug_archive(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsArchiveRequest | ApiV1ReportsArchiveRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsArchiveResponse, RawError]:
        """Archiving stops the URL serving: a reader following a link they already hold is told the report is no longer
        available. Nothing is deleted and the audience is kept, so ``{"archived": false}`` restores it exactly as it
        was. The body is optional and defaults to archiving.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/archive"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsArchiveRequest | ApiV1ReportsArchiveRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsArchiveResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_reports_by_id_or_slug_comments(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsCommentsRequest | ApiV1ReportsCommentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsCommentsResponse1, PostApiV1ReportsByIdOrSlugCommentsErrorBody]:
        """Omit ``quote`` for a comment about the report as a whole. Include it and the comment attaches to that passage
        and highlights it, the way a reader's selection does. The quote must occur exactly once in the current version;
        otherwise the request is refused rather than placed on a guess.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/comments"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsCommentsRequest | ApiV1ReportsCommentsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsCommentsResponse1],
            error_mapper=post_api_v1_reports_by_id_or_slug_comments_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_reports_by_id_or_slug_copy(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsCopyRequest | ApiV1ReportsCopyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsCopyResponse, PostApiV1ReportsByIdOrSlugCopyErrorBody]:
        """Duplicate a report's current version into a new report you own — the primitive behind duplicating a report
        and behind using one as a template. The copy carries the content, the classification and any datasets; it
        carries **no** audience, comments or share links, and starts private to you. Requires that you can already read
        the source and may publish. Agent keys are refused: a copy lands outside an agent's allow-list.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/copy"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsCopyRequest | ApiV1ReportsCopyRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsCopyResponse],
            error_mapper=post_api_v1_reports_by_id_or_slug_copy_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_reports_by_id_or_slug_revision_briefs(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRevisionBriefsRequest | ApiV1ReportsRevisionBriefsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsRevisionBriefsResponse, PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody]:
        """One prompt an agent can revise the report from: each open thread's quoted passage, the surrounding text in
        the current version, the conversation, and signed links to the images readers attached, ending with how to
        publish the next version and close each thread. Composing a brief is recorded on the report. Pass ``threadIds``
        to include only some open threads.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/revision-briefs"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsRevisionBriefsRequest | ApiV1ReportsRevisionBriefsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsRevisionBriefsResponse],
            error_mapper=post_api_v1_reports_by_id_or_slug_revision_briefs_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_reports_by_id_or_slug_rollback(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsRollbackRequest | ApiV1ReportsRollbackRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsRollbackResponse, PostApiV1ReportsByIdOrSlugRollbackErrorBody]:
        """Serve an earlier version again at the same URL. Name it by number — the ``currentVersion`` and
        ``latestVersion`` every other endpoint returns — or by ``versionId`` from the versions list. Nothing is deleted:
        roll forward the same way.

        Datasets are not versioned, so a rollback restores the markup and not the numbers it renders.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/rollback"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsRollbackRequest | ApiV1ReportsRollbackRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsRollbackResponse],
            error_mapper=post_api_v1_reports_by_id_or_slug_rollback_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_reports_by_id_or_slug_send(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsSendRequest | ApiV1ReportsSendRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsSendResponse, PostApiV1ReportsByIdOrSlugSendErrorBody]:
        """Distinct from ``POST …/share``, which grants access to people the organisation already knows. This takes bare
        email addresses, creates the guest records behind them, grants access and emails each recipient a link with the
        sender's covering note.

        **Not a mailing list.** Each recipient gets their own link tied to their own guest record, which is what makes
        the audit trail and the per-reader analytics mean anything — and why the list is capped at 50. The link keeps
        working as the report is updated, so there is no new file to send next time.

        Governed by everything a share is, because it grants through the same function: the ``share_external``
        publishing policy — which the seeded confidential-and-restricted rule denies outright — the agent's own
        allow-list, the expiry clamp, the audit trail and the ``report.shared`` webhook. A recipient who already had
        access is emailed again rather than skipped: re-sending to somebody who says they never got it is the point.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/send"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsSendRequest | ApiV1ReportsSendRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsSendResponse],
            error_mapper=post_api_v1_reports_by_id_or_slug_send_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_reports_by_id_or_slug_share(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsShareRequest | ApiV1ReportsShareRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsShareResponse, RawError]:
        """``capability`` is what the audience may do: ``view`` (the default) or ``comment``. A grant that already
        exists is only ever raised, never lowered, by granting again.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/share"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsShareRequest | ApiV1ReportsShareRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsShareResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_api_v1_reports_by_id_or_slug_versions(
        self,
        id_or_slug: str,
        *,
        body: ApiV1ReportsVersionsRequest | ApiV1ReportsVersionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsVersionsResponse, PostApiV1ReportsByIdOrSlugVersionsErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_or_slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/versions"),
            path_params=[param[str]("idOrSlug", id_or_slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReportsVersionsRequest | ApiV1ReportsVersionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsVersionsResponse],
            error_mapper=post_api_v1_reports_by_id_or_slug_versions_error_mapper,
            request_options=request_options,
        )

    async def put_api_v1_reports_by_id_or_slug_data_by_name(
        self,
        id_or_slug: str,
        name: str,
        *,
        body: dict[str, Any] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReportsDataResponse1, PutApiV1ReportsByIdOrSlugDataByNameErrorBody]:
        """Data the published report fetches at view time, so a dashboard can show current numbers without republishing.
        The body is JSON, stored verbatim, up to 5 MB. Served behind the same access check as the report and never
        edge-cached.

        **A dataset is mutable and a version is not.** Rolling the report back does not roll the data back — the earlier
        markup renders today's numbers.

        Args:
            id_or_slug: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/reports/{idOrSlug}/data/{name}"),
            path_params=[param[str]("idOrSlug", id_or_slug), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[dict[str, Any] | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReportsDataResponse1],
            error_mapper=put_api_v1_reports_by_id_or_slug_data_by_name_error_mapper,
            request_options=request_options,
        )
