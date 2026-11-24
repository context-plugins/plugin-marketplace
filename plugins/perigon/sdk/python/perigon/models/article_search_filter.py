from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .coordinate_filter import CoordinateFilter, CoordinateFilterDict


class ArticleSearchFilter(SdkBaseModel):
    """Complex filter structure for article searches that supports nested logical operations (AND, OR, NOT) and multiple
    filtering criteria."""

    article_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="articleId")
    """Filter by specific article identifiers. Accepts either a single ID or an array of IDs. Returns only articles
    matching these IDs."""

    cluster_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="clusterId")
    """Filter by specific story identifiers. Accepts either a single ID or an array of IDs. Returns only articles
    belonging to these stories."""

    source: OptionalNullable[list[str]] = UNSET
    """Filter articles by specific publisher domains or subdomains. Accepts either a single domain or an array of
    domains. Multiple values create an OR filter."""

    exclude_source: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeSource")
    """Exclude articles from specific publisher domains or subdomains. Accepts either a single domain or an array of
    domains. Multiple values create an AND-exclude filter."""

    source_group: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceGroup")
    """Filter articles using Perigon's curated publisher bundles (e.g., top100, top25tech). Accepts either a single
    source group or an array. Multiple values create an OR filter to include articles from any of the specified
    bundles."""

    language: OptionalNullable[list[str]] = UNSET
    """Filter articles by their language using ISO-639 two-letter codes in lowercase (e.g., en, es, fr). Accepts either
    a single language code or an array. Multiple values create an OR filter."""

    exclude_language: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeLanguage")
    """Exclude articles in specific languages using ISO-639 two-letter codes in lowercase. Accepts either a single
    language code or an array. Multiple values create an AND-exclude filter."""

    label: OptionalNullable[list[str]] = UNSET
    """Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check, or Press Release. View our
    docs for an exhaustive list of labels. Accepts either a single label or an array. Multiple values create an OR
    filter."""

    exclude_label: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeLabel")
    """Exclude articles with specific editorial labels. Accepts either a single label or an array. Multiple values
    create an AND-exclude filter, removing all content with any of these labels."""

    taxonomy: OptionalNullable[list[str]] = UNSET
    """Filter by Google Content Categories. Must pass the full hierarchical path of the category. Accepts either a
    single path or an array. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Multiple values create
    an OR filter."""

    category: OptionalNullable[list[str]] = UNSET
    """Filter by broad content categories such as Politics, Tech, Sports, Business, or Finance. Accepts either a single
    category or an array. Use none to find uncategorized articles. Multiple values create an OR filter."""

    topic: OptionalNullable[list[str]] = UNSET
    """Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Accepts either a single
    topic or an array. Topics are more granular than categories, and articles can have multiple topics. Multiple values
    create an OR filter."""

    exclude_topic: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeTopic")
    """Exclude articles with specific topics. Accepts either a single topic or an array. Multiple values create an
    AND-exclude filter, removing all content with any of these topics."""

    country: OptionalNullable[list[str]] = UNSET
    """Filter articles by countries they mention using two-letter country codes in lowercase (e.g., us, gb, jp). Accepts
    either a single country code or an array. Multiple values create an OR filter. See documentation for supported
    country codes."""

    exclude_country: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCountry")
    """Exclude articles from specific countries using two-letter country codes in lowercase. Accepts either a single
    country code or an array. Multiple values create an AND-exclude filter. See documentation for supported country
    codes."""

    locations_country: OptionalNullable[list[str]] = Field(default=UNSET, alias="locationsCountry")
    """Filter articles where specified countries play a central role in the content, not just mentioned. Uses two-letter
    country codes in lowercase. Accepts either a single country code or an array. Multiple values create an OR filter.
    See documentation for supported country codes."""

    exclude_locations_country: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeLocationsCountry")
    """Exclude articles where specified countries play a central role in the content. Accepts either a single country
    code or an array. Multiple values create an AND-exclude filter, removing articles focused on any of these countries.
    See documentation for supported country codes."""

    state: OptionalNullable[list[str]] = UNSET
    """Filter articles where specified states play a central role in the content. Accepts either a single state code or
    an array. Multiple values create an OR filter. Uses two-letter state codes in lowercase. See documentation for
    supported state codes."""

    exclude_state: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeState")
    """Exclude articles where specified states play a central role. Accepts either a single state code or an array.
    Multiple values create an AND-exclude filter, removing articles focused on any of these states. See documentation
    for supported state codes."""

    county: OptionalNullable[list[str]] = UNSET
    """Filter articles that mention or are related to specific counties. Accepts either a single county name or an
    array. Multiple values create an OR filter. County names typically include the word 'County' (e.g., Los Angeles
    County)."""

    exclude_county: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCounty")
    """Exclude articles that mention or are related to specific counties. Accepts either a single county name or an
    array. Multiple values create an AND-exclude filter. County names should match the format in article metadata (e.g.,
    Los Angeles County, Cook County)."""

    city: OptionalNullable[list[str]] = UNSET
    """Filter articles that mention or are related to specific cities. Accepts either a single city name or an array.
    Multiple values create an OR filter."""

    exclude_city: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCity")
    """Exclude articles that mention or are related to specific cities. Accepts either a single city name or an array.
    Multiple values create an AND-exclude filter."""

    source_country: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceCountry")
    """Filter for articles from publishers based in specific countries. Accepts either a single country code or an
    array. Uses two-letter country codes in lowercase (e.g., us, gb). See documentation for supported country codes."""

    source_state: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceState")
    """Filter for articles from publishers based in specific states or regions. Accepts either a single state code or an
    array. Uses two-letter state codes in lowercase. See documentation for supported state codes."""

    source_county: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceCounty")
    """Filter for articles from publishers based in specific counties. Accepts either a single county name or an array.
    Multiple values create an OR filter."""

    source_city: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceCity")
    """Filter for articles from publishers based in specific cities. Accepts either a single city name or an array.
    Multiple values create an OR filter."""

    coordinates: Optional[CoordinateFilter] = UNSET
    source_coordinates: Optional[CoordinateFilter] = Field(default=UNSET, alias="sourceCoordinates")
    company_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="companyId")
    """Filter articles by company identifiers. Accepts either a single ID or an array. Multiple values create an OR
    filter. For a complete list of tracked companies and their IDs, refer to the /companies endpoint."""

    exclude_company_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCompanyId")
    """Exclude articles mentioning companies with specific identifiers. Accepts either a single ID or an array. Multiple
    values create an AND-exclude filter. For a complete list of tracked companies and their IDs, refer to the /companies
    endpoint."""

    company_domain: OptionalNullable[list[str]] = Field(default=UNSET, alias="companyDomain")
    """Filter articles by company domains (e.g., apple.com). Accepts either a single domain or an array. Multiple values
    create an OR filter. For a complete list of tracked companies and their domains, refer to the /companies
    endpoint."""

    exclude_company_domain: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCompanyDomain")
    """Exclude articles related to companies with specific domains. Accepts either a single domain or an array. Multiple
    values create an AND-exclude filter. For a complete list of tracked companies and their domains, refer to the
    /companies endpoint."""

    company_symbol: OptionalNullable[list[str]] = Field(default=UNSET, alias="companySymbol")
    """Filter articles by company stock symbols (e.g., AAPL, MSFT). Accepts either a single symbol or an array. Multiple
    values create an OR filter. For a complete list of tracked companies and their symbols, refer to the /companies
    endpoint."""

    exclude_company_symbol: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCompanySymbol")
    """Exclude articles related to companies with specific stock symbols. Accepts either a single symbol or an array.
    Multiple values create an AND-exclude filter. For a complete list of tracked companies and their symbols, refer to
    the /companies endpoint."""

    company_name: OptionalNullable[list[str]] = Field(default=UNSET, alias="companyName")
    """Filter articles by company name mentions. Accepts either a single name or an array. Performs exact matching on
    company names. Multiple values create an OR filter. For a complete list of tracked companies and their names, refer
    to the /companies endpoint."""

    person_wikidata_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="personWikidataId")
    """Filter articles by Wikidata IDs of mentioned people. Accepts either a single ID or an array. Multiple values
    create an OR filter. For a complete list of tracked individuals and their Wikidata IDs, refer to the /people
    endpoint."""

    exclude_person_wikidata_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludePersonWikidataId")
    """Exclude articles mentioning people with specific Wikidata IDs. Accepts either a single ID or an array. Multiple
    values create an AND-exclude filter. For a complete list of tracked individuals and their Wikidata IDs, refer to the
    /people endpoint."""

    person_name: OptionalNullable[list[str]] = Field(default=UNSET, alias="personName")
    """Filter articles by exact person name matches. Accepts either a single name or an array. Does not support Boolean
    operators or wildcards. Multiple values create an OR filter. For a complete list of tracked individuals and their
    names, refer to the /people endpoint."""

    exclude_person_name: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludePersonName")
    """Exclude articles mentioning specific people by name. Accepts either a single name or an array. Multiple values
    create an AND-exclude filter. For a complete list of tracked individuals and their names, refer to the /people
    endpoint."""

    and_: OptionalNullable[list[ArticleSearchFilter]] = Field(default=UNSET, alias="AND")
    """Adds additional AND filter objects. These objects must be of the same type as the original filter object and will
    be combined with the existing filter using the AND logical operator."""

    or_: OptionalNullable[list[ArticleSearchFilter]] = Field(default=UNSET, alias="OR")
    """Adds additional OR filter objects. These objects must be of the same type as the original filter object and will
    be combined with the existing filter using the OR logical operator."""

    not_: OptionalNullable[list[ArticleSearchFilter]] = Field(default=UNSET, alias="NOT")
    """A filter object for logical NOT operations"""


class ArticleSearchFilterDict(TypedDict):
    article_id: NotRequired[list[str] | None]
    cluster_id: NotRequired[list[str] | None]
    source: NotRequired[list[str] | None]
    exclude_source: NotRequired[list[str] | None]
    source_group: NotRequired[list[str] | None]
    language: NotRequired[list[str] | None]
    exclude_language: NotRequired[list[str] | None]
    label: NotRequired[list[str] | None]
    exclude_label: NotRequired[list[str] | None]
    taxonomy: NotRequired[list[str] | None]
    category: NotRequired[list[str] | None]
    topic: NotRequired[list[str] | None]
    exclude_topic: NotRequired[list[str] | None]
    country: NotRequired[list[str] | None]
    exclude_country: NotRequired[list[str] | None]
    locations_country: NotRequired[list[str] | None]
    exclude_locations_country: NotRequired[list[str] | None]
    state: NotRequired[list[str] | None]
    exclude_state: NotRequired[list[str] | None]
    county: NotRequired[list[str] | None]
    exclude_county: NotRequired[list[str] | None]
    city: NotRequired[list[str] | None]
    exclude_city: NotRequired[list[str] | None]
    source_country: NotRequired[list[str] | None]
    source_state: NotRequired[list[str] | None]
    source_county: NotRequired[list[str] | None]
    source_city: NotRequired[list[str] | None]
    coordinates: NotRequired[CoordinateFilterDict]
    source_coordinates: NotRequired[CoordinateFilterDict]
    company_id: NotRequired[list[str] | None]
    exclude_company_id: NotRequired[list[str] | None]
    company_domain: NotRequired[list[str] | None]
    exclude_company_domain: NotRequired[list[str] | None]
    company_symbol: NotRequired[list[str] | None]
    exclude_company_symbol: NotRequired[list[str] | None]
    company_name: NotRequired[list[str] | None]
    person_wikidata_id: NotRequired[list[str] | None]
    exclude_person_wikidata_id: NotRequired[list[str] | None]
    person_name: NotRequired[list[str] | None]
    exclude_person_name: NotRequired[list[str] | None]
    and_: NotRequired[list[ArticleSearchFilterDict] | None]
    or_: NotRequired[list[ArticleSearchFilterDict] | None]
    not_: NotRequired[list[ArticleSearchFilterDict] | None]
