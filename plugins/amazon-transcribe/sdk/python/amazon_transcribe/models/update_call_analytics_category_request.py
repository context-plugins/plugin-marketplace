from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.input_type2 import InputType2OrStr
from .rule import Rule, RuleDict


class UpdateCallAnalyticsCategoryRequest(SdkBaseModel):
    category_name: str = Field(alias="CategoryName")
    """The name of the Call Analytics category you want to update. Category names are case sensitive."""

    rules: list[Rule] = Field(alias="Rules")
    """The rules used for the updated Call Analytics category. The rules you provide in this field replace the ones that
    are currently being used in the specified category."""

    input_type: Optional[InputType2OrStr] = Field(default=UNSET, alias="InputType")
    """Choose whether you want to update a real-time or a post-call category. The input type you specify must match the
    input type specified when the category was created. For example, if you created a category with the POST_CALL input
    type, you must use POST_CALL as the input type when updating this category."""


class UpdateCallAnalyticsCategoryRequestDict(TypedDict):
    category_name: str
    rules: list[RuleDict]
    input_type: NotRequired[InputType2OrStr]
