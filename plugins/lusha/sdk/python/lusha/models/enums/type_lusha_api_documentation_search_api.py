from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeLushaApiDocumentationSearchApi(str, Enum):
    ALL_SIGNALS = "allSignals"
    LINKEDIN_ACTIVITY_INTENT = "linkedinActivityIntent"
    WEBSITE_TRAFFIC_DECREASE = "websiteTrafficDecrease"
    WEBSITE_TRAFFIC_INCREASE = "websiteTrafficIncrease"
    IT_SPEND_INCREASE = "itSpendIncrease"
    IT_SPEND_DECREASE = "itSpendDecrease"
    SURGE_IN_HIRING = "surgeInHiring"
    HEADCOUNT_INCREASE1M = "headcountIncrease1m"
    HEADCOUNT_INCREASE3M = "headcountIncrease3m"
    HEADCOUNT_INCREASE6M = "headcountIncrease6m"
    HEADCOUNT_INCREASE12M = "headcountIncrease12m"
    HEADCOUNT_DECREASE1M = "headcountDecrease1m"
    HEADCOUNT_DECREASE3M = "headcountDecrease3m"
    HEADCOUNT_DECREASE6M = "headcountDecrease6m"
    HEADCOUNT_DECREASE12M = "headcountDecrease12m"
    SURGE_IN_HIRING_BY_DEPARTMENT = "surgeInHiringByDepartment"
    SURGE_IN_HIRING_BY_LOCATION = "surgeInHiringByLocation"
    RISK_NEWS = "riskNews"
    COMMERCIAL_ACTIVITY_NEWS = "commercialActivityNews"
    CORPORATE_STRATEGY_NEWS = "corporateStrategyNews"
    FINANCIAL_EVENTS_NEWS = "financialEventsNews"
    PEOPLE_NEWS = "peopleNews"
    MARKET_INTELLIGENCE_NEWS = "marketIntelligenceNews"
    PRODUCT_ACTIVITY_NEWS = "productActivityNews"

    __str__ = str.__str__


TypeLushaApiDocumentationSearchApiOrStr: TypeAlias = Annotated[
    TypeLushaApiDocumentationSearchApi | str, open_enum_validator(TypeLushaApiDocumentationSearchApi)
]
