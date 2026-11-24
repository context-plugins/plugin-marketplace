from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .created_by import CreatedBy, CreatedByDict
from .enums.status import StatusOrStr
from .stats import Stats, StatsDict
from .template import Template, TemplateDict


class BulkCampaign(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    status: Optional[StatusOrStr] = UNSET
    template: OptionalNullable[Template] = UNSET
    progress: Optional[int] = UNSET
    """Percentage 0-100"""

    stats: Optional[Stats] = UNSET
    started_at: OptionalNullable[RFC3339DateTime] = UNSET
    completed_at: OptionalNullable[RFC3339DateTime] = UNSET
    cancelled_at: OptionalNullable[RFC3339DateTime] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    created_by: Optional[CreatedBy] = UNSET


class BulkCampaignDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    status: NotRequired[StatusOrStr]
    template: NotRequired[TemplateDict | None]
    progress: NotRequired[int]
    stats: NotRequired[StatsDict]
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    cancelled_at: NotRequired[RFC3339DateTime | None]
    created_at: NotRequired[RFC3339DateTime]
    created_by: NotRequired[CreatedByDict]
