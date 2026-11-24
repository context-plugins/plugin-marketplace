from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sampling_boost_statistics_document import SamplingBoostStatisticsDocument, SamplingBoostStatisticsDocumentDict
from .sampling_statistics_document import SamplingStatisticsDocument, SamplingStatisticsDocumentDict


class SamplingTargetsRequest(SdkBaseModel):
    sampling_statistics_documents: list[SamplingStatisticsDocument] = Field(alias="SamplingStatisticsDocuments")
    """Information about rules that the service is using to sample requests."""

    sampling_boost_statistics_documents: Optional[list[SamplingBoostStatisticsDocument]] = Field(
        default=UNSET, alias="SamplingBoostStatisticsDocuments"
    )
    """Information about rules that the service is using to boost sampling rate."""


class SamplingTargetsRequestDict(TypedDict):
    sampling_statistics_documents: list[SamplingStatisticsDocumentDict]
    sampling_boost_statistics_documents: NotRequired[list[SamplingBoostStatisticsDocumentDict]]
