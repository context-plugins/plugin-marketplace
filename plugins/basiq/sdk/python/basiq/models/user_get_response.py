from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .business_address import BusinessAddress, BusinessAddressDict
from .enums.business_id_no_type import BusinessIdNoTypeOrStr
from .get_user_links import GetUserLinks, GetUserLinksDict
from .user_get_account import UserGetAccount, UserGetAccountDict
from .user_get_connection import UserGetConnection, UserGetConnectionDict


class UserGetResponse(SdkBaseModel):
    """User object with details if the creation succeeded."""

    type_: str = Field(alias="type")
    """Always "user"."""

    id: str
    """User identification."""

    email: EmailStr
    """User email or empty."""

    mobile: str
    """User mobile number, or empty."""

    name: str
    """Name, or empty."""

    first_name: str = Field(alias="firstName")
    """firstName, or empty"""

    middle_name: str = Field(alias="middleName")
    """middleName, or empty"""

    last_name: str = Field(alias="lastName")
    """lastName, or empty"""

    business_name: Optional[str] = Field(default=UNSET, alias="businessName")
    """The official name of the business."""

    business_id_no: Optional[str] = Field(default=UNSET, alias="businessIdNo")
    """This number is used to identify a business when they’re dealing with the government, other businesses, and the
    public."""

    business_id_no_type: Optional[BusinessIdNoTypeOrStr] = Field(default=UNSET, alias="businessIdNoType")
    """Type of business ID could be ABN Or ACN."""

    business_address: Optional[BusinessAddress] = Field(default=UNSET, alias="businessAddress")
    verification_status: Optional[bool] = Field(default=UNSET, alias="verificationStatus")
    """Indicates if the business information provided is verified against the Australian Business Register."""

    verification_date: Optional[str] = Field(default=UNSET, alias="verificationDate")
    """when the verification was done."""

    connections: UserGetConnection
    """Container object containing connection data."""

    accounts: UserGetAccount
    """Container object containing account data."""

    links: GetUserLinks
    """Object containing links to resources."""


class UserGetResponseDict(TypedDict):
    type_: str
    id: str
    email: EmailStr
    mobile: str
    name: str
    first_name: str
    middle_name: str
    last_name: str
    business_name: NotRequired[str]
    business_id_no: NotRequired[str]
    business_id_no_type: NotRequired[BusinessIdNoTypeOrStr]
    business_address: NotRequired[BusinessAddressDict]
    verification_status: NotRequired[bool]
    verification_date: NotRequired[str]
    connections: UserGetConnectionDict
    accounts: UserGetAccountDict
    links: GetUserLinksDict
