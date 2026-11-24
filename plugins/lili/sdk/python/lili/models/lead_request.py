from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .address_data2 import AddressData2, AddressData2Dict
from .address_data3 import AddressData3, AddressData3Dict
from .address_data4 import AddressData4, AddressData4Dict
from .document_data import DocumentData, DocumentDataDict
from .edd_question_data import EddQuestionData, EddQuestionDataDict
from .enums.business_type import BusinessTypeOrStr
from .ubo_data import UboData, UboDataDict


class LeadRequest(SdkBaseModel):
    """Contains the information about an account partner wants to register"""

    email: EmailStr
    """The unique ID of the webhook"""

    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """Customer phone number. E.164 format."""

    ssn: Optional[str] = UNSET
    """Customer SSN"""

    birth_date: Optional[Date] = Field(default=UNSET, alias="birthDate")
    """Customer birth date"""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """Customer first name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """Customer last name"""

    line1: Optional[str] = UNSET
    """Customer address line1"""

    line2: Optional[str] = UNSET
    """Customer address line2"""

    city: Optional[str] = UNSET
    """Customer address city"""

    state: Optional[str] = UNSET
    """Customer address 2 letter state code"""

    country: Optional[str] = UNSET
    """Customer country of residence (Alpha 2, ISO 3166 format)"""

    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    """Customer address postal code"""

    ein: Optional[str] = UNSET
    """Business EIN"""

    business_name: Optional[str] = Field(default=UNSET, alias="businessName")
    """Business name"""

    business_address: Optional[AddressData2] = Field(default=UNSET, alias="businessAddress")
    """The physical (operational) address where the business operates day-to-day. Must be a US address. Used as the
    address in the Beneficial Ownership file."""

    registered_business_address: Optional[AddressData3] = Field(default=UNSET, alias="registeredBusinessAddress")
    """The registered business address (the address the business provided to the state of formation to accept legal
    process). Can be outside of the US, in case only a registered agent address is available. Used as the billing
    address and presented on bank statements and invoices."""

    mailing_address: Optional[AddressData4] = Field(default=UNSET, alias="mailingAddress")
    """Business mailing address. Optional. Must be in the US, can be a registered agent address. Used as the card
    shipment address for Non-US applicants when selected."""

    business_type: Optional[BusinessTypeOrStr] = Field(default=UNSET, alias="businessType")
    """Incorporation type of the business"""

    incorporation_state: Optional[str] = Field(default=UNSET, alias="incorporationState")
    """State the business was incorporated in"""

    unique_id: Optional[str] = Field(default=UNSET, alias="uniqueId")
    """Unique ID to be used by the partner to identify the customer"""

    duns: Optional[str] = UNSET
    """Business DUNS number"""

    passport_number: Optional[str] = Field(default=UNSET, alias="passportNumber")
    """Passport number"""

    id_gov_number: Optional[str] = Field(default=UNSET, alias="idGovNumber")
    """Non US customer National ID number"""

    id_country: Optional[str] = Field(default=UNSET, alias="idCountry")
    """National ID country (Alpha 2, ISO 3166 format). Note that if a passport number is supplied, this is the passport
    issuance country"""

    id_expiration_date: Optional[str] = Field(default=UNSET, alias="idExpirationDate")
    """National ID expiration date. Note that if passport number is supplied, this is the passport expiration date"""

    ownership_percent: Optional[float] = Field(default=UNSET, alias="ownershipPercent")
    """The ownership percentage of the customer"""

    document_urls: Optional[list[str | None]] = Field(default=UNSET, alias="documentUrls")
    """A list of URLs containing the business documents of the customer"""

    document_data_list: Optional[list[DocumentData]] = Field(default=UNSET, alias="documentDataList")
    """A list of Base64 encoded documents"""

    ubo_list: Optional[list[UboData]] = Field(default=UNSET, alias="uboList")
    """A list of UBOs with >25% of the business ownership"""

    naics_code: Optional[str] = Field(default=UNSET, alias="naicsCode")
    """NAICS code of the business"""

    campaign: Optional[str] = UNSET
    """Campaign code"""

    metadata: Optional[dict[str, str]] = UNSET
    """A map of key-value pairs to store additional partner-specific data on the customer"""

    edd_question_data: Optional[list[EddQuestionData]] = Field(default=UNSET, alias="eddQuestionData")
    """A list of EDD questions and answers"""


class LeadRequestDict(TypedDict):
    email: EmailStr
    phone_number: NotRequired[str]
    ssn: NotRequired[str]
    birth_date: NotRequired[Date]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    line1: NotRequired[str]
    line2: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    postal_code: NotRequired[str]
    ein: NotRequired[str]
    business_name: NotRequired[str]
    business_address: NotRequired[AddressData2Dict]
    registered_business_address: NotRequired[AddressData3Dict]
    mailing_address: NotRequired[AddressData4Dict]
    business_type: NotRequired[BusinessTypeOrStr]
    incorporation_state: NotRequired[str]
    unique_id: NotRequired[str]
    duns: NotRequired[str]
    passport_number: NotRequired[str]
    id_gov_number: NotRequired[str]
    id_country: NotRequired[str]
    id_expiration_date: NotRequired[str]
    ownership_percent: NotRequired[float]
    document_urls: NotRequired[list[str | None]]
    document_data_list: NotRequired[list[DocumentDataDict]]
    ubo_list: NotRequired[list[UboDataDict]]
    naics_code: NotRequired[str]
    campaign: NotRequired[str]
    metadata: NotRequired[dict[str, str]]
    edd_question_data: NotRequired[list[EddQuestionDataDict]]
