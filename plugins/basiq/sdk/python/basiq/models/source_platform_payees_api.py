from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SourcePlatformPayeesApi(SdkBaseModel):
    parameter: Optional[str] = UNSET
    """String indicating which URI query parameter caused the error."""


class SourcePlatformPayeesApiDict(TypedDict):
    parameter: NotRequired[str]
