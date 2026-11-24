from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.attribute_amazon_lex_model_building_v2_testsets_api import AttributeAmazonLexModelBuildingV2TestsetsApiOrStr
from .enums.order_amazon_lex_model_building_v2_testexecutions_api import (
    OrderAmazonLexModelBuildingV2TestexecutionsApiOrStr,
)


class TestSetSortBy(SdkBaseModel):
    attribute: AttributeAmazonLexModelBuildingV2TestsetsApiOrStr
    """Specifies whether to sort the test sets by name or by the time they were last updated."""

    order: OrderAmazonLexModelBuildingV2TestexecutionsApiOrStr
    """Specifies whether to sort in ascending or descending order."""


class TestSetSortByDict(TypedDict):
    attribute: AttributeAmazonLexModelBuildingV2TestsetsApiOrStr
    order: OrderAmazonLexModelBuildingV2TestexecutionsApiOrStr
