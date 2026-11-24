from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .postgresql_ssl_config2 import PostgresqlSslConfig2, PostgresqlSslConfig2Dict


class PostgresqlProfile(SdkBaseModel):
    """Profile for connecting to a PostgreSQL source."""

    ssl_config: Optional[PostgresqlSslConfig2] = Field(default=UNSET, alias="sslConfig")
    """Optional. SSL configuration for the PostgreSQL connection. In case PostgresqlSslConfig is not set, the connection
    will use the default SSL mode, which is ``prefer`` (i.e. this mode will only use encryption if enabled from database
    side, otherwise will use unencrypted communication)"""

    hostname: Optional[str] = UNSET
    """Required. Hostname for the PostgreSQL connection."""

    database: Optional[str] = UNSET
    """Required. Database for the PostgreSQL connection."""

    secret_manager_stored_password: Optional[str] = Field(default=UNSET, alias="secretManagerStoredPassword")
    """Optional. A reference to a Secret Manager resource name storing the PostgreSQL connection password. Mutually
    exclusive with the ``password`` field."""

    port: Optional[int] = UNSET
    """Port for the PostgreSQL connection, default value is 5432."""

    username: Optional[str] = UNSET
    """Required. Username for the PostgreSQL connection."""

    password: Optional[str] = UNSET
    """Optional. Password for the PostgreSQL connection. Mutually exclusive with the ``secret_manager_stored_password``
    field."""


class PostgresqlProfileDict(TypedDict):
    ssl_config: NotRequired[PostgresqlSslConfig2Dict]
    hostname: NotRequired[str]
    database: NotRequired[str]
    secret_manager_stored_password: NotRequired[str]
    port: NotRequired[int]
    username: NotRequired[str]
    password: NotRequired[str]
