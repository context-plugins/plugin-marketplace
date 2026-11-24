from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1StringAttributeValues4(SdkBaseModel):
    """The attribute values associated with a resource in case attribute data type is URL, URI or IP, like
    gs://bucket-name/object-name."""

    values: Optional[list[str]] = UNSET
    """Required. The attribute values in case attribute data type is string or JSON."""


class GoogleCloudApihubV1StringAttributeValues4Dict(TypedDict):
    values: NotRequired[list[str]]
