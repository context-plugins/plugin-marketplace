from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DebugMask(SdkBaseModel):
    response_json_paths: Optional[list[str]] = Field(default=UNSET, alias="responseJSONPaths")
    """List of JSON paths that specify the JSON elements to be filtered from JSON response message payloads."""

    name: Optional[str] = UNSET
    """Name of the debug mask."""

    request_json_paths: Optional[list[str]] = Field(default=UNSET, alias="requestJSONPaths")
    """List of JSON paths that specify the JSON elements to be filtered from JSON request message payloads."""

    fault_json_paths: Optional[list[str]] = Field(default=UNSET, alias="faultJSONPaths")
    """List of JSON paths that specify the JSON elements to be filtered from JSON payloads in error flows."""

    variables: Optional[list[str]] = UNSET
    """List of variables that should be masked from the debug output."""

    fault_x_paths: Optional[list[str]] = Field(default=UNSET, alias="faultXPaths")
    """List of XPaths that specify the XML elements to be filtered from XML payloads in error flows."""

    response_x_paths: Optional[list[str]] = Field(default=UNSET, alias="responseXPaths")
    """List of XPaths that specify the XML elements to be filtered from XML response message payloads."""

    request_x_paths: Optional[list[str]] = Field(default=UNSET, alias="requestXPaths")
    """List of XPaths that specify the XML elements to be filtered from XML request message payloads."""

    namespaces: Optional[dict[str, str]] = UNSET
    """Map of namespaces to URIs."""


class GoogleCloudApigeeV1DebugMaskDict(TypedDict):
    response_json_paths: NotRequired[list[str]]
    name: NotRequired[str]
    request_json_paths: NotRequired[list[str]]
    fault_json_paths: NotRequired[list[str]]
    variables: NotRequired[list[str]]
    fault_x_paths: NotRequired[list[str]]
    response_x_paths: NotRequired[list[str]]
    request_x_paths: NotRequired[list[str]]
    namespaces: NotRequired[dict[str, str]]
