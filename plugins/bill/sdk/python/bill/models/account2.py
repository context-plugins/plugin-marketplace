from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.chart_of_accounts_type_request import ChartOfAccountsTypeRequestOrStr


class Account2(SdkBaseModel):
    type_: Optional[ChartOfAccountsTypeRequestOrStr] = Field(default=UNSET, alias="type")
    number: Optional[str] = UNSET
    """Number"""


class Account2Dict(TypedDict):
    type_: NotRequired[ChartOfAccountsTypeRequestOrStr]
    number: NotRequired[str]
