from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .oracle_asm_config2 import OracleAsmConfig2, OracleAsmConfig2Dict
from .oracle_ssl_config1 import OracleSslConfig1, OracleSslConfig1Dict


class OracleProfile(SdkBaseModel):
    """Profile for connecting to an Oracle source."""

    hostname: Optional[str] = UNSET
    """Required. Hostname for the Oracle connection."""

    secret_manager_stored_password: Optional[str] = Field(default=UNSET, alias="secretManagerStoredPassword")
    """Optional. A reference to a Secret Manager resource name storing the Oracle connection password. Mutually
    exclusive with the ``password`` field."""

    port: Optional[int] = UNSET
    """Port for the Oracle connection, default value is 1521."""

    database_service: Optional[str] = Field(default=UNSET, alias="databaseService")
    """Required. Database for the Oracle connection."""

    oracle_asm_config: Optional[OracleAsmConfig2] = Field(default=UNSET, alias="oracleAsmConfig")
    """Optional. Configuration for Oracle ASM connection."""

    connection_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="connectionAttributes")
    """Connection string attributes"""

    username: Optional[str] = UNSET
    """Required. Username for the Oracle connection."""

    password: Optional[str] = UNSET
    """Optional. Password for the Oracle connection. Mutually exclusive with the ``secret_manager_stored_password``
    field."""

    oracle_ssl_config: Optional[OracleSslConfig1] = Field(default=UNSET, alias="oracleSslConfig")
    """Optional. SSL configuration for the Oracle connection."""


class OracleProfileDict(TypedDict):
    hostname: NotRequired[str]
    secret_manager_stored_password: NotRequired[str]
    port: NotRequired[int]
    database_service: NotRequired[str]
    oracle_asm_config: NotRequired[OracleAsmConfig2Dict]
    connection_attributes: NotRequired[dict[str, str]]
    username: NotRequired[str]
    password: NotRequired[str]
    oracle_ssl_config: NotRequired[OracleSslConfig1Dict]
