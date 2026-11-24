from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1KnowledgeImportRequest(SdkBaseModel):
    markdown: str
    """Markdown: a Deliverd export, or a notes file such as AGENTS.md or CLAUDE.md. Each heading becomes one proposed
    entry"""

    workspace_id: Optional[UUID] = Field(default=UNSET, alias="workspaceId")
    source: Optional[str] = UNSET
    """Where the file came from, e.g. the repository and path"""


class ApiV1KnowledgeImportRequestDict(TypedDict):
    markdown: str
    workspace_id: NotRequired[UUID]
    source: NotRequired[str]
