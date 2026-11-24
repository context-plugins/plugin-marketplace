from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.delivery_kind import DeliveryKindOrStr


class ApiV1ManageFormsDeliveriesRetryRequest(SdkBaseModel):
    """Exactly one target. deliveryKind and deliveryId are required together."""

    response_ids: Optional[list[str]] = Field(default=UNSET, alias="responseIds")
    destination_key: Optional[str] = Field(default=UNSET, alias="destinationKey")
    """A ``key`` from the delivery-health destinations list."""

    delivery_kind: Optional[DeliveryKindOrStr] = Field(default=UNSET, alias="deliveryKind")
    delivery_id: Optional[str] = Field(default=UNSET, alias="deliveryId")
    all: Optional[bool] = UNSET


class ApiV1ManageFormsDeliveriesRetryRequestDict(TypedDict):
    response_ids: NotRequired[list[str]]
    destination_key: NotRequired[str]
    delivery_kind: NotRequired[DeliveryKindOrStr]
    delivery_id: NotRequired[str]
    all: NotRequired[bool]
