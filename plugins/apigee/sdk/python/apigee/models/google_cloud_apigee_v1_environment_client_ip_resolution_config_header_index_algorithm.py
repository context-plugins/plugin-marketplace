from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm(SdkBaseModel):
    """Resolves the client ip based on a custom header."""

    ip_header_name: Optional[str] = Field(default=UNSET, alias="ipHeaderName")
    """Required. The name of the header to extract the client ip from."""

    ip_header_index: Optional[int] = Field(default=UNSET, alias="ipHeaderIndex")
    """Required. The index of the ip in the header. Positive indices 0, 1, 2, 3 chooses indices from the left (first
    ips) Negative indices -1, -2, -3 chooses indices from the right (last ips)"""


class GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithmDict(TypedDict):
    ip_header_name: NotRequired[str]
    ip_header_index: NotRequired[int]
