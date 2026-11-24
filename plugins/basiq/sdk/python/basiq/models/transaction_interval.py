from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TransactionInterval(SdkBaseModel):
    from_: str = Field(alias="from")
    """Date of first transaction on this account"""

    to: str
    """Date of last transaction on this account"""


class TransactionIntervalDict(TypedDict):
    from_: str
    to: str
