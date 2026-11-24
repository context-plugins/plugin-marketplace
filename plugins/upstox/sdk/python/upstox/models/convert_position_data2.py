from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConvertPositionData2(SdkBaseModel):
    """Response data for convert position request"""

    status: Optional[str] = UNSET
    """Status message for convert position request"""


class ConvertPositionData2Dict(TypedDict):
    status: NotRequired[str]
