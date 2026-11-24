from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AccessDeniedException(SdkBaseModel):
    message: str = Field(alias="Message")


class AccessDeniedExceptionDict(TypedDict):
    message: str
