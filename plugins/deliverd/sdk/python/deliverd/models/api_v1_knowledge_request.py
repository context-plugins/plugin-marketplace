from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind1_deliverd_dev_knowledge_api import Kind1DeliverdDevKnowledgeApiOrStr


class ApiV1KnowledgeRequest(SdkBaseModel):
    kind: Kind1DeliverdDevKnowledgeApiOrStr
    """fact (true here), convention (how we do it), decision (settled, with why), procedure (a how-to note), glossary
    (what a term means here), contact (who to ask about what) or known_issue (a problem and its workaround)"""

    title: str
    """The fact or rule in one line, as it should appear in a list"""

    body: str
    """The detail another agent needs to act on it, written to be read by a person. Never a secret, token or password:
    those are refused"""

    tags: Optional[list[str]] = UNSET
    """A few words to find it by"""

    workspace_id: Optional[UUID] = Field(default=UNSET, alias="workspaceId")
    """Keep it inside one workspace; the whole organisation when omitted"""

    flow_id: Optional[UUID] = Field(default=UNSET, alias="flowId")
    """Tie it to one project (flow)"""

    supersedes_id: Optional[UUID] = Field(default=UNSET, alias="supersedesId")
    """The confirmed entry this would replace. It keeps that entry's scope, and replaces it only once a person confirms
    it"""

    source_url: Optional[str] = Field(default=UNSET, alias="sourceUrl")
    """Where this comes from, if it is a page somebody can open"""

    source_label: Optional[str] = Field(default=UNSET, alias="sourceLabel")
    """What the source is, in a few words"""

    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """Your own reference. An open entry with the same one is returned instead of a second"""


class ApiV1KnowledgeRequestDict(TypedDict):
    kind: Kind1DeliverdDevKnowledgeApiOrStr
    title: str
    body: str
    tags: NotRequired[list[str]]
    workspace_id: NotRequired[UUID]
    flow_id: NotRequired[UUID]
    supersedes_id: NotRequired[UUID]
    source_url: NotRequired[str]
    source_label: NotRequired[str]
    external_id: NotRequired[str]
