from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .usage import Usage, UsageDict


class ApiV1ThesaurusResponse(SdkBaseModel):
    neighbors: Optional[list[list[Any]]] = UNSET
    """[similarity, term] pairs."""

    synonyms: Optional[list[str]] = UNSET
    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1ThesaurusResponseDict(TypedDict):
    neighbors: NotRequired[list[list[Any]]]
    synonyms: NotRequired[list[str]]
    usage: NotRequired[UsageDict]
