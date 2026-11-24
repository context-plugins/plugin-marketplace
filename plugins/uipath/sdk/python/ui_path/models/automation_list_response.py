from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automation import Automation, AutomationDict


class AutomationListResponse(SdkBaseModel):
    """Paginated response containing automation records"""

    total_count: Optional[int] = Field(default=UNSET, alias="totalCount")
    """Total number of automations matching the query"""

    page: Optional[int] = UNSET
    """Current page number"""

    page_size: Optional[int] = Field(default=UNSET, alias="pageSize")
    """Number of records per page"""

    automations: Optional[list[Automation]] = UNSET


class AutomationListResponseDict(TypedDict):
    total_count: NotRequired[int]
    page: NotRequired[int]
    page_size: NotRequired[int]
    automations: NotRequired[list[AutomationDict]]
