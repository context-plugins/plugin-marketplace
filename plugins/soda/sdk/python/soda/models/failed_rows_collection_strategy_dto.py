from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.failed_rows_collection_strategy_type_dto import FailedRowsCollectionStrategyTypeDtoOrStr
from .enums.threshold_condition_dto import ThresholdConditionDtoOrStr


class FailedRowsCollectionStrategyDto(SdkBaseModel):
    max_row_count_override: Optional[int] = Field(default=UNSET, alias="maxRowCountOverride")
    threshold: float
    threshold_condition: ThresholdConditionDtoOrStr = Field(alias="thresholdCondition")
    type_: Optional[FailedRowsCollectionStrategyTypeDtoOrStr] = Field(default=UNSET, alias="type")


class FailedRowsCollectionStrategyDtoDict(TypedDict):
    max_row_count_override: NotRequired[int]
    threshold: float
    threshold_condition: ThresholdConditionDtoOrStr
    type_: NotRequired[FailedRowsCollectionStrategyTypeDtoOrStr]
