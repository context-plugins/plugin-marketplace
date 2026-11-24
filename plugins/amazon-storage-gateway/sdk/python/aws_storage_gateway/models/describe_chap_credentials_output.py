from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .chap_info import ChapInfo, ChapInfoDict


class DescribeChapCredentialsOutput(SdkBaseModel):
    chap_credentials: Optional[list[ChapInfo]] = Field(default=UNSET, alias="ChapCredentials")
    """An array of ChapInfo objects that represent CHAP credentials. Each object in the array contains CHAP credential
    information for one target-initiator pair. If no CHAP credentials are set, an empty array is returned. CHAP
    credential information is provided in a JSON object with the following fields: InitiatorName: The iSCSI initiator
    that connects to the target. SecretToAuthenticateInitiator: The secret key that the initiator (for example, the
    Windows client) must provide to participate in mutual CHAP with the target. SecretToAuthenticateTarget: The secret
    key that the target must provide to par"""


class DescribeChapCredentialsOutputDict(TypedDict):
    chap_credentials: NotRequired[list[ChapInfoDict]]
