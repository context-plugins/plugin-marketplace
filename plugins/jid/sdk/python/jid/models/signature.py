from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.alg import AlgOrStr
from .enums.canonicalization import CanonicalizationOrStr


class Signature(SdkBaseModel):
    alg: Optional[AlgOrStr] = UNSET
    kid: Optional[str] = UNSET
    canonicalization: Optional[CanonicalizationOrStr] = UNSET
    sig: Optional[str] = UNSET
    """base64url"""


class SignatureDict(TypedDict):
    alg: NotRequired[AlgOrStr]
    kid: NotRequired[str]
    canonicalization: NotRequired[CanonicalizationOrStr]
    sig: NotRequired[str]
