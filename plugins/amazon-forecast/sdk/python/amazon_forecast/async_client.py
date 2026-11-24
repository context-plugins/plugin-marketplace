from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.dataset_groups import AsyncDatasetGroups
from .apis.dataset_import_job import AsyncDatasetImportJob
from .apis.datasets import AsyncDatasets
from .apis.explainability import AsyncExplainability
from .apis.explainability_export import AsyncExplainabilityExport
from .apis.export_jobs import AsyncExportJobs
from .apis.forecast_export_job import AsyncForecastExportJob
from .apis.forecasts import AsyncForecasts
from .apis.monitor import AsyncMonitor
from .apis.operations import AsyncOperations
from .apis.predictor_backtest_export_job import AsyncPredictorBacktestExportJob
from .apis.predictors import AsyncPredictors
from .apis.resource import AsyncResource
from .apis.tags import AsyncTags
from .apis.what_if_analysis import AsyncWhatIfAnalysis
from .apis.what_if_forecast import AsyncWhatIfForecast
from .apis.what_if_forecast_export import AsyncWhatIfForecastExport
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonForecastClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncAmazonForecastClient(BaseAmazonForecastClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        sigv4: str | None = None,
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
                param[str]("User-Agent", "AmazonForecastClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth
        )

    @cached_property
    def dataset_groups(self) -> AsyncDatasetGroups:
        return AsyncDatasetGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def dataset_import_job(self) -> AsyncDatasetImportJob:
        return AsyncDatasetImportJob(self._raw_client, self._server, self._auth)

    @cached_property
    def datasets(self) -> AsyncDatasets:
        return AsyncDatasets(self._raw_client, self._server, self._auth)

    @cached_property
    def explainability(self) -> AsyncExplainability:
        return AsyncExplainability(self._raw_client, self._server, self._auth)

    @cached_property
    def explainability_export(self) -> AsyncExplainabilityExport:
        return AsyncExplainabilityExport(self._raw_client, self._server, self._auth)

    @cached_property
    def export_jobs(self) -> AsyncExportJobs:
        return AsyncExportJobs(self._raw_client, self._server, self._auth)

    @cached_property
    def forecast_export_job(self) -> AsyncForecastExportJob:
        return AsyncForecastExportJob(self._raw_client, self._server, self._auth)

    @cached_property
    def forecasts(self) -> AsyncForecasts:
        return AsyncForecasts(self._raw_client, self._server, self._auth)

    @cached_property
    def monitor(self) -> AsyncMonitor:
        return AsyncMonitor(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> AsyncOperations:
        return AsyncOperations(self._raw_client, self._server, self._auth)

    @cached_property
    def predictor_backtest_export_job(self) -> AsyncPredictorBacktestExportJob:
        return AsyncPredictorBacktestExportJob(self._raw_client, self._server, self._auth)

    @cached_property
    def predictors(self) -> AsyncPredictors:
        return AsyncPredictors(self._raw_client, self._server, self._auth)

    @cached_property
    def resource(self) -> AsyncResource:
        return AsyncResource(self._raw_client, self._server, self._auth)

    @cached_property
    def tags(self) -> AsyncTags:
        return AsyncTags(self._raw_client, self._server, self._auth)

    @cached_property
    def what_if_analysis(self) -> AsyncWhatIfAnalysis:
        return AsyncWhatIfAnalysis(self._raw_client, self._server, self._auth)

    @cached_property
    def what_if_forecast(self) -> AsyncWhatIfForecast:
        return AsyncWhatIfForecast(self._raw_client, self._server, self._auth)

    @cached_property
    def what_if_forecast_export(self) -> AsyncWhatIfForecastExport:
        return AsyncWhatIfForecastExport(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAmazonForecastClient
