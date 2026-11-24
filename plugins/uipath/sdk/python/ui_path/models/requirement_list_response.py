from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .requirement import Requirement, RequirementDict


class RequirementListResponse(SdkBaseModel):
    """Paginated response containing requirements"""

    total_count: Optional[int] = Field(default=UNSET, alias="totalCount")
    """Total number of requirements"""

    requirements: Optional[list[Requirement]] = UNSET


class RequirementListResponseDict(TypedDict):
    total_count: NotRequired[int]
    requirements: NotRequired[list[RequirementDict]]
