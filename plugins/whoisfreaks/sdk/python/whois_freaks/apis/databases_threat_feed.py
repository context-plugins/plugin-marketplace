from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    file_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class DatabasesThreatFeed:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatabasesThreatFeedWithRawResponse(client, server, auth)

    def download_threat_feed_malware(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Malware threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.download_threat_feed_malware(date=date, request_options=request_options))

    def download_threat_feed_malware_sample(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sample malware threat feed as CSV

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.download_threat_feed_malware_sample(request_options=request_options))

    def download_threat_feed_phishing(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Phishing threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.download_threat_feed_phishing(date=date, request_options=request_options))

    def download_threat_feed_phishing_sample(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sample phishing threat feed as CSV

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.download_threat_feed_phishing_sample(request_options=request_options))

    def download_threat_feed_spam(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Spam threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.download_threat_feed_spam(date=date, request_options=request_options))

    def download_threat_feed_spam_sample(self, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sample spam threat feed as CSV

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.download_threat_feed_spam_sample(request_options=request_options))

    @property
    def with_raw_response(self) -> DatabasesThreatFeedWithRawResponse:
        return self._with_raw_response


class AsyncDatabasesThreatFeed:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatabasesThreatFeedWithRawResponse(client, server, auth)

    async def download_threat_feed_malware(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Malware threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.download_threat_feed_malware(date=date, request_options=request_options)
        )

    async def download_threat_feed_malware_sample(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sample malware threat feed as CSV

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.download_threat_feed_malware_sample(request_options=request_options)
        )

    async def download_threat_feed_phishing(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Phishing threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.download_threat_feed_phishing(date=date, request_options=request_options)
        )

    async def download_threat_feed_phishing_sample(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sample phishing threat feed as CSV

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.download_threat_feed_phishing_sample(request_options=request_options)
        )

    async def download_threat_feed_spam(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Spam threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.download_threat_feed_spam(date=date, request_options=request_options)
        )

    async def download_threat_feed_spam_sample(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sample spam threat feed as CSV

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.download_threat_feed_spam_sample(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDatabasesThreatFeedWithRawResponse:
        return self._with_raw_response


class DatabasesThreatFeedWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def download_threat_feed_malware(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/malware"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def download_threat_feed_malware_sample(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/malware/sample"),
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def download_threat_feed_phishing(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/phishing"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def download_threat_feed_phishing_sample(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/phishing/sample"),
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def download_threat_feed_spam(
        self, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/spam"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def download_threat_feed_spam_sample(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/spam/sample"),
            auth_scheme=self._auth.api_key_auth,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncDatabasesThreatFeedWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def download_threat_feed_malware(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/malware"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def download_threat_feed_malware_sample(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/malware/sample"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def download_threat_feed_phishing(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/phishing"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def download_threat_feed_phishing_sample(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/phishing/sample"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def download_threat_feed_spam(
        self, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            date: Feed date (yyyy-MM-dd); defaults to latest available
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/spam"),
            query_params=[param[str | None]("date", date)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def download_threat_feed_spam_sample(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3.4/download/threat-feed/spam/sample"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
