from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr


class ErrorError(SdkBaseModel):
    hint: Optional[str] = UNSET
    """One sentence on what to do next. Present only on the errors a client meets while exploring (``not_found``,
    ``method_not_allowed``); other errors omit it. Human-readable — do not branch on it."""

    docs: Optional[str] = UNSET
    """Where to read more. Present together with ``hint``, omitted otherwise."""

    request_id: Optional[str] = UNSET
    """Same value as the X-Request-ID response header, repeated here because clients log bodies more often than headers.
    Quote it in a support request. Present on every error, including the ``not_found`` and ``method_not_allowed``
    answers for a path or method that has no route."""

    error: str
    """Human-readable detail. May be reworded — do not branch on it."""

    code: CodeOrStr
    """Stable machine-readable slug (contract — never changes). The ``ambiguous_domain`` code is emitted only by the MCP
    tools (when a ``site`` domain matches more than one stored site), not by /query."""


class ErrorErrorDict(TypedDict):
    hint: NotRequired[str]
    docs: NotRequired[str]
    request_id: NotRequired[str]
    error: str
    code: CodeOrStr
