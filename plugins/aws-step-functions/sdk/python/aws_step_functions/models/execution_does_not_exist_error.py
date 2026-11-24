from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExecutionDoesNotExistError(SdkBaseModel):
    message: Optional[str] = UNSET


class ExecutionDoesNotExistErrorDict(TypedDict):
    message: NotRequired[str]
