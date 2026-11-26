from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EventCatalogDto(SdkBaseModel):
    """Event catalog information."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Event type"""

    versions: Optional[list[str]] = UNSET
    """Available versions for the event type"""


class EventCatalogDtoDict(TypedDict):
    type_: NotRequired[str]
    versions: NotRequired[list[str]]
