from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.optional_component import OptionalComponentOrStr


class SoftwareConfig2(SdkBaseModel):
    """Optional. The config settings for cluster software."""

    optional_components: Optional[list[OptionalComponentOrStr]] = Field(default=UNSET, alias="optionalComponents")
    """Optional. The set of components to activate on the cluster."""

    image_version: Optional[str] = Field(default=UNSET, alias="imageVersion")
    """Optional. The version of software inside the cluster. It must be one of the supported Image Versions
    (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#supported-dataproc-image-versions),
    such as "1.2" (including a subminor version, such as "1.2.29"), or the "preview" version
    (https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-versions#other_versions). If unspecified, it
    defaults to the latest Debian version."""

    properties: Optional[dict[str, str]] = UNSET
    """Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, for
    example core:hadoop.tmp.dir. The following are supported prefixes and their mappings: capacity-scheduler:
    capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml
    mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xmlFor more information, see
    Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties)."""


class SoftwareConfig2Dict(TypedDict):
    optional_components: NotRequired[list[OptionalComponentOrStr]]
    image_version: NotRequired[str]
    properties: NotRequired[dict[str, str]]
