from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.exchange import ExchangeOrStr
from .enums.order_type import OrderTypeOrStr
from .enums.product import ProductOrStr


class TokenResponse(SdkBaseModel):
    email: Optional[str] = UNSET
    """E-mail address of the user"""

    exchanges: Optional[list[ExchangeOrStr]] = UNSET
    """Lists the exchanges to which the user has access"""

    products: Optional[list[ProductOrStr]] = UNSET
    """Lists the products types to which the user has access"""

    broker: Optional[str] = UNSET
    """The broker ID"""

    user_id: Optional[str] = UNSET
    """Uniquely identifies the user"""

    user_name: Optional[str] = UNSET
    """Name of the user"""

    order_types: Optional[list[OrderTypeOrStr]] = UNSET
    """Order types enabled for the user"""

    user_type: Optional[str] = UNSET
    """Identifies the user's registered role at the broker. This will be individual for all retail users"""

    poa: Optional[bool] = UNSET
    """To depict if the user has given power of attorney for transactions"""

    ddpi: Optional[bool] = UNSET
    """Indicates if DDPI is enabled for trading"""

    is_active: Optional[bool] = UNSET
    """Whether the status of account is active or not"""

    access_token: Optional[str] = UNSET
    """The authentication token that is to used with every subsequent API requests"""

    extended_token: Optional[str] = UNSET
    """An extended authentication token with a prolonged validity period, intended for specific API requests. Ensure you
    use this token only with the designated set of APIs."""

    expires_in: Optional[int] = UNSET
    """The number of seconds until the access token expires"""

    token_type: Optional[str] = UNSET
    """The type of token"""

    refresh_token: Optional[str] = UNSET
    """The refresh token that can be used to refresh the access token"""

    refresh_token_expires_in: Optional[int] = UNSET
    """The number of seconds until the refresh token expires"""


class TokenResponseDict(TypedDict):
    email: NotRequired[str]
    exchanges: NotRequired[list[ExchangeOrStr]]
    products: NotRequired[list[ProductOrStr]]
    broker: NotRequired[str]
    user_id: NotRequired[str]
    user_name: NotRequired[str]
    order_types: NotRequired[list[OrderTypeOrStr]]
    user_type: NotRequired[str]
    poa: NotRequired[bool]
    ddpi: NotRequired[bool]
    is_active: NotRequired[bool]
    access_token: NotRequired[str]
    extended_token: NotRequired[str]
    expires_in: NotRequired[int]
    token_type: NotRequired[str]
    refresh_token: NotRequired[str]
    refresh_token_expires_in: NotRequired[int]
