from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Event(SdkBaseModel):
    type_: str = Field(alias="type")
    """Custom event type"""

    target: Optional[str] = UNSET
    """Custom event target / subject of event. Contextual to event type"""

    date: Optional[float] = UNSET
    """Unix epoch time the event occurred according to client"""

    value: Optional[float] = UNSET
    """Value for numerical events. Contextual to event type"""

    meta_data: Optional[Any] = Field(default=UNSET, alias="metaData")
    """Extra JSON metadata for event. Contextual to event type"""


class EventDict(TypedDict):
    type_: str
    target: NotRequired[str]
    date: NotRequired[float]
    value: NotRequired[float]
    meta_data: NotRequired[Any]
