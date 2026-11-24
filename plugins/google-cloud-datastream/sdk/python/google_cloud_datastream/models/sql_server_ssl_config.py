from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_and_server_validation2 import EncryptionAndServerValidation2, EncryptionAndServerValidation2Dict


class SqlServerSslConfig(SdkBaseModel):
    """SQL Server SSL configuration information."""

    encryption_and_server_validation: Optional[EncryptionAndServerValidation2] = Field(
        default=UNSET, alias="encryptionAndServerValidation"
    )
    """If set, Datastream will enforce encryption and authenticate server identity."""

    encryption_not_enforced: Optional[Any] = Field(default=UNSET, alias="encryptionNotEnforced")
    """If set, Datastream will not enforce encryption. If the DB server mandates encryption, then connection will be
    encrypted but server identity will not be authenticated."""

    basic_encryption: Optional[Any] = Field(default=UNSET, alias="basicEncryption")
    """If set, Datastream will enforce encryption without authenticating server identity. Server certificates will be
    trusted by default."""


class SqlServerSslConfigDict(TypedDict):
    encryption_and_server_validation: NotRequired[EncryptionAndServerValidation2Dict]
    encryption_not_enforced: NotRequired[Any]
    basic_encryption: NotRequired[Any]
