from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AesMinimal(SdkBaseModel):
    """Best possible quality, but AES at a minimum."""

    zertes: Optional[str] = UNSET
    """Effective quality when requesting AES_MINIMAL with ZERTES legislation."""

    eidas: Optional[str] = UNSET
    """Effective quality when requesting AES_MINIMAL with eIDAS legislation."""


class AesMinimalDict(TypedDict):
    zertes: NotRequired[str]
    eidas: NotRequired[str]
