from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Qes(SdkBaseModel):
    zertes: Optional[str] = UNSET
    """Effective quality when requesting QES with ZERTES legislation."""

    eidas: OptionalNullable[str] = UNSET
    """Effective quality when requesting QES with eIDAS legislation. Null if not available for this user."""


class QesDict(TypedDict):
    zertes: NotRequired[str]
    eidas: NotRequired[str | None]
