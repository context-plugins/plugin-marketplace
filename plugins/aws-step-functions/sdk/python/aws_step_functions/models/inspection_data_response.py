from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InspectionDataResponse(SdkBaseModel):
    protocol: Optional[str] = UNSET
    """The protocol used to return the HTTP response."""

    status_code: Optional[str] = Field(default=UNSET, alias="statusCode")
    """The HTTP response status code for the HTTP response."""

    status_message: Optional[str] = Field(default=UNSET, alias="statusMessage")
    """The message associated with the HTTP status code."""

    headers: Optional[str] = UNSET
    """The response headers associated with the HTTP response."""

    body: Optional[str] = UNSET
    """The HTTP response returned."""


class InspectionDataResponseDict(TypedDict):
    protocol: NotRequired[str]
    status_code: NotRequired[str]
    status_message: NotRequired[str]
    headers: NotRequired[str]
    body: NotRequired[str]
