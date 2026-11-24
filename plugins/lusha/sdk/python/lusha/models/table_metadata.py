from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .created_by import CreatedBy, CreatedByDict
from .enums.entity_type import EntityTypeOrStr
from .enums.status import StatusOrStr
from .enums.visibility import VisibilityOrStr
from .owner_info import OwnerInfo, OwnerInfoDict


class TableMetadata(SdkBaseModel):
    """TableDto — static metadata for a table."""

    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    name: Optional[str] = UNSET
    entity_type: Optional[EntityTypeOrStr] = Field(default=UNSET, alias="entityType")
    visibility: Optional[VisibilityOrStr] = UNSET
    status: Optional[StatusOrStr] = UNSET
    """Lifecycle state. ``active`` and ``archived`` are filterable via the List Tables ``status`` field; ``deleted`` is
    not a filterable status."""

    owner: Optional[OwnerInfo] = UNSET
    """Resolved owner of the table. ``id`` is always present; ``email`` and ``name`` are resolved best-effort within the
    API key's account and may be omitted if resolution fails (in which case the object contains only ``id``). Replaces
    the removed top-level ``ownerId`` field - this is a breaking change from the prior response shape."""

    created_by: Optional[CreatedBy] = Field(default=UNSET, alias="createdBy")
    """Where and by whom the table was created."""

    workspace_url: Optional[str] = Field(default=UNSET, alias="workspaceUrl")


class TableMetadataDict(TypedDict):
    table_id: NotRequired[str]
    name: NotRequired[str]
    entity_type: NotRequired[EntityTypeOrStr]
    visibility: NotRequired[VisibilityOrStr]
    status: NotRequired[StatusOrStr]
    owner: NotRequired[OwnerInfoDict]
    created_by: NotRequired[CreatedByDict]
    workspace_url: NotRequired[str]
