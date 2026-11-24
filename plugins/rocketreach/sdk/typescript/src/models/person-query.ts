import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PersonQuery = {
  /**
   * Include profiles with all of these skills (Uses `AND` logic).
   * - Example: `['python', 'sql', 'machine learning']`
   */
  allSkills?: string[];
  /**
   * Include profiles with employers who have these competitors
   * - Example: `['homedepot.com']`
   */
  companyCompetitors?: string[];
  /**
   * Include profiles with employers located in these country codes
   * - Example: `['US']`
   */
  companyCountryCode?: string[];
  /**
   * Include profiles with employers who have these company domains
   * - Example: `['rocketreach.co']`
   */
  companyDomain?: string[];
  /**
   * Include profiles with employers who have these company emails
   * - Example: `['info@rocketreach.co']`
   */
  companyEmail?: string[];
  /**
   * Include profiles with employers below this amount of funding
   * - Example: `['50000000']`
   */
  companyFundingMax?: string[];
  /**
   * Include profiles with employers above this amount of funding
   * - Example: `['1000000']`
   */
  companyFundingMin?: string[];
  /** Include results matching company_geo. */
  companyGeo?: string[];
  /**
   * Include profiles with employed by these company IDs
   * - Example: `['123456']`
   */
  companyId?: string[];
  /**
   * Include profiles with employers in these industries. See the full list of industries
   * [here](https://docs.google.com/spreadsheets/d/1cYz3FwtNEWW7z9otNNZRIILQ63_hM1LQ9SgsXWayaaI/edit?gid=0#gid=0).
   * - Example: `['Software Engineering']`
   */
  companyIndustry?: string[];
  /**
   * Include profiles with employers with these industry keywords
   * - Example: `['SaaS', 'B2B']`
   */
  companyIndustryKeywords?: string[];
  /**
   * Search across 37,000 intent topics found
   * [here](https://docs.google.com/spreadsheets/d/1nnk8ZOLr9GUzrPNy1pG_N_gVIhDpkc5XjE3Hh4J8M00/edit?gid=761283207#gid=761283207).
   * Intent is only available on certain plans. Please reach out to our team to learn more..
   * - Example: `['hiring']`
   */
  companyIntent?: string[];
  /**
   * Hiring signals that identify companies that are actively building out specific departments.
   * Full list of categories
   * [here](https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=2100271042#gid=2100271042).
   * - Example: `['Accounting Roles::one_month']`
   */
  companyJobPostingSignal?: string[];
  /**
   * Transforms [ company_list ] search terms into a list of [ company_id ] search terms.
   * - Example: `['Example Company List']`
   */
  companyList?: string[];
  /**
   * Include results matching company_list_id.
   * - Example: `['12345']`
   */
  companyListId?: string[];
  /**
   * Include profiles with employers with these NAICS codes
   * - Example: `['541330', '541512']`
   */
  companyNaicsCode?: string[];
  /**
   * Include profiles employed by these company names
   * - Example: `['RocketReach']`
   */
  companyName?: string[];
  /**
   * Search on news events within the 25 categories listed
   * [here](https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=577464958#gid=577464958").
   * - Example: `['Funding::one_month']`
   */
  companyNewsSignal?: string[];
  /**
   * company_news_timestamp deprecated, please use `company_news_signal`
   *
   * @deprecated
   */
  companyNewsTimestamp?: string[];
  /**
   * Include results matching company_publicly_traded.
   * - Example: `['true']`
   */
  companyPubliclyTraded?: string[];
  /**
   * Include profiles with employers with these revenue values.
   * - Example: `['10000000-50000000']`
   */
  companyRevenue?: string[];
  /**
   * Include profiles with employers with these SIC codes.
   * - Example: `['7372']`
   */
  companySicCode?: string[];
  /**
   * Include profiles with employers with these sizes.
   * - Example: `['51-200']`
   */
  companySize?: string[];
  /**
   * Include profiles with employers with these company tags.
   * - Example: `['unicorn']`
   */
  companyTag?: string[];
  /**
   * Include profiles with employers with these website URLs.
   * - Example: `['rocketreach.co']`
   */
  companyWebsiteUrl?: string[];
  /**
   * Include profiles with these connections.
   * - Example: `['500+']`
   */
  connections?: string[];
  /**
   * Include profiles with these contact methods Options are: `mobile`, `phone`, `personal email`,
   * and `work email`. Available with both AND and OR logic.
   * - Example: `["work email OR personal email"]` or `["mobile AND personal email"]`
   */
  contactMethod?: string[];
  /**
   * Include results matching current or previous job titles.
   * - Example: `['VP of Sales']`
   */
  currentOrPreviousTitle?: string[];
  /**
   * Include profiles with these current job titles.
   * - Example: `['Product Manager']`
   */
  currentTitle?: string[];
  /**
   * Include profiles with these degrees.
   * - Example: `['Bachelors']`
   */
  degree?: string[];
  /**
   * Include profiles in these company departments. See the full list of departments
   * [here](https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=0#gid=0).
   * - Example: `['Product Management']`
   */
  department?: string[];
  /**
   * Include profiles with these descriptions.
   * - Example: `['Experienced software engineer with a focus on backend development']`
   */
  description?: string[];
  /**
   * Include profiles with these domains.
   * - Example: `['rocketreach.co']`
   */
  domain?: string[];
  /**
   * Include profiles with these emails.
   * - Example: `['john.doe@rocketreach.co']`
   */
  email?: string[];
  /**
   * Specifies the minimum email confidence grade that a profile must have. Note: Email grades may
   * be revalidated during lookup. As a result, you may occasionally see profiles whose email grade
   * no longer matches the grade filter used in your search. Use the following format to specify
   * personal or professional email grades: `<grade>::<modifier>`
   * - Allowed Grades: A, A-, or B.
   * - Allowed Modifiers: professional only, personal only
   * - Example: `'A-'` or `'A-::professional only'`
   */
  emailGrade?: string | null;
  /**
   * Include profiles employed by these companies.
   * - Example: `['RocketReach']`
   */
  employer?: string[];
  /**
   * Include profiles located in these geographies.
   * - Example: `['North America']`
   */
  geo?: string[];
  /**
   * Include growth numbers for specific departments and time ranges. <b>Format:</b>
   * `min_percentage_growth-max_percentage_growth::Department,TimeRange`
   * * min_percentage_growth: Minimum growth percentage to filter profiles
   * * max_percentage_growth: Maximum growth percentage to filter profiles
   * * Department: Name of the company department (e.g., Engineering, Sales)
   * * TimeRange: Duration for the growth metric (e.g., six_months, one_year)
   * - Example: `['5-30::Engineering,six_months']`
   * - Example: `['-10--20::Sales,one_year']`
   */
  growth?: string[];
  /**
   * Include results matching handle.
   * - Example: `['johndoe']`
   */
  handle?: string[];
  /**
   * Include profiles with these health credentials. Only available on certain plans. Please reach
   * out to our team to learn more.
   * - Example: `['MD', 'RN', 'PhD']`
   */
  healthCredentials?: string[];
  /**
   * Include profiles with these health licenses. Only available on certain plans. Please reach out
   * to our team to learn more.
   * - Example: `['MA12345']`
   */
  healthLicense?: string[];
  /**
   * Include profiles with these health NPIs. Only available on certain plans. Please reach out to
   * our team to learn more.
   * - Example: `['1234567890']`
   */
  healthNpi?: string[];
  /**
   * Include profiles with these health specializations. Only available on certain plans. Please
   * reach out to our team to learn more.
   * - Example: `['Cardiology']`
   */
  healthSpecialization?: string[];
  /**
   * Include profiles with these RocketReach Profile IDs.
   * - Example: `['123456']`
   */
  id?: string[];
  /**
   * job_change_range_days deprecated, please use `job_change_signal`
   *
   * @deprecated
   */
  jobChangeRangeDays?: string[];
  /**
   * Detect when a contact changes companies or gets promoted (Time window options: one_week,
   * one_month, three_months)
   * - Example: `['Company Change::one_month']`
   * - Example: `['Promotion::one_week']`
   * - Example: `['Company Change AND Promotion::three_months']`
   */
  jobChangeSignal?: string[];
  /**
   * Include results matching keyword.
   * - Example: `['data enrichment']`
   */
  keyword?: string | null;
  /**
   * Include results matching keywords.
   * - Example: `['sales prospecting', 'data enrichment']`
   */
  keywords?: string | null;
  /**
   * Include results matching link.
   * - Example: `['https://linkedin.com/in/johndoe']`
   */
  link?: string[];
  /**
   * Include profiles with these majors.
   * - Example: `['Computer Science', 'Biology']`
   */
  major?: string[];
  /**
   * Include profiles at these management levels. See the full list of management levels
   * [here](https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=0#gid=0).
   * - Example: `['Director']`
   */
  managementLevels?: string[];
  /**
   * Include profiles with these names.
   * - Example: `['John Doe']`
   */
  name?: string[];
  /**
   * Include profiles with these phone numbers.
   * - Example: `['+15555555555']`
   */
  phone?: string[];
  /** Include results matching phone_grade. */
  phoneGrade?: string[];
  /**
   * Include profiles who were previously employed at these RocketReach company IDs.
   * - Example: `['123456']`
   */
  previousCompanyId?: string[];
  /**
   * Include profiles who were previously employed at these companies.
   * - Example: `['Google']`
   */
  previousEmployer?: string[];
  /**
   * Include results matching previous_title.
   * - Example: `['Software Engineer']`
   */
  previousTitle?: string[];
  /**
   * Include profiles who attended these schools.
   * - Example: `['Stanford University']`
   */
  school?: string[];
  /**
   * Include profiles listed with any of these skills (Uses `OR` logic).
   * - Example: `['Python', 'SQL']`
   */
  skills?: string[];
  /**
   * Include profiles located in these states.
   * - Example: `['MA']`
   */
  state?: string[];
  /**
   * Include results that have been updated since the specified date.
   * - Example: `['2025-01-01']`
   */
  updateTime?: string[];
  /**
   * Include profiles with this many years of experience.
   * - Example: `['10']`
   */
  yearsExperience?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personQuerySchema: Schema<PersonQuery> = s.object<PersonQuery>(
  {
    allSkills: s.optional(s.array(s.string())),
    companyCompetitors: s.optional(s.array(s.string())),
    companyCountryCode: s.optional(s.array(s.string())),
    companyDomain: s.optional(s.array(s.string())),
    companyEmail: s.optional(s.array(s.string())),
    companyFundingMax: s.optional(s.array(s.string())),
    companyFundingMin: s.optional(s.array(s.string())),
    companyGeo: s.optional(s.array(s.string())),
    companyId: s.optional(s.array(s.string())),
    companyIndustry: s.optional(s.array(s.string())),
    companyIndustryKeywords: s.optional(s.array(s.string())),
    companyIntent: s.optional(s.array(s.string())),
    companyJobPostingSignal: s.optional(s.array(s.string())),
    companyList: s.optional(s.array(s.string())),
    companyListId: s.optional(s.array(s.string())),
    companyNaicsCode: s.optional(s.array(s.string())),
    companyName: s.optional(s.array(s.string())),
    companyNewsSignal: s.optional(s.array(s.string())),
    companyNewsTimestamp: s.optional(s.array(s.string())),
    companyPubliclyTraded: s.optional(s.array(s.string())),
    companyRevenue: s.optional(s.array(s.string())),
    companySicCode: s.optional(s.array(s.string())),
    companySize: s.optional(s.array(s.string())),
    companyTag: s.optional(s.array(s.string())),
    companyWebsiteUrl: s.optional(s.array(s.string())),
    connections: s.optional(s.array(s.string())),
    contactMethod: s.optional(s.array(s.string())),
    currentOrPreviousTitle: s.optional(s.array(s.string())),
    currentTitle: s.optional(s.array(s.string())),
    degree: s.optional(s.array(s.string())),
    department: s.optional(s.array(s.string())),
    description: s.optional(s.array(s.string())),
    domain: s.optional(s.array(s.string())),
    email: s.optional(s.array(s.string())),
    emailGrade: s.optionalNullable(s.string()),
    employer: s.optional(s.array(s.string())),
    geo: s.optional(s.array(s.string())),
    growth: s.optional(s.array(s.string())),
    handle: s.optional(s.array(s.string())),
    healthCredentials: s.optional(s.array(s.string())),
    healthLicense: s.optional(s.array(s.string())),
    healthNpi: s.optional(s.array(s.string())),
    healthSpecialization: s.optional(s.array(s.string())),
    id: s.optional(s.array(s.string())),
    jobChangeRangeDays: s.optional(s.array(s.string())),
    jobChangeSignal: s.optional(s.array(s.string())),
    keyword: s.optionalNullable(s.string()),
    keywords: s.optionalNullable(s.string()),
    link: s.optional(s.array(s.string())),
    major: s.optional(s.array(s.string())),
    managementLevels: s.optional(s.array(s.string())),
    name: s.optional(s.array(s.string())),
    phone: s.optional(s.array(s.string())),
    phoneGrade: s.optional(s.array(s.string())),
    previousCompanyId: s.optional(s.array(s.string())),
    previousEmployer: s.optional(s.array(s.string())),
    previousTitle: s.optional(s.array(s.string())),
    school: s.optional(s.array(s.string())),
    skills: s.optional(s.array(s.string())),
    state: s.optional(s.array(s.string())),
    updateTime: s.optional(s.array(s.string())),
    yearsExperience: s.optional(s.array(s.string())),
    _keysMap: {
      allSkills: "all_skills",
      companyCompetitors: "company_competitors",
      companyCountryCode: "company_country_code",
      companyDomain: "company_domain",
      companyEmail: "company_email",
      companyFundingMax: "company_funding_max",
      companyFundingMin: "company_funding_min",
      companyGeo: "company_geo",
      companyId: "company_id",
      companyIndustry: "company_industry",
      companyIndustryKeywords: "company_industry_keywords",
      companyIntent: "company_intent",
      companyJobPostingSignal: "company_job_posting_signal",
      companyList: "company_list",
      companyListId: "company_list_id",
      companyNaicsCode: "company_naics_code",
      companyName: "company_name",
      companyNewsSignal: "company_news_signal",
      companyNewsTimestamp: "company_news_timestamp",
      companyPubliclyTraded: "company_publicly_traded",
      companyRevenue: "company_revenue",
      companySicCode: "company_sic_code",
      companySize: "company_size",
      companyTag: "company_tag",
      companyWebsiteUrl: "company_website_url",
      contactMethod: "contact_method",
      currentOrPreviousTitle: "current_or_previous_title",
      currentTitle: "current_title",
      emailGrade: "email_grade",
      healthCredentials: "health_credentials",
      healthLicense: "health_license",
      healthNpi: "health_npi",
      healthSpecialization: "health_specialization",
      jobChangeRangeDays: "job_change_range_days",
      jobChangeSignal: "job_change_signal",
      managementLevels: "management_levels",
      phoneGrade: "phone_grade",
      previousCompanyId: "previous_company_id",
      previousEmployer: "previous_employer",
      previousTitle: "previous_title",
      updateTime: "update_time",
      yearsExperience: "years_experience",
    },
  },
  { additionalProperties: s.json() },
);
