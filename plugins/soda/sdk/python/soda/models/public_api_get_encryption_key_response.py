from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiGetEncryptionKeyResponse(SdkBaseModel):
    encryption_key: Optional[Any] = Field(default=UNSET, alias="encryptionKey")


class PublicApiGetEncryptionKeyResponseDict(TypedDict):
    encryption_key: NotRequired[Any]
