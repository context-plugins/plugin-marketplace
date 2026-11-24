from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error1(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    message: str
    detail: Optional[str] = UNSET
    data: Optional[Any] = UNSET
    """Optional structured data that is endpoint-specific."""


class Error1Dict(TypedDict):
    message: str
    detail: NotRequired[str]
    data: NotRequired[Any]
