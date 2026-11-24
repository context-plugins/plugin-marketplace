from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventKey(str, Enum):
    FOMC_DECISION = "fomc_decision"
    FOMC_MINUTES = "fomc_minutes"
    CPI = "cpi"
    PPI = "ppi"
    NFP = "nfp"
    GDP = "gdp"
    PCE = "pce"
    RETAIL_SALES = "retail_sales"
    JOBLESS_CLAIMS = "jobless_claims"
    JOLTS = "jolts"

    __str__ = str.__str__


EventKeyOrStr: TypeAlias = Annotated[EventKey | str, open_enum_validator(EventKey)]
