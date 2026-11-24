from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .object_type import ObjectType, ObjectTypeDict


class ObjectTypeListResponse(SdkBaseModel):
    object_types: list[ObjectType]


class ObjectTypeListResponseDict(TypedDict):
    object_types: list[ObjectTypeDict]
