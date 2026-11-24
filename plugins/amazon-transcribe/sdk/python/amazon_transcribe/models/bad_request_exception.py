from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BadRequestException(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")


class BadRequestExceptionDict(TypedDict):
    message: NotRequired[str]
