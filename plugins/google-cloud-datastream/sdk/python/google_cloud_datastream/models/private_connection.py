from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state2 import State2OrStr
from .error2 import Error2, Error2Dict
from .psc_interface_config1 import PscInterfaceConfig1, PscInterfaceConfig1Dict
from .vpc_peering_config2 import VpcPeeringConfig2, VpcPeeringConfig2Dict


class PrivateConnection(SdkBaseModel):
    """The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's
    network."""

    state: Optional[State2OrStr] = UNSET
    """Output only. The state of the Private Connection."""

    error: Optional[Error2] = UNSET
    """Output only. In case of error, the details of the error in a user-friendly format."""

    labels: Optional[dict[str, str]] = UNSET
    """Labels."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Display name."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The update time of the resource."""

    vpc_peering_config: Optional[VpcPeeringConfig2] = Field(default=UNSET, alias="vpcPeeringConfig")
    """VPC Peering Config."""

    satisfies_pzs: Optional[bool] = Field(default=UNSET, alias="satisfiesPzs")
    """Output only. Reserved for future use."""

    satisfies_pzi: Optional[bool] = Field(default=UNSET, alias="satisfiesPzi")
    """Output only. Reserved for future use."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The create time of the resource."""

    psc_interface_config: Optional[PscInterfaceConfig1] = Field(default=UNSET, alias="pscInterfaceConfig")
    """PSC Interface Config."""

    name: Optional[str] = UNSET
    """Output only. Identifier. The resource's name."""


class PrivateConnectionDict(TypedDict):
    state: NotRequired[State2OrStr]
    error: NotRequired[Error2Dict]
    labels: NotRequired[dict[str, str]]
    display_name: NotRequired[str]
    update_time: NotRequired[str]
    vpc_peering_config: NotRequired[VpcPeeringConfig2Dict]
    satisfies_pzs: NotRequired[bool]
    satisfies_pzi: NotRequired[bool]
    create_time: NotRequired[str]
    psc_interface_config: NotRequired[PscInterfaceConfig1Dict]
    name: NotRequired[str]
