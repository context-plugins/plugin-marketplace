from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.operator_amazon_lex_model_building_v2_exports_api import OperatorAmazonLexModelBuildingV2ExportsApiOrStr


class ExportFilter(SdkBaseModel):
    name: Literal["ExportResourceType"] = "ExportResourceType"
    """The name of the field to use for filtering."""

    values: list[str]
    """The values to use to filter the response. The values must be Bot, BotLocale, or CustomVocabulary."""

    operator: OperatorAmazonLexModelBuildingV2ExportsApiOrStr
    """The operator to use for the filter. Specify EQ when the ListExports operation should return only resource types
    that equal the specified value. Specify CO when the ListExports operation should return resource types that contain
    the specified value."""


class ExportFilterDict(TypedDict):
    name: Literal["ExportResourceType"]
    values: list[str]
    operator: OperatorAmazonLexModelBuildingV2ExportsApiOrStr
