from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponseErrorUiPathAutomationHubAppInventoryApi(SdkBaseModel):
    """Standard error response body"""

    message: Optional[str] = UNSET
    """Human-readable error message"""

    code: Optional[int] = UNSET
    """Numeric error code"""


class ErrorResponseErrorUiPathAutomationHubAppInventoryApiDict(TypedDict):
    message: NotRequired[str]
    code: NotRequired[int]
