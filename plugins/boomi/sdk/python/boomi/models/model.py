from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_boomi_data_hub_models_api import StatusBoomiDataHubModelsApiOrStr
from .model_field import ModelField, ModelFieldDict


class Model(SdkBaseModel):
    """A data model defining the schema and matching rules for a master data domain."""

    id: Optional[str] = UNSET
    """Unique identifier of the model."""

    name: Optional[str] = UNSET
    """Display name of the model."""

    version: Optional[int] = UNSET
    """Current version number of the model."""

    published_version: Optional[int] = Field(default=UNSET, alias="publishedVersion")
    """Version number of the last published model."""

    status: Optional[StatusBoomiDataHubModelsApiOrStr] = UNSET
    """Publication status of the model."""

    fields: Optional[list[ModelField]] = UNSET
    """Field definitions for this model's schema."""


class ModelDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    version: NotRequired[int]
    published_version: NotRequired[int]
    status: NotRequired[StatusBoomiDataHubModelsApiOrStr]
    fields: NotRequired[list[ModelFieldDict]]
