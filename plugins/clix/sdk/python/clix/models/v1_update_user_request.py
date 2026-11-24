from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1UpdateUserRequest(SdkBaseModel):
    """Request to update a user"""

    properties: Optional[Any] = UNSET
    """User properties to update as key-value pairs"""


class V1UpdateUserRequestDict(TypedDict):
    properties: NotRequired[Any]
