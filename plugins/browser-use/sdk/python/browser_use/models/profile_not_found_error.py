from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class ProfileNotFoundError(SdkBaseModel):
    """Error response when a profile is not found"""

    detail: str = "Profile not found"


class ProfileNotFoundErrorDict(TypedDict):
    detail: NotRequired[str]
