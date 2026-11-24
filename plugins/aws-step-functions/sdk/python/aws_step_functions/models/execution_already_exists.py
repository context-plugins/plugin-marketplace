from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExecutionAlreadyExists(SdkBaseModel):
    message: Optional[str] = UNSET


class ExecutionAlreadyExistsDict(TypedDict):
    message: NotRequired[str]
