from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class CancelJobResponse(SdkBaseModel):
    """Job cancel result.

    ``cancelled`` counts the non-terminal traces marked ``cancelling``. The rewrite transitions rows in one server-side
    pass, so there is no running-vs-queued split to report."""

    status: str = "accepted"
    cancelled: int


class CancelJobResponseDict(TypedDict):
    status: NotRequired[str]
    cancelled: int
