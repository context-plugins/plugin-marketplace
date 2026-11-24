from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FundingPurpose(SdkBaseModel):
    """Funding purpose."""

    category: Optional[str] = UNSET
    """Purpose category"""

    sub_categories: Optional[list[str]] = Field(default=UNSET, alias="subCategories")
    """Purpose sub-category"""


class FundingPurposeDict(TypedDict):
    category: NotRequired[str]
    sub_categories: NotRequired[list[str]]
