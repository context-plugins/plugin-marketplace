from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EditUserRequest(SdkBaseModel):
    """Request payload for updating an existing user in Automation Hub"""

    id: int
    """Unique identifier of the user to update"""

    role: Optional[str] = UNSET
    """Updated role to assign to the user"""

    is_active: Optional[bool] = Field(default=UNSET, alias="isActive")
    """Updated active status for the user account"""


class EditUserRequestDict(TypedDict):
    id: int
    role: NotRequired[str]
    is_active: NotRequired[bool]
