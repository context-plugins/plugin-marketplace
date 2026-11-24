from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MacSecKey(SdkBaseModel):
    secret_arn: Optional[str] = Field(default=UNSET, alias="secretARN")
    """The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key."""

    ckn: Optional[str] = UNSET
    """The Connection Key Name (CKN) for the MAC Security secret key."""

    state: Optional[str] = UNSET
    """The state of the MAC Security (MACsec) secret key. The possible values are: associating: The MAC Security
    (MACsec) secret key is being validated and not yet associated with the connection or LAG. associated: The MAC
    Security (MACsec) secret key is validated and associated with the connection or LAG. disassociating: The MAC
    Security (MACsec) secret key is being disassociated from the connection or LAG disassociated: The MAC Security
    (MACsec) secret key is no longer associated with the connection or LAG."""

    start_on: Optional[str] = Field(default=UNSET, alias="startOn")
    """The date that the MAC Security (MACsec) secret key takes effect. The value is displayed in UTC format."""


class MacSecKeyDict(TypedDict):
    secret_arn: NotRequired[str]
    ckn: NotRequired[str]
    state: NotRequired[str]
    start_on: NotRequired[str]
