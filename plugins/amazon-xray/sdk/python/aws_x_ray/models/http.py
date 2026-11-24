from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Http(SdkBaseModel):
    http_url: Optional[str] = Field(default=UNSET, alias="HttpURL")
    """The request URL."""

    http_status: Optional[int] = Field(default=UNSET, alias="HttpStatus")
    """The response status."""

    http_method: Optional[str] = Field(default=UNSET, alias="HttpMethod")
    """The request method."""

    user_agent: Optional[str] = Field(default=UNSET, alias="UserAgent")
    """The request's user agent string."""

    client_ip: Optional[str] = Field(default=UNSET, alias="ClientIp")
    """The IP address of the requestor."""


class HttpDict(TypedDict):
    http_url: NotRequired[str]
    http_status: NotRequired[int]
    http_method: NotRequired[str]
    user_agent: NotRequired[str]
    client_ip: NotRequired[str]
