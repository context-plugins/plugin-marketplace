from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .category_properties import CategoryProperties, CategoryPropertiesDict


class GetCallAnalyticsCategoryResponse(SdkBaseModel):
    category_properties: Optional[CategoryProperties] = Field(default=UNSET, alias="CategoryProperties")


class GetCallAnalyticsCategoryResponseDict(TypedDict):
    category_properties: NotRequired[CategoryPropertiesDict]
