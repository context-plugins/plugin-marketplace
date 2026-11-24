from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1MultiIntValues2(SdkBaseModel):
    """Optional. The config variable value in case of config variable of type multi integer."""

    values: Optional[list[int]] = UNSET
    """Optional. The config variable value of data type multi int."""


class GoogleCloudApihubV1MultiIntValues2Dict(TypedDict):
    values: NotRequired[list[int]]
