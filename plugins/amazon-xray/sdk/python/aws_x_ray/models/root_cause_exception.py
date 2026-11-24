from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RootCauseException(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the exception."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """The message of the exception."""


class RootCauseExceptionDict(TypedDict):
    name: NotRequired[str]
    message: NotRequired[str]
