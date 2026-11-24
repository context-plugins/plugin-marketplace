from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AnalyzeBatchRequest(SdkBaseModel):
    """A request to analyze a batch workload."""

    requestor_id: Optional[str] = Field(default=UNSET, alias="requestorId")
    """Optional. The requestor ID is used to identify if the request comes from a GCA investigation or the old Ask
    Gemini Experience."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. A unique ID used to identify the request. If the service receives two AnalyzeBatchRequest
    (http://cloud/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.AnalyzeBatchRequest)s
    with the same request_id, the second request is ignored and the Operation that corresponds to the first request
    created and stored in the backend is returned.Recommendation: Set this value to a UUID
    (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only letters (a-z, A-Z),
    numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters."""


class AnalyzeBatchRequestDict(TypedDict):
    requestor_id: NotRequired[str]
    request_id: NotRequired[str]
