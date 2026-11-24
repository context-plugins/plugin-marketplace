from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .address_bill_v3_organizations_api import AddressBillV3OrganizationsApi, AddressBillV3OrganizationsApiDict
from .company_owner2 import CompanyOwner2, CompanyOwner2Dict
from .enums.business_category_response import BusinessCategoryResponseOrStr
from .enums.organization_account_type_response import OrganizationAccountTypeResponseOrStr
from .enums.tax_id_type_response import TaxIdTypeResponseOrStr
from .mailing_address import MailingAddress, MailingAddressDict
from .processing_options_bill_v3_organizations_api import (
    ProcessingOptionsBillV3OrganizationsApi,
    ProcessingOptionsBillV3OrganizationsApiDict,
)


class OrganizationResponseDto(SdkBaseModel):
    """Organization response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the organization. The value begins with ``008``."""

    archived: Optional[bool] = UNSET
    """Set as ``true`` if the organization is archived. You cannot archive an organization with the API."""

    name: Optional[str] = UNSET
    """Organization name"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Organization display name (DBA trade name)"""

    address: Optional[AddressBillV3OrganizationsApi] = UNSET
    mailing_address: Optional[MailingAddress] = Field(default=UNSET, alias="mailingAddress")
    phone: Optional[str] = UNSET
    """Organization phone number"""

    company_owner: Optional[CompanyOwner2] = Field(default=UNSET, alias="companyOwner")
    tax_id: Optional[str] = Field(default=UNSET, alias="taxId")
    """Organization tax ID. This value is required by the IRS for tax purposes."""

    tax_id_type: Optional[TaxIdTypeResponseOrStr] = Field(default=UNSET, alias="taxIdType")
    industry: Optional[str] = UNSET
    """Organization industry"""

    business_category: Optional[BusinessCategoryResponseOrStr] = Field(default=UNSET, alias="businessCategory")
    account_type: Optional[OrganizationAccountTypeResponseOrStr] = Field(default=UNSET, alias="accountType")
    processing_options: Optional[ProcessingOptionsBillV3OrganizationsApi] = Field(
        default=UNSET, alias="processingOptions"
    )
    partner_name: Optional[str] = Field(default=UNSET, alias="partnerName")
    """Partner name.

    This field is available only when select BILL partners create an organization. Partner name is part of the
    information that BILL uses to identify partners."""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""


class OrganizationResponseDtoDict(TypedDict):
    id: NotRequired[str]
    archived: NotRequired[bool]
    name: NotRequired[str]
    display_name: NotRequired[str]
    address: NotRequired[AddressBillV3OrganizationsApiDict]
    mailing_address: NotRequired[MailingAddressDict]
    phone: NotRequired[str]
    company_owner: NotRequired[CompanyOwner2Dict]
    tax_id: NotRequired[str]
    tax_id_type: NotRequired[TaxIdTypeResponseOrStr]
    industry: NotRequired[str]
    business_category: NotRequired[BusinessCategoryResponseOrStr]
    account_type: NotRequired[OrganizationAccountTypeResponseOrStr]
    processing_options: NotRequired[ProcessingOptionsBillV3OrganizationsApiDict]
    partner_name: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
