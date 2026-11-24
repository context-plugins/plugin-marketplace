from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .expiry_events_configuration import ExpiryEventsConfiguration, ExpiryEventsConfigurationDict


class PutAccountConfigurationRequest(SdkBaseModel):
    expiry_events: Optional[ExpiryEventsConfiguration] = Field(default=UNSET, alias="ExpiryEvents")
    idempotency_token: str = Field(alias="IdempotencyToken")
    """Customer-chosen string used to distinguish between calls to PutAccountConfiguration. Idempotency tokens time out
    after one hour. If you call PutAccountConfiguration multiple times with the same unexpired idempotency token, ACM
    treats it as the same request and returns the original result. If you change the idempotency token for each call,
    ACM treats each call as a new request."""


class PutAccountConfigurationRequestDict(TypedDict):
    expiry_events: NotRequired[ExpiryEventsConfigurationDict]
    idempotency_token: str
