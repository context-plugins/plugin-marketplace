from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class User(SdkBaseModel):
    login: Optional[str] = UNSET
    """The login name of the user"""

    name: Optional[str] = UNSET
    """The display name of the user"""

    avatar_url: Optional[str] = UNSET
    """URL of the user avatar"""

    admin: Optional[bool] = UNSET
    """Whether the user is an admin"""

    all_emails: Optional[list[EmailStr]] = UNSET
    """All email addresses associated with the user"""

    selected_email: Optional[EmailStr] = UNSET
    """The user selected email address"""

    days_left_in_trial: Optional[int] = UNSET
    """Days remaining in trial"""

    parallelism: Optional[int] = UNSET
    """Default parallelism setting"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When the user account was created"""


class UserDict(TypedDict):
    login: NotRequired[str]
    name: NotRequired[str]
    avatar_url: NotRequired[str]
    admin: NotRequired[bool]
    all_emails: NotRequired[list[EmailStr]]
    selected_email: NotRequired[EmailStr]
    days_left_in_trial: NotRequired[int]
    parallelism: NotRequired[int]
    created_at: NotRequired[RFC3339DateTime]
