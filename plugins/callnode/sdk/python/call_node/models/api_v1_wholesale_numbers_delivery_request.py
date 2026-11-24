from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1WholesaleNumbersDeliveryRequest(SdkBaseModel):
    deliver_to: str = Field(alias="deliverTo")


class ApiV1WholesaleNumbersDeliveryRequestDict(TypedDict):
    deliver_to: str
