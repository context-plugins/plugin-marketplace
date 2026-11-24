from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.input_type1 import InputType1OrStr
from .rule import Rule, RuleDict
from .tag_model import TagModel, TagModelDict


class CreateCallAnalyticsCategoryRequest(SdkBaseModel):
    category_name: str = Field(alias="CategoryName")
    """A unique name, chosen by you, for your Call Analytics category. It's helpful to use a detailed naming system that
    will make sense to you in the future. For example, it's better to use sentiment-positive-last30seconds for a
    category over a generic name like test-category. Category names are case sensitive."""

    rules: list[Rule] = Field(alias="Rules")
    """Rules define a Call Analytics category. When creating a new category, you must create between 1 and 20 rules for
    that category. For each rule, you specify a filter you want applied to the attributes of a call. For example, you
    can choose a sentiment filter that detects if a customer's sentiment was positive during the last 30 seconds of the
    call."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Adds one or more custom tags, each in the form of a key:value pair, to a new call analytics category at the time
    you start this new job. To learn more about using tags with Amazon Transcribe, refer to Tagging resources."""

    input_type: Optional[InputType1OrStr] = Field(default=UNSET, alias="InputType")
    """Choose whether you want to create a real-time or a post-call category for your Call Analytics transcription.
    Specifying POST_CALL assigns your category to post-call transcriptions; categories with this input type cannot be
    applied to streaming (real-time) transcriptions. Specifying REAL_TIME assigns your category to streaming
    transcriptions; categories with this input type cannot be applied to post-call transcriptions. If you do not include
    InputType, your category is created as a post-call category by default."""


class CreateCallAnalyticsCategoryRequestDict(TypedDict):
    category_name: str
    rules: list[RuleDict]
    tags: NotRequired[list[TagModelDict]]
    input_type: NotRequired[InputType1OrStr]
