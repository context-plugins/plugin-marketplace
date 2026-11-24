from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state import StateOrStr


class ServiceResourceCost(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The type of the Amazon Web Services resource."""

    state: Optional[StateOrStr] = Field(default=UNSET, alias="State")
    """The state of the resource. The resource is ACTIVE if it produces metrics, events, or logs within an hour,
    otherwise it is INACTIVE. You pay for the number of active Amazon Web Services resource hours analyzed for each
    resource. Inactive resources are not charged."""

    count: Optional[int] = Field(default=UNSET, alias="Count")
    """The number of active resources analyzed for this service to create a monthly cost estimate."""

    unit_cost: Optional[float] = Field(default=UNSET, alias="UnitCost")
    """The price per hour to analyze the resources in the service. For more information, see Estimate your Amazon DevOps
    Guru costs and Amazon DevOps Guru pricing."""

    cost: Optional[float] = Field(default=UNSET, alias="Cost")
    """The total estimated monthly cost to analyze the active resources for this resource."""


class ServiceResourceCostDict(TypedDict):
    type_: NotRequired[str]
    state: NotRequired[StateOrStr]
    count: NotRequired[int]
    unit_cost: NotRequired[float]
    cost: NotRequired[float]
