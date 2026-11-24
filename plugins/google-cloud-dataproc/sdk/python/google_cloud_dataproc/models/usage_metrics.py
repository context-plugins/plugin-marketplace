from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UsageMetrics(SdkBaseModel):
    """Usage metrics represent approximate total resources consumed by a workload."""

    shuffle_storage_gb_seconds: Optional[str] = Field(default=UNSET, alias="shuffleStorageGbSeconds")
    """Optional. Shuffle storage usage in (GB x seconds) (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing))."""

    accelerator_type: Optional[str] = Field(default=UNSET, alias="acceleratorType")
    """Optional. Accelerator type being used, if any Deprecated: This field is only used in runtime versions below
    3.0."""

    milli_accelerator_seconds_l4: Optional[str] = Field(default=UNSET, alias="milliAcceleratorSecondsL4")
    """Optional. L4 accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing))."""

    milli_accelerator_seconds_a10040: Optional[str] = Field(default=UNSET, alias="milliAcceleratorSecondsA10040")
    """Optional. A100-40 accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing))."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Optional. The timestamp of the usage metrics."""

    milli_accelerator_seconds: Optional[str] = Field(default=UNSET, alias="milliAcceleratorSeconds")
    """Optional. Accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing)). Deprecated: This field is only used in runtime versions
    below 3.0."""

    milli_accelerator_seconds_a10080: Optional[str] = Field(default=UNSET, alias="milliAcceleratorSecondsA10080")
    """Optional. A100-80 accelerator usage in (milliAccelerator x seconds) (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing))."""

    milli_dcu_seconds: Optional[str] = Field(default=UNSET, alias="milliDcuSeconds")
    """Optional. DCU (Dataproc Compute Units) usage in (milliDCU x seconds) (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing))."""


class UsageMetricsDict(TypedDict):
    shuffle_storage_gb_seconds: NotRequired[str]
    accelerator_type: NotRequired[str]
    milli_accelerator_seconds_l4: NotRequired[str]
    milli_accelerator_seconds_a10040: NotRequired[str]
    update_time: NotRequired[str]
    milli_accelerator_seconds: NotRequired[str]
    milli_accelerator_seconds_a10080: NotRequired[str]
    milli_dcu_seconds: NotRequired[str]
