from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .card_account_defaults import CardAccountDefaults, CardAccountDefaultsDict
from .card_account_expiration_connect_events_subscriptions_api import (
    CardAccountExpirationConnectEventsSubscriptionsApi,
    CardAccountExpirationConnectEventsSubscriptionsApiDict,
)


class CardAccountPayloadV1(SdkBaseModel):
    """Card Account transformed payload."""

    id: Optional[str] = UNSET
    archived: Optional[bool] = UNSET
    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    name_on_account: Optional[str] = Field(default=UNSET, alias="nameOnAccount")
    brand: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    status: Optional[str] = UNSET
    last4: Optional[str] = UNSET
    expiration: Optional[CardAccountExpirationConnectEventsSubscriptionsApi] = UNSET
    """Card expiration month and year."""

    default: Optional[CardAccountDefaults] = UNSET
    """Card payment default values for BILL operations."""


class CardAccountPayloadV1Dict(TypedDict):
    id: NotRequired[str]
    archived: NotRequired[bool]
    created_time: NotRequired[RFC3339DateTime]
    created_by: NotRequired[str]
    updated_time: NotRequired[RFC3339DateTime]
    name_on_account: NotRequired[str]
    brand: NotRequired[str]
    type_: NotRequired[str]
    status: NotRequired[str]
    last4: NotRequired[str]
    expiration: NotRequired[CardAccountExpirationConnectEventsSubscriptionsApiDict]
    default: NotRequired[CardAccountDefaultsDict]
