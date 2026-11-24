from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .network_config1 import NetworkConfig1, NetworkConfig1Dict


class AuxiliaryVersionConfig(SdkBaseModel):
    """Configuration information for the auxiliary service versions."""

    network_config: Optional[NetworkConfig1] = Field(default=UNSET, alias="networkConfig")
    """Output only. The network configuration contains the endpoint URI(s) of the auxiliary Hive metastore service."""

    version: Optional[str] = UNSET
    """Optional. The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore
    service's version."""

    config_overrides: Optional[dict[str, str]] = Field(default=UNSET, alias="configOverrides")
    """Optional. A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore
    (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the
    auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides
    takes precedence."""


class AuxiliaryVersionConfigDict(TypedDict):
    network_config: NotRequired[NetworkConfig1Dict]
    version: NotRequired[str]
    config_overrides: NotRequired[dict[str, str]]
