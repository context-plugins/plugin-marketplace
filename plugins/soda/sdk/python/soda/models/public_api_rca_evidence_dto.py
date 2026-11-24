from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_api_rca_resource_ref_dto import PublicApiRcaResourceRefDto, PublicApiRcaResourceRefDtoDict


class PublicApiRcaEvidenceDto(SdkBaseModel):
    kind: Optional[str] = UNSET
    resource: Optional[PublicApiRcaResourceRefDto] = UNSET
    text: Optional[str] = UNSET


class PublicApiRcaEvidenceDtoDict(TypedDict):
    kind: NotRequired[str]
    resource: NotRequired[PublicApiRcaResourceRefDtoDict]
    text: NotRequired[str]
