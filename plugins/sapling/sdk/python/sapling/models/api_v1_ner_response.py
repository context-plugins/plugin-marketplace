from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .usage import Usage, UsageDict


class ApiV1NerResponse(SdkBaseModel):
    results: Optional[list[Any]] = UNSET
    """Present only for a batch (``texts``) request: one entry per input text, in input order, each shaped exactly like
    the single-text response."""

    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1NerResponseDict(TypedDict):
    results: NotRequired[list[Any]]
    usage: NotRequired[UsageDict]
