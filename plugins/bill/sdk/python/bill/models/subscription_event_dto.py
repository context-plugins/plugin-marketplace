from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SubscriptionEventDto(SdkBaseModel):
    """Subscription events information."""

    type_: str = Field(alias="type")
    """Event type"""

    version: str
    """Event type version"""


class SubscriptionEventDtoDict(TypedDict):
    type_: str
    version: str
