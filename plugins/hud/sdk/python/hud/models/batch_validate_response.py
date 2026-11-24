from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchValidateResponse(SdkBaseModel):
    updated_count: int


class BatchValidateResponseDict(TypedDict):
    updated_count: int
