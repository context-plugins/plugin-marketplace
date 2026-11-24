from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_ranking_info1 import CustomRankingInfo1, CustomRankingInfo1Dict
from .enums.diversification_level import DiversificationLevelOrStr
from .enums.job_view import JobViewOrStr
from .enums.keyword_match_mode import KeywordMatchModeOrStr
from .enums.relevance_threshold import RelevanceThresholdOrStr
from .enums.search_mode import SearchModeOrStr
from .histogram_query import HistogramQuery, HistogramQueryDict
from .job_query2 import JobQuery2, JobQuery2Dict
from .request_metadata1 import RequestMetadata1, RequestMetadata1Dict


class SearchJobsRequest(SdkBaseModel):
    """The Request body of the ``SearchJobs`` call."""

    search_mode: Optional[SearchModeOrStr] = Field(default=UNSET, alias="searchMode")
    """Mode of a search. Defaults to SearchMode.JOB_SEARCH."""

    histogram_queries: Optional[list[HistogramQuery]] = Field(default=UNSET, alias="histogramQueries")
    r"""An expression specifies a histogram request against matching jobs. Expression syntax is an aggregation function
    call with histogram facets and other options. Available aggregation function calls are: *
    ``count(string_histogram_facet)``: Count the number of matching entities, for each distinct attribute value. *
    ``count(numeric_histogram_facet, list of buckets)``: Count the number of matching entities within each bucket. A
    maximum of 200 histogram buckets are supported. Data types: * Histogram facet: facet names with format ``a-zA-Z+``.
    * String: string like "any string with backslash escape for quote(\")." * Number: whole number and floating point
    number like 10, -1 and -0.01. * List: list of elements with comma(,) separator surrounded by square brackets, for
    example, [1, 2, 3] and ["one", "two", "three"]. Built-in constants: * MIN (minimum number similar to java
    Double.MIN_VALUE) * MAX (maximum number similar to java Double.MAX_VALUE) Built-in functions: * bucket(start, end[,
    label]): bucket built-in function creates a bucket with range of start, end). Note that the end is exclusive, for
    example, bucket(1, MAX, "positive number") or bucket(1, 10). Job histogram facets: * company_display_name: histogram
    by [Job.company_display_name. * employment_type: histogram by Job.employment_types, for example, "FULL_TIME",
    "PART_TIME". * company_size (DEPRECATED): histogram by CompanySize, for example, "SMALL", "MEDIUM", "BIG". *
    publish_time_in_day: histogram by the Job.posting_publish_time in days. Must specify list of numeric buckets in
    spec. * publish_time_in_month: histogram by the Job.posting_publish_time in months. Must specify list of numeric
    buckets in spec. * publish_time_in_year: histogram by the Job.posting_publish_time in years. Must specify list of
    numeric buckets in spec. * degree_types: histogram by the Job.degree_types, for example, "Bachelors", "Masters". *
    job_level: histogram by the Job.job_level, for example, "Entry Level". * country: histogram by the country code of
    jobs, for example, "US", "FR". * admin1: histogram by the admin1 code of jobs, which is a global placeholder
    referring to the state, province, or the particular term a country uses to define the geographic structure below the
    country level, for example, "CA", "IL". * city: histogram by a combination of the "city name, admin1 code". For
    example, "Mountain View, CA", "New York, NY". * admin1_country: histogram by a combination of the "admin1 code,
    country", for example, "CA, US", "IL, US". * city_coordinate: histogram by the city center's GPS coordinates
    (latitude and longitude), for example, 37.4038522,-122.0987765. Since the coordinates of a city center can change,
    customers may need to refresh them periodically. * locale: histogram by the Job.language_code, for example, "en-US",
    "fr-FR". * language: histogram by the language subtag of the Job.language_code, for example, "en", "fr". * category:
    histogram by the JobCategory, for example, "COMPUTER_AND_IT", "HEALTHCARE". * base_compensation_unit: histogram by
    the CompensationInfo.CompensationUnit of base salary, for example, "WEEKLY", "MONTHLY". * base_compensation:
    histogram by the base salary. Must specify list of numeric buckets to group results by. *
    annualized_base_compensation: histogram by the base annualized salary. Must specify list of numeric buckets to group
    results by. * annualized_total_compensation: histogram by the total annualized salary. Must specify list of numeric
    buckets to group results by. * string_custom_attribute: histogram by string Job.custom_attributes. Values can be
    accessed via square bracket notations like string_custom_attribute["key1"]. * numeric_custom_attribute: histogram by
    numeric Job.custom_attributes. Values can be accessed via square bracket notations like
    numeric_custom_attribute["key1"]. Must specify list of numeric buckets to group results by. Example expressions: *
    ``count(admin1)`` * ``count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000), bucket(100000, MAX)])``
    * ``count(string_custom_attribute["some-string-custom-attribute"])`` *
    ``count(numeric_custom_attribute["some-numeric-custom-attribute"], [bucket(MIN, 0, "negative"), bucket(0, MAX,
    "non-negative")])``"""

    job_view: Optional[JobViewOrStr] = Field(default=UNSET, alias="jobView")
    """The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_SMALL if no
    value is specified."""

    job_query: Optional[JobQuery2] = Field(default=UNSET, alias="jobQuery")
    """Query used to search against jobs, such as keyword, location filters, etc."""

    keyword_match_mode: Optional[KeywordMatchModeOrStr] = Field(default=UNSET, alias="keywordMatchMode")
    """Controls what keyword match options to use. If both keyword_match_mode and disable_keyword_match are set,
    keyword_match_mode will take precedence. Defaults to KeywordMatchMode.KEYWORD_MATCH_ALL if no value is specified."""

    custom_ranking_info: Optional[CustomRankingInfo1] = Field(default=UNSET, alias="customRankingInfo")
    """Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm)."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """The token specifying the current offset within search results. See SearchJobsResponse.next_page_token for an
    explanation of how to obtain the next set of query results."""

    diversification_level: Optional[DiversificationLevelOrStr] = Field(default=UNSET, alias="diversificationLevel")
    """Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified
    as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that
    only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other
    jobs being displayed lower down in the results. Defaults to DiversificationLevel.SIMPLE if no value is specified."""

    relevance_threshold: Optional[RelevanceThresholdOrStr] = Field(default=UNSET, alias="relevanceThreshold")
    """Optional. The relevance threshold of the search results. Default to Google defined threshold, leveraging a
    balance of precision and recall to deliver both highly accurate results and comprehensive coverage of relevant
    information."""

    disable_keyword_match: Optional[bool] = Field(default=UNSET, alias="disableKeywordMatch")
    """This field is deprecated. Please use SearchJobsRequest.keyword_match_mode going forward. To migrate,
    disable_keyword_match set to false maps to KeywordMatchMode.KEYWORD_MATCH_ALL, and disable_keyword_match set to true
    maps to KeywordMatchMode.KEYWORD_MATCH_DISABLED. If SearchJobsRequest.keyword_match_mode is set, this field is
    ignored. Controls whether to disable exact keyword match on Job.title, Job.description, Job.company_display_name,
    Job.addresses, Job.qualifications. When disable keyword match is turned off, a keyword match returns jobs that do
    not match given category filters when there are matching keywords. For example, for the query "program manager," a
    result is returned even if the job posting has the title "software developer," which doesn't fall into "program
    manager" ontology, but does have "program manager" appearing in its description. For queries like "cloud" that don't
    contain title or location specific ontology, jobs with "cloud" keyword matches are returned regardless of this
    flag's value. Use Company.keyword_searchable_job_custom_attributes if company-specific globally matched custom
    field/attribute string values are needed. Enabling keyword match improves recall of subsequent search requests.
    Defaults to false."""

    order_by: Optional[str] = Field(default=UNSET, alias="orderBy")
    """The criteria determining how search results are sorted. Default is ``"relevance desc"``. Supported options are: *
    ``"relevance desc"``: By relevance descending, as determined by the API algorithms. Relevance thresholding of query
    results is only available with this ordering. * ``"posting_publish_time desc"``: By Job.posting_publish_time
    descending. * ``"posting_update_time desc"``: By Job.posting_update_time descending. * ``"title"``: By Job.title
    ascending. * ``"title desc"``: By Job.title descending. * ``"annualized_base_compensation"``: By job's
    CompensationInfo.annualized_base_compensation_range ascending. Jobs whose annualized base compensation is
    unspecified are put at the end of search results. * ``"annualized_base_compensation desc"``: By job's
    CompensationInfo.annualized_base_compensation_range descending. Jobs whose annualized base compensation is
    unspecified are put at the end of search results. * ``"annualized_total_compensation"``: By job's
    CompensationInfo.annualized_total_compensation_range ascending. Jobs whose annualized base compensation is
    unspecified are put at the end of search results. * ``"annualized_total_compensation desc"``: By job's
    CompensationInfo.annualized_total_compensation_range descending. Jobs whose annualized base compensation is
    unspecified are put at the end of search results. * ``"custom_ranking desc"``: By the relevance score adjusted to
    the SearchJobsRequest.CustomRankingInfo.ranking_expression with weight factor assigned by
    SearchJobsRequest.CustomRankingInfo.importance_level in descending order. * Location sorting: Use the special syntax
    to order jobs by distance: ``"distance_from('Hawaii')"``: Order by distance from Hawaii. ``"distance_from(19.89,
    155.5)"``: Order by distance from a coordinate. ``"distance_from('Hawaii'), distance_from('Puerto Rico')"``: Order
    by multiple locations. See details below. ``"distance_from('Hawaii'), distance_from(19.89, 155.5)"``: Order by
    multiple locations. See details below. The string can have a maximum of 256 characters. When multiple distance
    centers are provided, a job that is close to any of the distance centers would have a high rank. When a job has
    multiple locations, the job location closest to one of the distance centers will be used. Jobs that don't have
    locations will be ranked at the bottom. Distance is calculated with a precision of 11.3 meters (37.4 feet).
    Diversification strategy is still applied unless explicitly disabled in diversification_level."""

    max_page_size: Optional[int] = Field(default=UNSET, alias="maxPageSize")
    """A limit on the number of jobs returned in the search results. Increasing this value above the default value of 10
    can increase search response time. The value can be between 1 and 100."""

    enable_broadening: Optional[bool] = Field(default=UNSET, alias="enableBroadening")
    """Controls whether to broaden the search when it produces sparse results. Broadened queries append results to the
    end of the matching results list. Defaults to false."""

    offset: Optional[int] = UNSET
    """An integer that specifies the current offset (that is, starting result location, amongst the jobs deemed by the
    API as relevant) in search results. This field is only considered if page_token is unset. The maximum allowed value
    is 5000. Otherwise an error is thrown. For example, 0 means to return results starting from the first matching job,
    and 10 means to return from the 11th job. This can be used for pagination, (for example, pageSize = 10 and offset =
    10 means to return from the second page)."""

    request_metadata: Optional[RequestMetadata1] = Field(default=UNSET, alias="requestMetadata")
    """Required. The meta information collected about the job searcher, used to improve the search quality of the
    service. The identifiers (such as ``user_id``) are provided by users, and must be unique and consistent."""


class SearchJobsRequestDict(TypedDict):
    search_mode: NotRequired[SearchModeOrStr]
    histogram_queries: NotRequired[list[HistogramQueryDict]]
    job_view: NotRequired[JobViewOrStr]
    job_query: NotRequired[JobQuery2Dict]
    keyword_match_mode: NotRequired[KeywordMatchModeOrStr]
    custom_ranking_info: NotRequired[CustomRankingInfo1Dict]
    page_token: NotRequired[str]
    diversification_level: NotRequired[DiversificationLevelOrStr]
    relevance_threshold: NotRequired[RelevanceThresholdOrStr]
    disable_keyword_match: NotRequired[bool]
    order_by: NotRequired[str]
    max_page_size: NotRequired[int]
    enable_broadening: NotRequired[bool]
    offset: NotRequired[int]
    request_metadata: NotRequired[RequestMetadata1Dict]
