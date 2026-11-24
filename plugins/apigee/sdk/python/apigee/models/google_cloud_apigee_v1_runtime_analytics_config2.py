from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1RuntimeAnalyticsConfig2(SdkBaseModel):
    """Runtime configuration for Analytics add-on."""

    billing_pipeline_enabled: Optional[bool] = Field(default=UNSET, alias="billingPipelineEnabled")
    """If Runtime should send billing data to AX or not."""

    enabled: Optional[bool] = UNSET
    """If the Analytics is enabled or not."""


class GoogleCloudApigeeV1RuntimeAnalyticsConfig2Dict(TypedDict):
    billing_pipeline_enabled: NotRequired[bool]
    enabled: NotRequired[bool]
