from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateClassificationJobWithIdRequestDto(SdkBaseModel):
    """Update ClassificationJob with id request Dto."""

    id: str
    """BILL-generated ID of the job. The value begins with ``job``."""

    name: Optional[str] = UNSET
    """Job name"""

    short_name: Optional[str] = Field(default=UNSET, alias="shortName")
    """Job short name"""

    description: Optional[str] = UNSET
    """Job description"""

    parent_id: Optional[str] = Field(default=UNSET, alias="parentId")
    """BILL-generated ID of the parent job. You can set this field if this job is a child object."""


class UpdateClassificationJobWithIdRequestDtoDict(TypedDict):
    id: str
    name: NotRequired[str]
    short_name: NotRequired[str]
    description: NotRequired[str]
    parent_id: NotRequired[str]
