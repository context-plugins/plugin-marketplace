from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NetworkManagedBy(SdkBaseModel):
    """Metadata about who manages the network for the organization."""

    name: Optional[str] = UNSET
    """Network managed by name"""

    email: Optional[str] = UNSET
    """Network managed by email address"""

    email_domain: Optional[str] = Field(default=UNSET, alias="emailDomain")
    """Verified email address domain"""


class NetworkManagedByDict(TypedDict):
    name: NotRequired[str]
    email: NotRequired[str]
    email_domain: NotRequired[str]
