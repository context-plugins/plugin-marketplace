from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignupSession(SdkBaseModel):
    custom_token: str = Field(alias="customToken")
    """Firebase custom token for the tenant admin; exchange it with signInWithCustomToken."""

    tenant_id: str = Field(alias="tenantId")
    customer_id: str = Field(alias="customerId")
    console_url: Optional[str] = Field(default=UNSET, alias="consoleUrl")


class SignupSessionDict(TypedDict):
    custom_token: str
    tenant_id: str
    customer_id: str
    console_url: NotRequired[str]
