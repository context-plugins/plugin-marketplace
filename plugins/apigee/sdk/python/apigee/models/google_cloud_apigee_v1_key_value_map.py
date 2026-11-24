from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1KeyValueMap(SdkBaseModel):
    """Collection of key/value string pairs."""

    encrypted: Optional[bool] = UNSET
    """Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward
    compatibility and the value of encrypted will always be ``true``. Apigee X and hybrid do not support unencrypted key
    value maps."""

    masked_values: Optional[bool] = Field(default=UNSET, alias="maskedValues")
    """Optional. Flag that specifies whether entry values will be masked when returned."""

    name: Optional[str] = UNSET
    """Required. ID of the key value map."""


class GoogleCloudApigeeV1KeyValueMapDict(TypedDict):
    encrypted: NotRequired[bool]
    masked_values: NotRequired[bool]
    name: NotRequired[str]
