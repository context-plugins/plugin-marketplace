from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type5 import Type5OrStr


class GoogleCloudApigeeV1DataCollectorConfig(SdkBaseModel):
    """Data collector and its configuration."""

    name: Optional[str] = UNSET
    """Name of the data collector in the following format: ``organizations/{org}/datacollectors/{datacollector}``"""

    type_: Optional[Type5OrStr] = Field(default=UNSET, alias="type")
    """Data type accepted by the data collector."""


class GoogleCloudApigeeV1DataCollectorConfigDict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[Type5OrStr]
