from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .authentication_config2 import AuthenticationConfig2, AuthenticationConfig2Dict


class ExecutionConfig2(SdkBaseModel):
    """Optional. Execution configuration for a workload."""

    ttl: Optional[str] = UNSET
    """Optional. The duration after which the workload will be terminated, specified as the JSON representation for
    Duration (https://protobuf.dev/programming-guides/proto3/#json). When the workload exceeds this duration, it will be
    unconditionally terminated without waiting for ongoing work to finish. If ttl is not specified for a batch workload,
    the workload will be allowed to run until it exits naturally (or run forever without exiting). If ttl is not
    specified for an interactive session, it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+
    runtime version, it defaults to 4 hours. Minimum value is 10 minutes; maximum value is 14 days. If both ttl and
    idle_ttl are specified (for an interactive session), the conditions are treated as OR conditions: the workload will
    be terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first."""

    idle_ttl: Optional[str] = Field(default=UNSET, alias="idleTtl")
    """Optional. Applies to sessions only. The duration to keep the session alive while it's idling. Exceeding this
    threshold causes the session to terminate. This field cannot be set on a batch workload. Minimum value is 10
    minutes; maximum value is 14 days (see JSON representation of Duration
    (https://developers.google.com/protocol-buffers/docs/proto3#json)). Defaults to 1 hour if not set. If both ttl and
    idle_ttl are specified for an interactive session, the conditions are treated as OR conditions: the workload will be
    terminated when it has been idle for idle_ttl or when ttl has been exceeded, whichever occurs first."""

    resource_manager_tags: Optional[dict[str, str]] = Field(default=UNSET, alias="resourceManagerTags")
    """Optional. Associates Resource Manager tags with the workload nodes. There is a max limit of 30 tags. Keys and
    values can be either in numeric format, such as tagKeys/{tag_key_id} and tagValues/{tag_value_id}, or in namespaced
    format, such as {org_id|project_id}/{tag_key_short_name} and {tag_value_short_name}."""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """Optional. Service account that used to execute workload."""

    subnetwork_uri: Optional[str] = Field(default=UNSET, alias="subnetworkUri")
    """Optional. Subnetwork URI to connect workload to."""

    kms_key: Optional[str] = Field(default=UNSET, alias="kmsKey")
    """Optional. The Cloud KMS key to use for encryption."""

    authentication_config: Optional[AuthenticationConfig2] = Field(default=UNSET, alias="authenticationConfig")
    """Optional. Authentication configuration used to set the default identity for the workload execution. The config
    specifies the type of identity (service account or user) that will be used by workloads to access resources on the
    project(s)."""

    staging_bucket: Optional[str] = Field(default=UNSET, alias="stagingBucket")
    """Optional. A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and
    other ephemeral data, such as Spark history files. If you do not specify a staging bucket, Cloud Dataproc will
    determine a Cloud Storage location according to the region where your workload is running, and then create and
    manage project-level, per-location staging and temporary buckets. This field requires a Cloud Storage bucket name,
    not a gs://... URI to a Cloud Storage bucket."""

    network_tags: Optional[list[str]] = Field(default=UNSET, alias="networkTags")
    """Optional. Tags used for network traffic control."""

    network_uri: Optional[str] = Field(default=UNSET, alias="networkUri")
    """Optional. Network URI to connect workload to."""


class ExecutionConfig2Dict(TypedDict):
    ttl: NotRequired[str]
    idle_ttl: NotRequired[str]
    resource_manager_tags: NotRequired[dict[str, str]]
    service_account: NotRequired[str]
    subnetwork_uri: NotRequired[str]
    kms_key: NotRequired[str]
    authentication_config: NotRequired[AuthenticationConfig2Dict]
    staging_bucket: NotRequired[str]
    network_tags: NotRequired[list[str]]
    network_uri: NotRequired[str]
