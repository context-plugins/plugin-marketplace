from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.order1_amazon_lex_model_building_v2_builtins_api import Order1AmazonLexModelBuildingV2BuiltinsApiOrStr


class BuiltInSlotTypeSortBy(SdkBaseModel):
    attribute: Literal["SlotTypeSignature"] = "SlotTypeSignature"
    """The attribute to use to sort the list of built-in intents."""

    order: Order1AmazonLexModelBuildingV2BuiltinsApiOrStr
    """The order to sort the list. You can choose ascending or descending."""


class BuiltInSlotTypeSortByDict(TypedDict):
    attribute: Literal["SlotTypeSignature"]
    order: Order1AmazonLexModelBuildingV2BuiltinsApiOrStr
