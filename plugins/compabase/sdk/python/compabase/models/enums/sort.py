from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sort(str, Enum):
    REVENUE = "revenue"
    PROFIT_NET = "profit_net"
    ESTIMATED_VALUE = "estimated_value"
    TOTAL_ASSETS = "total_assets"
    OPERATING_COSTS_TOTAL = "operating_costs_total"
    FIXED_ASSETS = "fixed_assets"
    CURRENT_ASSETS = "current_assets"
    EQUITY = "equity"
    LIABILITIES_AND_PROVISIONS = "liabilities_and_provisions"
    CAPITAL = "capital"
    REGISTRATION_DATE = "registration_date"
    REVENUE_GROWTH = "revenue_growth"
    NAME = "name"
    NIP = "nip"
    REGON = "regon"
    CITY = "city"
    REGION = "region"
    POSTAL_CODE = "postal_code"

    __str__ = str.__str__


SortOrStr: TypeAlias = Annotated[Sort | str, open_enum_validator(Sort)]
