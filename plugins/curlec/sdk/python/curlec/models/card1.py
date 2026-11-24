from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.input_type import InputTypeOrStr


class Card1(SdkBaseModel):
    """Requires PCI DSS compliance"""

    name: Optional[str] = UNSET
    number: Optional[str] = UNSET
    expiry_month: Optional[str] = UNSET
    expiry_year: Optional[str] = UNSET
    input_type: Optional[InputTypeOrStr] = UNSET
    token_id: Optional[str] = UNSET
    token: Optional[str] = UNSET


class Card1Dict(TypedDict):
    name: NotRequired[str]
    number: NotRequired[str]
    expiry_month: NotRequired[str]
    expiry_year: NotRequired[str]
    input_type: NotRequired[InputTypeOrStr]
    token_id: NotRequired[str]
    token: NotRequired[str]
