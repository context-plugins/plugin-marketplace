from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateChapCredentialsInput(SdkBaseModel):
    target_arn: str = Field(alias="TargetARN")
    """The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return
    the TargetARN for specified VolumeARN."""

    secret_to_authenticate_initiator: str = Field(alias="SecretToAuthenticateInitiator")
    """The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP
    with the target. The secret key must be between 12 and 16 bytes when encoded in UTF-8."""

    initiator_name: str = Field(alias="InitiatorName")
    """The iSCSI initiator that connects to the target."""

    secret_to_authenticate_target: Optional[str] = Field(default=UNSET, alias="SecretToAuthenticateTarget")
    """The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows
    client). Byte constraints: Minimum bytes of 12. Maximum bytes of 16. The secret key must be between 12 and 16 bytes
    when encoded in UTF-8."""


class UpdateChapCredentialsInputDict(TypedDict):
    target_arn: str
    secret_to_authenticate_initiator: str
    initiator_name: str
    secret_to_authenticate_target: NotRequired[str]
