from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .average import Average, AverageDict


class Amount1(SdkBaseModel):
    total: Optional[str] = UNSET
    """Total amount for the subgroup"""

    min: Optional[str] = UNSET
    """Minimum amount for the subgroup"""

    max: Optional[str] = UNSET
    """Maximum amount for the subgroup"""

    average: Optional[Average] = UNSET
    stable_months: Optional[int] = Field(default=UNSET, alias="stableMonths")
    """Number of stable months"""

    secure_months: Optional[int] = Field(default=UNSET, alias="secureMonths")
    """Number of secure months"""


class Amount1Dict(TypedDict):
    total: NotRequired[str]
    min: NotRequired[str]
    max: NotRequired[str]
    average: NotRequired[AverageDict]
    stable_months: NotRequired[int]
    secure_months: NotRequired[int]
