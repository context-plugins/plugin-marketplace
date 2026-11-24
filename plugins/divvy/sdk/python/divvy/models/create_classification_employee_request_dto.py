from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateClassificationEmployeeRequestDto(SdkBaseModel):
    """Create an employee"""

    first_name: str = Field(alias="firstName")
    """Employee first name"""

    last_name: str = Field(alias="lastName")
    """Employee last name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Employee short name"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent employee. You can set this field if this employee is a child object."""


class CreateClassificationEmployeeRequestDtoDict(TypedDict):
    first_name: str
    last_name: str
    short_name: NotRequired[str]
    parent_id: NotRequired[str]
