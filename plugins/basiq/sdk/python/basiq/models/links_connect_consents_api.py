from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LinksConnectConsentsApi(SdkBaseModel):
    self: Optional[str] = UNSET
    consent_policy: Optional[str] = Field(default=UNSET, alias="consentPolicy")
    latest_consent_policy: Optional[str] = Field(default=UNSET, alias="latestConsentPolicy")


class LinksConnectConsentsApiDict(TypedDict):
    self: NotRequired[str]
    consent_policy: NotRequired[str]
    latest_consent_policy: NotRequired[str]
