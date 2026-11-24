from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.interconnect_state import InterconnectStateOrStr


class DeleteInterconnectResponse(SdkBaseModel):
    interconnect_state: Optional[InterconnectStateOrStr] = Field(default=UNSET, alias="interconnectState")
    """The state of the interconnect. The following are the possible values: requested: The initial state of an
    interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the
    customer. pending: The interconnect is approved, and is being initialized. available: The network link is up, and
    the interconnect is ready for use. down: The network link is down. deleting: The interconnect is being deleted.
    deleted: The interconnect is deleted. unknown: The state of the interconnect is not available."""


class DeleteInterconnectResponseDict(TypedDict):
    interconnect_state: NotRequired[InterconnectStateOrStr]
