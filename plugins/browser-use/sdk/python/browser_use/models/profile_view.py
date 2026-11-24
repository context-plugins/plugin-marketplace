from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ProfileView(SdkBaseModel):
    """View model for representing a profile. A profile lets you preserve the login state between sessions.

    We recommend that you create a separate profile for each user of your app. You can assign a user_id to each profile
    to easily identify which user the profile belongs to."""

    id: UUID
    """Unique identifier for the profile"""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """Your internal user identifier for this profile. Use this to associate a profile with a user in your system."""

    name: Optional[str] = UNSET
    """Optional name for the profile"""

    last_used_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUsedAt")
    """Timestamp when the profile was last used"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """Timestamp when the profile was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """Timestamp when the profile was last updated"""

    cookie_domains: Optional[list[str]] = Field(default=UNSET, alias="cookieDomains")
    """List of domain URLs that have cookies stored for this profile"""


class ProfileViewDict(TypedDict):
    id: UUID
    user_id: NotRequired[str]
    name: NotRequired[str]
    last_used_at: NotRequired[RFC3339DateTime]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    cookie_domains: NotRequired[list[str]]
