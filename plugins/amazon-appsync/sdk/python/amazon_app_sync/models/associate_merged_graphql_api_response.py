from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_api_association import SourceApiAssociation, SourceApiAssociationDict


class AssociateMergedGraphqlApiResponse(SdkBaseModel):
    source_api_association: Optional[SourceApiAssociation] = Field(default=UNSET, alias="sourceApiAssociation")


class AssociateMergedGraphqlApiResponseDict(TypedDict):
    source_api_association: NotRequired[SourceApiAssociationDict]
