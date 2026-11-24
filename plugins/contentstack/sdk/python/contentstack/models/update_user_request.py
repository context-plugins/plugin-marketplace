from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .user2_contentstack_content_management_users_api import (
    User2ContentstackContentManagementUsersApi,
    User2ContentstackContentManagementUsersApiDict,
)


class UpdateUserRequest(SdkBaseModel):
    """Fields to update on the user profile."""

    user: Optional[User2ContentstackContentManagementUsersApi] = UNSET
    """User profile fields to update."""


class UpdateUserRequestDict(TypedDict):
    user: NotRequired[User2ContentstackContentManagementUsersApiDict]
