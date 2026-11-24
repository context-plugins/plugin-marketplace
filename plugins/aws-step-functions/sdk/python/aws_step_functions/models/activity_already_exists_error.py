from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActivityAlreadyExistsError(SdkBaseModel):
    message: Optional[str] = UNSET


class ActivityAlreadyExistsErrorDict(TypedDict):
    message: NotRequired[str]
