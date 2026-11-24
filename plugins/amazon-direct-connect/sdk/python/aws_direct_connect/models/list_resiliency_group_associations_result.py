from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resiliency_group_association import ResiliencyGroupAssociation, ResiliencyGroupAssociationDict


class ListResiliencyGroupAssociationsResult(SdkBaseModel):
    items: Optional[list[ResiliencyGroupAssociation]] = UNSET
    """The connection associations for the resiliency group."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to use to retrieve the next page of results. This value is null when there are no more results to
    return."""


class ListResiliencyGroupAssociationsResultDict(TypedDict):
    items: NotRequired[list[ResiliencyGroupAssociationDict]]
    next_token: NotRequired[str]
