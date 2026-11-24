from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_doi_t_service_quotas_api import TypeDoiTServiceQuotasApiOrStr


class ServiceQuotaResource(SdkBaseModel):
    type_: TypeDoiTServiceQuotasApiOrStr = Field(alias="type")
    """Provider resource scope for the quota."""

    id: str
    """AWS account ID or Google Cloud project ID."""

    name: Optional[str] = UNSET
    """Human-readable resource name when available."""


class ServiceQuotaResourceDict(TypedDict):
    type_: TypeDoiTServiceQuotasApiOrStr
    id: str
    name: NotRequired[str]
