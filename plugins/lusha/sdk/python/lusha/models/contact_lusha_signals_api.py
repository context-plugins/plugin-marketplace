from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_lusha_signals_api import CompanyLushaSignalsApi, CompanyLushaSignalsApiDict


class ContactLushaSignalsApi(SdkBaseModel):
    id: str
    social_link: Optional[str] = UNSET
    full_name: Optional[str] = UNSET
    email: Optional[EmailStr] = UNSET
    companies: Optional[list[CompanyLushaSignalsApi]] = UNSET


class ContactLushaSignalsApiDict(TypedDict):
    id: str
    social_link: NotRequired[str]
    full_name: NotRequired[str]
    email: NotRequired[EmailStr]
    companies: NotRequired[list[CompanyLushaSignalsApiDict]]
