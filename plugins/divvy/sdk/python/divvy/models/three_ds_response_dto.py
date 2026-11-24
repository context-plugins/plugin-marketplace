from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.three_ds_challenge_status import ThreeDsChallengeStatusOrStr


class ThreeDsResponseDto(SdkBaseModel):
    """Response dto for three ds response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the 3D Secure response"""

    status: Optional[ThreeDsChallengeStatusOrStr] = UNSET


class ThreeDsResponseDtoDict(TypedDict):
    id: NotRequired[str]
    status: NotRequired[ThreeDsChallengeStatusOrStr]
