from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aes import Aes, AesDict
from .aes_minimal import AesMinimal, AesMinimalDict
from .qes import Qes, QesDict
from .ses import Ses, SesDict


class UserSignatureQualitiesResponse(SdkBaseModel):
    qes: Optional[Qes] = UNSET
    aes_minimal: Optional[AesMinimal] = UNSET
    """Best possible quality, but AES at a minimum."""

    aes: Optional[Aes] = UNSET
    ses: Optional[Ses] = UNSET


class UserSignatureQualitiesResponseDict(TypedDict):
    qes: NotRequired[QesDict]
    aes_minimal: NotRequired[AesMinimalDict]
    aes: NotRequired[AesDict]
    ses: NotRequired[SesDict]
