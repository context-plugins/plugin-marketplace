from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class ClientModel(SdkBaseModel):
    full_name: Optional[str] = UNSET
    first_name: str
    last_name: str
    dob: Optional[str] = UNSET
    """ISO 8601 date of birth, e.g. 2018-10-17"""

    document_type: str
    document_id: Optional[str] = UNSET
    expiration_id_dt: Optional[Date] = UNSET
    """ISO 8601 date e.g. 2018-10-17"""

    nationality: Optional[str] = UNSET
    gender: Optional[Any] = UNSET
    """F - female, M - male, O - other"""


class ClientModelDict(TypedDict):
    full_name: NotRequired[str]
    first_name: str
    last_name: str
    dob: NotRequired[str]
    document_type: str
    document_id: NotRequired[str]
    expiration_id_dt: NotRequired[Date]
    nationality: NotRequired[str]
    gender: NotRequired[Any]
