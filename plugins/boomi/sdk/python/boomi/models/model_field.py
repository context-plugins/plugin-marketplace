from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_boomi_data_hub_models_api import TypeBoomiDataHubModelsApiOrStr


class ModelField(SdkBaseModel):
    """A field definition within a data model schema."""

    name: str
    """Field name used as the identifier."""

    type_: TypeBoomiDataHubModelsApiOrStr = Field(alias="type")
    """Data type of the field."""

    required: Optional[bool] = UNSET
    """Whether this field is required."""

    unique: Optional[bool] = UNSET
    """Whether this field must be unique across records."""


class ModelFieldDict(TypedDict):
    name: str
    type_: TypeBoomiDataHubModelsApiOrStr
    required: NotRequired[bool]
    unique: NotRequired[bool]
