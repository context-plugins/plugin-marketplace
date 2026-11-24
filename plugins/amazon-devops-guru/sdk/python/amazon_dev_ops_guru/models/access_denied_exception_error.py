from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AccessDeniedExceptionError(SdkBaseModel):
    message: str = Field(alias="Message")


class AccessDeniedExceptionErrorDict(TypedDict):
    message: str
