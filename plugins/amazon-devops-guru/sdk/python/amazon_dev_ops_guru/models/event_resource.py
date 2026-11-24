from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EventResource(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The type of resource that emitted an event."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the resource that emitted an event."""

    arn: Optional[str] = Field(default=UNSET, alias="Arn")
    """The Amazon Resource Name (ARN) of the resource that emitted an event."""


class EventResourceDict(TypedDict):
    type_: NotRequired[str]
    name: NotRequired[str]
    arn: NotRequired[str]
