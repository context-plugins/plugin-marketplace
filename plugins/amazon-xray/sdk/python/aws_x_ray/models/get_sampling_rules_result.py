from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sampling_rule_record import SamplingRuleRecord, SamplingRuleRecordDict


class GetSamplingRulesResult(SdkBaseModel):
    sampling_rule_records: Optional[list[SamplingRuleRecord]] = Field(default=UNSET, alias="SamplingRuleRecords")
    """Rule definitions and metadata."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class GetSamplingRulesResultDict(TypedDict):
    sampling_rule_records: NotRequired[list[SamplingRuleRecordDict]]
    next_token: NotRequired[str]
