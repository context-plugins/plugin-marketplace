from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteUserResponse(SdkBaseModel):
    """Response confirming user deletion."""

    message: Optional[str] = UNSET
    """Success message"""


class DeleteUserResponseDict(TypedDict):
    message: NotRequired[str]
