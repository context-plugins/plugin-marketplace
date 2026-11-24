from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class VerificationResult(SdkBaseModel):
    input: str
    """The input value being verified"""

    match: OptionalNullable[bool] = UNSET
    """Whether the input matched the source data. Null if verification could not be completed."""

    confidence: Optional[float] = UNSET
    """Confidence score of the match (0.0 to 1.0)"""

    error: Optional[str] = UNSET
    """Error message if verification could not be completed"""


class VerificationResultDict(TypedDict):
    input: str
    match: NotRequired[bool | None]
    confidence: NotRequired[float]
    error: NotRequired[str]
