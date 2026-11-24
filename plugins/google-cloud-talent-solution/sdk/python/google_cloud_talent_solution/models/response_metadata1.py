from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResponseMetadata1(SdkBaseModel):
    """Additional information for the API invocation, such as the request tracking id."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """A unique id associated with this call. This id is logged for tracking purposes."""


class ResponseMetadata1Dict(TypedDict):
    request_id: NotRequired[str]
