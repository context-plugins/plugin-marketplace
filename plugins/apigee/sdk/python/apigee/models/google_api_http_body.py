from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleApiHttpBody(SdkBaseModel):
    """Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be
    represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and
    non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which
    is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and
    also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string
    request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service
    ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc
    UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service
    CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc
    UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how
    the request and response bodies are handled, all other features will continue to work unchanged."""

    data: Optional[str] = UNSET
    """The HTTP request/response body as raw binary."""

    content_type: Optional[str] = Field(default=UNSET, alias="contentType")
    """The HTTP Content-Type header value specifying the content type of the body."""

    extensions: Optional[list[Any]] = UNSET
    """Application specific response metadata. Must be set in the first response for streaming APIs."""


class GoogleApiHttpBodyDict(TypedDict):
    data: NotRequired[str]
    content_type: NotRequired[str]
    extensions: NotRequired[list[Any]]
