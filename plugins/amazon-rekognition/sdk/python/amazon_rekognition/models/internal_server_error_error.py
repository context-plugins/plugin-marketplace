from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InternalServerErrorError(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")
    code: Optional[str] = Field(default=UNSET, alias="Code")
    logref: Optional[str] = Field(default=UNSET, alias="Logref")
    """A universally unique identifier (UUID) for the request."""


class InternalServerErrorErrorDict(TypedDict):
    message: NotRequired[str]
    code: NotRequired[str]
    logref: NotRequired[str]
