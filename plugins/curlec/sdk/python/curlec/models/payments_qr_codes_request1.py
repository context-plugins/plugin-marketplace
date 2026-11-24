from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PaymentsQrCodesRequest1(SdkBaseModel):
    notes: dict[str, str]
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class PaymentsQrCodesRequest1Dict(TypedDict):
    notes: dict[str, str]
