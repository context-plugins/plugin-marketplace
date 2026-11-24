from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AddNotificationChannelResponse(SdkBaseModel):
    id: str = Field(alias="Id")
    """The ID of the added notification channel."""


class AddNotificationChannelResponseDict(TypedDict):
    id: str
