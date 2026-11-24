from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .chain_head import ChainHead, ChainHeadDict
from .enums.signature import SignatureOrStr


class ApiV1EvidenceVerifyResponse(SdkBaseModel):
    verified: bool
    """The digest recomputes and the signature is valid."""

    digest_valid: bool = Field(alias="digestValid")
    signature: SignatureOrStr
    """``unsigned``: the pack carries no signature. ``no_key``: it is signed but this deployment has no key to check it
    with. ``invalid``: the signature or key id does not match."""

    key_id: str | None = Field(alias="keyId")
    """The key the pack says it was signed with."""

    current_key_id: str | None = Field(alias="currentKeyId")
    """The key this deployment signs with now."""

    chain_head: ChainHead | None = Field(alias="chainHead")
    """The audit chain head the pack recorded when it was taken."""


class ApiV1EvidenceVerifyResponseDict(TypedDict):
    verified: bool
    digest_valid: bool
    signature: SignatureOrStr
    key_id: str | None
    current_key_id: str | None
    chain_head: ChainHeadDict | None
