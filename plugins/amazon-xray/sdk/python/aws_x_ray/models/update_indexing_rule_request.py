from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .indexing_rule_value_update import IndexingRuleValueUpdate, IndexingRuleValueUpdateDict


class UpdateIndexingRuleRequest(SdkBaseModel):
    name: str = Field(alias="Name")
    """Name of the indexing rule to be updated."""

    rule: IndexingRuleValueUpdate = Field(alias="Rule")
    """Exactly one member is set."""


class UpdateIndexingRuleRequestDict(TypedDict):
    name: str
    rule: IndexingRuleValueUpdateDict
