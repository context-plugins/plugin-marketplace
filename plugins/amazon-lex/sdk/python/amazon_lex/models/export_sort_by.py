from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.order_amazon_lex_model_building_v2_exports_api import OrderAmazonLexModelBuildingV2ExportsApiOrStr


class ExportSortBy(SdkBaseModel):
    attribute: Literal["LastUpdatedDateTime"] = "LastUpdatedDateTime"
    """The export field to use for sorting."""

    order: OrderAmazonLexModelBuildingV2ExportsApiOrStr
    """The order to sort the list."""


class ExportSortByDict(TypedDict):
    attribute: Literal["LastUpdatedDateTime"]
    order: OrderAmazonLexModelBuildingV2ExportsApiOrStr
