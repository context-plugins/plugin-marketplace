from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scope import ScopeOrStr


class Profile(SdkBaseModel):
    profile_id: Optional[str] = Field(default=UNSET, alias="profileId")
    """The profile ID"""

    scope: Optional[ScopeOrStr] = UNSET
    caption: Optional[str] = UNSET
    """The profile caption"""

    description: Optional[str] = UNSET
    application_id: Optional[UUID] = Field(default=UNSET, alias="applicationId")
    enabled: Optional[bool] = UNSET


class ProfileDict(TypedDict):
    profile_id: NotRequired[str]
    scope: NotRequired[ScopeOrStr]
    caption: NotRequired[str]
    description: NotRequired[str]
    application_id: NotRequired[UUID]
    enabled: NotRequired[bool]
