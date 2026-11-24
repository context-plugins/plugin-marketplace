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
    BaseRawResponse,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    empty_response,
    json_body,
    param,
    unwrap,
)
from .errors.get_crawl_job_error import GetCrawlJobErrorBody, get_crawl_job_error_mapper
from .errors.submit_crawl_job_error import SubmitCrawlJobErrorBody, submit_crawl_job_error_mapper
from .models.crawl_job_request import CrawlJobRequest, CrawlJobRequestDict
from .server.server import Server


class Crawl4AiClient(BaseCrawl4AiClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
    def with_raw_response(self) -> ApiWithRawResponse:
        return ApiWithRawResponse(self._raw_client, self._server)

    def get_crawl_job(self, job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Get the status and results of a crawl job

        Args:
            job_id: Job ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Job status and results

        Raises:
            ApiError: Unauthorized - Invalid API key Job not found ``error`` is ``RawError``."""
        return unwrap(self.with_raw_response.get_crawl_job(job_id, request_options=request_options))

    def submit_crawl_job(
        self, body: CrawlJobRequest | CrawlJobRequestDict, *, request_options: RequestOptionsOrDict | None = None
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
        return unwrap(self.with_raw_response.submit_crawl_job(body, request_options=request_options))

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


class ApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_crawl_job(
        self, job_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetCrawlJobErrorBody]:
        """Get the status and results of a crawl job

        Args:
            job_id: Job ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/crawl/job/{jobId}"),
            path_params=[param[str]("jobId", job_id)],
            decoder=empty_response,
            error_mapper=get_crawl_job_error_mapper,
            request_options=request_options,
        )

    def submit_crawl_job(
        self, body: CrawlJobRequest | CrawlJobRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SubmitCrawlJobErrorBody]:
        """Submit a new web crawling job

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/crawl/job"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CrawlJobRequest | CrawlJobRequestDict](body),
            decoder=empty_response,
            error_mapper=submit_crawl_job_error_mapper,
            request_options=request_options,
        )


Client = Crawl4AiClient
