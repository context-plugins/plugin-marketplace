from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.reason import ReasonOrStr


class Degraded(SdkBaseModel):
    """Present only on a partial result: a model stage could not process some sentences in time, so those sentences may
    be missing some or all of their corrections (a failed primary stage leaves a sentence unchecked; a failed secondary
    stage, e.g. neural spellcheck or postprocessing, drops only that stage's corrections). Every edit returned is still
    valid. Absent from a fully successful response. Retry the request (after a short backoff) for a complete result."""

    reason: ReasonOrStr
    sentences_degraded: int
    sentences_total: int


class DegradedDict(TypedDict):
    reason: ReasonOrStr
    sentences_degraded: int
    sentences_total: int
