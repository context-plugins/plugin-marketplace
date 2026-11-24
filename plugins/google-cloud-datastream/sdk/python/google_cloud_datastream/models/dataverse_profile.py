from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .oauth_client_credentials3 import OauthClientCredentials3, OauthClientCredentials3Dict


class DataverseProfile(SdkBaseModel):
    """Profile for connecting to a Dataverse source."""

    environment_url: Optional[str] = Field(default=UNSET, alias="environmentUrl")
    """Required. Environment URL of the Microsoft Dataverse instance. Example: ``.crm.dynamics.com``"""

    tenant_id: Optional[str] = Field(default=UNSET, alias="tenantId")
    """Required. Tenant id of the Microsoft Dataverse instance."""

    oauth_client_credentials: Optional[OauthClientCredentials3] = Field(default=UNSET, alias="oauthClientCredentials")
    """Required. Credentials for authenticating with the Dataverse API."""


class DataverseProfileDict(TypedDict):
    environment_url: NotRequired[str]
    tenant_id: NotRequired[str]
    oauth_client_credentials: NotRequired[OauthClientCredentials3Dict]
