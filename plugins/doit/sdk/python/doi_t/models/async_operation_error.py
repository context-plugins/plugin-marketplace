from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AsyncOperationError(SdkBaseModel):
    """Error describing why an async operation failed. Present only when status is "failed"."""

    title: str
    code: str
    """Stable machine-readable error code."""

    status: int
    detail: Optional[str] = UNSET


class AsyncOperationErrorDict(TypedDict):
    title: str
    code: str
    status: int
    detail: NotRequired[str]
