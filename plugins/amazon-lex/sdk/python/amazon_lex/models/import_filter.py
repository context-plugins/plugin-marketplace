from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.operator_amazon_lex_model_building_v2_imports_api import OperatorAmazonLexModelBuildingV2ImportsApiOrStr


class ImportFilter(SdkBaseModel):
    name: Literal["ImportResourceType"] = "ImportResourceType"
    """The name of the field to use for filtering."""

    values: list[str]
    """The values to use to filter the response. The values must be Bot, BotLocale, or CustomVocabulary."""

    operator: OperatorAmazonLexModelBuildingV2ImportsApiOrStr
    """The operator to use for the filter. Specify EQ when the ListImports operation should return only resource types
    that equal the specified value. Specify CO when the ListImports operation should return resource types that contain
    the specified value."""


class ImportFilterDict(TypedDict):
    name: Literal["ImportResourceType"]
    values: list[str]
    operator: OperatorAmazonLexModelBuildingV2ImportsApiOrStr
