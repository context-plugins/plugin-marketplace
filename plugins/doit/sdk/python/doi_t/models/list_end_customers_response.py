from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .end_customer_node import EndCustomerNode, EndCustomerNodeDict


class ListEndCustomersResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    items: list[EndCustomerNode]


class ListEndCustomersResponseDict(TypedDict):
    items: list[EndCustomerNodeDict]
