from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SimplifiedErrorError(SdkBaseModel):
    message: Optional[str] = UNSET
    description: Optional[str] = UNSET
    resource: Optional[str] = UNSET


class SimplifiedErrorErrorDict(TypedDict):
    message: NotRequired[str]
    description: NotRequired[str]
    resource: NotRequired[str]
