from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .address1 import Address1, Address1Dict
from .company_owner2 import CompanyOwner2, CompanyOwner2Dict
from .enums.business_category_request import BusinessCategoryRequestOrStr
from .enums.organization_account_type_request import OrganizationAccountTypeRequestOrStr
from .enums.tax_id_type_request import TaxIdTypeRequestOrStr
from .mailing_address1 import MailingAddress1, MailingAddress1Dict
from .processing_options_bill_v3_organizations_api import (
    ProcessingOptionsBillV3OrganizationsApi,
    ProcessingOptionsBillV3OrganizationsApiDict,
)


class OrganizationUpdateRequestDto(SdkBaseModel):
    """Update an organization (zip code updated)"""

    name: Optional[str] = UNSET
    """Organization name"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Organization display name (DBA trade name)"""

    address: Optional[Address1] = UNSET
    mailing_address: Optional[MailingAddress1] = Field(default=UNSET, alias="mailingAddress")
    phone: Optional[str] = UNSET
    """Organization phone number"""

    company_owner: Optional[CompanyOwner2] = Field(default=UNSET, alias="companyOwner")
    tax_id: Optional[str] = Field(default=UNSET, alias="taxId")
    """Organization tax ID. This value is required by the IRS for tax purposes."""

    tax_id_type: Optional[TaxIdTypeRequestOrStr] = Field(default=UNSET, alias="taxIdType")
    industry: Optional[str] = UNSET
    """Organization industry"""

    business_category: Optional[BusinessCategoryRequestOrStr] = Field(default=UNSET, alias="businessCategory")
    account_type: Optional[OrganizationAccountTypeRequestOrStr] = Field(default=UNSET, alias="accountType")
    processing_options: Optional[ProcessingOptionsBillV3OrganizationsApi] = Field(
        default=UNSET, alias="processingOptions"
    )


class OrganizationUpdateRequestDtoDict(TypedDict):
    name: NotRequired[str]
    display_name: NotRequired[str]
    address: NotRequired[Address1Dict]
    mailing_address: NotRequired[MailingAddress1Dict]
    phone: NotRequired[str]
    company_owner: NotRequired[CompanyOwner2Dict]
    tax_id: NotRequired[str]
    tax_id_type: NotRequired[TaxIdTypeRequestOrStr]
    industry: NotRequired[str]
    business_category: NotRequired[BusinessCategoryRequestOrStr]
    account_type: NotRequired[OrganizationAccountTypeRequestOrStr]
    processing_options: NotRequired[ProcessingOptionsBillV3OrganizationsApiDict]
