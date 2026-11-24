from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .find_all_schema1 import FindAllSchema1, FindAllSchema1Dict


class FindAllSchemaUpdatedEvent(SdkBaseModel):
    """Event containing full snapshot of FindAll run state."""

    type_: Literal["findall.schema.updated"] = Field(default="findall.schema.updated", alias="type")
    """Event type; always 'findall.schema.updated'."""

    timestamp: RFC3339DateTime
    """Timestamp of the event."""

    event_id: str
    """Unique event identifier for the event."""

    data: FindAllSchema1
    """Updated FindAll schema."""


class FindAllSchemaUpdatedEventDict(TypedDict):
    type_: Literal["findall.schema.updated"]
    timestamp: RFC3339DateTime
    event_id: str
    data: FindAllSchema1Dict
