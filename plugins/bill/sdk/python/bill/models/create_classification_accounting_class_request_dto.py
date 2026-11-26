from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateClassificationAccountingClassRequestDto(SdkBaseModel):
    """Create an accounting class"""

    name: str
    """Accounting class name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Accounting class short name"""

    description: Optional[str] = UNSET
    """Accounting class description"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent accounting class. You can set this field if this accounting class is a child
    object."""


class CreateClassificationAccountingClassRequestDtoDict(TypedDict):
    name: str
    short_name: NotRequired[str]
    description: NotRequired[str]
    parent_id: NotRequired[str]
