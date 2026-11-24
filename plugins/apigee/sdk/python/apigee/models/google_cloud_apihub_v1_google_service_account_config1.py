from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1GoogleServiceAccountConfig1(SdkBaseModel):
    """Google Service Account."""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """Required. The service account to be used for authenticating request. The ``iam.serviceAccounts.getAccessToken``
    permission should be granted on this service account to the impersonator service account."""


class GoogleCloudApihubV1GoogleServiceAccountConfig1Dict(TypedDict):
    service_account: NotRequired[str]
