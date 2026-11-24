from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiKeyValidityOutOfBoundsExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class ApiKeyValidityOutOfBoundsExceptionErrorDict(TypedDict):
    message: NotRequired[str]
