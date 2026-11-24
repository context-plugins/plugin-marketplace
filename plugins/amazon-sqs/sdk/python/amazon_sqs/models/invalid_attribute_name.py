from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidAttributeName(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidAttributeNameDict(TypedDict):
    message: NotRequired[str]
