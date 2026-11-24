from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .slot_default_value import SlotDefaultValue, SlotDefaultValueDict


class SlotDefaultValueSpecification(SdkBaseModel):
    default_value_list: list[SlotDefaultValue] = Field(alias="defaultValueList")
    """A list of default values. Amazon Lex chooses the default value to use in the order that they are presented in the
    list."""


class SlotDefaultValueSpecificationDict(TypedDict):
    default_value_list: list[SlotDefaultValueDict]
