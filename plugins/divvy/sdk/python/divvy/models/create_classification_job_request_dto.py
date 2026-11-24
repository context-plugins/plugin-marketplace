from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateClassificationJobRequestDto(SdkBaseModel):
    """Create a job"""

    name: str
    """Job name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Job short name"""

    description: Optional[str] = UNSET
    """Job description"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent job. You can set this field if this job is a child object."""


class CreateClassificationJobRequestDtoDict(TypedDict):
    name: str
    short_name: NotRequired[str]
    description: NotRequired[str]
    parent_id: NotRequired[str]
