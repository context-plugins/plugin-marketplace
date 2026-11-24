from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConvertPositionData(SdkBaseModel):
    status: Optional[str] = UNSET
    """Status message for convert position request"""


class ConvertPositionDataDict(TypedDict):
    status: NotRequired[str]
