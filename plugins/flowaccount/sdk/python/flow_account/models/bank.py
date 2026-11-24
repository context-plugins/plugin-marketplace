from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .bank_account import BankAccount, BankAccountDict
from .reconciled_document import ReconciledDocument, ReconciledDocumentDict


class Bank(SdkBaseModel):
    name: str
    country_code: OptionalNullable[str] = Field(default=UNSET, alias="countryCode")
    id: Optional[int] = UNSET
    bank_code: str = Field(alias="bankCode")
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    order_number: Optional[int] = Field(default=UNSET, alias="orderNumber")
    url: OptionalNullable[str] = UNSET
    is_custom_bank: Optional[bool] = Field(default=UNSET, alias="isCustomBank")
    bank_account: OptionalNullable[list[BankAccount]] = Field(default=UNSET, alias="bankAccount")
    reconciled_document: OptionalNullable[list[ReconciledDocument]] = Field(default=UNSET, alias="reconciledDocument")


class BankDict(TypedDict):
    name: str
    country_code: NotRequired[str | None]
    id: NotRequired[int]
    bank_code: str
    is_delete: NotRequired[bool]
    order_number: NotRequired[int]
    url: NotRequired[str | None]
    is_custom_bank: NotRequired[bool]
    bank_account: NotRequired[list[BankAccountDict] | None]
    reconciled_document: NotRequired[list[ReconciledDocumentDict] | None]
