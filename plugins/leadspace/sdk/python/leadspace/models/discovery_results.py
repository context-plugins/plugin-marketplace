from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result import Result, ResultDict


class DiscoveryResults(SdkBaseModel):
    results: Optional[list[Result]] = UNSET
    """List of expansion results"""


class DiscoveryResultsDict(TypedDict):
    results: NotRequired[list[ResultDict]]
