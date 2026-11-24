from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CancelOrExitMultiOrderData(SdkBaseModel):
    order_ids: Optional[list[str]] = UNSET
    """Reference order IDs"""


class CancelOrExitMultiOrderDataDict(TypedDict):
    order_ids: NotRequired[list[str]]
