from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResponseMetadata(SdkBaseModel):
    """Additional information returned to client, such as debugging information."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """A unique id associated with this call. This id is logged for tracking purposes."""


class ResponseMetadataDict(TypedDict):
    request_id: NotRequired[str]
