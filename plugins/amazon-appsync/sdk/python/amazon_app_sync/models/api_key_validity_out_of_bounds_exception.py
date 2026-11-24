from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiKeyValidityOutOfBoundsException(SdkBaseModel):
    message: Optional[str] = UNSET


class ApiKeyValidityOutOfBoundsExceptionDict(TypedDict):
    message: NotRequired[str]
