from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.chart_of_accounts_type_response import ChartOfAccountsTypeResponseOrStr


class AccountResponse(SdkBaseModel):
    """Account response Dto."""

    type_: Optional[ChartOfAccountsTypeResponseOrStr] = Field(default=UNSET, alias="type")
    number: Optional[str] = UNSET
    """Number"""


class AccountResponseDict(TypedDict):
    type_: NotRequired[ChartOfAccountsTypeResponseOrStr]
    number: NotRequired[str]
