from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PartnerLoginRequestDto(SdkBaseModel):
    """API partner login"""

    app_key: str = Field(alias="appKey")
    """Application key sent to you by BILL when you create a partner account"""

    username: str
    """Email address used to sign in to your BILL account"""

    password: str
    """Password used to sign in to your BILL account"""


class PartnerLoginRequestDtoDict(TypedDict):
    app_key: str
    username: str
    password: str
