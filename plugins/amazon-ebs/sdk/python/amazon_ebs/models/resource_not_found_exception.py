from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason2 import Reason2OrStr


class ResourceNotFoundException(SdkBaseModel):
    message: Optional[str] = Field(default=UNSET, alias="Message")
    reason: Optional[Reason2OrStr] = Field(default=UNSET, alias="Reason")
    """The reason for the exception."""


class ResourceNotFoundExceptionDict(TypedDict):
    message: NotRequired[str]
    reason: NotRequired[Reason2OrStr]
