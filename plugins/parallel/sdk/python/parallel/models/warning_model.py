from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_parallel_ai_extract_api import TypeParallelAiExtractApiOrStr


class WarningModel(SdkBaseModel):
    """Human-readable message for a task."""

    type_: TypeParallelAiExtractApiOrStr = Field(alias="type")
    """Type of warning. Note that adding new warning types is considered a backward-compatible change."""

    message: str
    """Human-readable message."""

    detail: Optional[Any] = UNSET
    """Optional detail supporting the warning."""


class WarningModelDict(TypedDict):
    type_: TypeParallelAiExtractApiOrStr
    message: str
    detail: NotRequired[Any]
