from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .model_field import ModelField, ModelFieldDict


class ModelInput(SdkBaseModel):
    """Input for creating or updating a data model."""

    name: str
    """Display name for the model."""

    fields: Optional[list[ModelField]] = UNSET
    """Field definitions for the model schema."""


class ModelInputDict(TypedDict):
    name: str
    fields: NotRequired[list[ModelFieldDict]]
