from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .probabilistic_rule_value_update import ProbabilisticRuleValueUpdate, ProbabilisticRuleValueUpdateDict


class IndexingRuleValueUpdate(SdkBaseModel):
    """Exactly one member is set."""

    probabilistic: Optional[ProbabilisticRuleValueUpdate] = Field(default=UNSET, alias="Probabilistic")


class IndexingRuleValueUpdateDict(TypedDict):
    probabilistic: NotRequired[ProbabilisticRuleValueUpdateDict]
