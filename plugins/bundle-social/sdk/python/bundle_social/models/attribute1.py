from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .repeated_enum_value import RepeatedEnumValue, RepeatedEnumValueDict
from .uri_value1 import UriValue1, UriValue1Dict


class Attribute1(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    values: Optional[list[Any]] = UNSET
    repeated_enum_value: Optional[RepeatedEnumValue] = Field(default=UNSET, alias="repeatedEnumValue")
    uri_values: Optional[list[UriValue1]] = Field(default=UNSET, alias="uriValues")


class Attribute1Dict(TypedDict):
    name: str
    values: NotRequired[list[Any]]
    repeated_enum_value: NotRequired[RepeatedEnumValueDict]
    uri_values: NotRequired[list[UriValue1Dict]]
