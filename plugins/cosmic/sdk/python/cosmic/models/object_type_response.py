from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .object_type import ObjectType, ObjectTypeDict


class ObjectTypeResponse(SdkBaseModel):
    object_type: ObjectType
    """The content model shared by every Object in the type."""


class ObjectTypeResponseDict(TypedDict):
    object_type: ObjectTypeDict
