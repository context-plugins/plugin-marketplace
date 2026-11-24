from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProductLookupKey(SdkBaseModel):
    """Key used to look up product updates"""

    data: Optional[str] = UNSET
    """JSON-encoded product lookup data"""


class ProductLookupKeyDict(TypedDict):
    data: NotRequired[str]
