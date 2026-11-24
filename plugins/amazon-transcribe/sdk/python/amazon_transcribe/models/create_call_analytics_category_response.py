from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .category_properties import CategoryProperties, CategoryPropertiesDict


class CreateCallAnalyticsCategoryResponse(SdkBaseModel):
    category_properties: Optional[CategoryProperties] = Field(default=UNSET, alias="CategoryProperties")


class CreateCallAnalyticsCategoryResponseDict(TypedDict):
    category_properties: NotRequired[CategoryPropertiesDict]
