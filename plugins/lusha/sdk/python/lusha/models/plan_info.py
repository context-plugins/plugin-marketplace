from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class PlanInfo(SdkBaseModel):
    category: Optional[str] = UNSET
    renewal_type: Optional[str] = Field(default=UNSET, alias="renewalType")
    start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    end_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    """Renewal/end date. Omitted (null) for free accounts, since they have no renewal cycle."""


class PlanInfoDict(TypedDict):
    category: NotRequired[str]
    renewal_type: NotRequired[str]
    start_date: NotRequired[RFC3339DateTime]
    end_date: NotRequired[RFC3339DateTime | None]
