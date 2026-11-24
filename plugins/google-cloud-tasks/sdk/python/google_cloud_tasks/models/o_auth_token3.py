from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OAuthToken3(SdkBaseModel):
    """If specified, an `OAuth token <https://developers.google.com/identity/protocols/OAuth2>`__ will be generated and
    attached as an ``Authorization`` header in the HTTP request. This type of authorization should generally only be
    used when calling Google APIs hosted on *.googleapis.com."""

    service_account_email: Optional[str] = Field(default=UNSET, alias="serviceAccountEmail")
    """`Service account email <https://cloud.google.com/iam/docs/service-accounts>`__ to be used for generating OAuth
    token. The service account must be within the same project as the queue. The caller must have
    iam.serviceAccounts.actAs permission for the service account."""

    scope: Optional[str] = UNSET
    """OAuth scope to be used for generating OAuth access token. If not specified,
    "https://www.googleapis.com/auth/cloud-platform" will be used."""


class OAuthToken3Dict(TypedDict):
    service_account_email: NotRequired[str]
    scope: NotRequired[str]
