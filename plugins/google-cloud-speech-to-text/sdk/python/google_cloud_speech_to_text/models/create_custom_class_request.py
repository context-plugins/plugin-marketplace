from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_class2 import CustomClass2, CustomClass2Dict


class CreateCustomClassRequest(SdkBaseModel):
    """Message sent by the client for the ``CreateCustomClass`` method."""

    custom_class: Optional[CustomClass2] = Field(default=UNSET, alias="customClass")
    """Required. The custom class to create."""

    custom_class_id: Optional[str] = Field(default=UNSET, alias="customClassId")
    """Required. The ID to use for the custom class, which will become the final component of the custom class' resource
    name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a
    letter or a number, and be 4-63 characters."""


class CreateCustomClassRequestDict(TypedDict):
    custom_class: NotRequired[CustomClass2Dict]
    custom_class_id: NotRequired[str]
