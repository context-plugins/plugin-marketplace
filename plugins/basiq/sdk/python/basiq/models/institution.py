from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.tier_platform_connectors_api import TierPlatformConnectorsApiOrStr
from .enums.type_platform_connectors_api import TypePlatformConnectorsApiOrStr
from .logo import Logo, LogoDict


class Institution(SdkBaseModel):
    """ConnectorInstitutionResource connector Institution resource type"""

    type_: TypePlatformConnectorsApiOrStr = Field(alias="type")
    """Institution type identifier Bank BankInstitutionType BankInstitutionType institution type identifier for Banks
    Bank (Foreign) BankForeignInstitutionType BankForeignInstitutionType institution type identifier for Foreign banks
    Test Bank TestBankInstitutionType TestBankInstitutionType institution type identifier for Test banks Credit Union
    CreditUnionInstitutionType CreditUnionInstitutionType institution type identifier for Credit union institutions
    Financial Services FinancialServicesInstitutionType FinancialServicesInstitutionType institution type identifier for
    Financial service institutions Superannuation SuperannuationInstitutionType SuperannuationInstitutionType
    institution type identifier for Superannuation institutions Building Society BuildingSociety BuildingSociety
    institution type identifier for Building Society institutions Government Government Government institution type
    identifier for Government institutions"""

    name: str
    """Institution name"""

    short_name: str = Field(alias="shortName")
    """Institution short name"""

    tier: TierPlatformConnectorsApiOrStr
    """Institution tier identifier 1 TierOne TierOne tier identifier for tier1 institution 2 TierTwo TierTwo tier
    identifier for tier2 institution 3 TierThree TierThree tier identifier for tier3 institution 4 TierFour TierFour
    tier identifier for tier4 institution"""

    country: str
    """Institution country name"""

    cdr_faq: Optional[str] = Field(default=UNSET, alias="cdrFAQ")
    """A link for Data Holder (where available) to a page explaining CDR data sharing process."""

    cdr_email: Optional[str] = Field(default=UNSET, alias="cdrEmail")
    """The email address for CDR-related inquiries."""

    cdr_policy: Optional[str] = Field(default=UNSET, alias="cdrPolicy")
    """The URL to the CDR policy document detailing the institution's data practices and consumer rights."""

    cdr_provider_number: Optional[str] = Field(default=UNSET, alias="cdrProviderNumber")
    """A unique identifier assigned to the CDR institution by the CDR program."""

    abn: Optional[str] = UNSET
    """ABN for the Data Holder ( only available in openbanking )."""

    acn: Optional[str] = UNSET
    """ACN for the Data Holder ( only available in openbanking )."""

    logo: Logo
    """Institution logo resource type"""


class InstitutionDict(TypedDict):
    type_: TypePlatformConnectorsApiOrStr
    name: str
    short_name: str
    tier: TierPlatformConnectorsApiOrStr
    country: str
    cdr_faq: NotRequired[str]
    cdr_email: NotRequired[str]
    cdr_policy: NotRequired[str]
    cdr_provider_number: NotRequired[str]
    abn: NotRequired[str]
    acn: NotRequired[str]
    logo: LogoDict
