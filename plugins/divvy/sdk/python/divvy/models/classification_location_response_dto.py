from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ClassificationLocationResponseDto(SdkBaseModel):
    """ClassificationLocation response Dto."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the location. The value begins with ``loc``."""

    name: Optional[str] = UNSET
    """Location name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Location short name"""

    description: Optional[str] = UNSET
    """Location description"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent location. You can set this field if this location is a child object."""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the location is archived"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class ClassificationLocationResponseDtoDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    short_name: NotRequired[str]
    description: NotRequired[str]
    parent_id: NotRequired[str]
    archived: NotRequired[bool]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
