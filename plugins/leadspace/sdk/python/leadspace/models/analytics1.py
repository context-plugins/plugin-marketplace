from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Analytics1(SdkBaseModel):
    installed_base_technologies: Optional[list[str]] = UNSET
    web_site_technologies: Optional[list[str]] = UNSET
    company_technologies_categories: Optional[list[str]] = UNSET
    custom_technologies_categories: Optional[list[str]] = Field(default=UNSET, alias="customTechnologiesCategories")


class Analytics1Dict(TypedDict):
    installed_base_technologies: NotRequired[list[str]]
    web_site_technologies: NotRequired[list[str]]
    company_technologies_categories: NotRequired[list[str]]
    custom_technologies_categories: NotRequired[list[str]]
