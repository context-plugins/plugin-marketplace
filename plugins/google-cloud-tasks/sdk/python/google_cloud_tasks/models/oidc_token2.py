from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OidcToken2(SdkBaseModel):
    """If specified, an `OIDC <https://developers.google.com/identity/protocols/OpenIDConnect>`__ token is generated and
    attached as an ``Authorization`` header in the HTTP request. This type of authorization can be used for many
    scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself. Note that both
    the service account email and the audience MUST be specified when using the queue-level authorization override."""

    audience: Optional[str] = UNSET
    """Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used."""

    service_account_email: Optional[str] = Field(default=UNSET, alias="serviceAccountEmail")
    """`Service account email <https://cloud.google.com/iam/docs/service-accounts>`__ to be used for generating OIDC
    token. The service account must be within the same project as the queue. The caller must have
    iam.serviceAccounts.actAs permission for the service account."""


class OidcToken2Dict(TypedDict):
    audience: NotRequired[str]
    service_account_email: NotRequired[str]
