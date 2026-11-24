from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .root_cause_exception import RootCauseException, RootCauseExceptionDict


class ErrorRootCauseEntity(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the entity."""

    exceptions: Optional[list[RootCauseException]] = Field(default=UNSET, alias="Exceptions")
    """The types and messages of the exceptions."""

    remote: Optional[bool] = Field(default=UNSET, alias="Remote")
    """A flag that denotes a remote subsegment."""


class ErrorRootCauseEntityDict(TypedDict):
    name: NotRequired[str]
    exceptions: NotRequired[list[RootCauseExceptionDict]]
    remote: NotRequired[bool]
