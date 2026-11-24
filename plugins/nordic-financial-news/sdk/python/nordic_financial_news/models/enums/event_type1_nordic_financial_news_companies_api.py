from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventType1NordicFinancialNewsCompaniesApi(str, Enum):
    """The kind of calendar event"""

    EARNINGS_REPORT = "earnings_report"
    EARNINGS_CALL = "earnings_call"
    AGM = "agm"
    EGM = "egm"
    DIVIDEND = "dividend"
    CAPITAL_MARKETS_DAY = "capital_markets_day"
    TRADING_UPDATE = "trading_update"
    CONFERENCE_PRESENTATION = "conference_presentation"
    MA_ANNOUNCEMENT = "ma_announcement"
    MA_OFFER_DEADLINE = "ma_offer_deadline"
    MA_COMPLETION = "ma_completion"
    LISTING = "listing"
    DELISTING = "delisting"

    __str__ = str.__str__


EventType1NordicFinancialNewsCompaniesApiOrStr: TypeAlias = Annotated[
    EventType1NordicFinancialNewsCompaniesApi | str, open_enum_validator(EventType1NordicFinancialNewsCompaniesApi)
]
