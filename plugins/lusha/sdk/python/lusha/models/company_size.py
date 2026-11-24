from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanySize(SdkBaseModel):
    """Company size details."""

    min: Optional[float] = UNSET
    max: Optional[float] = UNSET
    employees_in_linkedin: Optional[float] = Field(default=UNSET, alias="employeesInLinkedin")


class CompanySizeDict(TypedDict):
    min: NotRequired[float]
    max: NotRequired[float]
    employees_in_linkedin: NotRequired[float]
