from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class PersonQuery(SdkBaseModel):
    all_skills: Optional[list[str]] = UNSET
    """Include profiles with all of these skills (Uses ``AND`` logic).
    - Example: ``['python', 'sql', 'machine learning']``"""

    company_competitors: Optional[list[str]] = UNSET
    """Include profiles with employers who have these competitors
    - Example: ``['homedepot.com']``"""

    company_country_code: Optional[list[str]] = UNSET
    """Include profiles with employers located in these country codes
    - Example: ``['US']``"""

    company_domain: Optional[list[str]] = UNSET
    """Include profiles with employers who have these company domains
    - Example: ``['rocketreach.co']``"""

    company_email: Optional[list[str]] = UNSET
    """Include profiles with employers who have these company emails
    - Example: ``['info@rocketreach.co']``"""

    company_funding_max: Optional[list[str]] = UNSET
    """Include profiles with employers below this amount of funding
    - Example: ``['50000000']``"""

    company_funding_min: Optional[list[str]] = UNSET
    """Include profiles with employers above this amount of funding
    - Example: ``['1000000']``"""

    company_geo: Optional[list[str]] = UNSET
    """Include results matching company_geo."""

    company_id: Optional[list[str]] = UNSET
    """Include profiles with employed by these company IDs
    - Example: ``['123456']``"""

    company_industry: Optional[list[str]] = UNSET
    """Include profiles with employers in these industries. See the full list of industries `here
    <https://docs.google.com/spreadsheets/d/1cYz3FwtNEWW7z9otNNZRIILQ63_hM1LQ9SgsXWayaaI/edit?gid=0#gid=0>`__.
    - Example: ``['Software Engineering']``"""

    company_industry_keywords: Optional[list[str]] = UNSET
    """Include profiles with employers with these industry keywords
    - Example: ``['SaaS', 'B2B']``"""

    company_intent: Optional[list[str]] = UNSET
    """Search across 37,000 intent topics found `here
    <https://docs.google.com/spreadsheets/d/1nnk8ZOLr9GUzrPNy1pG_N_gVIhDpkc5XjE3Hh4J8M00/edit?gid=761283207#gid=761283207>`__.
    Intent is only available on certain plans. Please reach out to our team to learn more..
    - Example: ``['hiring']``"""

    company_job_posting_signal: Optional[list[str]] = UNSET
    """Hiring signals that identify companies that are actively building out specific departments. Full list of
    categories `here
    <https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=2100271042#gid=2100271042>`__.
    - Example: ``['Accounting Roles::one_month']``"""

    company_list: Optional[list[str]] = UNSET
    """Transforms [ company_list ] search terms into a list of [ company_id ] search terms.
    - Example: ``['Example Company List']``"""

    company_list_id: Optional[list[str]] = UNSET
    """Include results matching company_list_id.
    - Example: ``['12345']``"""

    company_naics_code: Optional[list[str]] = UNSET
    """Include profiles with employers with these NAICS codes
    - Example: ``['541330', '541512']``"""

    company_name: Optional[list[str]] = UNSET
    """Include profiles employed by these company names
    - Example: ``['RocketReach']``"""

    company_news_signal: Optional[list[str]] = UNSET
    """Search on news events within the 25 categories listed `here
    <https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=577464958#gid=577464958">`__.
    - Example: ``['Funding::one_month']``"""

    company_news_timestamp: Optional[list[str]] = UNSET
    """company_news_timestamp deprecated, please use ``company_news_signal``"""

    company_publicly_traded: Optional[list[str]] = UNSET
    """Include results matching company_publicly_traded.
    - Example: ``['true']``"""

    company_revenue: Optional[list[str]] = UNSET
    """Include profiles with employers with these revenue values.
    - Example: ``['10000000-50000000']``"""

    company_sic_code: Optional[list[str]] = UNSET
    """Include profiles with employers with these SIC codes.
    - Example: ``['7372']``"""

    company_size: Optional[list[str]] = UNSET
    """Include profiles with employers with these sizes.
    - Example: ``['51-200']``"""

    company_tag: Optional[list[str]] = UNSET
    """Include profiles with employers with these company tags.
    - Example: ``['unicorn']``"""

    company_website_url: Optional[list[str]] = UNSET
    """Include profiles with employers with these website URLs.
    - Example: ``['rocketreach.co']``"""

    connections: Optional[list[str]] = UNSET
    """Include profiles with these connections.
    - Example: ``['500+']``"""

    contact_method: Optional[list[str]] = UNSET
    """Include profiles with these contact methods Options are: ``mobile``, ``phone``, ``personal email``, and ``work
    email``. Available with both AND and OR logic.
    - Example: ``["work email OR personal email"]`` or ``["mobile AND personal email"]``"""

    current_or_previous_title: Optional[list[str]] = UNSET
    """Include results matching current or previous job titles.
    - Example: ``['VP of Sales']``"""

    current_title: Optional[list[str]] = UNSET
    """Include profiles with these current job titles.
    - Example: ``['Product Manager']``"""

    degree: Optional[list[str]] = UNSET
    """Include profiles with these degrees.
    - Example: ``['Bachelors']``"""

    department: Optional[list[str]] = UNSET
    """Include profiles in these company departments. See the full list of departments `here
    <https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=0#gid=0>`__.
    - Example: ``['Product Management']``"""

    description: Optional[list[str]] = UNSET
    """Include profiles with these descriptions.
    - Example: ``['Experienced software engineer with a focus on backend development']``"""

    domain: Optional[list[str]] = UNSET
    """Include profiles with these domains.
    - Example: ``['rocketreach.co']``"""

    email: Optional[list[str]] = UNSET
    """Include profiles with these emails.
    - Example: ``['john.doe@rocketreach.co']``"""

    email_grade: OptionalNullable[str] = UNSET
    """Specifies the minimum email confidence grade that a profile must have. Note: Email grades may be revalidated
    during lookup. As a result, you may occasionally see profiles whose email grade no longer matches the grade filter
    used in your search. Use the following format to specify personal or professional email grades:
    ``<grade>::<modifier>``
    - Allowed Grades: A, A-, or B.
    - Allowed Modifiers: professional only, personal only
    - Example: ``'A-'`` or ``'A-::professional only'``"""

    employer: Optional[list[str]] = UNSET
    """Include profiles employed by these companies.
    - Example: ``['RocketReach']``"""

    geo: Optional[list[str]] = UNSET
    """Include profiles located in these geographies.
    - Example: ``['North America']``"""

    growth: Optional[list[str]] = UNSET
    """Include growth numbers for specific departments and time ranges. <b>Format:</b>
    ``min_percentage_growth-max_percentage_growth::Department,TimeRange``
    * min_percentage_growth: Minimum growth percentage to filter profiles
    * max_percentage_growth: Maximum growth percentage to filter profiles
    * Department: Name of the company department (e.g., Engineering, Sales)
    * TimeRange: Duration for the growth metric (e.g., six_months, one_year)
    - Example: ``['5-30::Engineering,six_months']``
    - Example: ``['-10--20::Sales,one_year']``"""

    handle: Optional[list[str]] = UNSET
    """Include results matching handle.
    - Example: ``['johndoe']``"""

    health_credentials: Optional[list[str]] = UNSET
    """Include profiles with these health credentials. Only available on certain plans. Please reach out to our team to
    learn more.
    - Example: ``['MD', 'RN', 'PhD']``"""

    health_license: Optional[list[str]] = UNSET
    """Include profiles with these health licenses. Only available on certain plans. Please reach out to our team to
    learn more.
    - Example: ``['MA12345']``"""

    health_npi: Optional[list[str]] = UNSET
    """Include profiles with these health NPIs. Only available on certain plans. Please reach out to our team to learn
    more.
    - Example: ``['1234567890']``"""

    health_specialization: Optional[list[str]] = UNSET
    """Include profiles with these health specializations. Only available on certain plans. Please reach out to our team
    to learn more.
    - Example: ``['Cardiology']``"""

    id: Optional[list[str]] = UNSET
    """Include profiles with these RocketReach Profile IDs.
    - Example: ``['123456']``"""

    job_change_range_days: Optional[list[str]] = UNSET
    """job_change_range_days deprecated, please use ``job_change_signal``"""

    job_change_signal: Optional[list[str]] = UNSET
    """Detect when a contact changes companies or gets promoted (Time window options: one_week, one_month, three_months)
    - Example: ``['Company Change::one_month']``
    - Example: ``['Promotion::one_week']``
    - Example: ``['Company Change AND Promotion::three_months']``"""

    keyword: OptionalNullable[str] = UNSET
    """Include results matching keyword.
    - Example: ``['data enrichment']``"""

    keywords: OptionalNullable[str] = UNSET
    """Include results matching keywords.
    - Example: ``['sales prospecting', 'data enrichment']``"""

    link: Optional[list[str]] = UNSET
    """Include results matching link.
    - Example: ``['https://linkedin.com/in/johndoe']``"""

    major: Optional[list[str]] = UNSET
    """Include profiles with these majors.
    - Example: ``['Computer Science', 'Biology']``"""

    management_levels: Optional[list[str]] = UNSET
    """Include profiles at these management levels. See the full list of management levels `here
    <https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=0#gid=0>`__.
    - Example: ``['Director']``"""

    name: Optional[list[str]] = UNSET
    """Include profiles with these names.
    - Example: ``['John Doe']``"""

    phone: Optional[list[str]] = UNSET
    """Include profiles with these phone numbers.
    - Example: ``['+15555555555']``"""

    phone_grade: Optional[list[str]] = UNSET
    """Include results matching phone_grade."""

    previous_company_id: Optional[list[str]] = UNSET
    """Include profiles who were previously employed at these RocketReach company IDs.
    - Example: ``['123456']``"""

    previous_employer: Optional[list[str]] = UNSET
    """Include profiles who were previously employed at these companies.
    - Example: ``['Google']``"""

    previous_title: Optional[list[str]] = UNSET
    """Include results matching previous_title.
    - Example: ``['Software Engineer']``"""

    school: Optional[list[str]] = UNSET
    """Include profiles who attended these schools.
    - Example: ``['Stanford University']``"""

    skills: Optional[list[str]] = UNSET
    """Include profiles listed with any of these skills (Uses ``OR`` logic).
    - Example: ``['Python', 'SQL']``"""

    state: Optional[list[str]] = UNSET
    """Include profiles located in these states.
    - Example: ``['MA']``"""

    update_time: Optional[list[str]] = UNSET
    """Include results that have been updated since the specified date.
    - Example: ``['2025-01-01']``"""

    years_experience: Optional[list[str]] = UNSET
    """Include profiles with this many years of experience.
    - Example: ``['10']``"""


class PersonQueryDict(TypedDict):
    all_skills: NotRequired[list[str]]
    company_competitors: NotRequired[list[str]]
    company_country_code: NotRequired[list[str]]
    company_domain: NotRequired[list[str]]
    company_email: NotRequired[list[str]]
    company_funding_max: NotRequired[list[str]]
    company_funding_min: NotRequired[list[str]]
    company_geo: NotRequired[list[str]]
    company_id: NotRequired[list[str]]
    company_industry: NotRequired[list[str]]
    company_industry_keywords: NotRequired[list[str]]
    company_intent: NotRequired[list[str]]
    company_job_posting_signal: NotRequired[list[str]]
    company_list: NotRequired[list[str]]
    company_list_id: NotRequired[list[str]]
    company_naics_code: NotRequired[list[str]]
    company_name: NotRequired[list[str]]
    company_news_signal: NotRequired[list[str]]
    company_news_timestamp: NotRequired[list[str]]
    company_publicly_traded: NotRequired[list[str]]
    company_revenue: NotRequired[list[str]]
    company_sic_code: NotRequired[list[str]]
    company_size: NotRequired[list[str]]
    company_tag: NotRequired[list[str]]
    company_website_url: NotRequired[list[str]]
    connections: NotRequired[list[str]]
    contact_method: NotRequired[list[str]]
    current_or_previous_title: NotRequired[list[str]]
    current_title: NotRequired[list[str]]
    degree: NotRequired[list[str]]
    department: NotRequired[list[str]]
    description: NotRequired[list[str]]
    domain: NotRequired[list[str]]
    email: NotRequired[list[str]]
    email_grade: NotRequired[str | None]
    employer: NotRequired[list[str]]
    geo: NotRequired[list[str]]
    growth: NotRequired[list[str]]
    handle: NotRequired[list[str]]
    health_credentials: NotRequired[list[str]]
    health_license: NotRequired[list[str]]
    health_npi: NotRequired[list[str]]
    health_specialization: NotRequired[list[str]]
    id: NotRequired[list[str]]
    job_change_range_days: NotRequired[list[str]]
    job_change_signal: NotRequired[list[str]]
    keyword: NotRequired[str | None]
    keywords: NotRequired[str | None]
    link: NotRequired[list[str]]
    major: NotRequired[list[str]]
    management_levels: NotRequired[list[str]]
    name: NotRequired[list[str]]
    phone: NotRequired[list[str]]
    phone_grade: NotRequired[list[str]]
    previous_company_id: NotRequired[list[str]]
    previous_employer: NotRequired[list[str]]
    previous_title: NotRequired[list[str]]
    school: NotRequired[list[str]]
    skills: NotRequired[list[str]]
    state: NotRequired[list[str]]
    update_time: NotRequired[list[str]]
    years_experience: NotRequired[list[str]]
