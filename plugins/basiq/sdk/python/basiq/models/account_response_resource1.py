from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .class1 import Class1, Class1Dict
from .enums.account_ownership import AccountOwnershipOrStr
from .enums.status import StatusOrStr
from .meta import Meta, MetaDict
from .purse import Purse, PurseDict
from .transaction_interval import TransactionInterval, TransactionIntervalDict


class AccountResponseResource1(SdkBaseModel):
    """Container object with account details"""

    type_: str = Field(alias="type")
    """Always "account"."""

    id: str
    """Uniquely identifies the account."""

    name: str
    """Mapped directly from CDR 'nickname'. Represents the user-defined name for the account without fallback to
    displayName."""

    display_name: str = Field(alias="displayName")
    """Mapped directly from CDR 'displayName'. Represents the institution-defined display name for the account."""

    deposit_rate: Optional[str] = Field(default=UNSET, alias="depositRate")
    """current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API
    call."""

    lending_rate: Optional[str] = Field(default=UNSET, alias="lendingRate")
    """The current rate to calculate interest payable being applied to lending balances as it stands at the time of the
    API call."""

    bsb: Optional[str] = UNSET
    """The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no
    punctuation or spaces."""

    unmasked_acc_num: Optional[str] = Field(default=UNSET, alias="unmaskedAccNum")
    """The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI
    compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces."""

    creation_date: Optional[str] = Field(default=UNSET, alias="creationDate")
    """Date that the account was created (if known)."""

    account_holder: str | None = Field(alias="accountHolder")
    """The name of the account holder as returned by the institution. No formatting is applied. Returns a string or null
    when not available."""

    masked_number: Optional[str] = Field(default=UNSET, alias="maskedNumber")
    """A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number."""

    account_ownership: AccountOwnershipOrStr = Field(alias="accountOwnership")
    """Value indicating the number of customers that have ownership of the account, according to the data holder's
    definition of account ownership. Does not indicate that all account owners are eligible consumers."""

    is_owned: bool = Field(alias="isOwned")
    """Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate
    sole ownership, however. If not present then 'true' is assumed."""

    amortised_limit: Optional[str] = Field(default=UNSET, alias="amortisedLimit")
    """Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent."""

    bundle_name: Optional[str] = Field(default=UNSET, alias="bundleName")
    """Optional field to indicate if this account is part of a bundle that is providing additional benefit to the
    customer."""

    purses: Optional[list[Purse]] = UNSET
    """Optional array of balances for the account in other currencies. Included to support accounts that support
    multi-currency purses such as Travel Cards."""

    account_no: str = Field(alias="accountNo")
    """BSB + account number."""

    available_funds: str | None = Field(alias="availableFunds")
    """Funds that are available to an account holder for withdrawal or other use. This may include funds from an
    overdraft facility or line of credit. As well as funds classified as the available balance, such as from cleared and
    existing deposits."""

    balance: str | None
    """Amount of funds in the account right now - excluding any pending transactions. For a credit card this would be
    zero or the minus amount spent."""

    credit_limit: str | None = Field(alias="creditLimit")
    """Eligible account types are credit-card, loan and mortgage."""

    class_: Class1 = Field(alias="class")
    """Describes the class(type) of accounts. - transaction - savings - credit-card - mortgage - loan - investment -
    term-deposit - insurance - foreign - unknown"""

    connection: str
    """The id of the connection resource that was used to retrieve the account."""

    currency: str
    """The currency the funds are stored in, using ISO 4217 standard."""

    institution: str
    """The id of the institution resource the account originated from."""

    last_updated: str = Field(alias="lastUpdated")
    """Timestamp of last update, UTC, RFC 3339 format e.g. "2017-09-28T13:39:33Z"
    """

    status: StatusOrStr
    """Account status"""

    meta: Optional[Meta] = UNSET
    transaction_intervals: list[TransactionInterval] = Field(alias="transactionIntervals")
    """An array of date intervals indicating the coverage of the transaction data relating to the account. Will return a
    single element for accounts sourced from a single bank connection. Will return multiple elements in cases where
    there have been multiple PDF/CSV uploads for an account."""


class AccountResponseResource1Dict(TypedDict):
    type_: str
    id: str
    name: str
    display_name: str
    deposit_rate: NotRequired[str]
    lending_rate: NotRequired[str]
    bsb: NotRequired[str]
    unmasked_acc_num: NotRequired[str]
    creation_date: NotRequired[str]
    account_holder: str | None
    masked_number: NotRequired[str]
    account_ownership: AccountOwnershipOrStr
    is_owned: bool
    amortised_limit: NotRequired[str]
    bundle_name: NotRequired[str]
    purses: NotRequired[list[PurseDict]]
    account_no: str
    available_funds: str | None
    balance: str | None
    credit_limit: str | None
    class_: Class1Dict
    connection: str
    currency: str
    institution: str
    last_updated: str
    status: StatusOrStr
    meta: NotRequired[MetaDict]
    transaction_intervals: list[TransactionIntervalDict]
