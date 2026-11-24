from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QueueDoesNotExistError(SdkBaseModel):
    message: Optional[str] = UNSET


class QueueDoesNotExistErrorDict(TypedDict):
    message: NotRequired[str]
