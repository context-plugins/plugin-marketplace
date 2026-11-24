from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.input_type import InputTypeOrStr
from .rule import Rule, RuleDict
from .tag_model import TagModel, TagModelDict


class CategoryProperties(SdkBaseModel):
    category_name: Optional[str] = Field(default=UNSET, alias="CategoryName")
    """The name of the Call Analytics category. Category names are case sensitive and must be unique within an Amazon
    Web Services account."""

    rules: Optional[list[Rule]] = Field(default=UNSET, alias="Rules")
    """The rules used to define a Call Analytics category. Each category can have between 1 and 20 rules."""

    create_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreateTime")
    """The date and time the specified Call Analytics category was created. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4,
    2022."""

    last_update_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastUpdateTime")
    """The date and time the specified Call Analytics category was last updated. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-05T12:45:32.691000-07:00 represents 12:45 PM UTC-7 on May 5,
    2022."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The tags, each in the form of a key:value pair, assigned to the specified call analytics category."""

    input_type: Optional[InputTypeOrStr] = Field(default=UNSET, alias="InputType")
    """The input type associated with the specified category. POST_CALL refers to a category that is applied to batch
    transcriptions; REAL_TIME refers to a category that is applied to streaming transcriptions."""


class CategoryPropertiesDict(TypedDict):
    category_name: NotRequired[str]
    rules: NotRequired[list[RuleDict]]
    create_time: NotRequired[RFC3339DateTime]
    last_update_time: NotRequired[RFC3339DateTime]
    tags: NotRequired[list[TagModelDict]]
    input_type: NotRequired[InputTypeOrStr]
