from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InternalFailureException(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")


class InternalFailureExceptionDict(TypedDict):
    message: NotRequired[str]
