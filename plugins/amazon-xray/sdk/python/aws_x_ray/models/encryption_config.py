from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .enums.type import TypeOrStr


class EncryptionConfig(SdkBaseModel):
    key_id: Optional[str] = Field(default=UNSET, alias="KeyId")
    """The ID of the KMS key used for encryption, if applicable."""

    status: Optional[StatusOrStr] = Field(default=UNSET, alias="Status")
    """The encryption status. While the status is UPDATING, X-Ray may encrypt data with a combination of the new and old
    settings."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="Type")
    """The type of encryption. Set to KMS for encryption with KMS keys. Set to NONE for default encryption."""


class EncryptionConfigDict(TypedDict):
    key_id: NotRequired[str]
    status: NotRequired[StatusOrStr]
    type_: NotRequired[TypeOrStr]
