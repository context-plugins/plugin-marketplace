from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state import StateOrStr


class ResiliencyGroupAssociation(SdkBaseModel):
    resiliency_group_id: Optional[str] = Field(default=UNSET, alias="resiliencyGroupId")
    """The ID of the resiliency group."""

    connection_arn: Optional[str] = Field(default=UNSET, alias="connectionArn")
    """The Amazon Resource Name (ARN) of the associated connection."""

    state: Optional[StateOrStr] = UNSET
    """The state of the association. The valid values are associating, associated, disassociating, and disassociated."""


class ResiliencyGroupAssociationDict(TypedDict):
    resiliency_group_id: NotRequired[str]
    connection_arn: NotRequired[str]
    state: NotRequired[StateOrStr]
