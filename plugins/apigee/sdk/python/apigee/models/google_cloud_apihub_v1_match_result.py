from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1MatchResult(SdkBaseModel):
    """MatchResult represents the result of matching a discovered API operation with a catalog API operation."""

    name: Optional[str] = UNSET
    """Output only. The name of the matched API Operation. Format:
    ``projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}``"""


class GoogleCloudApihubV1MatchResultDict(TypedDict):
    name: NotRequired[str]
