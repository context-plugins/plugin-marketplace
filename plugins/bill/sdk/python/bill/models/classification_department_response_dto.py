from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ClassificationDepartmentResponseDto(SdkBaseModel):
    """ClassificationDepartment response Dto."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the department. The value begins with ``0de``."""

    name: Optional[str] = UNSET
    """Department name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Department short name"""

    description: Optional[str] = UNSET
    """Department description"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent department. You can set this field if this department is a child object."""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the department is archived"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class ClassificationDepartmentResponseDtoDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    short_name: NotRequired[str]
    description: NotRequired[str]
    parent_id: NotRequired[str]
    archived: NotRequired[bool]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
