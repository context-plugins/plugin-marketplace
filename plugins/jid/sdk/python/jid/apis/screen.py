from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.email_check_error import EmailCheckErrorBody, email_check_error_mapper
from ..errors.screen_error import ScreenErrorBody, screen_error_mapper
from ..errors.screen_get_error import ScreenGetErrorBody, screen_get_error_mapper
from ..models.screen_result import ScreenResult
from ..models.v1_email_check_request import V1EmailCheckRequest, V1EmailCheckRequestDict
from ..models.v1_screen_request import V1ScreenRequest, V1ScreenRequestDict
from ..server.server import Server


class Screen:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ScreenWithRawResponse(client, server)

    def email_check(
        self,
        body: V1EmailCheckRequest | V1EmailCheckRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """No key: free tier (rate-limited per IP). With a key: 1 check. Reads the receiving server's
        Authentication-Results (SPF, DKIM, DMARC), Received-SPF, DKIM alignment with From, Reply-To vs From, and whether
        the From domain or a business display name imitates a known company's registered domain. Returns checks and a
        read (headline, engage | verify_first | do_not_engage, failed checks, lookup links), the From and Reply-To
        domains and the authentication results. The headers are processed in memory and never stored. Deterministic, no
        AI.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Checks and read

        Raises:
            ApiError: Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.email_check(body, request_options=request_options))

    def screen(
        self, body: V1ScreenRequest | V1ScreenRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ScreenResult:
        """No key: free tier (rate-limited per IP). With a key: 1 check. No AI in the decision. Pass any of domain, url,
        email, phone or company_name; the context; an amount; a policy. Returns engage (true/false), risk, confidence,
        subject_type, reasons with sources, mitigations, checks, a read (headline, engage | verify_first |
        do_not_engage, failed checks, lookup links: render the read for humans), the matched Jid file and a signed
        receipt. Hard rules (engage=false under every policy): confirmed exclusion, possible sanctions or export-list
        name match (manual review, never a finding), registry hard failure, phishing or malware listing, disposable
        e-mail, domain with no MX and no website, domain under 30 days old with an amount of $1,000 or more, and (strict
        only) an affiliation mismatch. Individuals get technical signals only. engage is advisory. Rules version
        2026-10-05.2: https://jid.com/screen-rules

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screen result

        Raises:
            ApiError: Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.screen(body, request_options=request_options))

    def screen_get(
        self,
        *,
        domain: str | None = None,
        url: str | None = None,
        email: str | None = None,
        phone: str | None = None,
        company_name: str | None = None,
        name: str | None = None,
        context: str | None = None,
        policy: str | None = None,
        amount: float | None = None,
        country: str | None = None,
        ip_country: str | None = None,
        ip_region: str | None = None,
        ip_asn: str | None = None,
        browser_timezone: str | None = None,
        stated_country: str | None = None,
        signal: str | None = None,
        site: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScreenResult:
        """Same as POST /v1/screen, with the fields as query parameters.

        Args:
            domain: Value sent with the request.
            url: Value sent with the request.
            email: Value sent with the request.
            phone: Value sent with the request.
            company_name: Value sent with the request.
            name: Value sent with the request.
            context: Value sent with the request.
            policy: Value sent with the request.
            amount: Value sent with the request.
            country: Value sent with the request.
            ip_country: Value sent with the request.
            ip_region: Value sent with the request.
            ip_asn: Value sent with the request.
            browser_timezone: Value sent with the request.
            stated_country: Value sent with the request.
            signal: Value sent with the request.
            site: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screen result

        Raises:
            ApiError: Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.screen_get(
                domain=domain,
                url=url,
                email=email,
                phone=phone,
                company_name=company_name,
                name=name,
                context=context,
                policy=policy,
                amount=amount,
                country=country,
                ip_country=ip_country,
                ip_region=ip_region,
                ip_asn=ip_asn,
                browser_timezone=browser_timezone,
                stated_country=stated_country,
                signal=signal,
                site=site,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ScreenWithRawResponse:
        return self._with_raw_response


class AsyncScreen:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncScreenWithRawResponse(client, server)

    async def email_check(
        self,
        body: V1EmailCheckRequest | V1EmailCheckRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """No key: free tier (rate-limited per IP). With a key: 1 check. Reads the receiving server's
        Authentication-Results (SPF, DKIM, DMARC), Received-SPF, DKIM alignment with From, Reply-To vs From, and whether
        the From domain or a business display name imitates a known company's registered domain. Returns checks and a
        read (headline, engage | verify_first | do_not_engage, failed checks, lookup links), the From and Reply-To
        domains and the authentication results. The headers are processed in memory and never stored. Deterministic, no
        AI.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Checks and read

        Raises:
            ApiError: Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.email_check(body, request_options=request_options))

    async def screen(
        self, body: V1ScreenRequest | V1ScreenRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ScreenResult:
        """No key: free tier (rate-limited per IP). With a key: 1 check. No AI in the decision. Pass any of domain, url,
        email, phone or company_name; the context; an amount; a policy. Returns engage (true/false), risk, confidence,
        subject_type, reasons with sources, mitigations, checks, a read (headline, engage | verify_first |
        do_not_engage, failed checks, lookup links: render the read for humans), the matched Jid file and a signed
        receipt. Hard rules (engage=false under every policy): confirmed exclusion, possible sanctions or export-list
        name match (manual review, never a finding), registry hard failure, phishing or malware listing, disposable
        e-mail, domain with no MX and no website, domain under 30 days old with an amount of $1,000 or more, and (strict
        only) an affiliation mismatch. Individuals get technical signals only. engage is advisory. Rules version
        2026-10-05.2: https://jid.com/screen-rules

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screen result

        Raises:
            ApiError: Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.screen(body, request_options=request_options))

    async def screen_get(
        self,
        *,
        domain: str | None = None,
        url: str | None = None,
        email: str | None = None,
        phone: str | None = None,
        company_name: str | None = None,
        name: str | None = None,
        context: str | None = None,
        policy: str | None = None,
        amount: float | None = None,
        country: str | None = None,
        ip_country: str | None = None,
        ip_region: str | None = None,
        ip_asn: str | None = None,
        browser_timezone: str | None = None,
        stated_country: str | None = None,
        signal: str | None = None,
        site: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScreenResult:
        """Same as POST /v1/screen, with the fields as query parameters.

        Args:
            domain: Value sent with the request.
            url: Value sent with the request.
            email: Value sent with the request.
            phone: Value sent with the request.
            company_name: Value sent with the request.
            name: Value sent with the request.
            context: Value sent with the request.
            policy: Value sent with the request.
            amount: Value sent with the request.
            country: Value sent with the request.
            ip_country: Value sent with the request.
            ip_region: Value sent with the request.
            ip_asn: Value sent with the request.
            browser_timezone: Value sent with the request.
            stated_country: Value sent with the request.
            signal: Value sent with the request.
            site: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screen result

        Raises:
            ApiError: Error Error Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.screen_get(
                domain=domain,
                url=url,
                email=email,
                phone=phone,
                company_name=company_name,
                name=name,
                context=context,
                policy=policy,
                amount=amount,
                country=country,
                ip_country=ip_country,
                ip_region=ip_region,
                ip_asn=ip_asn,
                browser_timezone=browser_timezone,
                stated_country=stated_country,
                signal=signal,
                site=site,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncScreenWithRawResponse:
        return self._with_raw_response


class ScreenWithRawResponse(BaseRawResponse[RawClient, Server]):
    def email_check(
        self,
        body: V1EmailCheckRequest | V1EmailCheckRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, EmailCheckErrorBody]:
        """No key: free tier (rate-limited per IP). With a key: 1 check. Reads the receiving server's
        Authentication-Results (SPF, DKIM, DMARC), Received-SPF, DKIM alignment with From, Reply-To vs From, and whether
        the From domain or a business display name imitates a known company's registered domain. Returns checks and a
        read (headline, engage | verify_first | do_not_engage, failed checks, lookup links), the From and Reply-To
        domains and the authentication results. The headers are processed in memory and never stored. Deterministic, no
        AI.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/email-check"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1EmailCheckRequest | V1EmailCheckRequestDict](body),
            decoder=json_decoder[Any],
            error_mapper=email_check_error_mapper,
            request_options=request_options,
        )

    def screen(
        self, body: V1ScreenRequest | V1ScreenRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ScreenResult, ScreenErrorBody]:
        """No key: free tier (rate-limited per IP). With a key: 1 check. No AI in the decision. Pass any of domain, url,
        email, phone or company_name; the context; an amount; a policy. Returns engage (true/false), risk, confidence,
        subject_type, reasons with sources, mitigations, checks, a read (headline, engage | verify_first |
        do_not_engage, failed checks, lookup links: render the read for humans), the matched Jid file and a signed
        receipt. Hard rules (engage=false under every policy): confirmed exclusion, possible sanctions or export-list
        name match (manual review, never a finding), registry hard failure, phishing or malware listing, disposable
        e-mail, domain with no MX and no website, domain under 30 days old with an amount of $1,000 or more, and (strict
        only) an affiliation mismatch. Individuals get technical signals only. engage is advisory. Rules version
        2026-10-05.2: https://jid.com/screen-rules

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/screen"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ScreenRequest | V1ScreenRequestDict](body),
            decoder=json_decoder[ScreenResult],
            error_mapper=screen_error_mapper,
            request_options=request_options,
        )

    def screen_get(
        self,
        *,
        domain: str | None = None,
        url: str | None = None,
        email: str | None = None,
        phone: str | None = None,
        company_name: str | None = None,
        name: str | None = None,
        context: str | None = None,
        policy: str | None = None,
        amount: float | None = None,
        country: str | None = None,
        ip_country: str | None = None,
        ip_region: str | None = None,
        ip_asn: str | None = None,
        browser_timezone: str | None = None,
        stated_country: str | None = None,
        signal: str | None = None,
        site: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScreenResult, ScreenGetErrorBody]:
        """Same as POST /v1/screen, with the fields as query parameters.

        Args:
            domain: Value sent with the request.
            url: Value sent with the request.
            email: Value sent with the request.
            phone: Value sent with the request.
            company_name: Value sent with the request.
            name: Value sent with the request.
            context: Value sent with the request.
            policy: Value sent with the request.
            amount: Value sent with the request.
            country: Value sent with the request.
            ip_country: Value sent with the request.
            ip_region: Value sent with the request.
            ip_asn: Value sent with the request.
            browser_timezone: Value sent with the request.
            stated_country: Value sent with the request.
            signal: Value sent with the request.
            site: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/screen"),
            query_params=[
                param[str | None]("domain", domain),
                param[str | None]("url", url),
                param[str | None]("email", email),
                param[str | None]("phone", phone),
                param[str | None]("company_name", company_name),
                param[str | None]("name", name),
                param[str | None]("context", context),
                param[str | None]("policy", policy),
                param[float | None]("amount", amount),
                param[str | None]("country", country),
                param[str | None]("ip_country", ip_country),
                param[str | None]("ip_region", ip_region),
                param[str | None]("ip_asn", ip_asn),
                param[str | None]("browser_timezone", browser_timezone),
                param[str | None]("stated_country", stated_country),
                param[str | None]("signal", signal),
                param[str | None]("site", site),
            ],
            decoder=json_decoder[ScreenResult],
            error_mapper=screen_get_error_mapper,
            request_options=request_options,
        )


class AsyncScreenWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def email_check(
        self,
        body: V1EmailCheckRequest | V1EmailCheckRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, EmailCheckErrorBody]:
        """No key: free tier (rate-limited per IP). With a key: 1 check. Reads the receiving server's
        Authentication-Results (SPF, DKIM, DMARC), Received-SPF, DKIM alignment with From, Reply-To vs From, and whether
        the From domain or a business display name imitates a known company's registered domain. Returns checks and a
        read (headline, engage | verify_first | do_not_engage, failed checks, lookup links), the From and Reply-To
        domains and the authentication results. The headers are processed in memory and never stored. Deterministic, no
        AI.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/email-check"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1EmailCheckRequest | V1EmailCheckRequestDict](body),
            decoder=async_json_decoder[Any],
            error_mapper=email_check_error_mapper,
            request_options=request_options,
        )

    async def screen(
        self, body: V1ScreenRequest | V1ScreenRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ScreenResult, ScreenErrorBody]:
        """No key: free tier (rate-limited per IP). With a key: 1 check. No AI in the decision. Pass any of domain, url,
        email, phone or company_name; the context; an amount; a policy. Returns engage (true/false), risk, confidence,
        subject_type, reasons with sources, mitigations, checks, a read (headline, engage | verify_first |
        do_not_engage, failed checks, lookup links: render the read for humans), the matched Jid file and a signed
        receipt. Hard rules (engage=false under every policy): confirmed exclusion, possible sanctions or export-list
        name match (manual review, never a finding), registry hard failure, phishing or malware listing, disposable
        e-mail, domain with no MX and no website, domain under 30 days old with an amount of $1,000 or more, and (strict
        only) an affiliation mismatch. Individuals get technical signals only. engage is advisory. Rules version
        2026-10-05.2: https://jid.com/screen-rules

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/screen"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ScreenRequest | V1ScreenRequestDict](body),
            decoder=async_json_decoder[ScreenResult],
            error_mapper=screen_error_mapper,
            request_options=request_options,
        )

    async def screen_get(
        self,
        *,
        domain: str | None = None,
        url: str | None = None,
        email: str | None = None,
        phone: str | None = None,
        company_name: str | None = None,
        name: str | None = None,
        context: str | None = None,
        policy: str | None = None,
        amount: float | None = None,
        country: str | None = None,
        ip_country: str | None = None,
        ip_region: str | None = None,
        ip_asn: str | None = None,
        browser_timezone: str | None = None,
        stated_country: str | None = None,
        signal: str | None = None,
        site: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScreenResult, ScreenGetErrorBody]:
        """Same as POST /v1/screen, with the fields as query parameters.

        Args:
            domain: Value sent with the request.
            url: Value sent with the request.
            email: Value sent with the request.
            phone: Value sent with the request.
            company_name: Value sent with the request.
            name: Value sent with the request.
            context: Value sent with the request.
            policy: Value sent with the request.
            amount: Value sent with the request.
            country: Value sent with the request.
            ip_country: Value sent with the request.
            ip_region: Value sent with the request.
            ip_asn: Value sent with the request.
            browser_timezone: Value sent with the request.
            stated_country: Value sent with the request.
            signal: Value sent with the request.
            site: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/screen"),
            query_params=[
                param[str | None]("domain", domain),
                param[str | None]("url", url),
                param[str | None]("email", email),
                param[str | None]("phone", phone),
                param[str | None]("company_name", company_name),
                param[str | None]("name", name),
                param[str | None]("context", context),
                param[str | None]("policy", policy),
                param[float | None]("amount", amount),
                param[str | None]("country", country),
                param[str | None]("ip_country", ip_country),
                param[str | None]("ip_region", ip_region),
                param[str | None]("ip_asn", ip_asn),
                param[str | None]("browser_timezone", browser_timezone),
                param[str | None]("stated_country", stated_country),
                param[str | None]("signal", signal),
                param[str | None]("site", site),
            ],
            decoder=async_json_decoder[ScreenResult],
            error_mapper=screen_get_error_mapper,
            request_options=request_options,
        )
