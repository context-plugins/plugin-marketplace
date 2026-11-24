from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .agent import Agent, AgentDict
from .enums.creation_state import CreationStateOrStr
from .order_line_attribute import OrderLineAttribute, OrderLineAttributeDict


class OrderLine(SdkBaseModel):
    id: Optional[str] = UNSET
    order_id: Optional[str] = Field(default=UNSET, alias="orderId")
    agent_id: Optional[str] = Field(default=UNSET, alias="agentId")
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    start_date: Optional[str] = Field(default=UNSET, alias="startDate")
    end_date: Optional[str] = Field(default=UNSET, alias="endDate")
    total_amount: Optional[float] = Field(default=UNSET, alias="totalAmount")
    billed_amount_without_tax: Optional[float] = Field(default=UNSET, alias="billedAmountWithoutTax")
    billed_tax: Optional[float] = Field(default=UNSET, alias="billedTax")
    total_billed_amount: Optional[float] = Field(default=UNSET, alias="totalBilledAmount")
    creation_state: Optional[CreationStateOrStr] = Field(default=UNSET, alias="creationState")
    agent: Optional[Agent] = UNSET
    order_line_attributes: Optional[list[OrderLineAttribute]] = Field(default=UNSET, alias="orderLineAttributes")


class OrderLineDict(TypedDict):
    id: NotRequired[str]
    order_id: NotRequired[str]
    agent_id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    start_date: NotRequired[str]
    end_date: NotRequired[str]
    total_amount: NotRequired[float]
    billed_amount_without_tax: NotRequired[float]
    billed_tax: NotRequired[float]
    total_billed_amount: NotRequired[float]
    creation_state: NotRequired[CreationStateOrStr]
    agent: NotRequired[AgentDict]
    order_line_attributes: NotRequired[list[OrderLineAttributeDict]]
