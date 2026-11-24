from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1YmmOptionsResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    input: Optional[Any] = UNSET
    message: Optional[str] = UNSET
    """Optional guidance when the returned layer differs from the requested dimension or when explaining how to get
    better results."""

    years: Optional[list[int]] = UNSET
    makes: Optional[list[str]] = UNSET
    models: Optional[list[str]] = UNSET
    trims: Optional[list[str]] = UNSET
    variants: Optional[list[str]] = UNSET
    model_count: Optional[int] = Field(default=UNSET, alias="modelCount")
    """Present only for bulk variants (``dimension=variants`` + year + make, no model). Number of distinct models, which
    is also the amount billed — except a zero-match query, which returns 0 but still bills a minimum of 1 unit."""


class V1YmmOptionsResponseDict(TypedDict):
    success: NotRequired[bool]
    input: NotRequired[Any]
    message: NotRequired[str]
    years: NotRequired[list[int]]
    makes: NotRequired[list[str]]
    models: NotRequired[list[str]]
    trims: NotRequired[list[str]]
    variants: NotRequired[list[str]]
    model_count: NotRequired[int]
