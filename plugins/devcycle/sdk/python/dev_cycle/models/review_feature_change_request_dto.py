from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.action import ActionOrStr


class ReviewFeatureChangeRequestDto(SdkBaseModel):
    action: ActionOrStr
    comment: str


class ReviewFeatureChangeRequestDtoDict(TypedDict):
    action: ActionOrStr
    comment: str
