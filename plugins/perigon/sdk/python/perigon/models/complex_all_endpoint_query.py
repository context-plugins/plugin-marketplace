from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.qfield import QfieldOrStr
from .enums.type_perigon_monitors_api import TypePerigonMonitorsApiOrStr


class ComplexAllEndpointQuery(SdkBaseModel):
    """Article search filters that determine which content the monitor evaluates."""

    q: OptionalNullable[str] = UNSET
    """Search article title, description, and content using keywords or Boolean syntax."""

    url: OptionalNullable[str] = UNSET
    """Filter for an exact article URL."""

    image_url: OptionalNullable[str] = Field(default=UNSET, alias="imageUrl")
    """Filter for articles with this image URL."""

    title: OptionalNullable[str] = UNSET
    """Filter for articles containing this text in the title."""

    content: OptionalNullable[str] = UNSET
    """Filter for articles containing this text in the body content."""

    desc: OptionalNullable[str] = UNSET
    """Filter for articles containing this text in the description."""

    article_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="articleId")
    """Filter by Perigon article IDs. Multiple values are combined with OR."""

    cluster_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="clusterId")
    """Filter by Perigon story cluster IDs. Multiple values are combined with OR."""

    reprint_group_id: OptionalNullable[str] = Field(default=UNSET, alias="reprintGroupId")
    """Return the original article and known reprints in a reprint group. Must be a 32-character group ID."""

    journalist_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="journalistId")
    """Filter by journalist IDs. Each ID must be exactly 32 characters."""

    medium: OptionalNullable[list[str]] = UNSET
    """Filter by medium type, such as Article or Video. Multiple values are combined with OR."""

    source_group: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceGroup")
    """Filter by Perigon source groups. Multiple values are combined with OR."""

    exclude_source_group: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeSourceGroup")
    """Exclude articles from Perigon source groups. Multiple values exclude matches from any listed group."""

    source: OptionalNullable[list[str]] = UNSET
    """Filter by publisher domains or subdomains. Supports * and ? wildcards."""

    exclude_source: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeSource")
    """Exclude publisher domains or subdomains. Supports * and ? wildcards."""

    country: OptionalNullable[list[str]] = UNSET
    """Filter by article country codes. Use two-character codes such as us or gb; multiple values are combined with
    OR."""

    exclude_country: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCountry")
    """Exclude articles with the specified country codes. Use two-character codes such as us or gb."""

    language: OptionalNullable[list[str]] = UNSET
    """Filter by ISO 639 two-letter language codes, such as en or es."""

    exclude_language: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeLanguage")
    """Exclude articles in the specified ISO 639 two-letter languages."""

    label: OptionalNullable[list[str]] = UNSET
    """Filter by editorial labels, such as Opinion, Paid-news, or Press Release."""

    exclude_label: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeLabel")
    """Exclude articles with any of the specified editorial labels."""

    byline: OptionalNullable[list[str]] = UNSET
    """Filter by exact author bylines. Multiple values are combined with OR."""

    byline_q: OptionalNullable[str] = Field(default=UNSET, alias="bylineQ")
    """Search within article author bylines."""

    summary: OptionalNullable[str] = UNSET
    """Filter for articles containing this text in the summary."""

    watchlist: OptionalNullable[list[str]] = UNSET
    """Filter for articles mentioning entities from the specified watchlists."""

    exclude_watchlist: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeWatchlist")
    """Exclude articles mentioning entities from the specified watchlists."""

    exclude_journalist_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeJournalistId")
    """Exclude articles written by journalists with these IDs."""

    exclude_source_city: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeSourceCity")
    """Exclude articles published by sources in the specified cities."""

    exclude_source_state: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeSourceState")
    """Exclude articles published by sources in the specified states."""

    lat: OptionalNullable[float] = UNSET
    """Latitude of the location used to filter places. Must be between -90 and 90."""

    lon: OptionalNullable[float] = UNSET
    """Longitude of the location used to filter places. Must be between -180 and 180."""

    max_distance: OptionalNullable[float] = Field(default=UNSET, alias="maxDistance")
    """Maximum distance in kilometers from lat and lon. Must be between 1 and 300."""

    source_lat: OptionalNullable[float] = Field(default=UNSET, alias="sourceLat")
    """Latitude used to find nearby publishers. Must be between -90 and 90."""

    source_lon: OptionalNullable[float] = Field(default=UNSET, alias="sourceLon")
    """Longitude used to find nearby publishers. Must be between -180 and 180."""

    source_max_distance: OptionalNullable[float] = Field(default=UNSET, alias="sourceMaxDistance")
    """Maximum distance in kilometers from sourceLat and sourceLon. Must be between 1 and 300."""

    min_word_count: OptionalNullable[int] = Field(default=UNSET, alias="minWordCount")
    """Filter for articles with at least this many words."""

    max_word_count: OptionalNullable[int] = Field(default=UNSET, alias="maxWordCount")
    """Filter for articles with no more than this many words."""

    event_type: OptionalNullable[list[str]] = Field(default=UNSET, alias="eventType")
    """Filter by detected event types. Multiple values are combined with OR."""

    extractor_name: OptionalNullable[list[str]] = Field(default=UNSET, alias="extractorName")
    """Filter by extractor names that processed the article."""

    exclude_extractor_name: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeExtractorName")
    """Exclude articles processed by the specified extractor names."""

    exclude_source_country: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeSourceCountry")
    """Exclude articles published by sources in the specified countries. Use two-character country codes such as us or
    gb."""

    exclude_source_county: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeSourceCounty")
    """Exclude articles published by sources in the specified counties."""

    author: OptionalNullable[list[str]] = UNSET
    """Filter by exact author names. Multiple values are combined with OR."""

    exclude_author: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeAuthor")
    """Exclude articles written by any of the specified authors."""

    topic: OptionalNullable[list[str]] = UNSET
    """Filter by article topics. Multiple values are combined with OR."""

    exclude_topic: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeTopic")
    """Exclude articles assigned any of the specified topics."""

    category: OptionalNullable[list[str]] = UNSET
    """Filter by article categories. Multiple values are combined with OR; use none for uncategorized articles."""

    taxonomy: OptionalNullable[list[str]] = UNSET
    """Filter by full Google Content Category paths. Multiple values are combined with OR."""

    prefix_taxonomy: OptionalNullable[str] = Field(default=UNSET, alias="prefixTaxonomy")
    """Filter by a Google Content Category path prefix, such as /Finance."""

    company_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="companyId")
    """Filter by Perigon company IDs. Multiple values are combined with OR."""

    company_name: OptionalNullable[str] = Field(default=UNSET, alias="companyName")
    """Filter by an exact company name mention."""

    company_domain: OptionalNullable[list[str]] = Field(default=UNSET, alias="companyDomain")
    """Filter by company domains, such as apple.com."""

    company_symbol: OptionalNullable[list[str]] = Field(default=UNSET, alias="companySymbol")
    """Filter by company stock symbols."""

    exclude_company_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCompanyId")
    """Exclude articles mentioning companies with these Perigon IDs."""

    exclude_company_domain: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCompanyDomain")
    """Exclude articles related to companies with these domains."""

    exclude_company_symbol: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCompanySymbol")
    """Exclude articles related to companies with these stock symbols."""

    person_wikidata_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="personWikidataId")
    """Filter by Wikidata IDs of people mentioned in articles."""

    person_name: OptionalNullable[list[str]] = Field(default=UNSET, alias="personName")
    """Filter by exact person name mentions. Multiple values are combined with OR."""

    exclude_person_wikidata_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludePersonWikidataId")
    """Exclude articles mentioning people with these Wikidata IDs."""

    exclude_person_name: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludePersonName")
    """Exclude articles mentioning any of the specified people by name."""

    link_to: OptionalNullable[str] = Field(default=UNSET, alias="linkTo")
    """Filter for articles containing links that match this URL pattern."""

    locations_country: OptionalNullable[list[str]] = Field(default=UNSET, alias="locationsCountry")
    """Filter for articles primarily associated with the specified countries."""

    state: OptionalNullable[list[str]] = UNSET
    """Filter for articles primarily associated with the specified states."""

    city: OptionalNullable[list[str]] = UNSET
    """Filter for articles primarily associated with the specified cities."""

    area: OptionalNullable[list[str]] = UNSET
    """Filter for articles primarily associated with the specified areas, such as neighborhoods or districts."""

    county: OptionalNullable[list[str]] = UNSET
    """Filter for articles primarily associated with the specified counties."""

    source_country: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceCountry")
    """Filter for articles published by sources in these countries. Use two-character country codes such as us or gb."""

    source_state: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceState")
    """Filter for articles published by sources in the specified states."""

    source_county: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceCounty")
    """Filter for articles published by sources in the specified counties."""

    source_city: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceCity")
    """Filter for articles published by sources in the specified cities."""

    exclude_locations_country: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeLocationsCountry")
    """Exclude articles primarily associated with any of the specified countries."""

    exclude_state: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeState")
    """Exclude articles primarily associated with any of the specified states."""

    exclude_county: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCounty")
    """Exclude articles primarily associated with any of the specified counties."""

    exclude_city: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCity")
    """Exclude articles primarily associated with any of the specified cities."""

    exclude_area: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeArea")
    """Exclude articles primarily associated with any of the specified areas."""

    location: OptionalNullable[list[str]] = UNSET
    """Filter by structured location attributes using key:value pairs separated by ::, such as city:New
    York::state:NY."""

    source_location: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceLocation")
    """Filter by structured publisher location attributes."""

    exclude_category: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeCategory")
    """Exclude articles assigned any of the specified categories."""

    exclude_taxonomy: OptionalNullable[list[str]] = Field(default=UNSET, alias="excludeTaxonomy")
    """Exclude articles assigned any of the specified Google Content Categories."""

    positive_sentiment_from: OptionalNullable[float] = Field(default=UNSET, alias="positiveSentimentFrom")
    """Minimum positive sentiment score, inclusive. Accepts values from 0 to 1."""

    positive_sentiment_to: OptionalNullable[float] = Field(default=UNSET, alias="positiveSentimentTo")
    """Maximum positive sentiment score, inclusive. Accepts values from 0 to 1."""

    negative_sentiment_from: OptionalNullable[float] = Field(default=UNSET, alias="negativeSentimentFrom")
    """Minimum negative sentiment score, inclusive. Accepts values from 0 to 1."""

    negative_sentiment_to: OptionalNullable[float] = Field(default=UNSET, alias="negativeSentimentTo")
    """Maximum negative sentiment score, inclusive. Accepts values from 0 to 1."""

    neutral_sentiment_from: OptionalNullable[float] = Field(default=UNSET, alias="neutralSentimentFrom")
    """Minimum neutral sentiment score, inclusive. Accepts values from 0 to 1."""

    neutral_sentiment_to: OptionalNullable[float] = Field(default=UNSET, alias="neutralSentimentTo")
    """Maximum neutral sentiment score, inclusive. Accepts values from 0 to 1."""

    search_translation: OptionalNullable[bool] = Field(default=UNSET, alias="searchTranslation")
    """Search translated title, description, and content for non-English articles. Defaults to false."""

    paywall: OptionalNullable[bool] = UNSET
    """Filter by whether the publisher has a paywall."""

    type_: OptionalNullable[TypePerigonMonitorsApiOrStr] = Field(default=UNSET, alias="type")
    """Filter by geographic content scope. Accepts all, local, or world."""

    qfield: OptionalNullable[list[QfieldOrStr]] = UNSET


class ComplexAllEndpointQueryDict(TypedDict):
    q: NotRequired[str | None]
    url: NotRequired[str | None]
    image_url: NotRequired[str | None]
    title: NotRequired[str | None]
    content: NotRequired[str | None]
    desc: NotRequired[str | None]
    article_id: NotRequired[list[str] | None]
    cluster_id: NotRequired[list[str] | None]
    reprint_group_id: NotRequired[str | None]
    journalist_id: NotRequired[list[str] | None]
    medium: NotRequired[list[str] | None]
    source_group: NotRequired[list[str] | None]
    exclude_source_group: NotRequired[list[str] | None]
    source: NotRequired[list[str] | None]
    exclude_source: NotRequired[list[str] | None]
    country: NotRequired[list[str] | None]
    exclude_country: NotRequired[list[str] | None]
    language: NotRequired[list[str] | None]
    exclude_language: NotRequired[list[str] | None]
    label: NotRequired[list[str] | None]
    exclude_label: NotRequired[list[str] | None]
    byline: NotRequired[list[str] | None]
    byline_q: NotRequired[str | None]
    summary: NotRequired[str | None]
    watchlist: NotRequired[list[str] | None]
    exclude_watchlist: NotRequired[list[str] | None]
    exclude_journalist_id: NotRequired[list[str] | None]
    exclude_source_city: NotRequired[list[str] | None]
    exclude_source_state: NotRequired[list[str] | None]
    lat: NotRequired[float | None]
    lon: NotRequired[float | None]
    max_distance: NotRequired[float | None]
    source_lat: NotRequired[float | None]
    source_lon: NotRequired[float | None]
    source_max_distance: NotRequired[float | None]
    min_word_count: NotRequired[int | None]
    max_word_count: NotRequired[int | None]
    event_type: NotRequired[list[str] | None]
    extractor_name: NotRequired[list[str] | None]
    exclude_extractor_name: NotRequired[list[str] | None]
    exclude_source_country: NotRequired[list[str] | None]
    exclude_source_county: NotRequired[list[str] | None]
    author: NotRequired[list[str] | None]
    exclude_author: NotRequired[list[str] | None]
    topic: NotRequired[list[str] | None]
    exclude_topic: NotRequired[list[str] | None]
    category: NotRequired[list[str] | None]
    taxonomy: NotRequired[list[str] | None]
    prefix_taxonomy: NotRequired[str | None]
    company_id: NotRequired[list[str] | None]
    company_name: NotRequired[str | None]
    company_domain: NotRequired[list[str] | None]
    company_symbol: NotRequired[list[str] | None]
    exclude_company_id: NotRequired[list[str] | None]
    exclude_company_domain: NotRequired[list[str] | None]
    exclude_company_symbol: NotRequired[list[str] | None]
    person_wikidata_id: NotRequired[list[str] | None]
    person_name: NotRequired[list[str] | None]
    exclude_person_wikidata_id: NotRequired[list[str] | None]
    exclude_person_name: NotRequired[list[str] | None]
    link_to: NotRequired[str | None]
    locations_country: NotRequired[list[str] | None]
    state: NotRequired[list[str] | None]
    city: NotRequired[list[str] | None]
    area: NotRequired[list[str] | None]
    county: NotRequired[list[str] | None]
    source_country: NotRequired[list[str] | None]
    source_state: NotRequired[list[str] | None]
    source_county: NotRequired[list[str] | None]
    source_city: NotRequired[list[str] | None]
    exclude_locations_country: NotRequired[list[str] | None]
    exclude_state: NotRequired[list[str] | None]
    exclude_county: NotRequired[list[str] | None]
    exclude_city: NotRequired[list[str] | None]
    exclude_area: NotRequired[list[str] | None]
    location: NotRequired[list[str] | None]
    source_location: NotRequired[list[str] | None]
    exclude_category: NotRequired[list[str] | None]
    exclude_taxonomy: NotRequired[list[str] | None]
    positive_sentiment_from: NotRequired[float | None]
    positive_sentiment_to: NotRequired[float | None]
    negative_sentiment_from: NotRequired[float | None]
    negative_sentiment_to: NotRequired[float | None]
    neutral_sentiment_from: NotRequired[float | None]
    neutral_sentiment_to: NotRequired[float | None]
    search_translation: NotRequired[bool | None]
    paywall: NotRequired[bool | None]
    type_: NotRequired[TypePerigonMonitorsApiOrStr | None]
    qfield: NotRequired[list[QfieldOrStr] | None]
