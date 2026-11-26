from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1WorkforceProofPublicKeyResponse(SdkBaseModel):
    public_key_pem: Optional[str] = UNSET
    key_id: Optional[str] = UNSET


class V1WorkforceProofPublicKeyResponseDict(TypedDict):
    public_key_pem: NotRequired[str]
    key_id: NotRequired[str]
