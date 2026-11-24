from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AssignContractTemplateInput(SdkBaseModel):
    """The customers a contract template is applied to."""

    customer_ids: list[str] = Field(alias="customerIds")
    """Identifiers of the customers to create a draft contract for. Each identifier must name a tenant within the
    authenticated tenant's own hierarchy, of the tier one level below it: a distributor supplies resellers, a reseller
    supplies end customers. Repeated identifiers are ignored, and a customer already holding a contract from this
    template receives another draft."""


class AssignContractTemplateInputDict(TypedDict):
    customer_ids: list[str]
