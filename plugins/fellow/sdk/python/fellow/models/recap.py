from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .recap_template_section import RecapTemplateSection, RecapTemplateSectionDict


class Recap(SdkBaseModel):
    id: str
    is_active: bool
    title: str
    template_creator: str
    sections: list[RecapTemplateSection]


class RecapDict(TypedDict):
    id: str
    is_active: bool
    title: str
    template_creator: str
    sections: list[RecapTemplateSectionDict]
