from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sampling_rule_update import SamplingRuleUpdate, SamplingRuleUpdateDict


class UpdateSamplingRuleRequest(SdkBaseModel):
    sampling_rule_update: SamplingRuleUpdate = Field(alias="SamplingRuleUpdate")


class UpdateSamplingRuleRequestDict(TypedDict):
    sampling_rule_update: SamplingRuleUpdateDict
