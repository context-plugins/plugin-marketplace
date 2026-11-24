from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .api_key_event import ApiKeyEvent, ApiKeyEventDict


class ApiKeyEventList(SdkBaseModel):
    events: list[ApiKeyEvent]


class ApiKeyEventListDict(TypedDict):
    events: list[ApiKeyEventDict]
