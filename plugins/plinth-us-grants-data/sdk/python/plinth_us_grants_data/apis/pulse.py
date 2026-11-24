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
from ..errors.create_pulse_error import CreatePulseErrorBody, create_pulse_error_mapper
from ..errors.delete_pulse_error import DeletePulseErrorBody, delete_pulse_error_mapper
from ..errors.get_pulse_error import GetPulseErrorBody, get_pulse_error_mapper
from ..errors.get_pulse_latest_error import GetPulseLatestErrorBody, get_pulse_latest_error_mapper
from ..errors.get_pulse_run_error import GetPulseRunErrorBody, get_pulse_run_error_mapper
from ..errors.list_pulse_error import ListPulseErrorBody, list_pulse_error_mapper
from ..errors.list_pulse_runs_error import ListPulseRunsErrorBody, list_pulse_runs_error_mapper
from ..errors.run_pulse_error import RunPulseErrorBody, run_pulse_error_mapper
from ..errors.update_pulse_error import UpdatePulseErrorBody, update_pulse_error_mapper
from ..models.enums.format import FormatOrStr
from ..models.pulse_create import PulseCreate, PulseCreateDict
from ..models.pulse_patch import PulsePatch, PulsePatchDict
from ..server.server import Server


class Pulse:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PulseWithRawResponse(client, server, auth)

    def create_pulse(
        self, body: PulseCreate | PulseCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Watch up to 200 EINs on a schedule you choose (hourly to monthly). Each run diffs the organizations against
        the last run and reports what moved: compliance screen changes, new Form 990 data, new grants in and out of the
        graph, government funding movement, officer and trustee roster changes, and web press and job-posting signals.
        The digest is available as JSON, an HTML page, a PDF, and optionally by email.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.create_pulse(body, request_options=request_options))

    def delete_pulse(self, sub_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Removes the subscription, its check state and every stored digest. There is no undo; pausing with ``active:
        false`` is the reversible form.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.delete_pulse(sub_id, request_options=request_options))

    def get_pulse(self, sub_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """The subscription's configuration plus the id, timestamp and severity totals of its most recent digest, if one
        has run.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.get_pulse(sub_id, request_options=request_options))

    def get_pulse_latest(
        self, sub_id: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """The digest payload as JSON by default; ``format=html`` renders the self-contained page (the same document the
        email carries), ``format=pdf`` the retainable report. Every finding is dated and carries its source; the
        provenance footer states the filing lag and what was not checked.

        Args:
            sub_id: Value sent with the request.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_pulse_latest(sub_id, format_=format_, request_options=request_options)
        )

    def get_pulse_run(
        self,
        sub_id: str,
        run_id: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """A specific past digest, unchanged since it ran — the same three formats as /latest.

        Args:
            sub_id: Value sent with the request.
            run_id: Value sent with the request.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_pulse_run(sub_id, run_id, format_=format_, request_options=request_options)
        )

    def list_pulse(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Every subscription created with this key, newest first. Subscriptions are scoped to the key that created
        them; another key's subscriptions are not listed and answer 404 by id.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.list_pulse(request_options=request_options))

    def list_pulse_runs(self, sub_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Stored run ids, oldest first. Each loads via /pulse/{sub_id}/runs/{run_id}.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.list_pulse_runs(sub_id, request_options=request_options))

    def run_pulse(
        self,
        sub_id: str,
        *,
        checks: str | None = None,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Runs the checks synchronously and returns the digest. The first run is a baseline: it records what is on file
        today and reports changes from the next run on. ``checks`` narrows the run; ``format=html|pdf`` renders it.

        Args:
            sub_id: Value sent with the request.
            checks: Narrow the run to these checks, comma-separated: compliance, filings, grants, gov, people, web. Omit
                for the subscription's full set.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.run_pulse(sub_id, checks=checks, format_=format_, request_options=request_options)
        )

    def update_pulse(
        self, sub_id: str, body: PulsePatch | PulsePatchDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Any field omitted is left as it is. Changing the frequency re-anchors the next run from now; ``active:
        false`` pauses scheduled runs without deleting state, so unpausing resumes the diff rather than re-baselining.

        Args:
            sub_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.update_pulse(sub_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PulseWithRawResponse:
        return self._with_raw_response


class AsyncPulse:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPulseWithRawResponse(client, server, auth)

    async def create_pulse(
        self, body: PulseCreate | PulseCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Watch up to 200 EINs on a schedule you choose (hourly to monthly). Each run diffs the organizations against
        the last run and reports what moved: compliance screen changes, new Form 990 data, new grants in and out of the
        graph, government funding movement, officer and trustee roster changes, and web press and job-posting signals.
        The digest is available as JSON, an HTML page, a PDF, and optionally by email.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.create_pulse(body, request_options=request_options))

    async def delete_pulse(self, sub_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Removes the subscription, its check state and every stored digest. There is no undo; pausing with ``active:
        false`` is the reversible form.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.delete_pulse(sub_id, request_options=request_options))

    async def get_pulse(self, sub_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """The subscription's configuration plus the id, timestamp and severity totals of its most recent digest, if one
        has run.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.get_pulse(sub_id, request_options=request_options))

    async def get_pulse_latest(
        self,
        sub_id: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """The digest payload as JSON by default; ``format=html`` renders the self-contained page (the same document the
        email carries), ``format=pdf`` the retainable report. Every finding is dated and carries its source; the
        provenance footer states the filing lag and what was not checked.

        Args:
            sub_id: Value sent with the request.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pulse_latest(sub_id, format_=format_, request_options=request_options)
        )

    async def get_pulse_run(
        self,
        sub_id: str,
        run_id: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """A specific past digest, unchanged since it ran — the same three formats as /latest.

        Args:
            sub_id: Value sent with the request.
            run_id: Value sent with the request.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pulse_run(
                sub_id, run_id, format_=format_, request_options=request_options
            ),
        )

    async def list_pulse(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Every subscription created with this key, newest first. Subscriptions are scoped to the key that created
        them; another key's subscriptions are not listed and answer 404 by id.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.list_pulse(request_options=request_options))

    async def list_pulse_runs(self, sub_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Stored run ids, oldest first. Each loads via /pulse/{sub_id}/runs/{run_id}.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.list_pulse_runs(sub_id, request_options=request_options))

    async def run_pulse(
        self,
        sub_id: str,
        *,
        checks: str | None = None,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Runs the checks synchronously and returns the digest. The first run is a baseline: it records what is on file
        today and reports changes from the next run on. ``checks`` narrows the run; ``format=html|pdf`` renders it.

        Args:
            sub_id: Value sent with the request.
            checks: Narrow the run to these checks, comma-separated: compliance, filings, grants, gov, people, web. Omit
                for the subscription's full set.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.run_pulse(
                sub_id, checks=checks, format_=format_, request_options=request_options
            ),
        )

    async def update_pulse(
        self,
        sub_id: str,
        body: PulsePatch | PulsePatchDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Any field omitted is left as it is. Changing the frequency re-anchors the next run from now; ``active:
        false`` pauses scheduled runs without deleting state, so unpausing resumes the diff rather than re-baselining.

        Args:
            sub_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: No API key, or a key we do not recognize. The call allowance is spent, the account is inactive, or
                the endpoint needs a paid plan — the message says which, and names the period it resets on (daily on
                free and non-profit plans, monthly on Pro). Validation Error ``error`` is ``ApiErrorModel |
                HttpValidationError | RawError``."""
        return unwrap(await self._with_raw_response.update_pulse(sub_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPulseWithRawResponse:
        return self._with_raw_response


class PulseWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_pulse(
        self, body: PulseCreate | PulseCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, CreatePulseErrorBody]:
        """Watch up to 200 EINs on a schedule you choose (hourly to monthly). Each run diffs the organizations against
        the last run and reports what moved: compliance screen changes, new Form 990 data, new grants in and out of the
        graph, government funding movement, officer and trustee roster changes, and web press and job-posting signals.
        The digest is available as JSON, an HTML page, a PDF, and optionally by email.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/pulse"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PulseCreate | PulseCreateDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=create_pulse_error_mapper,
            request_options=request_options,
        )

    def delete_pulse(
        self, sub_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeletePulseErrorBody]:
        """Removes the subscription, its check state and every stored digest. There is no undo; pausing with ``active:
        false`` is the reversible form.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/pulse/{sub_id}"),
            path_params=[param[str]("sub_id", sub_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=delete_pulse_error_mapper,
            request_options=request_options,
        )

    def get_pulse(
        self, sub_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetPulseErrorBody]:
        """The subscription's configuration plus the id, timestamp and severity totals of its most recent digest, if one
        has run.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/pulse/{sub_id}"),
            path_params=[param[str]("sub_id", sub_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=get_pulse_error_mapper,
            request_options=request_options,
        )

    def get_pulse_latest(
        self, sub_id: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetPulseLatestErrorBody]:
        """The digest payload as JSON by default; ``format=html`` renders the self-contained page (the same document the
        email carries), ``format=pdf`` the retainable report. Every finding is dated and carries its source; the
        provenance footer states the filing lag and what was not checked.

        Args:
            sub_id: Value sent with the request.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/pulse/{sub_id}/latest"),
            path_params=[param[str]("sub_id", sub_id)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=get_pulse_latest_error_mapper,
            request_options=request_options,
        )

    def get_pulse_run(
        self,
        sub_id: str,
        run_id: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetPulseRunErrorBody]:
        """A specific past digest, unchanged since it ran — the same three formats as /latest.

        Args:
            sub_id: Value sent with the request.
            run_id: Value sent with the request.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/pulse/{sub_id}/runs/{run_id}"),
            path_params=[param[str]("sub_id", sub_id), param[str]("run_id", run_id)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=get_pulse_run_error_mapper,
            request_options=request_options,
        )

    def list_pulse(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, ListPulseErrorBody]:
        """Every subscription created with this key, newest first. Subscriptions are scoped to the key that created
        them; another key's subscriptions are not listed and answer 404 by id.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/pulse"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=list_pulse_error_mapper,
            request_options=request_options,
        )

    def list_pulse_runs(
        self, sub_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, ListPulseRunsErrorBody]:
        """Stored run ids, oldest first. Each loads via /pulse/{sub_id}/runs/{run_id}.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/pulse/{sub_id}/runs"),
            path_params=[param[str]("sub_id", sub_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=list_pulse_runs_error_mapper,
            request_options=request_options,
        )

    def run_pulse(
        self,
        sub_id: str,
        *,
        checks: str | None = None,
        format_: FormatOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RunPulseErrorBody]:
        """Runs the checks synchronously and returns the digest. The first run is a baseline: it records what is on file
        today and reports changes from the next run on. ``checks`` narrows the run; ``format=html|pdf`` renders it.

        Args:
            sub_id: Value sent with the request.
            checks: Narrow the run to these checks, comma-separated: compliance, filings, grants, gov, people, web. Omit
                for the subscription's full set.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/pulse/{sub_id}/run"),
            path_params=[param[str]("sub_id", sub_id)],
            query_params=[param[str | None]("checks", checks), param[FormatOrStr | None]("format", format_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=run_pulse_error_mapper,
            request_options=request_options,
        )

    def update_pulse(
        self, sub_id: str, body: PulsePatch | PulsePatchDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, UpdatePulseErrorBody]:
        """Any field omitted is left as it is. Changing the frequency re-anchors the next run from now; ``active:
        false`` pauses scheduled runs without deleting state, so unpausing resumes the diff rather than re-baselining.

        Args:
            sub_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/pulse/{sub_id}"),
            path_params=[param[str]("sub_id", sub_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PulsePatch | PulsePatchDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Any],
            error_mapper=update_pulse_error_mapper,
            request_options=request_options,
        )


class AsyncPulseWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_pulse(
        self, body: PulseCreate | PulseCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, CreatePulseErrorBody]:
        """Watch up to 200 EINs on a schedule you choose (hourly to monthly). Each run diffs the organizations against
        the last run and reports what moved: compliance screen changes, new Form 990 data, new grants in and out of the
        graph, government funding movement, officer and trustee roster changes, and web press and job-posting signals.
        The digest is available as JSON, an HTML page, a PDF, and optionally by email.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/pulse"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PulseCreate | PulseCreateDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=create_pulse_error_mapper,
            request_options=request_options,
        )

    async def delete_pulse(
        self, sub_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeletePulseErrorBody]:
        """Removes the subscription, its check state and every stored digest. There is no undo; pausing with ``active:
        false`` is the reversible form.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/pulse/{sub_id}"),
            path_params=[param[str]("sub_id", sub_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=delete_pulse_error_mapper,
            request_options=request_options,
        )

    async def get_pulse(
        self, sub_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetPulseErrorBody]:
        """The subscription's configuration plus the id, timestamp and severity totals of its most recent digest, if one
        has run.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/pulse/{sub_id}"),
            path_params=[param[str]("sub_id", sub_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=get_pulse_error_mapper,
            request_options=request_options,
        )

    async def get_pulse_latest(
        self,
        sub_id: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetPulseLatestErrorBody]:
        """The digest payload as JSON by default; ``format=html`` renders the self-contained page (the same document the
        email carries), ``format=pdf`` the retainable report. Every finding is dated and carries its source; the
        provenance footer states the filing lag and what was not checked.

        Args:
            sub_id: Value sent with the request.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/pulse/{sub_id}/latest"),
            path_params=[param[str]("sub_id", sub_id)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=get_pulse_latest_error_mapper,
            request_options=request_options,
        )

    async def get_pulse_run(
        self,
        sub_id: str,
        run_id: str,
        *,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetPulseRunErrorBody]:
        """A specific past digest, unchanged since it ran — the same three formats as /latest.

        Args:
            sub_id: Value sent with the request.
            run_id: Value sent with the request.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/pulse/{sub_id}/runs/{run_id}"),
            path_params=[param[str]("sub_id", sub_id), param[str]("run_id", run_id)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=get_pulse_run_error_mapper,
            request_options=request_options,
        )

    async def list_pulse(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, ListPulseErrorBody]:
        """Every subscription created with this key, newest first. Subscriptions are scoped to the key that created
        them; another key's subscriptions are not listed and answer 404 by id.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/pulse"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=list_pulse_error_mapper,
            request_options=request_options,
        )

    async def list_pulse_runs(
        self, sub_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, ListPulseRunsErrorBody]:
        """Stored run ids, oldest first. Each loads via /pulse/{sub_id}/runs/{run_id}.

        Args:
            sub_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/pulse/{sub_id}/runs"),
            path_params=[param[str]("sub_id", sub_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=list_pulse_runs_error_mapper,
            request_options=request_options,
        )

    async def run_pulse(
        self,
        sub_id: str,
        *,
        checks: str | None = None,
        format_: FormatOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RunPulseErrorBody]:
        """Runs the checks synchronously and returns the digest. The first run is a baseline: it records what is on file
        today and reports changes from the next run on. ``checks`` narrows the run; ``format=html|pdf`` renders it.

        Args:
            sub_id: Value sent with the request.
            checks: Narrow the run to these checks, comma-separated: compliance, filings, grants, gov, people, web. Omit
                for the subscription's full set.
            format_: json (default) or xml.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/pulse/{sub_id}/run"),
            path_params=[param[str]("sub_id", sub_id)],
            query_params=[param[str | None]("checks", checks), param[FormatOrStr | None]("format", format_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=run_pulse_error_mapper,
            request_options=request_options,
        )

    async def update_pulse(
        self,
        sub_id: str,
        body: PulsePatch | PulsePatchDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UpdatePulseErrorBody]:
        """Any field omitted is left as it is. Changing the frequency re-anchors the next run from now; ``active:
        false`` pauses scheduled runs without deleting state, so unpausing resumes the diff rather than re-baselining.

        Args:
            sub_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/pulse/{sub_id}"),
            path_params=[param[str]("sub_id", sub_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PulsePatch | PulsePatchDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Any],
            error_mapper=update_pulse_error_mapper,
            request_options=request_options,
        )
