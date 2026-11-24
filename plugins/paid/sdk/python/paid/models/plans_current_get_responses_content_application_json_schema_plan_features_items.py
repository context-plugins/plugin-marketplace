from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .plans_current_get_responses_content_application_json_schema_plan_features_items_usage import (
    PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsage,
    PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsageDict,
)


class PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItems(SdkBaseModel):
    product_name: str = Field(alias="productName")
    """The name of the product"""

    attribute_name: str = Field(alias="attributeName")
    """The name of the product attribute"""

    pricing: dict[str, Any]
    """The pricing configuration for this feature"""

    usage: PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsage
    """Current usage and limits for this feature"""


class PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsDict(TypedDict):
    product_name: str
    attribute_name: str
    pricing: dict[str, Any]
    usage: PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsageDict
