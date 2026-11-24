from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .repeated_enum_value import RepeatedEnumValue, RepeatedEnumValueDict
from .uri_value import UriValue, UriValueDict


class Attribute(SdkBaseModel):
    name: str
    values: Optional[list[Any]] = UNSET
    repeated_enum_value: Optional[RepeatedEnumValue] = Field(default=UNSET, alias="repeatedEnumValue")
    uri_values: Optional[list[UriValue]] = Field(default=UNSET, alias="uriValues")


class AttributeDict(TypedDict):
    name: str
    values: NotRequired[list[Any]]
    repeated_enum_value: NotRequired[RepeatedEnumValueDict]
    uri_values: NotRequired[list[UriValueDict]]
