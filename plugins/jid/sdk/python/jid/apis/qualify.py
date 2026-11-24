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
from ..errors.get_results_error import GetResultsErrorBody, get_results_error_mapper
from ..errors.qualify_counterparty_error import QualifyCounterpartyErrorBody, qualify_counterparty_error_mapper
from ..errors.record_outcome_error import RecordOutcomeErrorBody, record_outcome_error_mapper
from ..models.qualification import Qualification
from ..models.unions.v1_qualify_request2 import V1QualifyRequest2, V1QualifyRequest2Dict
from ..models.v1_outcomes_request import V1OutcomesRequest, V1OutcomesRequestDict
from ..models.v1_outcomes_response import V1OutcomesResponse
from ..models.v1_results_response import V1ResultsResponse
from ..server.server import Server


class Qualify:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = QualifyWithRawResponse(client, server, auth)

    def get_results(self, ids: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ResultsResponse:
        """Send a ``GET`` request.

        Args:
            ids: Comma-separated qual_ ids, up to 200
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Results

        Raises:
            ApiError: Error Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_results(ids, request_options=request_options))

    def qualify_counterparty(
        self, body: V1QualifyRequest2 | V1QualifyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Qualification:
        """API key required; counts as 2 checks. Checks the domain (MX, SPF, DMARC, RDAP registration date, one website
        fetch), matches it to a Jid file and reads the file's standing, licences, filings, capital raises, loans and
        adverse records. Returns signals with sources, legitimacy/capacity/consistency scores (0 to 100, with reasons),
        a recommendation, a next step, questions to ask, checks and a read (headline, engage | verify_first |
        do_not_engage, failed checks, lookup links: render the read for humans), and a signed receipt. Businesses only:
        personal webmail, a disposable address or no confident business match returns assessment
        individual_or_unverified with no scores. A possible list match is effect review, never a finding. The raw
        message is hashed and never stored unless retain is true. Not for credit, employment, insurance or housing
        decisions about individuals.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Qualification

        Raises:
            ApiError: Error Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.qualify_counterparty(body, request_options=request_options))

    def record_outcome(
        self, body: V1OutcomesRequest | V1OutcomesRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1OutcomesResponse:
        """With the API key that ran the result: { result_id, outcome, note? }. Or { token } from a signed outcome link.
        Free. Stored without personal data for 13 months; outcomes tune the published rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recorded

        Raises:
            ApiError: Error Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.record_outcome(body, request_options=request_options))

    @property
    def with_raw_response(self) -> QualifyWithRawResponse:
        return self._with_raw_response


class AsyncQualify:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncQualifyWithRawResponse(client, server, auth)

    async def get_results(
        self, ids: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ResultsResponse:
        """Send a ``GET`` request.

        Args:
            ids: Comma-separated qual_ ids, up to 200
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Results

        Raises:
            ApiError: Error Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_results(ids, request_options=request_options))

    async def qualify_counterparty(
        self,
        body: V1QualifyRequest2 | V1QualifyRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Qualification:
        """API key required; counts as 2 checks. Checks the domain (MX, SPF, DMARC, RDAP registration date, one website
        fetch), matches it to a Jid file and reads the file's standing, licences, filings, capital raises, loans and
        adverse records. Returns signals with sources, legitimacy/capacity/consistency scores (0 to 100, with reasons),
        a recommendation, a next step, questions to ask, checks and a read (headline, engage | verify_first |
        do_not_engage, failed checks, lookup links: render the read for humans), and a signed receipt. Businesses only:
        personal webmail, a disposable address or no confident business match returns assessment
        individual_or_unverified with no scores. A possible list match is effect review, never a finding. The raw
        message is hashed and never stored unless retain is true. Not for credit, employment, insurance or housing
        decisions about individuals.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Qualification

        Raises:
            ApiError: Error Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.qualify_counterparty(body, request_options=request_options))

    async def record_outcome(
        self,
        body: V1OutcomesRequest | V1OutcomesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1OutcomesResponse:
        """With the API key that ran the result: { result_id, outcome, note? }. Or { token } from a signed outcome link.
        Free. Stored without personal data for 13 months; outcomes tune the published rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recorded

        Raises:
            ApiError: Error Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.record_outcome(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncQualifyWithRawResponse:
        return self._with_raw_response


class QualifyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_results(
        self, ids: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ResultsResponse, GetResultsErrorBody]:
        """Send a ``GET`` request.

        Args:
            ids: Comma-separated qual_ ids, up to 200
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/results"),
            query_params=[param[str]("ids", ids)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[V1ResultsResponse],
            error_mapper=get_results_error_mapper,
            request_options=request_options,
        )

    def qualify_counterparty(
        self, body: V1QualifyRequest2 | V1QualifyRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Qualification, QualifyCounterpartyErrorBody]:
        """API key required; counts as 2 checks. Checks the domain (MX, SPF, DMARC, RDAP registration date, one website
        fetch), matches it to a Jid file and reads the file's standing, licences, filings, capital raises, loans and
        adverse records. Returns signals with sources, legitimacy/capacity/consistency scores (0 to 100, with reasons),
        a recommendation, a next step, questions to ask, checks and a read (headline, engage | verify_first |
        do_not_engage, failed checks, lookup links: render the read for humans), and a signed receipt. Businesses only:
        personal webmail, a disposable address or no confident business match returns assessment
        individual_or_unverified with no scores. A possible list match is effect review, never a finding. The raw
        message is hashed and never stored unless retain is true. Not for credit, employment, insurance or housing
        decisions about individuals.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/qualify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1QualifyRequest2 | V1QualifyRequest2Dict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[Qualification],
            error_mapper=qualify_counterparty_error_mapper,
            request_options=request_options,
        )

    def record_outcome(
        self, body: V1OutcomesRequest | V1OutcomesRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1OutcomesResponse, RecordOutcomeErrorBody]:
        """With the API key that ran the result: { result_id, outcome, note? }. Or { token } from a signed outcome link.
        Free. Stored without personal data for 13 months; outcomes tune the published rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/outcomes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1OutcomesRequest | V1OutcomesRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[V1OutcomesResponse],
            error_mapper=record_outcome_error_mapper,
            request_options=request_options,
        )


class AsyncQualifyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_results(
        self, ids: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ResultsResponse, GetResultsErrorBody]:
        """Send a ``GET`` request.

        Args:
            ids: Comma-separated qual_ ids, up to 200
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/results"),
            query_params=[param[str]("ids", ids)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[V1ResultsResponse],
            error_mapper=get_results_error_mapper,
            request_options=request_options,
        )

    async def qualify_counterparty(
        self,
        body: V1QualifyRequest2 | V1QualifyRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Qualification, QualifyCounterpartyErrorBody]:
        """API key required; counts as 2 checks. Checks the domain (MX, SPF, DMARC, RDAP registration date, one website
        fetch), matches it to a Jid file and reads the file's standing, licences, filings, capital raises, loans and
        adverse records. Returns signals with sources, legitimacy/capacity/consistency scores (0 to 100, with reasons),
        a recommendation, a next step, questions to ask, checks and a read (headline, engage | verify_first |
        do_not_engage, failed checks, lookup links: render the read for humans), and a signed receipt. Businesses only:
        personal webmail, a disposable address or no confident business match returns assessment
        individual_or_unverified with no scores. A possible list match is effect review, never a finding. The raw
        message is hashed and never stored unless retain is true. Not for credit, employment, insurance or housing
        decisions about individuals.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/qualify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1QualifyRequest2 | V1QualifyRequest2Dict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[Qualification],
            error_mapper=qualify_counterparty_error_mapper,
            request_options=request_options,
        )

    async def record_outcome(
        self,
        body: V1OutcomesRequest | V1OutcomesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1OutcomesResponse, RecordOutcomeErrorBody]:
        """With the API key that ran the result: { result_id, outcome, note? }. Or { token } from a signed outcome link.
        Free. Stored without personal data for 13 months; outcomes tune the published rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/outcomes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1OutcomesRequest | V1OutcomesRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[V1OutcomesResponse],
            error_mapper=record_outcome_error_mapper,
            request_options=request_options,
        )
