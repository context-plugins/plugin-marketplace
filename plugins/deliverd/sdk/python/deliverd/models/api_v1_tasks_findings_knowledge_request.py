from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind13 import Kind13OrStr


class ApiV1TasksFindingsKnowledgeRequest(SdkBaseModel):
    kind: Optional[Kind13OrStr] = UNSET
    """decision for a decision, fact otherwise, when omitted"""

    title: Optional[str] = UNSET
    body: Optional[str] = UNSET
    tags: Optional[list[str]] = UNSET


class ApiV1TasksFindingsKnowledgeRequestDict(TypedDict):
    kind: NotRequired[Kind13OrStr]
    title: NotRequired[str]
    body: NotRequired[str]
    tags: NotRequired[list[str]]
