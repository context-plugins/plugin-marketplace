from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class QaExecutionError(SdkBaseModel):
    """A step of a check that did not finish.

    ``reason`` is shown to everyone who can read the result, so producers write it from code: no model output, raw
    analysis context, or credentials."""

    stage: str
    reason: str


class QaExecutionErrorDict(TypedDict):
    stage: str
    reason: str
