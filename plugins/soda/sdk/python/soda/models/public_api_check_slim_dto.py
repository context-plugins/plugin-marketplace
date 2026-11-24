from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.evaluation_status_dto import EvaluationStatusDtoOrStr


class PublicApiCheckSlimDto(SdkBaseModel):
    evaluation_status: Optional[EvaluationStatusDtoOrStr] = Field(default=UNSET, alias="evaluationStatus")
    id: Optional[str] = UNSET


class PublicApiCheckSlimDtoDict(TypedDict):
    evaluation_status: NotRequired[EvaluationStatusDtoOrStr]
    id: NotRequired[str]
