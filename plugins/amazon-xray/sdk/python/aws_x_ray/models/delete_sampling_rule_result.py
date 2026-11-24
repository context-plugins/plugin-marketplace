from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sampling_rule_record import SamplingRuleRecord, SamplingRuleRecordDict


class DeleteSamplingRuleResult(SdkBaseModel):
    sampling_rule_record: Optional[SamplingRuleRecord] = Field(default=UNSET, alias="SamplingRuleRecord")


class DeleteSamplingRuleResultDict(TypedDict):
    sampling_rule_record: NotRequired[SamplingRuleRecordDict]
