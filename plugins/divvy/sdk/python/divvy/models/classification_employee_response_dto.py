from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ClassificationEmployeeResponseDto(SdkBaseModel):
    """ClassificationEmployee response Dto."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the employee. The value begins with ``emp``."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """Employee first name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """Employee last name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Employee short name"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent employee. You can set this field if this employee is a child object."""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the employee is archived"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class ClassificationEmployeeResponseDtoDict(TypedDict):
    id: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    short_name: NotRequired[str]
    parent_id: NotRequired[str]
    archived: NotRequired[bool]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
