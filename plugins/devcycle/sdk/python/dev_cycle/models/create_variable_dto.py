from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type4 import Type4OrStr
from .variable_validation_entity import VariableValidationEntity, VariableValidationEntityDict


class CreateVariableDto(SdkBaseModel):
    name: Optional[str] = UNSET
    """Variable name"""

    description: Optional[str] = UNSET
    """A description of the Variable"""

    key: str
    """Unique Variable identifier, can be used in the SDK / API to reference by key rather then ID. Must only contain
    lower-case characters and ``_``, ``-`` or ``.``."""

    feature: Optional[str] = Field(default=UNSET, alias="_feature")
    """The ID of the Feature this Variable belongs to"""

    type_: Type4OrStr = Field(alias="type")
    """The type of Variable. Must be one of [String | Boolean | Number | JSON]"""

    validation_schema: Optional[VariableValidationEntity] = Field(default=UNSET, alias="validationSchema")
    """Validation schema for variable values"""

    tags: Optional[list[str]] = UNSET
    """Feature tags."""


class CreateVariableDtoDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    key: str
    feature: NotRequired[str]
    type_: Type4OrStr
    validation_schema: NotRequired[VariableValidationEntityDict]
    tags: NotRequired[list[str]]
