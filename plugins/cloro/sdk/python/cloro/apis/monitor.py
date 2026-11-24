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
from ..errors.get_google_product_error import GetGoogleProductErrorBody, get_google_product_error_mapper
from ..errors.monitor_ai_mode_error import MonitorAiModeErrorBody, monitor_ai_mode_error_mapper
from ..errors.monitor_bing_ai_mode_error import MonitorBingAiModeErrorBody, monitor_bing_ai_mode_error_mapper
from ..errors.monitor_chatgpt_error import MonitorChatgptErrorBody, monitor_chatgpt_error_mapper
from ..errors.monitor_copilot_error import MonitorCopilotErrorBody, monitor_copilot_error_mapper
from ..errors.monitor_gemini_error import MonitorGeminiErrorBody, monitor_gemini_error_mapper
from ..errors.monitor_google_error import MonitorGoogleErrorBody, monitor_google_error_mapper
from ..errors.monitor_google_news_error import MonitorGoogleNewsErrorBody, monitor_google_news_error_mapper
from ..errors.monitor_grok_error import MonitorGrokErrorBody, monitor_grok_error_mapper
from ..errors.monitor_perplexity_error import MonitorPerplexityErrorBody, monitor_perplexity_error_mapper
from ..errors.resolve_google_goto_error import ResolveGoogleGotoErrorBody, resolve_google_goto_error_mapper
from ..models.ai_mode_monitor_response import AiModeMonitorResponse
from ..models.bing_ai_mode_monitor_request import BingAiModeMonitorRequest, BingAiModeMonitorRequestDict
from ..models.bing_ai_mode_monitor_response import BingAiModeMonitorResponse
from ..models.chat_gpt_monitor_request import ChatGptMonitorRequest, ChatGptMonitorRequestDict
from ..models.chat_gpt_monitor_response import ChatGptMonitorResponse
from ..models.copilot_monitor_request import CopilotMonitorRequest, CopilotMonitorRequestDict
from ..models.copilot_monitor_response import CopilotMonitorResponse
from ..models.gemini_monitor_request import GeminiMonitorRequest, GeminiMonitorRequestDict
from ..models.gemini_monitor_response import GeminiMonitorResponse
from ..models.google_goto_request import GoogleGotoRequest, GoogleGotoRequestDict
from ..models.google_goto_response import GoogleGotoResponse
from ..models.google_monitor_response import GoogleMonitorResponse
from ..models.google_news_monitor_response import GoogleNewsMonitorResponse
from ..models.google_product_request import GoogleProductRequest, GoogleProductRequestDict
from ..models.google_product_response import GoogleProductResponse
from ..models.grok_monitor_request import GrokMonitorRequest, GrokMonitorRequestDict
from ..models.grok_monitor_response import GrokMonitorResponse
from ..models.perplexity_monitor_request import PerplexityMonitorRequest, PerplexityMonitorRequestDict
from ..models.perplexity_monitor_response import PerplexityMonitorResponse
from ..models.unions.ai_mode_monitor_request2 import AiModeMonitorRequest2, AiModeMonitorRequest2Dict
from ..models.unions.google_monitor_request3 import GoogleMonitorRequest3, GoogleMonitorRequest3Dict
from ..models.unions.google_news_monitor_request2 import GoogleNewsMonitorRequest2, GoogleNewsMonitorRequest2Dict
from ..server.server import Server


class Monitor:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MonitorWithRawResponse(client, server, auth)

    def get_google_product(
        self,
        body: GoogleProductRequest | GoogleProductRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleProductResponse:
        """Return the product panel that a Google Search shopping card or a Google AI Mode product opens: merchant
        offers, description, specifications, reviews, images and related products. Send the ``productResultToken`` from
        a Google Search ``result.shoppingCards`` card, or from a Google AI Mode ``result.shoppingCards`` or
        ``result.inlineProducts`` entry.

        Costs 1 credit, plus the 2-credit sync surcharge, and only when the request succeeds. A token expires five
        minutes after the scrape that issued it. If you send the request async, set a high ``priority``, so that the
        token does not expire in the queue.

        Args:
            body: The token from a Google Search shopping card
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The product panel for the token

        Raises:
            ApiError: Bad Request - Invalid parameters Unauthorized - Invalid or missing API key Forbidden -
                Insufficient credits or access denied Not Found - The token is not recognized
                (``error.details.errorType``: ``productResultTokenUnknown``) Gone - The token has expired
                (``error.details.errorType``: ``productResultTokenExpired``). Scrape again for a new token. Too Many
                Requests Client Closed Request - Request was canceled Internal Server Error Bad Gateway - Google
                returned no product data, or a layout cloro cannot parse ``error`` is
                ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | NotFoundError | ConcurrentLimitError | CanceledError | InternalError
                | ExternalServiceError | RawError``."""
        return unwrap(self._with_raw_response.get_google_product(body, request_options=request_options))

    def monitor_ai_mode(
        self,
        body: AiModeMonitorRequest2 | AiModeMonitorRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AiModeMonitorResponse:
        """Extract structured data from AI Mode about your brand, products, or any topic across various regions

        Args:
            body: Request parameters for monitoring AI Mode responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful AI Mode monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(self._with_raw_response.monitor_ai_mode(body, request_options=request_options))

    def monitor_bing_ai_mode(
        self,
        body: BingAiModeMonitorRequest | BingAiModeMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BingAiModeMonitorResponse:
        """Extract the answer, sources and citation pills from Bing AI Mode (bing.com/copilotsearch) for a prompt, in
        the country you select.

        Args:
            body: Request parameters for monitoring Bing AI Mode responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Bing AI Mode monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(self._with_raw_response.monitor_bing_ai_mode(body, request_options=request_options))

    def monitor_chatgpt(
        self,
        body: ChatGptMonitorRequest | ChatGptMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ChatGptMonitorResponse:
        """Extract structured data from ChatGPT — answer text, cited sources, shopping cards, brand entities, and ads —
        for any prompt across supported regions

        Args:
            body: Request parameters for monitoring ChatGPT responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful ChatGPT monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(self._with_raw_response.monitor_chatgpt(body, request_options=request_options))

    def monitor_copilot(
        self,
        body: CopilotMonitorRequest | CopilotMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CopilotMonitorResponse:
        """Extract structured data from Microsoft Copilot about your brand, products, or any topic across various
        regions

        Args:
            body: Request parameters for monitoring Copilot responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Copilot monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(self._with_raw_response.monitor_copilot(body, request_options=request_options))

    def monitor_gemini(
        self,
        body: GeminiMonitorRequest | GeminiMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GeminiMonitorResponse:
        """Extract structured data from Google Gemini — generated answer text and cited sources for any prompt, with
        Markdown and HTML export formats

        Args:
            body: Request parameters for monitoring Gemini responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Gemini monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(self._with_raw_response.monitor_gemini(body, request_options=request_options))

    def monitor_google(
        self,
        body: GoogleMonitorRequest3 | GoogleMonitorRequest3Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleMonitorResponse:
        """Extract structured data from Google Search including organic results, People Also Ask, related searches, and
        optional AI Overview

        Args:
            body: Request parameters for monitoring Google search results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Google monitoring response

        Raises:
            ApiError: Bad Request - Invalid parameters Unauthorized - Invalid or missing API key Forbidden -
                Insufficient credits Too Many Requests Client Closed Request - Request was canceled Internal Server
                Error ``error`` is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(self._with_raw_response.monitor_google(body, request_options=request_options))

    def monitor_google_news(
        self,
        body: GoogleNewsMonitorRequest2 | GoogleNewsMonitorRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GoogleNewsMonitorResponse:
        """Extract structured news articles from Google News including titles, links, snippets, sources, dates, and
        thumbnails

        Args:
            body: Request parameters for monitoring Google News results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Google News monitoring response

        Raises:
            ApiError: Bad Request - Invalid parameters Unauthorized - Invalid or missing API key Forbidden -
                Insufficient credits Too Many Requests Client Closed Request - Request was canceled Internal Server
                Error ``error`` is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(self._with_raw_response.monitor_google_news(body, request_options=request_options))

    def monitor_grok(
        self, body: GrokMonitorRequest | GrokMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> GrokMonitorResponse:
        """Extract structured data from Grok — answer text and cited sources, including X/Twitter references — for any
        prompt across supported regions

        Args:
            body: Request parameters for monitoring Grok responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Grok monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(self._with_raw_response.monitor_grok(body, request_options=request_options))

    def monitor_perplexity(
        self,
        body: PerplexityMonitorRequest | PerplexityMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PerplexityMonitorResponse:
        """Extract structured data from Perplexity AI about your brand, products, or any topic across various regions

        Args:
            body: Request parameters for monitoring Perplexity responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Perplexity monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(self._with_raw_response.monitor_perplexity(body, request_options=request_options))

    def resolve_google_goto(
        self, body: GoogleGotoRequest | GoogleGotoRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleGotoResponse:
        """Resolve one Google redirect link to its destination URL. Send the ``redirectLink`` that ships beside every
        resolved link on a Google Search, Google News, or AI Mode response, and the response gives you the URL it points
        to.

        Charges no credits, does not use a concurrency slot, and counts against the per-second rate limit like any other
        call. Each request resolves one link, and Google gets at most 10 seconds to answer.

        Args:
            body: The Google redirect link to resolve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The destination the redirect link points to

        Raises:
            ApiError: Bad Request - The url is missing, malformed, or is not a google.com /goto or /url link
                Unauthorized - Invalid or missing API key Too Many Requests Internal Server Error Bad Gateway - Google
                did not answer with a redirect, or the request to Google failed ``error`` is
                ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi | RateLimitError |
                InternalError | ExternalServiceError | RawError``."""
        return unwrap(self._with_raw_response.resolve_google_goto(body, request_options=request_options))

    @property
    def with_raw_response(self) -> MonitorWithRawResponse:
        return self._with_raw_response


class AsyncMonitor:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMonitorWithRawResponse(client, server, auth)

    async def get_google_product(
        self,
        body: GoogleProductRequest | GoogleProductRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleProductResponse:
        """Return the product panel that a Google Search shopping card or a Google AI Mode product opens: merchant
        offers, description, specifications, reviews, images and related products. Send the ``productResultToken`` from
        a Google Search ``result.shoppingCards`` card, or from a Google AI Mode ``result.shoppingCards`` or
        ``result.inlineProducts`` entry.

        Costs 1 credit, plus the 2-credit sync surcharge, and only when the request succeeds. A token expires five
        minutes after the scrape that issued it. If you send the request async, set a high ``priority``, so that the
        token does not expire in the queue.

        Args:
            body: The token from a Google Search shopping card
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The product panel for the token

        Raises:
            ApiError: Bad Request - Invalid parameters Unauthorized - Invalid or missing API key Forbidden -
                Insufficient credits or access denied Not Found - The token is not recognized
                (``error.details.errorType``: ``productResultTokenUnknown``) Gone - The token has expired
                (``error.details.errorType``: ``productResultTokenExpired``). Scrape again for a new token. Too Many
                Requests Client Closed Request - Request was canceled Internal Server Error Bad Gateway - Google
                returned no product data, or a layout cloro cannot parse ``error`` is
                ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | NotFoundError | ConcurrentLimitError | CanceledError | InternalError
                | ExternalServiceError | RawError``."""
        return unwrap(await self._with_raw_response.get_google_product(body, request_options=request_options))

    async def monitor_ai_mode(
        self,
        body: AiModeMonitorRequest2 | AiModeMonitorRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AiModeMonitorResponse:
        """Extract structured data from AI Mode about your brand, products, or any topic across various regions

        Args:
            body: Request parameters for monitoring AI Mode responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful AI Mode monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.monitor_ai_mode(body, request_options=request_options))

    async def monitor_bing_ai_mode(
        self,
        body: BingAiModeMonitorRequest | BingAiModeMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BingAiModeMonitorResponse:
        """Extract the answer, sources and citation pills from Bing AI Mode (bing.com/copilotsearch) for a prompt, in
        the country you select.

        Args:
            body: Request parameters for monitoring Bing AI Mode responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Bing AI Mode monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.monitor_bing_ai_mode(body, request_options=request_options))

    async def monitor_chatgpt(
        self,
        body: ChatGptMonitorRequest | ChatGptMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ChatGptMonitorResponse:
        """Extract structured data from ChatGPT — answer text, cited sources, shopping cards, brand entities, and ads —
        for any prompt across supported regions

        Args:
            body: Request parameters for monitoring ChatGPT responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful ChatGPT monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.monitor_chatgpt(body, request_options=request_options))

    async def monitor_copilot(
        self,
        body: CopilotMonitorRequest | CopilotMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CopilotMonitorResponse:
        """Extract structured data from Microsoft Copilot about your brand, products, or any topic across various
        regions

        Args:
            body: Request parameters for monitoring Copilot responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Copilot monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.monitor_copilot(body, request_options=request_options))

    async def monitor_gemini(
        self,
        body: GeminiMonitorRequest | GeminiMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GeminiMonitorResponse:
        """Extract structured data from Google Gemini — generated answer text and cited sources for any prompt, with
        Markdown and HTML export formats

        Args:
            body: Request parameters for monitoring Gemini responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Gemini monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.monitor_gemini(body, request_options=request_options))

    async def monitor_google(
        self,
        body: GoogleMonitorRequest3 | GoogleMonitorRequest3Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleMonitorResponse:
        """Extract structured data from Google Search including organic results, People Also Ask, related searches, and
        optional AI Overview

        Args:
            body: Request parameters for monitoring Google search results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Google monitoring response

        Raises:
            ApiError: Bad Request - Invalid parameters Unauthorized - Invalid or missing API key Forbidden -
                Insufficient credits Too Many Requests Client Closed Request - Request was canceled Internal Server
                Error ``error`` is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.monitor_google(body, request_options=request_options))

    async def monitor_google_news(
        self,
        body: GoogleNewsMonitorRequest2 | GoogleNewsMonitorRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleNewsMonitorResponse:
        """Extract structured news articles from Google News including titles, links, snippets, sources, dates, and
        thumbnails

        Args:
            body: Request parameters for monitoring Google News results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Google News monitoring response

        Raises:
            ApiError: Bad Request - Invalid parameters Unauthorized - Invalid or missing API key Forbidden -
                Insufficient credits Too Many Requests Client Closed Request - Request was canceled Internal Server
                Error ``error`` is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.monitor_google_news(body, request_options=request_options))

    async def monitor_grok(
        self,
        body: GrokMonitorRequest | GrokMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GrokMonitorResponse:
        """Extract structured data from Grok — answer text and cited sources, including X/Twitter references — for any
        prompt across supported regions

        Args:
            body: Request parameters for monitoring Grok responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Grok monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.monitor_grok(body, request_options=request_options))

    async def monitor_perplexity(
        self,
        body: PerplexityMonitorRequest | PerplexityMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PerplexityMonitorResponse:
        """Extract structured data from Perplexity AI about your brand, products, or any topic across various regions

        Args:
            body: Request parameters for monitoring Perplexity responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful Perplexity monitoring response

        Raises:
            ApiError: Bad Request - Validation error Unauthorized - Authentication error Forbidden - Insufficient
                credits Too Many Requests Client Closed Request - Request was canceled Internal Server Error ``error``
                is ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi |
                ForbiddenErrorCloroDevMonitorApi | ConcurrentLimitError | CanceledError | InternalError | RawError``."""
        return unwrap(await self._with_raw_response.monitor_perplexity(body, request_options=request_options))

    async def resolve_google_goto(
        self,
        body: GoogleGotoRequest | GoogleGotoRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GoogleGotoResponse:
        """Resolve one Google redirect link to its destination URL. Send the ``redirectLink`` that ships beside every
        resolved link on a Google Search, Google News, or AI Mode response, and the response gives you the URL it points
        to.

        Charges no credits, does not use a concurrency slot, and counts against the per-second rate limit like any other
        call. Each request resolves one link, and Google gets at most 10 seconds to answer.

        Args:
            body: The Google redirect link to resolve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The destination the redirect link points to

        Raises:
            ApiError: Bad Request - The url is missing, malformed, or is not a google.com /goto or /url link
                Unauthorized - Invalid or missing API key Too Many Requests Internal Server Error Bad Gateway - Google
                did not answer with a redirect, or the request to Google failed ``error`` is
                ``ValidationErrorCloroDevMonitorApi | AuthenticationErrorCloroDevMonitorApi | RateLimitError |
                InternalError | ExternalServiceError | RawError``."""
        return unwrap(await self._with_raw_response.resolve_google_goto(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMonitorWithRawResponse:
        return self._with_raw_response


class MonitorWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_google_product(
        self,
        body: GoogleProductRequest | GoogleProductRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleProductResponse, GetGoogleProductErrorBody]:
        """Return the product panel that a Google Search shopping card or a Google AI Mode product opens: merchant
        offers, description, specifications, reviews, images and related products. Send the ``productResultToken`` from
        a Google Search ``result.shoppingCards`` card, or from a Google AI Mode ``result.shoppingCards`` or
        ``result.inlineProducts`` entry.

        Costs 1 credit, plus the 2-credit sync surcharge, and only when the request succeeds. A token expires five
        minutes after the scrape that issued it. If you send the request async, set a high ``priority``, so that the
        token does not expire in the queue.

        Args:
            body: The token from a Google Search shopping card
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/google/product"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleProductRequest | GoogleProductRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GoogleProductResponse],
            error_mapper=get_google_product_error_mapper,
            request_options=request_options,
        )

    def monitor_ai_mode(
        self,
        body: AiModeMonitorRequest2 | AiModeMonitorRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AiModeMonitorResponse, MonitorAiModeErrorBody]:
        """Extract structured data from AI Mode about your brand, products, or any topic across various regions

        Args:
            body: Request parameters for monitoring AI Mode responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/aimode"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AiModeMonitorRequest2 | AiModeMonitorRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AiModeMonitorResponse],
            error_mapper=monitor_ai_mode_error_mapper,
            request_options=request_options,
        )

    def monitor_bing_ai_mode(
        self,
        body: BingAiModeMonitorRequest | BingAiModeMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BingAiModeMonitorResponse, MonitorBingAiModeErrorBody]:
        """Extract the answer, sources and citation pills from Bing AI Mode (bing.com/copilotsearch) for a prompt, in
        the country you select.

        Args:
            body: Request parameters for monitoring Bing AI Mode responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/bing/aimode"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BingAiModeMonitorRequest | BingAiModeMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BingAiModeMonitorResponse],
            error_mapper=monitor_bing_ai_mode_error_mapper,
            request_options=request_options,
        )

    def monitor_chatgpt(
        self,
        body: ChatGptMonitorRequest | ChatGptMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ChatGptMonitorResponse, MonitorChatgptErrorBody]:
        """Extract structured data from ChatGPT — answer text, cited sources, shopping cards, brand entities, and ads —
        for any prompt across supported regions

        Args:
            body: Request parameters for monitoring ChatGPT responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/chatgpt"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChatGptMonitorRequest | ChatGptMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ChatGptMonitorResponse],
            error_mapper=monitor_chatgpt_error_mapper,
            request_options=request_options,
        )

    def monitor_copilot(
        self,
        body: CopilotMonitorRequest | CopilotMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CopilotMonitorResponse, MonitorCopilotErrorBody]:
        """Extract structured data from Microsoft Copilot about your brand, products, or any topic across various
        regions

        Args:
            body: Request parameters for monitoring Copilot responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/copilot"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CopilotMonitorRequest | CopilotMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CopilotMonitorResponse],
            error_mapper=monitor_copilot_error_mapper,
            request_options=request_options,
        )

    def monitor_gemini(
        self,
        body: GeminiMonitorRequest | GeminiMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GeminiMonitorResponse, MonitorGeminiErrorBody]:
        """Extract structured data from Google Gemini — generated answer text and cited sources for any prompt, with
        Markdown and HTML export formats

        Args:
            body: Request parameters for monitoring Gemini responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/gemini"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GeminiMonitorRequest | GeminiMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GeminiMonitorResponse],
            error_mapper=monitor_gemini_error_mapper,
            request_options=request_options,
        )

    def monitor_google(
        self,
        body: GoogleMonitorRequest3 | GoogleMonitorRequest3Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleMonitorResponse, MonitorGoogleErrorBody]:
        """Extract structured data from Google Search including organic results, People Also Ask, related searches, and
        optional AI Overview

        Args:
            body: Request parameters for monitoring Google search results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/google"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleMonitorRequest3 | GoogleMonitorRequest3Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GoogleMonitorResponse],
            error_mapper=monitor_google_error_mapper,
            request_options=request_options,
        )

    def monitor_google_news(
        self,
        body: GoogleNewsMonitorRequest2 | GoogleNewsMonitorRequest2Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleNewsMonitorResponse, MonitorGoogleNewsErrorBody]:
        """Extract structured news articles from Google News including titles, links, snippets, sources, dates, and
        thumbnails

        Args:
            body: Request parameters for monitoring Google News results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/google/news"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleNewsMonitorRequest2 | GoogleNewsMonitorRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GoogleNewsMonitorResponse],
            error_mapper=monitor_google_news_error_mapper,
            request_options=request_options,
        )

    def monitor_grok(
        self, body: GrokMonitorRequest | GrokMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GrokMonitorResponse, MonitorGrokErrorBody]:
        """Extract structured data from Grok — answer text and cited sources, including X/Twitter references — for any
        prompt across supported regions

        Args:
            body: Request parameters for monitoring Grok responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/grok"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GrokMonitorRequest | GrokMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GrokMonitorResponse],
            error_mapper=monitor_grok_error_mapper,
            request_options=request_options,
        )

    def monitor_perplexity(
        self,
        body: PerplexityMonitorRequest | PerplexityMonitorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PerplexityMonitorResponse, MonitorPerplexityErrorBody]:
        """Extract structured data from Perplexity AI about your brand, products, or any topic across various regions

        Args:
            body: Request parameters for monitoring Perplexity responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/perplexity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PerplexityMonitorRequest | PerplexityMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PerplexityMonitorResponse],
            error_mapper=monitor_perplexity_error_mapper,
            request_options=request_options,
        )

    def resolve_google_goto(
        self, body: GoogleGotoRequest | GoogleGotoRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleGotoResponse, ResolveGoogleGotoErrorBody]:
        """Resolve one Google redirect link to its destination URL. Send the ``redirectLink`` that ships beside every
        resolved link on a Google Search, Google News, or AI Mode response, and the response gives you the URL it points
        to.

        Charges no credits, does not use a concurrency slot, and counts against the per-second rate limit like any other
        call. Each request resolves one link, and Google gets at most 10 seconds to answer.

        Args:
            body: The Google redirect link to resolve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/google/goto"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleGotoRequest | GoogleGotoRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[GoogleGotoResponse],
            error_mapper=resolve_google_goto_error_mapper,
            request_options=request_options,
        )


class AsyncMonitorWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_google_product(
        self,
        body: GoogleProductRequest | GoogleProductRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleProductResponse, GetGoogleProductErrorBody]:
        """Return the product panel that a Google Search shopping card or a Google AI Mode product opens: merchant
        offers, description, specifications, reviews, images and related products. Send the ``productResultToken`` from
        a Google Search ``result.shoppingCards`` card, or from a Google AI Mode ``result.shoppingCards`` or
        ``result.inlineProducts`` entry.

        Costs 1 credit, plus the 2-credit sync surcharge, and only when the request succeeds. A token expires five
        minutes after the scrape that issued it. If you send the request async, set a high ``priority``, so that the
        token does not expire in the queue.

        Args:
            body: The token from a Google Search shopping card
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/google/product"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleProductRequest | GoogleProductRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GoogleProductResponse],
            error_mapper=get_google_product_error_mapper,
            request_options=request_options,
        )

    async def monitor_ai_mode(
        self,
        body: AiModeMonitorRequest2 | AiModeMonitorRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AiModeMonitorResponse, MonitorAiModeErrorBody]:
        """Extract structured data from AI Mode about your brand, products, or any topic across various regions

        Args:
            body: Request parameters for monitoring AI Mode responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/aimode"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AiModeMonitorRequest2 | AiModeMonitorRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AiModeMonitorResponse],
            error_mapper=monitor_ai_mode_error_mapper,
            request_options=request_options,
        )

    async def monitor_bing_ai_mode(
        self,
        body: BingAiModeMonitorRequest | BingAiModeMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BingAiModeMonitorResponse, MonitorBingAiModeErrorBody]:
        """Extract the answer, sources and citation pills from Bing AI Mode (bing.com/copilotsearch) for a prompt, in
        the country you select.

        Args:
            body: Request parameters for monitoring Bing AI Mode responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/bing/aimode"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BingAiModeMonitorRequest | BingAiModeMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BingAiModeMonitorResponse],
            error_mapper=monitor_bing_ai_mode_error_mapper,
            request_options=request_options,
        )

    async def monitor_chatgpt(
        self,
        body: ChatGptMonitorRequest | ChatGptMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ChatGptMonitorResponse, MonitorChatgptErrorBody]:
        """Extract structured data from ChatGPT — answer text, cited sources, shopping cards, brand entities, and ads —
        for any prompt across supported regions

        Args:
            body: Request parameters for monitoring ChatGPT responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/chatgpt"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChatGptMonitorRequest | ChatGptMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ChatGptMonitorResponse],
            error_mapper=monitor_chatgpt_error_mapper,
            request_options=request_options,
        )

    async def monitor_copilot(
        self,
        body: CopilotMonitorRequest | CopilotMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CopilotMonitorResponse, MonitorCopilotErrorBody]:
        """Extract structured data from Microsoft Copilot about your brand, products, or any topic across various
        regions

        Args:
            body: Request parameters for monitoring Copilot responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/copilot"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CopilotMonitorRequest | CopilotMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CopilotMonitorResponse],
            error_mapper=monitor_copilot_error_mapper,
            request_options=request_options,
        )

    async def monitor_gemini(
        self,
        body: GeminiMonitorRequest | GeminiMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GeminiMonitorResponse, MonitorGeminiErrorBody]:
        """Extract structured data from Google Gemini — generated answer text and cited sources for any prompt, with
        Markdown and HTML export formats

        Args:
            body: Request parameters for monitoring Gemini responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/gemini"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GeminiMonitorRequest | GeminiMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GeminiMonitorResponse],
            error_mapper=monitor_gemini_error_mapper,
            request_options=request_options,
        )

    async def monitor_google(
        self,
        body: GoogleMonitorRequest3 | GoogleMonitorRequest3Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleMonitorResponse, MonitorGoogleErrorBody]:
        """Extract structured data from Google Search including organic results, People Also Ask, related searches, and
        optional AI Overview

        Args:
            body: Request parameters for monitoring Google search results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/google"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleMonitorRequest3 | GoogleMonitorRequest3Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GoogleMonitorResponse],
            error_mapper=monitor_google_error_mapper,
            request_options=request_options,
        )

    async def monitor_google_news(
        self,
        body: GoogleNewsMonitorRequest2 | GoogleNewsMonitorRequest2Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleNewsMonitorResponse, MonitorGoogleNewsErrorBody]:
        """Extract structured news articles from Google News including titles, links, snippets, sources, dates, and
        thumbnails

        Args:
            body: Request parameters for monitoring Google News results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/google/news"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleNewsMonitorRequest2 | GoogleNewsMonitorRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GoogleNewsMonitorResponse],
            error_mapper=monitor_google_news_error_mapper,
            request_options=request_options,
        )

    async def monitor_grok(
        self,
        body: GrokMonitorRequest | GrokMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GrokMonitorResponse, MonitorGrokErrorBody]:
        """Extract structured data from Grok — answer text and cited sources, including X/Twitter references — for any
        prompt across supported regions

        Args:
            body: Request parameters for monitoring Grok responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/grok"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GrokMonitorRequest | GrokMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GrokMonitorResponse],
            error_mapper=monitor_grok_error_mapper,
            request_options=request_options,
        )

    async def monitor_perplexity(
        self,
        body: PerplexityMonitorRequest | PerplexityMonitorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PerplexityMonitorResponse, MonitorPerplexityErrorBody]:
        """Extract structured data from Perplexity AI about your brand, products, or any topic across various regions

        Args:
            body: Request parameters for monitoring Perplexity responses
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/perplexity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PerplexityMonitorRequest | PerplexityMonitorRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PerplexityMonitorResponse],
            error_mapper=monitor_perplexity_error_mapper,
            request_options=request_options,
        )

    async def resolve_google_goto(
        self,
        body: GoogleGotoRequest | GoogleGotoRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GoogleGotoResponse, ResolveGoogleGotoErrorBody]:
        """Resolve one Google redirect link to its destination URL. Send the ``redirectLink`` that ships beside every
        resolved link on a Google Search, Google News, or AI Mode response, and the response gives you the URL it points
        to.

        Charges no credits, does not use a concurrency slot, and counts against the per-second rate limit like any other
        call. Each request resolves one link, and Google gets at most 10 seconds to answer.

        Args:
            body: The Google redirect link to resolve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/monitor/google/goto"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GoogleGotoRequest | GoogleGotoRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[GoogleGotoResponse],
            error_mapper=resolve_google_goto_error_mapper,
            request_options=request_options,
        )
