from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.source_api_association_status import SourceApiAssociationStatusOrStr


class DisassociateSourceGraphqlApiResponse(SdkBaseModel):
    source_api_association_status: Optional[SourceApiAssociationStatusOrStr] = Field(
        default=UNSET, alias="sourceApiAssociationStatus"
    )
    """The state of the source API association."""


class DisassociateSourceGraphqlApiResponseDict(TypedDict):
    source_api_association_status: NotRequired[SourceApiAssociationStatusOrStr]
