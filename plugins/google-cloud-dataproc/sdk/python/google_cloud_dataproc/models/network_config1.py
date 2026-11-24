from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .consumer import Consumer, ConsumerDict


class NetworkConfig1(SdkBaseModel):
    """Output only. The network configuration contains the endpoint URI(s) of the auxiliary Hive metastore service."""

    consumers: Optional[list[Consumer]] = UNSET
    """Immutable. The consumer-side network configuration for the Dataproc Metastore instance."""


class NetworkConfig1Dict(TypedDict):
    consumers: NotRequired[list[ConsumerDict]]
