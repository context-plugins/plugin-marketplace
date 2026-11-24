from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.entity import EntityOrStr
from .enums.event_type import EventTypeOrStr


class DatumPlatformEventsApi(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type, always "event"."""

    id: str
    """Event identification."""

    created_date: str = Field(alias="createdDate")
    """Date the event was created."""

    entity: EntityOrStr
    """The entity associated with the event that has occurred"""

    event_type: EventTypeOrStr = Field(alias="eventType")
    """The type of event that has occurred"""

    user_id: str = Field(alias="userId")
    """The identifier of the user the event belongs to."""

    data_ref: str = Field(alias="dataRef")
    """URL to the data source the event occurred."""

    data: str
    """The data associated with the event that has been created."""

    links: Any


class DatumPlatformEventsApiDict(TypedDict):
    type_: str
    id: str
    created_date: str
    entity: EntityOrStr
    event_type: EventTypeOrStr
    user_id: str
    data_ref: str
    data: str
    links: Any
