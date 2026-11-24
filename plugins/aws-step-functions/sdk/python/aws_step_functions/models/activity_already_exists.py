from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActivityAlreadyExists(SdkBaseModel):
    message: Optional[str] = UNSET


class ActivityAlreadyExistsDict(TypedDict):
    message: NotRequired[str]
