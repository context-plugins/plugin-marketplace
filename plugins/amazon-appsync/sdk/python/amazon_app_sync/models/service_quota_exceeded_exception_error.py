from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ServiceQuotaExceededExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class ServiceQuotaExceededExceptionErrorDict(TypedDict):
    message: NotRequired[str]
