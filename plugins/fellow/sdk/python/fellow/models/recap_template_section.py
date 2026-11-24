from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.api_recap_template_section_type import ApiRecapTemplateSectionTypeOrStr
from .unions.content import Content, ContentDict


class RecapTemplateSection(SdkBaseModel):
    title: str
    type_: ApiRecapTemplateSectionTypeOrStr = Field(alias="type")
    content: Content


class RecapTemplateSectionDict(TypedDict):
    title: str
    type_: ApiRecapTemplateSectionTypeOrStr
    content: ContentDict
