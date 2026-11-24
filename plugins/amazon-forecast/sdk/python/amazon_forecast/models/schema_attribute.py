from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.attribute_type import AttributeTypeOrStr


class SchemaAttribute(SdkBaseModel):
    attribute_name: Optional[str] = Field(default=UNSET, alias="AttributeName")
    """The name of the dataset field."""

    attribute_type: Optional[AttributeTypeOrStr] = Field(default=UNSET, alias="AttributeType")
    """The data type of the field. For a related time series dataset, other than date, item_id, and forecast dimensions
    attributes, all attributes should be of numerical type (integer/float)."""


class SchemaAttributeDict(TypedDict):
    attribute_name: NotRequired[str]
    attribute_type: NotRequired[AttributeTypeOrStr]
