from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .default2 import Default2, Default2Dict
from .enums.card_account_status import CardAccountStatusOrStr
from .enums.card_account_type import CardAccountTypeOrStr
from .expiration import Expiration, ExpirationDict


class CardAccountResponseDto(SdkBaseModel):
    """Card Account response DTO."""

    id: str
    """BILL-generated ID of the card account. The value begins with ``cat``."""

    archived: bool
    """Set as ``true`` if the card account is archived"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""

    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    """BILL-generated ID of the user that created the card account. The value begins with ``006``."""

    issuing_bank_name: Optional[str] = Field(default=UNSET, alias="issuingBankName")
    """Card issuing bank name"""

    name_on_account: Optional[str] = Field(default=UNSET, alias="nameOnAccount")
    """Full name on card account"""

    brand: Optional[str] = UNSET
    """Card brand"""

    type_: Optional[CardAccountTypeOrStr] = Field(default=UNSET, alias="type")
    status: Optional[CardAccountStatusOrStr] = UNSET
    last4: Optional[str] = UNSET
    """Card last four digits"""

    expiration: Optional[Expiration] = UNSET
    default: Optional[Default2] = UNSET


class CardAccountResponseDtoDict(TypedDict):
    id: str
    archived: bool
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    created_by: NotRequired[str]
    issuing_bank_name: NotRequired[str]
    name_on_account: NotRequired[str]
    brand: NotRequired[str]
    type_: NotRequired[CardAccountTypeOrStr]
    status: NotRequired[CardAccountStatusOrStr]
    last4: NotRequired[str]
    expiration: NotRequired[ExpirationDict]
    default: NotRequired[Default2Dict]
