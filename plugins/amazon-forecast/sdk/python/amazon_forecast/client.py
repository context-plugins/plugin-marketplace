from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.dataset_groups import DatasetGroups
from .apis.dataset_import_job import DatasetImportJob
from .apis.datasets import Datasets
from .apis.explainability import Explainability
from .apis.explainability_export import ExplainabilityExport
from .apis.export_jobs import ExportJobs
from .apis.forecast_export_job import ForecastExportJob
from .apis.forecasts import Forecasts
from .apis.monitor import Monitor
from .apis.operations import Operations
from .apis.predictor_backtest_export_job import PredictorBacktestExportJob
from .apis.predictors import Predictors
from .apis.resource import Resource
from .apis.tags import Tags
from .apis.what_if_analysis import WhatIfAnalysis
from .apis.what_if_forecast import WhatIfForecast
from .apis.what_if_forecast_export import WhatIfForecastExport
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonForecastClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    no_auth,
    param,
)


class AmazonForecastClient(BaseAmazonForecastClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        sigv4: str | None = None,
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
                param[str]("User-Agent", "AmazonForecastClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth)

    @cached_property
    def dataset_groups(self) -> DatasetGroups:
        return DatasetGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def dataset_import_job(self) -> DatasetImportJob:
        return DatasetImportJob(self._raw_client, self._server, self._auth)

    @cached_property
    def datasets(self) -> Datasets:
        return Datasets(self._raw_client, self._server, self._auth)

    @cached_property
    def explainability(self) -> Explainability:
        return Explainability(self._raw_client, self._server, self._auth)

    @cached_property
    def explainability_export(self) -> ExplainabilityExport:
        return ExplainabilityExport(self._raw_client, self._server, self._auth)

    @cached_property
    def export_jobs(self) -> ExportJobs:
        return ExportJobs(self._raw_client, self._server, self._auth)

    @cached_property
    def forecast_export_job(self) -> ForecastExportJob:
        return ForecastExportJob(self._raw_client, self._server, self._auth)

    @cached_property
    def forecasts(self) -> Forecasts:
        return Forecasts(self._raw_client, self._server, self._auth)

    @cached_property
    def monitor(self) -> Monitor:
        return Monitor(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> Operations:
        return Operations(self._raw_client, self._server, self._auth)

    @cached_property
    def predictor_backtest_export_job(self) -> PredictorBacktestExportJob:
        return PredictorBacktestExportJob(self._raw_client, self._server, self._auth)

    @cached_property
    def predictors(self) -> Predictors:
        return Predictors(self._raw_client, self._server, self._auth)

    @cached_property
    def resource(self) -> Resource:
        return Resource(self._raw_client, self._server, self._auth)

    @cached_property
    def tags(self) -> Tags:
        return Tags(self._raw_client, self._server, self._auth)

    @cached_property
    def what_if_analysis(self) -> WhatIfAnalysis:
        return WhatIfAnalysis(self._raw_client, self._server, self._auth)

    @cached_property
    def what_if_forecast(self) -> WhatIfForecast:
        return WhatIfForecast(self._raw_client, self._server, self._auth)

    @cached_property
    def what_if_forecast_export(self) -> WhatIfForecastExport:
        return WhatIfForecastExport(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AmazonForecastClient
