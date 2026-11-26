from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateTxRequestDto(SdkBaseModel):
    """Update a transaction"""

    budget_id: str = Field(alias="budgetId")
    """BILL-generated ID or UUID of the budget linked with the transaction"""


class UpdateTxRequestDtoDict(TypedDict):
    budget_id: str
