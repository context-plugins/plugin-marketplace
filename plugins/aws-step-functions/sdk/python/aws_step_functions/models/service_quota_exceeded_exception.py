from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ServiceQuotaExceededException(SdkBaseModel):
    message: Optional[str] = UNSET


class ServiceQuotaExceededExceptionDict(TypedDict):
    message: NotRequired[str]
