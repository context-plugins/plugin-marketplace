from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1CreateUserRequest(SdkBaseModel):
    """Request to create a new user"""

    project_user_id: str
    """Unique identifier for the user in your project"""

    properties: Optional[Any] = UNSET
    """User properties as key-value pairs"""


class V1CreateUserRequestDict(TypedDict):
    project_user_id: str
    properties: NotRequired[Any]
