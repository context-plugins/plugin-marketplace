from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KubernetesSoftwareConfig2(SdkBaseModel):
    """Optional. The software configuration for this Dataproc cluster running on Kubernetes."""

    component_version: Optional[dict[str, str]] = Field(default=UNSET, alias="componentVersion")
    """The components that should be installed in this Dataproc cluster. The key must be a string from the
    KubernetesComponent enumeration. The value is the version of the software to be installed. At least one entry must
    be specified."""

    properties: Optional[dict[str, str]] = UNSET
    """The properties to set on daemon config files.Property keys are specified in prefix:property format, for example
    spark:spark.kubernetes.container.image. The following are supported prefixes and their mappings: spark:
    spark-defaults.confFor more information, see Cluster properties
    (https://cloud.google.com/dataproc/docs/concepts/cluster-properties)."""


class KubernetesSoftwareConfig2Dict(TypedDict):
    component_version: NotRequired[dict[str, str]]
    properties: NotRequired[dict[str, str]]
