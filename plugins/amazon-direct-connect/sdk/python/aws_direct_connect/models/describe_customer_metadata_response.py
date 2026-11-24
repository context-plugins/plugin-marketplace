from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer_agreement import CustomerAgreement, CustomerAgreementDict
from .enums.nni_partner_type import NniPartnerTypeOrStr


class DescribeCustomerMetadataResponse(SdkBaseModel):
    agreements: Optional[list[CustomerAgreement]] = UNSET
    """The list of customer agreements."""

    nni_partner_type: Optional[NniPartnerTypeOrStr] = Field(default=UNSET, alias="nniPartnerType")
    """The type of network-to-network interface (NNI) partner. The partner type will be one of the following: V1: This
    partner can only allocate 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps subgigabit connections. V2: This
    partner can only allocate 1GB, 2GB, 5GB, or 10GB hosted connections. nonPartner: The customer is not a partner."""


class DescribeCustomerMetadataResponseDict(TypedDict):
    agreements: NotRequired[list[CustomerAgreementDict]]
    nni_partner_type: NotRequired[NniPartnerTypeOrStr]
