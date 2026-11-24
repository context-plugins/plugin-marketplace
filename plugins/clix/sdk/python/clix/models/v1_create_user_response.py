from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1CreateUserResponse(SdkBaseModel):
    """Response containing the created user properties"""

    properties: Optional[Any] = UNSET
    """User properties as key-value pairs"""


class V1CreateUserResponseDict(TypedDict):
    properties: NotRequired[Any]
