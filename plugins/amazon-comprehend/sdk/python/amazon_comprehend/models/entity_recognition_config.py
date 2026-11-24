from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .entity_types_list_item import EntityTypesListItem, EntityTypesListItemDict


class EntityRecognitionConfig(SdkBaseModel):
    entity_types: list[EntityTypesListItem] = Field(alias="EntityTypes")
    """Up to 25 entity types that the model is trained to recognize."""


class EntityRecognitionConfigDict(TypedDict):
    entity_types: list[EntityTypesListItemDict]
