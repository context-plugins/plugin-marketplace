from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResourceUnavailableExceptionError(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")


class ResourceUnavailableExceptionErrorDict(TypedDict):
    message: NotRequired[str]
