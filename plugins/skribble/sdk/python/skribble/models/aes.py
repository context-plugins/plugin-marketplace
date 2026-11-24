from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Aes(SdkBaseModel):
    any: Optional[str] = UNSET
    """Effective quality when requesting AES with any legislation."""


class AesDict(TypedDict):
    any: NotRequired[str]
