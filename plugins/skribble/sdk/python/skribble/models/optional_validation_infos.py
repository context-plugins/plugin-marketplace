from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .format_infos_response import FormatInfosResponse, FormatInfosResponseDict
from .signer import Signer, SignerDict
from .validation_infos_response import ValidationInfosResponse, ValidationInfosResponseDict


class OptionalValidationInfos(SdkBaseModel):
    signer: Optional[list[Signer]] = UNSET
    format: Optional[FormatInfosResponse] = UNSET
    validation: Optional[ValidationInfosResponse] = UNSET


class OptionalValidationInfosDict(TypedDict):
    signer: NotRequired[list[SignerDict]]
    format: NotRequired[FormatInfosResponseDict]
    validation: NotRequired[ValidationInfosResponseDict]
