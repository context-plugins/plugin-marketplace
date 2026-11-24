from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetricDiagnosticsV4(SdkBaseModel):
    dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="datasetRowsTested")


class MetricDiagnosticsV4Dict(TypedDict):
    dataset_rows_tested: NotRequired[int]
