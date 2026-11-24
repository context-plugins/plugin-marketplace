from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1WholesaleNumbersDeliveryResponse(SdkBaseModel):
    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """Plus sign followed by 7–15 digits."""

    deliver_to: Optional[str] = Field(default=UNSET, alias="deliverTo")


class ApiV1WholesaleNumbersDeliveryResponseDict(TypedDict):
    phone_number: NotRequired[str]
    deliver_to: NotRequired[str]
