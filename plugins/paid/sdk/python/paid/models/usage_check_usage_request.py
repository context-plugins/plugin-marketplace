from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UsageCheckUsageRequest(SdkBaseModel):
    external_customer_id: str = Field(alias="externalCustomerId")
    """External customer ID"""

    external_product_id: str = Field(alias="externalProductId")
    """External product ID (the external ID of the product/agent)"""


class UsageCheckUsageRequestDict(TypedDict):
    external_customer_id: str
    external_product_id: str
