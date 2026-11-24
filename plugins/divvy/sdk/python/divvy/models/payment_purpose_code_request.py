from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PaymentPurposeCodeRequest(SdkBaseModel):
    """Payment purpose code request."""

    name: str
    """Name"""


class PaymentPurposeCodeRequestDict(TypedDict):
    name: str
