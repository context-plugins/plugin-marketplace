from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .degraded import Degraded, DegradedDict
from .usage import Usage, UsageDict


class ApiV1SpellcheckResponse(SdkBaseModel):
    degraded: Optional[Degraded] = UNSET
    """Present only on a partial result: a model stage could not process some sentences in time, so those sentences may
    be missing some or all of their corrections (a failed primary stage leaves a sentence unchecked; a failed secondary
    stage, e.g. neural spellcheck or postprocessing, drops only that stage's corrections). Every edit returned is still
    valid. Absent from a fully successful response. Retry the request (after a short backoff) for a complete result."""

    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1SpellcheckResponseDict(TypedDict):
    degraded: NotRequired[DegradedDict]
    usage: NotRequired[UsageDict]
