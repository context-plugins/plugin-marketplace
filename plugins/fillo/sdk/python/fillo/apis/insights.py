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
    param,
    unwrap,
)
from ..errors.get_form_insights_error import GetFormInsightsErrorBody, get_form_insights_error_mapper
from ..models.enums.op import OpOrStr
from ..models.enums.range import RangeOrStr
from ..models.form_insights import FormInsights
from ..server.server import Server


class Insights:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InsightsWithRawResponse(client, server, auth)

    def get_form_insights(
        self,
        form: str,
        *,
        range_: RangeOrStr | None = None,
        q: str | None = None,
        source: str | None = None,
        respondent: str | None = None,
        where: list[str] | None = None,
        by: str | None = None,
        op: OpOrStr | None = None,
        eq: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FormInsights:
        """The numbers the dashboard's Insights page shows, from the same core: totals, median completion time,
        seven-day change, the daily timeline, source and surface breakdowns, the drop-off funnel, open drafts, and every
        question's distribution. Filters use the same grammar as the responses list, so the numbers and the rows always
        describe the same set. Accepted responses only. Every question's distribution quotes respondent answers verbatim
        as labels, so this is a response read wearing an analytics shape: it needs forms:read AND responses:read, the
        second asserted after authentication and named in its own 403.

        Args:
            form: A form id or slug.
            range_: Date window: 7d, 30d, 90d, or all (default).
            q: Free-text search across answers and source.
            source: Match the submission source (host + path).
            respondent: Exact identify() external id.
            where: Field filter as ``fieldId:op:value``, repeatable, max 20. op is one of eq, neq, contains, gt, lt,
                answered, not_answered.
            by: Compare the cohort that answered this field against the baseline.
            op: How ``by`` matches. Default eq.
            eq: The value ``by`` must equal when op is eq.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's insights for the requested window and filters.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_form_insights(
                form,
                range_=range_,
                q=q,
                source=source,
                respondent=respondent,
                where=where,
                by=by,
                op=op,
                eq=eq,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> InsightsWithRawResponse:
        return self._with_raw_response


class AsyncInsights:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInsightsWithRawResponse(client, server, auth)

    async def get_form_insights(
        self,
        form: str,
        *,
        range_: RangeOrStr | None = None,
        q: str | None = None,
        source: str | None = None,
        respondent: str | None = None,
        where: list[str] | None = None,
        by: str | None = None,
        op: OpOrStr | None = None,
        eq: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FormInsights:
        """The numbers the dashboard's Insights page shows, from the same core: totals, median completion time,
        seven-day change, the daily timeline, source and surface breakdowns, the drop-off funnel, open drafts, and every
        question's distribution. Filters use the same grammar as the responses list, so the numbers and the rows always
        describe the same set. Accepted responses only. Every question's distribution quotes respondent answers verbatim
        as labels, so this is a response read wearing an analytics shape: it needs forms:read AND responses:read, the
        second asserted after authentication and named in its own 403.

        Args:
            form: A form id or slug.
            range_: Date window: 7d, 30d, 90d, or all (default).
            q: Free-text search across answers and source.
            source: Match the submission source (host + path).
            respondent: Exact identify() external id.
            where: Field filter as ``fieldId:op:value``, repeatable, max 20. op is one of eq, neq, contains, gt, lt,
                answered, not_answered.
            by: Compare the cohort that answered this field against the baseline.
            op: How ``by`` matches. Default eq.
            eq: The value ``by`` must equal when op is eq.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's insights for the requested window and filters.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_form_insights(
                form,
                range_=range_,
                q=q,
                source=source,
                respondent=respondent,
                where=where,
                by=by,
                op=op,
                eq=eq,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInsightsWithRawResponse:
        return self._with_raw_response


class InsightsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_form_insights(
        self,
        form: str,
        *,
        range_: RangeOrStr | None = None,
        q: str | None = None,
        source: str | None = None,
        respondent: str | None = None,
        where: list[str] | None = None,
        by: str | None = None,
        op: OpOrStr | None = None,
        eq: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FormInsights, GetFormInsightsErrorBody]:
        """The numbers the dashboard's Insights page shows, from the same core: totals, median completion time,
        seven-day change, the daily timeline, source and surface breakdowns, the drop-off funnel, open drafts, and every
        question's distribution. Filters use the same grammar as the responses list, so the numbers and the rows always
        describe the same set. Accepted responses only. Every question's distribution quotes respondent answers verbatim
        as labels, so this is a response read wearing an analytics shape: it needs forms:read AND responses:read, the
        second asserted after authentication and named in its own 403.

        Args:
            form: A form id or slug.
            range_: Date window: 7d, 30d, 90d, or all (default).
            q: Free-text search across answers and source.
            source: Match the submission source (host + path).
            respondent: Exact identify() external id.
            where: Field filter as ``fieldId:op:value``, repeatable, max 20. op is one of eq, neq, contains, gt, lt,
                answered, not_answered.
            by: Compare the cohort that answered this field against the baseline.
            op: How ``by`` matches. Default eq.
            eq: The value ``by`` must equal when op is eq.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/insights"),
            path_params=[param[str]("form", form)],
            query_params=[
                param[RangeOrStr | None]("range", range_),
                param[str | None]("q", q),
                param[str | None]("source", source),
                param[str | None]("respondent", respondent),
                param[list[str] | None]("where", where),
                param[str | None]("by", by),
                param[OpOrStr | None]("op", op),
                param[str | None]("eq", eq),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FormInsights],
            error_mapper=get_form_insights_error_mapper,
            request_options=request_options,
        )


class AsyncInsightsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_form_insights(
        self,
        form: str,
        *,
        range_: RangeOrStr | None = None,
        q: str | None = None,
        source: str | None = None,
        respondent: str | None = None,
        where: list[str] | None = None,
        by: str | None = None,
        op: OpOrStr | None = None,
        eq: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FormInsights, GetFormInsightsErrorBody]:
        """The numbers the dashboard's Insights page shows, from the same core: totals, median completion time,
        seven-day change, the daily timeline, source and surface breakdowns, the drop-off funnel, open drafts, and every
        question's distribution. Filters use the same grammar as the responses list, so the numbers and the rows always
        describe the same set. Accepted responses only. Every question's distribution quotes respondent answers verbatim
        as labels, so this is a response read wearing an analytics shape: it needs forms:read AND responses:read, the
        second asserted after authentication and named in its own 403.

        Args:
            form: A form id or slug.
            range_: Date window: 7d, 30d, 90d, or all (default).
            q: Free-text search across answers and source.
            source: Match the submission source (host + path).
            respondent: Exact identify() external id.
            where: Field filter as ``fieldId:op:value``, repeatable, max 20. op is one of eq, neq, contains, gt, lt,
                answered, not_answered.
            by: Compare the cohort that answered this field against the baseline.
            op: How ``by`` matches. Default eq.
            eq: The value ``by`` must equal when op is eq.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/insights"),
            path_params=[param[str]("form", form)],
            query_params=[
                param[RangeOrStr | None]("range", range_),
                param[str | None]("q", q),
                param[str | None]("source", source),
                param[str | None]("respondent", respondent),
                param[list[str] | None]("where", where),
                param[str | None]("by", by),
                param[OpOrStr | None]("op", op),
                param[str | None]("eq", eq),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FormInsights],
            error_mapper=get_form_insights_error_mapper,
            request_options=request_options,
        )
