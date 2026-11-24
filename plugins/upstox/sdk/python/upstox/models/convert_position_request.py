from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.new_product import NewProductOrStr
from .enums.old_product import OldProductOrStr
from .enums.transaction_type_open_api_definition_portfolio_api import TransactionTypeOpenApiDefinitionPortfolioApiOrStr


class ConvertPositionRequest(SdkBaseModel):
    instrument_token: str
    """Key of the instrument"""

    new_product: NewProductOrStr
    """Indicates the new product to use for the convert positions"""

    old_product: OldProductOrStr
    """Indicates the old product to use for the convert positions"""

    transaction_type: TransactionTypeOpenApiDefinitionPortfolioApiOrStr
    """Indicates whether its a buy(b) or sell(s) order"""

    quantity: int
    """Quantity with which the position to convert"""


class ConvertPositionRequestDict(TypedDict):
    instrument_token: str
    new_product: NewProductOrStr
    old_product: OldProductOrStr
    transaction_type: TransactionTypeOpenApiDefinitionPortfolioApiOrStr
    quantity: int
