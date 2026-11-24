from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HttpBody1(SdkBaseModel):
    """Optional. Body of the HTTP request. The body can take any generic value. The value is written to the HttpRequest
    of the [Task]."""

    extensions: Optional[list[Any]] = UNSET
    """Application specific response metadata. Must be set in the first response for streaming APIs."""

    data: Optional[str] = UNSET
    """The HTTP request/response body as raw binary."""

    content_type: Optional[str] = Field(default=UNSET, alias="contentType")
    """The HTTP Content-Type header value specifying the content type of the body."""


class HttpBody1Dict(TypedDict):
    extensions: NotRequired[list[Any]]
    data: NotRequired[str]
    content_type: NotRequired[str]
