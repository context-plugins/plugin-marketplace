from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateBrandKitRequest(SdkBaseModel):
    """Parameters for creating or updating a Brand Kit."""

    name: str
    """Display name for the Brand Kit."""

    description: Optional[str] = UNSET
    """Description of the Brand Kit's purpose."""


class CreateBrandKitRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
