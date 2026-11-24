from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_api_association_config import SourceApiAssociationConfig, SourceApiAssociationConfigDict


class V1MergedApisSourceApiAssociationsRequest1(SdkBaseModel):
    description: Optional[str] = UNSET
    """The description field."""

    source_api_association_config: Optional[SourceApiAssociationConfig] = Field(
        default=UNSET, alias="sourceApiAssociationConfig"
    )


class V1MergedApisSourceApiAssociationsRequest1Dict(TypedDict):
    description: NotRequired[str]
    source_api_association_config: NotRequired[SourceApiAssociationConfigDict]
