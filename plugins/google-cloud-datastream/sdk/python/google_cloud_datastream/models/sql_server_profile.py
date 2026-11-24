from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sql_server_ssl_config2 import SqlServerSslConfig2, SqlServerSslConfig2Dict


class SqlServerProfile(SdkBaseModel):
    """Profile for connecting to a SQLServer source."""

    secret_manager_stored_password: Optional[str] = Field(default=UNSET, alias="secretManagerStoredPassword")
    """Optional. A reference to a Secret Manager resource name storing the SQLServer connection password. Mutually
    exclusive with the ``password`` field."""

    username: Optional[str] = UNSET
    """Required. Username for the SQLServer connection."""

    password: Optional[str] = UNSET
    """Optional. Password for the SQLServer connection. Mutually exclusive with the ``secret_manager_stored_password``
    field."""

    hostname: Optional[str] = UNSET
    """Required. Hostname for the SQLServer connection."""

    ssl_config: Optional[SqlServerSslConfig2] = Field(default=UNSET, alias="sslConfig")
    """Optional. SSL configuration for the SQLServer connection."""

    port: Optional[int] = UNSET
    """Port for the SQLServer connection, default value is 1433."""

    database: Optional[str] = UNSET
    """Required. Database for the SQLServer connection."""


class SqlServerProfileDict(TypedDict):
    secret_manager_stored_password: NotRequired[str]
    username: NotRequired[str]
    password: NotRequired[str]
    hostname: NotRequired[str]
    ssl_config: NotRequired[SqlServerSslConfig2Dict]
    port: NotRequired[int]
    database: NotRequired[str]
