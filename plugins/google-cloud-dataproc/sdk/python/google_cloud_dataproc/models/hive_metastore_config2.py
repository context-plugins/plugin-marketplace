from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .auxiliary_version_config import AuxiliaryVersionConfig, AuxiliaryVersionConfigDict
from .enums.endpoint_protocol import EndpointProtocolOrStr
from .kerberos_config22 import KerberosConfig22, KerberosConfig22Dict


class HiveMetastoreConfig2(SdkBaseModel):
    """Configuration information specific to running Hive metastore software as the metastore service."""

    kerberos_config: Optional[KerberosConfig22] = Field(default=UNSET, alias="kerberosConfig")
    """Optional. Information used to configure the Hive metastore service as a service principal in a Kerberos realm. To
    disable Kerberos, use the UpdateService method and specify this field's path (hive_metastore_config.kerberos_config)
    in the request's update_mask while omitting this field from the request's service."""

    endpoint_protocol: Optional[EndpointProtocolOrStr] = Field(default=UNSET, alias="endpointProtocol")
    """Optional. The protocol to use for the metastore service endpoint. If unspecified, defaults to THRIFT."""

    auxiliary_versions: Optional[dict[str, AuxiliaryVersionConfig]] = Field(default=UNSET, alias="auxiliaryVersions")
    """Optional. A mapping of Hive metastore version to the auxiliary version configuration. When specified, a secondary
    Hive metastore service is created along with the primary service. All auxiliary versions must be less than the
    service's primary version. The key is the auxiliary service name and it must match the regular expression a-z?. This
    means that the first character must be a lowercase letter, and all the following characters must be hyphens,
    lowercase letters, or digits, except the last character, which cannot be a hyphen."""

    version: Optional[str] = UNSET
    """Immutable. The Hive metastore schema version."""

    config_overrides: Optional[dict[str, str]] = Field(default=UNSET, alias="configOverrides")
    """Optional. A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in
    hive-site.xml). The mappings override system defaults (some keys cannot be overridden). These overrides are also
    applied to auxiliary versions and can be further customized in the auxiliary version's AuxiliaryVersionConfig."""


class HiveMetastoreConfig2Dict(TypedDict):
    kerberos_config: NotRequired[KerberosConfig22Dict]
    endpoint_protocol: NotRequired[EndpointProtocolOrStr]
    auxiliary_versions: NotRequired[dict[str, AuxiliaryVersionConfigDict]]
    version: NotRequired[str]
    config_overrides: NotRequired[dict[str, str]]
