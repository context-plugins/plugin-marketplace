from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .object import Object, ObjectDict


class ObjectResponse(SdkBaseModel):
    object_: Object = Field(alias="object")
    """A single piece of content. Which properties are present depends on ``props``."""


class ObjectResponseDict(TypedDict):
    object_: ObjectDict
