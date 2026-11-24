from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteCallAnalyticsCategoryRequest(SdkBaseModel):
    category_name: str = Field(alias="CategoryName")
    """The name of the Call Analytics category you want to delete. Category names are case sensitive."""


class DeleteCallAnalyticsCategoryRequestDict(TypedDict):
    category_name: str
