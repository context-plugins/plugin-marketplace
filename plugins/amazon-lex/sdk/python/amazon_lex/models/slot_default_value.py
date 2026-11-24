from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SlotDefaultValue(SdkBaseModel):
    default_value: str = Field(alias="defaultValue")
    """The default value to use when a user doesn't provide a value for a slot."""


class SlotDefaultValueDict(TypedDict):
    default_value: str
