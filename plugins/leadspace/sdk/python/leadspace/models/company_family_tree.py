from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company import Company, CompanyDict


class CompanyFamilyTree(SdkBaseModel):
    """The company hierarchy in addition to the matched company"""

    companies: Optional[list[Company]] = UNSET


class CompanyFamilyTreeDict(TypedDict):
    companies: NotRequired[list[CompanyDict]]
