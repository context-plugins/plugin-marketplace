from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreditInfo(SdkBaseModel):
    sku: Optional[str] = UNSET
    """SKU of the API endpoint"""

    endpoint: Optional[str] = UNSET
    """API endpoint"""

    credits: Optional[int] = UNSET
    """Credit usage per successful API endpoint call"""


class CreditInfoDict(TypedDict):
    sku: NotRequired[str]
    endpoint: NotRequired[str]
    credits: NotRequired[int]
