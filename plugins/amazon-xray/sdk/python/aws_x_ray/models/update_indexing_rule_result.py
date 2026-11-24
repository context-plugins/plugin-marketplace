from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .indexing_rule import IndexingRule, IndexingRuleDict


class UpdateIndexingRuleResult(SdkBaseModel):
    indexing_rule: Optional[IndexingRule] = Field(default=UNSET, alias="IndexingRule")


class UpdateIndexingRuleResultDict(TypedDict):
    indexing_rule: NotRequired[IndexingRuleDict]
