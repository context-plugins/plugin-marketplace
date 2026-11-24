from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1LemmatizerResponse(SdkBaseModel):
    status: Optional[str] = UNSET
    """status"""

    error: Optional[str] = UNSET
    """error"""

    data: Optional[Any] = UNSET
    """data"""


class V1LemmatizerResponseDict(TypedDict):
    status: NotRequired[str]
    error: NotRequired[str]
    data: NotRequired[Any]
