from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RetryWith(SdkBaseModel):
    """Merge into the original request body to trigger the fallback."""

    ai_fallback: Optional[bool] = UNSET


class RetryWithDict(TypedDict):
    ai_fallback: NotRequired[bool]
