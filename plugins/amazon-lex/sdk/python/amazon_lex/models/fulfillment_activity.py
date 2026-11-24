from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .code_hook import CodeHook, CodeHookDict
from .enums.type_amazon_lex_model_building_v2_versions_api import TypeAmazonLexModelBuildingV2VersionsApiOrStr


class FulfillmentActivity(SdkBaseModel):
    type_: TypeAmazonLexModelBuildingV2VersionsApiOrStr = Field(alias="type")
    """How the intent should be fulfilled, either by running a Lambda function or by returning the slot data to the
    client application."""

    code_hook: Optional[CodeHook] = Field(default=UNSET, alias="codeHook")


class FulfillmentActivityDict(TypedDict):
    type_: TypeAmazonLexModelBuildingV2VersionsApiOrStr
    code_hook: NotRequired[CodeHookDict]
