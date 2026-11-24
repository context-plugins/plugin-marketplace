from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CategorySummary(SdkBaseModel):
    id: str
    """Unique category identifier"""

    name: str
    """Category display name"""


class CategorySummaryDict(TypedDict):
    id: str
    name: str
