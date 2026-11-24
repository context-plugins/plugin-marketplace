from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceNotFoundException(SdkBaseModel):
    message: Optional[str] = UNSET


class ResourceNotFoundExceptionDict(TypedDict):
    message: NotRequired[str]
