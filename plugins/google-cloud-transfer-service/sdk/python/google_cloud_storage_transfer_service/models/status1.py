from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Status1(SdkBaseModel):
    """The error result of the operation in case of failure or cancellation."""

    message: Optional[str] = UNSET
    """A developer-facing error message, which should be in English. Any user-facing error message should be localized
    and sent in the google.rpc.Status.details field, or localized by the client."""

    code: Optional[int] = UNSET
    """The status code, which should be an enum value of google.rpc.Code."""

    details: Optional[list[Any]] = UNSET
    """A list of messages that carry the error details. There is a common set of message types for APIs to use."""


class Status1Dict(TypedDict):
    message: NotRequired[str]
    code: NotRequired[int]
    details: NotRequired[list[Any]]
