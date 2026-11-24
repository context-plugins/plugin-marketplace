from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class SpaceGroupCreateResponse(SdkBaseModel):
    """Process status"""

    status: Optional[StatusOrStr] = UNSET
    """Response Status"""


class SpaceGroupCreateResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
