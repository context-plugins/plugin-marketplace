from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1FileExtract400Error(SdkBaseModel):
    error: Optional[str] = UNSET
    msg: Optional[str] = UNSET


class ApiV1FileExtract400ErrorDict(TypedDict):
    error: NotRequired[str]
    msg: NotRequired[str]
