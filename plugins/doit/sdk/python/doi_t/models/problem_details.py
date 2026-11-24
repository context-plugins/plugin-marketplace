from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .detail import Detail, DetailDict


class ProblemDetails(SdkBaseModel):
    """RFC 9457 Problem Details — standard DoiT error envelope for all non-2xx responses."""

    type_: str = Field(alias="type")
    title: str
    status: int
    detail: str
    instance: str
    code: str
    retryable: bool
    details: Optional[list[Detail]] = UNSET
    docs_url: OptionalNullable[str] = Field(default=UNSET, alias="docsUrl")


class ProblemDetailsDict(TypedDict):
    type_: str
    title: str
    status: int
    detail: str
    instance: str
    code: str
    retryable: bool
    details: NotRequired[list[DetailDict]]
    docs_url: NotRequired[str | None]
