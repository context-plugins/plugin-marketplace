from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1DatamaskingRequest(SdkBaseModel):
    text: str
    """The text containing sensitive data to mask"""

    types: Optional[str] = UNSET
    """Array of data types to mask (default: all types)"""


class V1DatamaskingRequestDict(TypedDict):
    text: str
    types: NotRequired[str]
