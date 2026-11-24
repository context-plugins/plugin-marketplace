from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event_sources_config import EventSourcesConfig, EventSourcesConfigDict


class DescribeEventSourcesConfigResponse(SdkBaseModel):
    event_sources: Optional[EventSourcesConfig] = Field(default=UNSET, alias="EventSources")


class DescribeEventSourcesConfigResponseDict(TypedDict):
    event_sources: NotRequired[EventSourcesConfigDict]
