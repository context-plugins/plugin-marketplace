from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr


class EvalReason(SdkBaseModel):
    """The reason the User was Served this particular value"""

    reason: ReasonOrStr
    """Evaluation reason"""

    details: Optional[str] = UNSET
    """Detailed description of evaluation"""

    target_id: Optional[str] = UNSET
    """ID of the targeting rule that matched"""


class EvalReasonDict(TypedDict):
    reason: ReasonOrStr
    details: NotRequired[str]
    target_id: NotRequired[str]
