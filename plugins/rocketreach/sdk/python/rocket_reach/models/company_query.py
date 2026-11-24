from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyQuery(SdkBaseModel):
    company_tag: Optional[list[str]] = UNSET
    competitors: Optional[list[str]] = UNSET
    """Include companies with these compeitiors"""

    description: Optional[list[str]] = UNSET
    """Include companies with these descriptions"""

    domain: Optional[list[str]] = UNSET
    """Include companies with these domains"""

    email_domain: Optional[list[str]] = UNSET
    """Include companies with these email domains"""

    employees: Optional[list[str]] = UNSET
    """Include companies with this number of employees"""

    extended_keyword: Optional[list[str]] = UNSET
    geo: Optional[list[str]] = UNSET
    """Include companies located in these geographies"""

    growth: Optional[list[str]] = UNSET
    """Include growth numbers for specific departments and time ranges. <b>Format:</b>
    ``min_percentage_growth-max_percentage_growth::Department,TimeRange``
    * min_percentage_growth: Minimum growth percentage to filter companies
    * max_percentage_growth: Maximum growth percentage to filter companies
    * Department: Name of the company department (e.g., Engineering, Sales)
    * TimeRange: Duration for the growth metric (e.g., six_months, one_year)
    - Example: ``['5-30::Engineering,six_months']``
    - Example: ``['-10--20::Sales,one_year']``"""

    id: Optional[list[str]] = UNSET
    """Include companies with these RocketReach company IDs"""

    industry: Optional[list[str]] = UNSET
    """Include companies focused in these industries"""

    industry_keywords: Optional[list[str]] = UNSET
    """Include companies focused in industries with these keywords"""

    industry_tags: Optional[list[str]] = UNSET
    """Include companies focused in industries with these tags"""

    intent: Optional[list[str]] = UNSET
    """Search across 37,000 intent topics found `here
    <https://docs.google.com/spreadsheets/d/1nnk8ZOLr9GUzrPNy1pG_N_gVIhDpkc5XjE3Hh4J8M00/edit?gid=761283207#gid=761283207>`__.
    Intent is only available on certain plans. Please reach out to our team to learn more."""

    is_primary: Optional[list[str]] = UNSET
    job_posting_signal: Optional[list[str]] = UNSET
    """Hiring signals that identify companies that are actively building out specific departments. Full list of
    categories `here
    <https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=2100271042#gid=2100271042>`__.
    - Example: ``['Accounting Roles::one_month']``"""

    keyword: Optional[list[str]] = UNSET
    link: Optional[list[str]] = UNSET
    """Include companies listed with these links"""

    location: Optional[list[str]] = UNSET
    """Include companies located in these locations"""

    naics_code: Optional[list[str]] = UNSET
    """Include companies with these NAICS codes"""

    name: Optional[list[str]] = UNSET
    """Include companies with these names"""

    news_signal: Optional[list[str]] = UNSET
    """Search on news events within the 25 categories listed `here
    <https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=577464958#gid=577464958">`__.
    - Example: ``['Funding::one_month']``"""

    news_timestamp: Optional[list[str]] = UNSET
    """news_timestamp deprecated, please use ``news_signal``"""

    phone: Optional[list[str]] = UNSET
    """Include companies with these phone numbers"""

    primary_industry: Optional[list[str]] = UNSET
    """Include companies focues in these primary industries"""

    publicly_traded: Optional[list[str]] = UNSET
    """Include companies that are publically traded"""

    revenue: Optional[list[str]] = UNSET
    """Include companies with these revenue values"""

    sic_code: Optional[list[str]] = UNSET
    """Include companies with these SIC codes"""

    simplified_keyword: Optional[list[str]] = UNSET
    techstack: Optional[list[str]] = UNSET
    """Include companies working in these techstacks"""

    total_funding: Optional[list[str]] = UNSET
    """Include companies who have raised this amount of capital"""

    website_category: Optional[list[str]] = UNSET
    """Include companies with websites in these categories"""

    website_url: Optional[list[str]] = UNSET
    """Include companies with these website URLs"""


class CompanyQueryDict(TypedDict):
    company_tag: NotRequired[list[str]]
    competitors: NotRequired[list[str]]
    description: NotRequired[list[str]]
    domain: NotRequired[list[str]]
    email_domain: NotRequired[list[str]]
    employees: NotRequired[list[str]]
    extended_keyword: NotRequired[list[str]]
    geo: NotRequired[list[str]]
    growth: NotRequired[list[str]]
    id: NotRequired[list[str]]
    industry: NotRequired[list[str]]
    industry_keywords: NotRequired[list[str]]
    industry_tags: NotRequired[list[str]]
    intent: NotRequired[list[str]]
    is_primary: NotRequired[list[str]]
    job_posting_signal: NotRequired[list[str]]
    keyword: NotRequired[list[str]]
    link: NotRequired[list[str]]
    location: NotRequired[list[str]]
    naics_code: NotRequired[list[str]]
    name: NotRequired[list[str]]
    news_signal: NotRequired[list[str]]
    news_timestamp: NotRequired[list[str]]
    phone: NotRequired[list[str]]
    primary_industry: NotRequired[list[str]]
    publicly_traded: NotRequired[list[str]]
    revenue: NotRequired[list[str]]
    sic_code: NotRequired[list[str]]
    simplified_keyword: NotRequired[list[str]]
    techstack: NotRequired[list[str]]
    total_funding: NotRequired[list[str]]
    website_category: NotRequired[list[str]]
    website_url: NotRequired[list[str]]
