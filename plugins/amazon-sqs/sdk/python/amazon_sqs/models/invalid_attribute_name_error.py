from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidAttributeNameError(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidAttributeNameErrorDict(TypedDict):
    message: NotRequired[str]
