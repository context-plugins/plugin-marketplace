from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.attribute_amazon_lex_model_building_v2_testexecutions_api import (
    AttributeAmazonLexModelBuildingV2TestexecutionsApiOrStr,
)
from .enums.order_amazon_lex_model_building_v2_testexecutions_api import (
    OrderAmazonLexModelBuildingV2TestexecutionsApiOrStr,
)


class TestExecutionSortBy(SdkBaseModel):
    attribute: AttributeAmazonLexModelBuildingV2TestexecutionsApiOrStr
    """Specifies whether to sort the test set executions by the date and time at which the test sets were created."""

    order: OrderAmazonLexModelBuildingV2TestexecutionsApiOrStr
    """Specifies whether to sort in ascending or descending order."""


class TestExecutionSortByDict(TypedDict):
    attribute: AttributeAmazonLexModelBuildingV2TestexecutionsApiOrStr
    order: OrderAmazonLexModelBuildingV2TestexecutionsApiOrStr
