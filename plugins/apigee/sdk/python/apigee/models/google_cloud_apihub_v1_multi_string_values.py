from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1MultiStringValues(SdkBaseModel):
    """The config variable value of data type multi string."""

    values: Optional[list[str]] = UNSET
    """Optional. The config variable value of data type multi string."""


class GoogleCloudApihubV1MultiStringValuesDict(TypedDict):
    values: NotRequired[list[str]]
