from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.connection_state import ConnectionStateOrStr


class ConfirmConnectionResponse(SdkBaseModel):
    connection_state: Optional[ConnectionStateOrStr] = Field(default=UNSET, alias="connectionState")
    """The state of the connection. The following are the possible values: ordering: The initial state of a hosted
    connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted
    connection confirms or declines the connection order. requested: The initial state of a standard connection. The
    connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer. pending:
    The connection has been approved and is being initialized. available: The network link is up and the connection is
    ready for use. down: The network l"""


class ConfirmConnectionResponseDict(TypedDict):
    connection_state: NotRequired[ConnectionStateOrStr]
