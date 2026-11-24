from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result1 import Result1, Result1Dict
from .usage import Usage, UsageDict


class ApiV1ParaphraseResponse(SdkBaseModel):
    results: Optional[list[Result1]] = UNSET
    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1ParaphraseResponseDict(TypedDict):
    results: NotRequired[list[Result1Dict]]
    usage: NotRequired[UsageDict]
