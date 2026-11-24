from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr


class FailureDetails(SdkBaseModel):
    reason: Optional[ReasonOrStr] = Field(default=UNSET, alias="Reason")
    """The reason for the failure."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A message describing the failure."""


class FailureDetailsDict(TypedDict):
    reason: NotRequired[ReasonOrStr]
    message: NotRequired[str]
