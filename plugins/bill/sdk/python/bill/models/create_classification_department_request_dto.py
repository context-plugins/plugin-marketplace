from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateClassificationDepartmentRequestDto(SdkBaseModel):
    """Create a department"""

    name: str
    """Department name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Department short name"""

    description: Optional[str] = UNSET
    """Department description"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent department. You can set this field if this department is a child object."""


class CreateClassificationDepartmentRequestDtoDict(TypedDict):
    name: str
    short_name: NotRequired[str]
    description: NotRequired[str]
    parent_id: NotRequired[str]
