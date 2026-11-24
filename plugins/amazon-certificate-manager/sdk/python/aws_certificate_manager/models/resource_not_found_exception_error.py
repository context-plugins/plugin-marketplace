from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceNotFoundExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class ResourceNotFoundExceptionErrorDict(TypedDict):
    message: NotRequired[str]
