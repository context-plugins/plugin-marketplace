from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyNaics(SdkBaseModel):
    naics_codes: Optional[float] = Field(default=UNSET, alias="naicsCodes")
    description: str


class CompanyNaicsDict(TypedDict):
    naics_codes: NotRequired[float]
    description: str
