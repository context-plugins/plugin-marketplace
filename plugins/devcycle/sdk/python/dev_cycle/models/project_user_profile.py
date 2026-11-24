from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class ProjectUserProfile(SdkBaseModel):
    id: str = Field(alias="_id")
    """Auto-generated unique User Profile ID"""

    project: str = Field(alias="_project")
    """The Project associated with the User Profile"""

    a0_user: str
    """ID of the User who created the User Profile"""

    dvc_user_id: OptionalNullable[str] = Field(default=UNSET, alias="dvcUserId")
    """DVC User Id for User Profile. Mirrors the SDK ``user_id``, which is capped at 200 characters."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The date the Project User Profile was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The date the Project User Profile was last updated"""


class ProjectUserProfileDict(TypedDict):
    id: str
    project: str
    a0_user: str
    dvc_user_id: NotRequired[str | None]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
