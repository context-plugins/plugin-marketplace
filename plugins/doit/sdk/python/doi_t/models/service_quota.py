from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.cloud_provider_doi_t_service_quotas_api import CloudProviderDoiTServiceQuotasApiOrStr
from .enums.status_doi_t_service_quotas_api import StatusDoiTServiceQuotasApiOrStr
from .service_quota_resource import ServiceQuotaResource, ServiceQuotaResourceDict


class ServiceQuota(SdkBaseModel):
    cloud_provider: CloudProviderDoiTServiceQuotasApiOrStr = Field(alias="cloudProvider")
    """Cloud provider that owns the quota."""

    resource: ServiceQuotaResource
    service: str
    """Cloud service associated with the quota."""

    quota: str
    """Provider quota or metric name."""

    region: Optional[str] = UNSET
    """Cloud region associated with the quota. Omitted for global quotas."""

    limit: float
    """Current quota limit."""

    usage: float
    """Current measured quota usage."""

    utilization_percent: float = Field(alias="utilizationPercent")
    """Usage divided by limit, expressed as a percentage."""

    status: StatusDoiTServiceQuotasApiOrStr
    """Normalized utilization status. Warning begins at 80 percent; exceeded begins at 100 percent."""

    observed_at: RFC3339DateTime = Field(alias="observedAt")
    """Time when DoiT last updated the provider snapshot."""


class ServiceQuotaDict(TypedDict):
    cloud_provider: CloudProviderDoiTServiceQuotasApiOrStr
    resource: ServiceQuotaResourceDict
    service: str
    quota: str
    region: NotRequired[str]
    limit: float
    usage: float
    utilization_percent: float
    status: StatusDoiTServiceQuotasApiOrStr
    observed_at: RFC3339DateTime
