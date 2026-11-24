from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.group_by_diagnostics_v4_group_by_outcome_dto import GroupByDiagnosticsV4GroupByOutcomeDtoOrStr


class GroupByDiagnosticsV4Group(SdkBaseModel):
    group: Optional[str] = UNSET
    rows_tested: Optional[int] = Field(default=UNSET, alias="rowsTested")
    status: Optional[GroupByDiagnosticsV4GroupByOutcomeDtoOrStr] = UNSET
    value: Optional[float] = UNSET


class GroupByDiagnosticsV4GroupDict(TypedDict):
    group: NotRequired[str]
    rows_tested: NotRequired[int]
    status: NotRequired[GroupByDiagnosticsV4GroupByOutcomeDtoOrStr]
    value: NotRequired[float]
