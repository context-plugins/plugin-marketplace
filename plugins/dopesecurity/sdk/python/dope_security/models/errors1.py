from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Errors1(SdkBaseModel):
    message: str
    """Error message"""

    details: Optional[Any] = UNSET
    """Optional additional details regarding the error"""


class Errors1Dict(TypedDict):
    message: str
    details: NotRequired[Any]
