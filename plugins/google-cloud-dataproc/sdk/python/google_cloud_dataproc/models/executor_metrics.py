from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExecutorMetrics(SdkBaseModel):
    metrics: Optional[dict[str, str]] = UNSET


class ExecutorMetricsDict(TypedDict):
    metrics: NotRequired[dict[str, str]]
