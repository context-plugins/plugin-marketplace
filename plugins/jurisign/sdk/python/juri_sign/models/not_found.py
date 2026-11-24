from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NotFound(SdkBaseModel):
    message: Optional[str] = UNSET


class NotFoundDict(TypedDict):
    message: NotRequired[str]
