from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1UpdateUserResponse(SdkBaseModel):
    """Response containing the updated user properties"""

    properties: Optional[Any] = UNSET
    """User properties as key-value pairs"""


class V1UpdateUserResponseDict(TypedDict):
    properties: NotRequired[Any]
