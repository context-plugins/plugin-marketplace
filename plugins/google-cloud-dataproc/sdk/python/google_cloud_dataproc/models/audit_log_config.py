from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.log_type import LogTypeOrStr


class AuditLogConfig(SdkBaseModel):
    """Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type":
    "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables
    'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging."""

    log_type: Optional[LogTypeOrStr] = Field(default=UNSET, alias="logType")
    """The log type that this config enables."""

    exempted_members: Optional[list[str]] = Field(default=UNSET, alias="exemptedMembers")
    """Specifies the identities that do not cause logging for this type of permission. Follows the same format of
    Binding.members."""


class AuditLogConfigDict(TypedDict):
    log_type: NotRequired[LogTypeOrStr]
    exempted_members: NotRequired[list[str]]
