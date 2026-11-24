from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExchangeOpenApiDefinitionPortfolioApi(str, Enum):
    """Exchange of the trading symbol"""

    NSE = "NSE"
    NFO = "NFO"
    CDS = "CDS"
    BSE = "BSE"
    BFO = "BFO"
    BCD = "BCD"
    MCX = "MCX"
    NSCOM = "NSCOM"

    __str__ = str.__str__


ExchangeOpenApiDefinitionPortfolioApiOrStr: TypeAlias = Annotated[
    ExchangeOpenApiDefinitionPortfolioApi | str, open_enum_validator(ExchangeOpenApiDefinitionPortfolioApi)
]
