from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .sampling_target_document import SamplingTargetDocument, SamplingTargetDocumentDict
from .unprocessed_statistics import UnprocessedStatistics, UnprocessedStatisticsDict


class GetSamplingTargetsResult(SdkBaseModel):
    sampling_target_documents: Optional[list[SamplingTargetDocument]] = Field(
        default=UNSET, alias="SamplingTargetDocuments"
    )
    """Updated rules that the service should use to sample requests."""

    last_rule_modification: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastRuleModification")
    """The last time a user changed the sampling rule configuration. If the sampling rule configuration changed since
    the service last retrieved it, the service should call GetSamplingRules to get the latest version."""

    unprocessed_statistics: Optional[list[UnprocessedStatistics]] = Field(default=UNSET, alias="UnprocessedStatistics")
    """Information about SamplingStatisticsDocument that X-Ray could not process."""

    unprocessed_boost_statistics: Optional[list[UnprocessedStatistics]] = Field(
        default=UNSET, alias="UnprocessedBoostStatistics"
    )
    """Information about SamplingBoostStatisticsDocument that X-Ray could not process."""


class GetSamplingTargetsResultDict(TypedDict):
    sampling_target_documents: NotRequired[list[SamplingTargetDocumentDict]]
    last_rule_modification: NotRequired[RFC3339DateTime]
    unprocessed_statistics: NotRequired[list[UnprocessedStatisticsDict]]
    unprocessed_boost_statistics: NotRequired[list[UnprocessedStatisticsDict]]
