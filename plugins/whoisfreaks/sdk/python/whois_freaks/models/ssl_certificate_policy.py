from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SslCertificatePolicy(SdkBaseModel):
    policy_id: Optional[str] = Field(default=UNSET, alias="policyId")
    policy_qualifier: Optional[Any] = Field(default=UNSET, alias="policyQualifier")


class SslCertificatePolicyDict(TypedDict):
    policy_id: NotRequired[str]
    policy_qualifier: NotRequired[Any]
