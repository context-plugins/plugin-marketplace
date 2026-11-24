from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EventBridgeDataSourceConfig(SdkBaseModel):
    event_bus_arn: str = Field(alias="eventBusArn")
    """The ARN of the event bus. For more information about event buses, see Amazon EventBridge event buses."""


class EventBridgeDataSourceConfigDict(TypedDict):
    event_bus_arn: str
