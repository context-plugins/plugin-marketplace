from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutoPay(SdkBaseModel):
    """Vendor auto-pay information."""

    enabled: Optional[bool] = UNSET


class AutoPayDict(TypedDict):
    enabled: NotRequired[bool]
