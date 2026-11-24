from __future__ import annotations

from typing import Any, Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.data1 import Data1, Data1Dict
from .usage import Usage, UsageDict


class JobAcceptedEnvelope(SdkBaseModel):
    """Returned with HTTP 202 when a request escalates to audio transcription. Poll poll_url (or wait for the
    callback_url delivery); credits are charged on delivery, not here."""

    ok: Literal["True"] = "True"
    request_id: str
    status: Literal["processing"] = "processing"
    job_id: str
    poll_url: str
    """Path of the job endpoint to poll."""

    data: Optional[Data1] = UNSET
    """Either a transcript_job placeholder, or a transcript block with null text/segments, depending on how the request
    escalated."""

    ai_fallback: Optional[Any] = UNSET
    """Why transcription engaged and what delivery will cost, e.g. {engaged, captions_unavailable, message,
    cost_credits}."""

    usage: Optional[Usage] = UNSET


class JobAcceptedEnvelopeDict(TypedDict):
    ok: Literal["True"]
    request_id: str
    status: Literal["processing"]
    job_id: str
    poll_url: str
    data: NotRequired[Data1Dict]
    ai_fallback: NotRequired[Any]
    usage: NotRequired[UsageDict]
