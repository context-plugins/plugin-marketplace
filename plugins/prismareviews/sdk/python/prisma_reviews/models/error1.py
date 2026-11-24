from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr


class Error1(SdkBaseModel):
    type_: TypeOrStr = Field(alias="type")
    """Family of the error, from the HTTP status."""

    code: str
    """Stable, machine-readable code. Branch on this, not on ``message``."""

    message: str
    """Human-readable explanation. It can change."""

    retryable: bool
    """``true`` for 429 and 5xx: the same request can succeed later."""

    request_id: str
    """The ``req_…`` ID, also in the ``Request-Id`` header."""

    docs_url: str
    """Description of this code."""


class Error1Dict(TypedDict):
    type_: TypeOrStr
    code: str
    message: str
    retryable: bool
    request_id: str
    docs_url: str
