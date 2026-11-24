from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1LoanpaymentcalculatorRequest(SdkBaseModel):
    loan_amount: float = Field(alias="loanAmount")
    """The loan amount"""

    interest_rate: float = Field(alias="interestRate")
    """The interest rate (percentage)"""

    loan_term: int = Field(alias="loanTerm")
    """The loan term in years"""

    downpayment: Optional[float] = UNSET
    """Amount paid up front, subtracted from the loan amount before interest is applied"""


class V1LoanpaymentcalculatorRequestDict(TypedDict):
    loan_amount: float
    interest_rate: float
    loan_term: int
    downpayment: NotRequired[float]
