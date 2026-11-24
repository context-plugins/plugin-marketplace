from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1 import Data1, Data1Dict
from .enums.status import StatusOrStr


class SyncApiReferenceResponse(SdkBaseModel):
    """Import OK status"""

    status: Optional[StatusOrStr] = UNSET
    """Response Status"""

    data: Optional[Data1] = UNSET


class SyncApiReferenceResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[Data1Dict]
