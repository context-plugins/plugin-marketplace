from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1MultiIntValues(SdkBaseModel):
    """The config variable value of data type multi int."""

    values: Optional[list[int]] = UNSET
    """Optional. The config variable value of data type multi int."""


class GoogleCloudApihubV1MultiIntValuesDict(TypedDict):
    values: NotRequired[list[int]]
