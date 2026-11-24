from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .anomaly_resource_label import AnomalyResourceLabel, AnomalyResourceLabelDict


class AnomalyResource(SdkBaseModel):
    """Resource-specific contribution to an anomaly."""

    cost: Optional[float] = UNSET
    resource_id: Optional[str] = Field(default=UNSET, alias="resourceId")
    sku_description: Optional[str] = Field(default=UNSET, alias="skuDescription")
    operation: Optional[str] = UNSET
    """For anomalies related to AWS S3"""

    labels: Optional[list[AnomalyResourceLabel]] = UNSET
    """Labels (also known as cost-allocation tags) present on this resource during the anomaly; each entry reports the
    label's key, its value, and the resource's cost tagged with that key/value pair. Cloud providers use different names
    for the same concept; GCP uses "labels", AWS uses "cost-allocation tags", and Azure uses "tags". We refer to all of
    these as labels."""


class AnomalyResourceDict(TypedDict):
    cost: NotRequired[float]
    resource_id: NotRequired[str]
    sku_description: NotRequired[str]
    operation: NotRequired[str]
    labels: NotRequired[list[AnomalyResourceLabelDict]]
