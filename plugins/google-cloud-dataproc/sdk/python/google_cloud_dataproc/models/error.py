from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    code: Optional[int] = UNSET
    message: Optional[str] = UNSET
    status: Optional[str] = UNSET
    details: Optional[list[Any]] = UNSET


class ErrorDict(TypedDict):
    code: NotRequired[int]
    message: NotRequired[str]
    status: NotRequired[str]
    details: NotRequired[list[Any]]
