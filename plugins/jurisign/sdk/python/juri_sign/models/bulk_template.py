from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .created_by import CreatedBy, CreatedByDict


class BulkTemplate(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    description: OptionalNullable[str] = UNSET
    merge_fields: Optional[list[str]] = UNSET
    html_content: Optional[str] = UNSET
    """Only present on show/create/update responses"""

    created_at: Optional[RFC3339DateTime] = UNSET
    created_by: Optional[CreatedBy] = UNSET


class BulkTemplateDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    description: NotRequired[str | None]
    merge_fields: NotRequired[list[str]]
    html_content: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    created_by: NotRequired[CreatedByDict]
