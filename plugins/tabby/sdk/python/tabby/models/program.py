from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Program(SdkBaseModel):
    """Details of the education program being paid for."""

    payment_tenure_months: int
    """Total payment plan tenure in months."""

    months_to_completion: int
    """Months remaining until program completion / graduation."""


class ProgramDict(TypedDict):
    payment_tenure_months: int
    months_to_completion: int
