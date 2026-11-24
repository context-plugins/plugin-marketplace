from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_type_amazon_lex_model_building_v2_versions_api import (
    ContentTypeAmazonLexModelBuildingV2VersionsApiOrStr,
)


class ModelsLexMessageAmazonLexModelBuildingV2VersionsApi(SdkBaseModel):
    content_type: ContentTypeAmazonLexModelBuildingV2VersionsApiOrStr = Field(alias="contentType")
    """The content type of the message string."""

    content: str
    """The text of the message."""

    group_number: Optional[int] = Field(default=UNSET, alias="groupNumber")
    """Identifies the message group that the message belongs to. When a group is assigned to a message, Amazon Lex
    returns one message from each group in the response."""


class ModelsLexMessageAmazonLexModelBuildingV2VersionsApiDict(TypedDict):
    content_type: ContentTypeAmazonLexModelBuildingV2VersionsApiOrStr
    content: str
    group_number: NotRequired[int]
