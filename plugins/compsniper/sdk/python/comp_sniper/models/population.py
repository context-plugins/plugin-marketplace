from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .grade import Grade, GradeDict


class Population(SdkBaseModel):
    total: Optional[int] = UNSET
    gem_rate: OptionalNullable[float] = Field(default=UNSET, alias="gemRate")
    """Share graded 10, percent"""

    grades: Optional[list[Grade]] = UNSET


class PopulationDict(TypedDict):
    total: NotRequired[int]
    gem_rate: NotRequired[float | None]
    grades: NotRequired[list[GradeDict]]
