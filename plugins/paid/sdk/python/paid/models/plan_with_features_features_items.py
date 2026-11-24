from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlanWithFeaturesFeaturesItems(SdkBaseModel):
    product_name: str = Field(alias="productName")
    """The name of the product"""

    attribute_name: str = Field(alias="attributeName")
    """The name of the product attribute"""

    pricing: dict[str, Any]
    """The pricing configuration for this feature"""


class PlanWithFeaturesFeaturesItemsDict(TypedDict):
    product_name: str
    attribute_name: str
    pricing: dict[str, Any]
