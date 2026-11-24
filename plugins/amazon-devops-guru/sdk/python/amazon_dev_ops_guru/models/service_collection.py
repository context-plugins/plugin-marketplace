from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.service_name_amazon_dev_ops_guru_anomalies_api import ServiceNameAmazonDevOpsGuruAnomaliesApiOrStr


class ServiceCollection(SdkBaseModel):
    service_names: Optional[list[ServiceNameAmazonDevOpsGuruAnomaliesApiOrStr]] = Field(
        default=UNSET, alias="ServiceNames"
    )
    """An array of strings that each specifies the name of an Amazon Web Services service."""


class ServiceCollectionDict(TypedDict):
    service_names: NotRequired[list[ServiceNameAmazonDevOpsGuruAnomaliesApiOrStr]]
