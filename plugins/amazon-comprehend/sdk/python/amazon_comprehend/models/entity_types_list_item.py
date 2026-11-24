from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EntityTypesListItem(SdkBaseModel):
    type_: str = Field(alias="Type")
    r"""An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity
    recognizer. Entity types must not contain the following invalid characters: \n (line break), \\n (escaped line
    break, \r (carriage return), \\r (escaped carriage return), \t (tab), \\t (escaped tab), and , (comma)."""


class EntityTypesListItemDict(TypedDict):
    type_: str
