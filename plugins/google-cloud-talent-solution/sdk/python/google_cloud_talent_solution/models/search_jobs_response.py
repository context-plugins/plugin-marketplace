from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .histogram_query_result import HistogramQueryResult, HistogramQueryResultDict
from .location import Location, LocationDict
from .matching_job import MatchingJob, MatchingJobDict
from .response_metadata1 import ResponseMetadata1, ResponseMetadata1Dict
from .spelling_correction2 import SpellingCorrection2, SpellingCorrection2Dict


class SearchJobsResponse(SdkBaseModel):
    """Response for SearchJob method."""

    total_size: Optional[int] = Field(default=UNSET, alias="totalSize")
    """Number of jobs that match the specified query. Note: This size is precise only if the total is less than
    100,000."""

    matching_jobs: Optional[list[MatchingJob]] = Field(default=UNSET, alias="matchingJobs")
    """The Job entities that match the specified SearchJobsRequest."""

    metadata: Optional[ResponseMetadata1] = UNSET
    """Additional information for the API invocation, such as the request tracking id."""

    histogram_query_results: Optional[list[HistogramQueryResult]] = Field(default=UNSET, alias="histogramQueryResults")
    """The histogram results that match with specified SearchJobsRequest.histogram_queries."""

    broadened_query_jobs_count: Optional[int] = Field(default=UNSET, alias="broadenedQueryJobsCount")
    """If query broadening is enabled, we may append additional results from the broadened query. This number indicates
    how many of the jobs returned in the jobs field are from the broadened query. These results are always at the end of
    the jobs list. In particular, a value of 0, or if the field isn't set, all the jobs in the jobs list are from the
    original (without broadening) query. If this field is non-zero, subsequent requests with offset after this result
    set should contain all broadened results."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """The token that specifies the starting position of the next page of results. This field is empty if there are no
    more results."""

    location_filters: Optional[list[Location]] = Field(default=UNSET, alias="locationFilters")
    """The location filters that the service applied to the specified query. If any filters are lat-lng based, the
    Location.location_type is Location.LocationType.LOCATION_TYPE_UNSPECIFIED."""

    spell_correction: Optional[SpellingCorrection2] = Field(default=UNSET, alias="spellCorrection")
    """The spell checking result, and correction."""


class SearchJobsResponseDict(TypedDict):
    total_size: NotRequired[int]
    matching_jobs: NotRequired[list[MatchingJobDict]]
    metadata: NotRequired[ResponseMetadata1Dict]
    histogram_query_results: NotRequired[list[HistogramQueryResultDict]]
    broadened_query_jobs_count: NotRequired[int]
    next_page_token: NotRequired[str]
    location_filters: NotRequired[list[LocationDict]]
    spell_correction: NotRequired[SpellingCorrection2Dict]
