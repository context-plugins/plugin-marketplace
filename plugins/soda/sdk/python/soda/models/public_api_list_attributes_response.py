from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .attribute_content_dto import AttributeContentDto, AttributeContentDtoDict


class PublicApiListAttributesResponse(SdkBaseModel):
    content: list[AttributeContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiListAttributesResponseDict(TypedDict):
    content: list[AttributeContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
