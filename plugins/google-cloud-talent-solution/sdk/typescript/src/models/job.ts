import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { applicationInfo2Schema, type ApplicationInfo2 } from "./application-info2.js";
import { compensationInfo1Schema, type CompensationInfo1 } from "./compensation-info1.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { degreeTypeSchema, type DegreeType } from "./degree-type.js";
import { employmentTypeSchema, type EmploymentType } from "./employment-type.js";
import { jobBenefitSchema, type JobBenefit } from "./job-benefit.js";
import { jobDerivedInfo2Schema, type JobDerivedInfo2 } from "./job-derived-info2.js";
import { jobLevelSchema, type JobLevel } from "./job-level.js";
import { postingRegionSchema, type PostingRegion } from "./posting-region.js";
import { processingOptionsSchema, type ProcessingOptions } from "./processing-options.js";
import { visibilitySchema, type Visibility } from "./visibility.js";

/**
 * A Job resource represents a job posting (also referred to as a "job listing" or "job
 * requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
 */
export type Job = {
  /**
   * The department or functional area within the company with the open position. The maximum number
   * of allowed characters is 255.
   */
  department?: string;
  /** Output only. The timestamp when this job posting was created. */
  postingCreateTime?: string;
  /** Options for job processing. */
  processingOptions?: ProcessingOptions;
  /** The employment type(s) of a job, for example, full time or part time. */
  employmentTypes?: EmploymentType[];
  /** Output only. The timestamp when this job posting was last updated. */
  postingUpdateTime?: string;
  /**
   * A description of the qualifications required to perform the job. The use of this field is
   * recommended as an alternative to using the more general description field. This field accepts
   * and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list
   * markup tags. The maximum number of allowed characters is 10,000.
   */
  qualifications?: string;
  /**
   * A promotion value of the job, as determined by the client. The value determines the sort order
   * of the jobs returned when searching for jobs using the featured jobs search call, with higher
   * promotional values being returned first and ties being resolved by relevance sort. Only the
   * jobs with a promotionValue >0 are returned in a FEATURED_JOB_SEARCH. Default value is 0, and
   * negative values are treated as 0.
   */
  promotionValue?: number;
  /** Output only. Derived details about the job posting. */
  derivedInfo?: JobDerivedInfo2;
  /** Output only. Display name of the company listing the job. */
  companyDisplayName?: string;
  /**
   * A description of bonus, commission, and other compensation incentives associated with the job
   * not including salary or pay. The maximum number of allowed characters is 10,000.
   */
  incentives?: string;
  /**
   * Required. The requisition ID, also referred to as the posting ID, is assigned by the client to
   * identify a job. This field is intended to be used by clients for client identification and
   * tracking of postings. A job isn't allowed to be created if there is another job with the same
   * company, language_code and requisition_id. The maximum number of allowed characters is 255.
   */
  requisitionId?: string;
  /**
   * Strongly recommended for the best service experience. Location(s) where the employer is looking
   * to hire for this job posting. Specifying the full street address(es) of the hiring location
   * enables better API results, especially job searches by commute time. At most 50 locations are
   * allowed for best search performance. If a job has more locations, it is suggested to split it
   * into multiple jobs with unique requisition_ids (e.g. 'ReqA' becomes 'ReqA-1', 'ReqA-2', and so
   * on.) as multiple jobs with the same company, language_code and requisition_id are not allowed.
   * If the original requisition_id must be preserved, a custom field should be used for storage. It
   * is also suggested to group the locations that close to each other in the same job for better
   * search experience. Jobs with multiple addresses must have their addresses with the same
   * LocationType to allow location filtering to work properly. (For example, a Job with addresses
   * "1600 Amphitheatre Parkway, Mountain View, CA, USA" and "London, UK" may not have location
   * filters applied correctly at search time since the first is a LocationType.STREET_ADDRESS and
   * the second is a LocationType.LOCALITY.) If a job needs to have multiple addresses, it is
   * suggested to split it into multiple jobs with same LocationTypes. The maximum number of allowed
   * characters is 500.
   */
  addresses?: string[];
  /** The benefits included with the job. */
  jobBenefits?: JobBenefit[];
  /** Job application information. */
  applicationInfo?: ApplicationInfo2;
  /**
   * Deprecated. The job is only visible to the owner. The visibility of the job. Defaults to
   * Visibility.ACCOUNT_ONLY if not specified.
   *
   * @deprecated
   */
  visibility?: Visibility;
  /**
   * Required during job update. The resource name for the job. This is generated by the service
   * when a job is created. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}".
   * For example, "projects/foo/tenants/bar/jobs/baz". Use of this field in job queries and API
   * calls is preferred over the use of requisition_id since this value is unique.
   */
  name?: string;
  /**
   * The end timestamp of the job. Typically this field is used for contracting engagements. Invalid
   * timestamps are ignored.
   */
  jobEndTime?: string;
  /** The experience level associated with the job, such as "Entry Level". */
  jobLevel?: JobLevel;
  /**
   * The start timestamp of the job in UTC time zone. Typically this field is used for contracting
   * engagements. Invalid timestamps are ignored.
   */
  jobStartTime?: string;
  /**
   * A description of job responsibilities. The use of this field is recommended as an alternative
   * to using the more general description field. This field accepts and sanitizes HTML input, and
   * also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of
   * allowed characters is 10,000.
   */
  responsibilities?: string;
  /**
   * Required. The resource name of the company listing the job. The format is
   * "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}". For example,
   * "projects/foo/tenants/bar/companies/baz".
   */
  company?: string;
  /**
   * The timestamp this job posting was most recently published. The default value is the time the
   * request arrives at the server. Invalid timestamps are ignored.
   */
  postingPublishTime?: string;
  /**
   * The job PostingRegion (for example, state, country) throughout which the job is available. If
   * this field is set, a LocationFilter in a search query within the job region finds this job
   * posting if an exact location match isn't specified. If this field is set to
   * PostingRegion.NATION or PostingRegion.ADMINISTRATIVE_AREA, setting job Job.addresses to the
   * same location level as this field is strongly recommended.
   */
  postingRegion?: PostingRegion;
  /** The desired education degrees for the job, such as Bachelors, Masters. */
  degreeTypes?: DegreeType[];
  /**
   * The language of the posting. This field is distinct from any requirements for fluency that are
   * associated with the job. Language codes must be in BCP-47 format, such as "en-US" or "sr-Latn".
   * For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47){:
   * class="external" target="_blank" }. If this field is unspecified and Job.description is
   * present, detected language code based on Job.description is assigned, otherwise defaults to
   * 'en_US'.
   */
  languageCode?: string;
  /**
   * Required. The description of the job, which typically includes a multi-paragraph description of
   * the company and related information. Separate fields are provided on the job object for
   * responsibilities, qualifications, and other job characteristics. Use of these separate job
   * fields is recommended. This field accepts and sanitizes HTML input, and also accepts bold,
   * italic, ordered list, and unordered list markup tags. The maximum number of allowed characters
   * is 100,000.
   */
  description?: string;
  /**
   * Required. The title of the job, such as "Software Engineer" The maximum number of allowed
   * characters is 500.
   */
  title?: string;
  /**
   * Strongly recommended for the best service experience. The expiration timestamp of the job.
   * After this timestamp, the job is marked as expired, and it no longer appears in search results.
   * The expired job can't be listed by the ListJobs API, but it can be retrieved with the GetJob
   * API or updated with the UpdateJob API or deleted with the DeleteJob API. An expired job can be
   * updated and opened again by using a future expiration timestamp. Updating an expired job fails
   * if there is another existing open job with same company, language_code and requisition_id. The
   * expired jobs are retained in our system for 90 days. However, the overall expired job count
   * cannot exceed 3 times the maximum number of open jobs over previous 7 days. If this threshold
   * is exceeded, expired jobs are cleaned out in order of earliest expire time. Expired jobs are no
   * longer accessible after they are cleaned out. Invalid timestamps are ignored, and treated as
   * expire time not provided. If the timestamp is before the instant request is made, the job is
   * treated as expired immediately on creation. This kind of job can not be updated. And when
   * creating a job with past timestamp, the posting_publish_time must be set before
   * posting_expire_time. The purpose of this feature is to allow other objects, such as
   * ApplicationInfo, to refer a job that didn't exist in the system prior to becoming expired. If
   * you want to modify a job that was expired on creation, delete it and create a new one. If this
   * value isn't provided at the time of job creation or is invalid, the job posting expires after
   * 30 days from the job's creation time. For example, if the job was created on 2017/01/01 13:00AM
   * UTC with an unspecified expiration date, the job expires after 2017/01/31 13:00AM UTC. If this
   * value isn't provided on job update, it depends on the field masks set by
   * UpdateJobRequest.update_mask. If the field masks include job_end_time, or the masks are empty
   * meaning that every field is updated, the job posting expires after 30 days from the job's last
   * update time. Otherwise the expiration date isn't updated.
   */
  postingExpireTime?: string;
  /**
   * A map of fields to hold both filterable and non-filterable custom job attributes that are not
   * covered by the provided structured fields. The keys of the map are strings up to 64 bytes and
   * must match the pattern: `a-zA-Z*`. For example, key0LikeThis or KEY_1_LIKE_THIS. At most 100
   * filterable and at most 100 unfilterable keys are supported. For filterable `string_values`,
   * across all keys at most 200 values are allowed, with each string no more than 255 characters.
   * For unfilterable `string_values`, the maximum total size of `string_values` across all keys is
   * 50KB.
   */
  customAttributes?: Record<string, CustomAttribute>;
  /**
   * Job compensation information (a.k.a. "pay rate") i.e., the compensation that will paid to the
   * employee.
   */
  compensationInfo?: CompensationInfo1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobSchema: Schema<Job> = s.object<Job>(
  {
    department: s.optional(s.string()),
    postingCreateTime: s.optional(s.string()),
    processingOptions: s.optional(s.lazy(() => processingOptionsSchema)),
    employmentTypes: s.optional(s.array(s.lazy(() => employmentTypeSchema))),
    postingUpdateTime: s.optional(s.string()),
    qualifications: s.optional(s.string()),
    promotionValue: s.optional(s.int()),
    derivedInfo: s.optional(s.lazy(() => jobDerivedInfo2Schema)),
    companyDisplayName: s.optional(s.string()),
    incentives: s.optional(s.string()),
    requisitionId: s.optional(s.string()),
    addresses: s.optional(s.array(s.string())),
    jobBenefits: s.optional(s.array(s.lazy(() => jobBenefitSchema))),
    applicationInfo: s.optional(s.lazy(() => applicationInfo2Schema)),
    visibility: s.optional(s.lazy(() => visibilitySchema)),
    name: s.optional(s.string()),
    jobEndTime: s.optional(s.string()),
    jobLevel: s.optional(s.lazy(() => jobLevelSchema)),
    jobStartTime: s.optional(s.string()),
    responsibilities: s.optional(s.string()),
    company: s.optional(s.string()),
    postingPublishTime: s.optional(s.string()),
    postingRegion: s.optional(s.lazy(() => postingRegionSchema)),
    degreeTypes: s.optional(s.array(s.lazy(() => degreeTypeSchema))),
    languageCode: s.optional(s.string()),
    description: s.optional(s.string()),
    title: s.optional(s.string()),
    postingExpireTime: s.optional(s.string()),
    customAttributes: s.optional(
      s.record(
        s.string(),
        s.lazy(() => customAttributeSchema),
      ),
    ),
    compensationInfo: s.optional(s.lazy(() => compensationInfo1Schema)),
  },
  { additionalProperties: s.json() },
);
