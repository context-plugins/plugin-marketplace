from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .company_response import CompanyResponse, CompanyResponseDict
from .contact_response import ContactResponse, ContactResponseDict


class BulkPersonResponse(SdkBaseModel):
    contacts: dict[str, ContactResponse]
    """The contacts of the bulk person output, keyed by contactId"""

    companies: dict[str, CompanyResponse]
    """The companies of the bulk person output, keyed by companyId"""


class BulkPersonResponseDict(TypedDict):
    contacts: dict[str, ContactResponseDict]
    companies: dict[str, CompanyResponseDict]
