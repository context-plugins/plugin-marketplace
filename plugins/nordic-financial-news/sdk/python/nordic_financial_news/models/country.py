from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Country(SdkBaseModel):
    """Country where the company is domiciled"""

    id: Optional[str] = UNSET
    """Country identifier"""

    name: Optional[str] = UNSET
    """Country name"""

    iso2_code: Optional[str] = UNSET
    """ISO 3166-1 alpha-2 code"""


class CountryDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    iso2_code: NotRequired[str]
