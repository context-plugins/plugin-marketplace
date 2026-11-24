from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class SpaceGroupDeleteResponse(SdkBaseModel):
    """Process status"""

    status: Optional[StatusOrStr] = UNSET
    """Response Status"""


class SpaceGroupDeleteResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
