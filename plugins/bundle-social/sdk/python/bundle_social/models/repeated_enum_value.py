from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RepeatedEnumValue(SdkBaseModel):
    set_values: Optional[list[str]] = Field(default=UNSET, alias="setValues")


class RepeatedEnumValueDict(TypedDict):
    set_values: NotRequired[list[str]]
