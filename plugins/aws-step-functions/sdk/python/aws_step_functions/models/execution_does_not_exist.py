from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExecutionDoesNotExist(SdkBaseModel):
    message: Optional[str] = UNSET


class ExecutionDoesNotExistDict(TypedDict):
    message: NotRequired[str]
