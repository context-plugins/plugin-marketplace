from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error1(SdkBaseModel):
    message: Optional[str] = UNSET
    """Human-readable error message"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Error type classification"""

    code: Optional[int] = UNSET
    """Numeric error code"""

    error_subcode: Optional[int] = UNSET
    """Numeric error subcode for more specific categorization"""

    fbtrace_id: Optional[str] = UNSET
    """Unique trace ID for debugging with Facebook support"""


class Error1Dict(TypedDict):
    message: NotRequired[str]
    type_: NotRequired[str]
    code: NotRequired[int]
    error_subcode: NotRequired[int]
    fbtrace_id: NotRequired[str]
