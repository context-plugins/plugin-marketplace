from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OidcToken(SdkBaseModel):
    """Contains information needed for generating an `OpenID Connect token
    <https://developers.google.com/identity/protocols/OpenIDConnect>`__. This type of authorization can be used for many
    scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself."""

    audience: Optional[str] = UNSET
    """Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used."""

    service_account_email: Optional[str] = Field(default=UNSET, alias="serviceAccountEmail")
    """`Service account email <https://cloud.google.com/iam/docs/service-accounts>`__ to be used for generating OIDC
    token. The service account must be within the same project as the queue. The caller must have
    iam.serviceAccounts.actAs permission for the service account."""


class OidcTokenDict(TypedDict):
    audience: NotRequired[str]
    service_account_email: NotRequired[str]
