from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .models_lex_slot_default_value import ModelsLexSlotDefaultValue, ModelsLexSlotDefaultValueDict


class SlotDefaultValueSpec(SdkBaseModel):
    default_value_list: list[ModelsLexSlotDefaultValue] = Field(alias="defaultValueList")
    """The default values for a slot. You can specify more than one default. For example, you can specify a default
    value to use from a matching context variable, a session attribute, or a fixed value. The default value chosen is
    selected based on the order that you specify them in the list. For example, if you specify a context variable and a
    fixed value in that order, Amazon Lex uses the context variable if it is available, else it uses the fixed value."""


class SlotDefaultValueSpecDict(TypedDict):
    default_value_list: list[ModelsLexSlotDefaultValueDict]
