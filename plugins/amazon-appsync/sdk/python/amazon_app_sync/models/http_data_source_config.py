from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .authorization_config import AuthorizationConfig, AuthorizationConfigDict


class HttpDataSourceConfig(SdkBaseModel):
    endpoint: Optional[str] = UNSET
    """The HTTP URL endpoint. You can specify either the domain name or IP, and port combination, and the URL scheme
    must be HTTP or HTTPS. If you don't specify the port, AppSync uses the default port 80 for the HTTP endpoint and
    port 443 for HTTPS endpoints."""

    authorization_config: Optional[AuthorizationConfig] = Field(default=UNSET, alias="authorizationConfig")


class HttpDataSourceConfigDict(TypedDict):
    endpoint: NotRequired[str]
    authorization_config: NotRequired[AuthorizationConfigDict]
