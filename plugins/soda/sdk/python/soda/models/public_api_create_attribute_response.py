from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .attribute_content_dto import AttributeContentDto, AttributeContentDtoDict


class PublicApiCreateAttributeResponse(SdkBaseModel):
    attribute: AttributeContentDto


class PublicApiCreateAttributeResponseDict(TypedDict):
    attribute: AttributeContentDtoDict
