from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .expiry_events_configuration import ExpiryEventsConfiguration, ExpiryEventsConfigurationDict


class GetAccountConfigurationResponse(SdkBaseModel):
    expiry_events: Optional[ExpiryEventsConfiguration] = Field(default=UNSET, alias="ExpiryEvents")


class GetAccountConfigurationResponseDict(TypedDict):
    expiry_events: NotRequired[ExpiryEventsConfigurationDict]
