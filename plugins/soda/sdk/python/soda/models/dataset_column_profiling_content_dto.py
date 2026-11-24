from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .column_metric_content_dto import ColumnMetricContentDto, ColumnMetricContentDtoDict


class DatasetColumnProfilingContentDto(SdkBaseModel):
    id: str
    metrics: Optional[ColumnMetricContentDto] = UNSET
    name: str
    type_: str = Field(alias="type")


class DatasetColumnProfilingContentDtoDict(TypedDict):
    id: str
    metrics: NotRequired[ColumnMetricContentDtoDict]
    name: str
    type_: str
