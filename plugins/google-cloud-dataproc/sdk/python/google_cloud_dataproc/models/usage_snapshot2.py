from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UsageSnapshot2(SdkBaseModel):
    """Output only. Snapshot of current workload resource usage."""

    milli_accelerator_a10080: Optional[str] = Field(default=UNSET, alias="milliAcceleratorA10080")
    """Optional. Milli (one-thousandth) accelerator for A100-80 accelerators. (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing))"""

    milli_accelerator_l4: Optional[str] = Field(default=UNSET, alias="milliAcceleratorL4")
    """Optional. Milli (one-thousandth) accelerator for L4 accelerators. (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing))"""

    milli_dcu_premium: Optional[str] = Field(default=UNSET, alias="milliDcuPremium")
    """Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) charged at premium tier (see Dataproc Serverless
    pricing (https://cloud.google.com/dataproc-serverless/pricing))."""

    shuffle_storage_gb: Optional[str] = Field(default=UNSET, alias="shuffleStorageGb")
    """Optional. Shuffle Storage in gigabytes (GB). (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing))"""

    milli_dcu: Optional[str] = Field(default=UNSET, alias="milliDcu")
    """Optional. Milli (one-thousandth) Dataproc Compute Units (DCUs) (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing))."""

    accelerator_type: Optional[str] = Field(default=UNSET, alias="acceleratorType")
    """Optional. Accelerator type being used, if any Deprecated: This field is only used in runtime versions below
    3.0."""

    milli_accelerator: Optional[str] = Field(default=UNSET, alias="milliAccelerator")
    """Optional. Milli (one-thousandth) accelerator. (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing)) Deprecated: This field is only used in runtime versions
    below 3.0."""

    snapshot_time: Optional[str] = Field(default=UNSET, alias="snapshotTime")
    """Optional. The timestamp of the usage snapshot."""

    milli_accelerator_a10040: Optional[str] = Field(default=UNSET, alias="milliAcceleratorA10040")
    """Optional. Milli (one-thousandth) accelerator for A100-40 accelerators. (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing))"""

    shuffle_storage_gb_premium: Optional[str] = Field(default=UNSET, alias="shuffleStorageGbPremium")
    """Optional. Shuffle Storage in gigabytes (GB) charged at premium tier. (see Dataproc Serverless pricing
    (https://cloud.google.com/dataproc-serverless/pricing))"""


class UsageSnapshot2Dict(TypedDict):
    milli_accelerator_a10080: NotRequired[str]
    milli_accelerator_l4: NotRequired[str]
    milli_dcu_premium: NotRequired[str]
    shuffle_storage_gb: NotRequired[str]
    milli_dcu: NotRequired[str]
    accelerator_type: NotRequired[str]
    milli_accelerator: NotRequired[str]
    snapshot_time: NotRequired[str]
    milli_accelerator_a10040: NotRequired[str]
    shuffle_storage_gb_premium: NotRequired[str]
