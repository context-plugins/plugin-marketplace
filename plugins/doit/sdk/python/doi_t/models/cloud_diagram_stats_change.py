from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type8 import Type8OrStr


class CloudDiagramStatsChange(SdkBaseModel):
    """A single activity change entry in a diagram stats record."""

    type_: Optional[Type8OrStr] = Field(default=UNSET, alias="type")
    """Type of the change."""

    service: Optional[str] = UNSET
    """Cloud service the change applies to."""

    count: Optional[int] = UNSET
    """Number of occurrences of this change type."""


class CloudDiagramStatsChangeDict(TypedDict):
    type_: NotRequired[Type8OrStr]
    service: NotRequired[str]
    count: NotRequired[int]
