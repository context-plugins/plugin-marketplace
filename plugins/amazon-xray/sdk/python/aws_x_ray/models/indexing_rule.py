from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .indexing_rule_value import IndexingRuleValue, IndexingRuleValueDict


class IndexingRule(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the indexing rule."""

    modified_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ModifiedAt")
    """Displays when the rule was last modified, in Unix time seconds."""

    rule: Optional[IndexingRuleValue] = Field(default=UNSET, alias="Rule")
    """Exactly one member is set."""


class IndexingRuleDict(TypedDict):
    name: NotRequired[str]
    modified_at: NotRequired[RFC3339DateTime]
    rule: NotRequired[IndexingRuleValueDict]
