from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.code import CodeOrStr
from .enums.type import TypeOrStr


class Error(SdkBaseModel):
    """The canonical error object (§6.4). ``code`` is the SINGLE source of truth for error sub-codes."""

    type_: TypeOrStr = Field(alias="type")
    code: CodeOrStr
    """Error sub-code; each has a docs page at https://stayingapi.com/docs/errors/<code>."""

    message: str
    param: OptionalNullable[str] = UNSET
    request_id: str = Field(alias="requestId")
    credits_charged: Literal[0] = Field(default=0, alias="creditsCharged")
    """Errors never bill (always 0)."""

    retryable: bool
    doc_url: str = Field(alias="docUrl")


class ErrorDict(TypedDict):
    type_: TypeOrStr
    code: CodeOrStr
    message: str
    param: NotRequired[str | None]
    request_id: str
    credits_charged: Literal[0]
    retryable: bool
    doc_url: str
