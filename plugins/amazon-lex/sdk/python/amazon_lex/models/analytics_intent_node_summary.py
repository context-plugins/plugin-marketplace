from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.node_type import NodeTypeOrStr


class AnalyticsIntentNodeSummary(SdkBaseModel):
    intent_name: Optional[str] = Field(default=UNSET, alias="intentName")
    """The name of the intent at the end of the requested path."""

    intent_path: Optional[str] = Field(default=UNSET, alias="intentPath")
    """The path."""

    intent_count: Optional[int] = Field(default=UNSET, alias="intentCount")
    """The total number of sessions that follow the given path to the given intent."""

    intent_level: Optional[int] = Field(default=UNSET, alias="intentLevel")
    """The number of intents up to and including the requested path."""

    node_type: Optional[NodeTypeOrStr] = Field(default=UNSET, alias="nodeType")
    """Specifies whether the node is the end of a path (Exit) or not (Inner)."""


class AnalyticsIntentNodeSummaryDict(TypedDict):
    intent_name: NotRequired[str]
    intent_path: NotRequired[str]
    intent_count: NotRequired[int]
    intent_level: NotRequired[int]
    node_type: NotRequired[NodeTypeOrStr]
