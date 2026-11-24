from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.evaluation_status_dto import EvaluationStatusDtoOrStr


class CheckResultValueSeriesDtoValueSeriesValue(SdkBaseModel):
    label: Optional[str] = UNSET
    level: Optional[EvaluationStatusDtoOrStr] = UNSET
    value: Optional[float] = UNSET


class CheckResultValueSeriesDtoValueSeriesValueDict(TypedDict):
    label: NotRequired[str]
    level: NotRequired[EvaluationStatusDtoOrStr]
    value: NotRequired[float]
