from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken(SdkBaseModel):
    """Contains information needed for generating an `OAuth token
    <https://developers.google.com/identity/protocols/OAuth2>`__. This type of authorization should generally only be
    used when calling Google APIs hosted on *.googleapis.com."""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """Required. Service account email used to generate the `OAuth token
    <https://developers.google.com/identity/protocols/OAuth2>`__. The principal who calls this API must have
    iam.serviceAccounts.actAs permission in the service account. See
    https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must
    have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated
    requests."""

    scope: Optional[str] = UNSET
    """Optional. OAuth scope to be used for generating OAuth access token. If not specified,
    "https://www.googleapis.com/auth/cloud-platform" will be used."""


class GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthTokenDict(TypedDict):
    service_account: NotRequired[str]
    scope: NotRequired[str]
