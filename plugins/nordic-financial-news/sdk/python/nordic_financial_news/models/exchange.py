from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Exchange(SdkBaseModel):
    """Primary exchange where the company is listed"""

    id: Optional[str] = UNSET
    """Exchange identifier"""

    name: Optional[str] = UNSET
    """Exchange display name"""

    mic_code: Optional[str] = UNSET
    """ISO 10383 Market Identifier Code"""


class ExchangeDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    mic_code: NotRequired[str]
