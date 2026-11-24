from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Problem(SdkBaseModel):
    """RFC-9457 error. Closed-set rejections carry valid_options + suggestion so an agent self-corrects."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    title: Optional[str] = UNSET
    status: Optional[int] = UNSET
    detail: Optional[str] = UNSET
    code: Optional[str] = UNSET
    field: Optional[str] = UNSET
    valid_options: Optional[list[str]] = UNSET
    suggestion: Optional[str] = UNSET
    request_id: Optional[str] = UNSET


class ProblemDict(TypedDict):
    type_: NotRequired[str]
    title: NotRequired[str]
    status: NotRequired[int]
    detail: NotRequired[str]
    code: NotRequired[str]
    field: NotRequired[str]
    valid_options: NotRequired[list[str]]
    suggestion: NotRequired[str]
    request_id: NotRequired[str]
