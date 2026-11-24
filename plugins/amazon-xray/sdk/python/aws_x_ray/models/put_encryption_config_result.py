from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_config import EncryptionConfig, EncryptionConfigDict


class PutEncryptionConfigResult(SdkBaseModel):
    encryption_config: Optional[EncryptionConfig] = Field(default=UNSET, alias="EncryptionConfig")


class PutEncryptionConfigResultDict(TypedDict):
    encryption_config: NotRequired[EncryptionConfigDict]
