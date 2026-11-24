from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelsLexSlotDefaultValue(SdkBaseModel):
    default_value: str = Field(alias="defaultValue")
    """The default value for the slot. You can specify one of the following: #context-name.slot-name - The slot value
    "slot-name" in the context "context-name." {attribute} - The slot value of the session attribute "attribute."
    'value' - The discrete value "value."
    """


class ModelsLexSlotDefaultValueDict(TypedDict):
    default_value: str
