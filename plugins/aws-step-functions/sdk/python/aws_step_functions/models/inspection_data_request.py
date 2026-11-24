from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InspectionDataRequest(SdkBaseModel):
    protocol: Optional[str] = UNSET
    """The protocol used to make the HTTP request."""

    method: Optional[str] = UNSET
    """The HTTP method used for the HTTP request."""

    url: Optional[str] = UNSET
    """The API endpoint used for the HTTP request."""

    headers: Optional[str] = UNSET
    """The request headers associated with the HTTP request."""

    body: Optional[str] = UNSET
    """The request body for the HTTP request."""


class InspectionDataRequestDict(TypedDict):
    protocol: NotRequired[str]
    method: NotRequired[str]
    url: NotRequired[str]
    headers: NotRequired[str]
    body: NotRequired[str]
