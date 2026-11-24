from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api_association import ApiAssociation, ApiAssociationDict


class GetApiAssociationResponse(SdkBaseModel):
    api_association: Optional[ApiAssociation] = Field(default=UNSET, alias="apiAssociation")


class GetApiAssociationResponseDict(TypedDict):
    api_association: NotRequired[ApiAssociationDict]
