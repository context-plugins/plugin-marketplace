from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.account_type import AccountTypeOrStr
from .enums.category import CategoryOrStr


class Account(SdkBaseModel):
    id: Optional[UUID] = UNSET
    number: Optional[str] = UNSET
    """The account number"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The account display name"""

    category: Optional[CategoryOrStr] = UNSET
    """The account category"""

    sub_category: Optional[str] = Field(default=UNSET, alias="subCategory")
    """The account subcategory"""

    blocked: Optional[bool] = UNSET
    """Whether the account is blocked"""

    account_type: Optional[AccountTypeOrStr] = Field(default=UNSET, alias="accountType")
    """The account type"""

    direct_posting: Optional[bool] = Field(default=UNSET, alias="directPosting")
    """Whether direct posting is allowed"""

    net_change: Optional[float] = Field(default=UNSET, alias="netChange")
    """The net change"""

    consolidation_translation_method: Optional[str] = Field(default=UNSET, alias="consolidationTranslationMethod")
    consolidation_debit_account: Optional[str] = Field(default=UNSET, alias="consolidationDebitAccount")
    consolidation_credit_account: Optional[str] = Field(default=UNSET, alias="consolidationCreditAccount")
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")


class AccountDict(TypedDict):
    id: NotRequired[UUID]
    number: NotRequired[str]
    display_name: NotRequired[str]
    category: NotRequired[CategoryOrStr]
    sub_category: NotRequired[str]
    blocked: NotRequired[bool]
    account_type: NotRequired[AccountTypeOrStr]
    direct_posting: NotRequired[bool]
    net_change: NotRequired[float]
    consolidation_translation_method: NotRequired[str]
    consolidation_debit_account: NotRequired[str]
    consolidation_credit_account: NotRequired[str]
    last_modified_date_time: NotRequired[RFC3339DateTime]
