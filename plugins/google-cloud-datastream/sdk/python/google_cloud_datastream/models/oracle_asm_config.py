from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .oracle_ssl_config1 import OracleSslConfig1, OracleSslConfig1Dict


class OracleAsmConfig(SdkBaseModel):
    """Configuration for Oracle Automatic Storage Management (ASM) connection."""

    port: Optional[int] = UNSET
    """Required. Port for the Oracle ASM connection."""

    secret_manager_stored_password: Optional[str] = Field(default=UNSET, alias="secretManagerStoredPassword")
    """Optional. A reference to a Secret Manager resource name storing the Oracle ASM connection password. Mutually
    exclusive with the ``password`` field."""

    username: Optional[str] = UNSET
    """Required. Username for the Oracle ASM connection."""

    password: Optional[str] = UNSET
    """Optional. Password for the Oracle ASM connection. Mutually exclusive with the ``secret_manager_stored_password``
    field."""

    hostname: Optional[str] = UNSET
    """Required. Hostname for the Oracle ASM connection."""

    oracle_ssl_config: Optional[OracleSslConfig1] = Field(default=UNSET, alias="oracleSslConfig")
    """Optional. SSL configuration for the Oracle connection."""

    asm_service: Optional[str] = Field(default=UNSET, alias="asmService")
    """Required. ASM service name for the Oracle ASM connection."""

    connection_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="connectionAttributes")
    """Optional. Connection string attributes"""


class OracleAsmConfigDict(TypedDict):
    port: NotRequired[int]
    secret_manager_stored_password: NotRequired[str]
    username: NotRequired[str]
    password: NotRequired[str]
    hostname: NotRequired[str]
    oracle_ssl_config: NotRequired[OracleSslConfig1Dict]
    asm_service: NotRequired[str]
    connection_attributes: NotRequired[dict[str, str]]
