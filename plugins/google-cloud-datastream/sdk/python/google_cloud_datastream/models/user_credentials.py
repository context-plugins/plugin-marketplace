from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UserCredentials(SdkBaseModel):
    """Deprecated: Salesforce is retiring Username-Password authentication. Use ``Oauth2ClientCredentials`` instead."""

    username: Optional[str] = UNSET
    """Required. Username for the Salesforce connection."""

    password: Optional[str] = UNSET
    """Optional. Password for the Salesforce connection. Mutually exclusive with the ``secret_manager_stored_password``
    field."""

    secret_manager_stored_password: Optional[str] = Field(default=UNSET, alias="secretManagerStoredPassword")
    """Optional. A reference to a Secret Manager resource name storing the Salesforce connection's password. Mutually
    exclusive with the ``password`` field."""

    secret_manager_stored_security_token: Optional[str] = Field(default=UNSET, alias="secretManagerStoredSecurityToken")
    """Optional. A reference to a Secret Manager resource name storing the Salesforce connection's security token.
    Mutually exclusive with the ``security_token`` field."""

    security_token: Optional[str] = Field(default=UNSET, alias="securityToken")
    """Optional. Security token for the Salesforce connection. Mutually exclusive with the
    ``secret_manager_stored_security_token`` field."""


class UserCredentialsDict(TypedDict):
    username: NotRequired[str]
    password: NotRequired[str]
    secret_manager_stored_password: NotRequired[str]
    secret_manager_stored_security_token: NotRequired[str]
    security_token: NotRequired[str]
