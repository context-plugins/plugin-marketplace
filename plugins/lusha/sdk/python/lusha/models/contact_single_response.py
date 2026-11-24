from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact_error import ContactError, ContactErrorDict
from .contact_with_company import ContactWithCompany, ContactWithCompanyDict


class ContactSingleResponse(SdkBaseModel):
    error: ContactError
    is_credit_charged: bool = Field(alias="isCreditCharged")
    data: Optional[ContactWithCompany] = UNSET


class ContactSingleResponseDict(TypedDict):
    error: ContactErrorDict
    is_credit_charged: bool
    data: NotRequired[ContactWithCompanyDict]
