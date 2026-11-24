from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExtractRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    url: str
    prompt: Optional[str] = UNSET
    response_format: Optional[dict[str, Any]] = UNSET


class ExtractRequestDict(TypedDict):
    url: str
    prompt: NotRequired[str]
    response_format: NotRequired[dict[str, Any]]
