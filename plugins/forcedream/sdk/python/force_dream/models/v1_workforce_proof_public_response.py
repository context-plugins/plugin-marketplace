from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .fd_proof import FdProof, FdProofDict


class V1WorkforceProofPublicResponse(SdkBaseModel):
    proof: Optional[FdProof] = UNSET
    """The exact fields signed and verified. See x-forcedream-canonicalization for the precise reduced "signable" object
    this maps to -- it is not simply this whole object."""


class V1WorkforceProofPublicResponseDict(TypedDict):
    proof: NotRequired[FdProofDict]
