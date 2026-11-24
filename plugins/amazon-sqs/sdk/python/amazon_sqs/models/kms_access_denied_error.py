from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KmsAccessDeniedError(SdkBaseModel):
    message: Optional[str] = UNSET


class KmsAccessDeniedErrorDict(TypedDict):
    message: NotRequired[str]
