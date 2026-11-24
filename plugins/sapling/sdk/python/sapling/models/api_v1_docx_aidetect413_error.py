from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1DocxAidetect413Error(SdkBaseModel):
    error: Optional[str] = UNSET


class ApiV1DocxAidetect413ErrorDict(TypedDict):
    error: NotRequired[str]
