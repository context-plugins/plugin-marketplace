from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.object_type import ObjectTypeOrStr


class LabelAssignmentObject(SdkBaseModel):
    """Object identifier and type used for label assignments."""

    object_id: str = Field(alias="objectId")
    """The ID of the object to assign/unassign."""

    object_type: ObjectTypeOrStr = Field(alias="objectType")
    """The type of the object."""


class LabelAssignmentObjectDict(TypedDict):
    object_id: str
    object_type: ObjectTypeOrStr
