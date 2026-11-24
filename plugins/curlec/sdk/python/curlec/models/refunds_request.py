from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RefundsRequest(SdkBaseModel):
    notes: dict[str, str]
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class RefundsRequestDict(TypedDict):
    notes: dict[str, str]
