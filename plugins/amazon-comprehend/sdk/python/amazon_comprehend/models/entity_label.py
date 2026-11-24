from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name import NameOrStr


class EntityLabel(SdkBaseModel):
    name: Optional[NameOrStr] = Field(default=UNSET, alias="Name")
    """The name of the label."""

    score: Optional[float] = Field(default=UNSET, alias="Score")
    """The level of confidence that Amazon Comprehend has in the accuracy of the detection."""


class EntityLabelDict(TypedDict):
    name: NotRequired[NameOrStr]
    score: NotRequired[float]
