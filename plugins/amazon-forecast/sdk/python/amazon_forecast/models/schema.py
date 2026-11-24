from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .schema_attribute import SchemaAttribute, SchemaAttributeDict


class Schema(SdkBaseModel):
    attributes: Optional[list[SchemaAttribute]] = Field(default=UNSET, alias="Attributes")
    """An array of attributes specifying the name and type of each field in a dataset."""


class SchemaDict(TypedDict):
    attributes: NotRequired[list[SchemaAttributeDict]]
