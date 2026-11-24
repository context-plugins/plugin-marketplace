from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scheme import SchemeOrStr
from .enums.uri_override_enforce_mode import UriOverrideEnforceModeOrStr
from .path_override2 import PathOverride2, PathOverride2Dict
from .query_override1 import QueryOverride1, QueryOverride1Dict


class UriOverride(SdkBaseModel):
    """URI Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending
    on the configured values."""

    port: Optional[str] = UNSET
    """Port override. When specified, replaces the port part of the task URI. For instance, for a URI
    "https://www.example.com/example" and port=123, the overridden URI becomes "https://www.example.com:123/example".
    Note that the port value must be a positive integer. Setting the port to 0 (Zero) clears the URI port."""

    scheme: Optional[SchemeOrStr] = UNSET
    """Scheme override. When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS)."""

    query_override: Optional[QueryOverride1] = Field(default=UNSET, alias="queryOverride")
    """URI query. When specified, replaces the query part of the task URI. Setting the query value to an empty string
    clears the URI query segment."""

    uri_override_enforce_mode: Optional[UriOverrideEnforceModeOrStr] = Field(
        default=UNSET, alias="uriOverrideEnforceMode"
    )
    """URI Override Enforce Mode When specified, determines the Target UriOverride mode. If not specified, it defaults
    to ALWAYS."""

    path_override: Optional[PathOverride2] = Field(default=UNSET, alias="pathOverride")
    """URI path. When specified, replaces the existing path of the task URL. Setting the path value to an empty string
    clears the URI path segment."""

    host: Optional[str] = UNSET
    """Host override. When specified, replaces the host part of the task URL. For example, if the task URL is
    "https://www.google.com," and host value is set to "example.net", the overridden URI will be changed to
    "https://example.net." Host value cannot be an empty string (INVALID_ARGUMENT)."""


class UriOverrideDict(TypedDict):
    port: NotRequired[str]
    scheme: NotRequired[SchemeOrStr]
    query_override: NotRequired[QueryOverride1Dict]
    uri_override_enforce_mode: NotRequired[UriOverrideEnforceModeOrStr]
    path_override: NotRequired[PathOverride2Dict]
    host: NotRequired[str]
