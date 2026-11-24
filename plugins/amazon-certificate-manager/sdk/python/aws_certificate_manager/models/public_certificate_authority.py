from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.allowed_key_algorithm import AllowedKeyAlgorithmOrStr


class PublicCertificateAuthority(SdkBaseModel):
    allowed_key_algorithms: Optional[list[AllowedKeyAlgorithmOrStr]] = Field(
        default=UNSET, alias="AllowedKeyAlgorithms"
    )
    """The key algorithms allowed for certificates issued by this certificate authority."""


class PublicCertificateAuthorityDict(TypedDict):
    allowed_key_algorithms: NotRequired[list[AllowedKeyAlgorithmOrStr]]
