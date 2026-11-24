from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .application_info2 import ApplicationInfo2, ApplicationInfo2Dict
from .compensation_info1 import CompensationInfo1, CompensationInfo1Dict
from .custom_attribute import CustomAttribute, CustomAttributeDict
from .enums.degree_type import DegreeTypeOrStr
from .enums.employment_type import EmploymentTypeOrStr
from .enums.job_benefit import JobBenefitOrStr
from .enums.job_level import JobLevelOrStr
from .enums.posting_region import PostingRegionOrStr
from .enums.visibility import VisibilityOrStr
from .job_derived_info2 import JobDerivedInfo2, JobDerivedInfo2Dict
from .processing_options import ProcessingOptions, ProcessingOptionsDict


class Job(SdkBaseModel):
    """A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs
    to a Company, which is the hiring entity responsible for the job."""

    department: Optional[str] = UNSET
    """The department or functional area within the company with the open position. The maximum number of allowed
    characters is 255."""

    posting_create_time: Optional[str] = Field(default=UNSET, alias="postingCreateTime")
    """Output only. The timestamp when this job posting was created."""

    processing_options: Optional[ProcessingOptions] = Field(default=UNSET, alias="processingOptions")
    """Options for job processing."""

    employment_types: Optional[list[EmploymentTypeOrStr]] = Field(default=UNSET, alias="employmentTypes")
    """The employment type(s) of a job, for example, full time or part time."""

    posting_update_time: Optional[str] = Field(default=UNSET, alias="postingUpdateTime")
    """Output only. The timestamp when this job posting was last updated."""

    qualifications: Optional[str] = UNSET
    """A description of the qualifications required to perform the job. The use of this field is recommended as an
    alternative to using the more general description field. This field accepts and sanitizes HTML input, and also
    accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is
    10,000."""

    promotion_value: Optional[int] = Field(default=UNSET, alias="promotionValue")
    """A promotion value of the job, as determined by the client. The value determines the sort order of the jobs
    returned when searching for jobs using the featured jobs search call, with higher promotional values being returned
    first and ties being resolved by relevance sort. Only the jobs with a promotionValue >0 are returned in a
    FEATURED_JOB_SEARCH. Default value is 0, and negative values are treated as 0."""

    derived_info: Optional[JobDerivedInfo2] = Field(default=UNSET, alias="derivedInfo")
    """Output only. Derived details about the job posting."""

    company_display_name: Optional[str] = Field(default=UNSET, alias="companyDisplayName")
    """Output only. Display name of the company listing the job."""

    incentives: Optional[str] = UNSET
    """A description of bonus, commission, and other compensation incentives associated with the job not including
    salary or pay. The maximum number of allowed characters is 10,000."""

    requisition_id: Optional[str] = Field(default=UNSET, alias="requisitionId")
    """Required. The requisition ID, also referred to as the posting ID, is assigned by the client to identify a job.
    This field is intended to be used by clients for client identification and tracking of postings. A job isn't allowed
    to be created if there is another job with the same company, language_code and requisition_id. The maximum number of
    allowed characters is 255."""

    addresses: Optional[list[str]] = UNSET
    """Strongly recommended for the best service experience. Location(s) where the employer is looking to hire for this
    job posting. Specifying the full street address(es) of the hiring location enables better API results, especially
    job searches by commute time. At most 50 locations are allowed for best search performance. If a job has more
    locations, it is suggested to split it into multiple jobs with unique requisition_ids (e.g. 'ReqA' becomes 'ReqA-1',
    'ReqA-2', and so on.) as multiple jobs with the same company, language_code and requisition_id are not allowed. If
    the original requisition_id must be preserved, a custom field should be used for storage. It is also suggested to
    group the locations that close to each other in the same job for better search experience. Jobs with multiple
    addresses must have their addresses with the same LocationType to allow location filtering to work properly. (For
    example, a Job with addresses "1600 Amphitheatre Parkway, Mountain View, CA, USA" and "London, UK" may not have
    location filters applied correctly at search time since the first is a LocationType.STREET_ADDRESS and the second is
    a LocationType.LOCALITY.) If a job needs to have multiple addresses, it is suggested to split it into multiple jobs
    with same LocationTypes. The maximum number of allowed characters is 500."""

    job_benefits: Optional[list[JobBenefitOrStr]] = Field(default=UNSET, alias="jobBenefits")
    """The benefits included with the job."""

    application_info: Optional[ApplicationInfo2] = Field(default=UNSET, alias="applicationInfo")
    """Job application information."""

    visibility: Optional[VisibilityOrStr] = UNSET
    """Deprecated. The job is only visible to the owner. The visibility of the job. Defaults to Visibility.ACCOUNT_ONLY
    if not specified."""

    name: Optional[str] = UNSET
    """Required during job update. The resource name for the job. This is generated by the service when a job is
    created. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}". For example,
    "projects/foo/tenants/bar/jobs/baz". Use of this field in job queries and API calls is preferred over the use of
    requisition_id since this value is unique."""

    job_end_time: Optional[str] = Field(default=UNSET, alias="jobEndTime")
    """The end timestamp of the job. Typically this field is used for contracting engagements. Invalid timestamps are
    ignored."""

    job_level: Optional[JobLevelOrStr] = Field(default=UNSET, alias="jobLevel")
    """The experience level associated with the job, such as "Entry Level"."""

    job_start_time: Optional[str] = Field(default=UNSET, alias="jobStartTime")
    """The start timestamp of the job in UTC time zone. Typically this field is used for contracting engagements.
    Invalid timestamps are ignored."""

    responsibilities: Optional[str] = UNSET
    """A description of job responsibilities. The use of this field is recommended as an alternative to using the more
    general description field. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list,
    and unordered list markup tags. The maximum number of allowed characters is 10,000."""

    company: Optional[str] = UNSET
    """Required. The resource name of the company listing the job. The format is
    "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}". For example,
    "projects/foo/tenants/bar/companies/baz"."""

    posting_publish_time: Optional[str] = Field(default=UNSET, alias="postingPublishTime")
    """The timestamp this job posting was most recently published. The default value is the time the request arrives at
    the server. Invalid timestamps are ignored."""

    posting_region: Optional[PostingRegionOrStr] = Field(default=UNSET, alias="postingRegion")
    """The job PostingRegion (for example, state, country) throughout which the job is available. If this field is set,
    a LocationFilter in a search query within the job region finds this job posting if an exact location match isn't
    specified. If this field is set to PostingRegion.NATION or PostingRegion.ADMINISTRATIVE_AREA, setting job
    Job.addresses to the same location level as this field is strongly recommended."""

    degree_types: Optional[list[DegreeTypeOrStr]] = Field(default=UNSET, alias="degreeTypes")
    """The desired education degrees for the job, such as Bachelors, Masters."""

    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")
    """The language of the posting. This field is distinct from any requirements for fluency that are associated with
    the job. Language codes must be in BCP-47 format, such as "en-US" or "sr-Latn". For more information, see `Tags for
    Identifying Languages <https://tools.ietf.org/html/bcp47>`__{: class="external" target="_blank" }. If this field is
    unspecified and Job.description is present, detected language code based on Job.description is assigned, otherwise
    defaults to 'en_US'."""

    description: Optional[str] = UNSET
    """Required. The description of the job, which typically includes a multi-paragraph description of the company and
    related information. Separate fields are provided on the job object for responsibilities, qualifications, and other
    job characteristics. Use of these separate job fields is recommended. This field accepts and sanitizes HTML input,
    and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed
    characters is 100,000."""

    title: Optional[str] = UNSET
    """Required. The title of the job, such as "Software Engineer" The maximum number of allowed characters is 500."""

    posting_expire_time: Optional[str] = Field(default=UNSET, alias="postingExpireTime")
    """Strongly recommended for the best service experience. The expiration timestamp of the job. After this timestamp,
    the job is marked as expired, and it no longer appears in search results. The expired job can't be listed by the
    ListJobs API, but it can be retrieved with the GetJob API or updated with the UpdateJob API or deleted with the
    DeleteJob API. An expired job can be updated and opened again by using a future expiration timestamp. Updating an
    expired job fails if there is another existing open job with same company, language_code and requisition_id. The
    expired jobs are retained in our system for 90 days. However, the overall expired job count cannot exceed 3 times
    the maximum number of open jobs over previous 7 days. If this threshold is exceeded, expired jobs are cleaned out in
    order of earliest expire time. Expired jobs are no longer accessible after they are cleaned out. Invalid timestamps
    are ignored, and treated as expire time not provided. If the timestamp is before the instant request is made, the
    job is treated as expired immediately on creation. This kind of job can not be updated. And when creating a job with
    past timestamp, the posting_publish_time must be set before posting_expire_time. The purpose of this feature is to
    allow other objects, such as ApplicationInfo, to refer a job that didn't exist in the system prior to becoming
    expired. If you want to modify a job that was expired on creation, delete it and create a new one. If this value
    isn't provided at the time of job creation or is invalid, the job posting expires after 30 days from the job's
    creation time. For example, if the job was created on 2017/01/01 13:00AM UTC with an unspecified expiration date,
    the job expires after 2017/01/31 13:00AM UTC. If this value isn't provided on job update, it depends on the field
    masks set by UpdateJobRequest.update_mask. If the field masks include job_end_time, or the masks are empty meaning
    that every field is updated, the job posting expires after 30 days from the job's last update time. Otherwise the
    expiration date isn't updated."""

    custom_attributes: Optional[dict[str, CustomAttribute]] = Field(default=UNSET, alias="customAttributes")
    """A map of fields to hold both filterable and non-filterable custom job attributes that are not covered by the
    provided structured fields. The keys of the map are strings up to 64 bytes and must match the pattern: ``a-zA-Z*``.
    For example, key0LikeThis or KEY_1_LIKE_THIS. At most 100 filterable and at most 100 unfilterable keys are
    supported. For filterable ``string_values``, across all keys at most 200 values are allowed, with each string no
    more than 255 characters. For unfilterable ``string_values``, the maximum total size of ``string_values`` across all
    keys is 50KB."""

    compensation_info: Optional[CompensationInfo1] = Field(default=UNSET, alias="compensationInfo")
    """Job compensation information (a.k.a. "pay rate") i.e., the compensation that will paid to the employee."""


class JobDict(TypedDict):
    department: NotRequired[str]
    posting_create_time: NotRequired[str]
    processing_options: NotRequired[ProcessingOptionsDict]
    employment_types: NotRequired[list[EmploymentTypeOrStr]]
    posting_update_time: NotRequired[str]
    qualifications: NotRequired[str]
    promotion_value: NotRequired[int]
    derived_info: NotRequired[JobDerivedInfo2Dict]
    company_display_name: NotRequired[str]
    incentives: NotRequired[str]
    requisition_id: NotRequired[str]
    addresses: NotRequired[list[str]]
    job_benefits: NotRequired[list[JobBenefitOrStr]]
    application_info: NotRequired[ApplicationInfo2Dict]
    visibility: NotRequired[VisibilityOrStr]
    name: NotRequired[str]
    job_end_time: NotRequired[str]
    job_level: NotRequired[JobLevelOrStr]
    job_start_time: NotRequired[str]
    responsibilities: NotRequired[str]
    company: NotRequired[str]
    posting_publish_time: NotRequired[str]
    posting_region: NotRequired[PostingRegionOrStr]
    degree_types: NotRequired[list[DegreeTypeOrStr]]
    language_code: NotRequired[str]
    description: NotRequired[str]
    title: NotRequired[str]
    posting_expire_time: NotRequired[str]
    custom_attributes: NotRequired[dict[str, CustomAttributeDict]]
    compensation_info: NotRequired[CompensationInfo1Dict]
