from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MockErrorOutput(SdkBaseModel):
    error: Optional[str] = UNSET
    """A string denoting the error code of the exception thrown when invoking the tested state. This field is required
    if mock.errorOutput is specified."""

    cause: Optional[str] = UNSET
    """A string containing the cause of the exception thrown when executing the state's logic."""


class MockErrorOutputDict(TypedDict):
    error: NotRequired[str]
    cause: NotRequired[str]
