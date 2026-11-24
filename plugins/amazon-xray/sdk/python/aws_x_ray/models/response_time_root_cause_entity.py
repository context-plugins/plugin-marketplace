from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResponseTimeRootCauseEntity(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the entity."""

    coverage: Optional[float] = Field(default=UNSET, alias="Coverage")
    """The type and messages of the exceptions."""

    remote: Optional[bool] = Field(default=UNSET, alias="Remote")
    """A flag that denotes a remote subsegment."""


class ResponseTimeRootCauseEntityDict(TypedDict):
    name: NotRequired[str]
    coverage: NotRequired[float]
    remote: NotRequired[bool]
