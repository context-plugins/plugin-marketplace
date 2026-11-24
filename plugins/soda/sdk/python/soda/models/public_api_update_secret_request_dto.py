from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiUpdateSecretRequestDto(SdkBaseModel):
    encrypted_value: str = Field(alias="encryptedValue")
    encryption_key: str = Field(alias="encryptionKey")


class PublicApiUpdateSecretRequestDtoDict(TypedDict):
    encrypted_value: str
    encryption_key: str
