from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resiliency_group_association import ResiliencyGroupAssociation, ResiliencyGroupAssociationDict


class AssociateConnectionsToResiliencyGroupResult(SdkBaseModel):
    resiliency_group_associations: Optional[list[ResiliencyGroupAssociation]] = Field(
        default=UNSET, alias="resiliencyGroupAssociations"
    )
    """The connection associations for the resiliency group."""


class AssociateConnectionsToResiliencyGroupResultDict(TypedDict):
    resiliency_group_associations: NotRequired[list[ResiliencyGroupAssociationDict]]
