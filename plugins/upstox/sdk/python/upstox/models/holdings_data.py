from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.exchange_open_api_definition_portfolio_api import ExchangeOpenApiDefinitionPortfolioApiOrStr


class HoldingsData(SdkBaseModel):
    isin: Optional[str] = UNSET
    """The standard ISIN representing stocks listed on multiple exchanges"""

    cnc_used_quantity: Optional[int] = UNSET
    """Quantity either blocked towards open or completed order"""

    collateral_type: Optional[str] = UNSET
    """Category of collateral assigned by RMS"""

    company_name: Optional[str] = UNSET
    """Name of the company"""

    haircut: Optional[float] = UNSET
    """This is the haircut percentage applied from RMS (applicable incase of collateral)"""

    product: Optional[str] = UNSET
    """Shows if the order was either Intraday, Delivery, CO or OCO"""

    quantity: Optional[int] = UNSET
    """The total holding qty"""

    tradingsymbol: Optional[str] = UNSET
    """Shows the trading symbol of the instrument"""

    last_price: Optional[float] = UNSET
    """The last traded price of the instrument"""

    close_price: Optional[float] = UNSET
    """Closing price of the instrument from the last trading day"""

    pnl: Optional[float] = UNSET
    """Profit and Loss"""

    day_change: Optional[float] = UNSET
    """Day's change in absolute value for the stock"""

    day_change_percentage: Optional[float] = UNSET
    """Day's change in percentage for the stock"""

    instrument_token: Optional[str] = UNSET
    """Key issued by Upstox for the instrument"""

    average_price: Optional[float] = UNSET
    """Average price at which the net holding quantity was acquired"""

    collateral_quantity: Optional[int] = UNSET
    """Quantity marked as collateral by RMS on users request"""

    collateral_update_quantity: Optional[int] = UNSET
    trading_symbol: Optional[str] = UNSET
    """Shows the trading symbol of the instrument"""

    t1_quantity: Optional[int] = UNSET
    """Quantity on T+1 day after order execution"""

    exchange: Optional[ExchangeOpenApiDefinitionPortfolioApiOrStr] = UNSET
    """Exchange of the trading symbol"""


class HoldingsDataDict(TypedDict):
    isin: NotRequired[str]
    cnc_used_quantity: NotRequired[int]
    collateral_type: NotRequired[str]
    company_name: NotRequired[str]
    haircut: NotRequired[float]
    product: NotRequired[str]
    quantity: NotRequired[int]
    tradingsymbol: NotRequired[str]
    last_price: NotRequired[float]
    close_price: NotRequired[float]
    pnl: NotRequired[float]
    day_change: NotRequired[float]
    day_change_percentage: NotRequired[float]
    instrument_token: NotRequired[str]
    average_price: NotRequired[float]
    collateral_quantity: NotRequired[int]
    collateral_update_quantity: NotRequired[int]
    trading_symbol: NotRequired[str]
    t1_quantity: NotRequired[int]
    exchange: NotRequired[ExchangeOpenApiDefinitionPortfolioApiOrStr]
