from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SecurityKeyDto(SdkBaseModel):
    """Security key used for signing outgoing messages."""

    security_key: Optional[str] = Field(default=UNSET, alias="securityKey")
    """BILL-generated security key"""


class SecurityKeyDtoDict(TypedDict):
    security_key: NotRequired[str]
