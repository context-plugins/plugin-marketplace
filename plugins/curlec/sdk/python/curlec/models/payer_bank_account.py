from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity4 import Entity4OrStr


class PayerBankAccount(SdkBaseModel):
    """Payer's bank account details."""

    id: Optional[str] = UNSET
    entity: Optional[Entity4OrStr] = UNSET
    ifsc: Optional[str] = UNSET
    bank_name: Optional[str] = UNSET
    name: Optional[str] = UNSET
    """Account holder name."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    account_number: Optional[str] = UNSET


class PayerBankAccountDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[Entity4OrStr]
    ifsc: NotRequired[str]
    bank_name: NotRequired[str]
    name: NotRequired[str]
    notes: NotRequired[dict[str, str]]
    account_number: NotRequired[str]
