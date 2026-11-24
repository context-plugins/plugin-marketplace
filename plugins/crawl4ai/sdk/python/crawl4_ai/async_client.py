from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from uuid import UUID, uuid4

from typing_extensions import Self

from .base_client import DEFAULT_TIMEOUT, BaseCrawl4AiClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiResult,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BaseRawResponse,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    async_empty_response,
    json_body,
    param,
    unwrap,
)
from .errors.get_crawl_job_error import GetCrawlJobErrorBody, get_crawl_job_error_mapper
from .errors.submit_crawl_job_error import SubmitCrawlJobErrorBody, submit_crawl_job_error_mapper
from .models.crawl_job_request import CrawlJobRequest, CrawlJobRequestDict
from .server.server import Server


class AsyncCrawl4AiClient(BaseCrawl4AiClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "Crawl4AiClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )

    @cached_property
    def with_raw_response(self) -> AsyncApiWithRawResponse:
        return AsyncApiWithRawResponse(self._raw_client, self._server)

    async def get_crawl_job(self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Get the status and results of a crawl job

        Args:
            job_id: Job ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job status and results

        Raises:
            ApiError: Unauthorized - Invalid API key Job not found ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.get_crawl_job(job_id, request_options=request_options))

    async def submit_crawl_job(
        self, body: CrawlJobRequest | CrawlJobRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Submit a new web crawling job

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job submitted successfully

        Raises:
            ApiError: Unauthorized - Invalid API key Rate limit exceeded ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.submit_crawl_job(body, request_options=request_options))

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


class AsyncApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_crawl_job(
        self, job_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetCrawlJobErrorBody]:
        """Get the status and results of a crawl job

        Args:
            job_id: Job ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/crawl/job/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            decoder=async_empty_response,
            error_mapper=get_crawl_job_error_mapper,
            request_options=request_options,
        )

    async def submit_crawl_job(
        self, body: CrawlJobRequest | CrawlJobRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SubmitCrawlJobErrorBody]:
        """Submit a new web crawling job

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/crawl/job"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CrawlJobRequest | CrawlJobRequestDict](body),
            decoder=async_empty_response,
            error_mapper=submit_crawl_job_error_mapper,
            request_options=request_options,
        )


AsyncClient = AsyncCrawl4AiClient
