from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_block import ErrorBlock, ErrorBlockDict


class ErrorEnvelope2(SdkBaseModel):
    ok: Literal["False"] = "False"
    request_id: str
    error: ErrorBlock
    """Every failure carries this block. Branch on code (a stable string) or number (a stable integer whose thousands
    digit is the family: 1 request, 2 account, 3 input, 4 content, 5 transient, 9 ours; 5xxx means retry with backoff).
    At most one of retry_with, details, issues is present. Failures are never charged."""


class ErrorEnvelope2Dict(TypedDict):
    ok: Literal["False"]
    request_id: str
    error: ErrorBlockDict
