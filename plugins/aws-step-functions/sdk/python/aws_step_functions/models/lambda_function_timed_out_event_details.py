from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LambdaFunctionTimedOutEventDetails(SdkBaseModel):
    error: Optional[str] = UNSET
    """The error code of the failure."""

    cause: Optional[str] = UNSET
    """A more detailed explanation of the cause of the timeout."""


class LambdaFunctionTimedOutEventDetailsDict(TypedDict):
    error: NotRequired[str]
    cause: NotRequired[str]
