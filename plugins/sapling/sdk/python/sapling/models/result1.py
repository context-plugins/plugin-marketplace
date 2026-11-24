from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Result1(SdkBaseModel):
    hash: Optional[UUID] = UNSET
    model_version: Optional[str] = UNSET
    original: Optional[str] = UNSET
    rephrase_type: Optional[str] = UNSET
    replacement: Optional[str] = UNSET


class Result1Dict(TypedDict):
    hash: NotRequired[UUID]
    model_version: NotRequired[str]
    original: NotRequired[str]
    rephrase_type: NotRequired[str]
    replacement: NotRequired[str]
