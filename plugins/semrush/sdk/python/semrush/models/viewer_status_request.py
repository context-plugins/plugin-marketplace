from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ViewerStatusRequest(SdkBaseModel):
    user_id: Optional[int] = UNSET
    """Semrush user ID"""


class ViewerStatusRequestDict(TypedDict):
    user_id: NotRequired[int]
