from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1MurmurhashRequest(SdkBaseModel):
    text: str
    """The text to hash"""

    seed: Optional[int] = UNSET
    """Seed value for the hash function"""

    variant: Optional[str] = UNSET
    """Hash variant: 32 (32-bit) or 128 (128-bit)"""


class V1MurmurhashRequestDict(TypedDict):
    text: str
    seed: NotRequired[int]
    variant: NotRequired[str]
