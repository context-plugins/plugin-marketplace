from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.order_amazon_lex_model_building_v2_builtins_api import OrderAmazonLexModelBuildingV2BuiltinsApiOrStr


class BuiltInIntentSortBy(SdkBaseModel):
    attribute: Literal["IntentSignature"] = "IntentSignature"
    """The attribute to use to sort the list of built-in intents."""

    order: OrderAmazonLexModelBuildingV2BuiltinsApiOrStr
    """The order to sort the list. You can specify ascending or descending order."""


class BuiltInIntentSortByDict(TypedDict):
    attribute: Literal["IntentSignature"]
    order: OrderAmazonLexModelBuildingV2BuiltinsApiOrStr
