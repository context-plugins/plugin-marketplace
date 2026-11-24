from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SuccessResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    """Whether the operation was successful"""


class SuccessResponseDict(TypedDict):
    success: NotRequired[bool]
