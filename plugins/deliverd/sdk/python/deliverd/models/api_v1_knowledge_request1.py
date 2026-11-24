from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind_deliverd_dev_knowledge_api import KindDeliverdDevKnowledgeApiOrStr


class ApiV1KnowledgeRequest1(SdkBaseModel):
    kind: Optional[KindDeliverdDevKnowledgeApiOrStr] = UNSET
    title: Optional[str] = UNSET
    body: Optional[str] = UNSET
    tags: Optional[list[str]] = UNSET


class ApiV1KnowledgeRequest1Dict(TypedDict):
    kind: NotRequired[KindDeliverdDevKnowledgeApiOrStr]
    title: NotRequired[str]
    body: NotRequired[str]
    tags: NotRequired[list[str]]
