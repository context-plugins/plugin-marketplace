from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class CompanyOwner(SdkBaseModel):
    """Company owner."""

    name: Optional[str] = UNSET
    """Company owner name"""

    date_of_birth: Optional[Date] = Field(default=UNSET, alias="dateOfBirth")
    """Company owner date of birth. The value is in the ``yyyy-MM-dd`` format."""


class CompanyOwnerDict(TypedDict):
    name: NotRequired[str]
    date_of_birth: NotRequired[Date]
