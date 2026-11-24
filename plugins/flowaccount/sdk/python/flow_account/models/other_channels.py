from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.banking_channels_status import BankingChannelsStatusOrInt
from .enums.other_channels_type import OtherChannelsTypeOrInt
from .enums.payment_channels_type import PaymentChannelsTypeOrInt

if TYPE_CHECKING:
    from .bank import Bank, BankDict
    from .chart_of_account import ChartOfAccount, ChartOfAccountDict


class OtherChannels(SdkBaseModel):
    id: Optional[int] = UNSET
    company_id: int = Field(alias="companyId")
    chart_of_account_id: OptionalNullable[int] = Field(default=UNSET, alias="chartOfAccountId")
    chart_of_account: Optional[ChartOfAccount] = Field(default=UNSET, alias="chartOfAccount")
    name: OptionalNullable[str] = UNSET
    status: Optional[BankingChannelsStatusOrInt] = UNSET
    """1 = Active 3 = InActive"""

    channel: Optional[PaymentChannelsTypeOrInt] = UNSET
    """1 = POS 3 = PayemntGateWay 5 = EDC 7 = ECommerce"""

    type_: Optional[OtherChannelsTypeOrInt] = Field(default=UNSET, alias="type")
    """1 = Receive 3 = ReceivePay 5 = Pay"""

    description: OptionalNullable[str] = UNSET
    bank_id: OptionalNullable[int] = Field(default=UNSET, alias="bankId")
    bank: Optional[Bank] = UNSET
    bank_name: OptionalNullable[str] = Field(default=UNSET, alias="bankName")
    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    is_delete: bool = Field(default=False, alias="isDelete")


class OtherChannelsDict(TypedDict):
    id: NotRequired[int]
    company_id: int
    chart_of_account_id: NotRequired[int | None]
    chart_of_account: NotRequired[ChartOfAccountDict]
    name: NotRequired[str | None]
    status: NotRequired[BankingChannelsStatusOrInt]
    channel: NotRequired[PaymentChannelsTypeOrInt]
    type_: NotRequired[OtherChannelsTypeOrInt]
    description: NotRequired[str | None]
    bank_id: NotRequired[int | None]
    bank: NotRequired[BankDict]
    bank_name: NotRequired[str | None]
    created_on: NotRequired[RFC3339DateTime]
    modified_on: NotRequired[RFC3339DateTime]
    is_delete: NotRequired[bool]
