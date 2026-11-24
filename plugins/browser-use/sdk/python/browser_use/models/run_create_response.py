from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class RunCreateResponse(SdkBaseModel):
    id: UUID
    status: StatusOrStr
    model: str
    session_id: UUID = Field(alias="sessionId")
    workspace_id: UUID = Field(alias="workspaceId")
    events_url: str = Field(alias="eventsUrl")
    missing_file_ids: Optional[list[UUID]] = Field(default=UNSET, alias="missingFileIds")
    skipped_vault_items: Optional[list[str]] = Field(default=UNSET, alias="skippedVaultItems")
    """Titles of opVaultId items that hold a credential but no 1Password website, so deriving their domains left them
    with nowhere to be typed. The run still starts without them; add a website to the item or pass
    opVaultAllowedDomains."""


class RunCreateResponseDict(TypedDict):
    id: UUID
    status: StatusOrStr
    model: str
    session_id: UUID
    workspace_id: UUID
    events_url: str
    missing_file_ids: NotRequired[list[UUID]]
    skipped_vault_items: NotRequired[list[str]]
