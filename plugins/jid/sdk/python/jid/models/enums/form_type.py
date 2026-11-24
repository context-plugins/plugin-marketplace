from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FormType(str, Enum):
    SELLER_APPLICATION = "seller_application"
    ACQUISITION_INQUIRY = "acquisition_inquiry"
    BUYER_REGISTRATION = "buyer_registration"
    NDA_REQUEST = "nda_request"
    SOURCING_REQUEST = "sourcing_request"
    LISTING_REQUEST = "listing_request"
    CONSULTATION = "consultation"
    PARTNERSHIP = "partnership"
    CONTACT = "contact"
    OTHER = "other"
    VENDOR_CLAIM = "vendor_claim"
    LISTING_CLAIM = "listing_claim"
    SPONSOR_INQUIRY = "sponsor_inquiry"
    ADVERTISER = "advertiser"
    BROKER_REQUEST = "broker_request"
    BUYER_INQUIRY = "buyer_inquiry"
    SELLER_INQUIRY = "seller_inquiry"
    DATA_PURCHASE = "data_purchase"

    __str__ = str.__str__


FormTypeOrStr: TypeAlias = Annotated[FormType | str, open_enum_validator(FormType)]
