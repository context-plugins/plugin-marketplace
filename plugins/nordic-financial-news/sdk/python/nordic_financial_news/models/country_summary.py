from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CountrySummary(SdkBaseModel):
    id: str
    """Unique country identifier"""

    name: str
    """Country display name"""

    iso2_code: str
    """ISO 3166-1 alpha-2 country code"""


class CountrySummaryDict(TypedDict):
    id: str
    name: str
    iso2_code: str
