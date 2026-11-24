from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel

if TYPE_CHECKING:
    from .chart_of_account import ChartOfAccount, ChartOfAccountDict


class SystemChartOfAccount(SdkBaseModel):
    chart_of_account_id: Optional[int] = Field(default=UNSET, alias="chartOfAccountId")
    company_id: int = Field(alias="companyId")
    system_code: int = Field(alias="systemCode")
    chart_of_account: Optional[ChartOfAccount] = Field(default=UNSET, alias="chartOfAccount")
    chart_of_account_id_credit: OptionalNullable[int] = Field(default=UNSET, alias="chartOfAccountIdCredit")


class SystemChartOfAccountDict(TypedDict):
    chart_of_account_id: NotRequired[int]
    company_id: int
    system_code: int
    chart_of_account: NotRequired[ChartOfAccountDict]
    chart_of_account_id_credit: NotRequired[int | None]
