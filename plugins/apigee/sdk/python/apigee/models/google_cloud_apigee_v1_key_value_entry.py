from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1KeyValueEntry(SdkBaseModel):
    """Key value map pair where the value represents the data associated with the corresponding key. **Note**: Supported
    for Apigee hybrid 1.8.x and higher."""

    value: Optional[str] = UNSET
    """Required. Data or payload that is being retrieved and associated with the unique key."""

    name: Optional[str] = UNSET
    """Resource URI that can be used to identify the scope of the key value map entries."""


class GoogleCloudApigeeV1KeyValueEntryDict(TypedDict):
    value: NotRequired[str]
    name: NotRequired[str]
