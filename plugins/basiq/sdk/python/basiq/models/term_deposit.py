from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.maturity_instructions import MaturityInstructionsOrStr


class TermDeposit(SdkBaseModel):
    lodgement_date: str = Field(alias="lodgementDate")
    """The lodgement date of the original deposit."""

    maturity_date: str = Field(alias="maturityDate")
    """Maturity date for the term deposit."""

    maturity_amount: Optional[str] = Field(default=UNSET, alias="maturityAmount")
    """Amount to be paid upon maturity. If absent, it implies the amount to paid is variable and cannot currently be
    calculated."""

    maturity_currency: Optional[str] = Field(default=UNSET, alias="maturityCurrency")
    """If absent assumes AUD."""

    maturity_instructions: MaturityInstructionsOrStr = Field(alias="maturityInstructions")
    """Current instructions on action to be taken at maturity. This includes default actions that may be specified in
    the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments."""


class TermDepositDict(TypedDict):
    lodgement_date: str
    maturity_date: str
    maturity_amount: NotRequired[str]
    maturity_currency: NotRequired[str]
    maturity_instructions: MaturityInstructionsOrStr
