from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.verbosity import VerbosityOrStr
from .unions.format import Format, FormatDict


class ResponseTextConfig(SdkBaseModel):
    """Text output configuration. By default the response is plain text; for structured output set ``format`` to
    ``{"type": "json_schema", "name": ..., "schema": {...}}``. The ``json_object`` format is accepted for compatibility
    but produces plain text."""

    format: Optional[Format] = UNSET
    verbosity: Optional[VerbosityOrStr] = UNSET


class ResponseTextConfigDict(TypedDict):
    format: NotRequired[FormatDict]
    verbosity: NotRequired[VerbosityOrStr]
