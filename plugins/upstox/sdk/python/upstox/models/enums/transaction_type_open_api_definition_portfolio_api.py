from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TransactionTypeOpenApiDefinitionPortfolioApi(str, Enum):
    """Indicates whether its a buy(b) or sell(s) order"""

    BUY = "BUY"
    SELL = "SELL"

    __str__ = str.__str__


TransactionTypeOpenApiDefinitionPortfolioApiOrStr: TypeAlias = Annotated[
    TransactionTypeOpenApiDefinitionPortfolioApi | str,
    open_enum_validator(TransactionTypeOpenApiDefinitionPortfolioApi),
]
