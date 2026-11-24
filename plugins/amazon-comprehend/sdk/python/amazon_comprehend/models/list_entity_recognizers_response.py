from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entity_recognizer_properties import EntityRecognizerProperties, EntityRecognizerPropertiesDict


class ListEntityRecognizersResponse(SdkBaseModel):
    entity_recognizer_properties_list: Optional[list[EntityRecognizerProperties]] = Field(
        default=UNSET, alias="EntityRecognizerPropertiesList"
    )
    """The list of properties of an entity recognizer."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""


class ListEntityRecognizersResponseDict(TypedDict):
    entity_recognizer_properties_list: NotRequired[list[EntityRecognizerPropertiesDict]]
    next_token: NotRequired[str]
