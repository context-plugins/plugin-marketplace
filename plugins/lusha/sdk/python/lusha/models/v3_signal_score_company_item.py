from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3SignalScoreCompanyItem(SdkBaseModel):
    """Must contain exactly one of id, domain, name, or email."""

    client_reference_id: Optional[str] = Field(default=UNSET, alias="clientReferenceId")
    """Caller-supplied token echoed back on the matching result."""

    id: Optional[str] = UNSET
    """Encrypted Lusha company ID (vN.…). Legacy numeric IDs accepted during the transition window."""

    domain: Optional[str] = UNSET
    name: Optional[str] = UNSET
    email: Optional[EmailStr] = UNSET
    """Must be a valid email address; only the domain part is used for resolution. A malformed email is rejected with
    400."""


class V3SignalScoreCompanyItemDict(TypedDict):
    client_reference_id: NotRequired[str]
    id: NotRequired[str]
    domain: NotRequired[str]
    name: NotRequired[str]
    email: NotRequired[EmailStr]
