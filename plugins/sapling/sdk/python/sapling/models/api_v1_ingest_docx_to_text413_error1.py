from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1IngestDocxToText413Error1(SdkBaseModel):
    error: Optional[str] = UNSET


class ApiV1IngestDocxToText413Error1Dict(TypedDict):
    error: NotRequired[str]
