from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SamplingMetadata(SdkBaseModel):
    """If this report results is `sampled <https://support.google.com/analytics/answer/13331292>`__, this describes the
    percentage of events used in this report. Sampling is the practice of analyzing a subset of all data in order to
    uncover the meaningful information in the larger data set."""

    sampling_space_size: Optional[str] = Field(default=UNSET, alias="samplingSpaceSize")
    """The total number of events present in this property's data that could have been analyzed in this report for a
    date range. Sampling uncovers the meaningful information about the larger data set, and this is the size of the
    larger data set. To calculate the percentage of available data that was used in this report, compute
    ``samplesReadCount/samplingSpaceSize``."""

    samples_read_count: Optional[str] = Field(default=UNSET, alias="samplesReadCount")
    """The total number of events read in this sampled report for a date range. This is the size of the subset this
    property's data that was analyzed in this report."""


class SamplingMetadataDict(TypedDict):
    sampling_space_size: NotRequired[str]
    samples_read_count: NotRequired[str]
