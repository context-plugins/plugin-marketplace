from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateClassificationEmployeeRequestDto(SdkBaseModel):
    """Update an employee (lastName updated)"""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """Employee first name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """Employee last name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Employee short name"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent employee. You can set this field if this employee is a child object."""


class UpdateClassificationEmployeeRequestDtoDict(TypedDict):
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    short_name: NotRequired[str]
    parent_id: NotRequired[str]
