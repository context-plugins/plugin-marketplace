from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class UsageSummaryOrder(SdkBaseModel):
    """Associated order information"""

    id: Optional[UUID] = UNSET
    display_id: OptionalNullable[str] = Field(default=UNSET, alias="displayId")


class UsageSummaryOrderDict(TypedDict):
    id: NotRequired[UUID]
    display_id: NotRequired[str | None]
