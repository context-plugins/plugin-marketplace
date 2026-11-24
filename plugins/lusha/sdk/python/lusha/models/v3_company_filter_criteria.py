from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.business_model import BusinessModelOrStr
from .enums.company_type import CompanyTypeOrStr
from .enums.intent_topics_condition import IntentTopicsConditionOrStr
from .enums.intent_topics_operator import IntentTopicsOperatorOrStr
from .enums.technologies_condition import TechnologiesConditionOrStr
from .founded_year import FoundedYear, FoundedYearDict
from .funding import Funding, FundingDict
from .geographic_detail import GeographicDetail, GeographicDetailDict
from .headquarter_zipcode import HeadquarterZipcode, HeadquarterZipcodeDict
from .locations_zipcode import LocationsZipcode, LocationsZipcodeDict
from .v3_location import V3Location, V3LocationDict
from .v3_range import V3Range, V3RangeDict


class V3CompanyFilterCriteria(SdkBaseModel):
    names: Optional[list[str]] = UNSET
    domains: Optional[list[str]] = UNSET
    ids: Optional[list[str]] = UNSET
    locations: Optional[list[V3Location]] = UNSET
    sizes: Optional[list[V3Range]] = UNSET
    revenues: Optional[list[V3Range]] = UNSET
    technologies: Optional[list[str]] = UNSET
    technologies_condition: Optional[TechnologiesConditionOrStr] = Field(default=UNSET, alias="technologiesCondition")
    industries_labels: Optional[list[str]] = Field(default=UNSET, alias="industriesLabels")
    main_industries_ids: Optional[list[int]] = Field(default=UNSET, alias="mainIndustriesIds")
    sub_industries_ids: Optional[list[int]] = Field(default=UNSET, alias="subIndustriesIds")
    intent_topics: Optional[list[str]] = Field(default=UNSET, alias="intentTopics")
    intent_topics_condition: Optional[IntentTopicsConditionOrStr] = Field(default=UNSET, alias="intentTopicsCondition")
    intent_min_score: Optional[int] = Field(default=UNSET, alias="intentMinScore")
    intent_max_score: Optional[int] = Field(default=UNSET, alias="intentMaxScore")
    intent_topics_operator: Optional[IntentTopicsOperatorOrStr] = Field(default=UNSET, alias="intentTopicsOperator")
    """Recommended over ``intentTopicsCondition``. ``any``/``all`` are aliases for ``or``/``and``.
    ``intentTopicsCondition`` is not deprecated and remains accepted."""

    topic_count_threshold: Optional[list[V3Range]] = Field(default=UNSET, alias="topicCountThreshold")
    sic_codes: Optional[list[str]] = Field(default=UNSET, alias="sicCodes")
    naics_codes: Optional[list[str]] = Field(default=UNSET, alias="naicsCodes")
    funding: Optional[Funding] = UNSET
    """All funding sub-filters live under this single object. Every field is optional; combine any subset."""

    founded_year: Optional[list[FoundedYear]] = Field(default=UNSET, alias="foundedYear")
    """Filter by year the company was founded. Supports ``min`` (greater than or equal) and ``max`` (less than or equal)
    range operators."""

    business_model: Optional[list[BusinessModelOrStr]] = Field(default=UNSET, alias="businessModel")
    """Filter by business model. Accepted values: B2B, B2C, B2G."""

    company_type: Optional[list[CompanyTypeOrStr]] = Field(default=UNSET, alias="companyType")
    """Filter by company type. Accepted values: Government, Private Company, Public Company, Educational, Non Profit,
    Self Employed."""

    linkedin_urls: Optional[list[str]] = Field(default=UNSET, alias="linkedinUrls")
    """Filter by company LinkedIn URLs."""

    keywords: Optional[list[str]] = UNSET
    """Filter by keywords associated with the company."""

    specialities: Optional[list[str]] = UNSET
    exact_specialities: Optional[list[str]] = Field(default=UNSET, alias="exactSpecialities")
    exact_keywords: Optional[list[str]] = Field(default=UNSET, alias="exactKeywords")
    keywords_search_fields: Optional[list[str]] = Field(default=UNSET, alias="keywordsSearchFields")
    previous_company_domains: Optional[list[str]] = Field(default=UNSET, alias="previousCompanyDomains")
    previous_company_names: Optional[list[str]] = Field(default=UNSET, alias="previousCompanyNames")
    geographic_details: Optional[list[GeographicDetail]] = Field(default=UNSET, alias="geographicDetails")
    locations_zipcodes: Optional[list[LocationsZipcode]] = Field(default=UNSET, alias="locationsZipcodes")
    headquarter_zipcodes: Optional[list[HeadquarterZipcode]] = Field(default=UNSET, alias="headquarterZipcodes")


class V3CompanyFilterCriteriaDict(TypedDict):
    names: NotRequired[list[str]]
    domains: NotRequired[list[str]]
    ids: NotRequired[list[str]]
    locations: NotRequired[list[V3LocationDict]]
    sizes: NotRequired[list[V3RangeDict]]
    revenues: NotRequired[list[V3RangeDict]]
    technologies: NotRequired[list[str]]
    technologies_condition: NotRequired[TechnologiesConditionOrStr]
    industries_labels: NotRequired[list[str]]
    main_industries_ids: NotRequired[list[int]]
    sub_industries_ids: NotRequired[list[int]]
    intent_topics: NotRequired[list[str]]
    intent_topics_condition: NotRequired[IntentTopicsConditionOrStr]
    intent_min_score: NotRequired[int]
    intent_max_score: NotRequired[int]
    intent_topics_operator: NotRequired[IntentTopicsOperatorOrStr]
    topic_count_threshold: NotRequired[list[V3RangeDict]]
    sic_codes: NotRequired[list[str]]
    naics_codes: NotRequired[list[str]]
    funding: NotRequired[FundingDict]
    founded_year: NotRequired[list[FoundedYearDict]]
    business_model: NotRequired[list[BusinessModelOrStr]]
    company_type: NotRequired[list[CompanyTypeOrStr]]
    linkedin_urls: NotRequired[list[str]]
    keywords: NotRequired[list[str]]
    specialities: NotRequired[list[str]]
    exact_specialities: NotRequired[list[str]]
    exact_keywords: NotRequired[list[str]]
    keywords_search_fields: NotRequired[list[str]]
    previous_company_domains: NotRequired[list[str]]
    previous_company_names: NotRequired[list[str]]
    geographic_details: NotRequired[list[GeographicDetailDict]]
    locations_zipcodes: NotRequired[list[LocationsZipcodeDict]]
    headquarter_zipcodes: NotRequired[list[HeadquarterZipcodeDict]]
