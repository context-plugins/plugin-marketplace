from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entity_recognizer_properties import EntityRecognizerProperties, EntityRecognizerPropertiesDict


class DescribeEntityRecognizerResponse(SdkBaseModel):
    entity_recognizer_properties: Optional[EntityRecognizerProperties] = Field(
        default=UNSET, alias="EntityRecognizerProperties"
    )


class DescribeEntityRecognizerResponseDict(TypedDict):
    entity_recognizer_properties: NotRequired[EntityRecognizerPropertiesDict]
