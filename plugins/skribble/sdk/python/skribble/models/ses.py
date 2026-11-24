from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Ses(SdkBaseModel):
    any: Optional[str] = UNSET
    """Effective quality when requesting SES with any legislation."""


class SesDict(TypedDict):
    any: NotRequired[str]
