from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .probabilistic_rule_value import ProbabilisticRuleValue, ProbabilisticRuleValueDict


class IndexingRuleValue(SdkBaseModel):
    """Exactly one member is set."""

    probabilistic: Optional[ProbabilisticRuleValue] = Field(default=UNSET, alias="Probabilistic")


class IndexingRuleValueDict(TypedDict):
    probabilistic: NotRequired[ProbabilisticRuleValueDict]
