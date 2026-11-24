from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.by import ByOrStr


class Lookup(SdkBaseModel):
    by: ByOrStr
    """How the list was resolved. ``category`` means your ``regionCode``/``languageCode`` were applied; ``location``
    means they could not be (the location has no primary category or no region code, which is common for service-area
    businesses) and the attributes are the location's defaults instead."""

    category_name: Optional[str] = Field(default=UNSET, alias="categoryName")
    region_code: Optional[str] = Field(default=UNSET, alias="regionCode")
    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")


class LookupDict(TypedDict):
    by: ByOrStr
    category_name: NotRequired[str]
    region_code: NotRequired[str]
    language_code: NotRequired[str]
