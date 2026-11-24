from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event_config import EventConfig, EventConfigDict


class V2ApisRequest1(SdkBaseModel):
    name: str
    """The name of the Api."""

    owner_contact: Optional[str] = Field(default=UNSET, alias="ownerContact")
    """The owner contact information for the Api."""

    event_config: EventConfig = Field(alias="eventConfig")


class V2ApisRequest1Dict(TypedDict):
    name: str
    owner_contact: NotRequired[str]
    event_config: EventConfigDict
