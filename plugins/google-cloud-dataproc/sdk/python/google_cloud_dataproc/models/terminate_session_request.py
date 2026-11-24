from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TerminateSessionRequest(SdkBaseModel):
    """A request to terminate an interactive session."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. A unique ID used to identify the request. If the service receives two TerminateSessionRequest
    (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.TerminateSessionRequest)s
    with the same ID, the second request is ignored.Recommendation: Set this value to a UUID
    (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z),
    numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters."""


class TerminateSessionRequestDict(TypedDict):
    request_id: NotRequired[str]
