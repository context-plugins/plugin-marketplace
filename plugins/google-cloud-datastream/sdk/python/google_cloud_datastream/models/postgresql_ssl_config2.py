from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .server_and_client_verification2 import ServerAndClientVerification2, ServerAndClientVerification2Dict
from .server_verification2 import ServerVerification2, ServerVerification2Dict


class PostgresqlSslConfig2(SdkBaseModel):
    """Optional. SSL configuration for the PostgreSQL connection. In case PostgresqlSslConfig is not set, the connection
    will use the default SSL mode, which is ``prefer`` (i.e. this mode will only use encryption if enabled from database
    side, otherwise will use unencrypted communication)"""

    server_and_client_verification: Optional[ServerAndClientVerification2] = Field(
        default=UNSET, alias="serverAndClientVerification"
    )
    """If this field is set, the communication will be encrypted with TLS encryption and both the server identity and
    the client identity will be authenticated."""

    server_verification: Optional[ServerVerification2] = Field(default=UNSET, alias="serverVerification")
    """If this field is set, the communication will be encrypted with TLS encryption and the server identity will be
    authenticated."""


class PostgresqlSslConfig2Dict(TypedDict):
    server_and_client_verification: NotRequired[ServerAndClientVerification2Dict]
    server_verification: NotRequired[ServerVerification2Dict]
