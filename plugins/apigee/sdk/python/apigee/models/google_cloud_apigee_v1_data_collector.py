from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type4 import Type4OrStr


class GoogleCloudApigeeV1DataCollector(SdkBaseModel):
    """Data collector configuration."""

    type_: Optional[Type4OrStr] = Field(default=UNSET, alias="type")
    """Immutable. The type of data this data collector will collect."""

    description: Optional[str] = UNSET
    """A description of the data collector."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. The time at which the data collector was created in milliseconds since the epoch."""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. The time at which the Data Collector was last updated in milliseconds since the epoch."""

    name: Optional[str] = UNSET
    """ID of the data collector. Must begin with ``dc_``."""


class GoogleCloudApigeeV1DataCollectorDict(TypedDict):
    type_: NotRequired[Type4OrStr]
    description: NotRequired[str]
    created_at: NotRequired[str]
    last_modified_at: NotRequired[str]
    name: NotRequired[str]
