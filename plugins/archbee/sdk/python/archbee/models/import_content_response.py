from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data3 import Data3, Data3Dict
from .enums.status import StatusOrStr


class ImportContentResponse(SdkBaseModel):
    """Import OK status"""

    status: Optional[StatusOrStr] = UNSET
    """Response Status"""

    data: Optional[Data3] = UNSET


class ImportContentResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[Data3Dict]
