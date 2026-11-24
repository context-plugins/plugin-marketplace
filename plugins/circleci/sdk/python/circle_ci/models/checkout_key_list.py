from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .checkout_key import CheckoutKey, CheckoutKeyDict


class CheckoutKeyList(SdkBaseModel):
    items: Optional[list[CheckoutKey]] = UNSET
    """List of checkout keys"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class CheckoutKeyListDict(TypedDict):
    items: NotRequired[list[CheckoutKeyDict]]
    next_page_token: NotRequired[str]
