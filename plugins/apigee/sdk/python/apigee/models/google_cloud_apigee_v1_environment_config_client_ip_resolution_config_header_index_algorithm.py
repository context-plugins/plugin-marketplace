from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithm(SdkBaseModel):
    """Resolves the client ip based on a custom header."""

    ip_header_index: Optional[int] = Field(default=UNSET, alias="ipHeaderIndex")
    """The index of the ip in the header. (By default, value is 0 if missing)"""

    ip_header_name: Optional[str] = Field(default=UNSET, alias="ipHeaderName")
    """The name of the header to extract the client ip from."""


class GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithmDict(TypedDict):
    ip_header_index: NotRequired[int]
    ip_header_name: NotRequired[str]
