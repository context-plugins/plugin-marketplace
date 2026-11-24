from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EvaluationFailedEventDetails(SdkBaseModel):
    error: Optional[str] = UNSET
    """The error code of the failure."""

    cause: Optional[str] = UNSET
    """A more detailed explanation of the cause of the failure."""

    location: Optional[str] = UNSET
    """The location of the field in the state in which the evaluation error occurred."""

    state: str
    """The name of the state in which the evaluation error occurred."""


class EvaluationFailedEventDetailsDict(TypedDict):
    error: NotRequired[str]
    cause: NotRequired[str]
    location: NotRequired[str]
    state: str
