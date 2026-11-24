from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class NominateBankAccountUserRequestDto(SdkBaseModel):
    """Nominate a bank account user"""

    user_id: str = Field(alias="userId")
    """BILL-generated ID of the user. The value begins with ``006``."""

    bank_account_id: str = Field(alias="bankAccountId")
    """BILL-generated ID of the bank account. The value begins with ``bac``.

    **Note**: The bank account ``status`` must be set as ``VERIFIED``."""


class NominateBankAccountUserRequestDtoDict(TypedDict):
    user_id: str
    bank_account_id: str
