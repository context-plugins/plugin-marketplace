from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.gender import GenderOrStr


class Passenger1(SdkBaseModel):
    full_name: Optional[str] = UNSET
    first_name: Optional[str] = UNSET
    last_name: Optional[str] = UNSET
    dob: Optional[str] = UNSET
    """ISO 8601 date of birth, e.g. 2018-10-17"""

    document_type: Optional[str] = UNSET
    document_id: Optional[str] = UNSET
    expiration_id_date: Optional[Date] = UNSET
    """ISO 8601 date e.g. 2018-10-17"""

    nationality: Optional[str] = UNSET
    gender: Optional[GenderOrStr] = UNSET
    """F - female, M - male, O - other"""


class Passenger1Dict(TypedDict):
    full_name: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    dob: NotRequired[str]
    document_type: NotRequired[str]
    document_id: NotRequired[str]
    expiration_id_date: NotRequired[Date]
    nationality: NotRequired[str]
    gender: NotRequired[GenderOrStr]
