from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contract_content_dto import ContractContentDto, ContractContentDtoDict


class PublicApiGetContractResponse(SdkBaseModel):
    contract: Optional[ContractContentDto] = UNSET


class PublicApiGetContractResponseDict(TypedDict):
    contract: NotRequired[ContractContentDtoDict]
