from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProfileCreateRequest(SdkBaseModel):
    """Request model for creating a new profile."""

    name: Optional[str] = UNSET
    """Optional name for the profile"""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """Your internal user identifier for this profile. Use this to associate a profile with a user in your system."""


class ProfileCreateRequestDict(TypedDict):
    name: NotRequired[str]
    user_id: NotRequired[str]
