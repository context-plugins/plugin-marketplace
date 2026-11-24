from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NewsEventType(str, Enum):
    ASSET_INVESTMENT = "Asset Investment"
    ASSET_SALE = "Asset Sale"
    COMPETITOR_ACTIVITY = "Competitor Activity"
    EVENT_PARTICIPATION = "Event Participation"
    EXECUTIVE_DEPARTURE = "Executive Departure"
    EXECUTIVE_HIRE = "Executive Hire"
    EXECUTIVE_PROMOTION = "Executive Promotion"
    FACILITIES_EXPANSION = "Facilities Expansion"
    FACILITY_CLOSURE = "Facility Closure"
    FUNDING_ROUND = "Funding Round"
    HEADCOUNT_DECREASE = "Headcount Decrease"
    HEADCOUNT_INCREASE = "Headcount Increase"
    IPO = "IPO"
    LAWSUIT_FACED = "Lawsuit Faced"
    LAWSUIT_FILED = "Lawsuit Filed"
    M_A = "M&A"
    NEW_CUSTOMER = "New Customer"
    NEW_LOCATION = "New Location"
    NEW_VENDOR = "New Vendor"
    PARTNERSHIP = "Partnership"
    PRODUCT_DEVELOPMENT = "Product Development"
    PRODUCT_INTEGRATION = "Product Integration"
    PRODUCT_LAUNCH = "Product Launch"
    RECOGNITION = "Recognition"
    SECURITY_ISSUE = "Security Issue"
    STRATEGIC_INVESTMENT = "Strategic Investment"

    __str__ = str.__str__


NewsEventTypeOrStr: TypeAlias = Annotated[NewsEventType | str, open_enum_validator(NewsEventType)]
