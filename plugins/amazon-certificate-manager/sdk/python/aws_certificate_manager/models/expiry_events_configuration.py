from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExpiryEventsConfiguration(SdkBaseModel):
    days_before_expiry: Optional[int] = Field(default=UNSET, alias="DaysBeforeExpiry")
    """Specifies the number of days prior to certificate expiration when ACM starts generating EventBridge events. ACM
    sends one event per day per certificate until the certificate expires. By default, accounts receive events starting
    45 days before certificate expiration."""


class ExpiryEventsConfigurationDict(TypedDict):
    days_before_expiry: NotRequired[int]
