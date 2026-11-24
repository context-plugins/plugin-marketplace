from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PaymentPurposeCodeResponse(SdkBaseModel):
    """Payment purpose code response."""

    name: Optional[str] = UNSET
    """Name"""

    value: Optional[str] = UNSET
    """Value"""


class PaymentPurposeCodeResponseDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
