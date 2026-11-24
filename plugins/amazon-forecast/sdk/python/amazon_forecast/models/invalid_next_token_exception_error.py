from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidNextTokenExceptionError(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")


class InvalidNextTokenExceptionErrorDict(TypedDict):
    message: NotRequired[str]
