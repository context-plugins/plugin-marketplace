from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .allowed_value import AllowedValue, AllowedValueDict


class EnumSchema(SdkBaseModel):
    allowed_values: list[AllowedValue] = Field(alias="allowedValues")
    allow_additional_values: bool = Field(alias="allowAdditionalValues")


class EnumSchemaDict(TypedDict):
    allowed_values: list[AllowedValueDict]
    allow_additional_values: bool
