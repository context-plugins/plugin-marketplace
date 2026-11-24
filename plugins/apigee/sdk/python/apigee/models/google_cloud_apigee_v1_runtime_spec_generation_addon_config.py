from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig(SdkBaseModel):
    """Runtime configuration for the Spec Generation add-on. All fields are proto3 primitives (bool, string, double)
    rather than google.protobuf.*Value wrappers because the runtime consumer deserializes the JSON via Gson field
    reflection with no registered type adapters. Wrapper types would serialize as JSON objects/null that Gson cannot
    bind to Java primitive fields."""

    api_observations_pubsub_topic: Optional[str] = Field(default=UNSET, alias="apiObservationsPubsubTopic")
    """Full Pub/Sub topic path in the Apigee Runtime Tenant Project where the Schema Inferring Engine publishes inferred
    ApiObservation messages. Format: projects/{project}/topics/{topic}. Same sentinel semantics as
    raw_observations_pubsub_topic. Default: empty string."""

    enabled: Optional[bool] = UNSET
    """Whether the Spec Generation add-on is active for this environment. Default: false."""

    raw_observations_pubsub_topic: Optional[str] = Field(default=UNSET, alias="rawObservationsPubsubTopic")
    """Full Pub/Sub topic path in the Apigee Runtime Tenant Project where the message processor publishes captured
    RawObservation messages. Format: projects/{project}/topics/{topic}. Empty string is the "not configured" sentinel;
    the consumer short-circuits publishing when empty. Default: empty string."""

    sampling_rate: Optional[float] = Field(default=UNSET, alias="samplingRate")
    """Fraction of eligible transactions to capture, in [0.0, 1.0]. The consumer enforces an internal upper-bound clamp
    independently of this field. Default: 0.0 (omitted from JSON per proto3 default-scalar-omission; the consumer's
    field initializer supplies the effective 0.01 fallback)."""

    enabled_until: Optional[str] = Field(default=UNSET, alias="enabledUntil")
    """ISO-8601 timestamp until which Spec Generation remains active (e.g. "2026-12-31T23:59:59Z"). Empty string is the
    canonical "not configured" sentinel and MUST be treated by the consumer as "expired" (short-circuit before parsing).
    Default: empty string."""


class GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfigDict(TypedDict):
    api_observations_pubsub_topic: NotRequired[str]
    enabled: NotRequired[bool]
    raw_observations_pubsub_topic: NotRequired[str]
    sampling_rate: NotRequired[float]
    enabled_until: NotRequired[str]
