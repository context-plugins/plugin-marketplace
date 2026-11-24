from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Unauthenticated(SdkBaseModel):
    message: Optional[str] = UNSET


class UnauthenticatedDict(TypedDict):
    message: NotRequired[str]
