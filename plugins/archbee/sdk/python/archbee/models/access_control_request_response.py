from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data import Data, DataDict
from .enums.status import StatusOrStr


class AccessControlRequestResponse(SdkBaseModel):
    """Process status"""

    status: Optional[StatusOrStr] = UNSET
    """Response Status"""

    data: Optional[Data] = UNSET


class AccessControlRequestResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[DataDict]
