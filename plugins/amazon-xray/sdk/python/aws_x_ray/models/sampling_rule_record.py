from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .sampling_rule import SamplingRule, SamplingRuleDict


class SamplingRuleRecord(SdkBaseModel):
    sampling_rule: Optional[SamplingRule] = Field(default=UNSET, alias="SamplingRule")
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreatedAt")
    """When the rule was created."""

    modified_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ModifiedAt")
    """When the rule was last modified."""


class SamplingRuleRecordDict(TypedDict):
    sampling_rule: NotRequired[SamplingRuleDict]
    created_at: NotRequired[RFC3339DateTime]
    modified_at: NotRequired[RFC3339DateTime]
