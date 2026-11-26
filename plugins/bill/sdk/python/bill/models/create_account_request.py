from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.chart_of_accounts_type_request import ChartOfAccountsTypeRequestOrStr


class CreateAccountRequest(SdkBaseModel):
    """Account request Dto."""

    type_: ChartOfAccountsTypeRequestOrStr = Field(alias="type")
    number: Optional[str] = UNSET
    """Number"""


class CreateAccountRequestDict(TypedDict):
    type_: ChartOfAccountsTypeRequestOrStr
    number: NotRequired[str]
