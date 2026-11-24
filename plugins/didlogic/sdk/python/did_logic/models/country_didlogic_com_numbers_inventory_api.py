from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CountryDidlogicComNumbersInventoryApi(SdkBaseModel):
    id: int
    """Country identifier"""

    name: str
    """Country name"""

    short_name: str
    """ISO 3166-1 alpha-2 country code"""

    has_provinces_or_states: bool
    """Whether country has states or provinces"""


class CountryDidlogicComNumbersInventoryApiDict(TypedDict):
    id: int
    name: str
    short_name: str
    has_provinces_or_states: bool
