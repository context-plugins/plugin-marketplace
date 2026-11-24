from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResultsError(SdkBaseModel):
    """Error details for a failed insight in a batch operation."""

    insight_key: Optional[str] = Field(default=UNSET, alias="insightKey")
    """The key of the insight that failed."""

    error: Optional[str] = UNSET
    """The error message."""

    code: Optional[int] = UNSET
    """The HTTP status code associated with the error."""


class ResultsErrorDict(TypedDict):
    insight_key: NotRequired[str]
    error: NotRequired[str]
    code: NotRequired[int]
