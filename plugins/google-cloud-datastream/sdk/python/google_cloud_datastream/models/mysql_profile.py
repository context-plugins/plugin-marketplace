from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mysql_ssl_config1 import MysqlSslConfig1, MysqlSslConfig1Dict


class MysqlProfile(SdkBaseModel):
    """Profile for connecting to a MySQL source."""

    secret_manager_stored_password: Optional[str] = Field(default=UNSET, alias="secretManagerStoredPassword")
    """Optional. A reference to a Secret Manager resource name storing the MySQL connection password. Mutually exclusive
    with the ``password`` field."""

    hostname: Optional[str] = UNSET
    """Required. Hostname for the MySQL connection."""

    ssl_config: Optional[MysqlSslConfig1] = Field(default=UNSET, alias="sslConfig")
    """SSL configuration for the MySQL connection."""

    username: Optional[str] = UNSET
    """Required. Username for the MySQL connection."""

    password: Optional[str] = UNSET
    """Optional. Input only. Password for the MySQL connection. Mutually exclusive with the
    ``secret_manager_stored_password`` field."""

    port: Optional[int] = UNSET
    """Port for the MySQL connection, default value is 3306."""


class MysqlProfileDict(TypedDict):
    secret_manager_stored_password: NotRequired[str]
    hostname: NotRequired[str]
    ssl_config: NotRequired[MysqlSslConfig1Dict]
    username: NotRequired[str]
    password: NotRequired[str]
    port: NotRequired[int]
