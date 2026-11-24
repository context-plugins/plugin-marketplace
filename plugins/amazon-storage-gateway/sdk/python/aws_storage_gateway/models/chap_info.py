from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ChapInfo(SdkBaseModel):
    target_arn: Optional[str] = Field(default=UNSET, alias="TargetARN")
    """The Amazon Resource Name (ARN) of the volume. Valid Values: 50 to 500 lowercase letters, numbers, periods (.),
    and hyphens (-)."""

    secret_to_authenticate_initiator: Optional[str] = Field(default=UNSET, alias="SecretToAuthenticateInitiator")
    """The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP
    with the target."""

    initiator_name: Optional[str] = Field(default=UNSET, alias="InitiatorName")
    """The iSCSI initiator that connects to the target."""

    secret_to_authenticate_target: Optional[str] = Field(default=UNSET, alias="SecretToAuthenticateTarget")
    """The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g., Windows
    client)."""


class ChapInfoDict(TypedDict):
    target_arn: NotRequired[str]
    secret_to_authenticate_initiator: NotRequired[str]
    initiator_name: NotRequired[str]
    secret_to_authenticate_target: NotRequired[str]
