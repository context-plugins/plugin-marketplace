from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.three_ds_action_type import ThreeDsActionTypeOrStr


class ThreeDsRequestDto(SdkBaseModel):
    """ThreeDsRequestDto represents a request for 3D Secure actions."""

    action: ThreeDsActionTypeOrStr


class ThreeDsRequestDtoDict(TypedDict):
    action: ThreeDsActionTypeOrStr
