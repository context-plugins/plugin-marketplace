from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteTapeInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    """The unique Amazon Resource Name (ARN) of the gateway that the virtual tape to delete is associated with. Use the
    ListGateways operation to return a list of gateways for your account and Amazon Web Services Region."""

    tape_arn: str = Field(alias="TapeARN")
    """The Amazon Resource Name (ARN) of the virtual tape to delete."""

    bypass_governance_retention: Optional[bool] = Field(default=UNSET, alias="BypassGovernanceRetention")
    """Set to TRUE to delete an archived tape that belongs to a custom pool with tape retention lock. Only archived
    tapes with tape retention lock set to governance can be deleted. Archived tapes with tape retention lock set to
    compliance can't be deleted."""


class DeleteTapeInputDict(TypedDict):
    gateway_arn: str
    tape_arn: str
    bypass_governance_retention: NotRequired[bool]
