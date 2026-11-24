from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .business_address import BusinessAddress, BusinessAddressDict
from .enums.business_id_no_type import BusinessIdNoTypeOrStr
from .resource_link import ResourceLink, ResourceLinkDict


class UserPostResponse(SdkBaseModel):
    """User object with details if the creation succeeded."""

    type_: str = Field(alias="type")
    """Type of the response, always "user"."""

    id: str
    """A string that uniquely identifies the user."""

    email: Optional[EmailStr] = UNSET
    """The end-users email address."""

    mobile: str
    """The end-users mobile number."""

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

    links: ResourceLink
    """Link object containing a link to the resource, self reference."""


class UserPostResponseDict(TypedDict):
    type_: str
    id: str
    email: NotRequired[EmailStr]
    mobile: str
    first_name: NotRequired[str]
    middle_name: NotRequired[str]
    last_name: NotRequired[str]
    business_name: NotRequired[str]
    business_id_no: NotRequired[str]
    business_id_no_type: NotRequired[BusinessIdNoTypeOrStr]
    business_address: NotRequired[BusinessAddressDict]
    verification_status: NotRequired[bool]
    verification_date: NotRequired[str]
    links: ResourceLinkDict
