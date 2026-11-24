from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValidationResults(SdkBaseModel):
    account_status: Optional[str] = UNSET
    registered_name: Optional[str] = UNSET
    name_match_score: Optional[int] = UNSET
    details: Optional[Any] = UNSET


class ValidationResultsDict(TypedDict):
    account_status: NotRequired[str]
    registered_name: NotRequired[str]
    name_match_score: NotRequired[int]
    details: NotRequired[Any]
