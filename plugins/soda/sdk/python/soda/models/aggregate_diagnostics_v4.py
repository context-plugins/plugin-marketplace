from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AggregateDiagnosticsV4(SdkBaseModel):
    check_rows_tested: Optional[int] = Field(default=UNSET, alias="checkRowsTested")
    dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="datasetRowsTested")


class AggregateDiagnosticsV4Dict(TypedDict):
    check_rows_tested: NotRequired[int]
    dataset_rows_tested: NotRequired[int]
