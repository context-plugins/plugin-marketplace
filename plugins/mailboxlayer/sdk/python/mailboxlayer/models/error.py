from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Error(SdkBaseModel):
    code: int
    """Numeric error code as defined in Mailboxlayer docs."""

    type_: str = Field(alias="type")
    """Short machine-readable error type."""

    info: str
    """Human-readable info / suggestion for correcting the request."""


class ErrorDict(TypedDict):
    code: int
    type_: str
    info: str
