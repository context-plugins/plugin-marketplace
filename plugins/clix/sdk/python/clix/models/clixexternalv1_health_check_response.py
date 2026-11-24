from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Clixexternalv1HealthCheckResponse(SdkBaseModel):
    msg: Optional[str] = UNSET


class Clixexternalv1HealthCheckResponseDict(TypedDict):
    msg: NotRequired[str]
