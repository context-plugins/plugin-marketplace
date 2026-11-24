from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.package_status import PackageStatusOrInt
from .enums.payment_channel import PaymentChannelOrInt
from .enums.upgrade_type import UpgradeTypeOrInt
from .package_list import PackageList, PackageListDict


class CompanySubscription(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    package_id: Optional[int] = Field(default=UNSET, alias="packageId")
    package_status: Optional[PackageStatusOrInt] = Field(default=UNSET, alias="packageStatus")
    """10 = Pending 30 = Approve 50 = Suspend 70 = Terminated 90 = Delete"""

    transaction_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="transactionDate")
    transaction_id: OptionalNullable[str] = Field(default=UNSET, alias="transactionId")
    expiration_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expirationDate")
    coupon_id: OptionalNullable[int] = Field(default=UNSET, alias="couponId")
    paid_by: Optional[int] = Field(default=UNSET, alias="paidBy")
    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    days: Optional[int] = UNSET
    package_days: Optional[int] = Field(default=UNSET, alias="packageDays")
    quantity: OptionalNullable[int] = UNSET
    type_: Optional[UpgradeTypeOrInt] = Field(default=UNSET, alias="type")
    """1 = Upgrade 3 = Renew 5 = ChangePackage"""

    payment_channel: Optional[PaymentChannelOrInt] = Field(default=UNSET, alias="paymentChannel")
    value: OptionalNullable[float] = UNSET
    is_withheld: Optional[bool] = Field(default=UNSET, alias="isWithheld")
    withheld: OptionalNullable[float] = UNSET
    internal_file: OptionalNullable[str] = Field(default=UNSET, alias="internalFile")
    invoice_id: OptionalNullable[int] = Field(default=UNSET, alias="invoiceId")
    remarks: OptionalNullable[str] = UNSET
    is_request_invoice: OptionalNullable[bool] = Field(default=UNSET, alias="isRequestInvoice")
    add_on: OptionalNullable[str] = Field(default=UNSET, alias="addOn")
    package_list: Optional[PackageList] = Field(default=UNSET, alias="packageList")
    pay_slip_image_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="paySlipImageDate")
    pay_slip_image_time: OptionalNullable[str] = Field(default=UNSET, alias="paySlipImageTime")
    pay_slip_image_amount: OptionalNullable[float] = Field(default=UNSET, alias="paySlipImageAmount")
    pay_slip_image_contact: OptionalNullable[str] = Field(default=UNSET, alias="paySlipImageContact")


class CompanySubscriptionDict(TypedDict):
    id: NotRequired[int]
    company_id: NotRequired[int]
    package_id: NotRequired[int]
    package_status: NotRequired[PackageStatusOrInt]
    transaction_date: NotRequired[RFC3339DateTime]
    transaction_id: NotRequired[str | None]
    expiration_date: NotRequired[RFC3339DateTime]
    coupon_id: NotRequired[int | None]
    paid_by: NotRequired[int]
    created_on: NotRequired[RFC3339DateTime]
    modified_on: NotRequired[RFC3339DateTime]
    days: NotRequired[int]
    package_days: NotRequired[int]
    quantity: NotRequired[int | None]
    type_: NotRequired[UpgradeTypeOrInt]
    payment_channel: NotRequired[PaymentChannelOrInt]
    value: NotRequired[float | None]
    is_withheld: NotRequired[bool]
    withheld: NotRequired[float | None]
    internal_file: NotRequired[str | None]
    invoice_id: NotRequired[int | None]
    remarks: NotRequired[str | None]
    is_request_invoice: NotRequired[bool | None]
    add_on: NotRequired[str | None]
    package_list: NotRequired[PackageListDict]
    pay_slip_image_date: NotRequired[RFC3339DateTime | None]
    pay_slip_image_time: NotRequired[str | None]
    pay_slip_image_amount: NotRequired[float | None]
    pay_slip_image_contact: NotRequired[str | None]
