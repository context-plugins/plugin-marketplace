from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .target import Target, TargetDict


class Audience(SdkBaseModel):
    """Target audience for the campaign"""

    broadcast: Optional[bool] = UNSET
    """If true, sends to all eligible users"""

    targets: Optional[list[Target]] = UNSET
    """Specific targets to send to"""


class AudienceDict(TypedDict):
    broadcast: NotRequired[bool]
    targets: NotRequired[list[TargetDict]]
