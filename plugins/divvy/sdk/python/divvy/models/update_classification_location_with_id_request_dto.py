from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateClassificationLocationWithIdRequestDto(SdkBaseModel):
    """Update ClassificationLocation request Dto."""

    id: str
    """BILL-generated ID of the location. The value begins with ``loc``."""

    name: Optional[str] = UNSET
    """Location name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Location short name"""

    description: Optional[str] = UNSET
    """Location description"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent location. You can set this field if this location is a child object."""


class UpdateClassificationLocationWithIdRequestDtoDict(TypedDict):
    id: str
    name: NotRequired[str]
    short_name: NotRequired[str]
    description: NotRequired[str]
    parent_id: NotRequired[str]
