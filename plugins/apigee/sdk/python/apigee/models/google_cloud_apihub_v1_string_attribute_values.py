from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1StringAttributeValues(SdkBaseModel):
    """The attribute values of data type string or JSON."""

    values: Optional[list[str]] = UNSET
    """Required. The attribute values in case attribute data type is string or JSON."""


class GoogleCloudApihubV1StringAttributeValuesDict(TypedDict):
    values: NotRequired[list[str]]
