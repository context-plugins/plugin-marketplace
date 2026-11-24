from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KmsAccessDenied(SdkBaseModel):
    message: Optional[str] = UNSET


class KmsAccessDeniedDict(TypedDict):
    message: NotRequired[str]
