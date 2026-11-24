from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .irregular import Irregular, IrregularDict
from .links_affordability_income_api import LinksAffordabilityIncomeApi, LinksAffordabilityIncomeApiDict
from .other_credit import OtherCredit, OtherCreditDict
from .regular import Regular, RegularDict
from .summary import Summary, SummaryDict


class IncomeResponse(SdkBaseModel):
    """Container object, containing income details.

    The Income Summary object with income summarised and classified by type: regular, irregular or other sources
    (created/refreshed across up to 10 institutions)"""

    type_: str = Field(alias="type")
    """Always "income"."""

    id: str
    """The identifier of the income resource to be retrieved."""

    coverage_days: Optional[int] = Field(default=UNSET, alias="coverageDays")
    """Number of days covered by the summary"""

    from_month: str = Field(alias="fromMonth")
    """Start month for the period for which the Income summary is generated. The period of time relates to the account
    and transaction data used as input into the summary."""

    to_month: str = Field(alias="toMonth")
    """End month (usually the current month) for the period for which the Income summary is generated."""

    regular: Optional[list[Regular]] = UNSET
    """Required true"""

    irregular: Optional[list[Irregular]] = UNSET
    """Required true"""

    other_credit: Optional[list[OtherCredit]] = Field(default=UNSET, alias="otherCredit")
    """Required true"""

    summary: Summary
    """Summary totals relating to income analysis"""

    links: Optional[LinksAffordabilityIncomeApi] = UNSET


class IncomeResponseDict(TypedDict):
    type_: str
    id: str
    coverage_days: NotRequired[int]
    from_month: str
    to_month: str
    regular: NotRequired[list[RegularDict]]
    irregular: NotRequired[list[IrregularDict]]
    other_credit: NotRequired[list[OtherCreditDict]]
    summary: SummaryDict
    links: NotRequired[LinksAffordabilityIncomeApiDict]
