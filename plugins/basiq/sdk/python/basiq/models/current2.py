from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Current2(SdkBaseModel):
    amount: str
    """Most recent irregular income payment amount"""

    date: str
    """Most recent irregular income payment date"""

    other_credit_label: str = Field(alias="otherCreditLabel")
    """Description of the other credit series e.g. 'former regular income'"""


class Current2Dict(TypedDict):
    amount: str
    date: str
    other_credit_label: str
