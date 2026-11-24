from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.graduation_strategy import GraduationStrategyOrStr


class TrialParams(SdkBaseModel):
    """For Reels only. Trial reels are only shared to non-followers."""

    graduation_strategy: GraduationStrategyOrStr = Field(alias="graduationStrategy")


class TrialParamsDict(TypedDict):
    graduation_strategy: GraduationStrategyOrStr
