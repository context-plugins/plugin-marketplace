from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidInputException(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")


class InvalidInputExceptionDict(TypedDict):
    message: NotRequired[str]
