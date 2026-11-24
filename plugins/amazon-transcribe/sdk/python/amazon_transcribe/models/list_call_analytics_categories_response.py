from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .category_properties import CategoryProperties, CategoryPropertiesDict


class ListCallAnalyticsCategoriesResponse(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If NextToken is present in your response, it indicates that not all results are displayed. To view the next set
    of results, copy the string associated with the NextToken parameter in your results output, then run your request
    again including NextToken with the value of the copied string. Repeat as needed to view all your results."""

    categories: Optional[list[CategoryProperties]] = Field(default=UNSET, alias="Categories")
    """Provides detailed information about your Call Analytics categories, including all the rules associated with each
    category."""


class ListCallAnalyticsCategoriesResponseDict(TypedDict):
    next_token: NotRequired[str]
    categories: NotRequired[list[CategoryPropertiesDict]]
