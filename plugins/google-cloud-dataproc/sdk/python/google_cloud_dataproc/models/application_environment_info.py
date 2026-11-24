from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resource_profile_info import ResourceProfileInfo, ResourceProfileInfoDict
from .spark_runtime_info import SparkRuntimeInfo, SparkRuntimeInfoDict


class ApplicationEnvironmentInfo(SdkBaseModel):
    """Details about the Environment that the application is running in."""

    system_properties: Optional[dict[str, str]] = Field(default=UNSET, alias="systemProperties")
    runtime: Optional[SparkRuntimeInfo] = UNSET
    hadoop_properties: Optional[dict[str, str]] = Field(default=UNSET, alias="hadoopProperties")
    metrics_properties: Optional[dict[str, str]] = Field(default=UNSET, alias="metricsProperties")
    classpath_entries: Optional[dict[str, str]] = Field(default=UNSET, alias="classpathEntries")
    resource_profiles: Optional[list[ResourceProfileInfo]] = Field(default=UNSET, alias="resourceProfiles")
    spark_properties: Optional[dict[str, str]] = Field(default=UNSET, alias="sparkProperties")


class ApplicationEnvironmentInfoDict(TypedDict):
    system_properties: NotRequired[dict[str, str]]
    runtime: NotRequired[SparkRuntimeInfoDict]
    hadoop_properties: NotRequired[dict[str, str]]
    metrics_properties: NotRequired[dict[str, str]]
    classpath_entries: NotRequired[dict[str, str]]
    resource_profiles: NotRequired[list[ResourceProfileInfoDict]]
    spark_properties: NotRequired[dict[str, str]]
