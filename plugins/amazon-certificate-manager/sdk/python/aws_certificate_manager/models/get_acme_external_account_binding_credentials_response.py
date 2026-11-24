from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetAcmeExternalAccountBindingCredentialsResponse(SdkBaseModel):
    key_id: Optional[str] = Field(default=UNSET, alias="KeyId")
    """The key identifier for the external account binding credentials."""

    mac_key: Optional[str] = Field(default=UNSET, alias="MacKey")
    """The MAC key for the external account binding credentials."""


class GetAcmeExternalAccountBindingCredentialsResponseDict(TypedDict):
    key_id: NotRequired[str]
    mac_key: NotRequired[str]
