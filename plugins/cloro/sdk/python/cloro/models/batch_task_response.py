from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .summary import Summary, SummaryDict
from .unions.result_cloro_dev_async_and_cloro_dev_countries_and_cloro_dev_credits_api import (
    ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi,
    ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApiDict,
)


class BatchTaskResponse(SdkBaseModel):
    success: bool
    """Always true for a successfully processed batch (individual tasks may still fail)."""

    summary: Summary
    """Aggregate counts for the batch."""

    results: list[ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi]
    """Per-task results preserving the original input order by index."""


class BatchTaskResponseDict(TypedDict):
    success: bool
    summary: SummaryDict
    results: list[ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApiDict]
