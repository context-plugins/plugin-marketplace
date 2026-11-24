from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class User2ContentstackContentManagementUsersApi(SdkBaseModel):
    """User profile fields to update."""

    first_name: Optional[str] = UNSET
    """Updated first name."""

    last_name: Optional[str] = UNSET
    """Updated last name."""


class User2ContentstackContentManagementUsersApiDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
