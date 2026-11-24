from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Result(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    kind: Optional[str] = UNSET
    status: Optional[str] = UNSET
    status_summary: OptionalNullable[str] = UNSET
    matched_on: Optional[str] = UNSET
    url: Optional[str] = UNSET
    verify_url: Optional[str] = UNSET


class ResultDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    kind: NotRequired[str]
    status: NotRequired[str]
    status_summary: NotRequired[str | None]
    matched_on: NotRequired[str]
    url: NotRequired[str]
    verify_url: NotRequired[str]
