from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataStandardCheckResultsDto(SdkBaseModel):
    failing_count: Optional[int] = Field(default=UNSET, alias="failingCount")
    not_evaluated_count: Optional[int] = Field(default=UNSET, alias="notEvaluatedCount")
    passing_count: Optional[int] = Field(default=UNSET, alias="passingCount")
    warning_count: Optional[int] = Field(default=UNSET, alias="warningCount")


class DataStandardCheckResultsDtoDict(TypedDict):
    failing_count: NotRequired[int]
    not_evaluated_count: NotRequired[int]
    passing_count: NotRequired[int]
    warning_count: NotRequired[int]
