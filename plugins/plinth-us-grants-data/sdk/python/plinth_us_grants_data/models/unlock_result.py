from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class UnlockResult(SdkBaseModel):
    code: int
    message: Optional[str] = UNSET
    calls_remaining: int
    expires_at: Optional[RFC3339DateTime] = UNSET
    when_spent: Optional[Any] = UNSET
    terms: Optional[Any] = UNSET


class UnlockResultDict(TypedDict):
    code: int
    message: NotRequired[str]
    calls_remaining: int
    expires_at: NotRequired[RFC3339DateTime]
    when_spent: NotRequired[Any]
    terms: NotRequired[Any]
