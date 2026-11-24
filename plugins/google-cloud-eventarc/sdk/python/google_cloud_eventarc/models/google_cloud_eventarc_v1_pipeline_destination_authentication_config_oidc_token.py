from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken(SdkBaseModel):
    """Represents a config used to authenticate with a Google OIDC token using a Google Cloud service account. Use this
    authentication method to invoke your Cloud Run and Cloud Functions destinations or HTTP endpoints that support
    Google OIDC."""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """Required. Service account email used to generate the OIDC Token. The principal who calls this API must have
    iam.serviceAccounts.actAs permission in the service account. See
    https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must
    have roles/roles/iam.serviceAccountTokenCreator role to allow the Pipeline to create OpenID tokens for authenticated
    requests."""

    audience: Optional[str] = UNSET
    """Optional. Audience to be used to generate the OIDC Token. The audience claim identifies the recipient that the
    JWT is intended for. If unspecified, the destination URI will be used."""


class GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcTokenDict(TypedDict):
    service_account: NotRequired[str]
    audience: NotRequired[str]
