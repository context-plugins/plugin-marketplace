from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorError(SdkBaseModel):
    """The error shape returned by every non-2xx response."""

    status: int
    """The HTTP status code, repeated in the body."""

    message: str
    """A human-readable explanation that tries to name the specific problem."""

    documentation: Optional[str] = UNSET
    """Where to look for the correct usage. Present on the ``Route not found`` response returned for unrecognized
    paths."""

    hints: Optional[list[str]] = UNSET
    """Recovery suggestions, such as the host that actually serves the requested path. Present on the ``Route not
    found`` response returned for unrecognized paths."""

    details: Optional[list[Any]] = UNSET
    """Per-field validation failures, when the error came from schema validation."""


class ErrorErrorDict(TypedDict):
    status: int
    message: str
    documentation: NotRequired[str]
    hints: NotRequired[list[str]]
    details: NotRequired[list[Any]]
