from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .location3 import Location3, Location3Dict


class CompanyDerivedInfo2(SdkBaseModel):
    """Output only. Derived details about the company."""

    headquarters_location: Optional[Location3] = Field(default=UNSET, alias="headquartersLocation")
    """A structured headquarters location of the company, resolved from Company.headquarters_address if provided."""


class CompanyDerivedInfo2Dict(TypedDict):
    headquarters_location: NotRequired[Location3Dict]
