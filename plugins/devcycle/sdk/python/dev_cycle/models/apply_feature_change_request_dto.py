from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApplyFeatureChangeRequestDto(SdkBaseModel):
    description: str
    action: Literal["applied"] = "applied"


class ApplyFeatureChangeRequestDtoDict(TypedDict):
    description: str
    action: Literal["applied"]
