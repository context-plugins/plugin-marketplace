from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1ColorconverterResponse(SdkBaseModel):
    status: Optional[str] = UNSET
    """status"""

    error: Optional[str] = UNSET
    """error"""

    data: Optional[Any] = UNSET
    """data"""


class V1ColorconverterResponseDict(TypedDict):
    status: NotRequired[str]
    error: NotRequired[str]
    data: NotRequired[Any]
