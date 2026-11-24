from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .indexing_rule import IndexingRule, IndexingRuleDict


class GetIndexingRulesResult(SdkBaseModel):
    indexing_rules: Optional[list[IndexingRule]] = Field(default=UNSET, alias="IndexingRules")
    """Retrieves all indexing rules."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Specify the pagination token returned by a previous request to retrieve the next page of indexes."""


class GetIndexingRulesResultDict(TypedDict):
    indexing_rules: NotRequired[list[IndexingRuleDict]]
    next_token: NotRequired[str]
