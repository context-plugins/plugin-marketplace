from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .consumer import Consumer, ConsumerDict


class NetworkConfig3(SdkBaseModel):
    """Optional. The configuration specifying the network settings for the Dataproc Metastore service."""

    consumers: Optional[list[Consumer]] = UNSET
    """Immutable. The consumer-side network configuration for the Dataproc Metastore instance."""


class NetworkConfig3Dict(TypedDict):
    consumers: NotRequired[list[ConsumerDict]]
