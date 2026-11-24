from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostsTestSendData(SdkBaseModel):
    remaining_test_sends: int
    """Number of test sends remaining for the publication today."""

    reset_at: Optional[int] = UNSET
    """Unix timestamp when the daily test send limit resets. Null if no test sends have been sent today."""


class PostsTestSendDataDict(TypedDict):
    remaining_test_sends: int
    reset_at: NotRequired[int]
