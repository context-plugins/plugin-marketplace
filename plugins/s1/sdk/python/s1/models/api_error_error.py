from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict


class ApiErrorError(SdkBaseModel):
    """Search1API error. Every JSON error carries ``ok: false``, ``error`` (a short status-derived label) and
    ``message`` (human-readable detail); validation failures add ``errors``. Payment challenges may use RFC 9457 problem
    detail fields."""

    ok: Optional[bool] = UNSET
    error: Optional[str] = UNSET
    message: Optional[str] = UNSET
    errors: Optional[list[Error]] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    title: Optional[str] = UNSET
    status: Optional[int] = UNSET
    detail: Optional[str] = UNSET


class ApiErrorErrorDict(TypedDict):
    ok: NotRequired[bool]
    error: NotRequired[str]
    message: NotRequired[str]
    errors: NotRequired[list[ErrorDict]]
    type_: NotRequired[str]
    title: NotRequired[str]
    status: NotRequired[int]
    detail: NotRequired[str]
