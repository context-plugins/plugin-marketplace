from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bank_account_owner_type import BankAccountOwnerTypeOrStr
from .enums.bank_account_type import BankAccountTypeOrStr
from .enums.currency_code import CurrencyCodeOrStr
from .name_value import NameValue, NameValueDict


class VendorBankAccountRequestDto(SdkBaseModel):
    """Vendor bank account details"""

    name_on_account: Optional[str] = Field(default=UNSET, alias="nameOnAccount")
    """Vendor bank account name"""

    account_number: str = Field(alias="accountNumber")
    """Vendor bank account number. This field is required for enabling electronic payments to vendors.

    See `Create an international vendor <https://developer.bill.com/docs/creating-an-international-vendor>`__ for more
    information on how to set up vendor payment information for an international (not US) vendor."""

    routing_number: Optional[str] = Field(default=UNSET, alias="routingNumber")
    """Vendor bank routing number. This field is required for enabling electronic payments to vendors. This field is
    empty for an IBAN ``accountNumber``.

    See `Create an international vendor <https://developer.bill.com/docs/creating-an-international-vendor>`__ for more
    information on how to set up vendor payment information for an international (not US) vendor."""

    type_: Optional[BankAccountTypeOrStr] = Field(default=UNSET, alias="type")
    owner_type: Optional[BankAccountOwnerTypeOrStr] = Field(default=UNSET, alias="ownerType")
    regulatory_fields: Optional[list[NameValue]] = Field(default=UNSET, alias="regulatoryFields")
    """International bank account regulatory information. The ``name`` and ``value`` fields are required for each
    required bank account regulatory field.

    See `Create an international vendor <https://developer.bill.com/docs/creating-an-international-vendor>`__ for more
    information on how to set ``regulatoryFields``."""

    payment_currency: Optional[CurrencyCodeOrStr] = Field(default=UNSET, alias="paymentCurrency")


class VendorBankAccountRequestDtoDict(TypedDict):
    name_on_account: NotRequired[str]
    account_number: str
    routing_number: NotRequired[str]
    type_: NotRequired[BankAccountTypeOrStr]
    owner_type: NotRequired[BankAccountOwnerTypeOrStr]
    regulatory_fields: NotRequired[list[NameValueDict]]
    payment_currency: NotRequired[CurrencyCodeOrStr]
