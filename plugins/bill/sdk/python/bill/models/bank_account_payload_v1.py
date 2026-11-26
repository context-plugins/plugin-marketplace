from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .bank_account_defaults import BankAccountDefaults, BankAccountDefaultsDict


class BankAccountPayloadV1(SdkBaseModel):
    """Bank Account transformed payload."""

    id: Optional[str] = UNSET
    archived: Optional[bool] = UNSET
    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    name_on_account: Optional[str] = Field(default=UNSET, alias="nameOnAccount")
    routing_number: Optional[str] = Field(default=UNSET, alias="routingNumber")
    bank_name: Optional[str] = Field(default=UNSET, alias="bankName")
    status: Optional[str] = UNSET
    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    type_: Optional[str] = Field(default=UNSET, alias="type")
    owner_type: Optional[str] = Field(default=UNSET, alias="ownerType")
    default: Optional[BankAccountDefaults] = UNSET
    """Bank payment default values for BILL AP and AR operations."""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")


class BankAccountPayloadV1Dict(TypedDict):
    id: NotRequired[str]
    archived: NotRequired[bool]
    account_number: NotRequired[str]
    name_on_account: NotRequired[str]
    routing_number: NotRequired[str]
    bank_name: NotRequired[str]
    status: NotRequired[str]
    created_by: NotRequired[str]
    type_: NotRequired[str]
    owner_type: NotRequired[str]
    default: NotRequired[BankAccountDefaultsDict]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
