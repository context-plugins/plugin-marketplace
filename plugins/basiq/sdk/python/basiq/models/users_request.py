from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .business_address import BusinessAddress, BusinessAddressDict
from .enums.business_id_no_type import BusinessIdNoTypeOrStr


class UsersRequest(SdkBaseModel):
    email: Optional[str] = UNSET
    """The end-users email address. Mandatory if mobile is not supplied."""

    mobile: Optional[str] = UNSET
    """The end-users mobile number, supplied in international format. +[country-code][mobileno]. Mandatory if email is
    not supplied."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """The end-users first name as an optional additional parameter."""

    middle_name: Optional[str] = Field(default=UNSET, alias="middleName")
    """The end-users middle name as an optional additional parameter."""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """The end-users last name as an optional additional parameter."""

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


class UsersRequestDict(TypedDict):
    email: NotRequired[str]
    mobile: NotRequired[str]
    first_name: NotRequired[str]
    middle_name: NotRequired[str]
    last_name: NotRequired[str]
    business_name: NotRequired[str]
    business_id_no: NotRequired[str]
    business_id_no_type: NotRequired[BusinessIdNoTypeOrStr]
    business_address: NotRequired[BusinessAddressDict]
    verification_status: NotRequired[bool]
    verification_date: NotRequired[str]
